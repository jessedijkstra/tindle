import { find, whereEq } from 'ramda';

export const manifests = (trending)=> (
  trending._embedded['b:tiles']
    .map((tile)=> tile._embedded['b:item']._embedded.manifest)
);

export const manifest = (id, trending)=> (
  find(whereEq({ id }), manifests(trending))
);
