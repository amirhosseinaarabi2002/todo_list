import { ShoppingCart } from "iconsax-reactjs";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

function Header() {
  const cart = useContext(CartContext);
  return (
    <header>
      <Link className="logo" to="/Home">
        Sabzlearn Shop
      </Link>
      <Link to="/Cart">
        <ShoppingCart size={32} color="#44ff66" className="shop-icon" />
        <span>{cart.UserCart.length}</span>
      </Link>
    </header>
  );
}

export default Header;
