import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link className="link" to={"/"}>
          Home
        </Link>
        {!user ? (
          <Link className="link" to={"/login"}>
            Login
          </Link>
        ) : (
          <Link className="link" to={"/createpost"}>
            Create Post
          </Link>
        )}
      </div>

      <div className="user">
        {user && (
          <>
            <p>{user?.displayName} </p>

            <div className="avatar">
              <img src={user?.photoURL || ""}></img>
            </div>

            {/* <div onClick={signUserOut}>Log OUT</div> */}

            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>

      <section>
        <nav className="stroke">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};
