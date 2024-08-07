import NavBar from "./NavBar"
import { useState, useRef, useEffect } from "react";
import app from "./Firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const nav = useNavigate();
    useEffect(()=>{
        let email = localStorage.getItem("email");
        if(email != null)
            nav("/home")
    },[])

    const rEmail = useRef();
    const rPass = useRef();

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [msg,setMsg] = useState("");

    const hEmail = (event) => {setEmail(event.target.value)}
    const hPass = (event) => {setPass(event.target.value)}

    const login = (event) => {
        event.preventDefault();

        if(email === ""){
            alert("Please Enter Email");
            setMsg("");
            rEmail.current.focus();
            return;
        }

        if(pass === ""){
            alert("Please Enter Password");
            setMsg("");
            rEmail.current.focus();
            return;
        }

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
        .then(res=>{
            localStorage.setItem("email",email)
            nav("/home")
        })
        .catch(err=>setMsg("issue " + err));
    }
  return (
    <>
    <center>
        <NavBar/>
        <h1>Login page</h1>
        <form onSubmit={login}>
            <input type="email" placeholder="Enter your Email"
            onChange={hEmail} ref={rEmail} value={email}/>
            <br /><br />
            <input type="password" placeholder="Enter your Password"
            onChange={hPass} ref={rPass} value={pass}/>
            <br /><br />
            <input type="submit" value="Login"/>
        </form>
        <h2>{msg}</h2>
    </center>
    </>
  )
}
export default Login