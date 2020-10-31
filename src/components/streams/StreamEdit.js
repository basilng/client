import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StremEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        {/* here first {} is for indicating it contain some js function
        2nd {} is indicating that we are passing some js obejct */}
        <StreamForm
          initialValues={{ title: "EDIT ME", description: "Change Me too" }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(StremEdit);
