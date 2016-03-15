import React, { PropTypes, TouchableWithoutFeedback, Text, View } from 'react-native';

import ItemCardsContainer from '../containers/ItemCards';
import AuthorizedContainer from '../containers/AuthorizedContainer';
import AuthenticationContainer from '../containers/AuthenticationContainer';
import NavigationBar from 'react-native-navbar';

const NavigationItem = ({ title, count, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Text style={{ color: '#fff', fontWeight: 'bold', lineHeight: 8, margin: 0, padding: 10 }}>
      {`${title} (${count})`}
    </Text>
  </TouchableWithoutFeedback>
);

NavigationItem.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  onPress: PropTypes.func
};

const Tindle = ({
  latest, pinned, removed,
  onNavigateToNew, onNavigateToPinned, onNavigateToRemoved
}) => (
  <View style={{ flex: 1, backgroundColor: '#eee' }}>
    <NavigationBar
      tintColor="#FF6255"
      title={<NavigationItem title="Latest" count={latest} onPress={onNavigateToNew} />}
      rightButton={<NavigationItem title="Pinned" count={pinned} onPress={onNavigateToPinned} />}
      leftButton={<NavigationItem title="Removed" count={removed} onPress={onNavigateToRemoved} />}
    />
    <AuthenticationContainer />
    <AuthorizedContainer>
      <ItemCardsContainer />
    </AuthorizedContainer>
  </View>
);

Tindle.propTypes = {
  latest: PropTypes.number,
  pinned: PropTypes.number,
  removed: PropTypes.number,
  onNavigateToNew: PropTypes.func,
  onNavigateToPinned: PropTypes.func,
  onNavigateToRemoved: PropTypes.func
};

export default Tindle;
