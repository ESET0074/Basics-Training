import NavBar from './Components/NavBar';
import AboutPage from './pages/AboutPage.js';
import HomePage from './pages/HomePage.js';
import ApiPage from './pages/ApiPage.js';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element ={<AboutPage/>}/>
      <Route path="/api" element ={<ApiPage/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
