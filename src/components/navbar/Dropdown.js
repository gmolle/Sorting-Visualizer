import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArrayNums } from "../../redux/actions/array.action";
import { bubbleSortArray } from "../../redux/actions/bubbleSort.action";
import { insertionSortArray } from "../../redux/actions/insertionSort.action";
import { mergeSortArray } from "../../redux/actions/mergeSort.action";
import { quickSortArray } from "../../redux/actions/quickSort.action";
import { selectionSortArray } from "../../redux/actions/selectionSort.action";

const Dropdown = () => {
  const dispatch = useDispatch();
  const { sorting, sortType } = useSelector((state) => state.array);

  return (
    <div className="dropdown">
      <button
        onClick={() => dispatch(setArrayNums())}
        disabled={sorting}
        className="new-array"
      >
        Generate New Array
      </button>
      <button
        onClick={() => {
          dispatch(mergeSortArray());
        }}
        disabled={sorting}
        className={sortType === "merge" ? "active" : ""}
      >
        Merge Sort
      </button>
      <button
        onClick={() => {
          dispatch(quickSortArray());
        }}
        disabled={sorting}
        className={sortType === "quick" ? "active" : ""}
      >
        Quick Sort
      </button>
      <button
        onClick={() => {
          dispatch(selectionSortArray());
        }}
        disabled={sorting}
        className={sortType === "selection" ? "active" : ""}
      >
        Selection Sort
      </button>
      <button
        onClick={() => {
          dispatch(bubbleSortArray());
        }}
        disabled={sorting}
        className={sortType === "bubble" ? "active" : ""}
      >
        Bubble Sort
      </button>
      <button
        onClick={() => {
          dispatch(insertionSortArray());
        }}
        disabled={sorting}
        className={sortType === "insertion" ? "active" : ""}
      >
        Insertion Sort
      </button>
    </div>
  );
};

export default Dropdown;
