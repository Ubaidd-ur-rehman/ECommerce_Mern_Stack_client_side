
import { useContext } from "react";
import { MdClose } from "react-icons/md";

import "./CartItem.scss";
import { Context } from "../../../utils/context";
const CartItem = () => {
  const { cartItem, handleProductQuantity,handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItem.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img?.data?.[0]?.attributes?.url} alt="" />
          </div>
          <div className="product-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose className="close-btn" onClick={()=> handleRemoveFromCart(item)} />
            <div className="quantity-buttons">
              <span onClick={()=>handleProductQuantity('dec',item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={()=>handleProductQuantity('inc',item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">Rs:{item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
