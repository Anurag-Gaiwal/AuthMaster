import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);
  return (
    <>
      <center>
        <div className="nav">
          {email == null && <Link to="/">Login</Link>}
          {email == null && <Link to="/signup">Signup</Link>}
          {email == null && <Link to="/fp">ForgotPassword</Link>}

          {email != null && <Link to="/home">Home</Link>}
          {email != null && <Link to="/about">About</Link>}
          {email != null && <Link to="/cp">ChangePassword</Link>}
        </div>
      </center>
    </>
  );
};
export default Login;
