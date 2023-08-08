function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var valid = true;


    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }


    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    return valid;
}
