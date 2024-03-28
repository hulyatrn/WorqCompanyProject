import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import Navbar from "./components/navbar/Navbar"
import Login from "./pages/login/Login"
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
     <MantineProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
