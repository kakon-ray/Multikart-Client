import Product from "../../component/Product/Product";
import { GET_PRODUCTS, POST_PRODUCTS } from "../type";

const initialState = {
  Products: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
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
