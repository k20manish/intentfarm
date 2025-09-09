import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar"
import BodySection from "./component/BodySection"
import Evo from "./component/Evo"
import RamRathn from "./component/RamRathna" 
import CafeSiri from "./component/CafeSiri" 


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<BodySection />} />

          {/* Evo page */}
          <Route path="/evo" element={<Evo />} />
          <Route path="/ramrathna" element={<RamRathn />} />
          <Route path="/cafesiri" element={<CafeSiri />} />
           
        </Routes>
      </main>
    </Router>
  )
}

export default App


