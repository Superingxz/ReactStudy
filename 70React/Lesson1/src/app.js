var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var SwiperComponent = require('./components/swiper/swiperComponent');
var DatagridCompnent = require('./components/datagrid/DatagridComponent.js');

// ReactDOM.render(<SwiperComponent width={500}/>, document.getElementById('div1'));
// 
ReactDOM.render(<DatagridCompnent api="http://10.3.135.73/course/api/api/student/FetchAllStudent"/>, document.getElementById('div1'));