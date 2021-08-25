import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import UnityWeb from "./components/UnityWeb";

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
        <div>
          <UnityWeb />
        </div>
      )}
    </div>
  );
}

export default App;
