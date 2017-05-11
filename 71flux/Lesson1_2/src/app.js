var React = require('react');
var ReactDOM = require('react-dom');
var SubmitComponent = require('./components/SubmitComponent.js');
var GZ1611Component = require('./components/gz1611Component.js');
var YhyComponent = require("./components/yhy.jsx");
var LightComponent = require('./components/lightComponent.js');

ReactDOM.render(<YhyComponent/>, document.querySelector('#yhy'));
ReactDOM.render(<SubmitComponent/>, document.querySelector('#content'));

ReactDOM.render(<GZ1611Component/>, document.querySelector('#gz1611'));

ReactDOM.render(<LightComponent />, document.getElementById('light'));