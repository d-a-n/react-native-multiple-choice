# react-native-multiple-choice
A cross-platform (iOS / Android) single and multiple-choice React Native component.

## Install

```sh
npm i react-native-multiple-choice --save
```

## Usage

Here is an overview of the component usage.

```jsx
<MultipleChoice
    options={[
    'Lorem ipsum dolor sit',
    'Lorem ipsum',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    'Lorem ipsum dolor sit amet, consetetur',
    'Lorem ipsum dolor'
    ]}
    selectedOptions={['Lorem ipsum']}
    maxSelectedOptions={2}
    onSelection={(option)=>alert(option + ' was selected!')}
/>
```

## Props

* `style - {}` custom style of the list
* `optionStyle - {}` custom style of the option element
* `options - []` required array of options
* `selectedOptions - []` optional array of initially selected options
* `maxSelectedOptions - int` optional maximum number of selectable options
* `onSelection - function(option){}` option selection callback
* `renderIndicator - function(option)` should return a selected/deselected indicator node, default: check mark image
* `renderSeparator - function(option)` should return a separator node that is displayed between the options, default: gray line
* `renderText - function(option)` should return a text node, default: text node
* `renderRow - function(option)` should return a option view
* `disabled - bool` if set to true component is disabled and can't be interacted with

## Screenshot

![example](https://raw.githubusercontent.com/d-a-n/react-native-multiple-choice/master/assets/images/screenshot.png)


