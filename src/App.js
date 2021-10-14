import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Random from "./components/Random/Random";
import AuthProvider from "./context/AuthProvider";
import SearchProvider from "./context/SearchProvider";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <SearchProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/details/:drinkID">
              <Details />
            </Route>
            <Route path="/forget">
              <ForgetPassword />
            </Route>
            <PrivateRoute path="/random">
              <Random />
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </SearchProvider>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
