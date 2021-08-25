import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true);
  //placeholder
  useEffect(() => {
    if (loading)
      setTimeout(() => {
        setLoading(false);
      }, 3000);
  });
  return (
    <div className="App">
      {loading ? (
        <ClipLoader color={"#BD10E0"} loading={loading} size={50} />
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      )}
    </div>
  );
}

export default App;
