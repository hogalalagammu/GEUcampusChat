import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Signup from './pages/signup/SignUp';
import CommunityChat from './pages/communityChat/CommunityChat';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className="appContainer">
    <Navbar />
      <BrowserRouter>
       <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<CommunityChat />} />
      </Routes>
      </div>
    </BrowserRouter>
    <Footer />
    </div>
    </>
  )
}

export default App
