import { Routes , Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Nav from './components/NavContainer/NavContainer';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

import './App.css';

function App() {

  return (
    <div className='App'>
      <Nav/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App;