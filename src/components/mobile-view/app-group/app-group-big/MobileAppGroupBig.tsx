import React, { Component } from "react";

import "./MobileAppBig.css";

export default class MobileAppGroupBig extends Component {
  render() {
    return (
      <div className="MobileAppGroupBig">
        <div
          className="MobileAppGroupBigBackground"
          style={this.MobileAppBigStyleObject()}
          onClick={() => {
            this.clickHandler();
          }}
        >
          <div className="MobileAppGroupBigContainer"></div>
        </div>

        <div className="MobileAppGroupBigTitle">
          <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }

  MobileAppBigStyleObject() {
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
