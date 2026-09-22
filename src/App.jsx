import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import MyNavBar from './components/MyNavBar';
import AboutMe from './pages/AboutMe/AboutMe';
import Proyects from './pages/Proyects/Proyects';
const App = () =>{
  return (
    <BrowserRouter>
      <div className="page-grid min-h-screen">
        <MyNavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutMe />} path="/acerca-de-felipe" />
          <Route element={<Proyects />} path="/proyectos" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;