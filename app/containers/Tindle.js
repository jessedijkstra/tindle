import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import Tindle from '../components/Tindle';
import { getTrending } from '../actions/Trending';
import { remove as removeCard } from '../actions/Card';
import { connect } from 'react-redux';
import { filter as filterCards } from '../selectors/cards';

class TindleContainer extends Component {
  componentDidMount () {
    this.props.getTrending();
  }

  render () {
    return <Tindle {...this.props} />;
  }
}

export default connect(
  (state) => ({
    later: filterCards('readLater', state.cards).length,
    deleted: filterCards('remove', state.cards).length,
    read: filterCards('read', state.cards).length,
  }),
  (dispatch) => ({ getTrending: ()=> dispatch(getTrending()) })
)(TindleContainer);
