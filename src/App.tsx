import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import BlogLayout from "./components/BlogLayout"

import Home from "./pages/Home"
import About from "./pages/About"
import Rabbits from "./pages/projects/Rabbits"
import VirtualLaboratories from "./pages/projects/VirtualLaboratories"
import Tower from "./pages/projects/Tower"

import Blog from "./pages/projects/Blog"
import BlogHome from "./pages/projects/BlogHome"
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
        <Route path="/projects/tower" element={<Tower />} />
        <Route path="/projects/fish" element={<Fish />} />
        <Route path="/projects/blog" element={<BlogLayout />}>
          <Route path="home" element={<BlogHome />} />
          <Route path=":id" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}