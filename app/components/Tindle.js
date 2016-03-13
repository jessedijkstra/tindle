import React, { TouchableWithoutFeedback, Text, View, Component } from 'react-native';

import ItemCardsContainer from '../containers/ItemCards';
import Content from './Content';
import NavigationBar from 'react-native-navbar';

const NavigationItem = ({ title, count, onPress })=> (
  <TouchableWithoutFeedback onPress={onPress}>
    <Text style={{ color: '#fff', fontWeight: 'bold', lineHeight: 8, margin: 0, padding: 10 }}>{`${title} (${count})`}</Text>
  </TouchableWithoutFeedback>
);

export default ({ latest, pinned, removed, onNavigateToNew, onNavigateToPinned, onNavigateToRemoved }) => (
  <View style={{ flex: 1, backgroundColor: '#eee' }}>
    <NavigationBar
      tintColor="#FF6255"
      title={<NavigationItem title="Latest" count={latest} onPress={onNavigateToNew} />}
      rightButton={<NavigationItem title="Pinned" count={pinned} onPress={onNavigateToPinned} />}
      leftButton={<NavigationItem title="Removed" count={removed} onPress={onNavigateToRemoved} />}
    />
    <ItemCardsContainer />
  </View>
);
