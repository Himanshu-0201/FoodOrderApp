
import { createRef, useContext, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import MealContext from "../../../store/MealContext";


const MealItemForm = (props) => {

    const inputValue = createRef();
    const mealCtx = useContext(MealContext);
    const [isAmountValid, setIsAmountValid] = useState(true);


    const addItemHandler = (event)=>{

        event.preventDefault();


        const amount = inputValue.current.value;

        if(amount.trim() === "0"  || ((+amount) < 1 && (+amount) > 5)){
            setIsAmountValid(false);
            return ;
        }

        setIsAmountValid(true);

        mealCtx.addItem({
            id : props.id,
            name : props.name,
            price : props.price,
            amount : (+amount)
        })
    }



    return <form className={classes.form} onSubmit={addItemHandler}>
        <Input ref = {inputValue} />
        <button>+Add</button>
        {!isAmountValid && <p>Please enter valid amount (1-5)</p>}
    </form>
}

export default MealItemForm;