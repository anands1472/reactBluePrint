const PostReducer = (state = {}, action) => {
  switch (action.type) {
    case "posts":
      return {
        ...state,
        posts: action.data
      }
    default:
      return state;
  }
};
export default PostReducer;
