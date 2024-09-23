import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // let count = 0;
  let [count, setCount] = useState(0);

  function handleCounter() {
    // bad click handler
    // count = count + 1;
    // console.log(count);

    //good react click handler
    setCount(count + 1);
  }

  function handleNegativeCounter() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount((count = 0));
  }

  // image related functions (inline if statements)

  const [showPineapple, setShowPineapple] = useState(false);

  function togglePineapple() {
    setShowPineapple(!showPineapple);
  }
  return (
    <>
      <Header />
      <div>
        <button onClick={handleCounter}>Click +1</button>
        <button onClick={handleNegativeCounter}>Click -1</button>
        <p onClick={resetCount}> You've clicked the counter: {count} times!</p>
        <button onClick={togglePineapple}> Click to toggle Pineapple </button>
        {showPineapple ? (
          <img
            src="https://th.bing.com/th/id/OIP.UBR_ge1oOhszRx0_5wqLGQHaE8?rs=1&pid=ImgDetMain"
            alt="pineapple"
          />
        ) : (
          <img
            src="https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg"
            height="200px"
            width="auto"
            alt="orange"
          />
        )}
        {/* Alternate image show/hide method */}
        {showPineapple && (
          <img
            src="https://th.bing.com/th/id/OIP.UBR_ge1oOhszRx0_5wqLGQHaE8?rs=1&pid=ImgDetMain"
            alt="pineapple"
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
