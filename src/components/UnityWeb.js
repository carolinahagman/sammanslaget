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
  //   const [loaded, setLoaded] = useState(false);
  //   useEffect(function () {
  //     unityContext.on("loaded", function () {
  //       console.log("Unity canvas ready");
  //       setTimeout(() => {
  //         setLoaded(true);
  //       }, 2000);
  //     });
  //   }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading)
      setTimeout(() => {
        setLoading(false);
      }, 7000);
  });
  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <Unity className="unity" unityContext={unityContext} />
      )}
    </div>
  );
};

export default UnityWeb;
