import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/login"
import { Register } from "./pages/register"
import { Home } from "./pages/home"
import{ForgotPassword} from "./Dash-components/ForgotPassword"


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}/>
      <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path = "/ForgotPassword" element= {<ForgotPassword/>}
          />

      </Routes>
       
    </>
  )
}

export default App
