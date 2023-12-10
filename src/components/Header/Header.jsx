// Import Hooks
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../cart/Cart";
import "./Header.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = ({ id }) => {
  const notify = () => toast(<div>Thanks you for liking <span style={{color:'red'}} role="img" aria-label="heart">&#10084;</span></div>);

  const [scrolled, setScrolled] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/Footer")}>About</li>
            <li onClick={() => navigate("/category/1")}>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            UK-Tech
          </div>

          <div className="right">
            <TbSearch
              onClick={() => {
                setshowSearch(true);
              }}
            />
           
           <div style={{marginTop:'5px'}} onClick={notify}>
           <AiOutlineHeart
          className={heartClicked ? 'heart-clicked' : ''}
          onClick={() => {
            setHeartClicked(!heartClicked);
            // You can perform additional actions here, like updating the state or storing the information.
          }} />
            </div> 
            <span className="cart-icon" onClick={() => setshowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setshowCart={setshowCart} />} {/* Correct usage */}
      {showSearch && <Search setshowSearch={setshowSearch} />}
    </>
  );
};

export default Header;
