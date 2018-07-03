// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Range } from 'rc-slider';
import times from 'lodash/times';

import colors from '../../helpers/colors';

import 'rc-slider/assets/index.css';

const ExtendedRange = styled(Range)`
  .rc-slider-rail {
    height: 3px;
  }

  .rc-slider-track {
    background-color: ${colors.secondary.default};
  }

  .rc-slider-handle {
    width: 15px;
    height: 15px;
    border: 0;
    box-shadow: 2px 2px 6px 0px ${colors.gray.dark};
  }

  .rc-slider-dot {
    display: none;
  }

  .rc-slider-mark-text {
    font-size: 1rem;
    margin-top: 5px;
  }
`;

type Props = {
  currency?: string,
  callback: Function,
};

type State = {};

class PriceRank extends React.Component<Props, State> {
  renderCurrencyMark = (repetitions: number) => {
    const { currency } = this.props;

    const iterableArray = times(repetitions, String);

    return iterableArray.map(element => currency).join('');
  };

  handleChange = (rank: Array<number>) => {
    this.props.callback(rank);
  };

  renderMarks = () => {
    const marks = {};

    const iterableArray = times(4, String);

    iterableArray.forEach(
      element =>
        (marks[element] = this.renderCurrencyMark(parseInt(element, 10) + 1)),
    );

    return marks;
  };

  render() {
    return (
      <ExtendedRange
        min={0}
        max={3}
        onChange={rank => this.handleChange(rank)}
        marks={this.renderMarks()}
      />
    );
  }
}

PriceRank.defaultProps = {
  currency: '€',
};

export default PriceRank;
