import Logo from "../Leyaut/img/w.svg"
import "./home.css"
import Bu from "../Leyaut/btn.js"
function Home() {
    return (
        <section className="section">
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos</p>
           <Bu  to="/projetos"  text="Criar projeto"/>
            <img src={Logo} />
        </section>

    )
}

export default Home