import axios from 'axios';

const getHome = () => 
   (dispatch) => {
    axios.get("http://localhost:3200/dummySampleCall")
    .then(res => {
      console.log(res);
      dispatch({
        type: "home",
        data:res.data
      }); 
    });
  
};
export default getHome;
