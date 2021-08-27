import React, { useEffect, useState } from "react";
import brokenHeart1 from "../assets/images/BrokenHeart1.png";
import brokenHeart2 from "../assets/images/BrokenHeart2.png";
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
        }, 2200);
      }, 500);
  });

  return (
    <>
      <div
        className="loadingScreen"
        style={{ display: showStory ? "none" : "block" }}
      >
        <div>
          <>
            <h1
              className="projectTitle"
              style={{ opacity: !showWholeHeart ? 0 : 1 }}
            >
              {" "}
              Karmens Kärlek
            </h1>

            <button
              style={{ opacity: !showWholeHeart ? 0 : 1 }}
              onClick={() => {
                setShowStory(true);
              }}
              className={`enterBtn ${showWholeHeart ? "pulsating" : ""}`}
            >
              Starta berättelsen
            </button>
            <img
              src={brokenHeart1}
              alt="Left half heart"
              className={`transitionHearts ${
                showWholeHeart ? "pulsatingLeftHeart" : ""
              } ${
                loading ? "initialLeftHeartPosition" : "finalLeftHeartPosition"
              }`}
            ></img>
            <img
              src={brokenHeart2}
              alt="Right half heart"
              className={`transitionHearts ${
                showWholeHeart ? "pulsatingRightHeart" : ""
              } ${
                loading
                  ? "initialRightHeartPosition"
                  : "finalRightHeartPosition"
              }`}
            ></img>
          </>
        </div>
      </div>

      <div
        className="App"
        style={{
          visibility: showStory ? "visible" : "hidden",
          opacity: showStory ? 1 : 0,
        }}
      >
        <Link
          style={{ display: showStory ? "block" : "none" }}
          className="aboutBtn"
          to="/about"
        >
          Om oss
        </Link>
        <div className="btnContainer">
          <Unity className="unity" unityContext={unityContext} />
        </div>
      </div>
    </>
  );
};
export default Story;
