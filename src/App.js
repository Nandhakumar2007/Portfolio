import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './Task/Menu_task';
import Home_task from './Task/Home_task';
import Login_task from './Task/Login_task';
import About_task from './Task/About_task';
import Skills_task from './Task/Skills_task';
import Projects_task from './Task/Projects_task';
import Contact_task from './Task/Contact_task';
import Accordion_task from './Task/Accordion_task';
import Character from './Character' 

import './App.css';
function App() {
    return (
        // <BrowserRouter>
        //     <Menu />

        //     <Routes>
        //         <Route
        //             path="/"
        //             element={
        //                 <Home_task
        //                     name="Nandha"
        //                     user_name="nandha_420"
        //                     role='Student'
        //                     contact="9787221750"
        //                     email="nandha@gmail.com"
        //                     skills={["Python", "Java"]}
        //                     location="Salem"
        //                     about="I am learning web development."
        //                 />
        //             }
        //         />

        //         <Route
        //             path="/home"
        //             element={
        //                 <Home_task
        //                     name="Nandha"
        //                     user_name="nandha_420"
        //                     role="Student"
        //                     contact="9787221750"
        //                     email="nandha@gmail.com"
        //                     skills={["Python", "Java"]}
        //                     location="Salem"
        //                     about="I am learning web development."
        //                 />
        //             }
        //         />

        //         <Route
        //             path="/about"
        //             element={
        //                 <About_task
        //                     name="Nandha"
        //                     role="Student"
        //                     location="Salem"
        //                 />
        //             }
        //         />

        //         <Route path="/skills" element={<Skills_task />} />
        //         <Route path="/projects" element={<Projects_task />} />
        //         <Route path="/contact" element={<Contact_task />} />
        //         <Route path="/login" element={<Login_task />} />
        //         <Route path="/accordion" element={<Accordion_task />} />
        //     </Routes>
        //     </BrowserRouter>
        <Character/>
        // Hello this our code
        
    );
}

export default App;