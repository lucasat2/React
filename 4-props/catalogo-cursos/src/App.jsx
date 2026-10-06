
import Curso from "./components/Curso"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css";

function App() {


  return (
    <div>

      <Header/>

      <br/>

      <Curso
        nome="Desenvolvimento Front End"
        professor="Lucas"
        duracao="40 horas"
        nivel= "Básico"
        preco={1500}/>

      <Curso
        nome="Desenvolvimento Back end"
        professor="Fulano"
        duracao="35 horas"
        nivel= "Intermediário"
        preco={1700}/>
   

        <Curso
        nome="Data Science"
        professor="Beltrano"
        duracao="35 horas"
        nivel= "Avançado"
        preco={1550}/>



    <Footer/>


    </div>

    
  )
}

export default App
