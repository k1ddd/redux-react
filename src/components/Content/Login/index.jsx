import React, { useState } from "react";
import { login, register } from "../../../features/login/asyncActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() !== "eve.holt@reqres.in") {
      return alert("wrong email");
    }
    dispatch(login({ email: email, password: pass }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(register({ email: regEmail, password: regPass }));
  };

  return (
    <div>
      {token ? (
        <div>You are logged in</div>
      ) : (
        <div>
          Login
          <form action="">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>;
          </form>
          <br />
            </div>
      )}
    </div>
  );
};

export default Login;
