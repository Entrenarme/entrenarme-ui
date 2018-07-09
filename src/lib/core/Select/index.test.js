import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Select from './index';
import Button from '../Button';

test('render props are correct with switch', () => {
  let activeItems = null;
  const onChange = jest.fn();
  const { queryAllByText } = render(
    <Select onChange={onChange}>
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
    </Select>,
  );

  const noIconTextButton = queryAllByText('no icon');
  const withIconTextButton = queryAllByText('with icon');

  expect(noIconTextButton).toHaveLength(1);
  expect(withIconTextButton).toHaveLength(1);

  expect(activeItems).toBeFalsy();

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toBe('male');
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith('male');

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toBeFalsy();
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenLastCalledWith(undefined);

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toBe('male');
  expect(onChange).toHaveBeenCalledTimes(3);
  expect(onChange).toHaveBeenLastCalledWith('male');

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toBe('female');
  expect(onChange).toHaveBeenCalledTimes(4);
  expect(onChange).toHaveBeenLastCalledWith('female');

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toBeFalsy();
  expect(onChange).toHaveBeenCalledTimes(5);
  expect(onChange).toHaveBeenLastCalledWith(undefined);
});

test('render props are correct with multiple', () => {
  let activeItems = null;
  const onChange = jest.fn();
  const { queryAllByText } = render(
    <Select onChange={onChange} multiple>
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
    </Select>,
  );

  const noIconTextButton = queryAllByText('no icon');
  const withIconTextButton = queryAllByText('with icon');

  expect(noIconTextButton).toHaveLength(1);
  expect(withIconTextButton).toHaveLength(1);

  expect(activeItems).toEqual([]);

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toEqual(['male']);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenLastCalledWith(['male']);

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toEqual([]);
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenLastCalledWith([]);

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toEqual(['male']);
  expect(onChange).toHaveBeenCalledTimes(3);
  expect(onChange).toHaveBeenLastCalledWith(['male']);

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toEqual(['male', 'female']);
  expect(onChange).toHaveBeenCalledTimes(4);
  expect(onChange).toHaveBeenLastCalledWith(['male', 'female']);

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toEqual(['male']);
  expect(onChange).toHaveBeenCalledTimes(5);
  expect(onChange).toHaveBeenLastCalledWith(['male']);
});
