// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Button from './index';

const actions = {
  onClick: action('onClick'),
};

const createButton = (
  {
    type = 'primary',
    state,
    colorVariant,
    disabled,
    icon,
  }: {
    type?: ButtonType,
    state?: ButtonState,
    colorVariant?: ButtonColorVariant,
    disabled?: ButtonDisabled,
    icon?: React.Node,
  } = { colorVariant: 'primary' },
) => (
  <Button
    type={type}
    state={state}
    colorVariant={colorVariant}
    disabled={disabled}
    icon={icon}
    loadingText="loading"
    errorText="error"
    successText="success"
    {...actions}
  >
    button {colorVariant}
  </Button>
);

storiesOf('Buttons/Default', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default (primary)', withInfo('Button info')(() => createButton()))
  .add(
    'secondary',
    withInfo('Button secondary')(() =>
      createButton({ colorVariant: 'secondary' }),
    ),
  )
  .add(
    'warning',
    withInfo('Button warning')(() => createButton({ colorVariant: 'warning' })),
  )
  .add(
    'loading',
    withInfo('Button loading')(() => createButton({ state: 'loading' })),
  )
  .add(
    'error color',
    withInfo('Button error')(() => createButton({ colorVariant: 'error' })),
  )
  .add(
    'error state',
    withInfo('Button error')(() => createButton({ state: 'error' })),
  )
  .add(
    'success color',
    withInfo('Button success')(() => createButton({ colorVariant: 'success' })),
  )
  .add(
    'success state',
    withInfo('Button success')(() => createButton({ state: 'success' })),
  )
  .add(
    'icon',
    withInfo('Button icon')(() =>
      createButton({
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );

storiesOf('Buttons/Outline', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add(
    'default (primary)',
    withInfo('Button info')(() =>
      createButton({ colorVariant: 'primary', type: 'outline' }),
    ),
  )
  .add(
    'secondary',
    withInfo('Button outline secondary')(() =>
      createButton({ colorVariant: 'secondary', type: 'outline' }),
    ),
  )
  .add(
    'warning',
    withInfo('Button outline warning')(() =>
      createButton({ colorVariant: 'warning', type: 'outline' }),
    ),
  )
  .add(
    'loading',
    withInfo('Button outline loading')(() =>
      createButton({ type: 'outline', state: 'loading' }),
    ),
  )
  .add(
    'error',
    withInfo('Button outline error')(() =>
      createButton({ type: 'outline', colorVariant: 'error' }),
    ),
  )
  .add(
    'success',
    withInfo('Button outline success')(() =>
      createButton({ type: 'outline', colorVariant: 'success' }),
    ),
  )
  .add(
    'icon',
    withInfo('Button outline icon')(() =>
      createButton({
        type: 'outline',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );

storiesOf('Buttons/Link', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add(
    'default',
    withInfo('Button link default')(() => createButton({ type: 'link' })),
  )
  .add(
    'disabled',
    withInfo('Button link disabled')(() =>
      createButton({ type: 'link', disabled: true }),
    ),
  )
  .add(
    'loading',
    withInfo('Button link loading')(() =>
      createButton({ type: 'link', state: 'loading' }),
    ),
  )
  .add(
    'icon',
    withInfo('Button link icon')(() =>
      createButton({
        type: 'link',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );

storiesOf('Buttons/Add', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add(
    'default',
    withInfo('Button add default')(() => createButton({ type: 'add' })),
  )
  .add(
    'disabled',
    withInfo('Button add disabled')(() =>
      createButton({ type: 'add', disabled: true }),
    ),
  )
  .add(
    'loading',
    withInfo('Button add loading')(() =>
      createButton({ state: 'loading', type: 'add' }),
    ),
  )
  .add(
    'icon',
    withInfo('Button add icon')(() =>
      createButton({
        type: 'add',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );
