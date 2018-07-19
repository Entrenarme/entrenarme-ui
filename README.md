# ENTRENARME-UI

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder structure

- All library components and files should live inside `src/lib` folder. Anything outside of that folder will not be published as a library file.
- You can create as many other folders as you want outside of `src/lib` for example / demo purpose as you are creating the library.
- The `src/lib/core/**` folder is for UI simple elements, as Buttons, Typography, Colors, etc.

## Commands

- The project is a [Create React App](https://github.com/facebookincubator/create-react-app) but with some custom scripts:
  - `yarn build` has been modified to do a few things:
    - NOTE: Before run this command, we must increment the version on the package.json (root folder).
    - It will create a folder on the project root called `dist` and it will mimic the folder structure within the `src/lib` of the development section, but transpiled with babel.
    - It will also copy the package.json of the root folder to the `dist` folder, as we will need it to be able to publish it to npm.
    - Inside `dist`, tests, snapshots and stories are ignored by default (and should be).
  - `yarn publish` will build && publish the `dist` folder to npm.
    - NOTE: Make sure you are logged in with the entrenarme account before publishing it.
    - NOTE2: If this is not working, do it separately, do a `yarn build` and then run `npm publish ./dist` manually from the CLI.

## Component structure

- Each component will live inside in its own folder (the name of the folder will be the name of the component itself), which will have a minimum of 3 files inside of it.
  - `index.js` will export the component function or class, named as its parent folder, and will have the component itself.
  - `index.stories.js` will contain the Storybook stories for that component, with their actions and other props.
  - `index.test.js` will have the snapshot test configured for that component (at least).
  - `/snapshot` will be created automatically by jest when doing snapshots of the components.

## Development

- 3 main proceses to run:
  - `yarn start` will run the live-reload react-app that will serve as example (we mostly don't gonna need this, because we will be using Storybook to see the component results.)
  - `yarn storybook` will run the storybook server and it will pick up all the components inside `src/lib` directory.
  - `yarn test` will run the testing process, it will warn us if any snapshot changes.
