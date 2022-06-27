import "./BranchInfo.scss";

import location1 from "../../assets/icons/Location-1.svg";
import location2 from "../../assets/icons/Location-2.svg";
import phone from "../../assets/icons/Phone.svg";
import chevron from "../../assets/icons/Chevron.svg";

const BranchInfo = () => {
  return (
    <section className="branch-info">
      <div className="branch-info__box">
      <div className="branch-info__top">
        <div className="branch-location">
          <img
            className="branch-location__image"
            src={location1}
            alt="Location Icon"
          />
          <span className="branch-location__distance">0.5 kms</span>
        </div>
        <div className="branch-address">
          <span className="branch-address__name">
          CITYPLACE
          </span>
          <p className="branch-address__info">
          26 FORT YORK BLVD, TORONTO ON 
M5V 3Z3
          </p>
        </div>
      </div>
      <div className="branch-info__middle">
        <div className="branch-contact">
          <img className="branch-contact__image" src={phone} alt="Phone Icon" />
        </div>
        <div className="branch-details">
          <span className="branch-details__phone">416 - 867-6677</span>
          <p className="branch-details__hours">
            Open<br></br>Monday - Saturday<br></br>9:30 AM - 6:00 PM
          </p>
        </div>
        <div className="branch-directions">
          <span className="branch-directions__text">Get Directions</span>
          <img
            className="branch-directions__image"
            src={chevron}
            alt="Chevron Icon"
          />
        </div>
      </div>
      <div className="branch-info__bottom">
        <div className="branch-select">
          <span className="branch-select__text">Select this Branch</span>
        </div>
      </div>
      </div>
      <div className="branch-info__box">
      <div className="branch-info__top">
        <div className="branch-location">
          <img
            className="branch-location__image"
            src={location2}
            alt="Location Icon"
          />
          <span className="branch-location__distance">0.3 kms</span>
        </div>
        <div className="branch-address">
          <span className="branch-address__name">
            STACKT MARKET BATHURST AND FRONT
          </span>
          <p className="branch-address__info">
            28 BATHURST ST UNIT 2104, TORONTO ON M5V 0R4
          </p>
        </div>
      </div>
      <div className="branch-info__middle">
        <div className="branch-contact">
          <img className="branch-contact__image" src={phone} alt="Phone Icon" />
        </div>
        <div className="branch-details">
          <span className="branch-details__phone">416 - 214-9545</span>
          <p className="branch-details__hours">
            Open<br></br>Monday - Saturday<br></br>9:30 AM - 6:00 PM
          </p>
        </div>
        <div className="branch-directions">
          <span className="branch-directions__text">Get Directions</span>
          <img
            className="branch-directions__image"
            src={chevron}
            alt="Chevron Icon"
          />
        </div>
      </div>
      <div className="branch-info__bottom">
        <div className="branch-select">
          <span className="branch-select__text">Select this Branch</span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default BranchInfo;
