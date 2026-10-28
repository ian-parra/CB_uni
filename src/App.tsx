import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { HomePage } from './pages/HomePage'
import { PropuestaPage } from './pages/PropuestaPage'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/propuesta" element={<PropuestaPage />} />
      </Routes>
    </BrowserRouter>
  )
}
