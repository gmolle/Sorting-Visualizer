import { INSERTION_SORT, SORT_END } from "../actionTypes";
import { waitForAnimation } from "./helper";

export const insertionSortArray = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: INSERTION_SORT,
    });

    const arrayBars = document.getElementsByClassName("array-bar");

    arrayBars[0].style.background = getState().array.sortedColor;

    for (let i = 1; i < arrayBars.length; i++) {
      let j = i - 1;

      let key = arrayBars[i].style.height;

      arrayBars[i].style.background = getState().array.secondaryColor;
      await waitForAnimation(getState().array.animationSpeed);

      while (j >= 0 && parseInt(arrayBars[j].style.height) > parseInt(key)) {
        arrayBars[j].style.background = "orange";
        arrayBars[j + 1].style.height = arrayBars[j].style.height;
        j--;

        await waitForAnimation(getState().array.animationSpeed);

        for (let k = i; k >= 0; k--) {
          arrayBars[k].style.background = getState().array.sortedColor;
        }
      }
      arrayBars[j + 1].style.height = key;
      arrayBars[i].style.background = getState().array.sortedColor;
    }

    if (
      arrayBars[arrayBars.length - 1].style.background ===
      getState().array.sortedColor
    ) {
      dispatch({
        type: SORT_END,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
