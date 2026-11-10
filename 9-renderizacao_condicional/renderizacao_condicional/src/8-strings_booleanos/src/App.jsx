import { useState } from "react";

function App() {

  const [aberto, setAberto] = useState(false);

  return (
    <div>

      <button
        onClick={() =>
          setAberto(!aberto)
        }
      >
        Alternar descrição
      </button>

      {aberto && (
        <p>
          Esta descrição pode ser mostrada ou escondida.
        </p>
      )}

    </div>
  );
}

export default App;