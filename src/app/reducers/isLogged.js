
const loggedAanonnuNokkeda = {
    isLogged: false,
  };
  
  const loggedAanonnuNokkedaReducer = (state = loggedAanonnuNokkeda, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isLogged: true };
      case 'LOGOUT':
        return { ...state, isLogged: false };
      default:
        return state;
    }
  };
  
  export default loggedAanonnuNokkedaReducer;
  