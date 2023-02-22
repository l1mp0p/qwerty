//alert("Привет, я JS");
function letGuessNum() {
   var gessNum = 5;
    var number = prompt('Введи,что-нибудь');
    console.log(number);

    if (gessNum > number){
        alert("число должно быть больше!");
        return letGuessNum();
    } 
    else if (gessNum < number){
        alert("число должно быть меньше!");
        return letGuessNum();
    }
    else{
        return alert("вы угадали!!!");
    }
}

//letGuessNum();

function reminder(){
    //alert("Ты здесь слишком долго!");
    //window.close();
    window.location.href = "https://yandex.ru/images/search?from=tabbar&text=%D0%BC%D0%B5%D0%BC%D1%8B"
    //window.open(url(gif2.gif));
}

//setTimeout(reminder, 5000);

function validForm(){
    var name = document.getElementById("name").value;
    console.log(name);
    
    var password = document.getElementById("password").value;
    console.log(password);
    
    
    var reg_name = /^[a-zа-яё]+$/i;
    var reg_password = /^[a-z0-9]{10,100}$/i;
    
    if (reg_name.test(name) == false){
        alert("Ошибка в поле ФИО!");
    }
    if (reg_password.test(password) == false){
        alert("Ошибка в поле Пароль!");
    }
}

document.querySelector(".button").addEventListener("click", validForm);

//test = document.querySelector("input")
//console.log(test);