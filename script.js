const GITHUB_REPOSITORY = "https://github.com/SarahWeiser13/TrabalhoDeTecnologiaWebUnisanta-PersonagemPorora";

document.documentElement.classList.add("js");

const characterData = {
  identidade: {
    kicker: "01 / QUEM SOU EU",
    title: "Identidade",
    intro: "Toda grande aventura começa conhecendo quem está pronta para vivê-la.",
    type: "identity",
    fields: [
      ["Nome", "Porora"],
      ["Sexo", "Feminino"],
      ["Espécie", "Pinguim"],
      ["Classe", "Exploradora"],
      ["Origem", "Vila Porong Porong"],
      ["Idade", "8 anos (aprox.)"],
      ["Personalidade", "Alegre, curiosa, corajosa, criativa, determinada e muito amiga."]
    ]
  },

  atributos: {
    kicker: "02 / O QUE ME MOVE",
    title: "Atributos",
    intro: "As características que ajudam Porora a enfrentar desafios e descobrir coisas novas.",
    type: "stats",
    items: [
      ["Curiosidade", 10, "⭐"],
      ["Coragem", 8, "💪"],
      ["Criatividade", 9, "💡"],
      ["Amizade", 10, "💗"],
      ["Paciência", 7, "🌱"]
    ]
  },

  pericias: {
    kicker: "03 / O QUE SEI FAZER",
    title: "Perícias",
    intro: "Porora desenvolveu estas habilidades ao explorar novos lugares e trabalhar em equipe.",
    type: "stats",
    items: [
      ["Exploração", 10, "🏔️"],
      ["Navegação", 9, "🗺️"],
      ["Observação", 9, "🔭"],
      ["Trabalho em equipe", 10, "👥"],
      ["Sobrevivência", 8, "🔥"],
      ["Resolução de problemas", 9, "🧩"]
    ]
  },

  conhecimentos: {
    kicker: "04 / O QUE JÁ DESCOBRI",
    title: "Conhecimentos",
    intro: "Cada passeio é uma oportunidade para aprender algo sobre o mundo ao redor.",
    type: "stats",
    items: [
      ["Natureza", 9, "🌿"],
      ["Geografia", 8, "🌎"],
      ["Animais", 9, "🐾"],
      ["Clima", 9, "❄️"],
      ["Vila Porong Porong", 10, "🏡"]
    ]
  },

  vantagens: {
    kicker: "05 / MEUS PONTOS FORTES",
    title: "Vantagens",
    intro: "Qualidades que fazem de Porora uma ótima companheira de aventuras.",
    type: "list",
    items: [
      ["Curiosa", "Está sempre fazendo perguntas e procurando aprender.", "🧭"],
      ["Corajosa", "Enfrenta desafios mesmo quando sente um friozinho na barriga.", "🛡️"],
      ["Criativa", "Encontra soluções diferentes quando surge um problema.", "💡"],
      ["Amiga dos animais", "Trata os animais com carinho e respeito.", "🐾"],
      ["Trabalho em equipe", "Acredita que juntos é possível ir mais longe.", "👥"]
    ]
  },

  desvantagens: {
    kicker: "06 / O QUE AINDA POSSO APRENDER",
    title: "Desvantagens",
    intro: "Até uma exploradora corajosa tem desafios para superar. Estes pontos deixam a personagem mais humana e ajudam suas histórias a crescer.",
    type: "list",
    items: [
      ["Curiosidade que fala mais alto", "Às vezes, Porora se empolga tanto com uma descoberta que pode se distrair do caminho principal.", "🔎"],
      ["Impulsividade", "Quando aparece algo muito interessante, pode querer agir antes de planejar todos os passos.", "💨"],
      ["Teimosia", "Quando acredita muito em uma ideia, pode demorar para ouvir outras opiniões ou admitir que precisa mudar de estratégia.", "🪨"],
      ["Dificuldade em dizer não", "Por gostar muito dos amigos, pode assumir tarefas demais para tentar ajudar todo mundo.", "💗"],
      ["Confia com facilidade", "Seu jeito acolhedor pode fazer com que confie nas pessoas antes de conhecê-las bem.", "🤝"],
      ["Dificuldade em pedir ajuda", "Às vezes, tenta resolver tudo sozinha para não preocupar os outros, mesmo quando uma mão amiga faria diferença.", "🎒"],
      ["Distração", "Novidades e pequenos detalhes chamam sua atenção, fazendo com que perca o foco por alguns instantes.", "🦋"],
      ["Medo de decepcionar", "Por se importar muito com quem ama, pode cobrar demais de si mesma quando algo não sai como esperava.", "💭"],
      ["Pouca experiência", "Ainda está aprendendo a lidar com situações realmente difíceis e pode precisar de orientação.", "🌱"],
      ["Frio intenso", "Como qualquer aventureira, precisa se preparar bem para enfrentar condições climáticas extremas.", "❄️"]
    ],
    note: "Observação: estas desvantagens foram criadas como sugestões iniciais para completar a ficha, pois não estavam especificadas no modelo preenchido. Você pode editar ou remover qualquer item no arquivo script.js."
  },

  habilidades: {
    kicker: "07 / TALENTOS ESPECIAIS",
    title: "Habilidades especiais",
    intro: "Recursos que ajudam Porora a explorar, se adaptar e cuidar de quem está com ela.",
    type: "list",
    items: [
      ["Instinto explorador", "Encontra caminhos e descobre lugares desconhecidos.", "🧭"],
      ["Adaptação ao gelo", "Consegue se movimentar com facilidade em ambientes de neve e gelo.", "❄️"],
      ["Ideia brilhante", "Encontra soluções criativas quando aparece um problema.", "💡"],
      ["Laço de amizade", "Consegue motivar e ajudar seus amigos durante uma aventura.", "💗"],
      ["Kit de aventura", "Carrega objetos e ferramentas úteis para suas explorações.", "🎒"]
    ]
  },

  passivos: {
    kicker: "08 / SEM PRECISAR ATIVAR",
    title: "Poderes passivos",
    intro: "Características que acompanham Porora naturalmente durante suas aventuras.",
    type: "list",
    items: [
      ["Resistência ao frio", "Suporta baixas temperaturas com facilidade.", "❄️"],
      ["Espírito aventureiro", "Está sempre buscando novos desafios.", "🏔️"],
      ["Amizade contagiante", "Torna os arredores mais felizes e confiantes.", "💗"],
      ["Olhar curioso", "Percebe detalhes que outras pessoas podem não notar.", "👁️"]
    ]
  },

  ativos: {
    kicker: "09 / HORA DE AGIR",
    title: "Poderes ativos",
    intro: "Ações especiais que Porora pode colocar em prática quando uma aventura pede iniciativa.",
    type: "list",
    items: [
      ["Exploração rápida", "Move-se com agilidade para investigar novos lugares.", "🧭"],
      ["Ideia brilhante", "Usa a criatividade para resolver um desafio importante.", "💡"],
      ["Chamado dos amigos", "Reúne os amigos quando alguém precisa de ajuda.", "👥"],
      ["Descoberta surpresa", "Encontra uma pista ou um lugar especial pelo caminho.", "⭐"]
    ]
  },

  historia: {
    kicker: "10 / ERA UMA VEZ…",
    title: "História da Porora",
    intro: "Toda exploradora tem um lugar para chamar de lar — e muitos caminhos esperando para serem descobertos.",
    type: "story",
    text: "Porora nasceu na pacata Vila Porong Porong, cercada por montanhas de gelo e um mar de possibilidades. Desde pequena, sempre foi diferente: enquanto outros pinguins sonhavam em ficar na vila, ela olhava para o horizonte e se perguntava o que existia além das montanhas.\n\nCom seu mapa, sua mochila e um coração enorme, Porora começou a explorar o mundo, conhecendo novos lugares, animais e culturas. Durante uma de suas viagens, descobriu que o que mais ama não é só a aventura, mas também as pessoas que encontra pelo caminho.\n\nHoje, ela continua explorando, aprendendo e colecionando histórias, sempre com um sorriso no rosto e o mesmo sonho de menina: ver tudo o que existe do mundo e fazer novas amizades pelo caminho."
  },

  missao: {
    kicker: "11 / MEU GRANDE OBJETIVO",
    title: "Missão principal",
    intro: "O que faz Porora calçar as botas, pegar a mochila e seguir em frente.",
    type: "mission",
    text: "Explorar novos lugares, superar desafios e viver grandes aventuras ao lado dos amigos."
  },

  frase: {
    kicker: "12 / MINHA FRASE",
    title: "Frase da Porora",
    intro: "Uma frase para lembrar que sempre existe algo novo esperando por nós.",
    type: "quote",
    text: "Vamos descobrir o que existe por aí!"
  }
};

const inventario = [
  { id: "mapa",      nome: "Mapa da Vila",              tipo: "Ferramenta",  raridade: "Comum",    descricao: "Desenhado à mão, mostra todos os caminhos da Vila Porong Porong.", icone: "🗺️", nivel: 1 },
  { id: "mochila",   nome: "Mochila de Aventura",       tipo: "Equipamento", raridade: "Comum",    descricao: "Cabe de tudo: lanche, cordas, caderno de anotações e muita curiosidade.", icone: "🎒", nivel: 1 },
  { id: "chocolate", nome: "Chocolate Quente",          tipo: "Consumível",  raridade: "Comum",    descricao: "Aquece o corpo e o coração depois de um dia de neve.", icone: "☕", nivel: 1, xpUso: 10 },
  { id: "botas",     nome: "Botas de Neve",             tipo: "Equipamento", raridade: "Incomum",  descricao: "Garantem firmeza em gelo escorregadio e montanhas íngremes.", icone: "🥾", nivel: 2 },
  { id: "peixe",     nome: "Peixe Dourado",             tipo: "Consumível",  raridade: "Incomum",  descricao: "Um petisco raro que devolve a energia de qualquer exploradora.", icone: "🐟", nivel: 2, xpUso: 15 },
  { id: "bussola",   nome: "Bússola de Cristal",        tipo: "Ferramenta",  raridade: "Raro",     descricao: "Aponta sempre para a próxima grande descoberta.", icone: "🧭", nivel: 3 },
  { id: "lanterna",  nome: "Lanterna de Aurora",        tipo: "Ferramenta",  raridade: "Épico",    descricao: "Brilha com as cores da aurora e ilumina as cavernas mais escuras.", icone: "🏮", nivel: 4 },
  { id: "trofeu",    nome: "Troféu da Grande Exploradora", tipo: "Troféu",   raridade: "Lendário", descricao: "Entregue a quem já explorou cada canto da vila e além.", icone: "🏆", nivel: 5 }
];

const CLASSE_RARIDADE = {
  "Comum": "rar-comum",
  "Incomum": "rar-incomum",
  "Raro": "rar-raro",
  "Épico": "rar-epico",
  "Lendário": "rar-lendario"
};

const missoes = [
  "Porora explorou uma caverna de gelo!",
  "Porora ajudou um filhote de foca a voltar para casa!",
  "Porora desenhou um novo trecho do mapa!",
  "Porora atravessou a ponte de neve com os amigos!",
  "Porora descobriu uma trilha escondida na montanha!"
];

const XP_POR_NIVEL = 100;
const XP_POR_MISSAO = 20;
const CHAVE_PROGRESSO = "porora-progresso";

const estado = {
  nivel: 1,
  xp: 0,
  favoritos: [],
  usados: [],
  filtro: "todos"
};

function carregarProgresso() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_PROGRESSO));
    if (!salvo) return;

    if (Number.isInteger(salvo.nivel) && salvo.nivel >= 1) estado.nivel = salvo.nivel;
    if (Number.isInteger(salvo.xp) && salvo.xp >= 0 && salvo.xp < XP_POR_NIVEL) estado.xp = salvo.xp;
    if (Array.isArray(salvo.favoritos)) estado.favoritos = salvo.favoritos;
    if (Array.isArray(salvo.usados)) estado.usados = salvo.usados;
  } catch (error) {
  }
}

function salvarProgresso() {
  try {
    localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify({
      nivel: estado.nivel,
      xp: estado.xp,
      favoritos: estado.favoritos,
      usados: estado.usados
    }));
  } catch (error) {
  }
}

const categoryButtons = [...document.querySelectorAll(".category-button")];
const panelContent = document.getElementById("panel-content");
const panelKicker = document.getElementById("panel-kicker");
const githubLink = document.getElementById("github-link");

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const siteMenu = document.getElementById("site-menu");

const saudacao = document.getElementById("saudacao");

const xpCard = document.getElementById("xp-card");
const xpNivel = document.getElementById("xp-nivel");
const xpTexto = document.getElementById("xp-texto");
const xpBarra = document.getElementById("xp-barra");
const xpFill = document.getElementById("xp-fill");
const xpMensagem = document.getElementById("xp-mensagem");
const btnXP = document.getElementById("btn-xp");
const btnResetXP = document.getElementById("btn-reset-xp");

const filtroBotoes = [...document.querySelectorAll(".filter-btn")];
const inventarioGrid = document.getElementById("inventario-grid");
const contador = document.getElementById("contador");
const inventarioMensagem = document.getElementById("inventario-mensagem");

const formContato = document.getElementById("form-contato");
const formFeedback = document.getElementById("form-feedback");
const contadorMensagem = document.getElementById("contador-mensagem");

function setMenu(aberto) {
  siteMenu.classList.toggle("aberto", aberto);
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  menuIcon.textContent = aberto ? "✕" : "☰";
}

menuToggle.addEventListener("click", () => {
  setMenu(!siteMenu.classList.contains("aberto"));
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && siteMenu.classList.contains("aberto")) {
    setMenu(false);
    menuToggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) setMenu(false);
});

document.querySelectorAll(".nav-links a, .brand").forEach(link => {
  link.addEventListener("click", event => {
    const alvo = document.querySelector(link.getAttribute("href"));
    if (!alvo) return;

    event.preventDefault();
    const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    alvo.scrollIntoView({ behavior: reduzMovimento ? "auto" : "smooth", block: "start" });
    setMenu(false);
  });
});

function obterSaudacao(hora) {
  if (hora >= 5 && hora < 12) {
    return "Bom dia, viajante!";
  } else if (hora >= 12 && hora < 18) {
    return "Boa tarde, aventureiro(a)!";
  } else {
    return "Boa noite, guerreiro(a)!";
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderIdentity(data) {
  return `<div class="fade-in">
    <h3 class="panel-title">${escapeHTML(data.title)}</h3>
    <p class="panel-intro">${escapeHTML(data.intro)}</p>
    <dl class="identity-grid">
      ${data.fields.map(([label, value]) => `
        <div class="data-item">
          <dt>${escapeHTML(label)}</dt>
          <dd>${escapeHTML(value)}</dd>
        </div>
      `).join("")}
    </dl>
  </div>`;
}

function renderStats(data) {
  return `<div class="fade-in">
    <h3 class="panel-title">${escapeHTML(data.title)}</h3>
    <p class="panel-intro">${escapeHTML(data.intro)}</p>
    <div class="stat-list">
      ${data.items.map(([name, value, icon]) => `
        <div class="stat-row">
          <span class="stat-name">${escapeHTML(icon)} ${escapeHTML(name)}</span>
          <div class="stat-track" role="img" aria-label="${escapeHTML(name)}: ${value} de 10">
            <div class="stat-fill" style="--value:${Math.max(0, Math.min(10, Number(value))) * 10}%"></div>
          </div>
          <span class="stat-value">${escapeHTML(value)}/10</span>
        </div>
      `).join("")}
    </div>
  </div>`;
}

function renderList(data) {
  const items = data.items.map(([title, description, icon]) => `
    <div class="content-item">
      <span class="item-symbol" aria-hidden="true">${escapeHTML(icon)}</span>
      <div>
        <h4>${escapeHTML(title)}</h4>
        <p>${escapeHTML(description)}</p>
      </div>
    </div>
  `).join("");

  const note = data.note
    ? `<p class="panel-intro" style="margin-top:16px;font-size:11px">${escapeHTML(data.note)}</p>`
    : "";

  return `<div class="fade-in">
    <h3 class="panel-title">${escapeHTML(data.title)}</h3>
    <p class="panel-intro">${escapeHTML(data.intro)}</p>
    <div class="content-list">${items}</div>
    ${note}
  </div>`;
}

function renderStory(data) {
  const [primeiro, ...resto] = data.text.split("\n\n");
  const restoHTML = resto.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join("");

  return `<div class="fade-in">
    <h3 class="panel-title">${escapeHTML(data.title)}</h3>
    <p class="panel-intro">${escapeHTML(data.intro)}</p>
    <div class="story-copy">
      <p>${escapeHTML(primeiro)}</p>
      <div class="story-extra" id="story-extra">${restoHTML}</div>
    </div>
    <button class="btn-mini toggle-story" id="toggle-story" type="button" aria-expanded="false" aria-controls="story-extra">
      Ver história completa
    </button>
  </div>`;
}

function renderMission(data) {
  return `<div class="fade-in">
    <h3 class="panel-title">${escapeHTML(data.title)}</h3>
    <p class="panel-intro">${escapeHTML(data.intro)}</p>
    <div class="mission-card">${escapeHTML(data.text)}</div>
  </div>`;
}

function renderQuote(data) {
  return `<div class="fade-in">
    <h3 class="panel-title">${escapeHTML(data.title)}</h3>
    <p class="panel-intro">${escapeHTML(data.intro)}</p>
    <div class="mission-card">${escapeHTML(data.text)}</div>
  </div>`;
}

function configurarVerMais() {
  const botao = document.getElementById("toggle-story");
  const extra = document.getElementById("story-extra");
  if (!botao || !extra) return;

  botao.addEventListener("click", () => {
    const aberto = extra.classList.toggle("revelado");
    botao.setAttribute("aria-expanded", String(aberto));
    botao.textContent = aberto ? "Ver menos" : "Ver história completa";
  });
}

function selectCategory(key) {
  const data = characterData[key];

  if (!data) return;

  categoryButtons.forEach(button => {
    const selected = button.dataset.category === key;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-expanded", String(selected));
  });

  panelKicker.textContent = data.kicker;

  const renderers = {
    identity: renderIdentity,
    stats: renderStats,
    list: renderList,
    story: renderStory,
    mission: renderMission,
    quote: renderQuote
  };

  panelContent.innerHTML = (renderers[data.type] || renderList)(data);

  configurarVerMais();
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectCategory(button.dataset.category);
  });
});

function atualizarXP() {
  const porcentagem = (estado.xp / XP_POR_NIVEL) * 100;

  xpNivel.textContent = estado.nivel;
  xpTexto.textContent = `${estado.xp} / ${XP_POR_NIVEL} XP`;
  xpFill.style.setProperty("--xp", `${porcentagem}%`);
  xpBarra.setAttribute("aria-valuenow", String(estado.xp));
}

function mostrarMensagemXP(texto, tipo) {
  xpMensagem.textContent = texto;
  xpMensagem.className = `feedback ${tipo}`;
}

function ganharXP(quantidade, origem) {
  const nivelAnterior = estado.nivel;
  estado.xp += quantidade;

  while (estado.xp >= XP_POR_NIVEL) {
    estado.xp -= XP_POR_NIVEL;
    estado.nivel++;
  }

  const subiu = estado.nivel > nivelAnterior;

  if (subiu) {
    mostrarMensagemXP(`🎉 Nível up! A Porora chegou ao nível ${estado.nivel}. Novos itens podem ter sido descobertos!`, "levelup");

    xpCard.classList.remove("levelup");
    void xpCard.offsetWidth;
    xpCard.classList.add("levelup");
  } else {
    mostrarMensagemXP(`${origem} +${quantidade} XP`, "sucesso");
  }

  atualizarXP();
  salvarProgresso();
  return subiu;
}

btnXP.addEventListener("click", () => {
  const missao = missoes[Math.floor(Math.random() * missoes.length)];
  const subiu = ganharXP(XP_POR_MISSAO, `✅ ${missao}`);

  if (subiu) renderizarInventario();
});

btnResetXP.addEventListener("click", () => {
  estado.nivel = 1;
  estado.xp = 0;
  estado.usados = [];
  atualizarXP();
  salvarProgresso();
  renderizarInventario();
  mostrarMensagemXP("↺ Progresso reiniciado. Uma nova aventura começa!", "sucesso");
});

function criarElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
}

function mostrarMensagemInventario(texto, tipo) {
  inventarioMensagem.textContent = texto;
  inventarioMensagem.className = `feedback center ${tipo}`;
}

function atualizarContador(exibidos) {
  const conquistados = inventario.filter(item => estado.nivel >= item.nivel).length;
  const favoritos = estado.favoritos.length;

  contador.textContent =
    `${conquistados} de ${inventario.length} itens conquistados · ` +
    `mostrando ${exibidos} · ${favoritos} ${favoritos === 1 ? "favorito" : "favoritos"}`;
}

function alternarFavorito(item, botao) {
  const indice = estado.favoritos.indexOf(item.id);
  const favoritado = indice === -1;

  if (favoritado) {
    estado.favoritos.push(item.id);
  } else {
    estado.favoritos.splice(indice, 1);
  }

  botao.setAttribute("aria-pressed", String(favoritado));
  botao.textContent = favoritado ? "♥ Favorito" : "♡ Favoritar";
  mostrarMensagemInventario(
    favoritado ? `💗 ${item.nome} foi adicionado aos favoritos.` : `${item.nome} foi removido dos favoritos.`,
    "sucesso"
  );

  salvarProgresso();
  atualizarContador(inventarioGrid.children.length);
}

function usarItem(item, botao) {
  if (estado.usados.includes(item.id)) return;

  estado.usados.push(item.id);
  botao.disabled = true;
  botao.textContent = "Usado ✓";

  const subiu = ganharXP(item.xpUso, `${item.icone} ${item.nome} usado!`);
  mostrarMensagemInventario(`${item.icone} ${item.nome} usado! +${item.xpUso} XP`, "sucesso");

  if (subiu) renderizarInventario();
}

function criarCard(item) {
  const conquistado = estado.nivel >= item.nivel;
  const card = criarElemento("article", `item-card ${CLASSE_RARIDADE[item.raridade]}${conquistado ? "" : " bloqueado"}`);

  const cabecalho = criarElemento("div", "item-head");
  const icone = criarElemento("span", "item-icon", conquistado ? item.icone : "🔒");
  icone.setAttribute("aria-hidden", "true");
  cabecalho.appendChild(icone);
  cabecalho.appendChild(criarElemento("h4", "", conquistado ? item.nome : "Item secreto"));
  card.appendChild(cabecalho);

  const tags = criarElemento("div", "item-tags");
  tags.appendChild(criarElemento("span", "tag", item.tipo));
  tags.appendChild(criarElemento("span", "tag tag-rar", item.raridade));
  card.appendChild(tags);

  card.appendChild(criarElemento(
    "p",
    "",
    conquistado ? item.descricao : `Alcance o nível ${item.nivel} para descobrir este item.`
  ));

  if (conquistado) {
    const acoes = criarElemento("div", "item-actions");

    const botaoFav = criarElemento("button", "btn-mini fav-btn");
    botaoFav.type = "button";
    const favoritado = estado.favoritos.includes(item.id);
    botaoFav.setAttribute("aria-pressed", String(favoritado));
    botaoFav.textContent = favoritado ? "♥ Favorito" : "♡ Favoritar";
    botaoFav.addEventListener("click", () => alternarFavorito(item, botaoFav));
    acoes.appendChild(botaoFav);

    if (item.tipo === "Consumível") {
      const botaoUsar = criarElemento("button", "btn-mini use-btn");
      botaoUsar.type = "button";
      const jaUsado = estado.usados.includes(item.id);
      botaoUsar.disabled = jaUsado;
      botaoUsar.textContent = jaUsado ? "Usado ✓" : `Usar (+${item.xpUso} XP)`;
      botaoUsar.addEventListener("click", () => usarItem(item, botaoUsar));
      acoes.appendChild(botaoUsar);
    }

    card.appendChild(acoes);
  }

  return card;
}

function renderizarInventario() {
  const lista = estado.filtro === "todos"
    ? inventario
    : inventario.filter(item => item.tipo === estado.filtro);

  inventarioGrid.innerHTML = "";

  if (lista.length === 0) {
    inventarioGrid.appendChild(criarElemento("p", "empty-msg", "Nenhum item nesta categoria."));
  }

  lista.forEach(item => {
    inventarioGrid.appendChild(criarCard(item));
  });

  atualizarContador(lista.length);
}

filtroBotoes.forEach(botao => {
  botao.addEventListener("click", () => {
    estado.filtro = botao.dataset.filtro;

    filtroBotoes.forEach(outro => {
      const ativo = outro === botao;
      outro.classList.toggle("active", ativo);
      outro.setAttribute("aria-pressed", String(ativo));
    });

    mostrarMensagemInventario("", "");
    renderizarInventario();
  });
});

const validadores = {
  nome(valor) {
    if (!valor) return "Informe seu nome para a guilda saber quem você é.";
    if (valor.length < 2) return "O nome precisa ter pelo menos 2 letras.";
    return "";
  },
  email(valor) {
    if (!valor) return "Informe seu e-mail para podermos responder.";
    const formatoBasico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoBasico.test(valor)) return "Digite um e-mail válido, como nome@exemplo.com.";
    return "";
  },
  mensagem(valor) {
    if (!valor) return "Escreva uma mensagem para a guilda.";
    if (valor.length < 10) return "A mensagem precisa ter pelo menos 10 caracteres.";
    return "";
  }
};

function validarCampo(nomeCampo) {
  const campo = formContato.elements[nomeCampo];
  const erro = validadores[nomeCampo](campo.value.trim());

  document.getElementById(`erro-${nomeCampo}`).textContent = erro;
  campo.classList.toggle("invalid", Boolean(erro));
  campo.classList.toggle("valid", !erro);
  campo.setAttribute("aria-invalid", String(Boolean(erro)));

  return !erro;
}

function mostrarFeedbackForm(texto, tipo) {
  formFeedback.textContent = texto;
  formFeedback.className = `form-feedback ${tipo}`;
  formFeedback.hidden = false;
}

Object.keys(validadores).forEach(nomeCampo => {
  const campo = formContato.elements[nomeCampo];

  campo.addEventListener("blur", () => validarCampo(nomeCampo));

  campo.addEventListener("input", () => {
    if (campo.classList.contains("invalid")) validarCampo(nomeCampo);
  });
});

formContato.elements.mensagem.addEventListener("input", event => {
  contadorMensagem.textContent = `${event.target.value.length} / 300 caracteres`;
});

formContato.addEventListener("submit", event => {
  event.preventDefault();

  const nomes = Object.keys(validadores);
  const resultados = nomes.map(validarCampo);
  const formularioValido = resultados.every(Boolean);

  if (!formularioValido) {
    const primeiroInvalido = nomes[resultados.indexOf(false)];
    const quantidade = resultados.filter(ok => !ok).length;

    mostrarFeedbackForm(
      `⚠️ Corrija ${quantidade} ${quantidade === 1 ? "campo" : "campos"} antes de enviar.`,
      "erro"
    );
    formContato.elements[primeiroInvalido].focus();
    return;
  }

  const nomeUsuario = formContato.elements.nome.value.trim();

  formContato.reset();
  nomes.forEach(nomeCampo => {
    const campo = formContato.elements[nomeCampo];
    campo.classList.remove("valid", "invalid");
    campo.removeAttribute("aria-invalid");
  });
  contadorMensagem.textContent = "0 / 300 caracteres";

  mostrarFeedbackForm(`✅ Mensagem enviada à guilda! Obrigada, ${nomeUsuario}.`, "sucesso");
});

function updateThemeButton(isDark) {
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeLabel.textContent = isDark ? "Modo claro" : "Modo noturno";
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

function setTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  updateThemeButton(isDark);

  try {
    localStorage.setItem("porora-theme", isDark ? "dark" : "light");
  } catch (error) {
  }
}

if (themeToggle && themeIcon && themeLabel) {
  let savedTheme = "light";

  try {
    savedTheme = localStorage.getItem("porora-theme") || "light";
  } catch (error) {
  }

  const startsDark = savedTheme === "dark";

  document.body.classList.toggle("dark-mode", startsDark);
  updateThemeButton(startsDark);

  themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    setTheme(isDark);
  });
}

if (GITHUB_REPOSITORY.trim()) {
  githubLink.href = GITHUB_REPOSITORY;
} else {
  githubLink.href = "https://github.com/";
  githubLink.addEventListener("click", event => {
    event.preventDefault();
    alert("Configure a URL do seu repositório na variável GITHUB_REPOSITORY do arquivo script.js.");
  });
}

function configurarRevelacao() {
  const secoes = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    secoes.forEach(secao => secao.classList.add("revelado"));
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("revelado");
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  secoes.forEach(secao => observador.observe(secao));
}

carregarProgresso();
saudacao.textContent = obterSaudacao(new Date().getHours());
selectCategory("identidade");
atualizarXP();
renderizarInventario();
configurarRevelacao();
