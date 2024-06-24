import React from "react";
import Registration from "./Pages/Registration/Registration";
import SignIn from "./Pages/SignIn/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<SignIn/>}/>
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer />
    </>
  );
}

export default App;
