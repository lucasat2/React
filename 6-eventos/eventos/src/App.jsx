
//import Componente from './components/Componente'
import './App.css'

function App() {

   function mostrarMensagem(){
    alert("Olá! Você clicou no botão.");
  }

  return (
    <>
      <button onClick={mostrarMensagem}>Clique aqui</button>
    </>
  )
}

export default App
