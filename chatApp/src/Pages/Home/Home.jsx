import React, { useEffect, useState } from "react";
import HomeRight from "../../Components/HomeComponents/HomeRight/HomeRight";
import AdditionalSettings from "../../Components/HomeComponents/HomeRightComponents/AdditionalSettings";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EmailVerifiedAlert from "../../Components/HomeComponents//HomeRightComponents/EmailVerifiedAlert";

const Home = () => {
  const auth = getAuth();
  const [emailStatus, setemailStatus] = useState({
    email:'',
    emailVerified: false,
  });
  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      setemailStatus({
        email:userInfo.reloadUserInfo.email,
        emailVerified:userInfo.reloadUserInfo.emailVerified,
      });
    });
  }, []);
  return (
    <>
      {emailStatus.emailVerified ? (
        <>
          <HomeRight />
          <AdditionalSettings className="w-[25%]" />
        </>
      ) : (
        <EmailVerifiedAlert userInfo={emailStatus}/>
      )}
    </>
  );
};

export default Home;
