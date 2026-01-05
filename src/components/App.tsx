import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import LandingPage from './LandingPage'
import ContactPage from './ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
