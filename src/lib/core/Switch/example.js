export default `Switch

## Basic usage
<Switch /> renders a function and give this props:
  - itemProps
    - A function when executed, it returns an object with useful props for each item.
    - It has to be applied to each item we want to include in our selection (example below).
  - activeItem
    - A string or Array<string> which will contain the selected name property of the active items,
      so you can check which one is active.

~~~js
  <Switch onChange={(activeItems) => console.log('will print male or female', activeItems)}>
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
  </Switch>
~~~

## Multiple usage
Same as before, but with the prop multiple passed to <Switch /> component, as the example below.

~~~js
  <Switch onChange={(activeItems) => console.log('will print an array of ACTIVE strings ['male', 'female'], activeItems)} multiple>
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
  </Switch>
~~~

`;
