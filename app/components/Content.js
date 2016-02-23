import React, { Image, View } from 'react-native';
import NodeFactory from './NodeFactory';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');

function resizeImage (image) {
  return {
    ...image,
    width,
    height: Math.min((width / image.width) * image.height, 200)
  }
}

const ContentImage = ({ image })=> (
  <Image
    source={{ uri: image.href }}
    style={{
      width: image.width,
      height: image.height
    }}
  />
);

export default ({ body, image })=> (
  <View style={{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflow: 'hidden'
  }}>
    <View style={{
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 20,
      overflow: 'hidden'
    }}>
      {image ? <ContentImage image={resizeImage(image)} /> : null}
      <View style={{ padding: 20 }}>
        {body.map(NodeFactory)}
      </View>
    </View>
  </View>
);
