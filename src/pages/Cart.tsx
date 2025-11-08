import { EmptyWallet, Star, Trash } from "iconsax-reactjs";
import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const context = useContext(CartContext);

  return (
    <div>
      {context.UserCart.length !== 0 ? (
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button onClick={context.removeAll}>
              Remove All Product{" "}
              <Trash variant="Linear" color="#ff6500" size={32} />
            </button>
          </section>
          <main className="card-index">
            {context.UserCart.map((product) => (
              <>
              <img src={product.image} alt="" width={100} />
                <p>{product.title.slice(0, 15)} ...</p>
                <div className="card-details">
                  <div>
                    {Array(Math.ceil(product.rating.rate))
                      .fill(0)
                      .map(() => (
                        <Star variant="Bold" color="#ff6500" size={32} />
                      ))}
                    {Array(5 - Math.ceil(product.rating.rate))
                      .fill(0)
                      .map(() => (
                        <Star color="#ff6500" size={32} />
                      ))}
                  </div>
                  <p>{product.price}$</p>
                  <p>
                    {product.count}
                  </p>
                </div>
                <button onClick={() => context.removeProduct(product.id)}>remove from Basket</button>
              </>
            ))}
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <EmptyWallet color="#ff6500" size={80} />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
