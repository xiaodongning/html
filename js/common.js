$(function () {
    var bar = $('.menu-bar');
    var timer = null;
    var timeEnd = null;
    $('#menu li').mouseenter(function () { 
        var othis = $(this);
        bar.css({
            left: othis.position().left + parseFloat(othis.css('marginLeft'))
            , top: othis.position().top + othis.height() - bar.height()
        });
        timer = setTimeout(function () { 
            bar.css({
                width: othis.width()
                ,opacity: 1
            });
        }, 100);
        clearTimeout(timeEnd);
    }).mouseleave(function () { 
        var othis = $(this);
        clearTimeout(timer);
        timeEnd = setTimeout(function () { 
            bar.css({
                width: 0
                ,left: bar.position().left + bar.width() / 2 
                ,opacity: 0
            });
        },100);
        });
    //banner
    $(".banner").Slide({
        effect:"fade",
        speed:600,
        timer:5000
    });

});