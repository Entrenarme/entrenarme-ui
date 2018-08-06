// @flow
import * as React from 'react';
import styled from 'styled-components';
import Slider, { Range } from 'rc-slider';
import times from 'lodash/times';

import colors from '../../helpers/colors';
import { regularFont } from '../../helpers/fonts';

import 'rc-slider/assets/index.css';

const ExtendedRange = Comp => styled(Comp)`
  .rc-slider-mark {
    display: flex;
    justify-content: space-between;

    > span {
      width: auto !important;
      margin-left: 0 !important;
      left: 0 !important;
      position: relative !important;
      text-align: left !important;
      flex: 0 0 auto;
    }
  }

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
    font-family: ${regularFont};
  }
`;

type Props = {
  currency?: string,
  priceRank?: Array<number>,
  callback: Function,
  slider: boolean,
  min: number,
  max: number,
  defaultValue: number,
  step: number,
  markTooltip: string,
};

type State = {};

class PriceRank extends React.Component<Props, State> {
  static defaultProps = {
    currency: '€',
    priceRank: [0, 3],
    slider: false,
    min: 0,
    max: 3,
    defaultValue: 0,
    step: 1,
    markTooltip: '',
  };

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
    const {
      priceRank,
      slider,
      min,
      max,
      defaultValue,
      step,
      markTooltip,
    } = this.props;
    if (slider) {
      const Comp = ExtendedRange(Slider);
      return (
        <Comp
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          onChange={rank => this.handleChange(rank)}
          marks={{
            [min]: `${min}${markTooltip}`,
            [max]: `${max}${markTooltip}`,
          }}
        />
      );
    }

    const Comp = ExtendedRange(Range);
    return (
      <Comp
        defaultValue={priceRank}
        min={min}
        max={max}
        onChange={rank => this.handleChange(rank)}
        marks={this.renderMarks()}
      />
    );
  }
}

export default PriceRank;
