function Curso({nome,professor,duracao,nivel,preco}){
    return(
        <div>
           <h2>Nome: {nome}</h2>
           <p>Professor: {professor}</p>
           <p>Duração: {duracao}</p>
           <p>Nivel: {nivel}</p>
           <p>Preço: {preco}</p>
        </div>
    )
}

export default Curso;