import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import Footer from './Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/cp" element={<ChangePassword/>}></Route>
          <Route path="/fp" element={<ForgotPassword/>}></Route>
          <Route path="*" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <center>
        <br /><br />
      <Footer/>

      </center>

    </>
  );
}

export default App;
