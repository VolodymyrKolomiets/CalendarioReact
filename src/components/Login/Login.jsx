import React, { useContext, useState,useEffect} from "react";
import { UserContext } from "../../context/UserContext/UserState";
export const Login= () => {
  const {login,token} = useContext(UserContext)
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
    if (token) {
      navigate("/");
      console.log('usuario conectado con exito');
    }else{
      console.log('Ha habido un error al iniciar sesion');
    }
  }, [token]);
  
  const handleSubmit = (values) => {
 
  login(values)
    console.log("sending data..." );
    clearState();
    };
    return (
      <div>
        
        <form onSubmit={handleSubmit}>
        <label htmlFor="password">Email:</label>
          <input
            type="email"
            placeholder="email"
            value={data.email} 
            onChange={handleInputChange}
            name="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="password"
            value={data.password}
            onChange={handleInputChange}
            name="password"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
    }
