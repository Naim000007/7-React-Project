
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Coins from "./Components/Coins"
import Exchanges from "./Components/exchanges"
import CoinDetails from "./Components/CoinDetails"

function App() {


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchange" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
