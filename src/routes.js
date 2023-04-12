import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";

import New from "./components/pages/new"
import NavBar from "./components/Leyaut/NavBar";
import Eprojects from "./components/pages/eprojects";
import Projetos from "./components/pages/Project"

import Projects from "./components/project/projects"

function Routas() {
    return (
        <Router>
           <NavBar/>
            <Routes>
               
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<New />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<Eprojects />} />
            </Routes>


        </Router >
    )
}

export default Routas