import React from "react";
import ReactDOM from "react-dom";
import Moveable from "react-moveable";
import { ref } from "framework-utils";
import { Frame } from "scenejs";
import { Rnd } from "react-rnd";

class Test2 extends React.Component {
  frames = [
    new Frame(
      "transform: translateX(0px) translateY(0px) rotate(0deg) scaleX(1), scaleY(1)"
    ),
    new Frame(
      "transform: translateX(0px) translateY(0px) rotate(0deg) scaleX(1), scaleY(1)"
    ),
    new Frame(
      "transform: translateX(0px) translateY(0px) rotate(0deg) scaleX(1), scaleY(1)"
    )
  ];
  state = {
    target: null,
    container: null,
    scalable: true,
    resizable: false,
    warpable: false
  };
  render() {
    const { scalable, warpable, resizable, targets } = this.state;
    return (
      <div className="tshirt apply-font">
        <button onClick={this.onWindowReisze}>reset rotatation</button>
        <Moveable
          ref={ref(this, "moveable")}
          target={targets}
          pinchThreshold={20}
          container={document.body}
          renderDirections={["nw", "ne", "sw", "se"]}
          keepRatio={true}
          draggable={true}
          scalable={true}
          rotatable={true}
          origin={false}
          throttleDrag={1}
          throttleRotate={0.2}
          throttleResize={1}
          throttleScale={0.01}
          onDragGroupStart={e => {
            e.events.forEach(({ set }, i) => {
              const frame = this.frames[i];

              set([
                parseFloat(frame.get("transform", "translateX")),
                parseFloat(frame.get("transform", "translateY"))
              ]);
            });
          }}
          onDragGroup={e => {
            e.events.forEach((ev, i) => {
              const frame = this.frames[i];

              frame.set(
                "transform",
                "translateX",
                `${ev.beforeTranslate[0]}px`
              );
              frame.set(
                "transform",
                "translateY",
                `${ev.beforeTranslate[1]}px`
              );
              ev.target.style.cssText += frame.toCSS();
            });
          }}
          onScaleGroupStart={e => {
            e.events.forEach(({ set, dragStart }, i) => {
              const frame = this.frames[i];

              set([
                frame.get("transform", "scaleX"),
                frame.get("transform", "scaleY")
              ]);
              dragStart &&
                dragStart.set([
                  parseFloat(frame.get("transform", "translateX")),
                  parseFloat(frame.get("transform", "translateY"))
                ]);
            });
          }}
          onScaleGroup={e => {
            e.events.forEach((ev, i) => {
              const frame = this.frames[i];

              frame.set("transform", "scaleX", ev.scale[0]);
              frame.set("transform", "scaleY", ev.scale[1]);

              frame.set(
                "transform",
                "translateX",
                `${ev.drag.beforeTranslate[0]}px`
              );
              frame.set(
                "transform",
                "translateY",
                `${ev.drag.beforeTranslate[1]}px`
              );
              ev.target.style.cssText += frame.toCSS();
            });
          }}
          onRotateGroupStart={e => {
            e.events.forEach(({ set, dragStart }, i) => {
              const frame = this.frames[i];

              set(parseFloat(frame.get("transform", "rotate")));
              dragStart &&
                dragStart.set([
                  parseFloat(frame.get("transform", "translateX")),
                  parseFloat(frame.get("transform", "translateY"))
                ]);
            });
          }}
          onRotateGroup={e => {
            e.events.forEach((ev, i) => {
              const frame = this.frames[i];

              frame.set("transform", "rotate", `${ev.beforeRotate}deg`);

              frame.set(
                "transform",
                "translateX",
                `${ev.drag.beforeTranslate[0]}px`
              );
              frame.set(
                "transform",
                "translateY",
                `${ev.drag.beforeTranslate[1]}px`
              );
              ev.target.style.cssText += frame.toCSS();
            });
          }}
        />
        <div className="container">
          <div className="target" id="target1">
            target1
          </div>
          <div className="target" id="target2">
            target2
          </div>
          <div className="target" id="target3">
            target3
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      targets: [].slice.call(document.querySelectorAll(".target"))
    });
    // setTimeout(() => {
    //   console.log(this.moveable.moveable.moveables.map(a => a.getRect()));
    // }, 100)
    window.addEventListener("resize", this.onWindowReisze);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowReisze);
  }
  onWindowReisze = () => {
    console.log("UP");
    this.moveable.updateRect();
  };
}

export default Test2;
