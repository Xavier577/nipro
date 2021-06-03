import React from "react";
import HomeIconWhite from "./home-icon-white.svg";
import LangIconWhite from "./lang-icon-white.svg";
import MenuIconWhite from "./menu-icon-white.svg";
import WriteIconWhite from "./write-icon-white.svg";
import SettingsIconWhite from "./settings-icon-white.svg";
import BellIconWhite from "./bell-icon-white.svg";
import AddIconCircleWhite from "./add-icon-circle-white.svg";
import "./Icons.css";

export function Globe() {
  return (
    <div>
      <img src={LangIconWhite} />
    </div>
  );
}
export function Home() {
  return (
    <div className="icon">
      <img src={HomeIconWhite} />
    </div>
  );
}
export function Menu() {
  return (
    <div className="icon">
      <img src={MenuIconWhite} />
    </div>
  );
}

export function Settings() {
  return (
    <div className="icon">
      <img src={SettingsIconWhite} />
    </div>
  );
}

export function Write() {
  return (
    <div className="icon">
      <img src={WriteIconWhite} />
    </div>
  );
}

export function Bell() {
  return (
    <div className="icon">
      <img src={BellIconWhite} />
    </div>
  );
}

export function Add() {
  return (
    <div className="icon">
      <img src={AddIconCircleWhite} />
    </div>
  );
}
