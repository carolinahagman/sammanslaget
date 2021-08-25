import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./UnityAssets/Build/WebGLCompleteBuild.loader.js",
  dataUrl: "./UnityAssets/Build/WebGLCompleteBuild.data",
  frameworkUrl: "./UnityAssets/Build/WebGLCompleteBuild.framework.js",
  codeUrl: "./UnityAssets/Build/WebGLCompleteBuild.wasm",
});

const UnityWeb = () => {
  return <Unity className="unity" unityContext={unityContext} />;
};
export default UnityWeb;
