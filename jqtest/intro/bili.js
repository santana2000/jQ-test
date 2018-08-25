
//事件
//公告牌
var boardTrigger=$('#board-trigger');
var board=$('#board');

boardTrigger.on('click',function () {
    if(board.is(':visible')){         //判断条件****
        board.slideUp();
        boardTrigger.text('展开公告')  //完善


    }else {
        board.slideDown();
        boardTrigger.text('收起公告')
    }
})

board.on('mouseenter',function () {
    board.addClass('active');
})

board.on('mouseleave',function () {
    board.removeClass('active');
})

//---------------------------------------------------------------------------
//操作元素属性
//attr和prop的区别
console.dir($('#me'));               //通过dir打印
$('#me').attr('name','333');
$('#me').attr('xiaohua','ni');           //标签（元素）的属性
$('#me').prop('textContent','biehaha');  //DOM对象的属性
//$('#me').removeAttr('xiaohua');  //DOM对象上的属性值

//-----------------------------------------------------------------------------
//表单输入与提交
var name=$('#username').val();
console.log('name:',name);

var btn1=$('#btn1').on('click',function () {
    $('#info').submit();
})


