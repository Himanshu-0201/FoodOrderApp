
import { useContext } from "react";
import MealContext from "../../store/MealContext";
import CartItem from "./CartItem/CartItem";
import Modal from "../UI/Modal";
import Classes from "./Cart.module.css";


const Cart = (props)=>{

    const cartCtx = useContext(MealContext);
    const { items } = cartCtx;

    const addItemHandler = (item)=>{
        cartCtx.addItem({...item, amount : 1});
    }

    const removeItemHandler = (id)=>{
        cartCtx.removeItem(id);
    }

    const cartItems = <ul className={Classes['cart-item']}>{
        items.map(item => {
            return (<CartItem 
                key = {item.id}
                name = {item.name}
                price = {item.price}
                amount = {item.amount}
                onAdd = {addItemHandler.bind(null, item)}
                onRemove = {removeItemHandler.bind(null, item.id)}
            />)
        })
    }</ul>

    const totalAmount = cartCtx.totalAmount.toFixed(2);
    

    return <Modal onCloseCart = {props.onCloseCart}>

        {cartItems}
        <div className={Classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={Classes.actions}>
            <button className={Classes['button--alt']}  onClick = {props.onCloseCart}>Close</button>
           {items.length > 0 && <button className={Classes.button}>Order</button>}
        </div>

    </Modal>
}

export default Cart;