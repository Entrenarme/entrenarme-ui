// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import P from './index';

const ElementDecoration = storyFn => (
  <div style={{ paddingLeft: '15px' }}>{storyFn()}</div>
);

storiesOf('Text/Paragraph', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Paragraph')(() => <P>Paragraph</P>));

storiesOf('Text/Paragraph', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Paragraph')(() => <P l>Paragraph</P>));

storiesOf('Text/Paragraph', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Paragraph')(() => <P s>Paragraph</P>));
