// Task edit form

import React from "react";
import { DatePicker, TextInput, Checkbox, Button, Icon } from "react-materialize";
import { fallback } from "../deps/lib";

export default class TaskEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.cur ? {
      vName: props.cur.name,
      vDesc: props.cur.desc,
      vTags: props.cur.tags,
      vDone: props.cur.done,
      vDue:  new Date(props.cur.due),
    } : {
      vName: "",
      vDesc: "",
      vTags: [],
      vDone: false,
      vDue: undefined,
    }
  }

  handleChange(which, event) {
    this.handleChangeRaw(which, event.target.value);
  }
  handleChangeRaw(which, value) {
    this.setState({ [which]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Saving edits is not implemented yet. Fakesaving task ${JSON.stringify(this.state)} ~~`);
    
    const s = this.state;
    const BACKEND = "/_tests/tasks.json"
    const _Options = {
      method: 'POST',
      body: JSON.stringify({session: "Dummy", name: s.vName, desc: s.vDesc, tags: s.vTags, done: s.vDone, due: s.vDue}),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(BACKEND, _Options)
      .then(response => response.ok ? response.json() : [])
      .then(tasks => { this.setState({ fetchDone: true}); window.location.href="/"; })
      .catch(error => { this.setState({ fetchDone: true}); alert(`*WIP* Error fetching task list - ${error.name}: ${error.message}`) });
  }

  render(props) {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <TextInput label="Name" onChange={(e) => this.handleChange("vName", e)} value={this.state.vName}/>
        <TextInput label="Tags" onChange={(e) => this.handleChange("vTags", e)} value={this.state.vTags.join()}/>
        <Checkbox label="Done"  onChange={(e) => this.handleChange("vDone", e)} checked={this.state.vDone==='Done' ? true : false}
          value="Done" filledIn />
        <DatePicker label="Due date" onChange={(e) => this.handleChangeRaw("vDue", e)}
          value={this.state.vDue.toLocaleDateString("en-SG", {dateStyle: "medium"})}
          options={{defaultDate: this.state.vDue}}  />
        <TextInput label="Description" onChange={(e) => this.handleChange("vDesc", e)} value={this.state.vDesc}/>
        <Button
          node="button"
          type="submit"
          waves="light"
        >
          Save
          <Icon right>
            save
          </Icon>
        </Button>
      </form>
    )
  }
}
