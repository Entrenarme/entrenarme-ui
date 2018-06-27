// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Button from './index';

import type { ButtonType, ButtonState } from './types';

const actions = {
  onClick: action('onClick'),
};

const createButton = (
  {
    type = 'primary',
    state,
    icon,
  }: {
    type?: ButtonType,
    state?: ButtonState,
    icon?: React.Node,
  } = { type: 'primary' },
) => (
  <Button type={type} state={state} icon={icon} {...actions}>
    button {type}
  </Button>
);

storiesOf('Buttons/Primary', module)
  .add('default', withInfo('Button info')(() => createButton()))
  .add(
    'outline',
    withInfo('Button outline')(() => createButton({ state: 'outline' })),
  )
  .add(
    'disabled',
    withInfo('Button disabled')(() => createButton({ state: 'disabled' })),
  )
  .add(
    'loading',
    withInfo('Button loading')(() => createButton({ state: 'loading' })),
  )
  .add(
    'icon',
    withInfo('Button icon')(() =>
      createButton({
        state: 'icon',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );

storiesOf('Buttons/Secondary', module)
  .add(
    'default',
    withInfo('Button info')(() => createButton({ type: 'secondary' })),
  )
  .add(
    'outline',
    withInfo('Button outline')(() =>
      createButton({ type: 'secondary', state: 'outline' }),
    ),
  )
  .add(
    'disabled',
    withInfo('Button disabled')(() =>
      createButton({ type: 'secondary', state: 'disabled' }),
    ),
  )
  .add(
    'loading',
    withInfo('Button loading')(() =>
      createButton({ state: 'loading', type: 'secondary' }),
    ),
  )
  .add(
    'icon',
    withInfo('Button icon')(() =>
      createButton({
        state: 'icon',
        type: 'secondary',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );

storiesOf('Buttons/Warning', module)
  .add(
    'default',
    withInfo('Button info')(() => createButton({ type: 'warning' })),
  )
  .add(
    'outline',
    withInfo('Button outline')(() =>
      createButton({ type: 'warning', state: 'outline' }),
    ),
  )
  .add(
    'disabled',
    withInfo('Button disabled')(() =>
      createButton({ type: 'warning', state: 'disabled' }),
    ),
  )
  .add(
    'loading',
    withInfo('Button loading')(() =>
      createButton({ state: 'loading', type: 'warning' }),
    ),
  )
  .add(
    'icon',
    withInfo('Button icon')(() =>
      createButton({
        state: 'icon',
        type: 'warning',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );

storiesOf('Buttons/Link', module)
  .add('default', withInfo('Button info')(() => createButton({ type: 'link' })))
  .add(
    'disabled',
    withInfo('Button disabled')(() =>
      createButton({ type: 'link', state: 'disabled' }),
    ),
  )
  .add(
    'loading',
    withInfo('Button loading')(() =>
      createButton({ state: 'loading', type: 'link' }),
    ),
  )
  .add(
    'icon',
    withInfo('Button icon')(() =>
      createButton({
        state: 'icon',
        type: 'link',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );

storiesOf('Buttons/Error', module)
  .add(
    'default',
    withInfo('Button info')(() => createButton({ type: 'error' })),
  )
  .add(
    'outline',
    withInfo('Button outline')(() =>
      createButton({ type: 'error', state: 'outline' }),
    ),
  )
  .add(
    'disabled',
    withInfo('Button disabled')(() =>
      createButton({ type: 'error', state: 'disabled' }),
    ),
  )
  .add(
    'loading',
    withInfo('Button loading')(() =>
      createButton({ state: 'loading', type: 'error' }),
    ),
  )
  .add(
    'icon',
    withInfo('Button icon')(() =>
      createButton({
        state: 'icon',
        type: 'error',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );

storiesOf('Buttons/Success', module)
  .add(
    'default',
    withInfo('Button info')(() => createButton({ type: 'success' })),
  )
  .add(
    'outline',
    withInfo('Button outline')(() =>
      createButton({ type: 'success', state: 'outline' }),
    ),
  )
  .add(
    'disabled',
    withInfo('Button disabled')(() =>
      createButton({ type: 'success', state: 'disabled' }),
    ),
  )
  .add(
    'loading',
    withInfo('Button loading')(() =>
      createButton({ state: 'loading', type: 'success' }),
    ),
  )
  .add(
    'icon',
    withInfo('Button icon')(() =>
      createButton({
        state: 'icon',
        type: 'success',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );

storiesOf('Buttons/Add', module)
  .add('default', withInfo('Button info')(() => createButton({ type: 'add' })))
  .add(
    'disabled',
    withInfo('Button disabled')(() =>
      createButton({ type: 'add', state: 'disabled' }),
    ),
  )
  .add(
    'loading',
    withInfo('Button loading')(() =>
      createButton({ state: 'loading', type: 'add' }),
    ),
  )
  .add(
    'icon',
    withInfo('Button icon')(() =>
      createButton({
        state: 'icon',
        type: 'add',
        icon: <FontAwesomeIcon icon={faCoffee} />,
      }),
    ),
  );
