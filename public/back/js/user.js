/**
 * Created by DLY on 2017/11/10.
 */

$(function(){

    //    记录当前页
    var currentPage = 1;
    //记录每页的数量
    var pageSize = 5;

    function render (){
        //    发送ajax请求渲染页面

        $.ajax({
            type: "get",
            url: '/user/queryUser',
            data: {
                page:currentPage,
                pageSize:pageSize,
            },
            success: function(data){
                //console.log(data);
                var html = template("tpl",data);
                $("tbody").html(html);

                //渲染分页
                $("#paginator").bootstrapPaginator({
                    bootstrapMajorVersion:3,//指定bootstrap的版本，如果是3，必须指定
                    currentPage:currentPage,//指定当前页
                    totalPages:Math.ceil(data.total/pageSize),//指定总页数
                    onPageClicked:function (a,b,c, page) {
                        //page指的是点击的页码,修改了当前页
                        currentPage = page;
                        //重新渲染
                        render();
                    }
                });
            }
        })
    }

     render();

});