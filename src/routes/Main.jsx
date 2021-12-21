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

function fakefetch(a, b) {
    return new Promise((resolve, reject) => {
      resolve(["a", "b", "c"]); // Array(20).fill("pfft")
    });
  }

const BACKEND = "/_tests/tasks.json"; // "https://parnikkapore.neocities.org/_meta/idonotexist";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchDone: false,
      tasks: [],
    }
  }

  componentDidMount() {
    const authedApiOptions = {
      method: 'GET',
//       body: JSON.stringify({ session: "dummy" }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(BACKEND, authedApiOptions)
      .then(response => response.ok ? response.json() : [])
      .then(tasks => { this.setState({ fetchDone: true, tasks: tasks }); })
      .catch(error => this.setState({fetchDone: true, tasks: [`*WIP* Error fetching task list - ${error.name}: ${error.message}`]}));
  }

  render(props) {
    return (
      <Collection>
        {this.state.tasks.map(
          (v, i) => <TaskEntry key={i} id={i}>{v}</TaskEntry>)
        }
      </Collection>
    )
  }
}
