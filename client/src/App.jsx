import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/:id" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
