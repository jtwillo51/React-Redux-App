import React from "react";
import { connect } from "react-redux";

import getPics from "../actions/actions";

const PicList = ({ getPics, pics, isFetching, error }) => {
  if (error !== "") {
    return (
      <div className="errorDiv">
        <h2>{error}</h2>
        <button onClick={getPics}>Get More Pictures!</button>
      </div>
    );
  }
  if (isFetching) {
    return <h2>Getting More Pics!</h2>;
  } else {
    return (
      <div className="picList">
        <h2>Dogs!</h2>

        <div className="pics">
          {<img src={pics} className="pic" alt={pics} />}
        </div>
        <button onClick={getPics}>Next Picture!</button>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    pics: state.pics,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getPics })(PicList);
