
import React, { useState } from "react";

import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import MealContextProvider from "./store/MealContextProvider";


function App() {

  const [shownCart, setShownCart] = useState(false);

  const shownCartHandler = ()=>{
    setShownCart(true);
  }

  const closeCartHandler = ()=>{
    setShownCart(false);
  }

  return (
    <MealContextProvider>
      {shownCart && <Cart  onCloseCart = {closeCartHandler}/>}
      <Header  onShowCart = {shownCartHandler} />
      <Meals />
    </MealContextProvider>
  );
}

export default App;
