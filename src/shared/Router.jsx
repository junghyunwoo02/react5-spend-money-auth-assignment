import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Router = ({ expenseData, setExpenseData }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home expenseData={expenseData} setExpenseData={setExpenseData} />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Detail expenseData={expenseData} setExpenseData={setExpenseData} />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
