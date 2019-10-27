## React Modal Lib

```
import Portal from "react-modal-lib"
```
import React, { Component } from "react";
import Portal from "./Portal";

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = { showPortal: false };
  }
  render() {
    const names = "asdfasdfasdf";
    return (
      <div className="">
        <h1>Hello World</h1>
        // LOGIC EXAMPLE FOR SHOWING (MOUNTING) PORTAL IS IN THE FOLLOWING BUTTON'S CALLBACK FUNCTION INSIDE THE ONCLICK LISTENER
        <button
          onClick={() => {
            this.setState({ showPortal: !this.state.showPortal });
          }}
        >
          Show Modal
        </button>
        // LOGIC FOR RENDERING OUT PORTAL WHEN LOGIC IS SET TO  TRUE
        {this.state.showPortal ? (
          <Portal id="asdf">
            <div>
            // LOGIC EXAMPLE FOR CLOSING (UNMOUNTING) THE PORTAL BELOW IN THE SPAN...
              <span
                style={{
                  position: "relative",
                  top: 0,
                  right: 0,
                  cursor: "pointer"
                }}
                onClick={() => this.setState({ showPortal: false })}
              >
                X
              </span>
              <h2>Portal Title</h2>
              <p>Portal message would go here...</p>
            </div>
          </Portal>
        ) : null}
      </div>
    );
  }
}

export default App;

```

## React Modal Lib
# react-modal-lib
