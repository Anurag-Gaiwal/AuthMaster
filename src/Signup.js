import NavBar from "./NavBar"
import { useState, useRef, useEffect} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();
  useEffect(()=>{
    let email = localStorage.getItem("email")
    if(email != null){
      nav("/home")
    }
  })

  const rEmail = useRef();
  const rPass1 = useRef();
  const rPass2 = useRef();

  const[email,setEmail] = useState();
  const[pass1,setPass1] = useState();
  const[pass2,setPass2] = useState();
  const[msg,setMsg] = useState();

  const hEmail = (event) => {setEmail(event.target.value)}
  const hPass1 = (event) => {setPass1(event.target.value)}
  const hPass2 = (event) => {setPass2(event.target.value)}

  const save = (event) => {
    event.preventDefault();

    if(email === ""){
      alert("Please enter email");
      setMsg("");
      rEmail.current.focus();
      return;
    }

    if(pass1 === ""){
      alert("Please enter Password");
      setMsg("");
      rEmail.current.focus();
      return;
    }

    if(pass2 === ""){
      alert("Please Confirm Password");
      setMsg("");
      rEmail.current.focus();
      return;
    }

    if(pass1 === pass2){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pass1)
      .then(res => nav("/login"))
      .catch(err=>setMsg("issue " + err));
    } else {
      setMsg("Password did not match")
      setPass1("");
      setPass2("");
      rPass1.current.focus();
    }
  }
  return (
    <>
    <center>
        <NavBar/>
        <h1>Signup Page</h1>
        <form onSubmit={save}>
          <input type="email" placeholder="enter your email"
          onChange={hEmail} ref={rEmail} value={email}/>
          <br /><br />
          <input type="password" placeholder="enter your password"
          onChange={hPass1} ref={rPass1} value={pass1}/>
          <br /><br />
          <input type="password" placeholder="enter confirm password"
          onChange={hPass2} ref={rPass2} value={pass2}/>
          <br /><br />
          <input type="submit" value="Register"/>
        </form>
        <h2>{ msg }</h2>
    </center>
    </>
  )
}
export default Signup