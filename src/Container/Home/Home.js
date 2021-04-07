import React, { useEffect } from "react";
import getPosts from "../../Store/Actions/PostActions";
import { connect } from "react-redux";
import getHome from "../../Store/Actions/HomeActions";
import { useDispatch } from "react-redux";

const Home = ({ getPostsCall, getHomeCall, home }) => {
  useEffect(() => {
    // getPostsCall();
    // getHomeCall();
    reduxPostcall();
    reduxHomeCall();
  }, []);

  const dispatch = useDispatch();
  const reduxPostcall = () => dispatch(getPosts());
  const reduxHomeCall = () => dispatch(getHome());

  console.log("home.........", home && home.home);

  return <div>Welcome to Home Page</div>;
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
    home: state.home
  };
};

// const mapDispatchToProps = dispatch => ({
//   getPostsCall: () => dispatch(getPosts()),
//   getHomeCall: () => dispatch(getHome())
// });

export default connect(mapStateToProps)(Home);
