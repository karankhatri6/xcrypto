import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coin from "./components/Coin";
import Exchange from "./components/Exchange";
import CoinDetails from "./components/CoinDetails";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coin" element={<Coin />}/>
        <Route path="/exchange" element={<Exchange />}/>
        <Route path="/coin/:id" element={<CoinDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
