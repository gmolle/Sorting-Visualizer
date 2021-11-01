import {QUICK_SORT, SORT_END } from "../actionTypes";
import {swapElements, waitForAnimation} from './helper'

export const quickSortArray = () => async (dispatch, getState) => {
  try {
    const arrayBars = document.getElementsByClassName('array-bar');

    const partitionLomuto = async(ele, l, r) => {
      let i = l - 1;
      ele[r].style.background = 'red';
      for(let j = l; j <= r - 1; j++){
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitForAnimation(getState().array.animationSpeed);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swapElements(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i !== j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitForAnimation(getState().array.animationSpeed);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
      }
      i++
      await waitForAnimation(getState().array.animationSpeed)
      swapElements(ele[i], ele[r])
      // color
      ele[r].style.background = 'pink';
      ele[i].style.background = 'lightgreen';

      await waitForAnimation(getState().array.animationSpeed)

      for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background !== 'lightgreen')
            ele[k].style.background = getState().array.primaryColor;
      }

      return i;
    }


    const quickSort = async(ele, l, r) => {
      if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
      } else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'lightgreen';
            ele[l].style.background = 'lightgreen';
        }
      }
      if(arrayBars[arrayBars.length - 1].style.background === 'lightgreen') {
        dispatch({
          type: SORT_END
        })
      }
    }

    let l = 0;
    quickSort(arrayBars, l, arrayBars.length - 1)

    await dispatch({
      type: QUICK_SORT
    })

  } catch (error) {
    console.log(error)
  }
}