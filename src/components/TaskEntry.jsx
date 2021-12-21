// Task entry

import { Checkbox, CollectionItem, Row, Col, Icon } from "react-materialize";

export default function TaskEntry(props) {
  return (
    <CollectionItem href={`/edit/${props.id}`} title="Click to expand">
    {props.children}
        <div className="secondary-content">
          <Icon>
            chevron_right
          </Icon>
        </div>
    </CollectionItem>
  )
};
