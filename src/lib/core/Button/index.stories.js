// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
    size,
    active,
  }: {
    type?: ButtonType,
    state?: ButtonState,
    colorVariant?: ButtonColorVariant,
    disabled?: ButtonDisabled,
    icon?: React.Node,
    size?: ButtonSize,
    active?: boolean,
  } = { colorVariant: 'primary' },
) => (
  <Button
    type={type}
    state={state}
    colorVariant={colorVariant}
    disabled={disabled}
    icon={icon}
    size={size}
    loadingText="loading"
    errorText="error"
    successText="success"
    active={active}
    {...actions}
  >
    button {colorVariant}
  </Button>
);

storiesOf('Buttons/Default', module)
  .add('default (primary)', () => createButton())
  .add('default active (primary)', () => createButton({ active: true }))
  .add('default small (primary)', () => createButton({ size: 'small' }))
  .add('default large (primary)', () => createButton({ size: 'large' }))
  .add('default xlarge (primary)', () => createButton({ size: 'xlarge' }))
  .add('default fullwidth (primary)', () => createButton({ size: 'fullwidth' }))
  .add('secondary', () => createButton({ colorVariant: 'secondary' }))
  .add('warning', () => createButton({ colorVariant: 'warning' }))
  .add('loading', () => createButton({ state: 'loading' }))
  .add('error color', () => createButton({ colorVariant: 'error' }))
  .add('error state', () => createButton({ state: 'error' }))
  .add('success color', () => createButton({ colorVariant: 'success' }))
  .add('success state', () => createButton({ state: 'success' }))
  .add('icon', () =>
    createButton({
      icon: <FontAwesomeIcon icon={faCoffee} />,
    }),
  );

storiesOf('Buttons/Outline', module)
  .add('default (primary)', () =>
    createButton({ colorVariant: 'primary', type: 'outline' }),
  )
  .add('secondary', () =>
    createButton({ colorVariant: 'secondary', type: 'outline' }),
  )
  .add('warning', () =>
    createButton({ colorVariant: 'warning', type: 'outline' }),
  )
  .add('loading', () => createButton({ type: 'outline', state: 'loading' }))
  .add('error', () => createButton({ type: 'outline', colorVariant: 'error' }))
  .add('success', () =>
    createButton({ type: 'outline', colorVariant: 'success' }),
  )
  .add('icon', () =>
    createButton({
      type: 'outline',
      icon: <FontAwesomeIcon icon={faCoffee} />,
    }),
  );

storiesOf('Buttons/Link', module)
  .add('default', () => createButton({ type: 'link' }))
  .add('disabled', () => createButton({ type: 'link', disabled: true }))
  .add('loading', () => createButton({ type: 'link', state: 'loading' }))
  .add('icon', () =>
    createButton({
      type: 'link',
      icon: <FontAwesomeIcon icon={faCoffee} />,
    }),
  );

storiesOf('Buttons/Add', module)
  .add('default', () => createButton({ type: 'add' }))
  .add('disabled', () => createButton({ type: 'add', disabled: true }))
  .add('loading', () => createButton({ state: 'loading', type: 'add' }))
  .add('icon', () =>
    createButton({
      type: 'add',
      icon: <FontAwesomeIcon icon={faCoffee} />,
    }),
  );
