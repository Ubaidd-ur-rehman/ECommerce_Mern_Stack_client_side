import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Newsletter.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    toast(`Subsicribe with ${email}`);
    setEmail('');
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <h1 className="big-text">Sign up for the latest updates and offers</h1>
        <div className="form">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
        <span className="small-text">Will be used accordance with our privacy policy</span>
        <div className="social-icon">
          <div className="icon">
            <a href="https://pk.linkedin.com/" target="_blank"><FaLinkedinIn style={{color:"white"}} fontSize={20}/></a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/" target="_blank"><FaFacebook style={{color:"white"}} fontSize={20}/></a>
          </div>
          <div className="icon">
            <a href="https://twitter.com/?lang=en" target="_blank"><FaTwitter style={{color:"white"}} fontSize={20}/></a>
          </div>
          <div className="icon">
            <a href="https://www.instagram.com/" target="_blank"><FaInstagram style={{color:"white"}} fontSize={20}/></a>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Newsletter;
