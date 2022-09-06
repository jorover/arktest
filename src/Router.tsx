import React from 'react'
import TopBar from './TopBar'
import Home from './Home'
import Patronise from './Patronise'
import EachVendor from './EachVendor'
import Error from './Error'
import { Routes, Route } from "react-router-dom"

const Router = () => {
  return (
    <>
         <TopBar />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/patronise" element={<Patronise />} />
             <Route path="/patronise/:id" element={<EachVendor />} />
             <Route path="*" element={<Error />} />
         </Routes>

    </>
  )
}

export default Router