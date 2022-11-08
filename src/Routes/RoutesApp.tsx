import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFount } from "../pages/SingIn/NotFount";
import { SignIn } from "../pages/SingIn/SingIn";

export const RoutesApp = ({ http }: { http: any }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SignIn http={http} />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter >
  );
};
