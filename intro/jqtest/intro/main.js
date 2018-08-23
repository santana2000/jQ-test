//测试
console.log(1);

//快速注释 ctrl + /


//document.getElementsByClassName('top').style.borderColor='red';
//选择器
$('.top').css('background','pink');
$('#a').css('color','gray');
$('#a p').css('border','white 2px solid');
$('#b').css('background','gray');
$('input[type=text]').css('background','green');
//$('div:last').css('background','brown');


//过滤器
//注意 opacity 和 rgba() 的区别
//1.从上往下找
$('.yeye').find('#c1').css('background','green');

//2.从下往上找
$('#c2').parent().css('background','pink');
$('#c2').parent().css('border','purple 2px solid');
$('.erzi').parents('.yeye').css('border','pink 1px solid ');

//3.同级寻找
$('.erzi').filter('#c3').css('background','yellow');


//操作样式
//1.多个样式以对象的形式来写
$('#css').css({
    //display:'none',
    color:'white',
    backgroundColor:'black',
    border:'gray 2px solid'
})

//2.把样式看作是变量，将其赋值给页面元素
$('.css1').addClass('example');
//$('.css1').removeClass('example');

//3.隐藏元素
$('#css').show();   //函数记得加括号
$('.css1').hide();
$('#css').fadeOut(2000);
$('.css1').fadeIn(3000);
console.log($('.css1').hasClass('example'));

