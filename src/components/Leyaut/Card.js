import { Link } from 'react-router-dom'
import "./modele.css"


import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ id, name, cost, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id ,cost)
  }

  return (
    <div className="card">
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span> R${budget}
      </p>
      <p className="category_text">
        <span ></span> {category}
      </p>
      <div className="card_actions">
        <Link to={'/projects/' + id}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  )
}

export default ProjectCard