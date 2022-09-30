import { BrowserRouter, Route } from "react-router-dom";
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
          <Route path="/login" component={isUserLogged() ? QuoteList : Login} />
          <Route
            exact
            path="/"
            component={isUserLogged() ? QuoteList : Login}
          />
          {isUserLogged()}
        </BrowserRouter>
      </PageContext.Provider>
    </div>
  );
}
