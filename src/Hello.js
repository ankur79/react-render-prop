import React from "react";
import Actions from "./Actions";
class Hello extends React.Component {
  changeName() {
    Actions.statusUpdate();
  }
  render() {
    return (
      <div>
        Hello {this.props.name}
        <button onClick={() => Actions.statusUpdate()}> Change </button>
      </div>
    );
  }
}

export default Hello;
