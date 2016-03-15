import React, { PropTypes, Image, View } from 'react-native';
import NodesFactory from './NodesFactory';
import Dimensions from 'Dimensions';

const { width } = Dimensions.get('window');

const resizeImage = (image) => ({
  ...image,
  width,
  height: Math.min((width / image.width) * image.height, 200)
});


const ContentImage = ({ image }) => (
  <Image
    source={{ uri: image.href }}
    style={{
      width: image.width,
      height: image.height
    }}
  />
);

ContentImage.propTypes = {
  image: PropTypes.object
};

const Content = ({ body, image }) => (
  <View
    style={{
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    }}
  >
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 20,
        overflow: 'hidden'
      }}
    >
      {image ? <ContentImage image={resizeImage(image)} /> : null}
      <View style={{ padding: 20 }}>
        {body.map(NodesFactory)}
      </View>
    </View>
  </View>
);

Content.propTypes = {
  body: PropTypes.array,
  image: PropTypes.object
};

export default Content;
