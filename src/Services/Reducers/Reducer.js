//export const ADD_TO_CART="ADD_TO_CART";
import { ADD_TO_CART,REMOVE_TO_CART } from "../Contstants";
const initialState={
    cartData:[]
}

export default function cartItems(state=[],action)
{
    switch(action.type)
    {
        case ADD_TO_CART:
            console.log("Reducer",action)
            return [
                ...state,
            {cartData: action.data}
            ]
        case REMOVE_TO_CART:
            state.pop();
            return [
                ...state,
            ]

            break;
            default:
                return state
    }
}