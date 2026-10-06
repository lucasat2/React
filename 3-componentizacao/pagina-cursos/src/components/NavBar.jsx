function NavBar(){
    return(
        <>
          <nav style={

             {  display: "flex", 
                gap: "10px",
                justifyContent:"center"}     
          }
            >
               <p>Home  </p>
               <p>Cursos  </p>
               <p>Contato </p>
          </nav>
        </>
    )
}

export default NavBar;