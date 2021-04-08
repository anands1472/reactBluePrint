const UsaDataReducer = (state = {}, action) => {
    switch (action.type) {
      case "usaData": {
        return {
          ...state,
          usaData: action.data
        };
      }
      default : 
  return state
    }
  };
  export default UsaDataReducer;
  
  