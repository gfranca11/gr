import { useParams } from "react-router-dom"
import ProjectForm from "./new"
import { useState, useEffect } from "react"
import "../pages/eproject.css"
import ServiceCard from "./servicesCard"
import Area from "./area"
import {  v4 as uuidv4 } from 'uuid'
function Eprojects() {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const[showform,setShowform] = useState(false)
  const [services, setServices] = useState([])
  const [showServiceForm, setShowServiceForm] = useState(false)
  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch(`http://localhost:5000/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)

          }),
      0,
    )
  }, [id])
  
    

function togProject(){
setShowform(!showform)
}
function editPost(project){

  if (project.budget < project.cost) {
    
    return false
  }

  fetch(`http://localhost:5000/projects/${project.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  })
    .then((resp) => resp.json())
    .then((data) => {
      setProject(data)
      setShowform(!showform)
   
    })
}
function createService(project) {
  // last service
  const lastService = project.services[project.services.length - 1]

  lastService.id = uuidv4()

  const lastServiceCost = lastService.cost

  const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

  // maximum value validation
  if (newCost > parseFloat(project.budget)) {
   
    project.services.pop()
    return false
  }

  // add service cost to project cost total
  project.cost = newCost

  fetch(`http://localhost:5000/projects/${project.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  })
    .then((resp) => resp.json())
    .then((data) => {
      setServices(data.services)
      setShowServiceForm(!showServiceForm)
     
    }) }
    function toggleServiceForm() {
      setShowServiceForm(!showServiceForm)
    }
    function removeService(id ,cost){
      const servicesUpdated = project.services.filter(
        (service) => service.id !== id,
      )
      const projectUpdated = project

      projectUpdated.services = servicesUpdated
      projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
  
      fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectUpdated),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(projectUpdated)
          setServices(servicesUpdated)
         
        })

    }
  return (
    <>

      <div className="project_details">
        <div className="conta">
          <div className="details_container">
            <h1>Projeto:{project.name} </h1>
            <button className="btn" onClick={togProject}>{!showform ? 'Editar projeto' : 'Fechar'}</button>
            {!showform ? (
                <div className="form">
                  <p>
                    <span>Categoria:</span> {project?.category?.name}
                  </p>
               <p>
                    <span>Total do orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total utilizado:</span> R${project.cost}
                  </p>
                  </div>
                ) : (
                  <div className=" form">
                 <ProjectForm
                 handleSubmit={editPost}
                 btnText="Concluir Edição"
                 projectData={project}
                 />
                 
               
               </div>
              )}
            

          </div>
          <div className="service_form_container">
              <h2>Adicione um serviço:</h2>
              <button className="btn" onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
              </button>
              <div className="form">
                {showServiceForm && (
                  <ServiceCard
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
                
              </div>
            </div>
            <h2>Serviços:</h2>
            <div>
              {services.length > 0 &&
                services.map((service) => (
                  <Area
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços cadastrados.</p>}
          
        </div>
          
              

        </div>
      </div>

    </>
  )
}


export default Eprojects