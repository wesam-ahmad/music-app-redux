import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostDetails from "./pages/PostDetails";
import Posts from "./pages/Posts";
import MusicList from "./pages/MusicList";
import MusicCat from "./components/MusicCat";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage.jsx";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MusicList />} />
        <Route path="/posts/:title" element={<PostDetails />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="music" element={<MusicList />} />
        <Route path="category" element={<MusicCat />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
