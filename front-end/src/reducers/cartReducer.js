
import { ADD_TO_CART, REMOVE_FROM_CART, SHIPPING_INFO } from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [], shippingInfo : {}}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer called");
            const item = action.payload;

            const itemPresent = state.cartItems.find((it) => it.pid === item.pid)
            if (itemPresent) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((it) => it.pid === itemPresent.pid ? item : it)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.pid !== action.payload)
            }
        case SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }
        default:
            return state;
    }
}