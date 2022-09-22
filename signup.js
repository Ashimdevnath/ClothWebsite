function validate() {

    let x = document.forms["myform"]["email"].value;
    let y = document.forms["myform"]["passward"].value;


    if (x == null || x == "") {
        alert("Please fill the email field.");
        return false;
    }
    else if (y == null || y == "") {
        alert("Please fill the password field.");
        return false;
    }
}
