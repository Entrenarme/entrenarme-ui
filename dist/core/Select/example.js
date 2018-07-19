export default "Select\n\n## Basic usage\n<Select /> renders a function and give this props:\n  - itemProps\n    - A function when executed, it returns an object with useful props for each item.\n    - It has to be applied to each item we want to include in our selection (example below).\n  - activeItem\n    - A string or Array<string> which will contain the selected name property of the active items,\n      so you can check which one is active.\n\n## You can use it directly like this:\n\n~~~js\n  <Select onChange={(activeItems) => console.log('will print male or female', activeItems)}>\n  {({ itemProps, activeItem }) => (\n    <React.Fragment>\n      <Button\n        name=\"male\"\n        type=\"outline\"\n        colorVariant={activeItem === 'male' ? 'secondary' : 'primary'}\n        {...itemProps()}\n      >\n        no icon\n      </Button>\n      <Button\n        name=\"female\"\n        type=\"outline\"\n        icon={<FontAwesomeIcon icon={faCoffee} />}\n        colorVariant={activeItem === 'female' ? 'secondary' : 'primary'}\n        {...itemProps()}\n      >\n        with icon\n      </Button>\n    </React.Fragment>\n  )}\n  </Select>\n~~~\n\n## But most likely you will use it with a parent wrapper for styling, like this:\n\n~~~js\n\nimport * as React from 'react';\nimport styled from 'styled-components';\n\nimport Select from '../Select';\n\ntype ContainerProps = {\n  options: {\n    column: boolean,\n  },\n};\n\nconst Container = styled.div....\n\ntype Props = {\n  children: Function,\n  column?: boolean,\n};\n\nconst Switch = ({ children, column, ...rest }: Props) => (\n  <Container options={{ column }}>\n    <Select {...rest}>{children}</Select>\n  </Container>\n);\n\nSwitch.defaultProps = {\n  column: false,\n};\n\nexport default Switch;\n\n~~~\n\n";