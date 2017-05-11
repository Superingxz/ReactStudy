var global = global || {};

$(function () {
    $('.dk-body').css({ height: $(document).height() - $('.dk-header').height() - $('.dk-footer').height() })

    $('.dk-contianer').load('home.html?_' + Math.random());

    $('.dk-menu a').click(function () {
        $('.dk-contianer').load($(this).text() + '.html?_' + Math.random());
    })
})