function submit_form() {
    alert("Login successfully");
}
function create_account() {
    var n = document.getElementById("n1").value;
    var e = document.getElementById("e1").value;
    var p = document.getElementById("p1").value;
    var cp = document.getElementById("p2").value;

    // password validation
    var letters = /^[A-Za-z]+$/;
    var email_val = /^([a-zA-Z0-9-\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // other validations
    if (n == '' || e == '' || p == '' || cp == '') {
        alert("Enter each details correctly");
    } else if (!letters.test(n)) {
        alert('Name is incorrect must contain alphabets only')
    } else if (!email_val.test(e)) {
        alert('Invalid email format please enter valid email')
    } else if (p != cp) {
        alert('Passwords not mactching')
    }
    else if (document.getElementById("p1").value.length > 12) {
        alert('Password maximum length is 12')
    }
    else if (document.getElementById("p1").value.length < 6) {
        alert("Password minimum length is 6");
    }
    else {
        alert("Your account has been created succesfuly...");
    }
}
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})
