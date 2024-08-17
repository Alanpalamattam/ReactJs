import { useState } from "react";

export default function Form() {
  const [name, setname] = useState({ firstname: "", lastname: "" });
  function handleclick(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <h2>
      {name.firstname} - {name.lastname}
      <form>
        <input
          onChange={(e) => setname({ ...name, firstname: e.target.value })}
          type="text"
          value={name.firstname}
        />
        <input
          onChange={(e) => setname({ ...name, lastname: e.target.value })}
          type="text"
          value={name.lastname}
        />
        <br />
        <button onClick={(e) => handleclick(e)}>Add</button>
      </form>
    </h2>
  );
}
