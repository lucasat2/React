import { useState } from "react";

import Status from "./components/Status";
import Login from "./components/Login";
import Painel from "./components/Painel";
import Usuario from "./components/Usuario";
import Produto from "./components/Produto";
import Avaliacao from "./components/Avaliacao";
import PainelRestrito from "./components/PainelRestrito";

function App() {
  // ==================================================
  // EXEMPLO 1 - PRIMEIRA CONDIÇÃO
  // ==================================================

  const idade = 20;

  const mensagem =
    idade >= 18 ? "Maior de idade" : "Menor de idade";

  // ==================================================
  // EXEMPLO 3 - BOTÃO DE LOGIN COM TERNÁRIO
  // ==================================================

  const [logado, setLogado] = useState(false);

  // ==================================================
  // EXEMPLO 4 - MENSAGEM COM &&
  // ==================================================

  const [mostrarBoasVindas, setMostrarBoasVindas] = useState(false);

  // ==================================================
  // EXEMPLO 5 - LOGIN OU PAINEL
  // ==================================================

  const [acessoLiberado, setAcessoLiberado] = useState(false);

  // ==================================================
  // EXEMPLO 9 - MODO DE EDIÇÃO
  // ==================================================

  const [editando, setEditando] = useState(false);

  return (
    <>
      {/* ==================================================
          EXEMPLO 1 - PRIMEIRA CONDIÇÃO
      ================================================== */}

      <h1>{mensagem}</h1>

      {/* ================= FIM DO EXEMPLO 1 ================= */}

      <hr />

      {/* ==================================================
          EXEMPLO 2 - STATUS COM IF
      ================================================== */}

      <Status online={true} />
      <Status online={false} />

      {/* ================= FIM DO EXEMPLO 2 ================= */}

      <hr />

      {/* ==================================================
          EXEMPLO 3 - BOTÃO DE LOGIN COM TERNÁRIO
      ================================================== */}

      <h2>
        {logado ? "Bem-vindo!" : "Você está desconectado"}
      </h2>

      <button onClick={() => setLogado(!logado)}>
        {logado ? "Sair" : "Entrar"}
      </button>

      {/* ================= FIM DO EXEMPLO 3 ================= */}

      <hr />

      {/* ==================================================
          EXEMPLO 4 - MENSAGEM COM &&
      ================================================== */}

      <button
        onClick={() => setMostrarBoasVindas(!mostrarBoasVindas)}
      >
        Alterar login
      </button>

      {mostrarBoasVindas && (
        <p>🎉 Bem-vindo ao sistema!</p>
      )}

      {/* ================= FIM DO EXEMPLO 4 ================= */}

      <hr />

      {/* ==================================================
          EXEMPLO 5 - LOGIN OU PAINEL
      ================================================== */}

      {acessoLiberado ? <Painel /> : <Login />}

      <button
        onClick={() => setAcessoLiberado(!acessoLiberado)}
      >
        Alterar acesso
      </button>

      {/* ================= FIM DO EXEMPLO 5 ================= */}

      <hr />

      {/* ==================================================
          EXEMPLO 6 - PERFIL DE USUÁRIO
      ================================================== */}

      <Usuario nome="Ana" perfil="admin" />
      <Usuario nome="Carlos" perfil="cliente" />

      {/* ================= FIM DO EXEMPLO 6 ================= */}

      <hr />

      {/* ==================================================
          EXEMPLO 7 - STATUS DE ESTOQUE
      ================================================== */}

      <Produto nome="Mouse" estoque={5} />
      <Produto nome="Teclado" estoque={0} />

      {/* ================= FIM DO EXEMPLO 7 ================= */}

      <hr />

      {/* ==================================================
          EXEMPLO 8 - CLASSIFICAÇÃO POR NOTA
      ================================================== */}

      <Avaliacao nota={9} />
      <Avaliacao nota={7} />
      <Avaliacao nota={5} />
      <Avaliacao nota={4} />

      {/* ================= FIM DO EXEMPLO 8 ================= */}

      <hr />

      {/* ==================================================
          EXEMPLO 9 - MODO DE EDIÇÃO
      ================================================== */}

      {editando ? (
        <input placeholder="Digite seu nome" />
      ) : (
        <p>Ana Souza</p>
      )}

      <button onClick={() => setEditando(!editando)}>
        {editando ? "Salvar" : "Editar"}
      </button>

      {/* ================= FIM DO EXEMPLO 9 ================= */}

      <hr />

      {/* ==================================================
          EXEMPLO 10 - ACESSO RESTRITO
      ================================================== */}

      <h3>Administrador conectado</h3>
      <PainelRestrito logado={true} perfil="admin" />

      <h3>Cliente conectado</h3>
      <PainelRestrito logado={true} perfil="cliente" />

      <h3>Administrador desconectado</h3>
      <PainelRestrito logado={false} perfil="admin" />

      {/* ================= FIM DO EXEMPLO 10 ================= */}
    </>
  );
}

export default App;