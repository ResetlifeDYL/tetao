/**
 * Created by DLY on 2017/11/8.
 */
$(function(){

//    登录表单校验
//    1.用户名不能为空
//    2.用户密码不能为空
//    3.密码长度为6-12

    var $form = $("form")

//    调用插件校验
    $form.bootstrapValidator({
        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields:{
            //对应的校验属性
            username:{
            //    规则
                validators: {
                //    不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                //    返回错误结果
                    callback:{
                        message: '用户名错误'
                    }
                }
            },
            password: {
            //    规则
                validators: {
                //    不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                //    验证密码长度
                    stringLength:{
                        min: 6,
                        max: 12,
                        message: '密码长度在6-12位之间'
                    },
                //    返回错误结果
                    callback: {
                        message:'密码错误'
                    }
                }
            }
        }
    })

//    给表单注册一个校验成功事件
    $form.on('success.form.bv',function(e){
        //阻止默认行为
        e.preventDefault();
        //console.log(1111);

    //    使用ajax发送请求
        $.ajax({
            type:'post',
            url: '/employee/employeeLogin',
            data:$form.serialize(),
            success:function(data){
                //console.log(data);
                //    判断  用户名和密码正确就跳转到登录页
                if(data.success == true){
                    location.href = "index.js.html";
                }

                if(data.error === 1000){
                    //alert("用户名不存在")
                    $form.data('bootstrapValidator').updateStatus("username","INVALID","callback");
                }

                if(data.error === 1001){
                    //alert("密码错误")
                    $form.data('bootstrapValidator').updateStatus("password","INVALID","callback");
                }
            }
        })
    });

//    表单重置功能
    $("[type='reset']").on('click',function(){
        //console.log(111);
        //获取表单校验实例
        $form.data('bootstrapValidator').resetForm();
    });
});