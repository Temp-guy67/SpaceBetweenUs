import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarsClub from './Components/MarsClub/MarsClub';
import NoPage from './Components/NoPage/NoPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<LandingPage/>} />
            <Route path="marsclub" element={<MarsClub/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

      
  );
}

export default App;
