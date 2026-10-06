function Produto({nome,categoria,preco}){
    return(
        <>
          <h2>{nome}</h2>
          <p>Categoria - {categoria}</p>
          <p>Preço R$ - {preco}</p>

        </>
    )
}

export default Produto;