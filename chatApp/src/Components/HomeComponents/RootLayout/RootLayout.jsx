import React, { useEffect, useState } from "react";
import HomeLeft from "../HomeLeft/HomeLeft";
import { Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const RootLayout = () => {
  const auth = getAuth();
  const [emailStatus, setemailStatus] = useState({
    emailVerified: false,
  });
  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      setemailStatus({
        emailVerified: userInfo.reloadUserInfo.emailVerified,
      });
    });
  }, []);
  return (
    <div className="flex px-[32px] py-[35px] gap-x-[43px] w-full">
      {emailStatus.emailVerified && <HomeLeft />}
      <Outlet />
    </div>
  );
};

export default RootLayout;
