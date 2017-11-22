$(document).ready(function () {
    $('#top-lang-panel').on('click', firstButtonHandler);
    $('#drop-lang-panel').on('click', secondButtonHandler);

    function secondButtonHandler() {
        $('#drop-lang-panel').removeClass();
        $('#drop-lang-panel').addClass('top-panel-lang-panel-container')
        $('#top-lang-panel').removeClass();
        $('#top-lang-panel').addClass('drop-lang-cont');
        $('span#drop-lang-panel-inner').css('color', '#009a49');
        $('span#top-lang-panel-inner').css('color', '#ffffff');
    }

    function firstButtonHandler() {
        $('#drop-lang-panel').removeClass();
        $('#drop-lang-panel').addClass('drop-lang-cont')
        $('#top-lang-panel').removeClass();
        $('#top-lang-panel').addClass('top-panel-lang-panel-container');
        $('span#drop-lang-panel-inner').css('color', '#ffffff');
        $('span#top-lang-panel-inner').css('color', '#009a49');
    }
});
$(document).ready(function () {
    $('#goods-list').on('click', function () {
        $('#the-list').slideToggle(0, function () {
            $('#goodslistarrow').toggleClass('goods-list-arrow-rotate');
            $(this).toggleClass('expand').css('display', '');
        })
    })
});


