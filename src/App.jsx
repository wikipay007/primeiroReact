import { BrowserRouter, Routes, Route } from "react-router-dom";
import Titulo from "./Titulo";
import Menu from "./pages/Menu";

function Home() {
  return <h1>Página Inicial</h1>;
}

function Sobre() {
  return <h1>Sobre nós</h1>;
}

function App() {
  return (
    <div>
      <Titulo nome="Dimitri" />
      <Titulo nome="Kauan Santos" />
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
