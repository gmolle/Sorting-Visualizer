import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ArrayBar = ({ value }) => {
  const { widthMargin, primaryColor, animationSpeed, arrayNums } = useSelector(
    (state) => state.array
  );
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      handleResize();
    });
  }, [width]);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <>
      <div
        className="array-bar"
        style={{
          height: `${value}px`,
          backgroundColor: primaryColor,
          minWidth:
            width && width <= 1100
              ? (width - widthMargin.margin * 2 * arrayNums.length) /
                arrayNums.length
              : widthMargin.width,
          margin: `0px ${widthMargin.margin}px`,
          transitionDuration: `${animationSpeed}ms`,
          transitionProperty: "height, background",
          transitionTimingFunction: "ease-in",
        }}
      ></div>
    </>
  );
};

export default ArrayBar;
