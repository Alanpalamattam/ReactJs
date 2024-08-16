import { useState } from "react";

export default function Form() {
  const [name, setname] = useState("");
  return (
    <h2>
      <form>
        <input
          onChange={(e) => setname(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </h2>
  );
}
