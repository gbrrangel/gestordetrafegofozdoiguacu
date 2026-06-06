const RECIPIENT_EMAIL = "contato@gabriads.com";
const SITE_NAME = "Gestor de Trafego Foz do Iguacu";

const REQUIRED_FIELDS = ["nome", "email", "whatsapp", "investimento"];

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...(init.headers || {}),
    },
  });
}

function clean(value, maxLength = 1000) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return false;
  const domain = email.split("@")[1] || "";
  const blockedDomains = ["teste.com", "test.com", "example.com", "example.com.br", "email.com", "fake.com", "mailinator.com"];
  return !blockedDomains.includes(domain);
}

function isValidPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (/^(\d)\1+$/.test(digits)) return false;
  if (digits.includes("123456789") || digits.includes("987654321")) return false;
  if ("01234567890123456789".includes(digits) || "98765432109876543210".includes(digits)) return false;
  const national = digits.startsWith("55") ? digits.slice(2) : digits;
  if (!(national.length === 10 || national.length === 11)) return false;
  const ddd = Number(national.slice(0, 2));
  if (ddd < 11 || ddd > 99) return false;
  return national.length === 10 || national[2] === "9";
}

function formatLeadHtml(lead) {
  const rows = [
    ["Nome", lead.nome],
    ["Email", lead.email],
    ["WhatsApp", lead.whatsapp],
    ["Segmento", lead.segmento],
    ["Cidade", lead.cidade],
    ["Investimento mensal", lead.investimento],
    ["Desafio", lead.desafio],
    ["Pagina", lead.page],
    ["Contexto", lead.context],
    ["Data", lead.createdAt],
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
      <h1 style="font-size:20px;margin:0 0 16px">Novo diagnostico pelo site</h1>
      <p>Uma nova pessoa preencheu o formulario do site ${SITE_NAME}.</p>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:680px">
        ${rows
          .map(
            ([label, value]) => `<tr>
              <th align="left" style="border:1px solid #ddd;background:#f7f7f7;width:180px">${escapeHtml(label)}</th>
              <td style="border:1px solid #ddd">${escapeHtml(value || "-")}</td>
            </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;
}

function formatLeadText(lead) {
  return [
    "Novo diagnostico pelo site",
    "",
    `Nome: ${lead.nome}`,
    `Email: ${lead.email}`,
    `WhatsApp: ${lead.whatsapp}`,
    `Segmento: ${lead.segmento}`,
    `Cidade: ${lead.cidade}`,
    `Investimento mensal: ${lead.investimento}`,
    `Desafio: ${lead.desafio}`,
    `Pagina: ${lead.page}`,
    `Contexto: ${lead.context}`,
    `Data: ${lead.createdAt}`,
  ].join("\n");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function readLead(request) {
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return request.json();
  }

  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

function normalizeLead(input) {
  return {
    nome: clean(input.nome, 120),
    email: clean(input.email, 180),
    whatsapp: clean(input.whatsapp, 60),
    segmento: clean(input.segmento, 120),
    cidade: clean(input.cidade, 120),
    investimento: clean(input.investimento, 120),
    desafio: clean(input.desafio, 1400),
    website: clean(input.website, 120),
    context: clean(input.context, 160),
    page: clean(input.page, 500),
    createdAt: new Date().toISOString(),
  };
}

function validateLead(lead) {
  if (lead.website) return { ok: false, status: 204, error: "spam" };

  const missing = REQUIRED_FIELDS.filter((field) => !lead[field]);
  if (missing.length) {
    return { ok: false, status: 400, error: `Campos obrigatorios ausentes: ${missing.join(", ")}` };
  }

  if (!isValidEmail(lead.email)) {
    return { ok: false, status: 400, error: "Email invalido." };
  }

  if (!isValidPhone(lead.whatsapp)) {
    return { ok: false, status: 400, error: "WhatsApp invalido. Informe o telefone com DDD." };
  }

  return { ok: true };
}

async function sendWithResend(env, lead) {
  if (!env.RESEND_API_KEY) {
    return { ok: false, status: 503, error: "RESEND_API_KEY nao configurada no Cloudflare." };
  }

  const from = env.LEAD_EMAIL_FROM || "Site <leads@gestordetrafegofozdoiguacu.com.br>";
  const subject = `Novo diagnostico pelo site - ${lead.nome}`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [RECIPIENT_EMAIL],
      subject,
      html: formatLeadHtml(lead),
      text: formatLeadText(lead),
    }),
  });

  if (!response.ok) {
    return { ok: false, status: 502, error: "Nao foi possivel enviar agora. Tente novamente ou chame pelo WhatsApp." };
  }

  return { ok: true };
}

async function handleLead(request, env) {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Metodo nao permitido." }, { status: 405, headers: { allow: "POST" } });
  }

  let rawLead;
  try {
    rawLead = await readLead(request);
  } catch {
    return json({ ok: false, error: "Payload invalido." }, { status: 400 });
  }

  const lead = normalizeLead(rawLead || {});
  const validation = validateLead(lead);
  if (!validation.ok) {
    if (validation.status === 204) return new Response(null, { status: 204 });
    return json({ ok: false, error: validation.error }, { status: validation.status });
  }

  const sent = await sendWithResend(env, lead);
  if (!sent.ok) return json({ ok: false, error: sent.error }, { status: sent.status || 500 });

  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/lead") {
      return handleLead(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
