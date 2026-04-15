import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import About from "./pages/About"
import Rabbits from "./pages/projects/Rabbits"
import VirtualLaboratories from "./pages/projects/VirtualLaboratories"
import Tower from "./pages/Tower"

import Cat from "./pages/Cat"
import Fish from "./pages/Fish"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/rabbits" element={<Rabbits />} />
        <Route path="/projects/VirtualLaboratories" element={<VirtualLaboratories />} />
        <Route path="/projects/cat" element={<Cat />} />
        <Route path="/projects/tower" element={<Tower />} />
        <Route path="/projects/fish" element={<Fish />} />
      </Routes>
    </BrowserRouter>
  )
}