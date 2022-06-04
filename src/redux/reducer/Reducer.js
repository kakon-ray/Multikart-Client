import Product from "../../component/Product/Product";
import { GET_PRODUCTS, POST_PRODUCTS, CART_LIST } from "../type";

const initialState = {
  products: [],
  cartitem: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case CART_LIST:
      return {
        ...state,
        cartitem: action.payload,
      };
    case POST_PRODUCTS:
      return {
        ...state,
        postSuccess: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
