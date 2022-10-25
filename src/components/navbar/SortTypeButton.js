import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bubbleSortArray } from "../../redux/actions/bubbleSort.action";
import { insertionSortArray } from "../../redux/actions/insertionSort.action";
import { mergeSortArray } from "../../redux/actions/mergeSort.action";
import { quickSortArray } from "../../redux/actions/quickSort.action";
import { selectionSortArray } from "../../redux/actions/selectionSort.action";

const SortTypeButton = ({ sort }) => {
  const { sorting, sortType } = useSelector((state) => state.array);
  const dispatch = useDispatch();

  const sortName = sort.substring(0, 1).toUpperCase() + sort.substring(1);

  const sortAction = () => {
    switch (sort) {
      case "merge":
        dispatch(mergeSortArray());
        break;
      case "quick":
        dispatch(quickSortArray());
        break;
      case "selection":
        dispatch(selectionSortArray());
        break;
      case "bubble":
        dispatch(bubbleSortArray());
        break;
      case "insertion":
        dispatch(insertionSortArray());
        break;
      default:
        break;
    }
  };

  return (
    <button
      onClick={() => {
        sortAction();
      }}
      disabled={sorting}
      className={sortType === sort ? "active" : ""}
    >
      {sortName} Sort
    </button>
  );
};

export default SortTypeButton;
