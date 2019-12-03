import React from 'react';

class Cart extends React.Component {

  render() {
  return (
    <div className="item-container">
      <h4>Shopping Cart</h4>

      <div className="cart">
          <div className="panel panel-default">
              <div className="panel-body">
                  {this.props.items.length > 0 && (
                      <div className="cart__body">
                          {/* {this.props.items.map(item => (
                              <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                          ))} */}
                      </div>
                  )}
                  {this.props.items.length === 0 && (
                      <div className="alert alert-info">Cart is empty</div>
                  )}
                  {/* <div className="cart__total">Total: {''}</div> */}
              </div>
          </div>
      </div>
    </div>
  );
}
}

export default Cart;
