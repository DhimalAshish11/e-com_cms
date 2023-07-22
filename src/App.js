import "./App.css";
import { toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/signin-signup/SignIn";
import SignUp from "./components/pages/signin-signup/SignUp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/new-admin" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
