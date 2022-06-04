import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/section-left/Menu";
import Content from "./components/section-right/Content";

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="menu-container">
          <Menu />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
