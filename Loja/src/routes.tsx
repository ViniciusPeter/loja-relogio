import { Route, Routes } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Main from "./pages/Main";
import AddProduct from "./pages/AddProduct";
import GlobalContextProvider from "./contexts/GlobalContextProvider";
import Login from "./pages/Login";

function MainRoutes() {
  return (
    <GlobalContextProvider>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </GlobalContextProvider>
  );
}

export default MainRoutes;
