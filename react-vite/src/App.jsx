import "./App.css";
import ToDo from "./components/ToDo";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";

// <> </> - fragments apply to the body
function App() {
  return (
    <>
      <Header />
      <h1>Title Text</h1>
      <p>Test Text</p>
      <ToDo />
      <Button />
      <Footer />
    </>
  );
}

export default App;
