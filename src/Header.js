import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import "./Header.css";

export default function Header() {
  const { isUserLogged, dispatchUserState } = useContext(UserContext);

  return (
    <div className="header">
      {isUserLogged() ? (
        <>
          <button
            className="log-out"
            onClick={() => {
              window.history.pushState("", "", "http://localhost:3000/login");
              dispatchUserState({ type: "clearToken" });
            }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "lightblue" }}
            >
              Logout
            </Link>
          </button>
        </>
      ) : (
        <button>
          {/* <Link
            style={{ color: "", textDecoration: "none" }}
            className="log-in"
            to="/login"
          >
            Login
          </Link> */}
        </button>
      )}
    </div>
  );
}
