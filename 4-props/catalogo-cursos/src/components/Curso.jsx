function Curso({nome,professor,duracao,nivel,preco}){
    return(
        <div className = "cursos">
           <h2 className="titulo">Nome: {nome}</h2>
           <p>Professor: {professor}</p>
           <p>Duração: {duracao}</p>
           <p>Nivel: {nivel}</p>
           <p>Preço: {preco}</p>
        </div>
    )
}

export default Curso;