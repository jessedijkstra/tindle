import Tindle from '../components/Tindle';
import { setFilter } from '../actions/Navigation';
import { connect } from 'react-redux';

export default connect(
  (state) => ({
    pinned: state.cards.pinned.length,
    removed: state.cards.removed.length,
    latest: state.cards.latest.length
  }),
  (dispatch) => ({
    onNavigateToNew: () => dispatch(setFilter('latest')),
    onNavigateToRemoved: () => dispatch(setFilter('removed')),
    onNavigateToPinned: () => dispatch(setFilter('pinned'))
  })
)(Tindle);
