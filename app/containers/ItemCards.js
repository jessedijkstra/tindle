import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import ItemCards from '../components/ItemCards';
import { remove, move, toggle } from '../actions/Card';
import { connect } from 'react-redux';
import { manifests } from '../selectors/trending';

export default connect(
  (state) => ({
    active: state.cards.active,
    contents: state.contents,
    items: manifests(state.trending).filter((manifest)=> state.cards[state.filter].includes(manifest.id))
  }),
  (dispatch) => ({
    onCardMove: (id, direction)=> dispatch(move(id, direction)),
    onCardLeave: (id, direction)=> dispatch(remove(id, direction)),
    onCardPress: (id, current)=> dispatch(toggle(id, current))
  })
)(ItemCards);
