//jQuery入口函数

$(function () {
    //1.输入内容后才能点击发布按钮

    $('.release').attr('disabled',false);





    $('.release').click(function () {

        var words = $('.write').val();

        var  x = $('<div class="content">\n' +
            '            <div class="main-word">\n' +
                              words+
            '            </div>\n' +
            '            <div class="commit">\n' +
            '                <span class="time">'+nowTime()+'</span>\n' +
            '                <span class="zan">删除</span>\n' +
            '            </div>\n' +
            '        </div>');

        function nowTime() {
            var date = new Date();
            var a = date.getFullYear();
            var b = date.getMonth()+1;
            var c = date.getDate();
            var today = a+'-'+b+'-'+c;
            return today

        }

        $('.center').append(x);
        console.log('hh.log');
    });


    $('.center').delegate('.zan','click',function () {

        $(this).parents('.content').remove();
    })




    //2.内容发布后显示在指定区域

})