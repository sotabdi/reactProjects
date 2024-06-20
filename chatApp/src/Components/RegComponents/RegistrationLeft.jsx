import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState, CSSProperties } from "react";
import {
  emailValidator,
  nameValidator,
  passValidator,
} from "../../../Utils/Validation.jsx";
import InputFeild from "../CommonComponents/InputFeild";
import { toast, Slide } from "react-toastify";
import DotLoader from "react-spinners/DotLoader.js";

const RegistrationLeft = () => {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  const auth = getAuth();
  // all states will declare here
  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [loadercolor, setLoaderColor] = useState("#5F35F5");

  // for error handaling
  const [emailerr, setEmailerr] = useState("");
  const [fullNameerr, setFullNameerr] = useState("");
  const [passerr, setpasserr] = useState("");

  // state uapdate func
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleFullName = (event) => {
    setFullname(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  // input chackings
  const loginSub = () => {
    if (!email || !emailValidator(email)) {
      setEmailerr("Please enter your mail");
    } else if (!fullName || !nameValidator(fullName)) {
      setEmailerr("");
      setFullNameerr("Please enter your name");
    } else if (!password || !passValidator(password)) {
      setFullNameerr("");
      setpasserr("Please enter your password");
    } else {
      setpasserr("");
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          toast.success(`${fullName} Registration complete`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
        })
        .catch((err) => {
          let errormsg = err.message.split('/')[1].slice(0,-2);
          toast.error(errormsg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
        })
        .finally(() => setLoader(false));
    }
  };

  return (
    <div
      id="registrationLeftFull"
      className="w-[55%] flex justify-center items-center"
    >
      <div className="registrationLeft flex flex-col justify-start items-start gap-y-10">
        <div className="registrationLeftTop flex flex-col gap-y-[13px]">
          <h2 className="registrationLeftTop__header font-nunito text-[34px] font-bold text-primary_cont_color">
            Get started with easily register
          </h2>
          <p className="registrationLeftTop__discrip font-nunito text-xl text-secondary_cont_color">
            Free register and you can enjoy it
          </p>
        </div>
        <div className="registrationLeftBottom">
          <div className="registrationBottom__inputs flex flex-col gap-y-[7px]">
            <div>
              <InputFeild
                fName={"Email Address"}
                placeholder={"jhon@example.com"}
                type={"text"}
                id={"Email"}
                onChange={handleEmail}
                add_ons={false}
              />
              <span className="text-red-700 font-nunito font-medium text-[16px] p-3 inline-block">
                {emailerr}
              </span>
            </div>
            <div>
              <InputFeild
                fName={"Fullname"}
                placeholder={"Jhon Doe"}
                type={"text"}
                id={"FullName"}
                onChange={handleFullName}
                add_ons={false}
              />
              <span className="text-red-700 font-nunito font-medium text-[16px] p-3 inline-block">
                {fullNameerr}
              </span>
            </div>
            <div>
              <InputFeild
                fName={"Password"}
                placeholder={"• • • • • • • •"}
                type={"password"}
                id={"password"}
                onChange={handlePassword}
                add_ons={true}
              />
              <span className="text-red-700 font-nunito font-medium text-[16px] p-3 inline-block">
                {passerr}
              </span>
            </div>
          </div>
          <div className=" mt-[18px] mb-[35px]">
            {loader ? (
              <DotLoader
                color={loadercolor}
                loading={loader}
                size={35}
                cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <button
                href="#"
                onClick={loginSub}
                className="w-full bg-primary_Color border-0 rounded-full p-[19px] text-center font-nunito text-xl text-white font-semibold"
              >
                Sign up
              </button>
            )}
          </div>
          <p className="registrationBottom__link text-center font-openSans font-normal text-Extra_cont_color">
            Already have an account ?{" "}
            <a href="#" className="text-yellow_color font-bold">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationLeft;
