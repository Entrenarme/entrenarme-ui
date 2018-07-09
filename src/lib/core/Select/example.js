export default `Select

## Basic usage
<Select /> renders a function and give this props:
  - itemProps
    - A function when executed, it returns an object with useful props for each item.
    - It has to be applied to each item we want to include in our selection (example below).
  - activeItem
    - A string or Array<string> which will contain the selected name property of the active items,
      so you can check which one is active.

## You can use it directly like this:

~~~js
  <Select onChange={(activeItems) => console.log('will print male or female', activeItems)}>
  {({ itemProps, activeItem }) => (
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
        icon={<FontAwesomeIcon icon={faCoffee} />}
        colorVariant={activeItem === 'female' ? 'secondary' : 'primary'}
        {...itemProps()}
      >
        with icon
      </Button>
    </React.Fragment>
  )}
  </Select>
~~~

## But most likely you will use it with a parent wrapper for styling, like this:

~~~js

import * as React from 'react';
import styled from 'styled-components';

import Select from '../Select';

type ContainerProps = {
  options: {
    column: boolean,
  },
};

const Container = styled.div....

type Props = {
  children: Function,
  column?: boolean,
};

const Switch = ({ children, column, ...rest }: Props) => (
  <Container options={{ column }}>
    <Select {...rest}>{children}</Select>
  </Container>
);

Switch.defaultProps = {
  column: false,
};

export default Switch;

~~~

`;
