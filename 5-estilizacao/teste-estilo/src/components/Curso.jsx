import "./Curso.css"

function Curso({nome,categoria,preco}){
    return(
        <div className="curso-card">
            <span className="curso-categoria">{categoria}</span>
            <h2 className="curso-titulo">{nome}</h2>
            <p className="curso-preco">R$ {preco}</p>
            <button className="curso-botao">Ver detalhes</button>

        </div>
    )
}

export default Curso;