import { cartReducer } from "./reducers/cartReducer";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  cart: cartReducer,
});
