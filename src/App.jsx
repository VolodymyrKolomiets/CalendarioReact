import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from './context/UserContext/UserState'
import Register from './components/Register/Register'



function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
