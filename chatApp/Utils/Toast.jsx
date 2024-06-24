import { toast, Slide } from "react-toastify";

export const successToast = (
  msg = "success msg",
  delay = 5000,
  position = "top-right"
) => {
  toast.success(msg, {
    position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
};

export const errorToast = (
  msg = "success msg",
  delay = 5000,
  position = "top-right"
) => {
  toast.error(msg, {
    position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
};

export const infoToast = (
  msg = "success msg",
  delay = 5000,
  position = "top-right"
) => {
  toast.info(msg, {
    position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
};
