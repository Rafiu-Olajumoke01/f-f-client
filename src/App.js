import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import images from "./../src/images/blogtravel.jpg"
import { useSelector } from 'react-redux';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './pages/Details';

const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Signup = React.lazy(() => import("./pages/Signup"))
const Travel = React.lazy(() => import("./pages/Travel"))
const Food = React.lazy(() => import("./pages/Food"))

const About = React.lazy(() => import("./pages/About"))
const Contact = React.lazy(() => import("./pages/Contact"))
const Notfound = React.lazy(() => import("./pages/Notfound"))



function App() {
  const login = useSelector((state) => state.user.login)

  return (
    <div>
      <React.Suspense fallback={<div style={{ position: "absolute", top: "50%", left: "40%" }}>
        <h3>FOOD AND FARAWAY</h3>
      </div>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={login == false ? <Home /> : <Login />} />
            <Route path='/login' element={<Login />} /><Route path='/signup' element={<Signup />} />
            <Route path='/travel' element={<Travel />} />
            <Route path='/food' element={<Food />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/*' element={<Notfound />} />
          </Routes>
          <ToastContainer
            position='top-center'
          />
        </BrowserRouter>
      </React.Suspense>


    </div>
  );
}

export default App;
