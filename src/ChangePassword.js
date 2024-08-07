import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"
import { useEffect, useRef, useState } from "react";
import { getAuth,updatePassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";

const ChangePassword = () => {
    const nav = useNavigate();
    useEffect(()=>{
        let email = localStorage.getItem("email")
        if(email == null)
            nav("/home")
    },[])

    const rPass1 = useRef();
    const rPass2 = useRef();

    const [pass1,setPass1] = useState("");
    const [pass2,setPass2] = useState("");
    const [msg,setMsg] = useState("");

    const hPass1 = (event) => {setPass1(event.target.value)}
    const hPass2 = (event) => {setPass2(event.target.value)}

    const change = (event) =>{
        event.preventDefault();
        const auth = getAuth();
        onAuthStateChanged(auth,(user)=>{
            updatePassword(user,pass1)
            .then(res=>{
                localStorage.removeItem("email");
                nav("/");
            })
            .catch(err=>setMsg("issue : " + err))
        })
    }

  return (
    <>
    <center>
        <NavBar/>
        <h1>Change Password page</h1>
        <form onSubmit={change}>
            <input type="password" placeholder="enter new password" 
            onChange={hPass1} ref={rPass1} value={pass1}/>
            <br /><br />
            <input type="password" placeholder="confirm new password" 
            onChange={hPass2} ref={rPass2} value={pass2}/>
            <br /><br />
            <input type="submit" value="Change Password"/>
        </form>
        <h2>{msg}</h2>
    </center>
    </>
  )
}
export default ChangePassword