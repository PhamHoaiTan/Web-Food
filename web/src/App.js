import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
