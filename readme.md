# Webpack Starter for React-Redux-Typescript

This is overcomplicated todo app. 

## What included

- webpack - 3.x.x
- react - 16.x.x
- react-redux - 4.x.x
- react-router 4.x.x
- react-router-redux 5.x.x
- react-hot-loader - 4.x.x
- redux - 4.x.x
- redux-devtool-extension - 2.x.x
- typescript - 2.7.x
- tslint - 5.x.x
- material-ui - 1.x.x
- material-ui-icons - 1.x.x

## Pinciples

### 1. Type inference over typedef

Type inference work pretty well in most cases. Combined with strick tsc settings provide strick type checking and exellent ergonomics.
In some cases when liblary definitions change - type inference will be more robust solution.

### 2. Flat structure over folders

It is better to avoid deeply nested structure of directories. Some project use folder per component with index.js.
In this project I choose to use super flat structure. If you want you can still migrate to folder per component without changing your imports. 

### 3. Componenets vs Connected components

Redux aware components are in connected folder. These components would be more specific to particular application.
State changes will cause renders and connected components is where performance can be optimized. 
