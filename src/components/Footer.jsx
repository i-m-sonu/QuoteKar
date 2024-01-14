import React from "react";
import "../css/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import AbcIcon from '@mui/icons-material/Abc';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="created">created by sonu kumar</div>
        <div className="icons">
<a href="https://github.com/i-m-sonu">

        <GitHubIcon className="icon" ></GitHubIcon>
</a>
<a href="https://instagram.com/i.soonu">

       <InstagramIcon className="icon"></InstagramIcon>
</a>
<a href="https://www.linkedin.com/in/sonu007">

       <LinkedInIcon className="icon"></LinkedInIcon>
</a>
<a href="https://twitter.com/i_soonu_">

       <TwitterIcon className="icon"></TwitterIcon>
</a>
        </div>
      </div>
     
    </>
  );
};

export default Footer;
