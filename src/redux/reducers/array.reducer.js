import { BUBBLE_SORT, GET_SLIDER_VALUE, INSERTION_SORT, MERGE_SORT, QUICK_SORT, SELECTION_SORT, SET_ANIMATION_SPEED, SET_ARRAY_NUMS, SET_BAR_WIDTH_MARGIN, SORT_END} from "../actionTypes"

export const arrayReducer = (state={
  sorting: false,
  arraySize: 200,
  arrayNums: [],
  numberOfBars: 200,
  animationSpeed: 20,
  widthMargin: {},
  primaryColor: 'rgba(169, 92, 232, 0.8)',
  secondaryColor: 'red',
  sortedColor: 'lightgreen',
  sortType: ''
}, action) => {
  const {payload, type} = action

  switch(type) {
    case GET_SLIDER_VALUE:
      return {
        ...state,
        arraySize: payload,
        numberOfBars: payload
      }
    case SET_ARRAY_NUMS:
      return {
        ...state,
        arrayNums: payload
      }
    case SET_ANIMATION_SPEED:
      return {
        ...state,
        animationSpeed: payload
      }
    case SET_BAR_WIDTH_MARGIN:
      return {
        ...state,
        widthMargin: payload
      }
    case MERGE_SORT:
      return {
        ...state,
        sortType: 'merge',
        sorting: true
      }
    case BUBBLE_SORT: 
      return {
        ...state,
        sorting: true,
        sortType: 'bubble'
      }
    case QUICK_SORT: 
      return {
        ...state,
        sorting: true,
        sortType: 'quick'
      }
    case SELECTION_SORT: 
      return {
        ...state,
        sorting: true,
        sortType: 'selection'
      }
    case INSERTION_SORT: 
      return {
        ...state,
        sorting: true,
        sortType: 'insertion'
      }
    case SORT_END: 
      return {
        ...state,
        sorting: false,
        sortType: '',
      }
    default: 
      return state
  }
}