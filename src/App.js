import "./App.css";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import UnityWeb from "./components/UnityWeb";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading)
      setTimeout(() => {
        setLoading(false);
      }, 10000);
  });
  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <UnityWeb />
        </div>
      )}
    </div>
  );
}

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <UnityWeb />
//     </div>
//   );
// }

export default App;
