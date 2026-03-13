import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Future routes:
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/new-in-utrecht" element={<NewInUtrecht />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/about" element={<About />} />
      */}
    </Routes>
  )
}

export default App
