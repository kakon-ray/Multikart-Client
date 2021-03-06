import Product from "../../component/Product/Product";
import {
  GET_PRODUCTS,
  ADD_CARTLIST,
  UPDATE_CARTLIST,
  UPDATE_ALL_CARTLIST,
  UPDATE_QUANTITY,
  ADD_COMPARELIST,
  ADD_CHECKOUT,
  ADD_WISHLIST,
  GET_CHECKOUT,
  DELTE_CARTLIST,
  DELTE_COMPARELIST,
  DELTE_WISHLIST,
  DELTE_CHECKOUT,
} from "../type";

const initialState = {
  products: [],
  cartitem: [],
  checkOutValue: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_CARTLIST:
      return {
        ...state,
        postSuccess: action.payload,
      };
    case UPDATE_CARTLIST:
      return {
        ...state,
        updateCartListResPonce: action.payload,
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        updateQuantityRes: action.payload,
      };
    case UPDATE_ALL_CARTLIST:
      return {
        ...state,
        updateAllCartList: action.payload,
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
    case ADD_CHECKOUT:
      return {
        ...state,
        addCheckOutResponce: action.payload,
      };

    case GET_CHECKOUT:
      return {
        ...state,
        checkOutValue: action.payload,
      };
    case DELTE_CARTLIST:
      return {
        ...state,
        deleteCartListResponce: action.payload,
      };
    case DELTE_COMPARELIST:
      return {
        ...state,
        deleteCompareListResponce: action.payload,
      };
    case DELTE_WISHLIST:
      return {
        ...state,
        deleteWishListResponce: action.payload,
      };

    case DELTE_CHECKOUT:
      return {
        ...state,
        deleteCheckOutResponce: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
