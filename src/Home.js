import NavBar from "./NavBar"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const nav = useNavigate();
    const [msg,setMsg] = useState();

    useEffect(()=>{
        let email = localStorage.getItem("email");
        if(email == null){
            nav("/");
        } else {
            setMsg("Welcome " + email)
        } 
    },[])

    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("email");
        nav("/login")
    }
  return (
    <>
    <center>
        <NavBar/>
        <h1>Home page</h1>
        <h2>{msg}</h2>
        <form onSubmit={logout}>
            <input type="submit" value="Logout"/>
        </form>
    </center>
    </>
  )
}
export default Home