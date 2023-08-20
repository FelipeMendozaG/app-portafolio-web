import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import MyNavBar from './components/MyNavBar';
import AboutMe from './pages/AboutMe/AboutMe';
import Proyects from './pages/Proyects/Proyects';
const App = () =>{
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutMe />} path="/acerca-de-felipe" />
        <Route element={<Proyects />} path="/proyectos" />
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}
export default App;