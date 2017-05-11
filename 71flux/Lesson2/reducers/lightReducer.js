var {CHANGE_GREEN, CHANGE_YELLOW, CHANGE_RED} = require('../constants/lightConstant');

module.exports = function(state,action){
	var initState;	
	switch(action.type){
		case CHANGE_GREEN:
			initState = {
				color: 'green',
				time: 5
			};
			break;
		case CHANGE_YELLOW:
			initState = {
				color: 'yellow',
				time:3
			}
			break;
		case CHANGE_RED:
			initState = {
				color: 'red',
				time: 7
			};
			break;
		default:
			initState = {
				color: 'red',
				time: 7
			};			
	}
	return initState;
}