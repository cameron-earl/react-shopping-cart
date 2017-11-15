import React from 'react';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
const ShoppingCart = ({legalStuff, cartItems}) => {
  return (
    <div className="App">
      <CartHeader />
      <CartItems cartItems2={cartItems}/>
      <CartFooter legalStuff2={legalStuff}/>
    </div>
  )
}
export default ShoppingCart;
