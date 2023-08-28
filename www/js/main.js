function checkForm(el) {

    var login = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";

    if ((login == "") || (pass == "") || (repass == "") || (state == "")) {
        fail = "Нужно заполнить все поля!";
    } else {
        if (pass != repass)
            fail = "Пароли должны совпадать!"
    }


    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
        return false;
    } else {
        alert("Всё заполнено верно!");

        return true;
    }
}







