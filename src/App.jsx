import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterPart from "./components/FooterPart/FooterPart";
import MyNavbar from "./components/MyNavbar/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <FooterPart />
    </div>
  );
}

export default App;
