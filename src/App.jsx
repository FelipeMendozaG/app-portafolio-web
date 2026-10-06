import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import MyNavBar from './components/MyNavBar';
import AboutMe from './pages/AboutMe/AboutMe';
import Proyects from './pages/Proyects/Proyects';
import TerminosYCondiciones from './pages/TerminosYCondiciones/TerminosYCondiciones';
import ChepitaAfinadorTerminos from './pages/TerminosYCondiciones/ChepitaAfinadorTerminos';
const App = () =>{
  return (
    <BrowserRouter>
      <div className="page-grid min-h-screen">
        <MyNavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutMe />} path="/acerca-de-felipe" />
          <Route element={<Proyects />} path="/proyectos" />
          <Route element={<TerminosYCondiciones />} path="/terminos-y-condiciones" />
          <Route element={<ChepitaAfinadorTerminos />} path="/terminos-chepita-afinador" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;