import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

//Importing Context
import { AuthContextProvider } from "./context/Auth.Context";

//Importing Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import DragAndDrop from "./pages/DragAndDrop";

//Importing Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dranndrop" element={<DragAndDrop />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
