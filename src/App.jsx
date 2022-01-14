import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterPart from "./components/FooterPart/FooterPart";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import AlbumCard from "./components/Album/AlbumCard";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Album from "./components/Album/Album";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album/:id" element={<Album />} />
        </Routes>
      </div>
      <FooterPart />
    </BrowserRouter>
  );
}

export default App;
