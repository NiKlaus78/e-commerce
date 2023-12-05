import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import cartPrice from "./cartPrice";

export default combineReducers({cart, products, cartPrice})