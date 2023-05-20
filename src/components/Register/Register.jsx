import React, { useContext, useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

const Register = () => {
  const initialValue = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { register } = useContext(UserContext)

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    if (
      data.name.length + 1 < 3 ||
      data.surname.length + 1 < 3 ||
      data.password.length === 0
    ) {
      setMessage("Name, Last Name, and password are required");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    register(data)
    // limpia formulario
    setData(initialValue);
    navigate("/profile");
  }

  return (
    <div className="principal-register-container">
      <div className="container-form">
        <div className="form-container">
          <h1 className="text-form">Registro</h1>
          <form onSubmit={onSubmit}>
            <div className="input-container">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={handleInputChange}
                name="name"
                value={data.name}
              />
            </div>
            <div className="input-container">
              <label htmlFor="surname">Apellidos</label>
              <input
                type="text"
                placeholder="Enter your last name"
                onChange={handleInputChange}
                name="surname"
                value={data.surname}
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={handleInputChange}
                name="email"
                value={data.email}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                onChange={handleInputChange}
                name="password"
                value={data.password}
              />
            </div>
            <div className="input-container">
              <label htmlFor="repeat-password">Repetir Contraseña</label>
              <input
                type="password"
                onChange={handleInputChange}
                name="repeat-password"
                value={data.password}
              />
            </div>
            <button type="submit" className="submit-btn" disabled={btnDisabled}>
              Submit
            </button>
          </form>
          {message && <span className="alert-message">{message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Register;