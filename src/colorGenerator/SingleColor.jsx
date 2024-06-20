import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const SingleColor = ({ rgb, hex, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`#${hex}`);
    setCopied(true);
    toast.success("copied to clipboard");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="col-md-3 ">
        <div
          style={{
            background: `rgb(${rgb})`,
          }}
          className="card  p-1  my-2"
        >
          {copied ? (
            <>
              <IoCheckmarkDoneOutline
                onClick={handleCopy}
                cursor="pointer"
                className={`${index >= 10 && "text-white"}`}
                size={25}
              />
            </>
          ) : (
            <>
              <IoCopyOutline
                onClick={handleCopy}
                cursor="pointer"
                className={`${index >= 10 && "text-white"}`}
                size={25}
              />
            </>
          )}
          <h5 className={`${index >= 10 && "text-white"} p-4 text-center`}>
            #{hex}
          </h5>
        </div>
      </div>
    </>
  );
};

export default SingleColor;
