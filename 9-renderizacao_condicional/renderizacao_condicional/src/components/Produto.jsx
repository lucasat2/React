function Produto({ nome, estoque }) {
    return (
        <div>
            <h2>{nome}</h2>

            <p>
                {estoque > 0
                    ? `📦 ${estoque} unidades disponíveis`
                    : "❌ Produto esgotado"}
            </p>
        </div>
    );
}

export default Produto;