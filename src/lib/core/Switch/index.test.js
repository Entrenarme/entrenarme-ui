import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Switch from './index';
import Button from '../Button';

test('render props are correct with switch', () => {
  let activeItems = null;
  const onChange = jest.fn();
  const { queryAllByText, container } = render(
    <Switch onChange={onChange}>
      {({ itemProps, activeItem }) => {
        activeItems = activeItem;
        return (
          <React.Fragment>
            <Button
              name="male"
              type="outline"
              colorVariant={activeItem === 'male' ? 'secondary' : 'primary'}
              {...itemProps()}
            >
              no icon
            </Button>
            <Button
              name="female"
              type="outline"
              colorVariant={activeItem === 'female' ? 'secondary' : 'primary'}
              {...itemProps()}
            >
              with icon
            </Button>
          </React.Fragment>
        );
      }}
    </Switch>,
  );

  const noIconTextButton = queryAllByText('no icon');
  const withIconTextButton = queryAllByText('with icon');

  expect(noIconTextButton).toHaveLength(1);
  expect(withIconTextButton).toHaveLength(1);

  expect(activeItems).toBeFalsy();

  expect(container).toMatchSnapshot('none active');

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toBe('male');
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith('male');

  expect(container).toMatchSnapshot('first active');

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toBeFalsy();
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenLastCalledWith(undefined);

  expect(container).toMatchSnapshot('none active');

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toBe('male');
  expect(onChange).toHaveBeenCalledTimes(3);
  expect(onChange).toHaveBeenLastCalledWith('male');

  expect(container).toMatchSnapshot('first active');

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toBe('female');
  expect(onChange).toHaveBeenCalledTimes(4);
  expect(onChange).toHaveBeenLastCalledWith('female');

  expect(container).toMatchSnapshot('second active');

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toBeFalsy();
  expect(onChange).toHaveBeenCalledTimes(5);
  expect(onChange).toHaveBeenLastCalledWith(undefined);

  expect(container).toMatchSnapshot('none active');
});

test('render props are correct with multiple', () => {
  let activeItems = null;
  const onChange = jest.fn();
  const { queryAllByText, container } = render(
    <Switch onChange={onChange} multiple>
      {({ itemProps, activeItem }) => {
        activeItems = activeItem;
        return (
          <React.Fragment>
            <Button
              name="male"
              type="outline"
              colorVariant={activeItem === 'male' ? 'secondary' : 'primary'}
              {...itemProps()}
            >
              no icon
            </Button>
            <Button
              name="female"
              type="outline"
              colorVariant={activeItem === 'female' ? 'secondary' : 'primary'}
              {...itemProps()}
            >
              with icon
            </Button>
          </React.Fragment>
        );
      }}
    </Switch>,
  );

  const noIconTextButton = queryAllByText('no icon');
  const withIconTextButton = queryAllByText('with icon');

  expect(noIconTextButton).toHaveLength(1);
  expect(withIconTextButton).toHaveLength(1);

  expect(activeItems).toEqual([]);

  expect(container).toMatchSnapshot('none active');

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toEqual(['male']);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(['male']);

  expect(container).toMatchSnapshot('first active');

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toEqual([]);
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenLastCalledWith([]);

  expect(container).toMatchSnapshot('none active');

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toEqual(['male']);
  expect(onChange).toHaveBeenCalledTimes(3);
  expect(onChange).toHaveBeenLastCalledWith(['male']);

  expect(container).toMatchSnapshot('first active');

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toEqual(['male', 'female']);
  expect(onChange).toHaveBeenCalledTimes(4);
  expect(onChange).toHaveBeenLastCalledWith(['male', 'female']);

  expect(container).toMatchSnapshot('both active');

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toEqual(['male']);
  expect(onChange).toHaveBeenCalledTimes(5);
  expect(onChange).toHaveBeenLastCalledWith(['male']);

  expect(container).toMatchSnapshot('first active');
});
