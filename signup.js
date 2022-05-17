let pw1 = document.getElementById('password1');
let pw2 = document.getElementById('password2');
let errormsg = document.getElementById('errorMsg');
pw1.addEventListener('input', () => validatePassword());
pw2.addEventListener('input', () => validatePassword());

function validatePassword() {
    console.log('pw1 event');
    if (pw1.checkValidity() === true && pw2.checkValidity() === true) {
        if (pw1.value === pw2.value) {
            console.log('pw ok');
            errormsg.setAttribute('style', 'display: none;');
            pw1.setAttribute('style', 'border: 1px solid green');
            pw2.setAttribute('style', 'border: 1px solid green');
        }
        else {
            errormsg.setAttribute('style', 'display: inline-block;');
            pw1.setAttribute('style', 'border: 1px solid red');
            pw2.setAttribute('style', 'border: 1px solid red');
        }
    }
    else {
        if (pw1.checkValidity() === false) {
            pw1.classList.add('error');
        }
        else {
            pw1.classList.remove('error');
        }
        if (pw2.checkValidity() === false) {
            pw2.classList.add('error');
        }
        else {
            pw2.classList.remove('error');
        }
    }
}