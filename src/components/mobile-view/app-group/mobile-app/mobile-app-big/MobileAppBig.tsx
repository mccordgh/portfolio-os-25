import React, { Component } from "react";

import "./MobileAppBig.css";

export default class MobileAppBig extends Component {
  render() {
    return (
      <div className="mobileAppGroupBig">
        <div
          className="mobileAppGroupBigBackground"
          style={this.mobileAppBigStyleObject()}
          onClick={() => {
            this.clickHandler();
          }}
        >
          <div className="mobileAppGroupBigContainer"></div>
        </div>

        <div className="mobileAppGroupBigTitle">
          <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }

  mobileAppBigStyleObject() {
    return {
      backgroundImage: `url(${this.props.iconImage})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  }

  clickHandler() {
    console.log(this.props);
    if (this.props.activeLink) {
      window.open(this.props.activeLink, "_blank");

      return;
    }

    this.props.openAppCallback(this.props.id, this.props.group);
  }
}
