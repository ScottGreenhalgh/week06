import "../styles/Footer.css";

// passing arguments to events
export default function Footer() {
  function handleClick(message) {
    console.log(message);
  }

  return (
    <footer className="footer">
      <p>This is the foot</p>
      <button onClick={() => handleClick("Hello!")}>
        Click me and I say hello!
      </button>
      <button onClick={() => handleClick("Goodbye!")}>
        Click me and I say goodbye!
      </button>
    </footer>
  );
}
