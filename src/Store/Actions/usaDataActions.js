import axios from 'axios';

const getUsaData = () => 
   (dispatch) => {
    axios.get("http://localhost:3200/api/usaDataCall")
    .then(res => {
      console.log(res);
      dispatch({
        type: "usaData",
        data:res.data
      });
    });
  
};
export default getUsaData;
