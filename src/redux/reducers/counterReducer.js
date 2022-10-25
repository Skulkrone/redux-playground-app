const INITIAL_STATE = {
  count: 50,
};

function CounterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCR": {
      // ne jamais modifier directement le state, tjs faire une copie puis on retourne la copie avec ce qui a été modifié
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "DECR": {
      // ne jamais modifier directement le state, tjs faire une copie puis on retourne la copie avec ce qui a été modifié
      return {
        ...state,
        count: state.count - 1,
      };
    }
  }

  return state;
}
export default CounterReducer;
