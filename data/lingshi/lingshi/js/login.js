$(document).ready(function () {
    //读取 localStage 本地存储，填充用户名密码,如果自动登录有值直接跳转；
    //相反，跳转到本页面,等待登陆处理
    var storage = window.localStorage;
    //获取   储存的emali
    var getEmail = storage["email"];
    //获取 储存的密码
    var getPwd = storage["password"];
    //获取状态码 是否记住密码
    var getisstroepwd = storage["isstorePwd"];
    if ("yes" == getisstroepwd) {
            if ((("" != getEmail) || (null != getEmail)) && (("" != getPwd) || (null != getPwd))) {
                $("#email").val(getEmail);
                $("#password").val(getPwd);
                $.ajax({
                    url: 'LoginServlet.ashx',
                    data: {
                        email: getEmail,
                        password: getPwd
                    },
                    dataType: 'json',
                    success: function (data) {
                        if (data.msg == "") {
                            console.log("账号信息异常，请核实后重新登录");
                        } else {
                            //登录成功后保存session，如果选择了记住密码，再保存到本地
                            window.location.href ="recommend.html"
                        }
                    },
                    error: function () {
                        alert("系统错误");
                    }
                });
            }
        }
        else {
            $("#email").val(getEmail);
            $("#password").val(getPwd);
            document.getElementById("isRemberPwdId").checked = true;
        }
});


function login() {
    var userEmail = $("#email").val();
    var userPassWord = $("#password").val();
    if (userEmail != "" && userPassWord != "") {
        var storage = window.localStorage;
        //记住密码
        if (document.getElementById("isRemberPwdId").checked) {
            //存储到loaclStage
            storage["email"] = userEmail;
            storage["password"] = userPassWord;
            storage["isstorePwd"] = "yes";
        }
        else {
            storage["email"] = userEmail;
            storage["isstorePwd"] = "no";
        }
        $.ajax({
            url: 'LoginServlet.ashx',
            data: {
                "email": userEmail,
                "password": userPassWord
            },
            dataType: 'json',
            success: function (data) {
                if (data.msg == "") {
                    console.log("账号信息异常，请核实后重新登录");
                } else {

                }
            },
            error: function () {
                console.log("系统错误");
                window.location.href="recommend.html"

            }
        });
    }
    else {
        $(".login_note").text("用户名密码不能为空");
    }
}
