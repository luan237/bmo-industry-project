import "./PageFooter.scss";
import facebook from "../../assets/icons/Facebook.svg";
import twitter from "../../assets/icons/Twitter.svg";
import linkedin from "../../assets/icons/LinkedIn.svg";
import instagram from "../../assets/icons/Instagram.svg";
import rss from "../../assets/icons/RSS.svg";
import youtube from "../../assets/icons/Youtube.svg";

const PageFooter = () => {
  return (
    <div className="footer-bar">
      <div className="footer-container__top">
        <div className="footer-title">
          <span className="footer-title__content">Contact Us</span>
        </div>
        <div className="footer-social">
          <img
            className="footer-social__image"
            src={facebook}
            alt="Facebook Icon"
          />
          <img
            className="footer-social__image"
            src={twitter}
            alt="Twitter Icon"
          />
          <img
            className="footer-social__image"
            src={linkedin}
            alt="LinkedIn Icon"
          />
          <img
            className="footer-social__image"
            src={instagram}
            alt="Instagram Icon"
          />
          <img className="footer-social__image" src={rss} alt="RSS Icon" />
          <img
            className="footer-social__image"
            src={youtube}
            alt="Youtube Icon"
          />
        </div>
      </div>
      <div className="footer-container__middle">
        <div className="footer-contact">
          <span className="footer-contact__content">Email</span>
          <span className="footer-contact__content">Phone</span>
          <span className="footer-contact__content">Book Appointment</span>
          <span className="footer-contact__content">Find a Branch</span>
          <span className="footer-contact__content">
            Report Lost/Stolen Card
          </span>
          <span className="footer-contact__content">Report Fraud</span>
        </div>
        <div className="footer-statement">
          <span className="footer-contact__content">
            Modern Slavery Act Statement
          </span>
        </div>
      </div>
      <div className="footer-container__bottom">
        <div className="footer-options">
          <span className="footer-options__content">Privacy</span>
          <span className="footer-options__content">Legal</span>
          <span className="footer-options__content">Security</span>
          <span className="footer-options__content">Careers</span>
          <span className="footer-options__content">Investor Relations</span>
          <span className="footer-options__content">Accesibility</span>
          <span className="footer-options__content">Support</span>
          <span className="footer-options__content">Site Map</span>
          <span className="footer-options__content">CIDC Member</span>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
