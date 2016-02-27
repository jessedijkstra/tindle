import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const fontSize = {
  '-2': 8,
  '-1': 13,
  '0': 21,
  '1': 34,
  '2': 55
}

const Nodes = {
  hl1: ({ node })=> <Text style={{ fontSize: fontSize['1'], marginBottom: 20 }}>{node.content}</Text>,
  intro: ({ node })=> <Text style={{ fontSize: fontSize['0'], marginBottom: 20 }}>{node.content}</Text>,
  byline: ({ node })=> <Text style={{ fontSize: fontSize['0'], marginBottom: 10, fontWeight: 'bold' }}>{node.content}</Text>,
  default: ({ node })=> <Text style={{ fontSize: fontSize['-1'], marginBottom: 10 }}>{node.content}</Text>
}

export default (node, i)=> {
  const Element = React.createFactory(Nodes[node.type] || Nodes.default);

  return <Element node={node} key={i} />;
}
