import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import ItemCards from '../components/ItemCards';
import { remove, move, toggle } from '../actions/Card';
import { without } from '../selectors/cards';
import { connect } from 'react-redux';

export default connect(
  (state) => ({
    active: state.activeCard,
    items: state.trending,
    cards: state[state.filter],
    contents: state.contents
  }),
  (dispatch) => ({
    onCardMove: (id, direction)=> dispatch(move(id, direction)),
    onCardLeave: (id, direction)=> dispatch(remove(id, direction)),
    onCardPress: (id, current)=> dispatch(toggle(id, current))
  })
)(ItemCards);
