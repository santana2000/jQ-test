 

$(function () {

    //下拉菜单实现
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

    //---------------------------------------
    //教务系统侧栏实现
    var student = $('.student');
    var span = $('.student span');

    console.log($('.click-show'));

    span.on('click',function () {
        $(this).next('div').show();
        $(this).parent('.click-show').siblings('li').children('div').hide();

    })




})



