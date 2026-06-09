import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const siteUrl = "https://gestordetrafegofozdoiguacu.com.br";
const assetVersion = "20260609-3";
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

const footerServices = [
  ["Gestão de tráfego", "/servicos/gestao-de-trafego-pago"],
  ["Google Ads", "/servicos/google-ads-foz-do-iguacu"],
  ["Meta Ads", "/servicos/meta-ads-foz-do-iguacu"],
  ["Landing pages", "/servicos/landing-pages-foz-do-iguacu"],
  ["Rastreamento", "/servicos/rastreamento-e-conversao"],
  ["Google Meu Negócio", "/servicos/google-meu-negocio-foz-do-iguacu"],
];

const footerCompany = [
  ["Sobre", "/sobre"],
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
    title: "Google Meu Negócio",
    href: "/servicos/google-meu-negocio-foz-do-iguacu",
    text: "Criação e gestão do Perfil da Empresa no Google para empresas locais aparecerem melhor na Busca e no Maps.",
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
    slug: "/blog/como-aparecer-no-google-maps-em-foz-do-iguacu",
    title: "Como aparecer no Google Maps em Foz do Iguaçu",
    description: "Veja o que influencia sua presença no Google Maps em Foz do Iguaçu: perfil completo, categorias, avaliações, fotos, site e consistência.",
    h1: "Como aparecer no Google Maps em Foz do Iguaçu",
    intro: "Aparecer no Google Maps é essencial para muitas empresas locais, mas não depende de um único ajuste. O resultado vem da combinação entre perfil completo, relevância, localização, reputação e consistência.",
    bodyHtml: `<p>Quando alguém pesquisa por um serviço local, o Google Maps pode ser um dos primeiros pontos de decisão. O usuário vê distância, nota, fotos, horários, rotas, telefone e avaliações. Para negócios em Foz do Iguaçu, isso pode impactar ligações, visitas presenciais, reservas e mensagens no WhatsApp.</p>
<p>Não existe botão mágico para aparecer em primeiro. Também não faz sentido prometer posição fixa no Maps. O trabalho correto é melhorar os sinais que ajudam o usuário e o Google a entenderem sua empresa. O <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br" target="_blank" rel="noopener noreferrer">Guia de SEO para iniciantes do Google Search Central</a> reforça que SEO local começa com informações precisas e conteúdo útil.</p>
<h2>Fatores práticos que influenciam sua presença</h2>
<div class="table-wrap"><table><thead><tr><th>Fator</th><th>O que melhorar</th></tr></thead><tbody>
<tr><td>Categoria</td><td>Escolher categoria principal coerente com o serviço central.</td></tr>
<tr><td>Informações</td><td>Manter nome, telefone, endereço, site e horário corretos.</td></tr>
<tr><td>Fotos</td><td>Publicar imagens reais e atualizadas regularmente.</td></tr>
<tr><td>Avaliações</td><td>Incentivar avaliações verdadeiras e responder com profissionalismo.</td></tr>
<tr><td>Serviços</td><td>Descrever o que a empresa faz com clareza.</td></tr>
<tr><td>Site</td><td>Ter páginas relevantes conectadas ao perfil.</td></tr>
<tr><td>Consistência</td><td>Evitar divergência de dados entre site, redes e perfil.</td></tr>
</tbody></table></div>
<h2>O papel das avaliações</h2>
<p>Avaliações não devem ser compradas nem manipuladas. O caminho correto é pedir feedback real para clientes reais, facilitar o processo e responder com atenção. Responder avaliações mostra que a empresa está ativa e se importa com a experiência do cliente. Leia: <a href="/blog/como-responder-avaliacoes-no-google-meu-negocio">como responder avaliações no Google Meu Negócio</a>.</p>
<h2>O papel do site</h2>
<p>O Google Meu Negócio ajuda muito, mas o site dá profundidade. Uma página de serviço bem feita pode explicar melhor a oferta, responder dúvidas, mostrar diferenciais e captar contatos com rastreamento. Para negócios locais, perfil e site devem se complementar. Conheça nosso serviço de <a href="/servicos/landing-pages-foz-do-iguacu">criação de sites e landing pages em Foz do Iguaçu</a>.</p>
<h2>Conclusão</h2>
<p>Aparecer melhor no Google Maps em Foz do Iguaçu exige consistência. O perfil precisa estar completo, atualizado e conectado a uma presença digital confiável. O foco não deve ser só posição; deve ser gerar mais contatos úteis a partir das buscas locais. Para dar o primeiro passo, veja nosso serviço de <a href="/servicos/google-meu-negocio-foz-do-iguacu#criacao">criação de Google Meu Negócio</a> ou de <a href="/servicos/google-meu-negocio-foz-do-iguacu">gestão contínua do perfil</a>.</p>`,
  },
  {
    slug: "/blog/como-escolher-gestor-de-trafego-em-foz-do-iguacu",
    title: "Como escolher um gestor de tráfego em Foz do Iguaçu",
    description: "Veja como escolher um gestor de tráfego em Foz do Iguaçu com critérios práticos: diagnóstico, métricas, rastreamento, transparência e qualidade dos leads.",
    h1: "Como escolher um gestor de tráfego em Foz do Iguaçu",
    intro: "Escolher um gestor de tráfego em Foz do Iguaçu não deve ser uma decisão baseada apenas em preço, promessa de resultado rápido ou indicação informal. O profissional certo precisa entender mídia paga, mas também oferta, funil, WhatsApp, rastreamento e qualidade dos leads.",
    cta: "Solicitar diagnóstico gratuito",
    bodyHtml: `<p>Escolher um gestor de tráfego em Foz do Iguaçu exige mais do que comparar mensalidades. Em muitos negócios locais, o problema não está apenas no anúncio. O gargalo pode estar na página, no atendimento, na proposta, na demora para responder no WhatsApp, na falta de rastreamento ou na ausência de uma oferta clara.</p>
<p>Um bom gestor não deve começar prometendo resultado. Ele deve começar fazendo perguntas. Antes de falar em verba, campanha e canal, precisa entender o que a empresa vende, qual margem existe, quem é o cliente ideal, como o atendimento funciona e o que acontece depois que o lead chama.</p>
<h2>O que avaliar antes de contratar</h2>
<div class="table-wrap"><table><thead><tr><th>Critério</th><th>O que observar</th></tr></thead><tbody>
<tr><td>Diagnóstico inicial</td><td>O profissional entende seu negócio antes de sugerir campanha?</td></tr>
<tr><td>Clareza de métricas</td><td>Ele fala de CPL, taxa de conversão, qualidade do lead e custo por oportunidade real?</td></tr>
<tr><td>Rastreamento</td><td>Existe plano para medir WhatsApp, formulário, ligação e origem dos contatos?</td></tr>
<tr><td>Estratégia de canal</td><td>Ele explica quando usar <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a>, <a href="/servicos/meta-ads-foz-do-iguacu">Meta Ads</a> ou ambos?</td></tr>
<tr><td>Transparência</td><td>Você terá acesso aos dados e entenderá o que está sendo feito?</td></tr>
<tr><td>Visão comercial</td><td>Ele considera atendimento, follow-up e conversão em venda?</td></tr>
</tbody></table></div>
<h2>Perguntas que você deve fazer antes de fechar</h2>
<p>Pergunte se as campanhas ficarão em uma conta da sua empresa, como serão apresentados os relatórios, quais conversões serão medidas, qual será o plano dos primeiros 30 dias e o que será considerado sucesso. Também vale perguntar o que ele faria se os leads viessem baratos, mas ruins. A resposta mostra se o profissional olha apenas volume ou se entende qualidade.</p>
<p>Outra pergunta importante é: "o que precisa estar pronto antes de anunciar?". Se a resposta for apenas "verba", cuidado. Uma campanha local eficiente depende de <a href="/servicos/landing-pages-foz-do-iguacu">página ou destino adequado</a>, mensagem clara, canais de contato funcionando e capacidade de atendimento.</p>
<h2>Sinais de alerta</h2>
<p>Desconfie de promessas de primeiro lugar, vendas garantidas, leads ilimitados ou resultados sem conhecer sua empresa. Também é arriscado contratar alguém que fala só em alcance, curtidas e cliques, sem falar de conversão, <a href="/servicos/rastreamento-e-conversao">rastreamento</a> e processo comercial.</p>
<p>O melhor gestor de tráfego é o que consegue transformar verba de mídia em aprendizado, oportunidades qualificadas e decisões melhores. Para empresas em Foz do Iguaçu, isso significa entender a realidade local, concorrência regional, comportamento de WhatsApp e diferença entre lead curioso e lead com real intenção de compra. O <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br" target="_blank" rel="noopener noreferrer">guia do Google sobre conteúdo útil</a> reforça que profissionais sérios focam em entregar valor real, não métricas de vaidade.</p>
<h2>Conclusão</h2>
<p>Se você quer contratar com menos risco, escolha alguém que explique o plano com clareza, questione suas premissas, meça o que importa e tenha coragem de dizer quando o problema não está no anúncio. Tráfego pago bom não é só campanha bonita; é sistema de aquisição funcionando.</p>`,
  },
  {
    slug: "/blog/como-rastrear-leads-de-trafego-pago",
    title: "Como rastrear leads de tráfego pago e saber quais campanhas vendem",
    description: "Entenda como rastrear leads de tráfego pago com UTMs, eventos, WhatsApp, formulários e análise de qualidade para saber quais campanhas geram venda.",
    h1: "Como rastrear leads de tráfego pago e saber quais campanhas vendem",
    intro: "Gerar leads é importante, mas saber de onde vieram os melhores contatos é o que permite escalar com segurança. Sem rastreamento, a empresa toma decisão no escuro e pode cortar campanhas boas ou manter campanhas ruins.",
    cta: "Solicitar análise de rastreamento",
    bodyHtml: `<p>Rastrear leads de tráfego pago é o que separa gestão baseada em dados de gestão baseada em sensação. Em negócios locais, é comum o empresário dizer que "veio bastante WhatsApp", mas não saber qual campanha trouxe os contatos, quais leads tinham intenção real e quais viraram orçamento ou venda.</p>
<p>O rastreamento não precisa começar complexo. O primeiro passo é organizar a origem dos contatos. Depois, é preciso conectar essa origem com qualidade comercial. Um lead barato que nunca responde pode ser pior do que um lead mais caro que fecha contrato.</p>
<h2>O que são UTMs e por que usar</h2>
<p>UTMs são parâmetros adicionados aos links para identificar origem, mídia, campanha e conteúdo do clique. Elas ajudam a entender se o contato veio do <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a>, <a href="/servicos/meta-ads-foz-do-iguacu">Meta Ads</a>, blog, landing page, anúncio específico ou campanha sazonal.</p>
<div class="table-wrap"><table><thead><tr><th>Parâmetro</th><th>Exemplo de uso</th></tr></thead><tbody>
<tr><td>utm_source</td><td>google, meta, instagram, site</td></tr>
<tr><td>utm_medium</td><td>cpc, social, organic, referral</td></tr>
<tr><td>utm_campaign</td><td>advogado_foz, turismo_ferias, landing_page</td></tr>
<tr><td>utm_content</td><td>criativo_01, botao_whatsapp, anuncio_dor</td></tr>
</tbody></table></div>
<p>O Google disponibiliza um <a href="https://ga-dev-tools.google/campaign-url-builder/" target="_blank" rel="noopener noreferrer">construtor gratuito de URLs com UTMs</a> que facilita a criação desses links sem errar a sintaxe.</p>
<h2>Eventos importantes para medir</h2>
<p>O mínimo recomendado é medir clique no WhatsApp, envio de formulário, clique em telefone, clique em rota quando aplicável e visitas às páginas mais importantes. Para campanhas mais maduras, também faz sentido medir etapas posteriores, como lead qualificado, orçamento enviado, reunião marcada e venda realizada. Nosso serviço de <a href="/servicos/rastreamento-e-conversao">rastreamento e conversão</a> cobre toda essa estrutura.</p>
<h2>WhatsApp precisa de processo</h2>
<p>O WhatsApp é ótimo para conversão, mas ruim para análise quando não existe organização. Se todos os leads entram misturados, a empresa perde a origem. O ideal é usar links com mensagem personalizada por campanha, UTMs e algum tipo de registro em CRM, planilha ou sistema de atendimento.</p>
<h2>Qualidade do lead importa mais que volume</h2>
<p>A leitura correta não é apenas "qual campanha gerou mais leads?". A pergunta melhor é: "qual campanha gerou mais oportunidades com chance real de venda?". Para responder, é preciso classificar os contatos por qualidade, segmento, urgência, localização, orçamento e aderência à oferta.</p>
<h2>Conclusão</h2>
<p>Sem rastreamento, você otimiza para clique. Com rastreamento, você otimiza para oportunidade. Essa diferença muda tudo, porque permite investir mais no que gera negócio e cortar desperdícios com mais segurança. Entenda mais sobre <a href="/blog/como-escolher-gestor-de-trafego-em-foz-do-iguacu">como escolher um gestor de tráfego em Foz do Iguaçu</a> que saiba trabalhar com dados.</p>`,
  },
  {
    slug: "/blog/como-responder-avaliacoes-no-google-meu-negocio",
    title: "Como responder avaliações no Google Meu Negócio sem prejudicar sua marca",
    description: "Veja como responder avaliações positivas e negativas no Google Meu Negócio com profissionalismo, cuidado e foco em reputação local.",
    h1: "Como responder avaliações no Google Meu Negócio sem prejudicar sua marca",
    intro: "Responder avaliações é uma parte importante da gestão do Google Meu Negócio. Uma boa resposta mostra atenção, profissionalismo e cuidado com a experiência do cliente.",
    bodyHtml: `<p>Avaliações influenciam confiança. Quando uma pessoa encontra sua empresa no Google, ela não olha apenas a nota. Ela também observa comentários, fotos, quantidade de avaliações e como a empresa responde. Uma resposta bem feita pode reforçar credibilidade. Uma resposta mal feita pode aumentar o problema.</p>
<p>Responder avaliações não significa discutir, se defender a qualquer custo ou usar mensagens copiadas. Significa reconhecer a experiência do cliente, agradecer, orientar e mostrar postura profissional. A <a href="https://support.google.com/business/answer/3474050?hl=pt-BR" target="_blank" rel="noopener noreferrer">Central de Ajuda do Google</a> orienta sobre boas práticas ao responder avaliações no Perfil da Empresa.</p>
<h2>Como responder avaliações positivas</h2>
<p>Agradeça de forma natural, mencione o serviço quando fizer sentido e reforce que a empresa fica à disposição. Evite respostas idênticas em todos os comentários. Personalização simples já melhora a percepção.</p>
<p>Exemplo de resposta: "Obrigado pela avaliação, [nome]. Ficamos felizes em saber que sua experiência foi positiva. Seguimos à disposição sempre que precisar."</p>
<h2>Como responder avaliações negativas</h2>
<p>A resposta deve ser calma, objetiva e profissional. Evite confronto público. Reconheça o relato, peça mais detalhes se necessário e direcione para um canal de atendimento. Mesmo quando a crítica parecer injusta, a resposta será lida por futuros clientes.</p>
<p>Exemplo de resposta: "Olá, [nome]. Sentimos muito que sua experiência não tenha sido como esperado. Queremos entender melhor o ocorrido e buscar a melhor solução possível. Por favor, entre em contato pelo nosso canal oficial para avaliarmos o caso com atenção."</p>
<h2>O que evitar</h2>
<div class="table-wrap"><table><thead><tr><th>Erro</th><th>Por que prejudica</th></tr></thead><tbody>
<tr><td>Discutir publicamente</td><td>Passa imagem defensiva e pouco profissional.</td></tr>
<tr><td>Copiar a mesma resposta</td><td>Parece automático e sem cuidado.</td></tr>
<tr><td>Expor dados do cliente</td><td>Pode gerar problemas de privacidade.</td></tr>
<tr><td>Ignorar críticas</td><td>Dá sensação de abandono e descuido.</td></tr>
<tr><td>Prometer o que não será feito</td><td>Aumenta frustração e risco reputacional.</td></tr>
</tbody></table></div>
<h2>Avaliações devem virar aprendizado</h2>
<p>Além de responder, a empresa deve analisar padrões. Se várias pessoas reclamam de demora, atendimento ou informação desencontrada, isso indica gargalo real. Reputação não é apenas marketing; é reflexo da operação. Uma boa <a href="/servicos/google-meu-negocio-foz-do-iguacu">gestão do Google Meu Negócio</a> inclui esse acompanhamento sistemático.</p>
<h2>Conclusão</h2>
<p>Responder avaliações no Google Meu Negócio é uma oportunidade de mostrar maturidade. A empresa que responde bem transmite confiança, reduz insegurança de novos clientes e melhora a percepção da marca local. Se você ainda não tem o perfil configurado, veja como <a href="/servicos/google-meu-negocio-foz-do-iguacu#criacao">criar o Google Meu Negócio em Foz do Iguaçu</a>.</p>`,
  },
  {
    slug: "/blog/erros-que-fazem-leads-do-whatsapp-nao-virarem-clientes",
    title: "7 erros que fazem leads do WhatsApp não virarem clientes",
    description: "Veja 7 erros que fazem leads do WhatsApp não virarem clientes e como melhorar resposta, qualificação, follow-up e rastreamento comercial.",
    h1: "7 erros que fazem leads do WhatsApp não virarem clientes",
    intro: "Muitas empresas culpam os anúncios quando os leads não fecham, mas parte do problema acontece depois do clique. O WhatsApp pode converter muito bem, desde que exista velocidade, clareza, qualificação e follow-up.",
    cta: "Analisar meu funil de WhatsApp",
    bodyHtml: `<p>Nem todo problema de tráfego pago está na campanha. Em muitos casos, o anúncio gera contatos, mas o atendimento perde oportunidades por falta de processo. Isso é comum em negócios locais, profissionais liberais, clínicas, escritórios e prestadores de serviço.</p>
<p>O WhatsApp é um canal de alta intenção, mas também é um ambiente cheio de distração. O lead chama várias empresas, compara respostas e tende a avançar com quem responde rápido, entende a demanda e conduz a conversa com objetividade.</p>
<h2>1. Demorar para responder</h2>
<p>Velocidade não garante venda, mas demora mata oportunidade. Quando o lead chama pelo WhatsApp, ele normalmente está em momento de pesquisa ou decisão. Se a empresa responde horas depois, pode encontrar o cliente já atendido por outro concorrente.</p>
<h2>2. Não qualificar o contato</h2>
<p>Atender todo mundo da mesma forma reduz conversão. É preciso descobrir o que a pessoa precisa, onde está, qual urgência, se já pesquisou antes e qual solução faz sentido. Sem qualificação, o atendimento vira troca de mensagens soltas.</p>
<h2>3. Mandar mensagem genérica</h2>
<p>Respostas muito prontas passam sensação de descaso. O ideal é ter estrutura, mas personalizar a conversa. Um bom atendimento combina velocidade com contexto: chama pelo nome, confirma a necessidade e direciona o próximo passo.</p>
<h2>4. Não registrar origem</h2>
<p>Se a empresa não sabe de onde veio o contato, não sabe qual campanha funcionou. O mínimo é registrar se o lead veio de <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a>, <a href="/servicos/meta-ads-foz-do-iguacu">Meta Ads</a>, site, Google Meu Negócio, indicação ou orgânico. Sem isso, a otimização fica fraca. Entenda mais sobre <a href="/blog/como-rastrear-leads-de-trafego-pago">como rastrear leads de tráfego pago</a>.</p>
<h2>5. Depender só de áudio</h2>
<p>Áudio pode ajudar, mas não deve ser a base do atendimento. Muitas pessoas não conseguem ouvir na hora, e informações importantes se perdem. Mensagens curtas, objetivas e com próximos passos claros costumam funcionar melhor.</p>
<h2>6. Não ter follow-up</h2>
<p>Nem todo cliente fecha na primeira conversa. Sem follow-up, oportunidades mornas são abandonadas. A empresa precisa ter uma rotina simples para retomar contato, tirar dúvidas e oferecer o próximo passo sem ser invasiva.</p>
<h2>7. Medir apenas quantidade</h2>
<p>Ter muitos leads não significa ter bons leads. O que importa é quantos contatos tinham perfil, quantos receberam proposta, quantos avançaram e quantos viraram venda. Essa leitura evita cortar campanhas boas por análise superficial.</p>
<h2>Checklist rápido de melhoria</h2>
<div class="table-wrap"><table><thead><tr><th>Etapa</th><th>Pergunta de controle</th></tr></thead><tbody>
<tr><td>Resposta</td><td>O lead recebe retorno em poucos minutos?</td></tr>
<tr><td>Qualificação</td><td>A equipe sabe quais perguntas fazer?</td></tr>
<tr><td>Registro</td><td>A origem do lead fica anotada?</td></tr>
<tr><td>Próximo passo</td><td>A conversa termina com ação clara?</td></tr>
<tr><td>Follow-up</td><td>Existe retomada organizada?</td></tr>
<tr><td>Análise</td><td>A qualidade do lead é avaliada?</td></tr>
</tbody></table></div>
<h2>Conclusão</h2>
<p>Antes de culpar o tráfego, olhe o atendimento. Uma campanha mediana com atendimento bom pode performar melhor do que uma campanha boa com atendimento desorganizado. O WhatsApp precisa ser tratado como parte do funil, não como uma caixa de entrada solta.</p>`,
  },
  {
    slug: "/blog/google-ads-ou-meta-ads-foz-do-iguacu",
    title: "Google Ads ou Meta Ads: o que funciona melhor em Foz do Iguaçu?",
    description: "Compare Google Ads e Meta Ads para empresas em Foz do Iguaçu e entenda quando usar cada canal para gerar leads, demanda e vendas.",
    h1: "Google Ads ou Meta Ads: o que funciona melhor em Foz do Iguaçu?",
    intro: "A melhor plataforma depende da intenção do cliente, do tipo de oferta, do orçamento e do momento da empresa. Google Ads e Meta Ads podem funcionar muito bem, mas resolvem problemas diferentes.",
    cta: "Descobrir melhor canal para meu negócio",
    bodyHtml: `<p>A dúvida entre <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a> e <a href="/servicos/meta-ads-foz-do-iguacu">Meta Ads</a> é comum, mas a resposta certa raramente é "um é melhor que o outro". O Google costuma funcionar melhor quando o cliente já está pesquisando uma solução. A Meta costuma funcionar melhor quando a empresa precisa gerar demanda, educar o público ou aparecer antes da busca ativa.</p>
<p>Em Foz do Iguaçu, isso varia bastante por segmento. Um turista procurando restaurante, passeio, hotel ou transporte pode usar Google e Maps com intenção imediata. Já um serviço de maior consideração, como consultoria, estética, educação, advocacia informativa ou infoproduto, pode precisar de Meta Ads para gerar desejo e relacionamento.</p>
<h2>Quando priorizar Google Ads</h2>
<p>Google Ads tende a fazer sentido quando existe demanda ativa. Se a pessoa pesquisa "advogado trabalhista em Foz do Iguaçu", "clínica odontológica perto de mim", "hotel em Foz do Iguaçu" ou "gestor de tráfego em Foz do Iguaçu", ela já demonstrou intenção. Esse canal costuma ser forte para serviços com urgência, comparação direta e busca local.</p>
<h2>Quando priorizar Meta Ads</h2>
<p>Meta Ads costuma ser melhor para gerar atenção e desejo. A pessoa pode não estar pesquisando agora, mas pode se interessar ao ver uma oferta clara, prova social, antes e depois, conteúdo educativo ou oportunidade específica. Esse canal é muito útil para remarketing, campanhas de conteúdo, geração de demanda para negócios locais, turismo, eventos, gastronomia, estética e ofertas com apelo visual.</p>
<h2>Comparativo prático</h2>
<div class="table-wrap"><table><thead><tr><th>Critério</th><th>Google Ads</th><th>Meta Ads</th></tr></thead><tbody>
<tr><td>Intenção</td><td>Alta quando há busca ativa</td><td>Média ou baixa, depende do criativo e oferta</td></tr>
<tr><td>Velocidade de aprendizado</td><td>Boa quando há volume de buscas</td><td>Boa quando há verba para testar criativos</td></tr>
<tr><td>Melhor uso</td><td>Capturar demanda existente</td><td>Criar demanda e fazer remarketing</td></tr>
<tr><td>Risco comum</td><td>Pagar por palavra ampla ou irrelevante</td><td>Gerar lead curioso sem intenção real</td></tr>
<tr><td>Métrica crítica</td><td>Termos de busca e conversões</td><td>Criativo, público, mensagem e qualidade do lead</td></tr>
</tbody></table></div>
<p>O <a href="https://ads.google.com/intl/pt-BR_br/home/resources/google-ads-vs-facebook-ads/" target="_blank" rel="noopener noreferrer">Google também disponibiliza comparativos entre suas plataformas de anúncios</a> que podem ajudar na decisão dependendo do objetivo comercial.</p>
<h2>O melhor cenário</h2>
<p>Em muitos casos, a melhor estratégia não é escolher um canal, mas organizar o papel de cada um. Google Ads captura quem já procura. Meta Ads aquece, educa, faz remarketing e reforça autoridade. O <a href="/servicos/landing-pages-foz-do-iguacu">site, a landing page</a>, o WhatsApp e o <a href="/servicos/rastreamento-e-conversao">rastreamento</a> conectam tudo.</p>
<h2>Conclusão</h2>
<p>Se o orçamento é limitado, comece pelo canal mais próximo da intenção de compra. Se já existe demanda ativa, Google Ads pode ser prioridade. Se o mercado precisa ser educado ou a oferta depende de desejo, Meta Ads pode entrar primeiro. O importante é não decidir por preferência pessoal, e sim por intenção, margem e rastreamento. Entenda mais: <a href="/blog/quanto-custa-trafego-pago-em-foz-do-iguacu">quanto custa contratar tráfego pago em Foz do Iguaçu</a>.</p>`,
  },
  {
    slug: "/blog/google-meu-negocio-ou-site-o-que-priorizar",
    title: "Google Meu Negócio ou site: o que priorizar primeiro?",
    description: "Entenda quando priorizar Google Meu Negócio, quando investir em site e como os dois canais se complementam para gerar leads locais.",
    h1: "Google Meu Negócio ou site: o que priorizar primeiro?",
    intro: "Para empresas locais, a resposta ideal quase nunca é escolher um e ignorar o outro. Google Meu Negócio e site têm papéis diferentes na jornada do cliente e funcionam melhor quando estão conectados.",
    bodyHtml: `<p>O Google Meu Negócio é ótimo para presença local rápida. Ele ajuda a empresa a aparecer na Busca e no Maps com telefone, horário, rota, fotos e avaliações. Já o site é melhor para explicar serviços em profundidade, criar conteúdo, captar leads, rodar campanhas e medir comportamento.</p>
<p>Se a empresa está começando e ainda não tem nenhuma presença local, o <a href="https://business.google.com/" target="_blank" rel="noopener noreferrer">Perfil da Empresa no Google</a> pode ser o primeiro passo. Mas se o objetivo é crescer com SEO, anúncios e conversão, o site se torna indispensável.</p>
<h2>Quando priorizar Google Meu Negócio</h2>
<p>Priorize o Google Meu Negócio quando a empresa atende localmente, recebe visitas, depende de rotas, precisa aparecer no Maps ou ainda não tem uma presença básica no Google. Restaurantes, clínicas, lojas, prestadores de serviço, turismo e negócios com atendimento regional costumam se beneficiar bastante. Veja como começar: <a href="/blog/google-meu-negocio-para-empresas-locais-em-foz-do-iguacu">Google Meu Negócio para empresas locais em Foz do Iguaçu</a>.</p>
<h2>Quando priorizar site</h2>
<p>Priorize o site quando a empresa precisa explicar serviços complexos, gerar autoridade, criar blog, rodar <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a>, medir conversões ou apresentar diferenciais com mais profundidade. O site também é essencial quando o negócio quer depender menos de plataformas externas. O Google reforça que <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br" target="_blank" rel="noopener noreferrer">ter conteúdo útil e de qualidade</a> é o principal fator para crescer no orgânico.</p>
<h2>Comparativo prático</h2>
<div class="table-wrap"><table><thead><tr><th>Critério</th><th>Google Meu Negócio</th><th>Site</th></tr></thead><tbody>
<tr><td>Velocidade inicial</td><td>Alta</td><td>Média</td></tr>
<tr><td>Profundidade de informação</td><td>Limitada</td><td>Alta</td></tr>
<tr><td>SEO local</td><td>Muito importante</td><td>Muito importante</td></tr>
<tr><td>Controle de layout</td><td>Baixo</td><td>Alto</td></tr>
<tr><td>Rastreamento de campanha</td><td>Limitado</td><td>Mais completo</td></tr>
<tr><td>Conteúdo educativo</td><td>Limitado</td><td>Forte</td></tr>
<tr><td>Conversão personalizada</td><td>Média</td><td>Alta</td></tr>
</tbody></table></div>
<h2>O melhor caminho</h2>
<p>Para a maioria das empresas, o melhor caminho é configurar bem o Perfil da Empresa e usar o site como base principal de conteúdo e conversão. O perfil gera confiança e visibilidade local. O site explica, filtra, convence e mede melhor. Veja nossos serviços: <a href="/servicos/google-meu-negocio-foz-do-iguacu#criacao">criação de Google Meu Negócio</a> e <a href="/servicos/landing-pages-foz-do-iguacu">sites e landing pages para negócios locais</a>.</p>
<h2>Conclusão</h2>
<p>Se você quer o mínimo para ser encontrado, comece pelo Google Meu Negócio. Se quer construir aquisição previsível, combine Google Meu Negócio, site, SEO, anúncios e <a href="/servicos/rastreamento-e-conversao">rastreamento</a>. Um canal fortalece o outro.</p>`,
  },
  {
    slug: "/blog/google-meu-negocio-para-empresas-locais-em-foz-do-iguacu",
    title: "Google Meu Negócio para empresas locais em Foz do Iguaçu: por onde começar",
    description: "Entenda como empresas locais em Foz do Iguaçu podem usar o Google Meu Negócio para aparecer na Busca, no Maps e gerar mais contatos.",
    h1: "Google Meu Negócio para empresas locais em Foz do Iguaçu: por onde começar",
    intro: "O Google Meu Negócio — hoje chamado Perfil da Empresa no Google — é uma base importante para negócios locais que querem ser encontrados na Busca Google e no Maps. Mas criar o perfil é só o primeiro passo.",
    bodyHtml: `<p>Empresas locais dependem de confiança e facilidade de contato. Quando alguém procura por um serviço em Foz do Iguaçu, é comum comparar opções no Google, olhar avaliações, conferir fotos, abrir rota e chamar no WhatsApp. O <a href="https://business.google.com/" target="_blank" rel="noopener noreferrer">Perfil da Empresa no Google</a> ajuda a concentrar essas informações em um lugar visível.</p>
<p>O erro é tratar o perfil como um cadastro simples. Ele funciona como uma vitrine local. Se as informações estão incompletas, as fotos são fracas ou o horário está errado, o cliente pode escolher outro concorrente sem nem entrar no seu site.</p>
<h2>O que não pode faltar no perfil</h2>
<div class="table-wrap"><table><thead><tr><th>Elemento</th><th>Por que é importante</th></tr></thead><tbody>
<tr><td>Categoria correta</td><td>Ajuda o Google e o usuário a entenderem o tipo de negócio.</td></tr>
<tr><td>Telefone e WhatsApp</td><td>Reduz fricção para o contato.</td></tr>
<tr><td>Horário atualizado</td><td>Evita frustração e perda de oportunidade.</td></tr>
<tr><td>Fotos reais</td><td>Aumenta percepção de confiança.</td></tr>
<tr><td>Serviços descritos</td><td>Mostra o que a empresa oferece antes do contato.</td></tr>
<tr><td>Avaliações respondidas</td><td>Demonstra atenção e profissionalismo.</td></tr>
<tr><td>Link para site</td><td>Permite apresentar informações completas e medir melhor os leads.</td></tr>
</tbody></table></div>
<p>A <a href="https://support.google.com/business/answer/7091?hl=pt-BR" target="_blank" rel="noopener noreferrer">Central de Ajuda do Google para Perfil da Empresa</a> explica cada um desses elementos e como configurá-los corretamente.</p>
<h2>Criação não é gestão</h2>
<p>Criar o perfil é organizar a base. Gerir o perfil é manter essa base viva. Empresas que dependem de busca local devem revisar dados, publicar fotos, responder avaliações e acompanhar insights de desempenho. Isso evita que o perfil fique desatualizado e perca força comercial. Conheça nosso serviço de <a href="/servicos/google-meu-negocio-foz-do-iguacu">gestão de Google Meu Negócio em Foz do Iguaçu</a>.</p>
<h2>Google Meu Negócio e tráfego pago</h2>
<p>O perfil também conversa com anúncios. Uma empresa que investe em <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a>, mas tem perfil ruim no Maps, pode perder confiança. O usuário pode clicar no anúncio, pesquisar a empresa, ver poucas avaliações ou informações inconsistentes e desistir. Veja como os dois se complementam em: <a href="/blog/google-meu-negocio-ou-site-o-que-priorizar">Google Meu Negócio ou site: o que priorizar primeiro?</a></p>
<h2>Conclusão</h2>
<p>Se sua empresa atende em Foz do Iguaçu, o Google Meu Negócio precisa ser tratado como parte do funil de aquisição. Ele não substitui site, campanha ou atendimento, mas ajuda a transformar buscas locais em contatos mais confiáveis. O próximo passo é <a href="/servicos/google-meu-negocio-foz-do-iguacu#criacao">criar o seu Perfil da Empresa no Google</a> com a estrutura certa.</p>`,
  },
  {
    slug: "/blog/landing-page-para-negocios-locais-em-foz-do-iguacu",
    title: "Landing page para negócios locais em Foz do Iguaçu: o que precisa ter",
    description: "Veja o que uma landing page para negócios locais em Foz do Iguaçu precisa ter para converter cliques em leads pelo WhatsApp, formulário ou ligação.",
    h1: "Landing page para negócios locais em Foz do Iguaçu: o que precisa ter",
    intro: "Uma landing page local não precisa ser complexa, mas precisa ser clara. Ela deve explicar a oferta, gerar confiança, facilitar o contato e medir o que acontece depois do clique.",
    cta: "Analisar minha página",
    bodyHtml: `<p>Uma boa landing page para negócios locais tem uma função simples: transformar visita em contato qualificado. Ela não precisa ter dezenas de seções, animações pesadas ou textos genéricos. Precisa responder rapidamente se a empresa atende a necessidade do visitante, por que é confiável e qual é o próximo passo.</p>
<p>Em campanhas locais, especialmente com <a href="/servicos/gestao-de-trafego-pago">tráfego pago</a>, mandar todo mundo para a home pode reduzir conversão. A home costuma falar de várias coisas ao mesmo tempo. A landing page direciona a atenção para uma oferta, um serviço, um público ou uma região.</p>
<h2>Estrutura recomendada</h2>
<div class="table-wrap"><table><thead><tr><th>Seção</th><th>Função</th></tr></thead><tbody>
<tr><td>Hero com promessa clara</td><td>Mostrar serviço, localidade e benefício principal.</td></tr>
<tr><td>CTA visível</td><td>Facilitar WhatsApp, formulário ou ligação.</td></tr>
<tr><td>Problemas que a empresa resolve</td><td>Conectar com a dor real do usuário.</td></tr>
<tr><td>Serviços ou diferenciais</td><td>Explicar o que está incluso e por que escolher a empresa.</td></tr>
<tr><td>Prova de confiança</td><td>Mostrar avaliações, fotos, cases, credenciais ou experiência.</td></tr>
<tr><td>FAQ</td><td>Reduzir objeções antes do contato.</td></tr>
<tr><td>Rastreamento</td><td>Medir cliques, formulários, ligações e origem dos leads.</td></tr>
</tbody></table></div>
<h2>Erros comuns</h2>
<p>O erro mais comum é criar uma página bonita, mas sem foco. Outro problema é esconder o botão de contato, usar textos vagos, não adaptar para celular e não medir conversões. Também é ruim usar fotos genéricas demais quando o negócio depende de confiança local. Veja as <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br" target="_blank" rel="noopener noreferrer">diretrizes do Google sobre conteúdo útil</a> para entender o que realmente importa numa página.</p>
<h2>O papel do mobile</h2>
<p>Grande parte dos acessos locais acontece pelo celular. Por isso, a landing page precisa carregar rápido, ter botões fáceis de clicar, texto legível e WhatsApp bem posicionado. O Google considera a experiência mobile como fator de ranqueamento — veja mais no <a href="https://developers.google.com/search/docs/appearance/page-experience?hl=pt-br" target="_blank" rel="noopener noreferrer">guia de experiência da página do Google Search Central</a>. Se a pessoa precisa dar zoom ou procurar o contato, a página já perdeu eficiência.</p>
<h2>Landing page e atendimento precisam conversar</h2>
<p>A página pode prometer diagnóstico, orçamento, reserva, avaliação ou conversa inicial. Mas o atendimento precisa continuar essa promessa. Se o CTA diz "solicitar orçamento" e o WhatsApp responde com mensagem confusa, a conversão cai. Leia também: <a href="/blog/erros-que-fazem-leads-do-whatsapp-nao-virarem-clientes">7 erros que fazem leads do WhatsApp não virarem clientes</a>.</p>
<h2>Conclusão</h2>
<p>Uma landing page local eficiente é direta, rápida, confiável e mensurável. Ela não deve ser avaliada apenas pelo design, mas pela capacidade de gerar contatos melhores e permitir decisões de otimização. Conheça nosso serviço de <a href="/servicos/landing-pages-foz-do-iguacu">criação de landing pages em Foz do Iguaçu</a>.</p>`,
  },
  {
    slug: "/blog/quanto-custa-trafego-pago-em-foz-do-iguacu",
    title: "Quanto custa contratar tráfego pago em Foz do Iguaçu?",
    description: "Entenda quanto custa contratar tráfego pago em Foz do Iguaçu, separando verba de mídia, gestão, setup, rastreamento e expectativa de retorno.",
    h1: "Quanto custa contratar tráfego pago em Foz do Iguaçu?",
    intro: "O custo de tráfego pago não é apenas a mensalidade da gestão. Para avaliar se vale a pena, é preciso separar verba de anúncios, serviço de gestão, estrutura inicial, página, rastreamento e capacidade de conversão comercial.",
    cta: "Pedir análise de investimento",
    bodyHtml: `<p>A pergunta "quanto custa tráfego pago?" é legítima, mas incompleta. O investimento total depende do objetivo, segmento, concorrência, ticket médio, margem, maturidade da empresa e estrutura atual. Uma campanha para gerar reservas em turismo não tem a mesma lógica de uma campanha para advocacia, estética, comércio local ou serviço B2B.</p>
<p>O primeiro ponto é separar verba de mídia e honorário de gestão. A verba de mídia é o dinheiro pago às plataformas, como <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a> ou <a href="/servicos/meta-ads-foz-do-iguacu">Meta Ads</a>. A gestão é o trabalho de planejamento, criação, acompanhamento, otimização, análise e comunicação.</p>
<h2>Verba de mídia não é o mesmo que gestão</h2>
<div class="table-wrap"><table><thead><tr><th>Custo</th><th>O que significa</th></tr></thead><tbody>
<tr><td>Verba de mídia</td><td>Valor investido diretamente nos anúncios (pago ao Google ou Meta).</td></tr>
<tr><td>Gestão</td><td>Serviço profissional para planejar, configurar e otimizar campanhas.</td></tr>
<tr><td>Setup</td><td>Organização inicial de contas, tags, eventos, públicos, criativos e estrutura.</td></tr>
<tr><td>Página ou landing page</td><td>Destino criado para aumentar conversão dos cliques.</td></tr>
<tr><td>Rastreamento</td><td>Configuração para medir leads e origem dos contatos.</td></tr>
</tbody></table></div>
<h2>Existe investimento mínimo?</h2>
<p>Existe um investimento mínimo prático, mesmo que não exista uma regra universal. Se a verba for muito baixa, a campanha pode não gerar dados suficientes para aprender. O problema não é apenas "aparecer pouco", mas não ter volume para identificar palavras, públicos, anúncios e canais que funcionam.</p>
<p>Para empresas locais, o ideal é começar com um orçamento que permita testar com consistência, medir leads e ajustar a rota. Investir pouco demais pode parecer seguro, mas às vezes só gera dados fracos e conclusões erradas.</p>
<h2>Como saber se vale a pena?</h2>
<p>A conta deve considerar margem e conversão, não apenas CPL. Um lead de R$ 40 pode ser caro se nunca fecha. Um lead de R$ 120 pode ser barato se vira contrato de alto valor. Por isso, a análise precisa conectar anúncio, lead, atendimento, proposta e venda. Leia mais em <a href="/blog/como-rastrear-leads-de-trafego-pago">como rastrear leads de tráfego pago</a> para entender como montar essa conta.</p>
<h2>Conclusão</h2>
<p>Contratar tráfego pago em Foz do Iguaçu pode valer muito a pena, mas só quando existe clareza de objetivo, estrutura mínima e acompanhamento de dados. O menor preço nem sempre é o menor risco. O melhor investimento é aquele que permite aprender, otimizar e vender com previsibilidade. Se quiser entender melhor o processo, consulte nossa <a href="/consultoria">consultoria estratégica</a>.</p>`,
  },
  {
    slug: "/blog/seo-local-para-negocios-em-foz-do-iguacu",
    title: "SEO local para negócios em Foz do Iguaçu: guia prático para gerar mais contatos",
    description: "Guia prático de SEO local para negócios em Foz do Iguaçu: site, Google Meu Negócio, conteúdo, avaliações, Maps e rastreamento.",
    h1: "SEO local para negócios em Foz do Iguaçu: guia prático para gerar mais contatos",
    intro: "SEO local é o conjunto de ações que ajuda uma empresa a ser encontrada por pessoas que pesquisam por soluções em uma região específica. Para negócios em Foz do Iguaçu, isso envolve site, Google Meu Negócio, conteúdo, avaliações, rastreamento e experiência de contato.",
    bodyHtml: `<p>SEO local não é apenas colocar o nome da cidade no título da página. É construir uma presença digital coerente para que o usuário encontre sua empresa, entenda o que você faz, confie na sua marca e consiga entrar em contato sem dificuldade.</p>
<p>Em Foz do Iguaçu, a lógica local é forte para restaurantes, turismo, hotéis, clínicas, escritórios, prestadores de serviço, profissionais liberais e negócios que atendem por região. Quem pesquisa localmente costuma ter intenção prática: quer comparar opções, pedir orçamento, ligar, abrir rota ou chamar no WhatsApp. O <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br" target="_blank" rel="noopener noreferrer">Guia de SEO para iniciantes do Google Search Central</a> é a referência oficial para entender o que o Google valoriza nas buscas.</p>
<h2>Os pilares do SEO local</h2>
<div class="table-wrap"><table><thead><tr><th>Pilar</th><th>O que fazer</th></tr></thead><tbody>
<tr><td>Site</td><td>Criar páginas claras para serviços, nichos e localização.</td></tr>
<tr><td>Google Meu Negócio</td><td>Manter perfil completo, atualizado e com fotos reais.</td></tr>
<tr><td>Conteúdo</td><td>Responder dúvidas reais do público local com profundidade.</td></tr>
<tr><td>Avaliações</td><td>Estimular feedbacks verdadeiros e responder com cuidado.</td></tr>
<tr><td>Consistência</td><td>Usar dados coerentes em site, redes, mapas e diretórios.</td></tr>
<tr><td>Rastreamento</td><td>Medir contatos, origem dos leads e qualidade comercial.</td></tr>
</tbody></table></div>
<h2>Conteúdo local precisa ser útil</h2>
<p>Não adianta criar várias páginas repetindo "em Foz do Iguaçu" sem agregar valor. O conteúdo precisa ajudar o usuário a decidir. Isso significa explicar custos, processos, critérios de escolha, erros comuns, prazos, dúvidas frequentes e diferenças entre soluções. O Google reforça em seu guia de <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br" target="_blank" rel="noopener noreferrer">como criar conteúdo útil</a> que páginas criadas para enganar mecanismos de busca são penalizadas — o foco deve ser sempre o usuário.</p>
<h2>Google Meu Negócio e site trabalham juntos</h2>
<p>O <a href="/servicos/google-meu-negocio-foz-do-iguacu">Perfil da Empresa no Google</a> ajuda na descoberta e na confiança local. O site aprofunda a decisão. Quando os dois estão bem configurados, a empresa melhora a experiência do usuário e cria mais caminhos para conversão. Leia mais: <a href="/blog/google-meu-negocio-ou-site-o-que-priorizar">Google Meu Negócio ou site: o que priorizar primeiro?</a></p>
<h2>SEO local e tráfego pago</h2>
<p>SEO local é construção. Tráfego pago é aceleração. O ideal é usar os dois quando possível. Enquanto o SEO constrói presença e autoridade, os anúncios geram demanda mais previsível e ajudam a testar mensagens, ofertas e páginas. Entenda mais: <a href="/blog/google-ads-ou-meta-ads-foz-do-iguacu">Google Ads ou Meta Ads: o que funciona melhor em Foz do Iguaçu?</a></p>
<h2>Como saber se o SEO local está funcionando</h2>
<p>Acompanhe acessos orgânicos, posições aproximadas, cliques para WhatsApp, ligações, formulários, rotas, termos de busca e qualidade dos contatos. O objetivo não é apenas ter mais visitas, mas gerar mais oportunidades úteis. Nosso serviço de <a href="/servicos/rastreamento-e-conversao">rastreamento e conversão</a> ajuda a conectar SEO com resultados comerciais.</p>
<h2>Conclusão</h2>
<p>SEO local bem feito conecta conteúdo, presença no Maps, site, reputação e dados. Para empresas em Foz do Iguaçu, isso pode reduzir dependência exclusiva de anúncios e melhorar a previsibilidade na geração de leads. Se você quer um diagnóstico gratuito do seu SEO e presença digital, entre em contato com nosso <a href="/consultoria">serviço de consultoria</a>.</p>`,
  },
  {
    slug: "/blog/trafego-pago-para-advogados-em-foz-do-iguacu",
    title: "Tráfego pago para advogados em Foz do Iguaçu: como fazer com ética",
    description: "Entenda como advogados em Foz do Iguaçu podem usar tráfego pago com abordagem informativa, ética, rastreamento e foco em autoridade.",
    h1: "Tráfego pago para advogados em Foz do Iguaçu: como fazer com ética",
    intro: "O tráfego pago para advogados exige cuidado. A comunicação precisa ser informativa, sóbria e alinhada às regras profissionais, evitando promessa de resultado, captação agressiva e linguagem mercantilista.",
    cta: "Solicitar diagnóstico jurídico",
    bodyHtml: `<p>Advogados podem usar marketing digital, mas precisam fazer isso com mais critério do que muitos outros segmentos. A estratégia não deve se apoiar em promessa, urgência artificial ou abordagem sensacionalista. O caminho mais seguro é produzir comunicação informativa, clara e orientada a dúvidas reais do público.</p>
<p>Em Foz do Iguaçu, a concorrência jurídica também passa pela confiança local. O potencial cliente quer entender se o advogado atua no tema, se comunica com clareza e se passa segurança. O tráfego pago pode acelerar essa descoberta, desde que a mensagem respeite os limites éticos da profissão. O <a href="https://www.oab.org.br/legislacaooab/integra.asp?tipo=CodEtProvDA&num=&ano=" target="_blank" rel="noopener noreferrer">Código de Ética e Disciplina da OAB</a> define os limites da publicidade para advogados e deve ser a referência central de qualquer estratégia de marketing jurídico.</p>
<h2>O que evitar</h2>
<p>Evite prometer causa ganha, usar termos como "garantido", explorar dor de forma exagerada, oferecer consulta como promoção, comparar-se de forma agressiva com outros profissionais ou usar linguagem de venda incompatível com a advocacia.</p>
<p>Também é preciso cuidado com anúncios que parecem captar clientes de forma direta e apelativa. A abordagem deve ser educativa: explicar direitos, processos, documentos, prazos e caminhos possíveis, sempre sem transformar o anúncio em promessa.</p>
<h2>Estratégias mais seguras</h2>
<div class="table-wrap"><table><thead><tr><th>Estratégia</th><th>Como aplicar</th></tr></thead><tbody>
<tr><td>Conteúdo informativo</td><td>Criar artigos e páginas que respondem dúvidas frequentes sobre a área de atuação.</td></tr>
<tr><td>Google Ads com intenção</td><td>Trabalhar termos relacionados à área de atuação com cuidado na copy do anúncio.</td></tr>
<tr><td>Landing pages sóbrias</td><td>Explicar atuação, experiência, contato e próximos passos sem promessa.</td></tr>
<tr><td>Rastreamento</td><td>Medir contatos sem expor dados sensíveis dos clientes.</td></tr>
<tr><td>WhatsApp profissional</td><td>Atendimento objetivo, discreto e com orientação inicial adequada.</td></tr>
</tbody></table></div>
<h2>O papel do SEO e do conteúdo</h2>
<p>Para advocacia, SEO pode ser uma base forte porque permite construir autoridade com conteúdo educativo. Posts sobre dúvidas frequentes atraem pessoas em fase de pesquisa e ajudam a reduzir dependência exclusiva de anúncios. O tráfego pago pode impulsionar páginas relevantes, mas o conteúdo precisa ser sério e bem escrito. Leia: <a href="/blog/seo-local-para-negocios-em-foz-do-iguacu">SEO local para negócios em Foz do Iguaçu</a>.</p>
<h2>Conclusão</h2>
<p>Tráfego pago para advogados funciona melhor quando é tratado como estratégia de autoridade e orientação, não como venda agressiva. O objetivo é ser encontrado por quem precisa de informação jurídica e conduzir o contato com profissionalismo. Entenda mais sobre <a href="/blog/como-escolher-gestor-de-trafego-em-foz-do-iguacu">como escolher um gestor de tráfego</a> que entenda as particularidades da advocacia.</p>`,
  },
  {
    slug: "/blog/trafego-pago-para-hoteis-turismo-restaurantes-foz",
    title: "Tráfego pago para hotéis, turismo e restaurantes em Foz do Iguaçu",
    description: "Veja estratégias de tráfego pago para hotéis, turismo e restaurantes em Foz do Iguaçu, considerando sazonalidade, Google Maps, reservas e WhatsApp.",
    h1: "Tráfego pago para hotéis, turismo e restaurantes em Foz do Iguaçu",
    intro: "Foz do Iguaçu tem forte demanda turística, mas isso não significa que todo anúncio vai funcionar. Hotéis, restaurantes e empresas de turismo precisam considerar sazonalidade, intenção de busca, localização, reputação e velocidade de atendimento.",
    cta: "Avaliar campanha para turismo",
    bodyHtml: `<p>Turismo é um dos mercados mais importantes de Foz do Iguaçu, mas também é altamente competitivo. O visitante compara preço, localização, avaliações, fotos, distância, facilidade de reserva e resposta no WhatsApp. Por isso, a estratégia de tráfego pago precisa conectar anúncios, <a href="/servicos/google-meu-negocio-foz-do-iguacu">Google Maps</a>, site, perfil da empresa, reputação e atendimento.</p>
<p>Campanhas para turismo não devem ser planejadas apenas por canal. É preciso entender o momento da viagem. Há pessoas pesquisando meses antes, pessoas montando roteiro na semana e turistas que já estão na cidade decidindo onde comer, comprar ou visitar.</p>
<h2>Estratégias por segmento</h2>
<div class="table-wrap"><table><thead><tr><th>Segmento</th><th>Estratégia recomendada</th></tr></thead><tbody>
<tr><td>Hotéis e pousadas</td><td>Campanhas por intenção de busca, remarketing e páginas com diferenciais claros.</td></tr>
<tr><td>Restaurantes</td><td>Google Maps, campanhas locais, fotos fortes, avaliações e ofertas por momento do dia.</td></tr>
<tr><td>Passeios turísticos</td><td>Google Ads para busca ativa e Meta Ads para inspirar roteiro.</td></tr>
<tr><td>Transporte e receptivo</td><td>Anúncios com urgência, rota, confiança e atendimento rápido.</td></tr>
<tr><td>Comércio turístico</td><td>Campanhas por localização, sazonalidade e públicos em visita à cidade.</td></tr>
</tbody></table></div>
<h2>Google Ads no turismo</h2>
<p><a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a> costuma funcionar bem quando o turista já sabe o que quer. Pesquisas por hotel, restaurante, passeio, transfer ou ingresso indicam intenção mais próxima da compra. O desafio é separar buscas informativas de buscas com potencial real de reserva.</p>
<h2>Meta Ads no turismo</h2>
<p><a href="/servicos/meta-ads-foz-do-iguacu">Meta Ads</a> é forte para desejo e descoberta. Fotos, vídeos curtos, experiências, pratos, ambientes e depoimentos podem despertar interesse antes da busca. Também funciona bem para remarketing de quem visitou o site ou interagiu com o perfil.</p>
<h2>Google Meu Negócio e Maps são decisivos</h2>
<p>No turismo local, o Perfil da Empresa no Google pode influenciar muito a decisão. Fotos ruins, horário errado ou avaliações sem resposta podem prejudicar a conversão mesmo quando o anúncio está bom. Por isso, mídia paga e presença local precisam andar juntas. Veja: <a href="/servicos/google-meu-negocio-foz-do-iguacu">gestão de Google Meu Negócio em Foz do Iguaçu</a>. Segundo dados do <a href="https://www.visitbrasil.com/estatisticas/" target="_blank" rel="noopener noreferrer">Ministério do Turismo</a>, Foz do Iguaçu é um dos destinos mais visitados do Brasil, o que aumenta ainda mais a competição pela atenção online.</p>
<h2>Conclusão</h2>
<p>Hotéis, turismo e restaurantes em Foz do Iguaçu precisam de campanhas que respeitem intenção, sazonalidade e comportamento de decisão. O canal importa, mas o conjunto importa mais: anúncio, fotos, reputação, página, atendimento e rastreamento. Entenda como o <a href="/blog/como-rastrear-leads-de-trafego-pago">rastreamento de leads</a> ajuda a entender quais canais funcionam melhor para o seu tipo de negócio.</p>`,
  }
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
    slug: "/servicos/google-meu-negocio-foz-do-iguacu",
    title: "Google Meu Negócio em Foz do Iguaçu",
    description: "Criação e gestão do Perfil da Empresa no Google para empresas locais aparecerem melhor na Busca Google e no Maps.",
    h1: "Google Meu Negócio em Foz do Iguaçu",
    intro: "O Google Meu Negócio — hoje chamado oficialmente de Perfil da Empresa no Google — é uma das principais vitrines digitais para negócios locais. Ele aparece quando alguém pesquisa por serviços, clínicas, restaurantes, escritórios ou profissionais próximos. Para empresas em Foz do Iguaçu, isso é ainda mais relevante: turismo, atendimento por região, rotas pelo Maps e contatos rápidos pelo WhatsApp dependem de um perfil bem estruturado.",
    introHtml: `O Google Meu Negócio — hoje chamado oficialmente de <strong>Perfil da Empresa no Google</strong> — é uma das principais vitrines digitais para negócios locais. Ele aparece quando alguém pesquisa por serviços, clínicas, restaurantes, escritórios ou profissionais próximos. Para empresas em Foz do Iguaçu, isso é ainda mais relevante: turismo, atendimento por região, rotas pelo Maps e contatos rápidos pelo WhatsApp dependem de um perfil bem estruturado.<br><br>Um perfil mal configurado ou abandonado passa uma imagem pouco profissional e perde a confiança de quem está comparando opções — justamente no momento em que o cliente está perto de decidir.`,
    kicker: "Serviço de presença local no Google",
    sections: [],
    contentHtml: `<section class="section content-section"><div class="wrap prose-blocks">
    <article class="prose-block" data-reveal>
      <h2>O que oferecemos</h2>
      <p>Unimos criação e gestão do Perfil da Empresa no Google em uma frente única: primeiro organizamos a base para que sua empresa seja encontrada com clareza, depois mantemos o perfil vivo, atualizado e conectado ao restante da estratégia digital.</p>
    </article>
    <article class="prose-block" id="criacao" data-reveal>
      <h2>Criação do Google Meu Negócio</h2>
      <p><em>Para empresas que ainda não têm perfil ou perderam o acesso.</em></p>
      <p>Criar um perfil corretamente vai além de preencher nome, telefone e endereço. A estrutura influencia como sua empresa é percebida e encontrada. Configuramos cada elemento para gerar confiança desde o primeiro contato.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Item configurado</th><th>Por que isso importa</th></tr></thead>
        <tbody>
          <tr><td>Nome comercial correto</td><td>Evita inconsistência e problemas de validação.</td></tr>
          <tr><td>Categoria principal e secundárias</td><td>Ajuda o Google e o usuário a entenderem o tipo de negócio.</td></tr>
          <tr><td>Endereço ou área de atendimento</td><td>Define se a empresa recebe no local ou atende por deslocamento.</td></tr>
          <tr><td>Telefone, site e WhatsApp</td><td>Reduz fricção entre pesquisa e atendimento.</td></tr>
          <tr><td>Horário de funcionamento</td><td>Evita ligações perdidas, rotas frustradas e reclamações.</td></tr>
          <tr><td>Descrição da empresa</td><td>Explica o que a empresa faz com linguagem clara e natural.</td></tr>
          <tr><td>Serviços ou produtos</td><td>Mostra as principais soluções antes do contato.</td></tr>
          <tr><td>Fotos iniciais</td><td>Aumenta percepção de profissionalismo e confiança.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Para quem faz sentido:</strong> empresas novas, negócios sem perfil criado, empresas que mudaram de endereço, profissionais que atendem por região e negócios que aparecem no Google mas não têm controle do próprio perfil.</p>
    </article>
    <article class="prose-block" id="gestao" data-reveal>
      <h2>Gestão do Google Meu Negócio</h2>
      <p><em>Para empresas que já têm perfil e querem mantê-lo gerando contatos.</em></p>
      <p>Ter o perfil criado é apenas o começo. Um perfil parado perde força comercial porque deixa de refletir a realidade da empresa. A gestão contínua mantém o perfil atualizado, alinhado com campanhas e focado em gerar contatos qualificados — não apenas visualizações.</p>
      <div class="table-wrap"><table>
        <thead><tr><th>Frente de gestão</th><th>Como trabalhamos</th></tr></thead>
        <tbody>
          <tr><td>Atualização de informações</td><td>Telefone, site, horário, área de atendimento e links de contato.</td></tr>
          <tr><td>Serviços e descrições</td><td>Textos claros, orientados à busca local e à decisão do cliente.</td></tr>
          <tr><td>Fotos e identidade visual</td><td>Imagens que reforçam estrutura, equipe, atendimento ou ambiente.</td></tr>
          <tr><td>Postagens no perfil</td><td>Serviços, diferenciais, avisos e novidades.</td></tr>
          <tr><td>Avaliações</td><td>Orientação para estimular avaliações reais e responder comentários.</td></tr>
          <tr><td>Perguntas e respostas</td><td>Respostas úteis para reduzir fricção antes do contato.</td></tr>
          <tr><td>Insights do perfil</td><td>Leitura de buscas, ligações, rotas e cliques para melhorar decisões.</td></tr>
          <tr><td>Integração com mídia paga</td><td>Alinhamento com <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a>, landing pages e rastreamento de leads.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Para quem faz sentido:</strong> empresas com perfil incompleto, avaliações sem resposta, muitas visualizações mas poucos contatos, ou que já rodam Google Ads e precisam integrar presença local com campanhas.</p>
    </article>
    <article class="prose-block" data-reveal>
      <h2>Qual é o melhor caminho para você?</h2>
      <div class="table-wrap"><table>
        <thead><tr><th>Situação</th><th>Serviço indicado</th></tr></thead>
        <tbody>
          <tr><td>A empresa ainda não tem perfil</td><td>Criação.</td></tr>
          <tr><td>Tem perfil, mas está incompleto ou sem acesso</td><td>Criação + organização inicial.</td></tr>
          <tr><td>Tem perfil, mas está parado há meses</td><td>Gestão.</td></tr>
          <tr><td>Recebe visualizações, mas poucos contatos</td><td>Gestão com foco em conversão.</td></tr>
          <tr><td>Roda Google Ads e quer integrar presença local</td><td>Gestão integrada.</td></tr>
        </tbody>
      </table></div>
    </article>
    <article class="prose-block" data-reveal>
      <h2>O que não prometemos</h2>
      <p>Não prometemos primeiro lugar no Google Maps nem aumento imediato de contatos sem analisar concorrência, categoria, localização, avaliações, demanda e qualidade do perfil. A proposta é estruturar e manter o perfil de forma profissional, evitar erros básicos e apoiar a geração de contatos reais.</p>
    </article>
    <article class="prose-block" data-reveal>
      <h2>Perguntas frequentes</h2>
      <p><strong>Google Meu Negócio ainda existe?</strong><br>O nome atual do produto é Perfil da Empresa no Google, mas o termo Google Meu Negócio ainda é amplamente usado no Brasil. Na prática, é a presença da empresa na Busca Google e no Maps.</p>
      <p><strong>Criar o perfil é gratuito?</strong><br>O Google permite criar o perfil sem custo. O serviço cobrado aqui é pela configuração estratégica, organização das informações e preparação do perfil para gerar mais confiança e contatos.</p>
      <p><strong>Minha empresa não tem loja física. Posso criar mesmo assim?</strong><br>Em muitos casos, sim. Prestadores de serviço que atendem em área de cobertura podem ter perfil, desde que sigam as diretrizes do Google para representação de empresas.</p>
      <p><strong>A gestão ajuda no SEO local?</strong><br>Ajuda na organização da presença local e melhora a experiência de quem encontra a empresa. Para resultados mais completos, deve ser combinada com site bem estruturado, conteúdo útil e boa reputação online.</p>
      <p><strong>Com que frequência o perfil deve ser atualizado?</strong><br>Uma rotina mensal ou quinzenal de revisão, fotos, postagens e análise de desempenho já traz bons resultados. Em segmentos sazonais como turismo e gastronomia, a frequência pode ser maior.</p>
      <p><strong>A gestão substitui anúncios no Google?</strong><br>Não. A gestão fortalece a presença orgânica local. Em muitos casos, Google Meu Negócio, site e <a href="/servicos/google-ads-foz-do-iguacu">Google Ads</a> funcionam melhor juntos do que separados.</p>
    </article>
  </div></section>`,
    faq: [
      ["Google Meu Negócio ainda existe?", "O nome atual do produto é Perfil da Empresa no Google, mas o termo Google Meu Negócio ainda é amplamente usado no Brasil. Na prática, é a presença da empresa na Busca Google e no Maps."],
      ["Criar o perfil é gratuito?", "O Google permite criar o perfil sem custo. O serviço cobrado aqui é pela configuração estratégica, organização das informações e preparação do perfil para gerar mais confiança e contatos."],
      ["Minha empresa não tem loja física. Posso criar mesmo assim?", "Em muitos casos, sim. Prestadores de serviço que atendem em área de cobertura podem ter perfil, desde que sigam as diretrizes do Google para representação de empresas."],
      ["A gestão ajuda no SEO local?", "Ajuda na organização da presença local e melhora a experiência de quem encontra a empresa. Para resultados mais completos, deve ser combinada com site bem estruturado, conteúdo útil e boa reputação online."],
      ["Com que frequência o perfil deve ser atualizado?", "Uma rotina mensal ou quinzenal de revisão, fotos, postagens e análise de desempenho já traz bons resultados. Em segmentos sazonais como turismo e gastronomia, a frequência pode ser maior."],
      ["A gestão substitui anúncios no Google?", "Não. A gestão fortalece a presença orgânica local. Em muitos casos, Google Meu Negócio, site e Google Ads funcionam melhor juntos do que separados."],
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
    serviceType: [
      "Gestão de tráfego pago",
      "Google Ads",
      "Meta Ads",
      "Landing pages",
      "Rastreamento de conversões",
      "Criação de Google Meu Negócio",
      "Gestão de Google Meu Negócio",
    ],
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

function normalizePath(path) {
  return path === "/" ? path : path.replace(/\/+$/, "");
}

function isCurrentPage(href, page) {
  return page && normalizePath(href) === normalizePath(page.slug);
}

function renderNavLink(text, href, page) {
  return isCurrentPage(href, page)
    ? `<span class="nav-current" aria-current="page">${escapeHtml(text)}</span>`
    : `<a href="${href}">${escapeHtml(text)}</a>`;
}

function contactFormHref(page) {
  return isCurrentPage("/contato", page) ? "#formulario" : "/contato/#formulario";
}

function renderHeader(page) {
  return `<header class="site-header" data-header>
  <div class="wrap header-inner">
    <a class="brand" href="/" aria-label="Gestor de Tráfego Foz do Iguaçu">
      <span class="brand-mark" aria-hidden="true">${renderWaterfallLogo()}</span>
      <span class="brand-text"><strong>Gestor de Tráfego</strong><small>Foz do Iguaçu · Performance local</small></span>
    </a>
    <nav class="site-nav" id="site-nav" data-site-nav aria-label="Navegação principal">
      ${nav.map(([text, href]) => renderNavLink(text, href, page)).join("")}
    </nav>
    <div class="header-actions">
      <a class="button primary sm" href="${contactFormHref(page)}" data-gtm="header_diagnostico" data-event-category="cta" data-event-label="header">Diagnóstico gratuito</a>
      <button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="site-nav">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        Menu
      </button>
    </div>
  </div>
</header>`;
}

function renderFooter(page) {
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
          ${footerServices.map(([text, href]) => renderNavLink(text, href, page)).join("")}
        </div>
        <div>
          <h4>Empresa</h4>
          ${footerCompany.map(([text, href]) => renderNavLink(text, href, page)).join("")}
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="ano">2026</span> Gestor de Tráfego Foz do Iguaçu · PR</span>
      ${isCurrentPage("/politica-de-privacidade", page) ? `<span class="footer-current" aria-current="page">Política de privacidade</span>` : `<a href="/politica-de-privacidade">Política de privacidade</a>`}
    </div>
  </div>
</footer>`;
}

function renderLeadForm(context) {
  context = context || "global";
  return `<form class="lead-form" data-lead-form data-context="${escapeHtml(context)}" data-submit-email="${contactEmail}" action="/api/lead" method="post" novalidate>
  <label>Nome<input name="nome" autocomplete="name" required></label>
  <label>Email<input name="email" type="email" autocomplete="email" required></label>
  <label>WhatsApp<input name="whatsapp" autocomplete="tel" required inputmode="tel"></label>
  <label>Segmento<select name="segmento">
    <option value="">Selecione</option>
    <option>Advocacia</option><option>Saúde</option><option>Turismo</option><option>Restaurante</option><option>Comércio</option><option>Serviço local</option><option>Infoproduto</option><option>Outro</option>
  </select></label>
  <label>Cidade<input name="cidade" value="Foz do Iguaçu"></label>
  <label>Investimento mensal em mídia<select name="investimento" required>
    <option value="">Selecione</option>
    <option>Ainda não invisto</option><option>Até R$ 1.000</option><option>R$ 1.000 a R$ 3.000</option><option>R$ 3.000 a R$ 5.000</option><option>Acima de R$ 5.000</option>
  </select></label>
  <label>Principal desafio<textarea name="desafio" rows="4"></textarea></label>
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
      <a class="button primary" href="${contactFormHref(page)}" data-gtm="cta_diagnostico" data-event-category="cta" data-event-label="${escapeHtml(page.slug)}">${escapeHtml(labelText)} ${arrowSvg("arrow")}</a>
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
  const relatedServices = services
    .filter((s) => !isCurrentPage(s.href, page))
    .slice(0, 4)
    .map((s, i) => renderServiceCard(s, i))
    .join("");
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
    <p class="lede" data-reveal data-delay="120">${page.introHtml || escapeHtml(page.intro)}</p>
    <div class="hero-actions" data-reveal data-delay="180">
      <a class="button primary" href="${contactFormHref(page)}" data-gtm="page_diagnostico" data-event-category="cta" data-event-label="${escapeHtml(page.slug)}">Solicitar diagnóstico gratuito ${arrowSvg("arrow")}</a>
      <a class="button ghost" href="${whatsappHref(page.slug)}" data-whatsapp-link data-gtm="page_whatsapp" data-event-category="whatsapp" data-event-label="${escapeHtml(page.slug)}">Falar no WhatsApp</a>
    </div>
  </div></section>
  ${page.contentHtml ? page.contentHtml : renderProseBlocks(page.sections)}
  ${page.cards ? `<section class="section card-section"><div class="wrap"><div class="cards">${page.cards.map((c, i) => renderServiceCard(c, i)).join("")}</div></div></section>` : ""}
  ${page.packages ? renderPackages(page.packages) : ""}
  ${page.postArchive ? renderPostArchive() : ""}
  ${page.contact ? `<section class="section" id="formulario"><div class="wrap form-section"><div class="section-head" data-reveal style="margin-bottom:0"><span class="kicker">Diagnóstico</span><h2>Envie seus dados</h2><p>O formulário qualifica o contato e facilita a análise inicial antes da conversa.</p></div><div data-reveal>${renderLeadForm(page.slug)}</div></div></section>` : ""}
  ${page.noCta ? "" : `${page.postArchive || page.cards ? "" : renderRelated(page)}${renderCta(page)}`}
</main>`;
}

function renderPost(post) {
  const page = { slug: post.slug, title: post.title, description: post.description, h1: post.h1 || post.title };
  const intro = post.intro || post.description;
  return layout(
    page,
    `<main class="page-main article">
  <div class="wrap">${renderBreadcrumb(page)}</div>
  <article class="article-body">
    <span class="kicker" data-reveal>Conteúdo sobre tráfego pago</span>
    <h1 data-reveal data-delay="60">${escapeHtml(page.h1)}</h1>
    <p class="lede" data-reveal data-delay="120">${escapeHtml(intro)}</p>
    <div class="prose" data-reveal data-delay="160">${post.bodyHtml || renderBody(post.body)}</div>
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
  <link rel="stylesheet" href="/assets/css/styles.css?v=${assetVersion}">
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
  ${renderHeader(page)}
  <div id="conteudo">${content}</div>
  <a class="floating-whatsapp" href="${whatsappHref(page.slug)}" data-whatsapp-link data-gtm="floating_whatsapp" data-event-category="whatsapp" data-event-label="${escapeHtml(page.slug)}" aria-label="Falar no WhatsApp">
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 4.2A11.6 11.6 0 0 0 6 21.6L4.8 27l5.5-1.4A11.6 11.6 0 1 0 16 4.2Z" fill="currentColor"/><path d="M11.8 10.2c-.3-.7-.6-.7-.9-.7h-.7c-.2 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.4 3.6 1.6 3.9c.2.3 2.7 4.2 6.6 5.7 3.2 1.3 3.9 1 4.6.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5l-2.4-1.2c-.4-.1-.7-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.4-.7.1-.2.1-.5 0-.7l-1.1-2.4Z" fill="#06210f"/></svg>
    <span class="fw-label">Falar no WhatsApp</span>
  </a>
  ${renderFooter(page)}
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
