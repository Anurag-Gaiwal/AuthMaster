import NavBar from "./NavBar"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const About = () => {
    const nav = useNavigate();
    useEffect(()=>{
        let email = localStorage.getItem("email")
        if(email == null){
            nav("/login")
        }
    },[])
  return (
    <>
    <center>
        <NavBar/>
        <h1>About page</h1>
        <p>Creative and detail-oriented professional with expertise in ReactJS, NodeJS, Firebase, Canva, and graphic designing. With a keen eye for aesthetics and a passion for crafting engaging digital experiences, I specialize in creating visually stunning websites and captivating graphics.</p>
        <a href="https://www.linkedin.com/in/anurag-gaiwal/">Check out my linkedin Profile</a>
    </center>
    </>
  )
}
export default About