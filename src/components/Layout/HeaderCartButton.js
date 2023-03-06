import CartIcon from "../Icons/CartIcon";
import classes from "./HeaderCartButton.module.css";
import MealContext from "../../store/MealContext";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props)=>{

    const cartCtx = useContext(MealContext);
    const {items} = cartCtx;

    const [isBtnHeighLighted, setIsBtnHeighLighted] = useState(false);

    const numberOfItemsInCart = items.reduce( (currNum, item) =>  {
        return currNum + item.amount;
    }, 0)

    const btnClass = `${classes.button} ${isBtnHeighLighted ? classes.bump : ''}`

    useEffect(()=>{

        if(items.length === 0) return;

        setIsBtnHeighLighted(true);

        const timer = setTimeout(()=>{
            setIsBtnHeighLighted(false);
        },300)

        return ()=>{
            clearTimeout(timer);
        }

    }, [items])

    return <button className={btnClass}

    onClick = {props.onShowCart}
    >
        <span className={classes.icon}> 
            <CartIcon />
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}> {numberOfItemsInCart} </span>
    </button>
}


export default HeaderCartButton;