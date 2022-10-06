import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import QuoteList from "./Components/Quotes/QuoteList";
import Login from "./Components/Login/Login";
import { useContext, useState } from "react";
import { UserContext } from "./Context/UserContext";

import { PageContext } from "./Context/pageContext";

export default function App() {
  const { isUserLogged } = useContext(UserContext);

  const [page, setPage] = useState(1);

  return (
    <div className="appContainer">
      <PageContext.Provider value={{ page, setPage }}>
        <BrowserRouter>
          <Header />
          <Route
            path="/login"
            render={(props) => {
              return isUserLogged() ? (
                <Redirect {...props} to="/" />
              ) : (
                <Login {...props} />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={(props) => {
              return isUserLogged() ? (
                <QuoteList {...props} />
              ) : (
                <Redirect {...props} to="/login" />
              );
            }}
            // component={
            //   isUserLogged() ? QuoteList : <Redirect to="/somewhere/else" />
            // }
          />
          {isUserLogged()}
        </BrowserRouter>
      </PageContext.Provider>
    </div>
  );
}
