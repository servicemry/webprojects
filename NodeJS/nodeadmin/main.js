var config = {
    authDomain: "wd9817221481crucan.wilddog.com",
    syncURL: "https://wd9817221481crucan.wilddogio.com"
  };
  wilddog.initializeApp(config);
  var connection = wilddog.sync().ref();//定义数据库连接对象

//添加form表单提交事件
document.getElementById('contactForm').addEventListener('submit',submitForm)
function submitForm(e) {
    e.preventDefault();
    var name=getInputValue("name");
    var email=getInputValue("email");
    var phone=getInputValue("phone");
    var company=getInputValue("company");
    var message=getInputValue("message");  
    saveForm(name,email,phone,company,message);//保存到数据库
    document.querySelector(".alert").style.display="block";//显示提示信息
    //显示3秒消失
    setTimeout(() => {
        document.querySelector(".alert").style.display="none";
    }, 3000);
    //清空表单
    document.getElementById('contactForm').reset();
}

function getInputValue(id){
    return document.getElementById(id).value;
}

function saveForm(name,email,phone,company,message){
    connection.child('message').push({
        name:name,
        email:email,
        company:company,
        phone:phone,
        message:message
    });
}
