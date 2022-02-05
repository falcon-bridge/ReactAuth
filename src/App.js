import { useContext } from "react";

import AuthContext from "./store/auth_contect";

import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedin && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedin && <UserProfile />}
          {!authCtx.isLoggedin && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
