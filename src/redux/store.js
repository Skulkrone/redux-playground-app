import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./reducers/counterReducer";
import addCartReducer from "./reducers/addCartReducer";
import dataImgReducer from "./reducers/dataImgReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counterReducer,
  addCartReducer,
  dataImgReducer,
});
// Dans createStore, il faut un reducer qui va être une fonction qui va être appelée à chaque fois qu'on va avoir envie de modifier notre state

// Les middleware vont se trigger/déclencher quand on va dispatch quelque chose
// middleware (au milieu) c'est entre l'exécution du dispatch et son envoie que ça se situe
// curryfication = plusieurs fonctions qui se retournent à la suite et ça sert à avoir accès à toutes les fonctions dans le corps de fonctions
// store = notre store avec 2 méthodes : dispatch et getState (qui donne les valeurs des state dans nos reducers vant le dispatch)
// next = fonction appelée travail fini dans le middleware qui va continuer le chemin jusqu'au dispatch du reducer
// action = action de notre dispatch
// const customMiddleware = store => next => action => {
//   // console.log(action);
//   const actionModif = {
//     type: "ADDCART",
//     payload: 789,
//   }
//   next(actionModif)
// }

// Avec thunk, on va pouvoir passer des fonctions de manière asynchrone qui vont s'exécuter et on va pouvoir recevoir des données puis envoyer ces données au store

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
