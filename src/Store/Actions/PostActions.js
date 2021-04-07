import axios from 'axios';

const getPosts = () => 
   (dispatch) => {
    axios.get("http://localhost:3200/api/userDataCall")
    .then(res => {
      console.log(res);
      dispatch({
        type: "posts",
        data:res.data
      });
    });
  
};
export default getPosts;
