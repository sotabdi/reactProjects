import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { emailValidator, passValidator } from "../../../Utils/Validation";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { successToast, errorToast } from "../../../Utils/Toast";
import { getDatabase, ref, set, push } from "firebase/database";
import { getTime } from "../../../Utils/MomentJs/Moment";
import { InfinitySpin, LineWave } from "react-loader-spinner";
const SignInLeft = () => {
  // database
  const auth = getAuth();
  const rdb = getDatabase();
  const navigate = useNavigate()
  // all states
  const [loading, setLoding] = useState(false);
  const provider = new GoogleAuthProvider();
  const [eyeIcon, setEyeIcon] = useState(true);
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });
  const [emailerr, setEmailerr] = useState("");
  const [passerr, setPasserr] = useState("");

  //   all state update func
  const handleInput = (e) => {
    setSignInInfo({
      ...signInInfo,
      [e.target.id]: e.target.value,
    });
  };
  const iconChange = () => {
    setEyeIcon(!eyeIcon);
  };

  const signInGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        return user
      }).then((user)=>{
        const userRef = ref(rdb, "users");
        const newuserRef = push(userRef);
        set(newuserRef, {
          uid: user.uid,
          userName: user.displayName,
          profilePic:user.photoURL,
          userMail: user.email,
          createdAt: getTime(),
        });
      })
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        errorToast(errorCode);
        // ...
      });
  };

  //  user default validation
  const handleLogin = (e) => {
    e.preventDefault();
    if (!signInInfo.email || !emailValidator(signInInfo.email)) {
      setEmailerr("Please enter a valid mail");
    } else if (!signInInfo.password || !passValidator(signInInfo.password)) {
      setEmailerr("");
      setPasserr("Please Enter valid password");
    } else {
      setEmailerr("");
      setPasserr("");
      setLoding(true);
      signInWithEmailAndPassword(auth, signInInfo.email, signInInfo.password)
        .then(() => {
          navigate('/');
        })
        .catch((err) => {
          errorToast(err.code);
        })
        .finally(() => {
          setLoding(false);
        });
    }
  };
  return (
    <div id="signInLeft" className="flex justify-center items-center w-[55%]">
      <div className="signInleftContent">
        <h2 className="font-openSans text-[33px] font-bold text-Extra_cont_color pb-[29px]">
          Login to your account!
        </h2>
        <div className="googleBtn">
          <button
            type="button"
            className="border border-secondary30_cont_color cursor-pointer font-openSans text-[13px] font-semibold py-[23px] px-[29px] rounded-lg"
            onClick={signInGoogle}
          >
            <span className="inline-block align-middle text-[22px] pr-[5px]">
              <FcGoogle />
            </span>
            Login with Google
          </button>
        </div>
        <div className="SignInFrom py-8 flex flex-col gap-y-[30px]">
          <div>
            <label
              htmlFor="email"
              className="font-openSans font-normal text-[13px] text-secondary_cont_color"
            >
              Email Addres
            </label>
            <input
              type="email"
              id="email"
              onChange={handleInput}
              className="font-openSans font-semibold text-xl py-4 border-b w-full text-Extra_cont_colors placeholder:text-Extra_cont_color"
              placeholder="Youraddres@email.com"
            />
            <span className="text-red-700 block font-nunito font-medium text-[16px] py-3">
              {emailerr}
            </span>
          </div>
          <div>
            <label
              htmlFor="password"
              className="font-openSans font-normal text-[13px] text-secondary_cont_color"
            >
              Password
            </label>
            <div className="flex justify-between items-center border-b w-full">
              <input
                type={eyeIcon ? "password" : "text"}
                id="password"
                onChange={handleInput}
                className="font-openSans font-semibold text-xl py-4 text-Extra_cont_colors placeholder:text-Extra_cont_color"
                placeholder="Enter your password"
              />
              <span className="cursor-pointer" onClick={iconChange}>
                {eyeIcon ? <BsEyeSlash /> : <BsEye />}
              </span>
            </div>
            <span className="text-red-700 block font-nunito font-medium text-[16px] py-3">
              {passerr}
            </span>
          </div>
          <div className="signInbtn flex justify-center items-center">
            {loading ? (
              <InfinitySpin
                visible={true}
                width="200"
                color="#5F35F5"
                ariaLabel="infinity-spin-loading"
              />
            ) : (
              <button
                type="button"
                onClick={handleLogin}
                className="w-full font-openSans font-semibold text-xl text-white bg-primary_Color py-[26px] rounded-lg"
              >
                Login to Continue
              </button>
            )}
          </div>
        </div>
        <p className="font-openSans font-normal text-[13.3px] text-Extra_cont_color">
          Don’t have an account ?{" "}
          <Link to={"/registration"}>
            <a href="registration" className="font-bold text-yellow_color">
              Sign up
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInLeft;
