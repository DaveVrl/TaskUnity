import { Routes , Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Nav from './components/NavContainer/NavContainer';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Nav/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    </div>
  )
}

export default App;
