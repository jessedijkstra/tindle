import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import ItemCards from '../components/ItemCards';
import { remove, move, toggle } from '../actions/Card';
import { connect } from 'react-redux';
import { filter as filterCards } from '../selectors/cards';

export default connect(
  (state, { filter }) => ({
    items: state.trending,
    cards: filterCards(filter || 'active', state.cards),
    contents: state.contents
  }),
  (dispatch) => ({
    onCardMove: (id, direction)=> dispatch(move(id, direction)),
    onCardLeave: (id, direction)=> dispatch(remove(id, direction)),
    onCardPress: (id, current)=> dispatch(toggle(id, current))
  })
)(ItemCards);
