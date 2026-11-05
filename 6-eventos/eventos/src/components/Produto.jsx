function Produto({nome,preco}){
    function verDetalhes(){
      alert(`Produto ${nome} ${preco}`)
    }
    function comprar(){
        alert("Compra iniciada!")
    }

    return (
       <div> 
            <button onClick={verDetalhes}>Ver detalhes</button>
            <button onClick={comprar}>Comprar</button>
        </div>
    )
}
export default Produto;