import React from 'React';
import Card from './Card';
import Content from './Content';
import { image } from '../selectors/manifest';

export default ({ id, item, active, content, ...props })=> {
  return (
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
}
