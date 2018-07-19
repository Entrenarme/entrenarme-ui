import * as React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-light-svg-icons';

import TextField from './index';
import { debounce } from '../../../../node_modules/rxjs/operator/debounce';

test('renders default', () => {
  const { container } = render(<TextField />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with placeholder', () => {
  const { container } = render(<TextField placeholder="placeholder" />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with label', () => {
  const { container } = render(<TextField label="label" />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with adornment start', () => {
  const { container } = render(
    <TextField adornment={<FontAwesomeIcon icon={faSearch} />} />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('onChange gets the event', async () => {
  const onChange = jest.fn();
  const newValue = 'wifi';
  const { getByPlaceholderText } = render(
    <TextField placeholder="placeholder" onChange={onChange} />,
  );
  const textField = getByPlaceholderText('placeholder');
  textField.value = newValue;
  fireEvent.change(textField);

  const begin = Date.now();
  await wait(() => {
    return expect(onChange).toHaveBeenCalledTimes(1);
  });
  const end = Date.now();
  expect(end - begin).toBeLessThanOrEqual(50);
  expect(textField.value).toBe(newValue);
});

test('onChange gets the event debounced', async () => {
  const onChange = jest.fn();
  const newValue = 'wifi';
  const debounceMs = 300;
  const { getByPlaceholderText } = render(
    <TextField
      placeholder="placeholder"
      debounceMs={debounceMs}
      onChange={onChange}
    />,
  );
  const textField = getByPlaceholderText('placeholder');
  textField.value = newValue;
  fireEvent.change(textField);

  const begin = Date.now();
  await wait(() => {
    return expect(onChange).toHaveBeenCalledTimes(1);
  });
  const end = Date.now();
  expect(end - begin).toBeGreaterThanOrEqual(debounceMs);
  expect(textField.value).toBe(newValue);
});
