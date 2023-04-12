import Me from "../Leyaut/Messagem"
import "../Leyaut/m.css"
import Bu from "../Leyaut/btn"
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import Card from "../Leyaut/Card"
function Project() {
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message

    }
    const [projects, setProject] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)
          })
      }, [])
     function remove(id){
     
          fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((resp) => resp.json())
            .then((data) => {
             setProject(projects.filter((project)  => project.id !== id))
             } )

     }
    
    return (
        <div className="containe"> <div className="b"> <h1>Meus projetos</h1>
            <Bu className="b" to="/projetos" text="Criar projeto" />      </div>
            <div className="c">
           
            {projects.length > 0 &&
                projects.map((project) => (
                  <Card
                    id={project.id}
                    name={project.name}
                    budget={project.budget}
                    category={project?.category?.name}
                    key={project.id}
                    handleRemove={remove}
                    
                  />
                ))}


            </div>
            {message && <Me type="sucess" msg={message} />} </div>
    )
}
export default Project