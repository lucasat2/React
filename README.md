# ⚛️ Curso de React — do primeiro componente ao catálogo com filtros

Uma trilha de **16 aulas práticas de React com JavaScript** para quem está começando. Você vai criar seus primeiros componentes, transformar dados em interfaces, controlar formulários e consumir uma API.

Comece pela Aula 01 e siga a ordem para praticar cada conceito antes de combiná-lo com os próximos. A seção **Dever de casa** traz uma atividade para cada aula.

---

## 📌 O que os exemplos demonstram

- ✅ Reutilizar componentes para exibir produtos, cursos e outros dados.
- ✅ Responder a cliques e mudar o conteúdo da tela de acordo com o estado.
- ✅ Gerar listas a partir de arrays e atualizar seus itens.
- ✅ Capturar, validar e enviar dados de formulários controlados.
- ✅ Buscar dados externos e exibir o carregamento, os erros ou os dados recebidos.

---

## 📚 Aulas e aprendizados

Os links das aulas 01 a 07 abrem as pastas de código do repositório. As atividades das 16 aulas estão na seção **Dever de casa**.

| Aula | O que você vai praticar | Atividade principal |
| --- | --- | --- |
| [01 · Introdução ao React](./1-intro/) | Criar um projeto com Vite e importar os primeiros componentes | Perfil profissional |
| [02 · JSX no React](./2-jsx/) | Usar expressões JavaScript, atributos e fragments no JSX | Card de produto com cálculos |
| [03 · Componentização](./3-componentizacao/) | Dividir uma interface em componentes reutilizáveis | Página de restaurante |
| [04 · Props no React](./4-props/) | Passar dados e recebê-los com desestruturação | Catálogo de cursos |
| [05 · Estilização no React](./5-estilizacao/) | Usar `className`, CSS global, estilos de componentes e estilos inline | Planos de assinatura |
| [06 · Eventos no React](./6-eventos/eventos/) | Usar `onClick` e passar funções como manipuladores de eventos | Painel de delivery |
| [07 · useState no React](./7-estados/) | Criar estado e atualizar a interface após uma interação | Painel de senhas de atendimento |
| 08 · Strings e booleanos no estado | Alterar textos e controlar a visibilidade de elementos | Card de produto interativo |
| 09 · Renderização condicional | Escolher o que renderizar com `if`, ternário e `&&` | Simulação de um painel de login |
| 10 · Listas e map() | Transformar arrays em componentes com `map()` e `key` | Catálogo de filmes |
| 11 · Arrays no estado | Adicionar, remover e atualizar itens sem modificar o array original | Lista de compras |
| 12 · Formulários no React | Controlar campos e validar o envio com `onChange` e `onSubmit` | Inscrição em evento |
| 13 · Comunicação entre componentes | Compartilhar estado entre componentes e passar funções por props | Carrinho compartilhado |
| 14 · useEffect no React | Usar dependências e cancelar intervalos na limpeza do efeito | Cronômetro |
| 15 · Consumo de APIs | Usar `fetch()`, `async/await` e JSON para buscar dados | Consulta de CEP |
| 16 · Filtros e busca | Combinar busca por texto e outros critérios com `filter()` | Catálogo de vagas |

---

## 🧪 Dever de casa

Depois de praticar o conteúdo da aula, use o exercício correspondente para revisar o que aprendeu.

- **Aula 01 — Perfil profissional**. Monte um perfil com nome, profissão, cidade, descrição, tecnologias, redes sociais e botão de contato. Use pelo menos quatro componentes e organize-os no `App.jsx`.
- **Aula 02 — Card de produto**. Crie um objeto com nome, categoria, marca, preço, desconto, estoque e número de parcelas. Calcule o desconto, o preço final e o valor das parcelas a partir dos dados do produto.
- **Aula 03 — Página de restaurante**. Organize a página no `App.jsx`, use pelo menos cinco componentes separados em arquivos e reutilize `Prato` pelo menos três vezes. Inclua cabeçalho, banner, menu, contato e rodapé.
- **Aula 04 — Catálogo de cursos**. Reutilize o componente `Curso` para exibir pelo menos quatro cursos. Passe nome, professor, categoria, duração, nível, preço e vagas por props.
- **Aula 05 — Planos de assinatura**. Crie cards reutilizáveis para os planos Básico, Pro e Premium, com nome, descrição, preço e botão de assinatura. Organize os cards lado a lado e dê destaque visual ao plano Pro.
- **Aula 06 — Painel de delivery**. Mostre produtos com nome, descrição e preço. Reutilize `BotaoAcao` para adicionar ao carrinho, favoritar e ver ingredientes, com uma função diferente para cada botão.
- **Aula 07 — Painel de senhas**. Comece na senha 15 e use `useState` para avançar, voltar e reiniciar em zero. Impeça que a senha fique negativa.
- **Aula 08 — Produto interativo**. Mostre nome e preço. Use dois estados booleanos, inicialmente falsos, para favoritar o produto e alternar a exibição da descrição e das especificações.
- **Aula 09 — Painel de login**. Simule os estados conectado e desconectado com botões de entrar e sair. Mostre o painel administrativo apenas para um usuário conectado com perfil de administrador.
- **Aula 10 — Catálogo de filmes**. Renderize os cards a partir de um array com `map()` e uma `key` por filme. Exiba título, gênero, ano e nota, e marque como recomendados os filmes com nota igual ou superior a 8.
- **Aula 11 — Lista de compras**. Use um array no estado para adicionar itens, alternar entre pendente e comprado, remover itens e limpar a lista. Exiba o total de itens e atualize o array sem modificá-lo diretamente.
- **Aula 12 — Inscrição em evento**. Crie campos controlados de nome, e-mail, idade, área de interesse e motivo. Valide os campos obrigatórios e a idade mínima de 16 anos. Mostre a confirmação e limpe o formulário após o envio.
- **Aula 13 — Carrinho compartilhado**. Mantenha o estado do carrinho no `App.jsx`. Passe a função de adicionar aos cards de produto e envie a quantidade atual e a função de limpar para o resumo.
- **Aula 14 — Cronômetro**. Use `useEffect` para atualizar a contagem a cada segundo e limpar o intervalo. Implemente os botões Iniciar, Parar e Zerar, e atualize o título da aba com o tempo.
- **Aula 15 — Consulta de CEP**. Consulte o ViaCEP e mostre o carregamento durante a busca. Exiba rua, bairro, cidade, estado e CEP em caso de sucesso ou uma mensagem de erro. Limpe o resultado e o erro antes de uma nova busca.
- **Aula 16 — Catálogo de vagas**. Combine filtros por cargo, área e salário mínimo. Exiba os dados de cada vaga, a quantidade de resultados e uma mensagem quando a busca estiver vazia. Inclua um botão para limpar os filtros.

---

## 🛠️ Tecnologias utilizadas

- **React** — Componentes, props, eventos e hooks.
- **JavaScript e JSX** — Lógica dos exemplos e composição da interface.
- **CSS** — Estilização global, por componente e inline.
- **Vite** — Criação do projeto e servidor de desenvolvimento.
- **Node.js e npm** — Ambiente e comandos usados para preparar e executar as práticas.
- **Fetch API** — Requisições HTTP nos exemplos de consumo de dados.

---

## 📂 Estrutura do repositório

```text
.
├── 1-intro/
├── 2-jsx/
├── 3-componentizacao/
├── 4-props/
├── 5-estilizacao/
├── 6-eventos/eventos/
├── 7-estados/
└── README.md
```

---

## 🚀 Como executar os exemplos

### 1. Crie o projeto da primeira aula

Com Node.js e npm instalados, execute o comando abaixo no terminal.

```bash
npm create vite@latest
```

Quando solicitado, use o nome `primeiro-react` e selecione **React** e **JavaScript**.

### 2. Instale as dependências e inicie o servidor

```bash
cd primeiro-react
npm install
npm run dev
```

Abra no navegador o endereço que aparecer no terminal.

### 3. Pratique com o material da aula

Use o projeto criado para implementar os exercícios do **Dever de casa**. As pastas das aulas 01 a 07 também servem como referência de código.
