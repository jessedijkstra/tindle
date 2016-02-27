import React, { Component, AppState } from 'react-native';
import { bindActionCreators } from 'redux';
import Tindle from '../components/Tindle';
import { getTrending } from '../actions/Trending';
import { setFilter } from '../actions/Navigation';
import { remove as removeCard } from '../actions/Card';
import { populate as populateStorage } from '../actions/Storage';
import { connect } from 'react-redux';

class TindleContainer extends Component {
  componentDidMount () {
    this.props.onMount();

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
    pinned: state.pinnedCards.length,
    removed: state.removedCards.length,
    new: state.newCards.length,
  }),
  (dispatch) => ({
    onMount: ()=> dispatch(getTrending()) && dispatch(populateStorage()),
    onActivate: ()=> dispatch(getTrending()),
    onNavigateToNew: ()=> dispatch(setFilter('newCards')),
    onNavigateToRemoved: ()=> dispatch(setFilter('removedCards')),
    onNavigateToPinned: ()=> dispatch(setFilter('pinnedCards'))
  })
)(TindleContainer);
