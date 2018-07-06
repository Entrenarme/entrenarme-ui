import * as React from 'react';
import { render } from 'react-testing-library';

import SearchableSwitch from './index';
import Checkbox from '../../core/Checkbox';

test('renders the given children', () => {
  const options = ['wifi', 'piscina', 'masajista'];

  const { getByText } = render(
    <SearchableSwitch column multiple>
      {({ filterValue }) =>
        options
          .filter(option => option.includes(filterValue))
          .map(option => (
            <SearchableSwitch.Item key={option}>
              {({ itemProps, activeItem }) => (
                <Checkbox
                  name={option}
                  label={option}
                  {...itemProps()}
                  checked={activeItem.includes(option)}
                />
              )}
            </SearchableSwitch.Item>
          ))
      }
    </SearchableSwitch>,
  );

  expect(getByText(options[0]).textContent).toEqual(options[0]);
  expect(getByText(options[1]).textContent).toEqual(options[1]);
  expect(getByText(options[2]).textContent).toEqual(options[2]);
});
