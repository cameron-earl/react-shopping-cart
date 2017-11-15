import React from 'react';

const CartItems = ({cartItems2}) => {
  return (
    <div class="container">
      <h1>Items</h1>
      <div class="collection">
        <div class="collection-item row grey lighten-3">
          <div class="col s8">Product</div>
          <div class="col s2">Price</div>
          <div class="col s2">Quantity</div>
        </div>

        

      </div>
    </div>
  )
}

export default CartItems;
