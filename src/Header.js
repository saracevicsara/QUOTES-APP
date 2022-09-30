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
            onClick={() => {
              window.history.pushState("", "", "http://localhost:3000/login");
              dispatchUserState({ type: "clearToken" });
            }}
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                width: "15%",
                height: "10%",
              }}
              to="/login"
            >
              Logout
            </Link>
          </button>
        </>
      ) : (
        <button>
          <Link style={{ color: "white", textDecoration: "none" }} to="/login">
            Login
          </Link>
        </button>
      )}
    </div>
  );
}
