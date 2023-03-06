
import React from "react";

const MealContext = React.createContext({
    items : [],
    totalAmount : 0,
    addItem : (item)=>{},
    removeItem : (id) => {}
})

export default MealContext;