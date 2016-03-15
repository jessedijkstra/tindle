import React, { View, PropTypes } from 'react-native';
import ItemCard from '../components/ItemCard';
import { content } from '../selectors/contents';

const ItemCards = ({ active, items, contents, onCardPress, onCardMove, onCardLeave }) => (
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

ItemCards.propTypes = {
  active: PropTypes.string,
  items: PropTypes.array,
  contents: PropTypes.array,
  onCardPress: PropTypes.func,
  onCardMove: PropTypes.func,
  onCardLeave: PropTypes.func
};

export default ItemCards;
