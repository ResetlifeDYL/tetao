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
                    callback: '用户名错误'
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
                    callback: '密码错误'
                }
            }
        }
    })

})