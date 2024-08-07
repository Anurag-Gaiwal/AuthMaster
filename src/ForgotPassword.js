import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect,useState } from "react";
import { getAuth,sendPasswordResetEmail } from "firebase/auth";


const ForgotPassword = () => {

    const [email,setEmail] = useState();
    const hEmail = (event) => {setEmail(event.target.value)}
    const nav = useNavigate();
    useEffect(()=>{
        let email = localStorage.getItem("email")
        if(email != null)
            nav("/home")
    },[])

    const sendMail = (event) => {
        event.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then(res=>nav("/"))
        .catch(err=>alert("issue " + err))
    }
  return (
    <>
      <center>
        <NavBar />
        <h1>Forgot password page</h1>
        <form onSubmit={sendMail}>
            <input type="email" placeholder="enter registered email" 
            onChange={hEmail}/>
            <br /><br />
            <input type="submit" value="Reset"/>

        </form>
      </center>
    </>
  );
};
export default ForgotPassword;
