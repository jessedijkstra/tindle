import React, { View } from 'react-native';
import ItemCard from '../components/ItemCard';
import { find, whereEq } from 'ramda';
import { manifest } from '../selectors/trending';
import { content } from '../selectors/contents';

export default ({ items, contents, cards, onCardPress, onCardMove, onCardLeave })=> (
  <View style={{ flex: 1 }}>
    {cards.map((card, index) => (
      <ItemCard
        key={card.id}
        item={manifest(card.id, items)}
        content={content(card.id, contents)}
        card={card}
        index={cards.length - index}
        active={card.active}
        onMove={onCardMove}
        onLeave={onCardLeave}
        onPress={onCardPress}
      />
    ))}
  </View>
);
