
import Usuario from "./components/Usuario";
import Produto from "./components/Produto"; 
import Botao from "./components/Botao";

function App() {

   const nomeProduto = "Mouse Gamer";
   const precoProduto = 100;


  return (
    <>
      <Usuario 
        nome = "Ana" 
        idade = {40}
        cidade = "Juiz de Fora"
      />
      <Botao texto = "Compre agora!"/>
  

      <Produto
        nome = {nomeProduto}
        categoria = "Informática"
        preco = {precoProduto}
    
      />
      <Botao texto = "Compre!"/>

       <Produto
        nome = "Teclado mecânico"
        categoria = "Informática"
        preco = {250}
      />
        <Botao texto = "Clique Aqui!"/>
      
    </>
  )
}

export default App
