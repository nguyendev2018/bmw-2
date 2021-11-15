function validation() {
    var kq = true;
    var Name = document.forms[0].Name.value;
    var Email = document.forms[0].Email.value;
    var Phone = document.forms[0].Phone.value;
    var Type = document.forms[0].Type.value;

    if (Name == "") {
        alert("Name can not be empty ! ");
        return false;
    }
    if (Email == "") {
        alert("Email can not be empty ! ");
        return false;
    }
    if (Phone == "") {
        alert("Phone can not be empty ! ");
        return false;
    }
    if (Type == "") {
        alert("Type can not be empty ! ");
        return false;
    }
    if (kq == true) {
        alert("Chúc mừng bạn đã đăng nhập thành công!");
    }
    return kq;
}