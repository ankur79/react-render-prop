import React from "react";
import { render } from "react-dom";
import MyComponent from "./MyComponent";
import Hello from "./Hello";
import List from "./List";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <MyComponent
          render={data => (
            <div>
              <Hello {...data} />
              <List {...data} />
            </div>
          )}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
