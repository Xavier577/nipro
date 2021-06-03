import React, { Fragment } from "react";
import { Globe } from "../../assets/icons/Icons";
import "./NiproLogo.css";

export default function Logo({ className }) {
  return (
    <Fragment>
      <div className={className}>
        <p className="nipro-logo">
          Nipro
          <span className="globe">
            <Globe />
          </span>
        </p>
      </div>
    </Fragment>
  );
}
