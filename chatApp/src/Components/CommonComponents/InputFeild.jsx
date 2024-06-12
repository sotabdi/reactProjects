import React from "react";

const InputFeild = ({ fName, placeholder, type, id }) => {
  return (
    <>
      <fieldset className="border-2 rounded-lg pl-10 border-secondary30_cont_color">
        <legend className="font-nunito text-[13px] font-semibold text-secondary70_cont_color px-3">
          {fName ? fName : "feildNamemissing"}
        </legend>
        <input
          type={type ? type : "text"}
          id={id ? id : "idmissing"}
          className="w-[368px] font-nunito text-xl text-primary_cont_color pb-[26px] pt-[16px] font-semibold pr-[30px] placeholder:font-nunito placeholder:text-xl placeholder:text-secondary_cont_color placeholder:font-semibold placeholder:ml-[10px]"
          placeholder={placeholder ? placeholder : "placeholder missing"}
        />
      </fieldset>
    </>
  );
};

export default InputFeild;
