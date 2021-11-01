import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { arrayReducer } from "./reducers/array.reducer";

const rootReducer = combineReducers({
  array: arrayReducer
})

const store = createStore(
  rootReducer, {},
  composeWithDevTools(applyMiddleware(thunk))
)

export default store