import { Route, Routes } from "react-router-dom";
import GlobalContextProvider from "./contexts/GlobalContextProvider";
import StepRegistrationContextProvider from "./contexts/StepRegistrationContextProvider";
import HeaderLayout from "./layouts/HeaderLayout";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";

function MainRoutes() {
  return (
    <GlobalContextProvider>
      <StepRegistrationContextProvider>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Route>
        </Routes>
      </StepRegistrationContextProvider>
    </GlobalContextProvider>
  );
}

export default MainRoutes;
