import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Rabbits from "./pages/projects/Rabbits"
import VirtualLaboratories from "./pages/projects/VirtualLaboratories"

import Cat from "./pages/Cat"
import Dog from "./pages/Dog"
import Fish from "./pages/Fish"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/rabbits" element={<Rabbits />} />
        <Route path="/projects/VirtualLaboratories" element={<VirtualLaboratories />} />
        <Route path="/projects/cat" element={<Cat />} />
        <Route path="/projects/dog" element={<Dog />} />
        <Route path="/projects/fish" element={<Fish />} />
      </Routes>
    </BrowserRouter>
  )
}