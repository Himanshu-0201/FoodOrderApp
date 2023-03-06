
import React, { useRef } from "react";
import classes from "./Input.module.css";

const Input =  React.forwardRef((props, ref) => {


    return <div className={classes.input}>
        <label htmlFor="amount" >Amount</label>
        <input 
            id="amount"
            type="number" 
            max="5" 
            min = "1" 
            defaultValue="1"
            ref = {ref}
        />
    </div>
})

export default Input;