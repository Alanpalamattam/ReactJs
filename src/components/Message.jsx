export default function Message() {
  function handleclick() {
    console.log("Button clicked");
  }
  return <button onClick={handleclick}>click here for message</button>;
}
