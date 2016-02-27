import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import ItemCards from '../components/ItemCards';
import { remove, move, toggle } from '../actions/Card';
import { without } from 'ramda';
import { connect } from 'react-redux';

export default connect(
  (state, { filter }) => ({
    active: state.active,
    items: state.trending,
    cards: without([...state.removed, ...state.later], state.cards),
    contents: state.contents
  }),
  (dispatch) => ({
    onCardMove: (id, direction)=> dispatch(move(id, direction)),
    onCardLeave: (id, direction)=> dispatch(remove(id, direction)),
    onCardPress: (id, current)=> dispatch(toggle(id, current))
  })
)(ItemCards);
