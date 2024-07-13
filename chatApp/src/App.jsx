import React from "react";
import Registration from "./Pages/Registration/Registration";
import SignIn from "./Pages/SignIn/SignIn";
import Home from './Pages/Home/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import RootLayout from "./Components/HomeComponents/RootLayout/RootLayout";
import Chat from "./Pages/Chat/Chat";
import Notification from "./Pages/Notification/Notification";
import Settings from "./Pages/Settings/Settings";
import Error from "./Components/ErrorComponents/Error";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Chat" element={<Chat/>}/>
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/Settings" element={<Settings/>}/>
        </Route>
        <Route path="*" element={<Error/>} />
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
