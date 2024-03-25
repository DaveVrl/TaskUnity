import { Routes , Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Nav from './components/NavContainer/NavContainer';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';

import './App.css';

function App() {

  return (
    <div className='App'>
      <Nav/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App;