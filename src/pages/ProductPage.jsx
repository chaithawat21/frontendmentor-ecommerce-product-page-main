import React, { useState, useContext } from "react";
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";
import product1thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import product2thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import product3thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import product4thumbnail from "../assets/images/image-product-4-thumbnail.jpg";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import cart from "../assets/images/icon-cart.svg";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import Lightbox from "../components/Lightbox";
import { CartContext } from "../contexts/CartContext";

const listProduct = [product1, product2, product3, product4];
const listProductThumbnail = [
  product1thumbnail,
  product2thumbnail,
  product3thumbnail,
  product4thumbnail,
];

function ProductPage() {
  // const [imageProduct, setImageProduct] = useState(product1)
  const [indexProduct, setIndexProduct] = useState(0);
  const [amountProduct, setAmountProduct] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleImage = (index) => {
    setIndexProduct(index);
  };
  const handleLightbox = () => {
    setIsLightboxOpen(true);
  };
  const handleNext = () => {
    if (indexProduct === 3) {
      setIndexProduct(0);
    } else {
      setIndexProduct(indexProduct + 1);
    }
  };
  const handlePrevious = () => {
    if (indexProduct === 0) {
      setIndexProduct(3);
    } else {
      setIndexProduct(indexProduct - 1);
    }
  };

  const handleAdd = () => {
    setAmountProduct(amountProduct + 1);
  };
  const handleDelete = () => {
    if (amountProduct === 0) {
      setAmountProduct(0);
    } else if (amountProduct > 0) {
      setAmountProduct(amountProduct - 1);
    }
  };

  const handleSubmit = () => {
    if (amountProduct > 0) {
      const product = {
        id: indexProduct,
        name: "Fall Limited Edition Sneakers",
        amount: amountProduct,
        image: listProduct[0],
        price: 125.0,
      };
      addToCart(product);
      setAmountProduct(0);
    }
  };
  return (
    <div className="flex flex-row justify-center items-center text-VeryDarkBlue my-[4rem] mx-[5rem] gap-[6rem] md:flex-col sm:mx-0 sm:my-0 sm:gap-[1rem] ">
      <div className="product-image w-[35%] h-[35%] p-0 md:w-[100%] md:h-[100%]  ">
        <img
          className="rounded-[10px] object-contain cursor-pointer sm:rounded-none "
          src={listProduct[indexProduct]}
          alt="product"
          onClick={handleLightbox}
        />
        <div className="close-next hidden sm:inline-block ">
          <button
            className="absolute  rounded-[50%] top-[16rem] left-[1rem]  bg-White"
            onClick={handlePrevious}
          >
            <img
              className="previous w-[2.5rem] px-[1rem] py-[.8rem] "
              src={previous}
              alt="previous"
            />
          </button>
          <button
            className=" absolute   rounded-[50%] top-[16rem] right-[1rem] bg-White "
            onClick={handleNext}
          >
            <img
              className="next w-[2.5rem] px-[1rem] py-[.8rem]  "
              src={next}
              alt="next"
            />
          </button>
        </div>
        {/* <div className="product-image-thumbnail flex flex-row justify-between mt-[1.5rem] sm:hidden ">
          <div
            className={` w-[20%] h-[20%] p-0 rounded-[10px] ${
              listProduct[indexProduct] === listProduct[0] &&
              "outline outline-Orange outline-2"
            }  cursor-pointer`}
            onClick={() => handleImage(0)}
          >
            <img
              className={` rounded-[10px] hover:opacity-75 ${
                listProduct[indexProduct] === listProduct[0] && "opacity-25"
              }`}
              src={product1thumbnail}
              alt="product-1-thumbnail"
            />
          </div>
          <div
            className={`w-[20%] h-[20%] p-0  rounded-[10px] ${
              listProduct[indexProduct] === listProduct[1] &&
              "outline outline-Orange outline-2"
            }  cursor-pointer`}
            onClick={() => handleImage(1)}
          >
            <img
              className={`rounded-[10px] hover:opacity-75 ${
                listProduct[indexProduct] === listProduct[1] && "opacity-25"
              }`}
              src={product2thumbnail}
              alt="product-2-thumbnail"
            />
          </div>
          <div
            className={`w-[20%] h-[20%] p-0 ] rounded-[10px] ${
              listProduct[indexProduct] === listProduct[2] &&
              "outline outline-Orange outline-2"
            }  cursor-pointer`}
            onClick={() => handleImage(2)}
          >
            <img
              className={`rounded-[10px] hover:opacity-75 ${
                listProduct[indexProduct] === listProduct[2] && "opacity-25"
              }`}
              src={product3thumbnail}
              alt="product-3-thumbnail"
            />
          </div>
          <div
            className={`w-[20%] h-[20%] p-0  rounded-[10px] ${
              listProduct[indexProduct] === listProduct[3] &&
              "outline outline-Orange outline-2"
            }  cursor-pointer`}
            onClick={() => handleImage(3)}
          >
            <img
              className={`rounded-[10px] hover:opacity-75 ${
                listProduct[indexProduct] === listProduct[3] && "opacity-25"
              }`}
              src={product4thumbnail}
              alt="product-4-thumbnail"
            />
          </div>
        </div> */}
        <div className="product-image-thumbnail flex flex-row justify-between mt-[1.5rem] sm:hidden">
          {listProductThumbnail.map((thumbnail, idx) => (
            <div
              key={idx} // Ensure each key is unique
              className={`w-[20%] h-[20%] p-0 rounded-[10px] ${listProduct[indexProduct] === listProduct[idx] && 'outline outline-Orange outline-2'} cursor-pointer`}
              onClick={() => handleImage(idx)}
            >
              <img
                className={`rounded-[10px] hover:opacity-75 ${listProduct[indexProduct] === listProduct[idx] && 'opacity-25'}`}
                src={thumbnail}
                alt={`product-${idx + 1}-thumbnail`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="product-description sm:px-[1rem] sm:mb-[3rem]">
        <p className="mb-[1rem]">SNEAKER COMPANY</p>
        <h1 className="text-[2.5rem] font-[700] leading-none mb-[2rem] sm:text-[2rem] ">
          Fall Limited Edition
          <br /> Sneakers
        </h1>
        <p className="max-w-[28.5rem] text-DarkGrayishBlue mb-[1.5rem]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="block md:flex md:flex-row md:justify-between md:items-baseline">
          <p className="text-[1.5rem] font-[700] mb-[.5rem] flex flex-row  items-center  ">
            $125.00&nbsp;&nbsp;
            <span className="font-[400] text-[.8rem] text-White bg-black rounded-[5px] px-[8px] py-[3px]">
              50%
            </span>
          </p>
          <p className="text-[.8rem] line-through mb-[1.25rem]">$250.00</p>
        </div>
        <div className="add-cart flex flex-row justify-between items-center md:flex-col gap-[1rem] ">
          <div className="amount-product flex flex-row items-center gap-[1rem]  bg-LightGrayishBlue rounded-[10px] px-[1rem] py-[1rem] md:w-full md:justify-between">
            <img
              className="svg-minus cursor-pointer hover:opacity-25 "
              src={minus}
              alt="minus"
              onClick={() => {
                handleDelete();
              }}
            />

            <p className="text-[1rem] font-bold font-mono px-[1rem]  ">
              {amountProduct}
            </p>
            <img
              className="svg-plus cursor-pointer hover:opacity-25"
              src={plus}
              alt="plus"
              onClick={() => {
                handleAdd();
              }}
            />
          </div>
          <button
            className="add-product flex flex-row flex-grow justify-center items-center gap-[1rem] bg-Orange rounded-[10px] py-[1rem] px-[2rem] hover:bg-PaleOrange md:w-full md:justify-center shadow-[0_20px_30px_-10px_hsla(26,100%,55%,.3)]"
            onClick={handleSubmit}
          >
            <img
              className="svg-cart w-[1rem] contrast-[4.5] "
              src={cart}
              alt="cart"
            />
            <span className="text-[1rem] font-[600]">Add to cart</span>
          </button>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox
          indexProduct={indexProduct}
          listProduct={listProduct}
          listProductThumbnail={listProductThumbnail}
          handleImage={handleImage}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
}

export default ProductPage;
