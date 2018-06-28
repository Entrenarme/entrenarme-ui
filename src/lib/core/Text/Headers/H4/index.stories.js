// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H4 from './index';

const ElementDecoration = storyFn => (
  <div style={{ paddingLeft: '15px' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Heading 4')(() => <H4>Heading 4</H4>));

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Heading 4')(() => <H4 s>Heading 4</H4>));

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Heading 4')(() => <H4 l>Heading 4</H4>));

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add(
    'with color prop',
    withInfo('Heading 4')(() => <H4 color="red">Heading 4</H4>),
  );
