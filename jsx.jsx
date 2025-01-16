```javascript
// JSX Example
const jsxExample = (
  <div>
    <h1>Hello, World!</h1>
    <p>This is a paragraph of text.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
);

// Explanation
// In this example, we're creating a JSX expression that represents a div element.
// The div element contains an h1 element, a p element, and an ul element.
// The ul element contains three li elements.

// JSX is converted to JavaScript function calls by the compiler.
// The above JSX expression is equivalent to the following JavaScript code:
const jsEquivalent = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Hello, World!'),
  React.createElement('p', null, 'This is a paragraph of text.'),
  React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'Item 1'),
    React.createElement('li', null, 'Item 2'),
    React.createElement('li', null, 'Item 3')
  )
);

// JSX makes it easier to write HTML-like code in your JavaScript files.
// It's a key feature of React and is used to create React elements.
```