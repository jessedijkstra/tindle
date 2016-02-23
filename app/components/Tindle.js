import React, { View, Component } from 'react-native';

import ItemCardsContainer from '../containers/ItemCards';
import Content from './Content';
import NavigationBar from 'react-native-navbar';

export default class Tindle extends Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#eee' }}>
        <NavigationBar
          tintColor="#FF6255"
          title={{
            title: `Read (${this.props.read})`,
            tintColor: 'white'
          }}
          rightButton={{
            title: `Later (${this.props.later})`, tintColor: 'white',
            handler: ()=> console.warn('Implement Read Later Navigation')
          }}
          leftButton={{
            title: `Deleted (${this.props.deleted})`, tintColor: 'white',
            handler: ()=> console.warn('Implement Deleted Navigation')
          }}
        />
      <ItemCardsContainer />
      </View>
    );
  }
}
