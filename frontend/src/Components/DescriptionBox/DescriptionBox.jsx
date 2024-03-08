import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Indulge in comfort and style with our premium cotton tee. Crafted with
          the finest materials, our shirt offers a perfect blend of durability
          and softness. Versatile for any occasion, whether lounging at home or
          stepping out, this timeless piece ensures you stay effortlessly chic
          all day long. Upgrade your wardrobe today!
        </p>
        <p>
          Elevate your wardrobe with our soft and durable cotton tee. Versatile
          for any occasion, this timeless piece ensures comfort and style.
          Upgrade your look effortlessly with our premium shirt.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
