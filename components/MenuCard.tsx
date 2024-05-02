import React from "react";

const MenuCard = ({ image, title, description, price }: MenuCardItem) => {
  return (
    <div className="bg-ecru p-4 shadow-xl text-xl rounded-lg text-center hover:bg-oldRose transition-colors">
      <img src={image} alt="product" />
      <h4 className="font-semibold my-2 text-2xl">{title}</h4>
      <p className=" text-lg">{description}</p>
      <button className="bg-primary hover:bg-ecru transition-colors  shadow-sm px-8 text-white rounded-full py-2 mt-4">
        Add to Cart ₹{price}
      </button>
    </div>
  );
};

export default MenuCard;
