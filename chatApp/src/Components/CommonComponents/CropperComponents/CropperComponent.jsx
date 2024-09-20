import React, { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const CropperComponent = ({ groupInfo,handleCreate }) => {

  const {groupName,groupTag} = groupInfo;
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState();
  const cropperRef = createRef();
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  
  return (
    <div>
      <div style={{ width: "100%" }}>
        <input type="file" onChange={onChange} />
      </div>
      <div className="flex flex-col gap-y-8">
        <div>
          <button>Use default img</button>
          <br />
          <br />
          <Cropper
            ref={cropperRef}
            style={{ height: 300, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            guides={true}
          />
        </div>
        <div className="flex gap-x-8">
          <div
            className="box flex flex-col items-start gap-y-2"
            style={{ width: "100%" }}
          >
            <h1 className="font-poppins font-semibold text-xl">Preview</h1>
            <div className="flex items-center justify-between gap-x-5 border w-full rounded-xl px-9 py-6 shadow-lg">
              <div className="flex w-full items-center gap-x-5 jus">
                <div
                  className="img-preview overflow-hidden rounded-full"
                  style={{ width: "100px", height: "100px" }}
                ></div>
                <div className="flex flex-col gap-y-1">
                  <h5 className="font-poppins font-bold text-2xl capitalize">
                    {groupName
                      ? groupName
                      : "Group Name"}
                  </h5>
                  <h5 className="font-poppins text-lg">
                    {groupTag
                      ? groupTag
                      : "Group Tag"}
                  </h5>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <button
                  onClick={getCropData}
                  className="font-poppins border border-primary_Color text-primary_Color text-[12px] rounded-md px-[15px] py-[10px] hover:bg-primary_Color hover:text-white transition-all"
                >
                  Crop Image
                </button>
                {cropData?(<button onClick={()=>{handleCreate(cropData, setCropData)}} className="font-poppins border border-primary_Color text-[16px] text-primary_Color font-semibold rounded-md px-[30px] py-[10px] hover:bg-primary_Color hover:text-white transition-all">
                  Create
                </button>):(<button disabled className=" disabled:opacity-50 font-poppins border border-primary_Color text-[16px] text-primary_Color font-semibold rounded-md px-[30px] py-[10px]">
                  Create
                </button>)}
              </div>
            </div>
          </div>
          <div
            className="box flex items-center justify-center gap-x-7"
            style={{ width: "100%", height: "300px" }}
          >
            {/* <button
              onClick={getCropData}
              className="font-poppins border border-primary_Color text-primary_Color text-[14px] rounded-md px-[15px] py-[10px] hover:bg-primary_Color hover:text-white transition-all"
            >
              Crop
            </button> */}
            <img
              className="rounded-full"
              style={{ width: "70%" }}
              src={cropData}
              alt="cropped"
            />
          </div>
        </div>
      </div>
      <div>
        {/* <button className="font-poppins border border-primary_Color text-xl text-primary_Color font-semibold rounded-md px-[30px] py-[10px] hover:bg-primary_Color hover:text-white transition-all">
          Create
        </button> */}
      </div>
    </div>
  );
};

export default CropperComponent;
