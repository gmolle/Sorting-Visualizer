import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimationSpeed, setArrayNums, setArraySize, setBarWidthAndMargin } from '../../redux/actions/array.action';
import { bubbleSortArray } from '../../redux/actions/bubbleSort.action';
import { insertionSortArray } from '../../redux/actions/insertionSort.action';
import { mergeSortArray } from '../../redux/actions/mergeSort.action';
import { quickSortArray } from '../../redux/actions/quickSort.action';
import { selectionSortArray } from '../../redux/actions/selectionSort.action';

import './navbar.css'

const Navbar = () => {
  const {arraySize, animationSpeed, sorting, sortType} = useSelector(state => state.array)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setArrayNums())
    dispatch(setBarWidthAndMargin(arraySize))
  },  [arraySize, dispatch])

  const showNav = (e) => {
    const hamburger = e.target
    const burger = document.querySelector('.hamburger')

    hamburger.parentElement.previousElementSibling.classList.toggle('open')

    const algoButtons = document.querySelectorAll('.dropdown button')

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

  }


  return (
    <div className='navbar'>
      <h1>Sorting Visualizer</h1>
      <div className='array-controls'>
        <div className='range'>
          <p>Size of array</p>
          <input type="range" min='10' max='200' step='10' value={arraySize} onChange={(e) => {dispatch(setArraySize(e))}} disabled={sorting}/>
          <div>{arraySize}</div>
        </div>
        <div className='range'>
          <p>Speed of sorting</p>
          <input type="range" min='1' max='120'  value={121 - animationSpeed} onChange={(e) => {dispatch(setAnimationSpeed(e))}}/>
          <div>{animationSpeed}ms</div>
        </div>
      </div>
      <div className='misc-controls'>
        <button onClick={() => dispatch(setArrayNums())} disabled={sorting} className='new-array'>Generate New Array</button>  
      </div>
      <div className='algo-buttons'>
        <button onClick={() => {dispatch(mergeSortArray())}} disabled={sorting} className={sortType === 'merge' ? 'active' : ''}>Merge Sort</button>
        <button onClick={() => {dispatch(quickSortArray())}} disabled={sorting} className={sortType === 'quick' ? 'active' : ''}>Quick Sort</button>
        <button onClick={() => {dispatch(selectionSortArray())}} disabled={sorting} className={sortType === 'selection' ? 'active' : ''}>Selection Sort</button>
        <button onClick={() => {dispatch(bubbleSortArray())}} disabled={sorting} className={sortType === 'bubble' ? 'active' : ''}>Bubble Sort</button>
        <button onClick={() => {dispatch(insertionSortArray())}} disabled={sorting} className={sortType === 'insertion' ? 'active' : ''}>Insertion Sort</button>
      </div>

      <div className="dropdown">
        <button onClick={() => dispatch(setArrayNums())} disabled={sorting} className='new-array'>Generate New Array</button>  
        <button onClick={() => {dispatch(mergeSortArray())}} disabled={sorting} className={sortType === 'merge' ? 'active' : ''}>Merge Sort</button>
        <button onClick={() => {dispatch(quickSortArray())}} disabled={sorting} className={sortType === 'quick' ? 'active' : ''}>Quick Sort</button>
        <button onClick={() => {dispatch(selectionSortArray())}} disabled={sorting} className={sortType === 'selection' ? 'active' : ''}>Selection Sort</button>
        <button onClick={() => {dispatch(bubbleSortArray())}} disabled={sorting} className={sortType === 'bubble' ? 'active' : ''}>Bubble Sort</button>
        <button onClick={() => {dispatch(insertionSortArray())}} disabled={sorting} className={sortType === 'insertion' ? 'active' : ''}>Insertion Sort</button>
      </div>

      <div className="hamburger">
        <div className="line1" onClick={showNav}></div>
        <div className="line2" onClick={showNav}></div>
        <div className="line3" onClick={showNav}></div>
      </div>
    </div>
  )
}

export default Navbar
