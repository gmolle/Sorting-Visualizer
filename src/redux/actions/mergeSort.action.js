import { MERGE_SORT, SORT_END } from "../actionTypes"
import {waitForAnimation} from './helper'

export const mergeSortArray = () => async (dispatch, getState) => {
  try {
    const arrayBars = document.getElementsByClassName('array-bar');

    const merge = async(ele, low, mid, high) =>{
      const n1 = mid - low + 1;
      const n2 = high - mid;
      let left = new Array(n1);
      let right = new Array(n2);
  
      for(let i = 0; i < n1; i++){
        await waitForAnimation(getState().array.animationSpeed)
          // color
          ele[low + i].style.background = 'orange';
          left[i] = ele[low + i].style.height;
      }
      for(let i = 0; i < n2; i++){
        await waitForAnimation(getState().array.animationSpeed)
          // color
          ele[mid + 1 + i].style.background = getState().array.secondaryColor;
          right[i] = ele[mid + 1 + i].style.height;
      }
      await waitForAnimation(getState().array.animationSpeed)
      let i = 0, j = 0, k = low;
      while(i < n1 && j < n2){
        await waitForAnimation(getState().array.animationSpeed)
          
          // To add color for which two r being compared for merging
          
          if(parseInt(left[i]) <= parseInt(right[j])){
              // color
              if((n1 + n2) === ele.length){
                  ele[k].style.background = 'lightgreen';
              }
              else{
                  ele[k].style.background = 'lightpink';
              }
              
              ele[k].style.height = left[i];
              i++;
              k++;
          }
          else{
              // color
              if((n1 + n2) === ele.length){
                  ele[k].style.background = 'lightgreen';
              }
              else{
                  ele[k].style.background = 'lightpink';
              } 
              ele[k].style.height = right[j];
              j++;
              k++;
          }
      }
      while(i < n1){
        await waitForAnimation(getState().array.animationSpeed)
          // color
          if((n1 + n2) === ele.length){
              ele[k].style.background = 'lightgreen';
          }
          else{
              ele[k].style.background = 'lightpink';
          }
          ele[k].style.height = left[i];
          i++;
          k++;
      }
      while(j < n2){
        await waitForAnimation(getState().array.animationSpeed)
          // color
          if((n1 + n2) === ele.length){
              ele[k].style.background = 'lightgreen';
          }
          else{
              ele[k].style.background = 'lightpink';
          }
          ele[k].style.height = right[j];
          j++;
          k++;
      }
    }


     const mergeSort = async(ele, l, r) =>{
      if(l >= r) return;
      const m = l + Math.floor((r - l) / 2);
      await mergeSort(ele, l, m);
      await mergeSort(ele, m + 1, r);
      await merge(ele, l, m, r);
      // If the last bar in the array is green, the merge sort is over
      if(arrayBars[arrayBars.length - 1].style.background === 'lightgreen') {
        dispatch({
          type: SORT_END
        })
      }
    }


    let l = 0;
    mergeSort(arrayBars, l, arrayBars.length - 1)

    await dispatch({
      type: MERGE_SORT
    })
  } catch (error) {
    console.log(error)
  }
}