import React, { useReducer } from "react";
import MealContext from "./MealContext";

const defaultCartState = {
    items : [],
    totalAmount : 0
}


const cartReducer = (state, action)=>{

    if(action.type === "ADD"){


        const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;

        const itemIndex = state.items.findIndex((item) => {
            return item.id === action.item.id;
        });


        let updatedItems;

        if(itemIndex > -1){
        // console.log(itemIndex);
            

            const existItem = state.items[itemIndex];
            
            const updatedExitItem = {
                ...existItem,
                amount : existItem.amount + action.item.amount
            }

            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedExitItem;


        }
        else{

            updatedItems = state.items.concat(action.item);

        }


        return {items : updatedItems, totalAmount : updatedTotalAmount};
    }


    if(action.type === "REMOVE"){

        const itemIndex = state.items.findIndex(item => item.id === action.id);
        const existItem = state.items[itemIndex];

        const updatedTotalAmount = state.totalAmount - existItem.price;
        let updatedItems;

        if(existItem.amount === 1){
            updatedItems = state.items.filter( item => item.id !== action.id);
        }
        else{
            const updatedExitItem = {
                ...existItem,
                amount : existItem.amount - 1
            }

            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedExitItem;
        }

        return {items : updatedItems, totalAmount : updatedTotalAmount};

    }

 
    return defaultCartState;
}

const MealContextProvider = (props)=>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = (item)=>{
        // console.log(item);
        dispatchCartAction({type : "ADD", item : item});
    }

    const removeItemHandler = (id)=>{

        dispatchCartAction({type : "REMOVE", id : id});

    }

    return <MealContext.Provider value={{
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemHandler,
        removeItem : removeItemHandler
    }}>
        {props.children}
    </MealContext.Provider>
}

export default MealContextProvider;