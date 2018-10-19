// @flow
import * as React from 'react';
import Slider, { Range } from 'rc-slider';
import times from 'lodash/times';

import ExtendedRange from './styles';

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

  state = {
    Cmp: this.props.slider ? ExtendedRange(Slider) : ExtendedRange(Range),
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
      value,
    } = this.props;
    const { Cmp } = this.state;
    if (slider) {
      if (value !== null || typeof value !== 'undefined') {
        return (
          <Cmp
            min={min}
            max={max}
            step={step}
            defaultValue={defaultValue}
            value={value}
            onChange={this.handleChange}
            marks={{
              [min]: `${min}${markTooltip}`,
              [max]: `${max}${markTooltip}`,
            }}
          />
        );
      }
      return (
        <Cmp
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          onChange={this.handleChange}
          marks={{
            [min]: `${min}${markTooltip}`,
            [max]: `${max}${markTooltip}`,
          }}
        />
      );
    }
    return (
      <Cmp
        defaultValue={priceRank}
        min={min}
        max={max}
        value={value}
        onChange={this.handleChange}
        marks={this.renderMarks()}
      />
    );
  }
}

export default PriceRank;
