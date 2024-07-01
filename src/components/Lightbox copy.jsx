import React from "react";
import close from "../assets/images/icon-close.svg";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";

const Lightbox = ({ indexProduct, listProduct, listProductThumbnail, handleImage, handleNext, handlePrevious, onClose }) => {
    

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <button
          className="absolute top-[-2.55rem] right-0  "
          onClick={onClose}
        >
          <img className="close w-[1.25rem]  " src={close} alt="close" />
        </button>
        <button
          className="absolute  rounded-[50%] top-[40%] left-[-1.5rem]  bg-White"
          onClick={handlePrevious}
        >
          <img className="previous w-[3rem] px-[1.1rem] py-[1rem] " src={previous} alt="previous" />
        </button>
        <button
          className=" absolute   rounded-[50%] top-[40%] right-[-1.5rem] bg-White "
          onClick={handleNext}
        >
          <img className="next w-[3rem] px-[1.1rem] py-[1rem]  " src={next} alt="next" />
        </button>
        <div className="w-[35rem]">
        <img
          className="rounded-[10px] object-contain max-h-screen"
          src={listProduct[indexProduct]}
          alt="product"
        />
        <div className="product-image-thumbnail flex flex-row justify-between mt-[1.5rem] ">
          <div
            className={` w-[20%] h-[20%] p-0 rounded-[10px] ${
              listProduct[indexProduct]  === listProduct[0] && "outline outline-Orange outline-2"
            }  cursor-pointer bg-White `}
            onClick={() => handleImage(0)}
          >
            <img
              className={` rounded-[10px] hover:opacity-75 ${
                listProduct[indexProduct] === listProduct[0] && "opacity-25"
              }`}
              src={listProductThumbnail[0]}
              alt="product-1-thumbnail"
            />
          </div>
          <div
            className={`w-[20%] h-[20%] p-0  rounded-[10px] ${
              listProduct[imageProduct] === listProduct[1] && "outline outline-Orange outline-2"
            }  cursor-pointer bg-White`}
            onClick={() => handleImage(1)}
          >
            <img
              className={`rounded-[10px] hover:opacity-75 ${
                listProduct[indexProduct] === listProduct[1] && "opacity-25"
              }`}
              src={listProductThumbnail[1]}
              alt="product-2-thumbnail"
            />
          </div>
          <div
            className={`w-[20%] h-[20%] p-0 ] rounded-[10px] ${
              listProduct[indexProduct] === listProduct[2] && "outline outline-Orange outline-2"
            }  cursor-pointer bg-White`}
            onClick={() => handleImage(2)}
          >
            <img
              className={`rounded-[10px] hover:opacity-75 ${
                listProduct[indexProduct] === listProduct[2] && "opacity-25"
              }`}
              src={listProductThumbnail[2]}
              alt="product-3-thumbnail"
            />
          </div>
          <div
            className={`w-[20%] h-[20%] p-0  rounded-[10px] ${
              listProduct[indexProduct] === listProduct[3] && "outline outline-Orange outline-2"
            }  cursor-pointer bg-White`}
            onClick={() => handleImage(3)}
          >
            <img
              className={`rounded-[10px] hover:opacity-75 ${
                listProduct[indexProduct] === listProduct[3] && "opacity-25"
              }`}
              src={listProductThumbnail[3]}
              alt="product-4-thumbnail"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
