function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value
    var addr = document.getElementById("addr").value

    if(fname != "" && lname != "" && city != ""&& phone != "" && addr != ""){
        alert("Successfully Registered");
        return true;
    }
    else{
        alert("Enter the details");
        return false;
    }
}