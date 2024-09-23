import "./App.css";
import BlockList from "./components/BlogList";
import Timer from "./components/Timer";

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const doubleNumbers = numbers.map((number) => number * 2);
  console.log(doubleNumbers);

  const items = [{ name: "item 1" }, { name: "item 1" }, { name: "item 1" }];
  const htmlItems = items.map((item, index) => {
    return <li key={index}>{item.name}</li>;
  });

  return (
    <div>
      {/* <ul>{htmlItems}</ul>
      <BlockList /> */}
      <Timer />
    </div>
  );
}
