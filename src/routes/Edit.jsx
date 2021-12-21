// Editor screen

import React from "react";
import { Icon } from "react-materialize";
import { Navbar } from "../deps/Navbar";
import TaskEditor from "../components/TaskEditor";

export default function Edit(props) {
  return (
    <>
      <Navbar logo={" "} className="left">
        <a href="/"><Icon>arrow_back</Icon></a>
        <span className="brand-logo" style={{ padding: "0px 8px" }}>Edit task</span>
      </Navbar>
      <div className="container">
        <TaskEditor onSubmit={() => alert(`Hey!`)} cur={{
      name: "Hi hi",
      desc: "",
      tags: ["test1", "test2"],
      done: false,
      due: new Date('May 4, 2025 0:00:00'),
    }}/>
      </div>
    </>
  )
}; 
