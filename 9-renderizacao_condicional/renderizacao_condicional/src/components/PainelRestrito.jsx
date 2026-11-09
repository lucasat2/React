function PainelRestrito({ logado, perfil }) {
    return (
        <div>
            {logado && <p>Usuário autenticado</p>}

            {logado && perfil === "admin" && (
                <button>Gerenciar usuários</button>
            )}
        </div>
    );
}

export default PainelRestrito;