import React from "react";
import Reflux from "reflux";
import StatusStore from "./StatusStore";

class MyComponent extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {}; // our store will add its own state to the component's
    this.store = StatusStore; // <- just assign the store class itself
  }

  render() {
    return <div>{this.props.render(this.state)}</div>;
  }
}

export default MyComponent;
