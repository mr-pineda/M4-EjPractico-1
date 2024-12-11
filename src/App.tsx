import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
