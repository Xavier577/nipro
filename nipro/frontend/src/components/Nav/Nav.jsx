import React, { Fragment } from "react";
import NiproLogo from "../NiproLogo/NiproLogo";
import { Home, Bell, Write, Settings, Add } from "../../assets/icons/Icons";
import "./Nav.css";

export default function Nav(buttons) {
  return (
    <Fragment>
      <div className="nav-bar">
        <NiproLogo className="margin-left" />
        <nav className="nav-buttons">
          <Home />
          <Write />
          <Add />
          <Bell />
          <Settings />
        </nav>
      </div>
    </Fragment>
  );
}
