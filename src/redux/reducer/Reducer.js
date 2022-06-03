import Product from "../../component/Product/Product";
import { GET_PRODUCTS } from "../type";

const initialState = {
  Products: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
