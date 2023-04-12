import { Link } from "react-router-dom"
import "../Leyaut/btn.css"

function Bu ({to ,text}){
    return(
        <Link className="btn" to={to}> {text}  </Link>

        )
    

}
export default Bu