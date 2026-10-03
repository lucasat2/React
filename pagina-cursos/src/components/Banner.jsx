
import Imagem from '../assets/hero.png'

function Banner(){
    return(
        <img src={Imagem} 
        alt="Logo Codi"
        style = {{
            width:"150px",
            margin:"auto"
        }}
        
        />
    );
    
}

export default Banner;