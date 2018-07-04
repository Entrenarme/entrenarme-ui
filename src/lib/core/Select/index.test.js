import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Select from './index';
import Button from '../Button';

test('renders its given childrens', () => {
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

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toBeFalsy();
  expect(onChange).toHaveBeenCalledTimes(2);

  fireEvent.click(noIconTextButton[0]);
  expect(activeItems).toBe('male');
  expect(onChange).toHaveBeenCalledTimes(3);

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toBe('female');
  expect(onChange).toHaveBeenCalledTimes(4);

  fireEvent.click(withIconTextButton[0]);
  expect(activeItems).toBeFalsy();
  expect(onChange).toHaveBeenCalledTimes(5);
});
