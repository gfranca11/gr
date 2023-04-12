import "./area.css"
import { BsFillTrashFill } from 'react-icons/bs'
function Area({ id, name, cost, description, handleRemove }) {
    const remove = (e) => {
      e.preventDefault()
      handleRemove(id, cost)
    }
  
    return (
        <div className="h">
      <div className="card2">
        <h4>{name}</h4>
        <p>
          <span>Custo total:</span> R${cost}
        </p>
        <p>{description}</p>
        <div className="card_actions">
          <button onClick={remove}>
            <BsFillTrashFill />
            Excluir
          </button>
        </div>
      </div>
      </div>
    )
  }
  export default Area
  
  