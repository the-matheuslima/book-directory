import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from './components/navbar'
import Home from './pages/home'
import MoreInfo from "./pages/more-info"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-info/:id" element={<MoreInfo />} />

      </Routes>
    </Router>
  )
}

export default App
