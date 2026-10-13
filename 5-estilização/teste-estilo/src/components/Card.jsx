 import "./Card.css"

function Card(){

      const cor = "purple";
      const fonte = "40px";

    return(
        <div className = "plano destacado">
         
            <h2 style = {{
                color: cor,
                fontSize: fonte
            }}>Plano Pro</h2>
            <p>R$ 99,00/mes</p>

        </div>
    )
}

export default Card;