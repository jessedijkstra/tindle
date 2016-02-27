import React from 'React';
import Card from './Card';
import Content from './Content';
import { image } from '../selectors/manifest';

export default ({ id, item, content, ...props })=> {
  return (
    <Card
      id={id}
      {...props}
    >
      <Content
        image={image(item)}
        body={(content && content.body) || item.body}
      />
    </Card>
  );
}
