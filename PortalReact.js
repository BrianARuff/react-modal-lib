import { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  constructor(props) {
    super(props);
    this.modalContainer = document.createElement("div");
    this.modalContainer.id = this.props.id || "modal";
    this.exitSpan = document.createElement("span");
  }

  componentDidMount() {
    // container styles...
    const { style } = this.modalContainer;
    style.width = "100%";
    style.backgroundColor = "rgba(0,0,0,0.2)";
    style.position = "absolute";
    style.top = 0;
    style.left = 0;
    style.display = "flex";
    style.justifyContent = "center";
    style.alignContent = "center";
    style.alignItems = "center";
    style.minHeight = "100vh";

    // insert after body...
    document.body.insertAdjacentElement("afterbegin", this.modalContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.modalContainer);
  }
}

export default Portal;
