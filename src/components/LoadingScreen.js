import React, { useEffect, useState } from "react";
import brokenHeart1 from "../assets/images/BrokenHeart1.svg";
import brokenHeart2 from "../assets/images/BrokenHeart2.svg";
import heart from "../assets/images/Heart.svg";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [showWholeHeart, setShowWholeHeart] = useState(false);
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
    <div>
      {showWholeHeart ? (
        <img src={heart} alt="Full heart" className="pulsatingHeart"></img>
      ) : (
        <>
          <img
            src={brokenHeart1}
            alt="Left half heart"
            className={`transitionHearts ${
              loading ? "initialLeftHeartPosition" : "finalLeftHeartPosition"
            }`}
          ></img>
          <img
            src={brokenHeart2}
            alt="Right half heart"
            className={`transitionHearts ${
              loading ? "initialRightHeartPosition" : "finalRightHeartPosition"
            }`}
          ></img>
        </>
      )}
    </div>
  );
};
export default LoadingScreen;
