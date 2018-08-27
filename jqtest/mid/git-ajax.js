

//JQ通过ajax实现github用户查询

//这一节细节错误好多！！！！

var search=$('#search');
var gituser=$('input#gituser');
var gitfind=$('#gitfind');
var content=$('#content');
var name;

gitfind.on('click',function (e) {
    //search.on('submit',function (e) {
        e.preventDefault();
        name =gituser.val();
        $.ajax({
            url:'http://api.github.com/users/' + name,

            success:function (data) {
                console.log('data:',data);
                var htmluse =
                    '<div>用户名:'+ data.login+'</div>' +        //去引号
                    '<div>ID:'+ data.id+'</div>' +
                    '<div>简介:'+ (data.bio||'暂无')+'</div>' ;  //加括号


                content.html(htmluse);              //去引号

            },
            error:function () {
                alert('请求出错，请稍后尝试')
            }
        })

    //})

})