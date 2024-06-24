import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const InputFeild = ({
  fName,
  placeholder,
  type,
  id,
  onChange,
  add_ons,
  value,
}) => {
  const [eyeIcon, setEyeIcon] = useState(false);

  const eyeIconChage = () => {
    setEyeIcon(!eyeIcon);
  };
  return (
    <>
      <fieldset className="border-2 rounded-lg pl-10 border-secondary30_cont_color">
        <legend className="font-nunito text-[13px] font-semibold text-secondary70_cont_color px-3">
          {fName ? fName : "feildNamemissing"}
        </legend>
        {add_ons ? (
          <div className="flex items-center">
            <input
              value={value}
              onChange={onChange}
              type={eyeIcon ? "text" : type}
              id={id ? id : "idmissing"}
              className="w-[285px] font-nunito text-xl text-primary_cont_color pb-[24px] pt-[18px] font-semibold pl-3 placeholder:font-nunito placeholder:text-xl placeholder:text-secondary_cont_color placeholder:font-semibold placeholder:ml-[10px]"
              placeholder={placeholder ? placeholder : "placeholder missing"}
            />
            <span
              className="mb-2 mx-3 cursor-pointer text-secondary_cont_color z-10"
              onClick={eyeIconChage}
            >
              {eyeIcon ? <BsEye /> : <BsEyeSlash />}
            </span>
          </div>
        ) : (
          <input
            value={value}
            onChange={onChange}
            type={type ? type : "text"}
            id={id ? id : "idmissing"}
            className="w-[285px] font-nunito text-xl text-primary_cont_color pb-[24px] pt-[18px] font-semibold pl-3 placeholder:font-nunito placeholder:text-xl placeholder:text-secondary_cont_color placeholder:font-semibold placeholder:ml-[10px]"
            placeholder={placeholder ? placeholder : "placeholder missing"}
          />
        )}
      </fieldset>
    </>
  );
};

export default InputFeild;
