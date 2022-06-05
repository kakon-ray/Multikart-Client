import Product from "../../component/Product/Product";
import {
  GET_PRODUCTS,
  ADD_CARTLIST,
  GET_CARTLIST,
  ADD_WISHLIST,
  GET_WISHLIST,
  ADD_COMPARELIST,
  GET_COMPARELIST,
} from "../type";

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
    case GET_CARTLIST:
      return {
        ...state,
        cartitem: action.payload,
      };
    case ADD_CARTLIST:
      return {
        ...state,
        postSuccess: action.payload,
      };
    case ADD_WISHLIST:
      return {
        ...state,
        addWishListResponce: action.payload,
      };
    case ADD_COMPARELIST:
      return {
        ...state,
        addCompareListResponce: action.payload,
      };
    case GET_WISHLIST:
      return {
        ...state,
        wishlistITem: action.payload,
      };
    case GET_COMPARELIST:
      return {
        ...state,
        compareItem: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
