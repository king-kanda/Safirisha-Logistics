import React from 'react'
import { Router , Route, Routes  } from 'react-router-dom'
import { Home , About , Contact , Careers , Tracking , Notfound , Services , Position } from './pages'
import NotFound from './pages/404'


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/services" element={<Services/>} ></Route>
        <Route path="/careers" element={<Careers/>} ></Route>
        <Route path="/Tracking" element={<Tracking/>} ></Route>
        <Route path="/careers/position" element={<Position/>} ></Route>
        <Route path="*" element={<Notfound/>} ></Route>
      </Routes>
    </>

  )

}

export default App