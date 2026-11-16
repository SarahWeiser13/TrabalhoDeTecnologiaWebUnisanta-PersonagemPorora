# Porora — Ficha de Herói interativa (Parte 2)

Projeto prático da disciplina de Tecnologia Web (Unisanta). A Parte 2 adiciona comportamento em JavaScript
(`script.js`) à ficha da Parte 1, reaproveitando o mesmo HTML, CSS e personagem.

## Estrutura

```
ficha-heroi-parte2/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/porora.png
```

## Funcionalidades de JavaScript

| Requisito do edital | Como foi feito |
|---|---|
| Menu responsivo | Botão hambúrguer (≤ 1000px) alterna a classe `.aberto`; o ícone muda de ☰ para ✕; fecha com clique em link ou tecla Esc |
| Inventário dinâmico | Array `inventario` com 8 objetos (nome, tipo, raridade, descrição); cards gerados com `forEach` + `createElement` |
| Filtro por tipo | Botões de categoria; o filtro ativo fica destacado e com `aria-pressed`; "Todos" desfaz o filtro |
| Barra de XP | Botão "Completar missão" soma 20 XP e atualiza a largura da barra; ao chegar a 100 XP aparece "Nível up!" |
| "Ver mais" | Botão na História alterna "Ver história completa" / "Ver menos" com operador ternário |
| Formulário | `preventDefault()`, validação de nome, e-mail (formato) e mensagem, erros embaixo de cada campo e mensagem final de sucesso/erro na tela (sem `alert()`) |
| Contador dinâmico | "X de Y itens conquistados" calculado a partir do array |
| Modo noturno | Alterna a classe `dark-mode` no `<body>` (e lembra a escolha) |
| Scroll suave | `scrollIntoView({ behavior: "smooth" })` nos links do menu |
| Saudação | Bom dia / Boa tarde / Boa noite calculados com `new Date().getHours()` |
| Usar item / Favoritar | Consumíveis dão XP ao serem usados; qualquer item pode ser favoritado |

### Pesquisa complementar

- **IntersectionObserver**: as seções são reveladas (classe `.revelado`) quando entram na tela.
- **localStorage**: nível, XP, favoritos, itens usados e tema ficam salvos entre visitas.

## Decisões de UI/UX

**Parte 1 (estáticas):** hierarquia com títulos grandes e textos de apoio menores; contraste entre texto e fundo
nos modos claro e noturno; paleta (dourado, rosa, azul-gelo) e componentes repetidos em todas as seções.

**Parte 2 (interação):**

- **Visibilidade do estado:** o ícone do menu muda (☰ → ✕); o filtro ativo muda de cor; o nível e o XP aparecem
  em texto e na barra; itens bloqueados mostram 🔒 e o nível necessário.
- **Feedback imediato:** ganhar XP, favoritar, usar item e enviar o formulário geram uma mensagem na hora, em
  região `aria-live`; o card de XP faz uma animação ao subir de nível.
- **Prevenção de erros:** campos obrigatórios marcados com `*`; o erro aparece ao sair do campo e é corrigido em
  tempo real enquanto o usuário digita; o foco vai para o primeiro campo inválido; nada falha em silêncio.
- **Controle e liberdade:** menu fecha com Esc, "Ver menos" recolhe a história, "Todos" desfaz o filtro,
  "Recomeçar" reinicia o XP — tudo sem recarregar a página.
- **Consistência com a Parte 1:** mesmas cores, bordas arredondadas, sombras e transições; novos estados usam
  `.active`, `.revelado`, `:hover` e `:focus-visible` no mesmo padrão.

## Como testar

1. Abra o `index.html` no navegador.
2. Teste em desktop e em mobile (DevTools → ícone de dispositivo, ex.: 375px).
3. Verifique que não há erros no Console.

> O envio do formulário é simulado (não há servidor).
