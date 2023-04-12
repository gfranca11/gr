import { Link } from "react-router-dom"
import "./Modeles.css" 
import Logo from "./img/w.png"
function NavBar(){
  
return(
    
    <nav className="navbar">
      <Link to="/"> <img src={Logo} alt="Savings" /></Link>

            <ul>
        <li className="item"><Link to="/">Home</Link></li>
        <li className="item"><Link to="/projects">Projetos</Link></li>
       <li className="item"> <Link to="/contact">Empresa </Link> </li>
      
      
        </ul>
       
        </nav>
)
}
export default NavBar