
import "./Produto.css";


function Produto({nome,preco}) { 
    return ( 
        <div className = "produto">

           <h2 className="produto-titulo">{nome}</h2>
           <p className="produto-preco">{preco}</p>
           <button className= "produto-botao">Comprar</button>  
        

        </div>
    )
}

export default Produto;