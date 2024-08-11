import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
function App() {
  return (
    <div className="App">
      {
        /* <Hello message="Hai" name="Alan" lname="Peter" />
      <Hello message="Hello" name="Amarjith" lname="Alex" /> */
        <Fruits />
      }
    </div>
  );
}
export default App;
