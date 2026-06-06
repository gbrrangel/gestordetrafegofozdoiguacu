import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const siteUrl = "https://gestordetrafegofozdoiguacu.com.br";
const brand = "Gestor de Tráfego Foz do Iguaçu";
const whatsappNumber = "5545999046673";
const contactEmail = "contato@gabriads.com";
const whatsappMessage =
  "Olá, vim pelo site Gestor de Tráfego Foz do Iguaçu e quero um diagnóstico para minha empresa. Meu segmento é: ";

const nav = [
  ["Serviços", "/servicos"],
  ["Nichos", "/nichos"],
  ["Consultoria", "/consultoria"],
  ["Blog", "/blog"],
  ["Contato", "/contato"],
];

const services = [
  {
    title: "Gestão de tráfego pago",
    href: "/servicos/gestao-de-trafego-pago",
    text: "Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, Pinterest Ads e outras plataformas conforme o objetivo comercial.",
  },
  {
    title: "Rastreamento e conversão",
    href: "/servicos/rastreamento-e-conversao",
    text: "Configuração de eventos, UTMs, pixels, tags e conversões para medir oportunidades, vendas e faturamento.",
  },
  {
    title: "Criação de contas",
    href: "/servicos/criacao-de-contas",
    text: "Estruturação ou organização de contas de anúncio, gerenciadores, acessos, pixels e integrações essenciais.",
  },
  {
    title: "Sites, blogs e landing pages",
    href: "/servicos/landing-pages-foz-do-iguacu",
    text: "Páginas rápidas, blogs e landing pages pensados para SEO, campanhas, conversão e rastreamento.",
  },
  {
    title: "Consultoria",
    href: "/consultoria",
    text: "Análise externa da operação de tráfego, estratégia e processo comercial com plano de melhoria orientado.",
  },
];

const niches = [
  {
    title: "Turismo",
    href: "/nichos/turismo-foz-do-iguacu",
    text: "Hotéis, pousadas, agências, passeios, transportes e experiências que dependem de demanda local e turística.",
  },
  {
    title: "Restaurantes",
    href: "/nichos/restaurantes-foz-do-iguacu",
    text: "Campanhas para reservas, fluxo local, cardápio, datas especiais e descoberta por turistas e moradores.",
  },
  {
    title: "Delivery",
    href: "/nichos/delivery-foz-do-iguacu",
    text: "Estratégias para pedidos recorrentes, ofertas locais, remarketing e campanhas por raio de atendimento.",
  },
  {
    title: "Advogados",
    href: "/nichos/trafego-pago-para-advogados-foz-do-iguacu",
    text: "Marketing jurídico com comunicação ética, informativa e orientada para contatos qualificados.",
  },
  {
    title: "Profissionais da saúde",
    href: "/nichos/profissionais-da-saude-foz-do-iguacu",
    text: "Campanhas para clínicas, consultórios e profissionais que precisam gerar agendamentos com responsabilidade.",
  },
  {
    title: "Prestadores de serviço",
    href: "/nichos/prestadores-de-servico-foz-do-iguacu",
    text: "Mudança, limpeza de ar-condicionado, limpeza de sofás, jardinagem, reboque, guincho e outros serviços locais.",
  },
];

const posts = [
  {
    slug: "/blog/como-escolher-gestor-de-trafego-em-foz-do-iguacu",
    title: "Como escolher um gestor de tráfego em Foz do Iguaçu",
    description:
      "Veja como escolher um gestor de tráfego em Foz do Iguaçu sem cair em promessas vazias. Entenda critérios, riscos e perguntas antes de contratar.",
    cta: "Solicitar diagnóstico gratuito",
    body: [
      ["p", "Escolher um gestor de tráfego em Foz do Iguaçu não deve ser uma decisão baseada apenas em preço ou promessa de resultado rápido. O profissional certo precisa entender mídia paga, mas também oferta, funil, WhatsApp, rastreamento e qualidade dos leads."],
      ["p", "Tráfego pago não resolve sozinho um negócio com oferta confusa, atendimento lento ou página ruim. O gestor precisa olhar para anúncio, clique, página, contato, atendimento e venda."],
      ["h2", "O que avaliar antes de contratar"],
      ["table", [["Critério", "O que observar"], ["Diagnóstico inicial", "O profissional entende seu negócio antes de sugerir campanha?"], ["Clareza de métricas", "Ele fala de CPL, taxa de conversão e qualidade do lead?"], ["Rastreamento", "Existe plano para medir WhatsApp, formulário e origem dos contatos?"], ["Estratégia de canal", "Ele explica quando usar Google Ads, Meta Ads ou ambos?"], ["Transparência", "Você terá acesso aos dados e entenderá o que está sendo feito?"]]],
      ["h2", "Perguntas que você deve fazer"],
      ["p", "Pergunte como será medido o resultado, se as campanhas ficarão em uma conta sua, como serão apresentados os relatórios e qual será o plano para os primeiros 30 dias."],
      ["h2", "Sinais de alerta"],
      ["p", "Desconfie de promessas de primeiro lugar, vendas garantidas ou resultados sem conhecer sua empresa. Também é arriscado contratar alguém que fala só em alcance, curtidas e cliques, sem abordar conversão e rastreamento."],
      ["p", "O melhor gestor de tráfego é o que consegue transformar verba de mídia em aprendizado, leads qualificados e decisões melhores."],
    ],
  },
  {
    slug: "/blog/quanto-custa-trafego-pago-em-foz-do-iguacu",
    title: "Quanto custa contratar tráfego pago em Foz do Iguaçu?",
    description:
      "Entenda quanto custa contratar tráfego pago em Foz do Iguaçu, como separar verba de mídia e gestão, e quando o investimento começa a fazer sentido.",
    cta: "Pedir análise de investimento",
    body: [
      ["p", "O custo de tráfego pago em Foz do Iguaçu depende de dois componentes principais: a verba investida nas plataformas e o valor da gestão estratégica."],
      ["h2", "Verba de mídia não é o mesmo que gestão"],
      ["table", [["Item", "Para que serve"], ["Verba de mídia", "Compra cliques, impressões e oportunidades de contato."], ["Gestão", "Define estratégia, configura campanhas, analisa dados e otimiza resultados."], ["Landing page", "Melhora a conversão dos cliques em leads."], ["Rastreamento", "Mostra quais campanhas geram contatos e oportunidades."]]],
      ["h2", "Existe investimento mínimo?"],
      ["p", "Existe um mínimo prático porque campanhas precisam de dados. Se a verba é baixa demais, qualquer conclusão fica frágil."],
      ["h2", "Como saber se vale a pena?"],
      ["p", "A conta não deve ser feita apenas pelo custo por lead. O que importa é o custo por oportunidade e o custo por cliente."],
    ],
  },
  {
    slug: "/blog/google-ads-ou-meta-ads-foz-do-iguacu",
    title: "Google Ads ou Meta Ads: o que funciona melhor em Foz do Iguaçu?",
    description:
      "Entenda quando usar Google Ads ou Meta Ads em Foz do Iguaçu para gerar leads, conversas no WhatsApp, reservas e vendas locais.",
    cta: "Descobrir melhor canal para meu negócio",
    body: [
      ["p", "A resposta curta é: depende da intenção do seu cliente. Google Ads captura pessoas que já estão procurando. Meta Ads ajuda a gerar demanda, despertar interesse e reimpactar públicos."],
      ["h2", "Quando priorizar Google Ads"],
      ["p", "Google Ads deve ser prioridade quando existe demanda ativa, como buscas por serviços locais, turismo, saúde, advocacia ou soluções com urgência."],
      ["table", [["Cenário", "Canal mais indicado"], ["Pessoa já pesquisa pelo serviço", "Google Ads"], ["Serviço tem urgência", "Google Ads"], ["Oferta precisa ser descoberta", "Meta Ads"], ["Produto visual ou turístico", "Meta Ads e Google Ads combinados"], ["Público já visitou o site", "Remarketing no Meta e Google"]]],
      ["h2", "Quando priorizar Meta Ads"],
      ["p", "Meta Ads é forte quando a oferta precisa aparecer antes da busca, especialmente em restaurantes, experiências turísticas, eventos, estética, clínicas e campanhas de relacionamento."],
      ["h2", "O melhor cenário"],
      ["p", "Muitos negócios combinam Google Ads para intenção ativa e Meta Ads para geração de demanda e remarketing. O erro é dividir verba pequena demais em canais demais."],
    ],
  },
  {
    slug: "/blog/trafego-pago-para-advogados-em-foz-do-iguacu",
    title: "Tráfego pago para advogados em Foz do Iguaçu: como fazer com ética",
    description:
      "Veja como advogados em Foz do Iguaçu podem usar tráfego pago com comunicação informativa, ética e focada em autoridade, sem promessas indevidas.",
    cta: "Solicitar diagnóstico jurídico",
    body: [
      ["p", "Advogados podem usar tráfego pago, mas a comunicação jurídica deve ser sóbria, informativa e responsável. O objetivo não é prometer resultado nem explorar dor de forma apelativa."],
      ["h2", "O que evitar"],
      ["table", [["Não recomendado", "Melhor abordagem"], ["Ganhe sua ação trabalhista", "Entenda quando buscar orientação em direito trabalhista."], ["O melhor advogado de Foz", "Atuação em direito de família em Foz do Iguaçu."], ["Resultado garantido", "Cada caso depende de análise individual."], ["Clique e processe agora", "Solicite uma análise inicial do seu caso."]]],
      ["h2", "Estratégias mais seguras"],
      ["p", "Uma estratégia mais segura usa conteúdos informativos, páginas por área de atuação, linguagem clara e CTA para análise inicial."],
      ["p", "A qualidade do lead importa mais que volume, especialmente para escritórios que precisam respeitar limites éticos e filtrar demandas com cuidado."],
    ],
  },
  {
    slug: "/blog/erros-que-fazem-leads-do-whatsapp-nao-virarem-clientes",
    title: "7 erros que fazem leads do WhatsApp não virarem clientes",
    description:
      "Recebe leads no WhatsApp, mas vende pouco? Veja erros de atendimento, oferta, velocidade e rastreamento que reduzem a conversão.",
    cta: "Analisar meu funil de WhatsApp",
    body: [
      ["p", "Muitas empresas culpam o tráfego pago quando os leads não viram clientes. Em muitos casos, o gargalo está no atendimento, na oferta ou no processo depois que o lead chama no WhatsApp."],
      ["h2", "1. Demorar para responder"],
      ["p", "Quanto mais tempo o lead espera, maior a chance de falar com concorrentes ou perder interesse."],
      ["h2", "2. Não qualificar o contato"],
      ["p", "Perguntas simples sobre serviço, prazo, cidade e necessidade ajudam a separar curiosos de oportunidades reais."],
      ["h2", "3. Mandar mensagem genérica"],
      ["p", "O atendimento precisa continuar o assunto que trouxe o lead, não responder todos os contatos com o mesmo texto."],
      ["h2", "4. Não registrar origem"],
      ["p", "Sem origem, fica impossível saber se o lead veio do Google, Instagram, campanha específica ou indicação."],
      ["h2", "5. Depender só de áudio"],
      ["p", "Mensagens escritas, objetivas e bem estruturadas facilitam a decisão de quem não pode ouvir áudio na hora."],
      ["h2", "6. Não ter follow-up"],
      ["p", "Um processo simples de retorno em 24 horas, 3 dias e 7 dias pode recuperar oportunidades."],
      ["h2", "7. Medir apenas quantidade"],
      ["p", "Volume sem qualidade engana. O correto é analisar quantos leads eram qualificados, receberam proposta e fecharam."],
    ],
  },
  {
    slug: "/blog/trafego-pago-para-hoteis-turismo-restaurantes-foz",
    title: "Tráfego pago para hotéis, turismo e restaurantes em Foz do Iguaçu",
    description:
      "Estratégias de tráfego pago para hotéis, turismo e restaurantes em Foz do Iguaçu gerarem reservas, visitas e contatos pelo WhatsApp.",
    cta: "Avaliar campanha para turismo",
    body: [
      ["p", "Foz do Iguaçu é um dos destinos mais conhecidos do Brasil, com forte presença de turismo, hotelaria, gastronomia, transporte e experiências locais."],
      ["h2", "Estratégias por segmento"],
      ["table", [["Segmento", "Oportunidade"], ["Hotéis e pousadas", "Campanhas para reservas, diferenciais e remarketing."], ["Restaurantes", "Busca local, ofertas, datas comemorativas e localização."], ["Agências de turismo", "Passeios, combos, experiências e atendimento rápido."], ["Transporte", "Transfer, aeroporto, Paraguai, Argentina e roteiros."], ["Atrativos e experiências", "Criativos visuais e campanhas por interesse."]]],
      ["h2", "Google Ads no turismo"],
      ["p", "Google Ads captura intenção direta em pesquisas por hospedagem, restaurantes, transfers e passeios."],
      ["h2", "Meta Ads no turismo"],
      ["p", "Meta Ads funciona bem para inspirar, apresentar ofertas e fazer remarketing com fotos, vídeos e mensagens claras."],
    ],
  },
  {
    slug: "/blog/landing-page-para-negocios-locais-em-foz-do-iguacu",
    title: "Landing page para negócios locais em Foz do Iguaçu: o que precisa ter",
    description:
      "Veja o que uma landing page para negócios locais em Foz do Iguaçu precisa ter para converter cliques de anúncios em leads e WhatsApp.",
    cta: "Analisar minha página",
    body: [
      ["p", "Uma landing page local precisa responder rapidamente três perguntas: o que você oferece, por que o visitante deve confiar e como ele entra em contato."],
      ["h2", "Estrutura recomendada"],
      ["table", [["Bloco", "Objetivo"], ["Hero", "Mostrar oferta, cidade e CTA."], ["Problema", "Conectar com a dor do usuário."], ["Solução", "Explicar serviço de forma objetiva."], ["Prova", "Mostrar experiência, depoimentos ou diferenciais."], ["Processo", "Reduzir incerteza sobre próximos passos."], ["FAQ", "Responder dúvidas antes do contato."], ["CTA final", "Levar para WhatsApp ou formulário."]]],
      ["h2", "Erros comuns"],
      ["p", "Usar uma página institucional genérica, esconder o botão de WhatsApp ou pedir informações demais no formulário reduz a conversão."],
      ["h2", "O papel do mobile"],
      ["p", "Grande parte dos acessos de campanhas vem do celular. A página precisa carregar rápido, ter textos escaneáveis e botões fáceis de clicar."],
    ],
  },
  {
    slug: "/blog/como-rastrear-leads-de-trafego-pago",
    title: "Como rastrear leads de tráfego pago e saber quais campanhas vendem",
    description:
      "Aprenda como rastrear leads de tráfego pago usando UTMs, eventos, WhatsApp e CRM simples para entender quais campanhas geram oportunidades.",
    cta: "Solicitar análise de rastreamento",
    body: [
      ["p", "Rastrear leads é uma das partes mais importantes do tráfego pago. Sem isso, a empresa sabe que recebeu contatos, mas não sabe de onde vieram e quais campanhas atraíram leads melhores."],
      ["h2", "O que são UTMs"],
      ["p", "UTMs são parâmetros adicionados aos links para identificar origem, mídia, campanha e anúncio."],
      ["table", [["Parâmetro", "Exemplo de uso"], ["utm_source", "google, facebook, instagram"], ["utm_medium", "cpc, paid_social, organic"], ["utm_campaign", "google_servicos_foz"], ["utm_content", "anuncio_01, criativo_video"], ["utm_term", "palavra-chave em campanhas de busca"]]],
      ["h2", "Eventos importantes"],
      ["p", "Clique no WhatsApp, envio de formulário, ligação e visualização de página-chave são eventos úteis para análise."],
      ["h2", "Qualidade do lead"],
      ["p", "A equipe comercial precisa registrar se o lead era qualificado, recebeu proposta, fechou ou foi perdido."],
    ],
  },
];

const pages = [
  {
    slug: "/",
    type: "home",
    title: "Gestor de Tráfego em Foz do Iguaçu | Google Ads e Meta Ads",
    description:
      "Precisa de um gestor de tráfego em Foz do Iguaçu? Crie campanhas no Google Ads, Meta Ads e outras plataformas com foco em leads, vendas e conversão.",
    h1: "Gestor de tráfego em Foz do Iguaçu para empresas que querem gerar leads com mais previsibilidade",
    intro:
      "Se sua empresa em Foz do Iguaçu precisa de mais clientes, o problema não é simplesmente fazer anúncio. O que gera resultado é ter estratégia clara, campanhas bem segmentadas, página ou WhatsApp preparados para converter e rastreamento correto.",
    sections: [
      ["Tráfego pago para negócios de Foz do Iguaçu que precisam vender, agendar ou receber contatos todos os dias", "Foz do Iguaçu combina turismo, serviços, comércio, negócios locais e uma posição estratégica na tríplice fronteira. A campanha certa precisa considerar localização, intenção de busca, sazonalidade, público regional e comportamento de quem pesquisa antes de contratar."],
      ["O erro que faz muitas empresas perderem dinheiro com anúncios", "A maioria das campanhas ruins não falha porque Google ou Instagram não funcionam. Elas falham porque foram montadas sem clareza de oferta, sem rastreamento, sem uma página convincente e sem análise da qualidade do lead."],
      ["Como estruturamos campanhas para gerar leads qualificados", "O trabalho segue uma lógica prática: diagnóstico, estrutura, rastreamento, otimização e relatório. Sem isso, tráfego pago vira aposta."],
    ],
    faq: [
      ["Quanto custa contratar um gestor de tráfego em Foz do Iguaçu?", "O custo depende do escopo, quantidade de campanhas, canais, necessidade de landing page e nível de acompanhamento. Também é preciso considerar a verba de mídia paga diretamente às plataformas."],
      ["Vocês atendem empresas de Foz do Iguaçu remotamente?", "Sim. O atendimento pode ser remoto, com reuniões online, acompanhamento por WhatsApp e relatórios objetivos."],
      ["Google Ads ou Instagram Ads: qual é melhor?", "Depende da intenção. Google Ads costuma funcionar melhor quando já existe busca ativa; Meta Ads é forte para gerar demanda, remarketing e iniciar conversas."],
      ["Em quanto tempo começo a receber leads?", "Campanhas podem gerar contatos nos primeiros dias, mas otimização real exige dados. As primeiras semanas validam palavras-chave, públicos, criativos, página e qualidade dos leads."],
      ["Vocês garantem resultado?", "Não. Resultado depende de oferta, atendimento, preço, reputação, concorrência e mercado. O compromisso é estruturar, medir e otimizar com base em dados."],
    ],
  },
  {
    slug: "/sobre",
    title: "Sobre o Projeto | Gestão de Tráfego para Foz do Iguaçu",
    description:
      "Conheça o projeto Gestor de Tráfego Foz do Iguaçu, especializado em Google Ads, Meta Ads, leads, vendas e conversão.",
    h1: "Sobre o projeto Gestor de Tráfego Foz do Iguaçu",
    intro:
      "O Gestor de Tráfego Foz do Iguaçu foi criado para ajudar empresas da cidade e região a anunciarem com clareza, rastreamento e foco em conversão.",
    sections: [
      ["Por que criar um site específico para Foz do Iguaçu?", "Porque buscas locais têm intenção forte. Quem pesquisa por gestor de tráfego em Foz do Iguaçu normalmente quer encontrar alguém que ajude sua empresa a atrair mais clientes."],
      ["Nossa forma de trabalhar", "Antes de investir mais dinheiro em mídia, é preciso entender se a oferta está clara, se a campanha está bem segmentada, se a página convence e se o WhatsApp está preparado para vender."],
      ["Para quem fazemos sentido", "Atendemos negócios locais, profissionais liberais, advogados, clínicas, prestadores de serviço, turismo, hotelaria, restaurantes e projetos digitais."],
    ],
  },
  {
    slug: "/servicos",
    title: "Serviços de Tráfego Pago, Rastreamento e Sites em Foz do Iguaçu",
    description:
      "Conheça serviços de gestão de tráfego pago, rastreamento, criação de contas, sites, blogs, landing pages e consultoria.",
    h1: "Serviços para empresas que querem vender mais com mídia paga, sites e dados",
    intro:
      "A estratégia de crescimento não depende apenas de subir anúncios. Em muitos negócios, o resultado vem da combinação entre gestão de tráfego, estrutura correta de contas, rastreamento confiável, páginas preparadas para conversão e análise comercial.",
    sections: [
      ["Gestão, estrutura e orientação", "Os serviços podem funcionar juntos ou separadamente, conforme o momento da empresa. Para algumas operações, a prioridade é gestão completa de tráfego. Para outras, o primeiro passo é arrumar contas, tags, site, landing page ou estratégia."],
      ["Como escolhemos o caminho certo", "Antes de recomendar uma solução, olhamos para oferta, canais, orçamento, maturidade da operação, processo comercial, site atual e capacidade de atendimento. Assim evitamos vender gestão quando o problema real está na estrutura ou vender página quando o gargalo está na campanha."],
    ],
    cards: services,
  },
  {
    slug: "/servicos/gestao-de-trafego-pago",
    title: "Gestão de Tráfego Pago em Google Ads, Meta Ads e Outras Plataformas",
    description:
      "Gestão de tráfego pago para Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, Pinterest Ads e outras plataformas com foco em performance.",
    h1: "Gestão de tráfego pago para empresas que precisam de acompanhamento completo",
    intro:
      "A gestão de tráfego é o serviço em que colocamos a mão na massa: planejamos campanhas, configuramos canais, acompanhamos indicadores, fazemos ajustes e conduzimos a evolução da operação com base em dados.",
    sections: [
      ["Plataformas atendidas", "Trabalhamos com Google Ads, Meta Ads e outras plataformas como TikTok Ads, LinkedIn Ads e Pinterest Ads quando elas fazem sentido para o público, ticket, oferta e jornada de compra."],
      ["O que entra na gestão", "Planejamento de campanhas, estruturação de públicos e palavras-chave, orientação de criativos, ajustes de orçamento, análise de termos, otimização por conversão e leitura de qualidade das oportunidades."],
      ["Para quem faz sentido", "É indicada para empresas que querem acompanhamento contínuo e não querem depender apenas de orientações soltas. Na gestão, a operação é acompanhada de perto e ajustada conforme os dados aparecem."],
    ],
  },
  {
    slug: "/servicos/criacao-de-contas",
    title: "Criação e Organização de Contas de Anúncio",
    description:
      "Serviço de criação e organização de contas de anúncio, gerenciadores, pixels, acessos e integrações para tráfego pago.",
    h1: "Criação e organização de contas para anunciar com estrutura correta",
    intro:
      "Muitas empresas começam a anunciar com contas improvisadas, acessos confusos ou pixels instalados de forma incompleta. Isso cria risco operacional e dificulta medir resultados.",
    sections: [
      ["O que pode ser configurado", "Contas de anúncio, gerenciadores, permissões de acesso, pixels, tags, conversões, integrações básicas, UTMs e organização mínima para que a operação seja mais segura."],
      ["Quando contratar", "Esse serviço faz sentido para empresas que vão começar a anunciar, trocaram de fornecedor, perderam acesso, têm contas bagunçadas ou precisam preparar a base antes da gestão."],
      ["Por que isso importa", "Uma conta mal configurada pode comprometer mensuração, segurança, aprendizado das campanhas e continuidade da operação. A estrutura correta evita retrabalho."],
    ],
  },
  {
    slug: "/nichos",
    title: "Nichos Atendidos em Tráfego Pago | Foz do Iguaçu",
    description:
      "Veja os principais nichos atendidos em tráfego pago: turismo, restaurantes, delivery, advogados, saúde e prestadores de serviço.",
    h1: "Nichos que atendemos com estratégias de tráfego pago e conversão",
    intro:
      "Cada segmento tem uma jornada de compra diferente. Por isso, uma campanha para turismo não deve ser pensada da mesma forma que uma campanha para advocacia, saúde, delivery ou serviços locais.",
    sections: [
      ["Estratégia por realidade de mercado", "A escolha de canais, criativos, páginas, orçamento e métricas muda conforme o nicho. Alguns negócios dependem de busca ativa; outros precisam gerar desejo, recorrência, reservas, pedidos ou agendamentos."],
      ["Clique no seu nicho para aprofundar", "Abaixo estão as principais especialidades atendidas. Cada página explica oportunidades, cuidados e estratégias possíveis para aquele tipo de negócio."],
    ],
    cards: niches,
  },
  {
    slug: "/nichos/turismo-foz-do-iguacu",
    title: "Tráfego Pago para Turismo em Foz do Iguaçu",
    description:
      "Estratégias de tráfego pago para turismo em Foz do Iguaçu, incluindo passeios, hotéis, transporte, experiências e reservas.",
    h1: "Tráfego pago para turismo em Foz do Iguaçu",
    intro:
      "Negócios de turismo precisam aparecer em diferentes momentos: antes da viagem, durante o planejamento, quando o visitante já está na cidade e quando compara opções de passeio, transporte ou hospedagem.",
    sections: [
      ["Oportunidades no turismo", "Campanhas para passeios, hotéis, pousadas, transporte turístico, experiências locais, agências, atrativos e serviços relacionados à viagem."],
      ["Canais possíveis", "Google Ads ajuda a capturar intenção direta. Meta Ads, TikTok Ads e remarketing podem inspirar, reimpactar e estimular decisão. O canal depende da oferta e do momento do visitante."],
      ["Medição da jornada", "A decisão pode passar por anúncio, site, WhatsApp, ligação e plataforma de reserva. Por isso, rastreamento e UTMs ajudam a entender quais canais influenciam a venda."],
    ],
  },
  {
    slug: "/nichos/restaurantes-foz-do-iguacu",
    title: "Tráfego Pago para Restaurantes em Foz do Iguaçu",
    description:
      "Campanhas de tráfego pago para restaurantes em Foz do Iguaçu com foco em fluxo, reservas, cardápio, WhatsApp e turistas.",
    h1: "Tráfego pago para restaurantes em Foz do Iguaçu",
    intro:
      "Restaurantes em Foz do Iguaçu podem anunciar para moradores, turistas, datas especiais, horários de maior intenção e pessoas procurando onde comer na cidade.",
    sections: [
      ["Estratégias possíveis", "Campanhas por localização, busca local, criativos de pratos, divulgação de cardápio, reservas, datas comemorativas e remarketing para quem já interagiu."],
      ["Turistas e moradores", "A mensagem muda conforme o público. Turistas valorizam localização, experiência e facilidade. Moradores podem responder melhor a recorrência, ofertas e diferenciais do restaurante."],
      ["Métricas importantes", "Além de cliques, vale observar chamadas, rotas, reservas, mensagens, visitas ao cardápio e impacto em dias e horários estratégicos."],
    ],
  },
  {
    slug: "/nichos/delivery-foz-do-iguacu",
    title: "Tráfego Pago para Delivery em Foz do Iguaçu",
    description:
      "Estratégias de tráfego pago para delivery em Foz do Iguaçu com foco em pedidos, recorrência, ofertas locais e remarketing.",
    h1: "Tráfego pago para delivery em Foz do Iguaçu",
    intro:
      "Delivery depende de velocidade, raio de atendimento, oferta clara e recorrência. A campanha precisa estimular pedido, mas também ajudar o negócio a entender quais ações geram clientes que voltam.",
    sections: [
      ["Campanhas por raio e horário", "Anúncios podem priorizar bairros, horários de maior demanda, combos, ofertas de primeira compra e públicos que já compraram ou interagiram."],
      ["Pedido direto ou plataforma", "A estratégia muda se o objetivo é levar para WhatsApp, site próprio, aplicativo ou marketplace. Cada caminho precisa de rastreamento e mensagem adequada."],
      ["Recorrência importa", "Nem todo resultado deve ser medido só no primeiro pedido. Delivery forte acompanha recompra, ticket médio, custo por pedido e frequência."],
    ],
  },
  {
    slug: "/nichos/profissionais-da-saude-foz-do-iguacu",
    title: "Tráfego Pago para Profissionais da Saúde em Foz do Iguaçu",
    description:
      "Campanhas para profissionais da saúde em Foz do Iguaçu com comunicação responsável, agendamentos e rastreamento.",
    h1: "Tráfego pago para profissionais da saúde em Foz do Iguaçu",
    intro:
      "Clínicas, consultórios e profissionais da saúde precisam de uma comunicação clara, responsável e compatível com as regras do setor. O foco é facilitar agendamentos e informar sem prometer resultados indevidos.",
    sections: [
      ["Possíveis objetivos", "Agendamentos, apresentação de especialidades, divulgação de serviços permitidos, campanhas locais, remarketing e páginas informativas."],
      ["Cuidados de comunicação", "A campanha deve evitar promessas, sensacionalismo e linguagem inadequada. A confiança vem de clareza, autoridade e orientação responsável."],
      ["Estrutura de conversão", "Página objetiva, formulário simples, WhatsApp preparado e rastreamento de origem ajudam a entender quais campanhas geram contatos com perfil adequado."],
    ],
  },
  {
    slug: "/nichos/prestadores-de-servico-foz-do-iguacu",
    title: "Tráfego Pago para Prestadores de Serviço em Foz do Iguaçu",
    description:
      "Tráfego pago para mudança, limpeza de ar-condicionado, limpeza de sofá, jardinagem, reboque, guincho e serviços locais.",
    h1: "Tráfego pago para prestadores de serviço em Foz do Iguaçu",
    intro:
      "Prestadores de serviço costumam depender de intenção imediata: alguém precisa resolver um problema, comparar opções e falar rápido com quem atende a região.",
    sections: [
      ["Serviços que podem anunciar", "Mudança, limpeza de ar-condicionado, limpeza de sofás, jardinagem, reboque, guincho, manutenção, instalação e outros serviços locais."],
      ["Google Ads e urgência", "Quando existe busca ativa, Google Ads costuma ser forte para capturar pessoas procurando solução agora. A campanha precisa evitar termos ruins e direcionar para contato rápido."],
      ["WhatsApp, ligação e orçamento", "O funil geralmente passa por orçamento. Por isso, velocidade de resposta, perguntas de qualificação e registro da origem do contato fazem diferença."],
    ],
  },
  {
    slug: "/blog",
    title: "Blog sobre Tráfego Pago, SEO Local e Conversão",
    description:
      "Leia conteúdos sobre tráfego pago, Google Ads, Meta Ads, WhatsApp, landing pages, rastreamento e estratégias para negócios locais.",
    h1: "Blog sobre tráfego pago, conversão e crescimento para negócios locais",
    intro:
      "Aqui você encontra conteúdos para entender melhor como escolher canais, avaliar investimento, melhorar páginas, rastrear leads e tomar decisões mais claras antes de contratar ou escalar campanhas.",
    sections: [
      ["Escolha um tema para ler", "Os posts estão organizados para ajudar empresas em diferentes momentos: contratação, investimento, escolha de canal, nichos, WhatsApp, landing pages e rastreamento."],
    ],
    postArchive: true,
  },
  {
    slug: "/servicos/google-ads-foz-do-iguacu",
    title: "Google Ads em Foz do Iguaçu | Campanhas para Gerar Leads",
    description:
      "Campanhas de Google Ads em Foz do Iguaçu para empresas que querem aparecer quando o cliente procura e gerar contatos qualificados pelo WhatsApp.",
    h1: "Google Ads em Foz do Iguaçu para aparecer quando o cliente está procurando",
    intro:
      "O Google Ads é uma das melhores ferramentas para negócios que querem captar pessoas com intenção ativa. Mas aparecer não basta: a campanha precisa escolher palavras certas, bloquear buscas ruins e medir o que acontece depois do clique.",
    sections: [
      ["Quando Google Ads faz sentido", "Google Ads faz mais sentido quando seu público já procura pelo que você oferece, como serviços profissionais, negócios locais, turismo, saúde, advocacia e soluções com demanda de urgência."],
      ["Como estruturamos campanhas de Google Ads", "Separamos termos por intenção, criamos grupos de anúncios específicos, definimos a melhor página de destino e configuramos rastreamento para saber quais palavras geram contato."],
      ["Erros comuns em Google Ads local", "Anunciar para palavras amplas demais, enviar todo tráfego para a home e não configurar conversões impede entender se o investimento gerou contatos reais."],
    ],
  },
  {
    slug: "/servicos/meta-ads-foz-do-iguacu",
    title: "Meta Ads em Foz do Iguaçu | Facebook e Instagram Ads",
    description:
      "Gestão de Meta Ads em Foz do Iguaçu para gerar conversas no WhatsApp, demanda local e leads qualificados pelo Facebook e Instagram.",
    h1: "Meta Ads em Foz do Iguaçu para gerar demanda, conversas e oportunidades",
    intro:
      "Facebook e Instagram Ads são fortes para negócios que precisam ser vistos, lembrados e considerados pelo público certo. Para funcionar, a campanha precisa ir além de impulsionamento.",
    sections: [
      ["Quando Meta Ads faz sentido", "Meta Ads costuma funcionar bem para negócios com apelo visual, ofertas locais, clínicas, restaurantes, turismo, eventos, infoprodutos e campanhas de remarketing."],
      ["O que fazemos na gestão", "Planejamento de campanha, estrutura de públicos, ângulos de copy, orientação de criativos, testes, análise de CPL e leitura da qualidade das conversas."],
      ["Qualidade antes de volume", "Não adianta gerar centenas de mensagens se o público não tem perfil, orçamento ou intenção. O foco é atrair contatos com maior chance de avançar comercialmente."],
    ],
  },
  {
    slug: "/servicos/landing-pages-foz-do-iguacu",
    title: "Landing Page em Foz do Iguaçu | Páginas para Converter Leads",
    description:
      "Criação de landing pages em Foz do Iguaçu para campanhas de Google Ads e Meta Ads com foco em conversão, WhatsApp e rastreamento.",
    h1: "Landing pages em Foz do Iguaçu para transformar cliques em leads",
    intro:
      "Uma campanha de tráfego pago só é tão forte quanto a página para onde ela envia o usuário. Landing page não é detalhe: é parte do funil de vendas.",
    sections: [
      ["O que uma boa landing page precisa ter", "Título direto, prova, benefícios claros, CTA visível, FAQ, rastreamento e experiência mobile rápida."],
      ["Landing page para campanhas locais", "Em buscas locais, a página precisa deixar claro que atende Foz do Iguaçu e região para aumentar relevância e confiança."],
      ["Quando revisar sua página", "Se suas campanhas recebem cliques, mas poucos contatos bons, talvez o problema esteja na clareza da oferta, velocidade, prova ou CTA."],
    ],
  },
  {
    slug: "/servicos/rastreamento-e-conversao",
    title: "Rastreamento de Conversões para Tráfego Pago",
    description:
      "Configure rastreamento de conversões, UTMs e cliques no WhatsApp para entender quais campanhas de tráfego pago geram leads e vendas.",
    h1: "Rastreamento de conversões para saber quais campanhas realmente geram oportunidades",
    intro:
      "Sem rastreamento, tráfego pago vira opinião. Estruturamos UTMs, eventos de clique, formulários, WhatsApp e organização mínima dos dados para tomada de decisão.",
    sections: [
      ["O que pode ser rastreado", "Clique no WhatsApp, envio de formulário, origem da campanha, conversa qualificada e venda quando o cliente registra esses dados."],
      ["O problema de otimizar sem dados", "O anúncio que recebe mais clique pode não ser o que gera melhor lead. Com dados, a pergunta passa a ser quais campanhas geraram conversas com potencial de venda."],
      ["Preparado para GTM", "Os principais botões e formulários do site já usam atributos de rastreabilidade para facilitar a configuração de tags, triggers e eventos."],
    ],
  },
  {
    slug: "/nichos/trafego-pago-para-advogados-foz-do-iguacu",
    title: "Tráfego Pago para Advogados em Foz do Iguaçu | Ético e Estratégico",
    description:
      "Gestão de tráfego pago para advogados em Foz do Iguaçu com comunicação ética, campanhas informativas e foco em contatos qualificados.",
    h1: "Tráfego pago para advogados em Foz do Iguaçu com estratégia e cuidado ético",
    intro:
      "Advocacia exige uma comunicação diferente. A estratégia precisa respeitar limites éticos, evitar promessas de resultado e construir autoridade de forma informativa, responsável e profissional.",
    sections: [
      ["Como o tráfego pode ajudar escritórios jurídicos", "O tráfego pago pode fortalecer presença local, direcionar usuários para páginas informativas e facilitar contato para análise inicial, sempre sem promessa de êxito."],
      ["Cuidados importantes", "A campanha deve evitar frases como resultado garantido, melhor advogado ou linguagem sensacionalista. Cada caso depende de análise individual."],
      ["Qualidade e responsabilidade", "Em marketing jurídico, a qualidade do lead e a sobriedade da comunicação importam mais do que volume de mensagens."],
    ],
  },
  {
    slug: "/nichos/turismo-hoteis-restaurantes-foz-do-iguacu",
    title: "Tráfego Pago para Turismo, Hotéis e Restaurantes em Foz do Iguaçu",
    description:
      "Estratégias de tráfego pago para hotéis, restaurantes, turismo e experiências em Foz do Iguaçu com foco em reservas, visitas e WhatsApp.",
    h1: "Tráfego pago para hotéis, turismo e restaurantes em Foz do Iguaçu",
    intro:
      "Foz do Iguaçu é uma cidade fortemente conectada ao turismo, à experiência local e ao consumo de visitantes. Isso cria oportunidades para hotéis, pousadas, restaurantes, agências e passeios.",
    sections: [
      ["Estratégias possíveis", "Campanhas para reservas, remarketing, ofertas locais, passeios, transporte turístico, criativos visuais e busca por intenção."],
      ["Jornada do visitante", "O desafio é aparecer antes da viagem, durante o planejamento, quando o visitante já está na cidade ou quando o morador procura uma opção específica."],
      ["Por que rastrear", "No turismo, a jornada pode passar por Google, Instagram, WhatsApp, ligação e sites de reserva. Sem rastreamento, fica difícil entender quais canais influenciam a decisão."],
    ],
  },
  {
    slug: "/consultoria",
    title: "Consultoria de Tráfego Pago em Foz do Iguaçu | Diagnóstico Estratégico",
    description:
      "Consultoria de tráfego pago para empresas que querem orientação estratégica sem contratar uma gestão completa de campanhas.",
    h1: "Consultoria de tráfego pago para orientar sua operação com clareza",
    intro:
      "A consultoria é diferente da gestão de tráfego. Na gestão, fazemos o acompanhamento completo e colocamos a mão na massa. Na consultoria, olhamos de fora para a operação, analisamos campanhas, estratégia e processo comercial, e orientamos o cliente para que ele mesmo implemente as melhorias.",
    sections: [
      ["Consultoria não é gestão de tráfego", "Na gestão, a equipe executa ajustes, configurações, otimizações e acompanhamento recorrente. Na consultoria, o papel é diagnosticar, orientar, priorizar e acompanhar a tomada de decisão, sem assumir a operação diária da conta."],
      ["O que avaliamos", "Campanhas, contas de anúncio, pixels, tags, UTMs, criativos, palavras-chave, públicos, landing pages, site, WhatsApp, oferta, atendimento, funil comercial e indicadores de performance."],
      ["Para quem faz sentido", "Para empresas que já têm alguém operando as campanhas internamente, empresários que querem entender melhor o que está acontecendo, times que precisam de uma segunda visão técnica ou negócios que querem se preparar antes de contratar gestão completa."],
      ["Opções de consultoria", "Temos formatos com dois encontros, quatro encontros e consultoria mensal a partir de oito encontros. A escolha depende da complexidade da operação e do nível de acompanhamento necessário."],
      ["Entrega prática", "O objetivo é sair com prioridades claras, plano de ação e orientação objetiva para melhorar campanhas, rastreamento, páginas e processo comercial."],
    ],
    packages: [
      ["2 encontros", "Diagnóstico rápido, priorização dos principais gargalos e plano inicial de correção."],
      ["4 encontros", "Análise mais profunda, acompanhamento da implementação e revisão dos primeiros ajustes."],
      ["Consultoria mensal", "A partir de 8 encontros para operações que precisam de acompanhamento estratégico recorrente."],
    ],
  },
  {
    slug: "/contato",
    title: "Fale com um Gestor de Tráfego em Foz do Iguaçu",
    description:
      "Entre em contato para diagnóstico de tráfego pago em Foz do Iguaçu. Atendimento pelo WhatsApp para Google Ads, Meta Ads e leads.",
    h1: "Fale com um gestor de tráfego para avaliar seu negócio em Foz do Iguaçu",
    intro:
      "Se você quer gerar mais leads, melhorar suas campanhas ou entender se tráfego pago faz sentido para sua empresa, envie suas informações e solicite um diagnóstico inicial.",
    sections: [
      ["Primeiro diagnóstico", "Vamos entender seu segmento, momento, orçamento e principal gargalo antes de indicar Google Ads, Meta Ads, landing page, rastreamento ou consultoria."],
      ["Canais de contato", `Você também pode falar pelo WhatsApp ${whatsappNumber} ou enviar um email para ${contactEmail}. O formulário abaixo organiza as informações principais e prepara o envio para nosso email de atendimento.`],
    ],
    contact: true,
  },
  {
    slug: "/politica-de-privacidade",
    title: "Política de Privacidade | Gestor de Tráfego Foz do Iguaçu",
    description:
      "Política de privacidade do site Gestor de Tráfego Foz do Iguaçu.",
    h1: "Política de Privacidade",
    intro:
      "Esta Política de Privacidade explica como o site Gestor de Tráfego Foz do Iguaçu coleta e utiliza informações enviadas por visitantes interessados em serviços de tráfego pago.",
    sections: [
      ["Dados coletados", "Podemos coletar informações fornecidas voluntariamente em formulários, como nome, WhatsApp, empresa, segmento, cidade, investimento aproximado e principal desafio comercial."],
      ["Finalidade do uso", "Os dados são utilizados para responder solicitações, realizar diagnóstico inicial, entrar em contato, melhorar a experiência do site e mensurar campanhas."],
      ["Compartilhamento", "As informações não são vendidas. Elas podem ser processadas por ferramentas necessárias para operação do site, análise, CRM, hospedagem ou plataformas de anúncios."],
      ["Cookies e rastreamento", "O site pode utilizar cookies, pixels e tecnologias semelhantes para medir visitas, cliques, conversões e desempenho de campanhas."],
      ["Direitos do titular", "O visitante pode solicitar acesso, correção ou exclusão de seus dados entrando em contato pelos canais informados no site."],
      ["Atualizações", "Esta política pode ser atualizada periodicamente. Este texto é uma base operacional e deve ser revisado juridicamente antes da publicação final."],
    ],
    noCta: true,
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function pathToFile(slug) {
  return slug === "/" ? "index.html" : join(slug.slice(1), "index.html");
}

function absolute(slug) {
  return `${siteUrl}${slug === "/" ? "" : slug}`;
}

function whatsappHref(source) {
  const text = encodeURIComponent(`${whatsappMessage}`);
  return `https://wa.me/${whatsappNumber}?text=${text}&utm_source=site&utm_medium=cta&utm_campaign=${encodeURIComponent(source)}`;
}

function breadcrumbJson(page) {
  const parts = page.slug.split("/").filter(Boolean);
  const items = [{ name: "Início", item: siteUrl }];
  let current = "";
  for (const part of parts) {
    current += `/${part}`;
    items.push({ name: label(part), item: absolute(current) });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

function faqJson(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

function localBusinessJson() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Gestor de Tráfego Foz do Iguaçu",
    url: siteUrl,
    areaServed: "Foz do Iguaçu, PR",
    brand,
    serviceType: ["Gestão de tráfego pago", "Google Ads", "Meta Ads", "Landing pages", "Rastreamento de conversões"],
  };
}

function label(slugPart) {
  return slugPart
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Foz Do Iguacu", "Foz do Iguaçu")
    .replace("Google Ads Foz Do Iguacu", "Google Ads Foz do Iguaçu")
    .replace("Meta Ads Foz Do Iguacu", "Meta Ads Foz do Iguaçu");
}

function renderBody(body) {
  return body
    .map(([type, content]) => {
      if (type === "p") return `<p>${escapeHtml(content)}</p>`;
      if (type === "h2") return `<h2>${escapeHtml(content)}</h2>`;
      if (type === "table") return renderTable(content);
      return "";
    })
    .join("\n");
}

function renderTable(rows) {
  const [head, ...body] = rows;
  return `<div class="table-wrap"><table><thead><tr>${head.map((cell) => `<th>${escapeHtml(cell)}</th>`).join("")}</tr></thead><tbody>${body
    .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;
}

function renderBreadcrumb(page) {
  const parts = page.slug.split("/").filter(Boolean);
  const crumbs = [`<a href="/">Início</a>`];
  let current = "";
  for (const part of parts) {
    current += `/${part}`;
    crumbs.push(current === page.slug ? `<span>${label(part)}</span>` : `<a href="${current}">${label(part)}</a>`);
  }
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${crumbs.join("<span>/</span>")}</nav>`;
}

function arrowSvg(cls) {
  return `<svg class="${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>`;
}

function waSvg() {
  return `<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 3a13 13 0 0 0-11 19.7L3.5 29l6.5-1.4A13 13 0 1 0 16 3Zm0 23.6a10.5 10.5 0 0 1-5.4-1.5l-.4-.2-4 .9.9-3.9-.3-.4A10.6 10.6 0 1 1 16 26.6Zm6-7.9c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.8.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1a8.6 8.6 0 0 1-2.6-1.6 9.5 9.5 0 0 1-1.8-2.2c-.2-.3 0-.5.1-.7l.5-.6.4-.6c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.5 3.8 6 5.3 2.2.9 3 1 4.1.9.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.3Z"/></svg>`;
}

function renderWaterfallLogo() {
  return `<svg viewBox="0 0 48 48" role="img" focusable="false">
    <path d="M7 14c7-7 13-7 20 0 5 5 9 5 14 0" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M13 19v15M22 18v21M31 20v15M39 18v12" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M10 38c8 4 18 4 28 0" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`;
}

function renderHeader() {
  return `<header class="site-header" data-header>
  <div class="wrap header-inner">
    <a class="brand" href="/" aria-label="Gestor de Tráfego Foz do Iguaçu">
      <span class="brand-mark" aria-hidden="true">${renderWaterfallLogo()}</span>
      <span class="brand-text"><strong>Gestor de Tráfego</strong><small>Foz do Iguaçu · Performance local</small></span>
    </a>
    <nav class="site-nav" id="site-nav" data-site-nav aria-label="Navegação principal">
      ${nav.map(([text, href]) => `<a href="${href}">${text}</a>`).join("")}
    </nav>
    <div class="header-actions">
      <a class="button primary sm" href="/contato/#formulario" data-gtm="header_diagnostico" data-event-category="cta" data-event-label="header">Diagnóstico gratuito</a>
      <button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="site-nav">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        Menu
      </button>
    </div>
  </div>
</header>`;
}

function renderFooter() {
  return `<footer class="footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="/" aria-label="Gestor de Tráfego Foz do Iguaçu">
          <span class="brand-mark" aria-hidden="true">${renderWaterfallLogo()}</span>
          <span class="brand-text"><strong>Gestor de Tráfego</strong><small>Foz do Iguaçu · Performance local</small></span>
        </a>
        <p>Estratégia de mídia paga, landing pages e rastreamento para empresas que querem vender mais, gerar oportunidades e decidir com dados.</p>
        <div class="footer-contact">
          <a href="https://wa.me/${whatsappNumber}" data-whatsapp-link><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Z"/></svg>(45) 99904-6673</a>
          <a href="mailto:${contactEmail}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>${contactEmail}</a>
        </div>
      </div>
      <div class="footer-cols">
        <div>
          <h4>Serviços</h4>
          <a href="/servicos/gestao-de-trafego-pago">Gestão de tráfego</a>
          <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a>
          <a href="/servicos/meta-ads-foz-do-iguacu">Meta Ads</a>
          <a href="/servicos/landing-pages-foz-do-iguacu">Landing pages</a>
          <a href="/servicos/rastreamento-e-conversao">Rastreamento</a>
        </div>
        <div>
          <h4>Empresa</h4>
          <a href="/sobre">Sobre</a>
          <a href="/nichos">Nichos</a>
          <a href="/consultoria">Consultoria</a>
          <a href="/blog">Blog</a>
          <a href="/contato">Contato</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="ano">2026</span> Gestor de Tráfego Foz do Iguaçu · PR</span>
      <a href="/politica-de-privacidade">Política de privacidade</a>
    </div>
  </div>
</footer>`;
}

function renderLeadForm(context) {
  context = context || "global";
  return `<form class="lead-form" data-lead-form data-context="${escapeHtml(context)}" data-submit-email="${contactEmail}" action="/api/lead" method="post">
  <label>Nome<input name="nome" autocomplete="name" required></label>
  <label>WhatsApp<input name="whatsapp" autocomplete="tel" required inputmode="tel"></label>
  <label>Segmento<select name="segmento" required>
    <option value="">Selecione</option>
    <option>Advocacia</option><option>Saúde</option><option>Turismo</option><option>Restaurante</option><option>Comércio</option><option>Serviço local</option><option>Infoproduto</option><option>Outro</option>
  </select></label>
  <label>Cidade<input name="cidade" value="Foz do Iguaçu" required></label>
  <label>Investimento mensal em mídia<select name="investimento" required>
    <option value="">Selecione</option>
    <option>Ainda não invisto</option><option>Até R$ 1.000</option><option>R$ 1.000 a R$ 3.000</option><option>R$ 3.000 a R$ 5.000</option><option>Acima de R$ 5.000</option>
  </select></label>
  <label>Principal desafio<textarea name="desafio" rows="4" required></textarea></label>
  <label class="hp-field" aria-hidden="true" tabindex="-1">Site<input name="website" autocomplete="off" tabindex="-1"></label>
  <button class="button primary" type="submit" data-gtm="lead_form_submit" data-event-category="formulario" data-event-label="${escapeHtml(context)}">Enviar diagnóstico</button>
  <p class="form-note" data-form-status>Ao enviar, seus dados chegam no email ${contactEmail}. Se preferir resposta mais rápida, use o botão de WhatsApp.</p>
</form>`;
}

function renderCta(page, labelText) {
  labelText = labelText || "Solicitar diagnóstico gratuito";
  return `<section class="section tight"><div class="wrap">
  <div class="cta-panel" data-reveal>
    <div>
      <span class="eyebrow">Diagnóstico inicial</span>
      <h2>Tráfego pago faz sentido para a sua empresa em Foz do Iguaçu?</h2>
      <p>Vamos analisar seu cenário, entender seu objetivo e indicar o caminho mais simples para gerar leads com mais previsibilidade.</p>
    </div>
    <div class="cta-actions">
      <a class="button primary" href="/contato/#formulario" data-gtm="cta_diagnostico" data-event-category="cta" data-event-label="${escapeHtml(page.slug)}">${escapeHtml(labelText)} ${arrowSvg("arrow")}</a>
      <a class="button ghost" href="${whatsappHref(page.slug)}" data-whatsapp-link data-gtm="cta_whatsapp" data-event-category="whatsapp" data-event-label="${escapeHtml(page.slug)}">Falar no WhatsApp</a>
    </div>
  </div>
</div></section>`;
}

function renderServiceCard(service, i) {
  const index = typeof i === "number" ? String(i + 1).padStart(2, "0") : "";
  return `<a class="service-card" href="${service.href}" data-reveal>
    ${index ? `<span class="sc-index">${index}</span>` : ""}
    <h3>${escapeHtml(service.title)}</h3>
    <p>${escapeHtml(service.text)}</p>
    <span class="sc-go">Ver mais ${arrowSvg()}</span>
  </a>`;
}

const NICHE_ICONS = {
  Turismo: `<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z"/><circle cx="12" cy="9" r="2.5"/>`,
  Restaurantes: `<path d="M5 2v8a3 3 0 0 0 6 0V2M8 2v20M19 2c-2 0-3 2-3 5s1 5 3 5v10"/>`,
  Delivery: `<circle cx="6" cy="18" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="M3 6h3l2 9h9l2-6H8"/>`,
  Advogados: `<path d="M12 3v18M5 7h14M7 7l-3 7h6Zm10 0-3 7h6Z"/>`,
  "Profissionais da saúde": `<path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/>`,
  "Prestadores de serviço": `<path d="m14 7 3 3-9 9-3 .5.5-3.5 8.5-9Z"/><path d="m18 6 2-2 2 2-2 2Z"/>`,
};

function renderNiches() {
  return `<div class="niche-row" data-reveal>${niches
    .map(
      (n) => `<a class="niche" href="${n.href}"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${NICHE_ICONS[n.title] || ""}</svg></span>${escapeHtml(n.title)}</a>`
    )
    .join("")}</div>`;
}

function renderProcess() {
  const steps = [
    ["Diagnóstico", "Negócio, público, oferta, canais e concorrência. Antes de gastar, entendemos o cenário."],
    ["Estrutura", "Campanhas, criativos, públicos, página e jornada de compra montados com intenção."],
    ["Rastreamento", "Eventos, UTMs, conversões e leitura de origem para saber de onde vem cada lead."],
    ["Otimização", "Ajustes por custo, qualidade, receita e volume — sempre com base em dados reais."],
    ["Relatório", "Leitura objetiva para decisão comercial. Sem métrica de vaidade."],
  ];
  return `<div class="steps">${steps
    .map(
      ([t, x], i) =>
        `<div class="step" data-reveal data-delay="${i * 50}"><span class="step-no">${String(i + 1).padStart(2, "0")}</span><div><h3>${escapeHtml(t)}</h3><p>${escapeHtml(x)}</p></div></div>`
    )
    .join("")}</div>`;
}

function renderFaq(faq) {
  return `<section class="section" id="faq"><div class="wrap" style="max-width:880px">
    <div class="section-head" data-reveal><span class="kicker">FAQ</span><h2>Dúvidas frequentes</h2></div>
    <div class="faq-list" data-reveal>${faq
      .map(
        ([q, a]) =>
          `<details class="faq-item"><summary>${escapeHtml(q)}<span class="faq-sign" aria-hidden="true"></span></summary><div class="faq-answer"><p>${escapeHtml(a)}</p></div></details>`
      )
      .join("")}</div>
  </div></section>`;
}

function renderHome(page) {
  return `<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <span class="eyebrow" data-reveal>Foz do Iguaçu · Google Ads &amp; Meta Ads</span>
      <h1 data-reveal data-delay="60">${escapeHtml(page.h1)}</h1>
      <p class="hero-sub" data-reveal data-delay="140">${escapeHtml(page.intro)}</p>
      <div class="hero-actions" data-reveal data-delay="200">
        <a class="button primary" href="/contato/#formulario" data-gtm="hero_diagnostico" data-event-category="cta" data-event-label="home">Solicitar diagnóstico gratuito ${arrowSvg("arrow")}</a>
        <a class="button ghost" href="${whatsappHref("home")}" data-whatsapp-link data-gtm="hero_whatsapp" data-event-category="whatsapp" data-event-label="home">${waSvg()} Falar no WhatsApp</a>
      </div>
      <div class="hero-trust" data-reveal data-delay="260">
        <span>Onde anunciamos:</span>
        <span class="platforms">
          <span class="platform-tag"><span class="dot" style="background:#4285f4"></span>Google Ads</span>
          <span class="platform-tag"><span class="dot" style="background:#e1306c"></span>Meta Ads</span>
          <span class="platform-tag"><span class="dot" style="background:#69c9d0"></span>TikTok Ads</span>
          <span class="platform-tag"><span class="dot" style="background:#0a66c2"></span>LinkedIn Ads</span>
        </span>
      </div>
    </div>
    <div class="hero-visual" data-reveal data-delay="160" aria-hidden="true">
      <div class="falls">${Array.from({ length: 18 }).map(() => "<span></span>").join("")}</div>
      <div class="mist"></div>
      <span class="visual-tag top"><span class="live"></span>Campanhas de alta performance</span>
      <span class="visual-tag bottom">Tríplice fronteira</span>
      <div class="visual-headline"><strong>Performance local,<br>medida de ponta a ponta.</strong><span>Do clique ao cliente.</span></div>
    </div>
  </div>
</section>

<section class="section tight"><div class="wrap">
  <div class="stats" data-reveal>
    <div class="stat"><span class="num"><span data-count="40">0</span><span class="unit">+</span></span><span class="label">Clientes atendidos em diferentes segmentos.</span></div>
    <div class="stat"><span class="num"><span class="unit">R$ </span><span data-count="1000000">0</span><span class="unit">+</span></span><span class="label">Gerados em faturamento para clientes.</span></div>
    <div class="stat"><span class="num"><span data-count="4">0</span><span class="unit">+</span></span><span class="label">Anos de experiência no mercado digital.</span></div>
  </div>
</div></section>

<section class="section"><div class="wrap argument">
  <div class="argument-lead" data-reveal>
    <span class="kicker">Por que campanhas falham</span>
    <h2>O problema quase nunca é o Google ou o Instagram.</h2>
    <p>A maioria das campanhas ruins não falha porque a plataforma não funciona. Falha porque foi montada sem oferta clara, sem rastreamento, sem uma página que converte e sem ninguém olhando a qualidade do lead.</p>
  </div>
  <div class="point-list">
    <article class="point" data-reveal data-delay="60"><span class="idx">01</span><div><h3>Negócios locais com intenção de busca</h3><p>Foz do Iguaçu une turismo, serviços e comércio na tríplice fronteira. A campanha certa considera localização, sazonalidade e o comportamento de quem pesquisa antes de contratar.</p></div></article>
    <article class="point" data-reveal data-delay="120"><span class="idx">02</span><div><h3>O erro que faz perder dinheiro</h3><p>Subir anúncio sem estrutura é apostar. Sem rastreamento e sem página preparada, você paga por cliques que nunca viram conversa, orçamento ou venda.</p></div></article>
    <article class="point" data-reveal data-delay="180"><span class="idx">03</span><div><h3>Leads qualificados, não só volume</h3><p>Trabalhamos com uma lógica prática: diagnóstico, estrutura, rastreamento, otimização e relatório. Cada etapa existe para o número bonito virar crescimento real.</p></div></article>
  </div>
</div></section>

<section class="section" id="servicos"><div class="wrap">
  <div class="section-head" data-reveal>
    <span class="kicker">Serviços</span>
    <h2>O que estruturamos para sua empresa</h2>
    <p>Uma operação de tráfego eficiente conecta canal, oferta, página, atendimento e mensuração. Você contrata o conjunto ou só a peça que falta.</p>
  </div>
  <div class="cards">
    ${services.map((s, i) => renderServiceCard(s, i)).join("")}
    <div class="service-card feature-card" data-reveal><span class="sc-index">+</span><h3>Não sabe por onde começar?</h3><p>No diagnóstico a gente identifica se o gargalo está na campanha, na página ou no atendimento.</p><a class="button primary sm" href="/contato/#formulario" data-gtm="services_diagnostico" data-event-category="cta" data-event-label="home">Começar pelo diagnóstico</a></div>
  </div>
</div></section>

<section class="section" id="metodo"><div class="wrap method-grid">
  <div class="section-head" style="margin-bottom:0" data-reveal>
    <span class="kicker">Método</span>
    <h2>Performance precisa de um caminho claro até o faturamento.</h2>
    <p>O objetivo é conectar mídia, página, atendimento, conversão e análise. Se uma etapa quebra, o relatório bonito não vira crescimento.</p>
  </div>
  ${renderProcess()}
</div></section>

<section class="section tight" id="nichos"><div class="wrap">
  <div class="section-head" data-reveal>
    <span class="kicker">Nichos</span>
    <h2>Estratégia por realidade de mercado</h2>
    <p>Cada segmento tem uma jornada diferente. Turismo não se anuncia como advocacia, nem delivery como saúde.</p>
  </div>
  ${renderNiches()}
</div></section>

${renderFaq(page.faq)}
${renderCta(page)}`;
}

function renderProseBlocks(sections) {
  return `<section class="section content-section"><div class="wrap prose-blocks">${sections
    .map(
      ([t, x]) => `<article class="prose-block" data-reveal><h2>${escapeHtml(t)}</h2><p>${escapeHtml(x)}</p></article>`
    )
    .join("")}</div></section>`;
}

function renderPackages(packages) {
  return `<section class="section blog-archive"><div class="wrap">
    <div class="section-head" data-reveal><span class="kicker">Formatos</span><h2>Opções de consultoria</h2></div>
    <div class="cards">${packages
      .map(
        ([t, x]) => `<article class="service-card static-card" data-reveal><h3>${escapeHtml(t)}</h3><p>${escapeHtml(x)}</p></article>`
      )
      .join("")}</div>
  </div></section>`;
}

function renderPostArchive() {
  const categories = [
    ["Contratação", "Como escolher gestor e avaliar propostas."],
    ["Investimento", "Quanto custa e como pensar verba de mídia."],
    ["Canais", "Google Ads, Meta Ads e escolha de plataformas."],
    ["Nichos", "Advocacia, turismo, restaurantes e negócios locais."],
    ["Conversão", "WhatsApp, landing pages, rastreamento e qualidade de lead."],
  ];
  return `<section class="section"><div class="wrap">
    <div class="category-list" data-reveal>${categories
      .map(([t, x]) => `<span><strong>${escapeHtml(t)}</strong>${escapeHtml(x)}</span>`)
      .join("")}</div>
    <div class="post-grid">${posts
      .map(
        (p) => `<a class="post-card" href="${p.slug}" data-reveal><span>Artigo</span><strong>${escapeHtml(p.title)}</strong><p>${escapeHtml(p.description)}</p><span class="sc-go">Ler ${arrowSvg()}</span></a>`
      )
      .join("")}</div>
  </div></section>`;
}

function renderRelated(page) {
  const relatedServices = services.slice(0, 4).map((s, i) => renderServiceCard(s, i)).join("");
  const relatedPosts = posts
    .filter((p) => p.slug !== page.slug)
    .slice(0, 3)
    .map((p) => `<a class="text-link-card" href="${p.slug}">${escapeHtml(p.title)} ${arrowSvg()}</a>`)
    .join("");
  return `<section class="section related"><div class="wrap">
    <div class="section-head" data-reveal><span class="kicker">Continue explorando</span><h2>Links úteis para decidir melhor</h2></div>
    <div class="cards">${relatedServices}</div>
    <div class="link-list">${relatedPosts}</div>
  </div></section>`;
}

function renderGeneric(page) {
  const kicker = page.kicker || (page.slug === "/servicos"
    ? "Serviços de tráfego pago em Foz do Iguaçu"
    : page.slug === "/nichos"
    ? "Nichos atendidos com tráfego pago"
    : page.slug === "/consultoria"
    ? "Consultoria de tráfego pago"
    : page.slug === "/blog"
    ? "Conteúdos sobre mídia paga e conversão"
    : page.slug === "/contato"
    ? "Contato para diagnóstico de tráfego"
    : page.slug.includes("/servicos/")
    ? "Serviço de performance local"
    : page.slug.includes("/nichos/")
    ? "Estratégia por nicho"
    : "Tráfego pago em Foz do Iguaçu");
  return `<main class="page-main">
  <div class="wrap">${renderBreadcrumb(page)}</div>
  <section class="page-hero"><div class="wrap">
    <span class="kicker" data-reveal>${kicker}</span>
    <h1 data-reveal data-delay="60">${escapeHtml(page.h1)}</h1>
    <p class="lede" data-reveal data-delay="120">${escapeHtml(page.intro)}</p>
    <div class="hero-actions" data-reveal data-delay="180">
      <a class="button primary" href="/contato/#formulario" data-gtm="page_diagnostico" data-event-category="cta" data-event-label="${escapeHtml(page.slug)}">Solicitar diagnóstico gratuito ${arrowSvg("arrow")}</a>
      <a class="button ghost" href="${whatsappHref(page.slug)}" data-whatsapp-link data-gtm="page_whatsapp" data-event-category="whatsapp" data-event-label="${escapeHtml(page.slug)}">Falar no WhatsApp</a>
    </div>
  </div></section>
  ${renderProseBlocks(page.sections)}
  ${page.cards ? `<section class="section card-section"><div class="wrap"><div class="cards">${page.cards.map((c, i) => renderServiceCard(c, i)).join("")}</div></div></section>` : ""}
  ${page.packages ? renderPackages(page.packages) : ""}
  ${page.postArchive ? renderPostArchive() : ""}
  ${page.contact ? `<section class="section" id="formulario"><div class="wrap form-section"><div class="section-head" data-reveal style="margin-bottom:0"><span class="kicker">Diagnóstico</span><h2>Envie seus dados</h2><p>O formulário qualifica o contato e facilita a análise inicial antes da conversa.</p></div><div data-reveal>${renderLeadForm(page.slug)}</div></div></section>` : ""}
  ${page.noCta ? "" : `${page.postArchive || page.cards ? "" : renderRelated(page)}${renderCta(page)}`}
</main>`;
}

function renderPost(post) {
  const page = { slug: post.slug, title: post.title, description: post.description, h1: post.title };
  return layout(
    page,
    `<main class="page-main article">
  <div class="wrap">${renderBreadcrumb(page)}</div>
  <article class="article-body">
    <span class="kicker" data-reveal>Conteúdo sobre tráfego pago</span>
    <h1 data-reveal data-delay="60">${escapeHtml(post.title)}</h1>
    <p class="lede" data-reveal data-delay="120">${escapeHtml(post.description)}</p>
    <div class="prose" data-reveal data-delay="160">${renderBody(post.body)}</div>
  </article>
  ${renderRelated(page)}
  ${renderCta(page, post.cta)}
</main>`
  );
}

function layout(page, content, jsonLd) {
  jsonLd = jsonLd || [];
  const json = [localBusinessJson(), breadcrumbJson(page), ...(page.faq ? [faqJson(page.faq)] : []), ...jsonLd];
  return `<!doctype html>
<html lang="pt-BR" data-bg="grafite">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <link rel="canonical" href="${absolute(page.slug)}">
  <meta property="og:title" content="${escapeHtml(page.title)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${absolute(page.slug)}">
  <meta name="theme-color" content="#14171c">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <noscript><style>[data-reveal]{opacity:1!important;transform:none!important}.faq-answer{height:auto!important}</style></noscript>
  <script>
    window.dataLayer = window.dataLayer || [];
    window.GABRIADS_WHATSAPP_NUMBER = "${whatsappNumber}";
    window.GABRIADS_WHATSAPP_MESSAGE = "${whatsappMessage}";
  </script>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-M8WD4959');</script>
  <!-- End Google Tag Manager -->
  ${json.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n  ")}
</head>
<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8WD4959"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
  ${renderHeader()}
  <div id="conteudo">${content}</div>
  <a class="floating-whatsapp" href="${whatsappHref(page.slug)}" data-whatsapp-link data-gtm="floating_whatsapp" data-event-category="whatsapp" data-event-label="${escapeHtml(page.slug)}" aria-label="Falar no WhatsApp">
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 4.2A11.6 11.6 0 0 0 6 21.6L4.8 27l5.5-1.4A11.6 11.6 0 1 0 16 4.2Z" fill="currentColor"/><path d="M11.8 10.2c-.3-.7-.6-.7-.9-.7h-.7c-.2 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.4 3.6 1.6 3.9c.2.3 2.7 4.2 6.6 5.7 3.2 1.3 3.9 1 4.6.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5l-2.4-1.2c-.4-.1-.7-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.4-.7.1-.2.1-.5 0-.7l-1.1-2.4Z" fill="#06210f"/></svg>
    <span class="fw-label">Falar no WhatsApp</span>
  </a>
  ${renderFooter()}
  <script src="/assets/js/site.js" defer></script>
</body>
</html>`;
}

function buildPage(page) {
  if (page.type === "home") return layout(page, renderHome(page));
  return layout(page, renderGeneric(page));
}

function writePage(slug, html) {
  const file = pathToFile(slug);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

for (const page of pages) writePage(page.slug, buildPage(page));
for (const post of posts) writePage(post.slug, renderPost(post));

writeFileSync(
  "robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

const allUrls = [...pages.map((page) => page.slug), ...posts.map((post) => post.slug)];
writeFileSync(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allUrls
    .map((slug) => `  <url><loc>${absolute(slug)}</loc></url>`)
    .join("\n")}\n</urlset>\n`,
);

console.log(`Generated ${allUrls.length} pages.`);
