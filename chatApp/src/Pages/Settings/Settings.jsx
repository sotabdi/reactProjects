import React from "react";
import SettingsLeft from "../../Components/SettingsComponents/SettingsLeft/SettingsLeft";
import SettngsRight from "../../Components/SettingsComponents/SettingsRight/SettingsRight";
import Search from "../../Components/CommonComponents/Search";

const Settings = () => {
  return (
    <div className="w-full flex flex-col gap-y-9">
      <Search />
      <div className="flex w-full h-full gap-x-9 rounded-[20px]">
        <SettingsLeft />
        <SettngsRight />
      </div>
    </div>
  );
};

export default Settings;
