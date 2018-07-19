// @flow
import * as React from 'react';

type Props = {
  children: Function,
};

type State = {
  device: Device,
};

const queries = [
  '(max-width: 320px)',
  '(max-width: 767px) and (min-width: 320px)',
  '(max-width: 1223px) and (min-width: 768px)',
  '(max-width: 1824px) and (min-width: 1224px)',
  '(min-width: 1824px)',
];

const mediaDictionary = {
  0: 'mobile',
  1: 'iphone',
  2: 'ipad',
  3: 'desktop',
  4: 'large_desktop',
};

class Responsive extends React.Component<Props, State> {
  state = {
    device: 'mobile',
  };

  componentDidMount() {
    this.initQueries();
  }

  setQueryState = (currentQueryName: Device) => {
    return this.setState({ device: currentQueryName });
  };

  queryChange = mql => {
    if (mql.matches) {
      this.setQueryState(
        mediaDictionary[queries.findIndex(query => query === mql.media)],
      );
    }
  };

  initQueries() {
    queries.forEach(query => {
      const mql = window.matchMedia(query);
      mql.addListener(this.queryChange);
      this.queryChange(mql);
    });
  }

  render() {
    const { children } = this.props;
    const { device } = this.state;
    return children({ device });
  }
}

export default Responsive;
