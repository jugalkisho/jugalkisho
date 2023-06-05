import { REMOVE_TO_CART } from "../Contstants";
import { ADD_TO_CART } from "../Contstants";
export const addToCart=(data)=>{
    console.log("action",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart=()=>{
    console.log("action")
    return{
        type:REMOVE_TO_CART,
        
    }
}