function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let checkbox = document.getElementById("agreement").checked;

    let name_check = false;
    let email_check = false;
    let address_check = false;
    let gender_check = false;
    let dob_check = false;
    let checkbox_check = false;

    // Validate Name
    if(name.length < 5) {
        document.getElementById("name-error").innerHTML = "Name must be longer than 5 characters";
    }
    else {
        document.getElementById("name-error").innerHTML = "";
        name_check = true
    }

    // Validate Email
    if(email.startsWith("@")) {
        document.getElementById("email-error").innerHTML = "Email must not start with @";
    }
    else if(!email.endsWith("@gmail.com")) {
        document.getElementById("email-error").innerHTML = "Email must end with @gmail.com";
    }
    else {
        document.getElementById("email-error").innerHTML = "";
        email_check = true;
    }

    // Validate Address
    let countSpace = 0;
    for (let i = 0; i < address.length; i++) {
        if(address[i] === " " && address[i + 1] != " ") {
            countSpace++;
        }
    }
    
    if(countSpace < 4) {
        document.getElementById("address-error").innerHTML = "Address must be at least 5 words";
    }
    else {
        document.getElementById("address-error").innerHTML = "";
        address_check = true;
    }

    // Validate Gender
    if(gender == ""){
        document.getElementById("gender-error").innerHTML = "Please select a gender";
    }
    else {
        document.getElementById("gender-error").innerHTML = "";
        gender_check = true;
    }

    // Validate DOB
    if(dob === '') {
        document.getElementById("dob-error").innerHTML = "Date birth is required";
    }
    else {
        let userDob = new Date(dob);
        let currentDate = new Date();
        
        if(userDob > currentDate) {
            document.getElementById("dob-error").innerHTML = "DOB must not exceed the current date";
            
        }
        else {
            let age = currentDate.getFullYear() - userDob.getFullYear();
            let month = currentDate.getMonth() - userDob.getMonth();
            let date = currentDate.getDate() - userDob.getDate();
        
            if(month < 0 || (month == 0 && date < 0)) {
                age--;
            }
        
            if(age < 17) {
                document.getElementById("dob-error").innerHTML = "You must be at least 17 years old";
            }
            else {
                document.getElementById("dob-error").innerHTML = "";
                dob_check = true;
            }
        }
    }

    // Validate Checkbox
    if(!checkbox) {
        document.getElementById("checkbox-error").innerHTML = "You must agree to the privacy requirements";
    }
    else {
        document.getElementById("checkbox-error").innerHTML = "";
        checkbox_check = true;
    }

    if(name_check && email_check && address_check && gender_check && dob_check && checkbox_check) {
        alert("You have successfully created a new account!");
        document.location.href = 'products.html';
    }
    else {
        alert("Make sure all the data are correct!");
    }
}
