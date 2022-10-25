const INITIAL_STATE = {
  imgURL: "",
};

function dataImgReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOADIMG": {
      return {
        ...state,
        imgURL: action.payload,
      };
    }
  }

  return state;
}
export default dataImgReducer;

// one ne peut pas faire l'asynchrone directement dans le reducer car appel commence et retourne nouveau state, on n'aura pas le temps de recevoir nos données donc ça renverra des undefined
// on va pouvoir exécuter getCatImg qui va pouvoir nous retourner des chose de manière asynchrone puis on envoie un nouveau dispatch
export const getCatImg = () => dispatch => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "LOADIMG",
        payload: data[0].url,
      });
      
    });
    
};
