import React, { useContext } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";
// import MealContext from "../../store/MealContext";

const Header = (props)=>{

    // const MealContextCtx = useContext(MealContext);


    return <>

        <header className={classes.header}>
            <h1>React meals</h1>
            <HeaderCartButton  onShowCart = {props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src = {mealsImage}  alt = "meals"/>
        </div>
    </>
}

export default Header;