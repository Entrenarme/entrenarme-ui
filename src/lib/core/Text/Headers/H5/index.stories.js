// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H5 from './index';

const ElementDecoration = storyFn => (
  <div style={{ paddingLeft: '15px' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H5', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Heading 5')(() => <H5>Heading 5</H5>));

storiesOf('Text/Headers/H5', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Heading 5')(() => <H5 s>Heading 5</H5>));

storiesOf('Text/Headers/H5', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Heading 5')(() => <H5 l>Heading 5</H5>));

storiesOf('Text/Headers/H5', module)
  .addDecorator(ElementDecoration)
  .add(
    'with color prop',
    withInfo('Heading 5')(() => <H5 color="red">Heading 5</H5>),
  );
