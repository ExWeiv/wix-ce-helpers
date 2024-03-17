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

Example usage of ReactElement class:

```js
const fonts = [...];
const styles = [...];

class ExampleCustomComponent extends ReactElement {
  constructor(styles, fonts) {
    //
  }
}
```
> This will help you to build React based custom elements faster