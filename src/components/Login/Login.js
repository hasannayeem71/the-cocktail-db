import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { user, logInWithGoogle, setError, setIsLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const handleLogin = () => {
    logInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <body>
        <div className="login-form">
          <h2 className="text-center">Log In</h2>
          <div className="text-center social-btn">
            <button className="btn btn-danger btn-block" onClick={handleLogin}>
              <i className="fa fa-google"></i> Sign in with <b>Google</b>
            </button>
          </div>
          <div className="or-seperator">
            <i>or</i>
          </div>
          <form method="post">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user mt-2 me-2"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock mt-2 me-2"></i>
                </span>
                <input
                  type="password"
                  className="form-control "
                  name="password"
                  placeholder="Password"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-success btn-block login-btn mt-4 ms-5 px-5 disabled">
                Sign in
              </button>
            </div>
            <div className="clearfix ">
              <label className="pull-left checkbox-inline">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forget" className="pull-right text-success ">
                Forgot Password?
              </Link>
            </div>
          </form>
          <div className="hint-text small">
            Don't have an account?{" "}
            <Link to="/forget" className="text-success">
              Register Now!
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
