import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer ">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
      <button className="gpt3__footer-btn">Request Early Access</button>
      <div className="gpt3__footer-info">
        <div className="gpt3__footer-logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <ul className="gpt3__footer-info__ul">
          Links
          <li>Overons</li>
          <li>Social Media</li>
          <li>Counters</li>
          <li>Contact</li>
        </ul>
        <ul className="gpt3__footer-info__ul">
          Company
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
        <ul className="gpt3__footer-info__ul">
          Get in touch
          <li>
            Crechterwoord K12 <br />
            182 DK Alknjkcb
          </li>
          <li>085-132567</li>
          <li>info@payme.net</li>
        </ul>
      </div>
      <p>© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
};

export default Footer;
