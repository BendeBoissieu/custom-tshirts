import React from "react";
import ReactDOM from "react-dom";
import Moveable from "react-moveable";
import { ref } from "framework-utils";
import { Frame } from "scenejs";
import { Rnd } from "react-rnd";
//import "./styles.css";

class Test extends React.Component {
  frame = new Frame({
    transform: {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
  });
  state = {
    target: null,
    container: null,
    scalable: true,
    resizable: false,
    warpable: false
  }
  render() {
    const { scalable, warpable, resizable, target } = this.state;
    return (
      <div className="tshirt apply-font">
        <Moveable
          ref={ref(this, "moveable")}
          target={target}
          pinchThreshold={20}
          container={document.body}
          draggable={true}
          scalable={true}
          resizable={false}
          warpable={false}
          rotatable={true}
          pinchable={true}
          origin={false}
          throttleDrag={1}
          throttleRotate={0.2}
          throttleResize={1}
          throttleScale={0.01}
          onDrag={this.onDrag}
          onResize={this.onResize}
          onScale={this.onScale}
          onWarp={this.onWarp}
          onRotate={this.onRotate}
          onPinch={this.onPinch}
          onDragEnd={this.onEnd}
          onScaleEnd={this.onEnd}
          onResizeEnd={this.onEnd}
          onWarpEnd={this.onEnd}
          onRotateEnd={this.onEnd}
          onPinchEnd={this.onEnd}
        />
        <img style={{backgroundColor: this.props.state.colorTshirt, width: 300, margin: 'auto'}} src="../public/shirt2.png" alt="tshirt"  onClick={this.props.displayResult}/>
        <img src=".././public/art_word/happy_father.svg" className="moveable" alt="" height="150px" width="150px"/>
        <div className="label" ref={ref(this, "label")} />

      </div>
    );
  }
  componentDidMount() {
    this.setState({
      target: document.querySelector(".moveable")
    });
    window.addEventListener("resize", this.onWindowReisze);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowReisze);
  }
  onWindowReisze = () => {
    this.moveable.updateRect();
  };

  setTransform(target) {
    target.style.cssText = this.frame.toCSS();
  }
  setLabel(clientX, clientY, text) {
    this.label.style.cssText = `
display: block; transform: translate(${clientX}px, ${clientY -
      10}px) translate(-100%, -100%) translateZ(-100px);`;
    this.label.innerHTML = text;
  }
  onPinch = ({ clientX, clientY }) => {
    setTimeout(() => {
      this.setLabel(
        clientX,
        clientY,
        `X: ${this.frame.get("left")}
  <br/>Y: ${this.frame.get("top")}
  <br/>W: ${this.frame.get("width")}
  <br/>H: ${this.frame.get("height")}
  <br/>S: ${this.frame.get("transform", "scaleX").toFixed(2)}, ${this.frame
          .get("transform", "scaleY")
          .toFixed(2)}
  <br/>R: ${parseFloat(this.frame.get("transform", "rotate")).toFixed(1)}deg
  `
      );
    });
  };
  onDrag = ({ target, clientX, clientY, top, left, isPinch }) => {
    this.frame.set("left", `${left}px`);
    this.frame.set("top", `${top}px`);
    this.setTransform(target);
    if (!isPinch) {
      this.setLabel(clientX, clientY, `X: ${left}px<br/>Y: ${top}px`);
    }
  };
  onScale = ({ target, delta, clientX, clientY, isPinch }) => {
    const scaleX = this.frame.get("transform", "scaleX") * delta[0];
    const scaleY = this.frame.get("transform", "scaleY") * delta[1];
    this.frame.set("transform", "scaleX", scaleX);
    this.frame.set("transform", "scaleY", scaleY);
    this.setTransform(target);
    if (!isPinch) {
      this.setLabel(
        clientX,
        clientY,
        `S: ${scaleX.toFixed(2)}, ${scaleY.toFixed(2)}`
      );
    }
  };
  onRotate = ({ target, clientX, clientY, beforeDelta, isPinch }) => {
    const deg = parseFloat(this.frame.get("transform", "rotate")) + beforeDelta;

    this.frame.set("transform", "rotate", `${deg}deg`);
    this.setTransform(target);
    if (!isPinch) {
      this.setLabel(clientX, clientY, `R: ${deg.toFixed(1)}`);
    }
  };

  onEnd = () => {
    this.label.style.display = "none";
  };
}

export default Test;
