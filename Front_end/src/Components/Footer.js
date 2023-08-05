import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom"; 
import Logo from "../Assets/logo.png";
import tt from "../Assets/tt.png";
import youtube from "../Assets/youtube.png";
import { FaMapMarkerAlt } from "react-icons/fa";


import { BsFacebook, BsEnvelopeAt,BsInstagram } from "react-icons/bs";

import { BiPhoneCall} from "react-icons/bi";




const Footer = () => {
  return (
    
    <div>

<footer class="footer-distributed">

			<div class="footer-left">

				<h3>BKM<span>Community</span></h3>
        <div className="ft-logo-container">
          <img src={Logo} alt="Company Logo" />
        </div>
				<p className="footer-links">
        <Link to="/" className="link-1">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/education">Education</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </p>

				<p class="footer-company-name">BKM Community © 2023</p>
			</div>

			<div class="footer-center">

				<div>
        <FaMapMarkerAlt size={32} style={{ color: "#ff0000" }} />
					<p><span>53 Hemmons Road</span> Manchester, M12 5TW</p>
				</div>

				<div>
        <BiPhoneCall size={32} style={{ color: "lightblue"}}  />
					<p>+07727874307</p>
				</div>

				<div>
        <BsEnvelopeAt size={32} style={{ color: "lightgray"}} />
					<p><a href="mailto:support@company.com">info@bkmcommunity.co.uk</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>Our Motto</span>
					'A GOOD WORD IS LIKE A GOOD TREE' taken from the beautiful verse (14:24-25): “Have you not considered how Allah sets forth a parable: a good word is like a good tree, its root is firmly fixed, and its branches in the sky, yielding its fruit at all times by the leave of its Lord
				</p>

				<div class="footer-icons">

        <a href="https://www.facebook.com/profile.php?id=100063563387417&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
     
        <BsFacebook className="icon" size={32} style={{ color: "#3b5998" }} />
      </a>
      <a href="https://www.youtube.com/@syedmuhammadmoinhussainchi5977" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt=" " width={32} height={32} style={{ color: "red" }} />
      </a>
      <a href="https://www.tiktok.com/@bzamekhizaremillat" target="_blank" rel="noopener noreferrer">
        <img className="ttt" alt="" src={tt} width={32} height={32} style={{ color: "#0077b5" }} />
      </a>
      
      
      <a href="https://www.instagram.com/hafizumarmajeed1/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"target="_blank" rel="noopener noreferrer">
      <BsInstagram size={32} style={{ color: "#e4405f" }}  />
      </a>
				</div>

			</div>

		</footer>
    </div>

  );
};

export default Footer;
