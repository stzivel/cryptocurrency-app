import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CryptoMarket from "./components/CryptoMarket";
import CryptoDetails from "./components/CryptoDetails";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>

    <Box sx={{backgroundColor:'#0cbaba', backgroundImage:'linear-gradient(315deg, #0cbaba 0%, #380036 74%)'}}>

<Navbar/>
      <Routes>
        <Route exact path="/" element={<CryptoMarket />} />

        <Route exact path="/coins/:id" element={<CryptoDetails />} />
      </Routes>

      </Box>
    </BrowserRouter>
  );
}

export default App;
