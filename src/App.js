// import logo from "./logo.svg";
import "./App.css";

import Todoform from "./component/Todoform";
import { Calculator } from "./component/calculator/Calculator";

function App() {
  return (
    <div className="App">
      <Calculator />
      <hr />
      <Todoform />
    </div>
  );
}

export default App;
