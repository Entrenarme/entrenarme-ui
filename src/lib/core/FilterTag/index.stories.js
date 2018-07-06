// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import FilterTag from './index';

const actions = {
  onClick: action('onClick'),
};

const ElementDecoration = storyFn => (
  <div style={{ backgroundColor: '#F1F1F1', height: '100vh', padding: '20px' }}>
    {storyFn()}
  </div>
);

storiesOf('FilterTag', module)
  .addDecorator(ElementDecoration)
  .add(
    'default',
    withInfo('Filter tag')(() => <FilterTag {...actions} title="Test" />),
  );

storiesOf('FilterTag', module)
  .addDecorator(ElementDecoration)
  .add(
    'with addCallback',
    withInfo('Filter tag')(() => (
      <FilterTag
        title="Test"
        {...actions}
        addCallback={() => console.log('add element...')}
      />
    )),
  );

storiesOf('FilterTag', module)
  .addDecorator(ElementDecoration)
  .add(
    'with removeCallback',
    withInfo('Filter tag')(() => (
      <FilterTag
        title="Test"
        {...actions}
        removeCallback={() => console.log('remove element...')}
      />
    )),
  );

storiesOf('FilterTag', module)
  .addDecorator(ElementDecoration)
  .add(
    'with all posible actions',
    withInfo('Filter tag')(() => (
      <FilterTag
        title="Test"
        {...actions}
        addCallback={() => console.log('add element...')}
        removeCallback={() => console.log('remove element...')}
      />
    )),
  );
