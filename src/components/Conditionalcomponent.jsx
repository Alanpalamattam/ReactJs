import Code from "./code";
import Welcome from "./Welcome";

export default function Conditionalcomponent() {
  let message;
  const display = false;
  if (display) {
    message = <h1>This is message 1</h1>;
  } else {
    message = <h1>This is message 2</h1>;
  }
  return message;
}
