# Aula 09 — Renderização Condicional

Todos os exemplos estão no App.jsx, separados por comentários numerados.
Os componentes ficam na pasta src/components.

| Arquivo | O que foi feito |
| --- | --- |
| App.jsx | Reúne os 10 exemplos, com estados independentes. |
| components/Status.jsx | Status online ou offline usando if. |
| components/Login.jsx | Conteúdo de login do exemplo 5. |
| components/Painel.jsx | Conteúdo exibido após liberar o acesso. |
| components/Usuario.jsx | Botão administrativo conforme o perfil. |
| components/Produto.jsx | Mensagem conforme a quantidade em estoque. |
| components/Avaliacao.jsx | Classificação por nota com if e else. |
| components/PainelRestrito.jsx | Condições combinadas de login e perfil. |

No exemplo 5, o botão "Alterar acesso" troca os componentes.
No exemplo 9, "Salvar" apenas encerra a edição, como no código original.


# Exemplos de renderização condicional em React

## 1. Operador ternário

O operador ternário escolhe qual mensagem exibir conforme a idade.

```jsx
function App() {
  const idade = 17;

  const mensagem =
    idade >= 18 ? "Maior de idade" : "Menor de idade";

  return (
    <>
      <h1>{mensagem}</h1>
    </>
  );
}

export default App;
```

---

## 2. Status online ou offline

O componente `Status` recebe a propriedade `online`. Neste exemplo, o valor é `false`.

```jsx
import Status from "./components/Status";

function App() {
  return (
    <>
      <Status online={false} />
    </>
  );
}

export default App;
```

---

## 3. Botão para alterar o status e a mensagem

O botão altera o estado de `logado`. A mensagem e o texto do botão mudam conforme esse estado.

```jsx
import { useState } from "react";

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <div>
      <h2>
        {logado ? "Bem-vindo!" : "Você está desconectado"}
      </h2>

      <button onClick={() => setLogado(!logado)}>
        {logado ? "Sair" : "Entrar"}
      </button>
    </div>
  );
}

export default App;
```

---

## 4. Renderização condicional com `&&`

O parágrafo só aparece quando `logado` for `true`.

```jsx
import { useState } from "react";

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <div>
      <button onClick={() => setLogado(!logado)}>
        Alterar login
      </button>

      {logado && (
        <p>🎉 Bem-vindo ao sistema!</p>
      )}
    </div>
  );
}

export default App;
```
