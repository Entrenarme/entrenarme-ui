import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/pro-light-svg-icons';

import Button from './index';

test('renders default with no props', () => {
  const { container, rerender } = render(<Button>default</Button>);
  expect(container.firstChild).toMatchSnapshot('default button');

  rerender(<Button colorVariant="secondary">secondary</Button>);
  expect(container.firstChild).toMatchSnapshot('default secondary button');

  rerender(<Button colorVariant="warning" successText="success" />);
  expect(container.firstChild).toMatchSnapshot('default warning button');

  rerender(<Button state="loading" loadingText="loading" />);
  expect(container.firstChild).toMatchSnapshot('default loading button');

  rerender(
    <Button colorVariant="error" errorText="Error text">
      error color
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('default error color button');

  rerender(<Button state="error" errorText="error" />);
  expect(container.firstChild).toMatchSnapshot('default error button');

  rerender(
    <Button colorVariant="success" errorText="Success text">
      success color
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('default success color button');

  rerender(<Button state="success" successText="success" />);
  expect(container.firstChild).toMatchSnapshot('default success button');

  rerender(<Button disabled>default disabled</Button>);
  expect(container.firstChild).toMatchSnapshot('default disabled button');

  rerender(
    <Button icon={<FontAwesomeIcon icon={faCoffee} />}>
      default with icon
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('default icon button');
});

test('renders outline', () => {
  const { container, rerender } = render(
    <Button type="outline">outline</Button>,
  );
  expect(container.firstChild).toMatchSnapshot('outline default');

  rerender(
    <Button type="outline" colorVariant="secondary">
      secondary
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('outline secondary button');

  rerender(
    <Button type="outline" colorVariant="warning" successText="success" />,
  );
  expect(container.firstChild).toMatchSnapshot('outline warning button');

  rerender(<Button type="outline" state="loading" loadingText="loading" />);
  expect(container.firstChild).toMatchSnapshot('outline loading button');

  rerender(
    <Button type="outline" colorVariant="error" errorText="Error text">
      error color
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('outline error color button');

  rerender(<Button type="outline" state="error" errorText="error" />);
  expect(container.firstChild).toMatchSnapshot('outline error button');

  rerender(
    <Button type="outline" colorVariant="success" errorText="Success text">
      success color
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('outline success color button');

  rerender(<Button type="outline" state="success" successText="success" />);
  expect(container.firstChild).toMatchSnapshot('outline success button');

  rerender(
    <Button type="outline" disabled>
      default disabled
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('outline disabled button');

  rerender(
    <Button type="outline" icon={<FontAwesomeIcon icon={faCoffee} />}>
      default with icon
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('outline icon button');
});

test('renders link', () => {
  const { container, rerender } = render(<Button type="link">link</Button>);
  expect(container.firstChild).toMatchSnapshot('link default');

  rerender(<Button type="link" state="loading" loadingText="loading" />);
  expect(container.firstChild).toMatchSnapshot('link loading button');

  rerender(
    <Button type="link" disabled>
      default disabled
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('link disabled button');

  rerender(
    <Button type="link" icon={<FontAwesomeIcon icon={faCoffee} />}>
      default with icon
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('link icon button');
});

test('renders add', () => {
  const { container, rerender } = render(<Button type="add">add</Button>);
  expect(container.firstChild).toMatchSnapshot();

  rerender(<Button type="add" state="loading" loadingText="loading" />);
  expect(container.firstChild).toMatchSnapshot('add loading button');

  rerender(
    <Button type="add" disabled>
      default disabled
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('add disabled button');

  rerender(
    <Button type="add" icon={<FontAwesomeIcon icon={faCoffee} />}>
      default with icon
    </Button>,
  );
  expect(container.firstChild).toMatchSnapshot('add icon button');
});
