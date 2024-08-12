import Code from "./code";
import Welcome from "./Welcome";

export default function Conditionalcomponent() {
  const display = true;
  if (display) {
    return <Code />;
  } else {
    return <Welcome />;
  }
}
