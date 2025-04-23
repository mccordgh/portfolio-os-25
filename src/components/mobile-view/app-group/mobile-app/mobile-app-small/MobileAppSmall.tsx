import React, { Component } from "react";

import "./MobileAppSmall.css";

export default class MobileAppSmall extends Component {
  render() {
    return (
      <div className="mobileAppGroupSmall">
        <div
          className="mobileAppGroupSmallBackground"
          style={this.mobileAppSmallStyleObject()}
        >
          <div className="mobileAppGroupSmallContainer"></div>
        </div>
      </div>
    );
  }

  mobileAppSmallStyleObject() {
    return {
      backgroundImage: `url(${this.props.iconImage})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  }
}
