import Login from "./Pages/login/Login";
import SignUp from "./Pages/signup/SignUp";
import { useAuthContext } from "./context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
      <Route path='/' element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
     
    </div>
  ); 
}

export default App;
