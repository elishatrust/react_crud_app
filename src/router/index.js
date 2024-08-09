import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.js'
import About from '../pages/About.js'
import Contact from '../pages/Contact.js'
import Student from '../pages/Student.js'


const MyRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/students" element={<Student />} />
        </Routes>
    )
}

export default MyRouter