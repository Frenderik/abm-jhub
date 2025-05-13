import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import DiseaseModeling from './Pages/DiseaseModeling';
import PublicSector from './Pages/PublicSector';
import Resources from './Pages/Resources';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/infectious-disease" element={<DiseaseModeling />} />
            <Route path="/projects/public-sector" element={<PublicSector />} />
            <Route path="/projects/healthcare" element={<DiseaseModeling />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;