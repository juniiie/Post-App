import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar2 = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navigation">
      <a className="button" href="">
        <img src={user?.photoURL || ""}></img>
        <div className="logout">LOGOUT</div>
      </a>
    </div>
  );
};
