function Usuario({ nome, perfil }) {
    return (
        <div>
            <h2>{nome}</h2>

            <p>Perfil: {perfil}</p>

            {perfil === "admin" && (
                <button>Acessar painel administrativo</button>
            )}
        </div>
    );
}

export default Usuario;