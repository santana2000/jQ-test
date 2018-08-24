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
$('#c2').parent().css('border','cadetblue 2px solid');
$('.erzi').parents('.yeye').css('border','cadetblue 1px solid ');

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

//4.apply
var lgd= $('#lgd');
function change1() {
    if(lgd.hasClass('active')){

        lgd.removeClass('active');


    }else {
        lgd.addClass('active');


    }
}
var dong=$('#dong');
function change2() {
    if(dong.hasClass('active')){

        dong.removeClass('active');
        dong.fadeOut(200);

    }else {
        dong.addClass('active');
        dong.show();
    }

}
setInterval(change1,500);
setInterval(change2,1000);

//操作dom
console.log($('.words').text());
console.log($('.words').html());

$('.words').append('<em>news222</em>');
$('.words').prepend('<em>news111</em>');

$('.words').append('news');
$('.words span').remove();
































