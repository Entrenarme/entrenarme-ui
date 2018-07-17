// @flow
import * as React from 'react';

type Props = {
  maxChars: number,
  text: React.Node,
  actionText: Function,
  children: React.Node,
};

const SeeMore = ({ maxChars, text, actionText, children }: Props) => {
  React.Children.map(children, (child, i) => {
    console.log('child__ ', child);
  });

  return <div>{children}</div>;
};

export default SeeMore;
