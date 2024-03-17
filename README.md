# Wix Custom Element Helpers

This package contain/s basic helpers to use in frontend for custom elements in Wix.

Example usage of sendJSON:

```js
// Import sendJSON for sending object data as JSON to custom element
import { sendJSON } from "@exweiv/wix-ce-helpers";

$w.onReady(() => {
  sendJSON("props", { clickCount: 100 }, "#customElement");

  $w("#customElement").on("onButtonClick", ({ detail }) => {
    sendJSON("props", { clickCount: detail.count * 2 }, "#customElement");
  });
});
```

Example usage of setupForReact function:

```js
import React from "react";
import ReactDOM from "react-dom";
import Counter from "../components/Counter";
import styles from "../css/globalcss";
import { setupForReact } from "@exweiv/wix-ce-helpers";

const fonts = [`<link rel="preconnect" href="https://fonts.googleapis.com">`, `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`, `<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">`];

class CounterReactExample extends HTMLElement {
  customElement;
  rootDiv;

  constructor() {
    super();
    const { customElement, rootDiv } = setupForReact([styles], fonts, this);
    this.rootDiv = rootDiv;
    this.customElement = customElement;
  }

  // Attributes keys that's listened for changes
  static get observedAttributes() {
    return ["props"];
  }

  /**
   * @param {string} name Name of attribute (key)
   * @param {String} oldValue Old value of attribute
   * @param {String} newValue New value of attribute
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "props") {
      // Create another HTML element to mount into div element + pass props as JS object
      const app = React.createElement(Counter, { ...JSON.parse(newValue), customElement: this.customElement });
      // Mount created app to div and render (after first mount it will only render changed elements)
      ReactDOM.render(app, this.rootDiv);
    }
  }
}

customElements.define("react-counter-example", CounterReactExample);
```

> This will help you to build React based custom elements faster. You can pass null if you don't want to set one of the options except custom element.
