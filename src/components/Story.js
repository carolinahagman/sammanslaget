import React, { useEffect, useState } from "react";
import brokenHeart1 from "../assets/images/BrokenHeart1.svg";
import brokenHeart2 from "../assets/images/BrokenHeart2.svg";
import heart from "../assets/images/Heart.svg";
import { Link } from "react-router-dom";

import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./UnityAssets/Build/Build.loader.js",
  dataUrl: "./UnityAssets/Build/Build.data",
  frameworkUrl: "./UnityAssets/Build/Build.framework.js",
  codeUrl: "./UnityAssets/Build/Build.wasm",
});

const Story = () => {
  const [loading, setLoading] = useState(true);
  const [showWholeHeart, setShowWholeHeart] = useState(false);
  const [showStory, setShowStory] = useState(false);
  useEffect(() => {
    if (loading)
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setShowWholeHeart(true);
        }, 2500);
      }, 500);
  });

  return (
    <>
      <div
        className="loadingScreen"
        style={{ display: showStory ? "none" : "block" }}
      >
        <div>
          {showWholeHeart ? (
            <div className="enterContainer">
              <img
                src={heart}
                alt="Full heart"
                className="pulsatingHeart"
              ></img>
              <button
                onClick={() => {
                  setShowStory(true);
                }}
                className="enterBtn"
              >
                Enter
              </button>
            </div>
          ) : (
            <>
              <img
                src={brokenHeart1}
                alt="Left half heart"
                className={`transitionHearts ${
                  loading
                    ? "initialLeftHeartPosition"
                    : "finalLeftHeartPosition"
                }`}
              ></img>
              <img
                src={brokenHeart2}
                alt="Right half heart"
                className={`transitionHearts ${
                  loading
                    ? "initialRightHeartPosition"
                    : "finalRightHeartPosition"
                }`}
              ></img>
            </>
          )}
        </div>
      </div>

      <div
        className="App"
        style={{ visibility: showStory ? "visible" : "hidden" }}
      >
        <div className="btnContainer">
          <Unity className="unity" unityContext={unityContext} />

          <Link className="aboutBtn" to="/about">
            About
          </Link>
        </div>
      </div>
    </>
  );
};
export default Story;
