import { useState } from "react";
function App() {
  const [contador, setContador] = useState(0);
  
  //Funcao de aumentar
  function aumentar(){
    setContador(contador + 1 );
  }

  //Funcao de diminuir 
  function diminuir(){
    if(contador > 0){
      setContador(contador - 1);
    }
  }

  //Funcao zerar 
  function zerar(){
    setContador(0);
  }
   // RENDERIZACAO 
  return (
    <div>
      <h1>
        {contador}
      </h1>
      <button onClick={aumentar}>+</button>
      <button onClick = {zerar}>Zerar</button>
      <button onClick={diminuir}>-</button>
    </div>
  );
}
export default App;