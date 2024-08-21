import React, { useEffect, useState } from "react";
import { VscHome } from "react-icons/vsc";
import {
  IoChatbubblesOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { errorToast, successToast } from "../../../../Utils/Toast";
import { getAuth } from "firebase/auth";

const HomeLeft = () => {
  const auth = getAuth();
  const db = getDatabase();
  const uploader = Uploader({
    apiKey: "free",
  });
  const options = {
    multi: true,
    mimeTypes: ["image/*"],
    maxFileCount: 1,
    editor: {
      images: {
        allowResizeOnMove: true,
        preview: true,
        crop: true,
        cropRatio: 4 / 4,
        cropShape: "circ",
      },
    },
  };
  const [data, setdata] = useState({});
  useEffect(() => {
    const userId = auth.currentUser.uid;
    const dbref = ref(db, "users/");
    onValue(dbref, (dta) => {
      dta.forEach((item) => {
        if (item.val().uid === userId) {
          setdata({
            ...item.val(),
            userKey: item.key,
          });
        }
      });
    });
  }, []);

  // database write referece
  const profilepicrefDB = ref(db, `users/${data.userKey}`);

  const updateProfile = (path) => {
    path && update(profilepicrefDB, {
      profilePic: path,
    })
      .then(() => {
        successToast("profile pic updated");
      })
      .catch((err) => {
        errorToast(err.code);
      });
  };
  return (
    <div className="w-[189px] flex-shrink-0 bg-primary_Color flex flex-col gap-y-[78px] items-center pt-[38px] pb-[38px] rounded-[20px]">
      <div className="w-[100px] h-[100px] rounded-full relative overflow-hidden profileHove cursor-pointer">
        <picture>
          <img
            src={data.profilePic}
            alt={data.profilePic}
            className="w-full h-full object-contain"
          />
        </picture>
        <UploadButton
          uploader={uploader}
          options={options}
          onComplete={(files) =>
            updateProfile(files.map((x) => x.fileUrl).join("\n"))
          }
        >
          {({ onClick }) => (
            <div
              className="w-full h-full rounded-full absolute bg-secondary30_cont_color overly"
              onClick={onClick}
            >
              <span className="text-2xl text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <FaCloudUploadAlt />
              </span>
            </div>
          )}
        </UploadButton>
      </div>
      <div className="flex flex-col gap-y-[70px]" id="navTrans">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "iconHov" : ""
          }
        >
          <span className="text-5xl text-icon_color cursor-pointer">
            <VscHome />
          </span>
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "iconHov" : ""
          }
        >
          <span className="text-5xl text-icon_color cursor-pointer ">
            <IoChatbubblesOutline />
          </span>
        </NavLink>
        <NavLink
          to="/Notification"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "iconHov" : ""
          }
        >
          <span className="text-5xl text-icon_color cursor-pointer">
            <IoNotificationsOutline />
          </span>
        </NavLink>
        <NavLink
          to="/Settings"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "iconHov" : ""
          }
        >
          <span className="text-5xl text-icon_color cursor-pointer">
            <IoSettingsOutline />
          </span>
        </NavLink>
      </div>
      <div className="pt-[90px]">
        <span className="text-5xl text-icon_color cursor-pointer">
          <IoLogOutOutline />
        </span>
      </div>
    </div>
  );
};

export default HomeLeft;
