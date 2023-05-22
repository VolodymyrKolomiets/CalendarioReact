import React, { useContext, useState,useEffect} from "react";
import { UserContext } from "../../context/UserContext/UserState";
import './Login.scss'
export const Login= () => {
  const {login,token,user} = useContext(UserContext)
  const [data, setData] = useState({
email: "",
password: "",
});
const initialState ={
  email:"",
  password:"",
}
const clearState = () => {

  setData({ ...initialState });
  
  };
const handleInputChange = (event) => {
  setData({
    ...data,
    [event.target.name]: event.target.value,
  });
  
  };
  useEffect(() => {
    if (token ) {
      navigate("/");
      console.log('usuario conectado con exito');
    }else{
      console.log('Ha habido un error al iniciar sesion,intentalo de nuevo o registrate');
    }
  }, [token]);
  
  const handleSubmit = (values) => {
 
  login(values)
    console.log("sending data..." );
    clearState();
    };
    return (
      <div className="login-container" >
        
        <form onSubmit={handleSubmit} >
        <div className="emailContainer">
          <label className="emailText" htmlFor="password" >Email:</label>
            <input
              className="inpEmail"
              type="email"
              placeholder="email"
              value={data.email}
              onChange={handleInputChange}
              name="email"
            />
        </div>
          <div className="passwordContainer">
            <label className="passwordText" htmlFor="password">Password:</label>
            <input
            className="inpPassword"
              type="password"
              placeholder="password"
              value={data.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
    }
