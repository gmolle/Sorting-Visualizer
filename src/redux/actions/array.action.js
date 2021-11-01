import { GET_SLIDER_VALUE, SET_ANIMATION_SPEED, SET_ARRAY_NUMS, SET_BAR_WIDTH_MARGIN } from "../actionTypes"

export const setArraySize = (e) => (dispatch, getState) => {
  try {
    dispatch({
      type: GET_SLIDER_VALUE,
      payload: parseInt(e.target.value)
    })
  } catch (error) {
    console.log(error)
  }
}

export const setAnimationSpeed = (e) => dispatch => {
  try {
    dispatch({
      type: SET_ANIMATION_SPEED,
      payload: 121 - parseInt(e.target.value)
    })
  } catch (error) {
    console.log(error)
  }
}

export const setArrayNums = () => (dispatch, getState) => {
  try {
    const randomIntFromInterval = (min, max) => { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const array = []
    for(let i = 0; i < getState().array.numberOfBars; i++) {
      array.push(randomIntFromInterval(5, 730))
    }

    const arrayBars = document.getElementsByClassName('array-bar');

    for(let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.background = getState().array.primaryColor
    }
    
    dispatch({
      type: SET_ARRAY_NUMS,
      payload: array
    })
    
  } catch (error) {
    console.log(error)
  }
}

export const setBarWidthAndMargin = (sizeOfArray) => (dispatch, getState) => {
  try {
    const widthMargin = {}
    if(sizeOfArray === 10){
      widthMargin.width = '40px'
      widthMargin.margin = 10
    } else if (sizeOfArray > 10 && sizeOfArray <= 40) {
      widthMargin.width = '20px'
      widthMargin.margin = 4
    } else if (sizeOfArray > 40 && sizeOfArray <= 90) {
      widthMargin.width = '10px'
      widthMargin.margin = 2
    } else if (sizeOfArray > 90 && sizeOfArray <= 120) {
      widthMargin.width = '6px'
      widthMargin.margin = 1.75
    } else if (sizeOfArray > 120 && sizeOfArray <= 150) {
      widthMargin.width = '5px'
      widthMargin.margin = 1.5
    } else {
      widthMargin.width = '3px'
      widthMargin.margin = 1.25
    }

    dispatch({
      type: SET_BAR_WIDTH_MARGIN,
      payload: widthMargin
    })


  } catch (error) {
    console.log(error)
  }
}