
import Curso from "./components/Curso"

function App() {

  return (
    <div className= "cursos">


        <Curso
          nome = "Python do Zero"
          categoria = "Back-end"
          preco = {347}/>

        <Curso
          nome = "Analise de dados"
          categoria = "Dados"
          preco = {397}/>

        <Curso
          nome = "React para iniciantes"
          categoria = "Front-end"
          preco = {297}/>
    </div>
  ) }

export default App
