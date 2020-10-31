import React from "react";
import { connect } from "react-redux";

const StremEdit = (props) => {
  console.log(props);
  return <div>StremEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps)(StremEdit);
