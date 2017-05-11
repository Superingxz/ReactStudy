$(function () {
    if ($('dkgrid')[0]) {
        var _api = $('dkgrid').attr('api');
        var _replace = $('dkgrid').attr('replace') && $('dkgrid').attr('replace') == 'true';
        var dkgrid = $('<div class="bs-example"><table class="table"><thead></thead><tbody></tbody></table></div>')
        if (_replace) {
            dkgrid.insertBefore('dkgrid');
            $('dkgrid').remove();
        } else {
            dkgrid.appendTo($('dkgrid'));
        }
        
        $.get(_api, function (response) {
            var th = '';
            global.dictionaryFactory.initDictionary(function (_dict) {
                for (var key in response.data[0]) {
                    th += '<th>';
                    th += global.dictionaryFactory.fetchDictionary(_dict, key);
                    th += '</th>';
                }
                $('<tr>' + th + '</tr>').appendTo($('thead', dkgrid));
            })

            for (var i = 0; i < response.data.length; i++) {
                var tr = '<tr>';
                var td = '';
                for (var key in response.data[0]) {
                    td += '<td>';
                    td += response.data[i][key];
                    td += '</td>';
                }
                tr += td;
                tr += '</tr>';
                $(tr).appendTo($('tbody', dkgrid));
            }
        })
    }
})