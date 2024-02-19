import Login from "./Pages/login/Login";
import { useAuthContext } from "./context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
      <Route path='/' element={authUser ? <Navigate to='/' /> : <Login />} />
      </Routes>
     
    </div>
  );
}

export default App;
