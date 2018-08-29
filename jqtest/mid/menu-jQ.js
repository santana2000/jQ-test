 
//下拉菜单实现
$(function () {

    var language = $('.language');
    var vue = $('#vue');
    var next = $('.next');

    language.on('mouseover',function () {
        //console.log(vue);
        $(this).children('ul').show();
    });
    language.on('mouseleave',function () {
        $(this).children('ul').hide();
    });


})


