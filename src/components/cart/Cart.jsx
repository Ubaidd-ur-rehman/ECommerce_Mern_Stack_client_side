// SingleCartVisible.jsx
import React, { useContext } from "react";
import "./Cart.scss";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem/CartItem";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import { Link } from "react-router-dom";

const SingleCartVisible = ({ setshowCart }) => {
  const { cartItem, cartSubTotal } = useContext(Context);

  return (
    <div className="cart-panel">
      <div className="opacity-layer"></div>
      <div className="cart-content">
        <div className="Cart-header">
          <span className="heading">Shoping Cart</span>
          <span className="close-btn" onClick={() => setshowCart(false)}>
            <span className="txt">Close</span>
            <MdClose />
          </span>
        </div>

        {!cartItem?.length && <div className="empty-cart">
          <BsCartX width={34} />
          <span className="no-product">No products in the cart</span>
          <Link to="/">
          <button className="return-btn">Return to Shop</button>
          </Link>
        </div>}
        {!!cartItem?.length && <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal: </span>
              <span className="text total">Rs {cartSubTotal}</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default SingleCartVisible;

