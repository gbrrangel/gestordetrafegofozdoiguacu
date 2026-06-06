(function () {
  "use strict";

  /* Sticky header shadow */
  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Mobile menu */
  var menuBtn = document.querySelector("[data-menu-button]");
  var nav = document.querySelector("[data-site-nav]");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var delay = e.target.getAttribute("data-delay") || 0;
            e.target.style.transitionDelay = delay + "ms";
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* Count-up stats */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var dur = 1500;
    var start = null;
    function fmt(v) {
      return v.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    }
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = fmt(target);
    }
    requestAnimationFrame(frame);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            animateCount(e.target);
            co.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) {
      co.observe(el);
    });
  } else {
    counters.forEach(function (el) {
      el.textContent = el.getAttribute("data-count");
    });
  }

  /* FAQ: animate height + single-open behaviour */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var answer = item.querySelector(".faq-answer");
    if (!answer) return;
    var summary = item.querySelector("summary");
    summary.addEventListener("click", function (ev) {
      ev.preventDefault();
      var isOpen = item.hasAttribute("open");
      if (isOpen) {
        answer.style.height = answer.scrollHeight + "px";
        requestAnimationFrame(function () {
          answer.style.height = "0px";
        });
        answer.addEventListener(
          "transitionend",
          function te() {
            item.removeAttribute("open");
            answer.style.height = "";
            answer.removeEventListener("transitionend", te);
          },
          { once: true }
        );
      } else {
        item.setAttribute("open", "");
        answer.style.height = "0px";
        requestAnimationFrame(function () {
          answer.style.height = answer.scrollHeight + "px";
        });
        answer.addEventListener(
          "transitionend",
          function te() {
            answer.style.height = "auto";
            answer.removeEventListener("transitionend", te);
          },
          { once: true }
        );
      }
    });
  });
  /* GTM dataLayer push on tracked links (port of original site.js) */
  var dataLayer = (window.dataLayer = window.dataLayer || []);
  document.querySelectorAll("[data-gtm]").forEach(function (el) {
    el.addEventListener("click", function () {
      dataLayer.push({
        event: el.dataset.gtm,
        event_category: el.dataset.eventCategory || "engajamento",
        event_label: el.dataset.eventLabel || window.location.pathname,
        link_url: el.href || "",
      });
    });
  });

  /* Lead form -> Worker endpoint */
  document.querySelectorAll("[data-lead-form]").forEach(function (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      var fd = new FormData(form);
      var lead = Object.fromEntries(fd.entries());
      var status = form.querySelector("[data-form-status]");
      var button = form.querySelector('button[type="submit"]');

      dataLayer.push({
        event: "lead_form_submit",
        event_category: "formulario",
        event_label: form.dataset.context || window.location.pathname,
        lead_segmento: lead.segmento || "",
        lead_cidade: lead.cidade || "",
        lead_investimento: lead.investimento || "",
      });

      if (button) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.textContent = "Enviando...";
      }
      if (status) status.textContent = "Enviando suas informações com segurança...";

      try {
        var response = await fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            nome: lead.nome || "",
            whatsapp: lead.whatsapp || "",
            segmento: lead.segmento || "",
            cidade: lead.cidade || "",
            investimento: lead.investimento || "",
            desafio: lead.desafio || "",
            website: lead.website || "",
            context: form.dataset.context || window.location.pathname,
            page: window.location.href,
          }),
        });
        var payload = await response.json().catch(function () {
          return {};
        });
        if (!response.ok || !payload.ok) throw new Error(payload.error || "Nao foi possivel enviar.");

        dataLayer.push({
          event: "lead_form_success",
          event_category: "formulario",
          event_label: form.dataset.context || window.location.pathname,
          lead_segmento: lead.segmento || "",
          lead_cidade: lead.cidade || "",
          lead_investimento: lead.investimento || "",
        });
        form.reset();
        if (status) status.textContent = "Recebemos seu pedido de diagnóstico. Em breve entraremos em contato.";
      } catch (error) {
        dataLayer.push({
          event: "lead_form_error",
          event_category: "formulario",
          event_label: form.dataset.context || window.location.pathname,
          error_message: error && error.message ? error.message : "erro_desconhecido",
        });
        if (status) status.textContent = "Nao foi possivel enviar agora. Tente novamente ou chame pelo WhatsApp.";
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = button.dataset.originalText || "Enviar diagnóstico";
        }
      }
    });
  });

  /* Footer year */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
