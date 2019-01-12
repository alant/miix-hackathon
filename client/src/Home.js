import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        This is Home {this.props.storedData}
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    storedData: state.dappReducer.storedValue
  }
}

export default connect(mapStateToProps)(Home);
