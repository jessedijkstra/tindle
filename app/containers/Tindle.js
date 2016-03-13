import React, { Component, AppState } from 'react-native';
import { bindActionCreators } from 'redux';
import Tindle from '../components/Tindle';
import { getTrending } from '../actions/Trending';
import { setFilter } from '../actions/Navigation';
import { remove as removeCard } from '../actions/Card';
import { connect } from 'react-redux';

class TindleContainer extends Component {
  componentDidMount () {
    this.props.onActivate();

    AppState.addEventListener('change', (state)=> {
      if (state === 'active') {
        this.props.onActivate();
      }
    });
  }

  render () {
    return <Tindle {...this.props} />;
  }
}

export default connect(
  (state) => ({
    pinned: state.cards.pinned.length,
    removed: state.cards.removed.length,
    latest: state.cards.latest.length,
  }),
  (dispatch) => ({
    onActivate: ()=> dispatch(getTrending()),
    onNavigateToNew: ()=> dispatch(setFilter('latest')),
    onNavigateToRemoved: ()=> dispatch(setFilter('removed')),
    onNavigateToPinned: ()=> dispatch(setFilter('pinned'))
  })
)(TindleContainer);
