import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Rental from './pages/Rental/Rental';
import Error from './pages/Error/Error';

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental/:id" element={<Rental />} />

        <Route path="/error404" element={<Error />} />
          {/* Redirection vers `/error404` pour tout autre chemin non reconnu */}
          <Route path="*" element={<Navigate to="/error404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App