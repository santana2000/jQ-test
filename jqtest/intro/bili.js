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