import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return(
    <div className="footer">
        <div className="socialMedia">
          <a href= "https://www.instagram.com/"> <InstagramIcon /> </a>
          <a href= "https://www.twitter.com/"> <TwitterIcon /> </a>
          <a href= "https://www.facebook.com/"> <FacebookIcon /> </a>
          <a href= "www.linkedin.com/in/ricky-das-276233283"> <LinkedInIcon /> </a>
        </div>
        <p> &copy; 2023 rickydas.com</p>
    </div>
  );
}

export default Footer;
