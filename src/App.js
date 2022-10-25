import ArrayContainer from "./components/arrayContainer/ArrayContainer";
import Navbar from "./components/navbar/Navbar";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ArrayContainer />
    </div>
  );
};

export default App;
