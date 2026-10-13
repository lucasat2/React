import "./Perfil.css";

function Perfil({nome,cargo,cidade}) { 
    return(
        <div className = "cartao-perfil">
            <h1 className="nome-destaque">{nome}</h1>
            <p className = "cargo">{cargo}</p>
            <p className ="cidade">{cidade}</p>
            <button className="botao">Ver Perfil</button>
        </div>
 
    )
}

export default Perfil;