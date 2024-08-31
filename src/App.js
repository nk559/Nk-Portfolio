import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Process from './components/Process';
import Education from './components/Education';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/process' element={<Process/>}/>
                    <Route path='/about/education' element={<Education/>}/>
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App