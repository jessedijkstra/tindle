import React, { ScrollView, View, TouchableWithoutFeedback, Animated, PanResponder, Componen } from 'react-native';
import clamp from 'clamp';
import { partial } from 'ramda';
import Dimensions from 'Dimensions';
import Easing from 'Easing';
const { height, width } = Dimensions.get('window');

const SWIPE_THRESHOLD = 40;

const style = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: 0,
  borderRadius: 2,
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOpacity: 0.15,
  shadowRadius: 3,
  shadowOffset: {
    height: 3,
    width: 0
  }
};

function getDirection(vx) {
  if (vx < 0) {
    return -1;
  }

  return 1;
}

const createPanResponder = (component, pan)=> PanResponder.create({
  onMoveShouldSetResponderCapture: () => !component.props.active,
  onMoveShouldSetPanResponderCapture: () => !component.props.active,
  onPanResponderGrant: () => {
    pan.setOffset({x: pan.x._value, y: pan.y._value});
    pan.setValue({x: 0, y: 0});
  },
  onPanResponderMove: Animated.event(
    [ null, {dx: pan.x, dy: pan.y} ],
    ()=> component.props.onMove(component.props.id, pan.x._value)
  ),
  onPanResponderRelease: (event, {vx, vy}) => {
    pan.flattenOffset();
    var velocity;

    // Hack to make onPress events work with touch drags
    if (Math.abs(pan.x._value) < 1) {
      console.warn('Make a better implementation for press detection combiend with swipe events by using timers or better native components');
      component.props.onPress(component.props.id, component.props.active);
      return;
    }

    if (Math.abs(pan.x._value) > SWIPE_THRESHOLD) {
      Animated.timing(pan, {
        duration: 100,
        toValue: { x: (width + 100) * getDirection(vx), y: vy},
        easing: Easing.out(Easing.ease),
      }).start(()=> component.props.onLeave(component.props.id, pan.x._value));
    } else {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        friction: 4
      }).start()
    }
  }
});

export default class Card extends React.Component {
  state = {
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(0.5)
  };

  componentWillMount () {
    this.panResponder = createPanResponder(
      this,
      this.state.pan
    );
  }

  componentDidMount () {
    this.scaleCard();
  }

  componentWillUpdate (nextProps) {
    if (!nextProps.active && this.props.active) {
      this.refs.scrollView.scrollTo(0);
    }
  }

  componentDidUpdate (prevProps) {
    this.scaleCard();
  }

  scaleCard () {
    const styleIndex = this.getStyleIndex();

    if (this.props.active) {
      Animated.timing(this.state.scale, {
        duration: 200,
        toValue: 1,
        easing: Easing.out(Easing.quad),
      }).start();

      return;
    }

    const factor = (styleIndex === 1 ? 10 : 15);

    Animated.spring(
      this.state.scale,
      { toValue: 1 - (styleIndex / factor), friction: 8 }
    ).start();
  }

  getAnimationStyle () {
    const { pan, scale } = this.state;
    const [translateX, translateY] = [pan.x, pan.y];
    const { index } = this.props;

    const rotate = pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ["-10deg", "0deg", "10deg"]
    });

    return {
      transform: [{ translateX }, { translateY }, { rotate }, { scale: scale }]
    };
  }

  getStyle () {
    const styleIndex = this.getStyleIndex();
    const offset = (styleIndex - 1) * 15;
    const shadowOpacity = this.getOpacity();

    return { ...style,
      top: offset,
      bottom: (this.props.active ? 0 : offset * -1),
      shadowOpacity
    }
  }

  getOpacity () {
    const styleIndex = this.getStyleIndex();
    const opacity = style.shadowOpacity;

    if (styleIndex === 1) {
      return opacity;
    }

    if (styleIndex < 3) {
      return opacity / styleIndex;
    }

    return 0;
  }

  getStyleIndex () {
    const { index } = this.props;

    return Math.min(index, 3);
  }

  render () {
    return (
        <Animated.View
          style={[this.getStyle(), this.getAnimationStyle()]}
          {...this.panResponder.panHandlers}
        >
          <ScrollView
            ref="scrollView"
            scrollEnabled={this.props.active}
            scrollsToTop={true}
            showsVerticalScrollIndicator={false}
          >
            <TouchableWithoutFeedback onPress={partial(this.props.onPress, [this.props.id, this.props.active])}>
              <View style={{ flex: 1}}>
                {this.props.children}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </Animated.View>
    );
  }
}
