import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./UnityAssets/Build/Build.loader.js",
  dataUrl: "./UnityAssets/Build/Build.data",
  frameworkUrl: "./UnityAssets/Build/Build.framework.js",
  codeUrl: "./UnityAssets/Build/Build.wasm",
});

const UnityWeb = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(function () {
    unityContext.on("loaded", function () {
      console.log("Unity canvas ready");
      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    });
  }, []);

  return (
    <div className="App">
      {/* <LoadingScreen className={loaded ? "visible" : "hidden"} /> */}

      <Unity
        className={`unity ${loaded ? "visible" : "hidden"}`}
        unityContext={unityContext}
      />
    </div>
  );
};

export default UnityWeb;
