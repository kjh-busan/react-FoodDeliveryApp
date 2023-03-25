import CartContext from "./cart-context";

const CartProvider = (props) => {
  const cartAddHandler = (item) => {};
  const cartRemoveHandler = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: cartAddHandler,
    removeItem: cartRemoveHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
