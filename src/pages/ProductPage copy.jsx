import React, { useState } from "react";
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
import Lightbox from "../components/Lightbox";

const listProduct = [product1, product2, product3, product4]
const listProductThumbnail = [product1thumbnail, product2thumbnail, product3thumbnail, product4thumbnail]

function ProductPage() {
  const [imageProduct, setImageProduct] = useState(product1)
  const [amountProduct, setAmountProduct] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);


  const handleImage = (index) => {
    setImageProduct(listProduct[index])
  }
  const handleLightbox = () => {
    setIsLightboxOpen(true)
  }
  const handleNext= () => {
    setImageProduct(imageProduct + 1)
  }
  const handlePrevious = () => {
    setImageProduct(imageProduct - 1)
  }
  

  const handleAdd = () => {
    setAmountProduct(amountProduct + 1)
  }
  const handleDelete = () => {
    if (amountProduct === 0) {
      setAmountProduct(0)
    } else if (amountProduct > 0) {
      setAmountProduct(amountProduct - 1)
    }


  }
  return (
    <div className="flex flex-row justify-center items-center text-VeryDarkBlue my-[4rem] mx-[5rem] gap-[6rem]">
      <div className="product-image w-[35%] h-[35%] p-0  ">
        <img
          className="rounded-[10px] object-contain cursor-pointer "
          src={imageProduct}
          alt="product"
          onClick={handleLightbox}
        />
        <div className="product-image-thumbnail flex flex-row justify-between mt-[1.5rem] ">
          <div className={` w-[20%] h-[20%] p-0 rounded-[10px] ${imageProduct === product1 && 'outline outline-Orange outline-2'
            }  cursor-pointer`}
            onClick={() => handleImage(0)}>
            <img
              className={` rounded-[10px] hover:opacity-75 ${imageProduct === product1 && 'opacity-25'
                }`}
              src={product1thumbnail}
              alt="product-1-thumbnail"
            />
          </div>
          <div className={`w-[20%] h-[20%] p-0  rounded-[10px] ${imageProduct === product2 && 'outline outline-Orange outline-2'
            }  cursor-pointer`}
            onClick={() => handleImage(1)}>
            <img
              className={`rounded-[10px] hover:opacity-75 ${imageProduct === product2 && 'opacity-25'
                }`}
              src={product2thumbnail}
              alt="product-2-thumbnail"
            />
          </div>
          <div className={`w-[20%] h-[20%] p-0 ] rounded-[10px] ${imageProduct === product3 && 'outline outline-Orange outline-2'
            }  cursor-pointer`}
            onClick={() => handleImage(2)}>
            <img
              className={`rounded-[10px] hover:opacity-75 ${imageProduct === product3 && 'opacity-25'
                }`}
              src={product3thumbnail}
              alt="product-3-thumbnail"
            />
          </div>
          <div className={`w-[20%] h-[20%] p-0  rounded-[10px] ${imageProduct === product4 && 'outline outline-Orange outline-2'
            }  cursor-pointer`}
            onClick={() => handleImage(3)}>
            <img
              className={`rounded-[10px] hover:opacity-75 ${imageProduct === product4 && 'opacity-25'
                }`}
              src={product4thumbnail}
              alt="product-4-thumbnail"
            />
          </div>
        </div>
      </div>
      <div className="product-description">
        <p className="mb-[1rem]">SNEAKER COMPANY</p>
        <h1 className="text-[2.5rem] font-[700] leading-none mb-[2rem] ">
          Fall Limited Edition<br /> Sneakers
        </h1>
        <p className="max-w-[28.5rem] text-DarkGrayishBlue mb-[1.5rem]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <p className="text-[1.5rem] font-[700] mb-[.5rem] ">
          $125.00&nbsp;&nbsp;<span className="font-[400] text-[.8rem] text-White bg-black rounded-[10px] px-[6px] py-[3px]">50%</span>
        </p>
        <p className="text-[.8rem] line-through mb-[1.25rem]">$250.00</p>
        <div className="add-cart flex flex-row justify-between items-center">
          <div className="amount-product flex flex-row items-center gap-[1rem]  bg-LightGrayishBlue rounded-[5px] px-[1rem] py-[1rem]">
            <img className="svg-minus cursor-pointer hover:opacity-25 " src={minus} alt="minus" onClick={() => { handleDelete() }} />

            <p className="text-[1rem] font-bold font-mono px-[1rem]  ">{amountProduct}</p>
            <img className="svg-plus cursor-pointer hover:opacity-25" src={plus} alt="plus" onClick={() => { handleAdd() }} />
          </div>
          <button className="add-product flex flex-row items-center gap-[1rem] bg-Orange rounded-[10px] py-[1rem] px-[6rem] hover:bg-PaleOrange ">
            <img className="svg-cart w-[1rem] contrast-[4.5] " src={cart} alt="cart" />
            <span className="text-[1rem] font-[600]">Add to cart</span>
          </button>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox imageProduct={imageProduct} listProduct={listProduct} listProductThumbnail={listProductThumbnail} handleImage={handleImage} onClose={() => setIsLightboxOpen(false)} />
      )}
    </div>
  );
}

export default ProductPage;
