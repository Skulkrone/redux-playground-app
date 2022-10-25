import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatImg } from "../redux/reducers/dataImgReducer";

export default function Counter() {
  const [cartData, setCartData] = useState(0);
  // useSelector permet de nous connecter à notre store et d'utiliser le state directement
  // const count = useSelector((state) => state.count);
  // const cart = useSelector((state) => state.cart);

  // Avec combineReducer et useSelector :
  // création de nouveaux obejts et on peu créer du destructuring avec nos const
  const { cart, count, imgURL } = useSelector((state) => ({
    ...state.addCartReducer,
    ...state.counterReducer,
    ...state.dataImgReducer,
  }));

  // la méthode useDispatch va retourner une fonction qu'on peut utiliser, la fonction dispatch
  const dispatch = useDispatch();

  const incrFunc = () => {
    dispatch({
      type: "INCR",
    });
  };
  const decrFunc = () => {
    dispatch({
      type: "DECR",
    });
  };

  const addToCartFunc = () => {
    dispatch({
      type: "ADDCART",
      payload: cartData,
    });
  };

  useEffect(() => {
    dispatch(getCatImg());
  }, []);

  return (
    <div>
      {/* Reducer Counter */}
      {/* <h1>Les données : {count}</h1>
      <button onClick={decrFunc}>-1</button>
      <button onClick={incrFunc}>+1</button> */}

      {/* Reducer Add Cart */}
      <h1>
        Votre panier : {cart} {count}
      </h1>
      <input
        value={cartData}
        onInput={(e) => setCartData(e.target.value)}
        type="number"
      />
      <br />
      <button onClick={addToCartFunc}>Ajouter au panier</button>
      <br />
      {imgURL && <img style={{ width: "300px" }} src={imgURL} />}
    </div>
  );
}
