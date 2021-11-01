import { BUBBLE_SORT, SORT_END } from "../actionTypes";
import {waitForAnimation, swapElements} from './helper'

export const bubbleSortArray = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BUBBLE_SORT
    })
    
    const arrayBars = document.getElementsByClassName('array-bar');
    for(let i = 0; i < arrayBars.length; i++) {
      for(let  j = 0; j < arrayBars.length-i-1; j++) {
        if(getState().array.sorting === false) return
        arrayBars[j].style.background = getState().array.secondaryColor
        arrayBars[j+1].style.background = getState().array.secondaryColor
        if(parseInt(arrayBars[j].style.height) > parseInt(arrayBars[j+1].style.height)) {
          await waitForAnimation(getState().array.animationSpeed);
          swapElements(arrayBars[j], arrayBars[j+1])
        }
        arrayBars[j].style.background = getState().array.primaryColor
        arrayBars[j+1].style.background = getState().array.primaryColor
      }
      arrayBars[arrayBars.length - 1 - i].style.background = getState().array.sortedColor
    }
    arrayBars[0].style.background = getState().array.sortedColor
  
    // If the first bar of the array is green, the sorting is done
    if(arrayBars[0].style.background === getState().array.sortedColor) {
      dispatch({
        type: SORT_END,
      })
    }
  } catch (error) {
    console.log(error)
  }
}