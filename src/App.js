import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarsClub from './Components/MarsClub/MarsClub';
import NoPage from './Components/NoPage/NoPage';
import Layout from "./Components/Layout";
import Search from './Components/Search/Search';



function App() {
  return (
    <div className='App' >
      
        <BrowserRouter>
          <Layout>
            <Routes>
                <Route index element={<LandingPage/>} />
                <Route path="/marsclub" element={<MarsClub/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
          </Layout>
        </BrowserRouter>
      
    </div>

      
  );
}

export default App;
