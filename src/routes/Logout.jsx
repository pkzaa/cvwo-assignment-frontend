// Logout screen

import React from "react";
import { Collection, CollectionItem, Col, Row, Icon, Card, Button } from "react-materialize";
// import { Navbar, NavItem } from "react-materialize";
import { Navbar } from "../deps/Navbar";

import "./Login.css";

function doLogout() {
    window.location.href = "/";
}

export default function Main(props) {
  return (
    <>
      <Navbar logo={" "} className="left">
      <a href="/"><Icon>arrow_back</Icon></a>
      <span className="brand-logo" style={{padding: "0px 8px"}}>Logout</span>
      </Navbar>
      <div className="container">
      <Card className="white black-text"
        actions={[
            <a onClick={() => doLogout()}>Yes</a>,
            <a href="/">Cancel</a>
        ]}>
        Do you wish to log out?
    </Card>
      </div>
    </>
  )
}; 
