// Main screen

import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { Collection, CollectionItem, Col, Row, Button, Icon } from "react-materialize";
// import { Navbar, NavItem, Icon } from "react-materialize";
import { Navbar, NavSearch, NavButton } from "../deps/Navbar";
import TaskEntry from "../components/TaskEntry";

export default function Main(props) {
  return (
    <>
      <Navbar logo="CVTasks">
        <NavSearch />
        <NavButton href="/login">Login</NavButton>
      </Navbar>
      <div className="container">
        <Row>
          <Col s={12}>
            <TaskList />
          </Col>
        </Row>
        <Button large floating
          className="red fixed-action-btn"
          icon={<Icon>add</Icon>}
          onClick={() => window.location.href = "/edit/new"}
        />
      </div>
    </>
  )
};

function TaskList(props) {
  return (
    <Collection>
      {Array(20).fill("pfft").map(
        (v, i) => <TaskEntry id={i}>Haha task {i}</TaskEntry>)
      }
    </Collection>
  )
}
