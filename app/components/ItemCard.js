import React from 'React';
import Card from './Card';
import Content from './Content';
import { image } from '../selectors/manifest';

export default ({ card, item, content, ...props })=> {
  return (
    <Card
      {...card}
      {...props}
      remove={card.remove || card.readLater}
    >
      <Content
        image={image(item)}
        body={(content && content.body) || item.body}
      />
    </Card>
  );
}
