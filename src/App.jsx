import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Partner from './pages/Partner'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/partner" element={<Partner />} />
      {/* Future routes:
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/new-in-utrecht" element={<NewInUtrecht />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/about" element={<About />} />
      */}
    </Routes>
  )
}

export default App
