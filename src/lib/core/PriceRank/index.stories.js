// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import PriceRank from './index';

storiesOf('PriceRank', module)
  .add('default', () => <PriceRank callback={rank => console.log(rank)} />)
  .add('with dollar currency', () => (
    <PriceRank currency="$" callback={rank => console.log(rank)} />
  ))
  .add('with default price rank', () => (
    <PriceRank
      currency="€"
      priceRank={[1, 2]}
      callback={rank => console.log(rank)}
    />
  ))
  .add(
    'Slider',
    () =>
      class Pr extends React.Component {
        state = {
          value: 0,
        };

        render() {
          return (
            <PriceRank
              slider
              min={0.5}
              max={30}
              step={0.5}
              markTooltip="km"
              value={this.state.value}
              callback={value => this.setState({ value })}
            />
          );
        }
      },
  );
