import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./layouts/Header";
import './App.css'
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import DetailPage from "./pages/DetailPage";
import { VideoContext } from "./context/VideoContext";

function App() {
 

  return (
    <>
      <VideoContext.Provider>
      <BrowserRouter>
        
        <Header /> {/* Header fuera de las rutas para que se muestre en todas las páginas */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<VideoPage />} />
          <Route path="/videos/:id" element={<DetailPage />} />   
        </Routes>
        
      </BrowserRouter>
    </VideoContext.Provider>
    </>
  )
}

export default App
