import React, { useEffect, useState } from "react";
import getPosts from "../../Store/Actions/PostActions";
import { connect } from "react-redux";
import getHome from "../../Store/Actions/HomeActions";
import { useDispatch } from "react-redux";
import Main from "../../components/Main";
import getUsaData from "../../Store/Actions/usaDataActions";

const Home = ({ getPostsCall, getHomeCall, home, usaData, posts }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [displayRestaurants, setDisplayRestaurants] = useState([]);

  const usaDataInfo =
    usaData &&
    usaData.usaData &&
    usaData.usaData.data.length !== 0 &&
    usaData.usaData.data.length > 0 &&
    usaData.usaData.data;

  useEffect(() => {
    reduxPostcall();
    reduxHomeCall();
    reduxUsaData();
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    //setIsLoading(true);
    const response = await fetch("http://localhost:5000/usaData");
    const data = await response.json();
    //setIsLoading(false);
    const alphabetizedData = data.sort((a, b) => (a.name > b.name ? 1 : -1));
    setRestaurants(alphabetizedData);
    setDisplayRestaurants(alphabetizedData);
  };

  const dispatch = useDispatch();
  const reduxPostcall = () => dispatch(getPosts());
  const reduxHomeCall = () => dispatch(getHome());
  const reduxUsaData = () => dispatch(getUsaData());
  return (
    <div>
      <Main
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        reduxUsaData={reduxUsaData}
        displayRestaurants={displayRestaurants}
        setDisplayRestaurants={setDisplayRestaurants}
        usaDataInfo={usaDataInfo}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    home: state.home,
    usaData: state.usaData,
  };
};
export default connect(mapStateToProps)(Home);
