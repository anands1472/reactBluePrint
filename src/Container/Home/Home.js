import React, { useEffect } from "react";
import getPosts from "../../Store/Actions/PostActions";
import { connect } from "react-redux";
import getHome from "../../Store/Actions/HomeActions";
import { useDispatch } from "react-redux";

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

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

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    home: state.home,
  };
};
export default connect(mapStateToProps)(Home);
