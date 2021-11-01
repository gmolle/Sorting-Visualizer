import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

import './arrayBar.css'

const ArrayBar = ({value}) => {
  const {widthMargin, primaryColor, animationSpeed, arrayNums} = useSelector(state => state.array)
  const {width} = useWindowDimensions()

  function getWindowDimensions() {
    const { innerWidth: width,} = window;
    return {
      width,
    };
  }


  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  return (
    <>
    <div className="array-bar" 
      style={{
        height: `${value}px`,
        backgroundColor: primaryColor,
        // minWidth: widthMargin.width,
        minWidth: width <= 1100 ? ((width - ((widthMargin.margin *2) * arrayNums.length)) / arrayNums.length) : widthMargin.width,
        margin: `0px ${widthMargin.margin}px`,
        transitionDuration: `${animationSpeed}ms`,
        transitionProperty: 'height, background',
        transitionTimingFunction: 'ease-in',
    }}>
    </div>
    </>
  )
}

export default ArrayBar
