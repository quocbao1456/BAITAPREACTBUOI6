import { createStore, combineReducers } from "redux";
import seatReducer from "./seatReducer";

const rootReducer = combineReducers({
  booking: seatReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
