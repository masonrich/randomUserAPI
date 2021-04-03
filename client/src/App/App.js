import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./App.css";
import Main from "./pages/Main";
import Details from "./pages/Details";
import { getUserList } from "./api/users";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  //on mount function to call API and retrieve data from backend
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      var list = await getUserList();
      setUsersList(list);
      setLoading(false);
    };
    getUsers();
  }, []);

  const App = () => (
    <div className="App">
      {loading ? (
        <div>
          <h4 className={"mt-5"}>Loading Main Page</h4>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Main usersList={usersList} page={page} setPage={setPage} />
            )}
          />
          <Route path="/details" component={Details} />
        </Switch>
      )}
    </div>
  );
  return (
    <Switch>
      <App />
    </Switch>
  );
};

export default App;
