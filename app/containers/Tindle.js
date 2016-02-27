import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import Tindle from '../components/Tindle';
import { getTrending } from '../actions/Trending';
import { remove as removeCard } from '../actions/Card';
import { populate as populateStorage } from '../actions/Storage';
import { connect } from 'react-redux';

class TindleContainer extends Component {
  componentDidMount () {
    this.props.getTrending();
    this.props.populateStorage();
  }

  render () {
    return <Tindle {...this.props} />;
  }
}

export default connect(
  (state) => ({
    later: state.later.length,
    removed: state.removed.length,
    read: state.read.length,
  }),
  (dispatch) => ({
    getTrending: ()=> dispatch(getTrending()),
    populateStorage: ()=> dispatch(populateStorage())
  })
)(TindleContainer);
