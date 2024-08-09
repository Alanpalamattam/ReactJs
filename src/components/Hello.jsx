function Hello({ name, message, lname }) {
  return (
    <div>
      <h1>
        {message} from {name} {lname}
      </h1>
    </div>
  );
}
export default Hello;
