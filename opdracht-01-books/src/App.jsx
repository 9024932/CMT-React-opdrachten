import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Navigation from './Pages/Navigation';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Home from './Pages/Home';
import './App.css'
function App() {
 
  return (
    <BrowserRouter>
    <Routes className="header">
      <Route path='/' element={<Navigation />} >
      <Route index element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       
       <Route path="/home" element={<Home />} />
       <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
   
  );
}
export default App;
 
 