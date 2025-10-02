import "./css/style.css";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import AddUser from "./pages/AddUser";
import Footer from "./components/Footer";

//faqet
// Home  , Users e ka mrena UserDetails per me i pa detajet e perdorusit ,   AddUser
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="container mx-auto my-6">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/users/:id" element={<UserDetails/>} />
      <Route path="/adduser" element={<AddUser/>} />
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
