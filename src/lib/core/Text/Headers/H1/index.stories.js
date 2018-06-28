// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H1 from './index';

const ElementDecoration = storyFn => (
  <div style={{ paddingLeft: '15px' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Heading 1')(() => <H1>Heading 1</H1>));

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Heading 1')(() => <H1 s>Heading 1</H1>));

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Heading 1')(() => <H1 l>Heading 1</H1>));

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add(
    'with color prop',
    withInfo('Heading 1')(() => <H1 color="red">Heading 1</H1>),
  );
