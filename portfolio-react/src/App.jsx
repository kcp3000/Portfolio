import Home from "./pages/Home"
import Y2K from "./PROJECTSFOLD/Y2K"
import WasteWise from "./PROJECTSFOLD/WasteWise"
import CAW from "./PROJECTSFOLD/CAW"
import WILL from "./PROJECTSFOLD/WILL"
import PROJECTS from "./pages/PROJECTS"
import NotFoundPage from "./pages/NotFoundPage"
import ScrollToTop from "./components/ScrollToTop"
import NavBar from "./components/NavBar"
import AppearText from "./components/AppearText"
import ABOUT from "./pages/ABOUT"
import { Routes, Route } from "react-router-dom"


function App() {

  return <>
    <AppearText dur={1}>
      <NavBar />
    </AppearText>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/WILL' element={<WILL />} />
      <Route path='/Y2K' element={<Y2K />} />
      <Route path='/WasteWise' element={<WasteWise />} />
      <Route path='/CAW' element={<CAW />} />
      <Route path='/PROJECTS' element={<PROJECTS />} />
      <Route path="/ABOUT" element={<ABOUT />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </>
}

export default App
