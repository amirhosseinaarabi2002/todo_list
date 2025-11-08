import { Star } from "iconsax-reactjs";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import type { Product } from "../Products.types";
import { useNavigate } from "react-router-dom";

function Card({ id, title, image, price, rating }: Product) {
  const context = useContext(CartContext);
  const navigate = useNavigate()

  const addToBasketHandler = () => {
    context.addProduct(id)
    swal({
        title: "product is added to basket :)",
        buttons:["ok","go to basket"]
    }).then((result) => {
        if (result) {
            navigate("/Cart")
        }
    })
  }
  return (
    <div>
      <div className="card">
        <img src={image} alt="" width={100} />
        <main>
          <p>{title.slice(0, 15)} ...</p>
          <div className="card-details">
            <div>
              {Array(Math.ceil(rating.rate))
                .fill(0)
                .map(() => (
                  <Star variant="Bold" color="#ff6500" size={32} />
                ))}
              {Array(5 - Math.ceil(rating.rate))
                .fill(0)
                .map(() => (
                  <Star color="#ff6500" size={32} />
                ))}
            </div>
            <p>{price}$</p>
          </div>
          <button onClick={() => addToBasketHandler()}>Add to Basket</button>
        </main>
      </div>
    </div>
  );
}

export default Card;
