import React, { View } from 'react-native';
import ItemCard from '../components/ItemCard';
import { find, whereEq } from 'ramda';
import { manifest } from '../selectors/trending';
import { content } from '../selectors/contents';

export default ({ active, items, contents, onCardPress, onCardMove, onCardLeave })=> (
  <View style={{ flex: 1 }}>
    {items.map((item, index) => (
      <ItemCard
        key={item.id}
        id={item.id}
        active={active === item.id}
        item={item}
        content={content(item.id, contents)}
        index={items.length - index}
        onMove={onCardMove}
        onLeave={onCardLeave}
        onPress={onCardPress}
      />
    ))}
  </View>
);
