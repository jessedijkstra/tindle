import React, { PropTypes } from 'React';
import Card from './Card';
import Content from './Content';
import { image } from '../selectors/manifest';

const ItemCard = ({ id, item, active, content, ...props }) => (
  <Card
    id={id}
    active={active}
    {...props}
  >
    <Content
      image={image(item)}
      body={(active && content && content.body) || item.body}
    />
  </Card>
);

ItemCard.propTypes = {
  id: PropTypes.string,
  active: PropTypes.bool,
  item: PropTypes.object,
  content: PropTypes.object
};

export default ItemCard;
