// Navbar component from Materialize
// Reimplemented manually because the React interface broke

import React from "react";

function fallback(value, fallbackValue) {
  return value ? value : fallbackValue;
}

export function Navbar(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="brand-logo left" style={{padding: "0px 8px"}}>{fallback(props.logo, "Your logo here")}</a>
        <ul id="nav-mobile" className={fallback(props.className, "right")}>
          {React.Children.map(props.children, (child) => <li>{child}</li>)}
        </ul>
      </div>
    </nav>
  )
};

export function NavSearch(props) {
  return (
    <form className="hide-on-small-and-down">
      <div className="input-field">
        <input id="search" type="search" required />
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    </form>
  )
};

export function NavButton(props) {
  return (
    <a className="waves-effect waves-light btn" href={props.href}>{props.children}</a>
  )
};

export default Navbar;
