import React, { View } from 'react-native';
import ItemCard from '../components/ItemCard';
import { find, whereEq } from 'ramda';
import { manifest } from '../selectors/trending';
import { content } from '../selectors/contents';

export default ({ active, items, contents, cards, onCardPress, onCardMove, onCardLeave })=> (
  <View style={{ flex: 1 }}>
    {cards.map((id, index) => (
      <ItemCard
        key={id}
        id={id}
        active={active === id}
        item={manifest(id, items)}
        content={content(id, contents)}
        index={cards.length - index}
        onMove={onCardMove}
        onLeave={onCardLeave}
        onPress={onCardPress}
      />
    ))}
  </View>
);
