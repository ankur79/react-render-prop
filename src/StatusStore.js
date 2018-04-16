import Reflux from "reflux";
import Actions from "./Actions";

class StatusStore extends Reflux.Store {
  constructor() {
    super();
    this.listenables = Actions;
    this.state = {
      name: "Ankur",
      list: ["a", "b", "c"]
    };
  }

  onStatusUpdate() {
    console.log("onFirstAction");
    this.state = Object.assign({}, this.state, { name: "Zoya" });
    this.setState(this.state);
  }

  onStatusEdited() {
    this.state = Object.assign({}, this.state, { list: ["d", "e", "f"] });
    this.setState(this.state);
  }
}

export default StatusStore;
