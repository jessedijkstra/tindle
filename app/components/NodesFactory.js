import React, { Text, PropTypes } from 'react-native';
import HTMLView from 'react-native-htmlview';

const Styles = {
  hl1: {
    fontSize: 30,
    marginBottom: 20
  },
  kicker: {
    fontSize: 20,
    marginBottom: 20
  },
  intro: {
    fontSize: 20,
    marginBottom: 10,
    fontStyle: 'italic'
  },
  byline: {
    fontWeight: 'bold',
    marginBottom: 20
  },
  default: {
    marginBottom: 20
  }
};

const NodesFactory = ({ type, content }, index) => {
  const style = Styles[type] || Styles.default;

  return <Text style={style} key={index}><HTMLView value={content} /></Text>;
};

NodesFactory.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string
};

export default NodesFactory;
