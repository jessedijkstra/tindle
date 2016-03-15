import React, { PropTypes, AppState, Component } from 'react-native';
import { getTrending } from '../actions/Trending';
import ItemCards from '../components/ItemCards';
import { remove, move, toggle } from '../actions/Card';
import { connect } from 'react-redux';
import { manifests } from '../selectors/trending';

class ItemCardsContainer extends Component {
  static propTypes = {
    onActivate: PropTypes.func
  }

  componentDidMount() {
    this.props.onActivate();

    AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        this.props.onActivate();
      }
    });
  }

  render() {
    return (<ItemCards {...this.props} />);
  }
}

export default connect(
  (state) => ({
    active: state.cards.active,
    contents: state.contents,
    items: manifests(state.trending)
      .filter((manifest) => state.cards[state.filter].includes(manifest.id))
  }),
  (dispatch) => ({
    onActivate: () => dispatch(getTrending()),
    onCardMove: (id, direction) => dispatch(move(id, direction)),
    onCardLeave: (id, direction) => dispatch(remove(id, direction)),
    onCardPress: (id, current) => dispatch(toggle(id, current))
  })
)(ItemCardsContainer);
