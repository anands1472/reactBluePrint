const HomeReducer = (state = {}, action) => {
  switch (action.type) {
    case "home": {
      return {
        ...state,
        home: action.data
      };
    }
    default : 
return state
  }
};
export default HomeReducer;

