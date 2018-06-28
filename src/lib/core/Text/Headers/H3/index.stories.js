// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H3 from './index';

const ElementDecoration = storyFn => (
  <div style={{ paddingLeft: '15px' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Heading 3')(() => <H3>Heading 3</H3>));

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Heading 3')(() => <H3 s>Heading 3</H3>));

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Heading 3')(() => <H3 l>Heading 3</H3>));

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add(
    'with color prop',
    withInfo('Heading 3')(() => <H3 color="red">Heading 3</H3>),
  );
