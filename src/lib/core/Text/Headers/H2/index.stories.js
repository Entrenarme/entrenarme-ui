// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H2 from './index';

const ElementDecoration = storyFn => (
  <div style={{ paddingLeft: '15px' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H2', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Heading 2')(() => <H2>Heading 2</H2>));

storiesOf('Text/Headers/H2', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Heading 2')(() => <H2 s>Heading 2</H2>));

storiesOf('Text/Headers/H2', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Heading 2')(() => <H2 l>Heading 2</H2>));

storiesOf('Text/Headers/H2', module)
  .addDecorator(ElementDecoration)
  .add(
    'with color prop',
    withInfo('Heading 2')(() => <H2 color="red">Heading 2</H2>),
  );
