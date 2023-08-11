
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home" ;
import Login from "./pages/Login";
import Profile from "./pages/profile";
import Register from "./pages/Register";

function App() {


  return (<Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}   />
      <Route path="/profile" element={<Profile />}   />
      <Route path="/login" element={<Login />}   />
      <Route path="/register" element={<Register />}   />
    </Routes>
    <Toaster />
  </Router>)
}

export default App
