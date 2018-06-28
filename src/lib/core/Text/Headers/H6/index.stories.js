// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H6 from './index';

const ElementDecoration = storyFn => (
  <div style={{ paddingLeft: '15px' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H6', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Heading 6')(() => <H6>Heading 6</H6>));

storiesOf('Text/Headers/H6', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Heading 6')(() => <H6 s>Heading 6</H6>));

storiesOf('Text/Headers/H6', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Heading 6')(() => <H6 l>Heading 6</H6>));

storiesOf('Text/Headers/H6', module)
  .addDecorator(ElementDecoration)
  .add(
    'with color prop',
    withInfo('Heading 6')(() => <H6 color="red">Heading 6</H6>),
  );
