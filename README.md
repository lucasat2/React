Aula 7 — Estados no React com useState 🔢
Nesta aula, você vai estudar estado no React criando um contador com JavaScript, JSX e Vite. O contador começa em 0 e tem três botões para aumentar, diminuir e zerar o valor.

Em [`src/App.jsx`](src/App.jsx), useState(0) fornece o valor atual (contador) e a função para atualizá-lo (setContador). Ao clicar em um botão, o React executa a função ligada ao onClick. Quando o estado muda, o componente é renderizado com o novo valor.
📌 Funcionalidades
- ✅ Exibir o valor atual do contador.
- ✅ Somar 1 ao clicar em +.
- ✅ Subtrair 1 ao clicar em - quando o contador estiver acima de 0.
- ✅ Voltar para 0 ao clicar em Zerar.
📚 Aprendizados
- ✅ Inicializar um estado local com useState.
- ✅ Usar desestruturação para obter o valor atual e sua função de atualização.
- ✅ Exibir o estado no JSX com {contador}.
- ✅ Conectar funções aos botões usando o evento onClick.
- ✅ Atualizar a interface com setContador e usar uma condição para impedir valores negativos.
📚 Dever de Casa
Sugestão de desafio — Dê um limite máximo ao contador e mostre quando cada botão pode ser usado.
1. Faça o contador parar em 10.
2. Desabilite o botão - quando o valor for 0 e o botão + quando chegar a 10.
3. Clique em Zerar quando o contador estiver em 10 e confira se o valor volta para 0 e o botão + fica disponível novamente.
🛠️ Tecnologias Utilizadas
- React → Componente do contador, gerenciamento de estado e eventos de clique.
- JavaScript e JSX → Lógica do contador e estrutura da interface.
- CSS → Estilos globais da página.
- Vite → Servidor de desenvolvimento e geração do build.
- Oxlint → Análise estática do código com npm run lint.
📂 Estrutura do Projeto
Arquivos principais dentro da pasta 7-estados/estados.
estados/
├── public/
│   └── favicon.svg     # Ícone da aba do navegador
├── src/
│   ├── App.jsx         # Estado, botões e lógica do contador
│   ├── index.css       # Estilos globais
│   └── main.jsx        # Ponto de entrada do React
├── .oxlintrc.json      # Configuração do Oxlint
├── index.html          # Página que recebe a aplicação
├── package-lock.json   # Versões fixadas das dependências
├── package.json        # Dependências e comandos npm
└── vite.config.js      # Configuração do Vite com React
🚀 Como Executar o Projeto
Pré-requisito — Node.js 20.19.0 ou superior na série 20, ou 22.12.0 ou superior, com npm.
1. 📦 Extraia o ZIP e entre na pasta do projeto
Abra o terminal no diretório que contém a pasta extraída 7-estados.
cd 7-estados/estados
2. 📥 Instale as dependências
npm ci
3. ▶️ Inicie o servidor de desenvolvimento
npm run dev
Abra o endereço exibido no terminal. A tela deve começar em 0. Clique em +, - e Zerar para experimentar o contador.
