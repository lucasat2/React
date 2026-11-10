import { useState } from "react";


function Produto({ nome, preco, descricao }) {
    // Estados js
    const [favorito, setFavorito] = useState(false);
    const [mostrarDescricao, setMostrarDescricao] = useState(false);

    // Renderização JSX

    return (
        <div>
            <h2>{nome}</h2>
            <p>{preco}</p>

            <button onClick={() => setFavorito(!favorito)}>

                {favorito
                    ? "♥ Favoritado" : "♡ Favoritar"}
            </button>


            <button onClick={() => setMostrarDescricao(!mostrarDescricao)}>

                {mostrarDescricao
                    ? "Ocultar descriçáo" : "Ver descrição"}
            </button>

            {mostrarDescricao && (
                <p>{descricao}</p>
            )}
        </div>
    )

}

export default Produto;