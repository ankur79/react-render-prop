import React from "react";
import Actions from "./Actions";
class List extends React.Component {
  render() {
    return (
      <div>
        <ul>{this.props.list.map(item => <li>{item}</li>)}</ul>
        <button onClick={() => Actions.statusEdited()}>Update</button>
      </div>
    );
  }
}

export default List;
