import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name=""></input>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name=""></input>
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            {/* <span></span>
            <span></span> */}
            Submit
          </a>
          <h3>OR</h3>
          <a href="#" onClick={signInWithGoogle}>
            Sign in with google
          </a>
        </form>
      </div>
    </div>
  );
};
