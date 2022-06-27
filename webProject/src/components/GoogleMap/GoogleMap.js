import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import pin from "../../assets/icons/pin.png";
import BranchInfo from "../BranchInfo/BranchInfo";
import bookingImage from "../../assets/images/BookingBox.png";
import bookingImageClicked from "../../assets/images/BookingBox_clicked.png";

import agentImage from "../../assets/images/Agent.png";
// const googleKey = <APIKEY>;

const markerStyle = {
  position: "absolute",
  width: "25px",
  height: "30px",
  top: "100%",
  left: "100%",
  transform: "translate(-50%, -100%)",
};
const data = [
  { lat: 43.6482644, lng: -79.3781453 },
  { lat: 43.6779976, lng: -79.44410549999999 },
  { lat: 43.716431, lng: -79.4288069 },
  { lat: 43.6694507, lng: -79.3882622 },
  { lat: 43.728298, lng: -79.417903 },
  { lat: 43.6684946, lng: -79.3962671 },
  { lat: 43.6599624, lng: -79.3850953 },
  { lat: 43.6714272, lng: -79.3840397 },
  { lat: 43.6643556, lng: -79.4154406 },
  { lat: 43.65048669999999, lng: -79.48075899999999 },
  { lat: 43.7980801, lng: -79.3187409 },
  { lat: 43.6482644, lng: -79.3781453 },
  { lat: 43.658065, lng: -79.4434022 },
  { lat: 43.6694507, lng: -79.3882622 },
  { lat: 43.7954932, lng: -79.4204532 },
  { lat: 43.7424295, lng: -79.4130661 },
  { lat: 43.6538666, lng: -79.38016879999999 },
  { lat: 43.6555584, lng: -79.4133299 },
  { lat: 43.6642126, lng: -79.3806087 },
  { lat: 43.6714272, lng: -79.3840397 },
  { lat: 43.6856432, lng: -79.3121381 },
  { lat: 43.6765378, lng: -79.494643 },
  { lat: 43.6561587, lng: -79.4348739 },
  { lat: 43.6496733, lng: -79.4201894 },
  { lat: 43.6856432, lng: -79.3121381 },
  { lat: 43.644794, lng: -79.52503999999999 },
  { lat: 43.6660179, lng: -79.4507869 },
  { lat: 43.6534368, lng: -79.39776239999999 },
  { lat: 43.7059599, lng: -79.3462036 },
  { lat: 43.6652657, lng: -79.46502699999999 },
  { lat: 43.6381376, lng: -79.4181668 },
  { lat: 43.6951521, lng: -79.4516659 },
  { lat: 43.6486599, lng: -79.3815764 },
  { lat: 43.6496733, lng: -79.4201894 },
  { lat: 43.6486599, lng: -79.3815764 },
  { lat: 43.6402046, lng: -79.3950356 },
  { lat: 43.6561587, lng: -79.4348739 },
  { lat: 43.6680898, lng: -79.33898669999999 },
  { lat: 43.6294528, lng: -79.5501582 },
  { lat: 43.7037133, lng: -79.411571 },
  { lat: 43.7929149, lng: -79.2391237 },
  { lat: 43.6677371, lng: -79.3731304 },
  { lat: 43.67828799999999, lng: -79.3489319 },
  { lat: 43.6889951, lng: -79.4126264 },
  { lat: 43.65109750000001, lng: -79.36565150000001 },
  { lat: 43.6486599, lng: -79.3815764 },
  { lat: 43.6442978, lng: -79.4269604 },
  { lat: 43.64943419999999, lng: -79.3748021 },
  { lat: 43.6478358, lng: -79.3854472 },
  { lat: 43.7073682, lng: -79.37620969999999 },
  { lat: 43.7097185, lng: -79.3625718 },
  { lat: 43.7172124, lng: -79.44753419999999 },
  { lat: 43.7733522, lng: -79.25110579999999 },
  { lat: 43.7544597, lng: -79.35975599999999 },
  { lat: 43.6495494, lng: -79.37207459999999 },
  { lat: 43.707221, lng: -79.3991697 },
  { lat: 43.7112031, lng: -79.3784092 },
];

// })
export class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.65107,
      lng: -79.347015,
    },
    zoom: 12,
  };

  state = {
    clicked: false,
  };

  clickHandle = () => {
    this.setState({
      clicked: true,
    });
  };

  render() {
    // locationGeo.length > 0 && console.log(locationGeo);
    return (
      <>
        <div className="branch-maindiv">
          <BranchInfo />
          <div style={{ height: "60vh", width: "80%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: googleKey,
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <div lat={item.lat} lng={item.lng}>
                      <img style={markerStyle} src={pin} alt="pin" />
                    </div>
                  );
                })}
            </GoogleMapReact>
          </div>
        </div>
        <div className="booking">
          <img src={agentImage} alt="agent" className="booking__agent" />
          <div className="booking__text">
            <p>Book a meeting with an agent</p>
          </div>
          <img
            onClick={this.clickHandle}
            src={this.state.clicked ? bookingImageClicked : bookingImage}
            alt="booking"
            className="booking__list"
          />
        </div>
      </>
    );
  }
}

export default GoogleMap;
