import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarsClub from './Components/MarsClub/MarsClub';
import News from './Components/News/News';
import NoPage from './Components/NoPage/NoPage';
import Layout from "./Components/Layout";
import Search from './Components/Search/Search';
import Hompage from './Components/Homepage/Homepage';




function App() {
  return (
    <div className='App' >
      
        <BrowserRouter>
          <Layout>
            <Routes>
                <Route index element={<Hompage/>} />
                <Route path="/apod" element={<LandingPage/>} />
                <Route path="/newshub" element={<News/>} />
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
