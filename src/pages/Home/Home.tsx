import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Card from "../../components/card/Card";

function Home() {
  const context = useContext(CartContext);
  return (
    <div>
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        
        <div className="card">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
          <main>
            {context.shop.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </main>
        </div>
      </main>
    </div>
  );
}

export default Home;
