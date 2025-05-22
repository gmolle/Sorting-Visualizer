import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnimationSpeed,
  setArrayNums,
  setArraySize,
  setBarWidthAndMargin,
} from "../../redux/actions/array.action";
import Dropdown from "./Dropdown";

import "./navbar.css";
import SortTypeButton from "./SortTypeButton";

const Navbar = () => {
  const { arraySize, animationSpeed, sorting } = useSelector(
    (state) => state.array
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setArrayNums());
    dispatch(setBarWidthAndMargin(arraySize));
  }, [arraySize, dispatch]);

  const showNav = (e) => {
    const hamburger = e.target;
    const burger = document.querySelector(".hamburger");

    hamburger.parentElement.previousElementSibling.classList.toggle("open");

    const algoButtons = document.querySelectorAll(".dropdown button");

    algoButtons.forEach((link, index) => {
      if (link.style.animation) {
        setTimeout(() => {
          link.style.animation = "";
        }, 500);
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 6 + 0.1
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  };

  return (
    <div className="navbar">
      <h1>Sorting Visualizer</h1>
      <div className="array-controls">
        <div className="range">
          <p>Size of array</p>
          <input
            type="range"
            min="10"
            max="200"
            step="10"
            value={arraySize}
            onChange={(e) => {
              dispatch(setArraySize(e));
            }}
            disabled={sorting}
          />
          <div>{arraySize}</div>
        </div>
        <div className="range">
          <p>Speed of sorting</p>
          <input
            type="range"
            min="1"
            max="120"
            value={121 - animationSpeed}
            onChange={(e) => {
              dispatch(setAnimationSpeed(e));
            }}
          />
          <div>{animationSpeed}ms</div>
        </div>
      </div>

      <div className="misc-controls">
        <button
          onClick={() => dispatch(setArrayNums())}
          disabled={sorting}
          className="new-array"
        >
          Generate New Array
        </button>
      </div>

      <div className="algo-buttons">
        <SortTypeButton sort="merge" />
        <SortTypeButton sort="quick" />
        <SortTypeButton sort="selection" />
        <SortTypeButton sort="bubble" />
        <SortTypeButton sort="insertion" />
      </div>

      <Dropdown />

      <div className="hamburger">
        <div className="line1" onClick={showNav}></div>
        <div className="line2" onClick={showNav}></div>
        <div className="line3" onClick={showNav}></div>
      </div>
    </div>
  );
};

export default Navbar;
