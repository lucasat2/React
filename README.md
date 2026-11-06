# ⚛️ Curso de React — do primeiro componente ao catálogo com filtros

Uma trilha de **16 aulas práticas de React com JavaScript** para quem está começando. Você vai criar seus primeiros componentes, transformar dados em interfaces, controlar formulários e consumir uma API.

As aulas estão em Markdown e incluem exemplos de código, práticas guiadas, exercícios e checklists de revisão. Comece pela Aula 01 e siga a ordem para praticar cada conceito antes de combiná-lo com os próximos.

---

## 📌 O que os exemplos demonstram

- ✅ Reutilizar componentes para exibir produtos, cursos e outros dados.
- ✅ Responder a cliques e mudar o conteúdo da tela de acordo com o estado.
- ✅ Gerar listas a partir de arrays e atualizar seus itens.
- ✅ Capturar, validar e enviar dados de formulários controlados.
- ✅ Buscar dados externos e exibir o carregamento, os erros ou os dados recebidos.

---

## 📚 Aulas e aprendizados

| Aula | O que você vai praticar | Atividade principal |
| --- | --- | --- |
| [01 · Introdução ao React](aulas-react/Aula_01_Introducao_ao_React.md) | Criar um projeto com Vite e importar os primeiros componentes | Perfil profissional |
| [02 · JSX no React](aulas-react/Aula_02_JSX_no_React.md) | Usar expressões JavaScript, atributos e fragments no JSX | Card de produto com cálculos |
| [03 · Componentização](aulas-react/Aula_03_Componentes_e_Componentizacao_no_React.md) | Dividir uma interface em componentes reutilizáveis | Página de restaurante |
| [04 · Props no React](aulas-react/Aula_04_Props_no_React.md) | Passar dados e recebê-los com desestruturação | Catálogo de cursos |
| [05 · Estilização no React](aulas-react/Aula_05_Estilizacao_no_React.md) | Usar `className`, CSS global, estilos de componentes e estilos inline | Planos de assinatura |
| [06 · Eventos no React](aulas-react/Aula_06_Eventos_no_React.md) | Usar `onClick` e passar funções como manipuladores de eventos | Painel de delivery |
| [07 · useState no React](aulas-react/Aula_07_useState_no_React.md) | Criar estado e atualizar a interface após uma interação | Painel de senhas de atendimento |
| [08 · Strings e booleanos no estado](aulas-react/Aula_08_Estado_com_Strings_e_Booleanos_no_React.md) | Alterar textos e controlar a visibilidade de elementos | Card de produto interativo |
| [09 · Renderização condicional](aulas-react/Aula_09_Renderizacao_Condicional_no_React.md) | Escolher o que renderizar com `if`, ternário e `&&` | Simulação de um painel de login |
| [10 · Listas e map()](aulas-react/Aula_10_Listas_e_map_no_React.md) | Transformar arrays em componentes com `map()` e `key` | Catálogo de filmes |
| [11 · Arrays no estado](aulas-react/Aula_11_Manipulando_Arrays_no_Estado.md) | Adicionar, remover e atualizar itens sem modificar o array original | Lista de compras |
| [12 · Formulários no React](aulas-react/Aula_12_Formularios_no_React.md) | Controlar campos e validar o envio com `onChange` e `onSubmit` | Inscrição em evento |
| [13 · Comunicação entre componentes](aulas-react/Aula_13_Comunicacao_entre_Componentes_no_React.md) | Compartilhar estado entre componentes e passar funções por props | Carrinho compartilhado |
| [14 · useEffect no React](aulas-react/Aula_14_useEffect_no_React.md) | Usar dependências e cancelar intervalos na limpeza do efeito | Cronômetro |
| [15 · Consumo de APIs](aulas-react/Aula_15_Consumo_de_APIs_no_React.md) | Usar `fetch()`, `async/await` e JSON para buscar dados | Consulta de CEP |
| [16 · Filtros e busca](aulas-react/Aula_16_Filtros_e_Busca_no_React.md) | Combinar busca por texto e outros critérios com `filter()` | Catálogo de vagas |

---

## 🧪 Dever de casa

Depois de reproduzir os exemplos, tente resolver a atividade principal da aula por conta própria. Cada aula traz o enunciado completo. Aqui vão alguns requisitos das atividades.

- **Aula 01** — Monte um perfil com pelo menos quatro componentes. Use o `App.jsx` para organizá-los.
- **Aula 02** — Calcule o desconto, o preço final e o valor das parcelas a partir dos dados do produto.
- **Aula 03** — Separe os componentes em arquivos e reutilize o componente `Prato` pelo menos três vezes.
- **Aula 15** — Consulte um endereço pelo CEP e exiba o carregamento, o endereço encontrado ou a mensagem de erro.
- **Aula 16** — Combine filtros por cargo, área e salário mínimo. Mostre a quantidade de vagas encontradas e ofereça um botão para limpar os filtros.

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
├── README.md
└── aulas-react/    # 16 arquivos Markdown, um por aula
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

Siga as instruções da aula para criar ou editar os arquivos indicados, como `src/App.jsx`. Para as atividades que pedem um projeto próprio, repita os passos de criação com o nome indicado no enunciado.
