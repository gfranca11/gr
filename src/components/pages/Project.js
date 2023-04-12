

import "./project.css"
import ProjectForm from "./new"
import { useNavigate } from "react-router-dom"
function NewProject() {
  
  const Navigate = useNavigate()

 
  function createPost(project) {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        Navigate('/projects', { message: 'Projeto criado com sucesso!' })
      })
  }
  
  return (
    <div className="container">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject

