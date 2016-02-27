import React, { Component, AppState } from 'react-native';
import { bindActionCreators } from 'redux';
import Tindle from '../components/Tindle';
import { getTrending } from '../actions/Trending';
import { remove as removeCard } from '../actions/Card';
import { populate as populateStorage } from '../actions/Storage';
import { connect } from 'react-redux';

class TindleContainer extends Component {
  componentDidMount () {
    this.props.populateStorage();
    this.props.getTrending();

    AppState.addEventListener('change', (state)=> {
      if (state === 'active') {
        this.props.getTrending();
      }
    });
  }

  render () {
    return <Tindle {...this.props} />;
  }
}

export default connect(
  (state) => ({
    later: state.laterCards.length,
    removed: state.removedCards.length,
    read: state.readCards.length,
  }),
  (dispatch) => ({
    getTrending: ()=> dispatch(getTrending()),
    populateStorage: ()=> dispatch(populateStorage())
  })
)(TindleContainer);
