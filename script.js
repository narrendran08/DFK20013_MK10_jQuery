function semak() {
    var user = $("#username").val();
    var pass = $("#password").val();

    if (user == "" || pass == "") {
        alert("Sila isi kedua-dua ruang tersebut");
        return false;
    }

    if (user === "admin" && pass === "1234") {
        alert("Login Berjaya!");
        return true;
    } else {
        alert("Username atau Password salah!");
        $("#username").val("");
        $("#password").val("");
        $("#username").focus();
        return false;
    }
}