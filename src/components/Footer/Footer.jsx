// import react from "react";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div>
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text" id="footer-about">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            illo nostrum a rem animi quia, quisquam veniam doloribus delectus
            officia sapiente voluptate aliquid inventore! Lorem, ipsum dolor.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
          <div className="text">
            Ali road,Sector A-2,block-1,Township Lahore,Pakistan
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">
              Phone:+92 300 4507 650
            </div>
          </div>
          <div className="c-item">
            <FaEnvelope/>
            <div className="text">
             Email:Ubaidgdt@gmail.com
            </div>
          </div>
        </div>
        <div className="colF">
          <div className="title" >Categories</div>
          <span className="text " >Headphones</span>
          <span className="text col-pad" >Smart Watches</span>
          <span className="text col-pad" >Bluetooth Speaker</span>
          <span className="text col-pad" >Wireless Eirbuds</span>
          <span className="text col-pad" >Home Theatre</span>
          <span className="text col-pad" >Projectore</span>
        </div>
        <div className="colF">
          <div className="title " >Pages</div>
          <span className="text " >HOme</span>
          <span className="text col-pad" >About</span>
          <span className="text col-pad" >Privact Policy</span>
          <span className="text col-pad" >Returns</span>
          <span className="text col-pad" >Terms & Conditions</span>
          <span className="text col-pad" >Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text bottom-text" >
                  UK-TECHSTORE 2022 CREATED BY UBAID UR REHMAN.PREMIUM E-COMMERCE SOLUTIONS.    
  
            </div>
            <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
