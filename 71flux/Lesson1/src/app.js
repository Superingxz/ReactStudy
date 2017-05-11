var React = require('react');
var ReactDOM = require('react-dom');
var SubmitComponent = require('./components/SubmitComponent.js');
var GZ1611Component = require('./components/gz1611Component.js');

var MyComponent = require('./components/MyComponent.js');

ReactDOM.render(<SubmitComponent/>, document.querySelector('#content'));

ReactDOM.render(<GZ1611Component/>, document.querySelector('#gz1611'));

ReactDOM.render(<MyComponent/>,document.querySelector('#myTest'));
