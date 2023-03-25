import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={event =>  window.location.href='https://www.instagram.com/shouting_sharma/'} />
        <TwitterIcon onClick={event =>  window.location.href='https://twitter.com/shoutingsharma'} />
        <FacebookIcon onClick={event =>  window.location.href='https://www.facebook.com/shouting.shrma/'} />
        <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/akash-kumar-7331071a1/'} />
      </div>
      <p> &copy; 2022 techakash.com</p>
    </div>
  );
}

export default Footer;
