 
//下拉菜单实现
$(function () {

    var language = $('.language');
    var next = $('.next');

    language.on('mouseover',function () {
        $(this).children('.next').show();
    });
    language.on('mouseleave',function () {
        $(this).children('li').hide();
    });
    console.log('as')

})


