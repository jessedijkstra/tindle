import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const Nodes = {
  hl1: ({ node })=> <Text style={{ fontSize: 30, marginBottom: 20 }}>{node.content}</Text>,
  intro: ({ node })=> <Text style={{ fontSize: 20, marginBottom: 20 }}>{node.content}</Text>,
  byline: ({ node })=> <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>{node.content}</Text>,
  default: ({ node })=> <Text style={{ marginBottom: 10 }}>{node.content}</Text>
}

export default (node, i)=> {
  const Element = React.createFactory(Nodes[node.type] || Nodes.default);

  return <Element node={node} key={i} />;
}
