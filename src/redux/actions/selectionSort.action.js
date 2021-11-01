import { SELECTION_SORT, SORT_END } from "../actionTypes";
import {waitForAnimation, swapElements} from './helper'

export const selectionSortArray = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELECTION_SORT
    })

    const arrayBars = document.getElementsByClassName('array-bar');

    for(let i = 0; i < arrayBars.length; i++) {
      let min_index = i

      arrayBars[i].style.background = getState().array.secondaryColor

      for(let j = i+1; j < arrayBars.length; j++) {
        arrayBars[j].style.background = 'orange'

        await waitForAnimation(getState().array.animationSpeed);

        if(parseInt(arrayBars[j].style.height) < parseInt(arrayBars[min_index].style.height)){
          if(min_index !== i) {
            arrayBars[min_index].style.background = getState().array.primaryColor
          }
          min_index = j
        } else {
          arrayBars[j].style.background = getState().array.primaryColor
        }
      }
      await waitForAnimation(getState().array.animationSpeed);
      swapElements(arrayBars[min_index], arrayBars[i])

      arrayBars[min_index].style.background = getState().array.primaryColor
      arrayBars[i].style.background = 'lightgreen'
    }

    if(arrayBars[0].style.background === 'lightgreen') {
      dispatch({
        type: SORT_END,
      })
    }

  } catch (error) {
    console.log(error)
  }
}