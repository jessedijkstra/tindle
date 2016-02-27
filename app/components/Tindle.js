import React, { TouchableWithoutFeedback, Text, View, Component } from 'react-native';

import ItemCardsContainer from '../containers/ItemCards';
import Content from './Content';
import NavigationBar from 'react-native-navbar';

const NavigationItem = ({ title, count, onPress })=> (
  <TouchableWithoutFeedback onPress={onPress}>
    <Text style={{ color: '#fff', fontWeight: 'bold', lineHeight: 8, margin: 0, padding: 10 }}>{`${title} (${count})`}</Text>
  </TouchableWithoutFeedback>
);

export default class Tindle extends Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#eee' }}>
        <NavigationBar
          tintColor="#FF6255"
          title={<NavigationItem title="New" count={this.props.new} onPress={this.props.onNavigateToNew} />}
          rightButton={<NavigationItem title="Pinned" count={this.props.pinned} onPress={this.props.onNavigateToPinned} />}
          leftButton={<NavigationItem title="Removed" count={this.props.removed} onPress={this.props.onNavigateToRemoved} />}
        />
      <ItemCardsContainer />
      </View>
    );
  }
}
