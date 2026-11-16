/* =====================================================================
   style.css — Porora (Parte 2)
   Mantém o CSS da Parte 1 e acrescenta os estilos dos novos
   comportamentos (menu hambúrguer, XP, inventário, formulário, reveal).
   Trechos novos estão marcados com "PARTE 2".
   ===================================================================== */

:root {
  --gold: #f0c15f;
  --gold-deep: #dfaa3e;
  --pink: #be8798;
  --pink-pale: #f8edf0;
  --blue: #b5dcff;
  --blue-deep: #3865a7;
  --ink: #29354a;
  --muted: #758096;
  --paper: #fffefa;
  --line: #e9e5dc;
  --shadow: 0 18px 50px rgba(50, 68, 98, .08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 96px; /* PARTE 2: compensa o cabeçalho fixo ao navegar pelos links */
}

body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  color: var(--ink);
  background: var(--paper);
  transition: background .25s, color .25s;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

/* PARTE 2: atributo hidden sempre vence o display dos componentes */
[hidden] {
  display: none !important;
}

.top-stripe {
  height: 8px;
  background: var(--gold);
}

.site-header {
  min-height: 86px;
  padding: 16px clamp(20px, 6vw, 90px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid rgba(190,135,152,.2);
  background: rgba(255,254,250,.94);
  position: sticky; /* PARTE 2 */
  top: 0;
  z-index: 50;
  backdrop-filter: blur(6px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  background: var(--blue);
  border-radius: 15px;
  color: var(--blue-deep);
  font-size: 23px;
  transform: rotate(-6deg);
}

.brand strong {
  display: block;
  font-size: 24px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -.7px;
  color: var(--blue-deep);
}

.brand small {
  display: block;
  margin-top: 5px;
  font-size: 10px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 800;
}

/* ---------- PARTE 2: menu (desktop) e botão hambúrguer ---------- */

.site-menu {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-links a {
  padding: 9px 13px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 800;
  color: var(--ink);
  transition: background .2s, color .2s, transform .2s;
}

.nav-links a:hover {
  background: var(--pink-pale);
  color: #89596a;
  transform: translateY(-2px);
}

.menu-toggle {
  display: none;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border: 1px solid #e7dfcf;
  border-radius: 14px;
  background: #fff8e9;
  color: #6c5528;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transition: background .2s, transform .2s;
}

.menu-toggle:hover {
  background: #ffefc9;
  transform: translateY(-2px);
}

.menu-toggle[aria-expanded="true"] {
  background: var(--gold);
  border-color: var(--gold);
}

/* ---------- fim PARTE 2 (menu) ---------- */

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 17px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 800;
  transition: transform .2s, background .2s, box-shadow .2s;
}

.header-link:hover {
  transform: translateY(-2px);
}

.theme-toggle {
  border: 1px solid #e7dfcf;
  cursor: pointer;
  background: #fff8e9;
  color: #6c5528;
}

.theme-toggle:hover {
  background: #ffefc9;
}

.contact-link {
  background: var(--pink-pale);
  color: #89596a;
}

.contact-link:hover {
  background: #f2dfe5;
}

.github-link {
  background: var(--gold);
  color: #42351c;
  box-shadow: 0 5px 0 #e5b24e;
}

.github-link:hover {
  background: #f5cc78;
  box-shadow: 0 7px 0 #e5b24e;
}

.header-link:focus-visible,
.category-button:focus-visible,
.nav-links a:focus-visible,
.menu-toggle:focus-visible,
.btn:focus-visible,
.btn-mini:focus-visible,
.filter-btn:focus-visible,
.text-link:focus-visible {
  outline: 3px solid #7ab8f0;
  outline-offset: 3px;
}

.interactive-section {
  padding: 34px clamp(16px, 4vw, 64px) 70px;
  background: linear-gradient(180deg, #fffefa 0%, #fff 70%);
}

.intro-heading {
  text-align: center;
  margin: 0 auto 22px;
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 14px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2.4px;
  color: var(--pink);
}

.eyebrow span {
  display: inline-block;
  width: 22px;
  height: 2px;
  background: var(--gold);
  vertical-align: middle;
  margin-right: 8px;
}

.intro-heading .eyebrow {
  margin-bottom: 10px;
}

/* PARTE 2: saudação por horário */
.greeting {
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 900;
  color: var(--blue-deep);
}

h1 {
  margin: 0;
  font-size: clamp(34px, 4.2vw, 54px);
  letter-spacing: -2.5px;
  line-height: 1.04;
  font-weight: 900;
  color: var(--ink);
}

h1 em {
  color: var(--blue-deep);
  font-style: normal;
}

.intro-heading > p:last-child {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
}

.orbit-layout {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(190px, 1fr) minmax(260px, 350px) minmax(190px, 1fr);
  grid-template-rows: repeat(6, minmax(48px, auto));
  align-items: center;
  column-gap: clamp(14px, 3vw, 48px);
  row-gap: 10px;
  position: relative;
}

.category-list {
  display: contents;
}

.category-button {
  min-height: 48px;
  width: 100%;
  padding: 9px 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  border: 1px solid rgba(240,193,95,.55);
  border-radius: 999px;
  background: var(--gold);
  color: #493a1e;
  font-size: 12px;
  font-weight: 900;
  box-shadow: 0 4px 0 rgba(222,170,62,.12);
  cursor: pointer;
  transition: transform .2s, background .2s, box-shadow .2s, border-color .2s;
}

.category-button:nth-child(-n+6) {
  grid-column: 1;
}

.category-button:nth-child(n+7) {
  grid-column: 3;
}

.category-button:nth-child(1),
.category-button:nth-child(7) {
  grid-row: 1;
}

.category-button:nth-child(2),
.category-button:nth-child(8) {
  grid-row: 2;
}

.category-button:nth-child(3),
.category-button:nth-child(9) {
  grid-row: 3;
}

.category-button:nth-child(4),
.category-button:nth-child(10) {
  grid-row: 4;
}

.category-button:nth-child(5),
.category-button:nth-child(11) {
  grid-row: 5;
}

.category-button:nth-child(6),
.category-button:nth-child(12) {
  grid-row: 6;
}

.category-button:nth-child(n+7) {
  flex-direction: row-reverse;
  text-align: right;
}

.category-button:hover {
  background: #f8d88d;
  color: #493a1e;
  transform: translateY(-2px);
  box-shadow: 0 6px 0 rgba(222,170,62,.17);
}

.category-button.active {
  background: var(--pink);
  color: #fff;
  border-color: var(--pink);
  box-shadow: 0 5px 0 rgba(190,135,152,.22);
}

.category-button.active .category-icon {
  background: rgba(255,255,255,.95);
}

.category-icon {
  flex: 0 0 29px;
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,.78);
  border-radius: 50%;
  font-size: 14px;
}

.category-button > span:nth-child(2) {
  flex: 1;
}

.category-arrow {
  opacity: .65;
  font-size: 14px;
}

.character-stage {
  grid-column: 2;
  grid-row: 1 / 7;
  min-height: 400px;
  position: relative;
  display: grid;
  place-items: center;
  isolation: isolate;
}

.character-halo {
  position: absolute;
  width: min(320px, 100%);
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, #c8e5ff 0%, #d8edff 56%, rgba(213,235,255,.12) 72%);
}

.character-image {
  position: relative;
  z-index: 1;
  width: min(310px, 100%);
  max-height: 390px;
  object-fit: contain;
  filter: drop-shadow(0 15px 12px rgba(56,101,167,.12));
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-8px) rotate(1deg); }
}

.orbit {
  position: absolute;
  border: 1px dashed rgba(56,101,167,.28);
  border-radius: 50%;
  width: 110%;
  height: 63%;
  transform: rotate(-25deg);
}

.orbit-two {
  width: 86%;
  height: 92%;
  transform: rotate(25deg);
  border-color: rgba(190,135,152,.28);
}

.sparkle {
  position: absolute;
  z-index: 2;
  color: var(--gold-deep);
  font-size: 25px;
}

.sparkle-one {
  top: 13%;
  right: 18%;
}

.sparkle-two {
  left: 8%;
  top: 32%;
  color: #8fc8f4;
}

.sparkle-three {
  bottom: 18%;
  right: 12%;
  color: var(--pink);
  font-size: 31px;
}

.character-label {
  z-index: 2;
  position: absolute;
  bottom: 1px;
  padding: 9px 15px;
  border-radius: 99px;
  background: white;
  box-shadow: var(--shadow);
  font-size: 11px;
  font-weight: 800;
  color: #68748a;
  white-space: nowrap;
}

.status-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 6px;
  border-radius: 50%;
  background: #7fc8a5;
}

.info-section {
  max-width: 930px;
  margin: 32px auto 0;
  scroll-margin-top: 20px;
}

.info-panel {
  min-height: 210px;
  padding: clamp(22px, 4vw, 40px);
  background: #fffefa;
  border: 1px solid #eee9df;
  border-radius: 24px;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.info-panel::before {
  content: '';
  position: absolute;
  right: -45px;
  top: -55px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: rgba(181,220,255,.19);
}

.panel-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-bottom: 19px;
  border-bottom: 1px solid var(--line);
}

.panel-kicker {
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 900;
  color: var(--pink);
}

.panel-snowflake {
  color: var(--gold-deep);
  font-size: 25px;
}

.panel-title {
  position: relative;
  margin: 25px 0 8px;
  font-size: clamp(25px, 3vw, 35px);
  letter-spacing: -1px;
  font-weight: 900;
}

.panel-intro {
  position: relative;
  max-width: 650px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 14px;
  margin: 0 0 24px;
}

.identity-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  position: relative;
}

.data-item {
  padding: 13px 15px;
  background: #fff;
  border: 1px solid #eee9df;
  border-radius: 14px;
  min-width: 0;
}

.data-item dt {
  margin-bottom: 5px;
  color: #9a9faf;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.data-item dd {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.stat-list {
  display: grid;
  gap: 18px;
  position: relative;
}

.stat-row {
  display: grid;
  grid-template-columns: minmax(110px, 1fr) minmax(80px, 2fr) 44px;
  align-items: center;
  gap: 14px;
}

.stat-name {
  font-size: 13px;
  font-weight: 800;
}

.stat-value {
  font-size: 12px;
  font-weight: 900;
  color: var(--blue-deep);
  text-align: right;
}

.stat-track {
  height: 9px;
  background: #e9f2fb;
  border-radius: 99px;
  overflow: hidden;
}

.stat-fill {
  height: 100%;
  width: var(--value);
  border-radius: inherit;
  background: linear-gradient(90deg, #80c8f2, #3b86c7);
}

.content-list {
  display: grid;
  gap: 11px;
  position: relative;
}

.content-item {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  padding: 14px 15px;
  border: 1px solid #eee9df;
  border-radius: 15px;
  background: #fff;
}

.item-symbol {
  flex: 0 0 35px;
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: var(--pink-pale);
  font-size: 17px;
}

.content-item h4 {
  margin: 1px 0 4px;
  font-size: 13px;
  font-weight: 900;
}

.content-item p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.story-copy {
  position: relative;
  font-size: 14px;
  line-height: 1.95;
  color: #69758a;
  max-width: 760px;
}

/* PARTE 2: "Ver mais" da história (alternado pela classe .revelado) */
.story-copy p {
  margin: 0 0 14px;
}

.story-extra {
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  transition: max-height .45s ease, opacity .35s ease, visibility 0s .45s;
}

.story-extra.revelado {
  max-height: 900px;
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}

.toggle-story {
  position: relative;
  margin-top: 6px;
}

.mission-card {
  position: relative;
  padding: 25px;
  background: #fff5d9;
  border-radius: 17px;
  color: #66522c;
  font-size: clamp(17px, 2vw, 22px);
  font-weight: 900;
  line-height: 1.6;
}

.mission-card::before {
  content: '“';
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 52px;
  color: #e2b64f;
  opacity: .65;
}

.fade-in {
  animation: reveal .32s ease both;
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(7px); }
  to { opacity: 1; transform: translateY(0); }
}

/* =====================================================================
   PARTE 2 — SEÇÕES NOVAS
   ===================================================================== */

/* Revelar seções ao rolar (IntersectionObserver adiciona .revelado) */
.js .reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .6s ease, transform .6s ease;
}

.js .reveal.revelado {
  opacity: 1;
  transform: none;
}

.page-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px clamp(16px, 4vw, 64px);
}

.section-heading {
  max-width: 720px;
  margin: 0 auto 28px;
  text-align: center;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(28px, 3.4vw, 40px);
  letter-spacing: -1.5px;
  line-height: 1.1;
  font-weight: 900;
}

.section-heading h2 em {
  color: var(--blue-deep);
  font-style: normal;
}

.section-heading > p:last-child {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

.text-link {
  color: var(--blue-deep);
  font-weight: 800;
  text-decoration: underline;
}

.required {
  color: #c4506d;
  font-weight: 900;
}

/* ---------- Botões ---------- */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  border: 0;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: transform .2s, background .2s, box-shadow .2s;
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.btn:disabled {
  opacity: .55;
  cursor: not-allowed;
}

.btn-primary {
  background: var(--gold);
  color: #42351c;
  box-shadow: 0 5px 0 #e5b24e;
}

.btn-primary:hover:not(:disabled) {
  background: #f5cc78;
  box-shadow: 0 7px 0 #e5b24e;
}

.btn-secondary {
  background: var(--pink-pale);
  color: #89596a;
}

.btn-secondary:hover:not(:disabled) {
  background: #f2dfe5;
}

.btn-mini {
  padding: 7px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  color: var(--ink);
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: transform .2s, background .2s, border-color .2s;
}

.btn-mini:hover:not(:disabled) {
  transform: translateY(-2px);
  background: #fff8e9;
  border-color: rgba(240,193,95,.7);
}

.btn-mini:disabled {
  opacity: .6;
  cursor: not-allowed;
}

.fav-btn[aria-pressed="true"] {
  background: var(--pink-pale);
  border-color: var(--pink);
  color: #a24d68;
}

/* ---------- Mensagens de feedback ---------- */

.feedback {
  min-height: 22px;
  margin: 14px 0 0;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.5;
  color: var(--muted);
}

.feedback.center {
  text-align: center;
}

.feedback.sucesso { color: #2f7d5b; }
.feedback.erro { color: #b3475f; }
.feedback.levelup { color: var(--blue-deep); }

/* ---------- Barra de XP ---------- */

.xp-card {
  max-width: 760px;
  margin: 0 auto;
  padding: clamp(20px, 4vw, 32px);
  background: #fffefa;
  border: 1px solid #eee9df;
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.xp-card.levelup {
  animation: pulse .7s ease;
}

@keyframes pulse {
  0% { transform: scale(1); }
  40% { transform: scale(1.025); box-shadow: 0 18px 50px rgba(240,193,95,.35); }
  100% { transform: scale(1); }
}

.xp-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.level-badge {
  padding: 7px 15px;
  border-radius: 999px;
  background: var(--gold);
  color: #42351c;
  font-size: 13px;
  font-weight: 800;
}

.xp-text {
  font-size: 13px;
  font-weight: 900;
  color: var(--blue-deep);
}

.xp-track {
  height: 16px;
  background: #e9f2fb;
  border-radius: 99px;
  overflow: hidden;
}

.xp-fill {
  height: 100%;
  width: var(--xp, 0%);
  border-radius: inherit;
  background: linear-gradient(90deg, #80c8f2, #3b86c7);
  transition: width .5s ease;
}

.xp-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

/* ---------- Inventário ---------- */

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 18px;
}

.filter-btn {
  padding: 9px 17px;
  border: 1px solid rgba(240,193,95,.55);
  border-radius: 999px;
  background: #fff8e9;
  color: #6c5528;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
  transition: transform .2s, background .2s, color .2s;
}

.filter-btn:hover {
  background: #ffefc9;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: var(--pink);
  border-color: var(--pink);
  color: #fff;
}

.inventory-status {
  margin: 0;
  text-align: center;
  font-size: 13px;
  font-weight: 800;
  color: var(--blue-deep);
}

.inventory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.item-card {
  --rar: #9aa5b8;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  background: #fff;
  border: 1px solid #eee9df;
  border-top: 4px solid var(--rar);
  border-radius: 18px;
  animation: reveal .32s ease both;
  transition: transform .2s, box-shadow .2s;
}

.item-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.item-card.bloqueado {
  opacity: .65;
  border-style: dashed;
  border-top-style: solid;
  filter: grayscale(.5);
}

.rar-comum { --rar: #9aa5b8; }
.rar-incomum { --rar: #5fb38a; }
.rar-raro { --rar: #4c8fd1; }
.rar-epico { --rar: #a46bd1; }
.rar-lendario { --rar: #e0a02e; }

.item-head {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-icon {
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--pink-pale);
  font-size: 20px;
}

.item-head h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 900;
  line-height: 1.3;
}

.item-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  padding: 3px 10px;
  border-radius: 999px;
  background: #f1eee6;
  color: #6f6a5c;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: .5px;
  text-transform: uppercase;
}

.tag-rar {
  background: var(--rar);
  color: #fff;
}

.item-card p {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.item-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.empty-msg {
  grid-column: 1 / -1;
  text-align: center;
  color: var(--muted);
  font-weight: 800;
}

/* ---------- Formulário ---------- */

.contact-form {
  max-width: 640px;
  margin: 0 auto;
  padding: clamp(20px, 4vw, 32px);
  background: #fffefa;
  border: 1px solid #eee9df;
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 7px;
  font-size: 13px;
  font-weight: 800;
}

.form-group input,
.form-group textarea {
