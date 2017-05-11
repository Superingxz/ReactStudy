var global = global || {};

global.lanType = 'cn';

global.dictionaryFactory = {
    initDictionary: function (_callback) {
        $.get('../../day04-directive/libs/dictionary/dictionary.txt?_' + Math.random(), function (response) {
            _callback(JSON.parse(response));
        })
    },
    fetchDictionary: function (_dictionary, _colName, _lanType) {
        if (typeof _lanType == 'undefined') {
            if (window.localStorage.getItem('lanType')) {
                _lanType = window.localStorage.getItem('lanType');
            } else {
                _lanType = global.lanType;
            }
        }
        if (_dictionary && _dictionary[_colName]) {
            return _dictionary[_colName][_lanType];
        }
        return null;
    }
}