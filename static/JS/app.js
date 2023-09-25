        // show password toggler

        let showPasswordBtn=document.querySelector('.show-password');
        let passwordInp=document.querySelector('.password-input');
        let passwordchecklist=document.querySelectorAll('.list-item');

        showPasswordBtn.addEventListener('click', () => {
            // toggle icon

            showPasswordBtn.classList.toggle('fa-eye');
            showPasswordBtn.classList.toggle('fa-eye-slash');

            // Toggle password visibility
            if (passwordInp.type === 'password') {
                passwordInp.type = 'text'; // Show password
            } else {
                passwordInp.type = 'password'; // Hide password
            }

})
// string password validation
let validationRegex = [
    { regex:/.{8,}/},       //min 8 letters,
    { regex:/[0-9]/},       //numbers from 0 to 9,
    { regex:/[a-z]/},       //letters from a to z,
    { regex:/[A-Z]/},       //letters from A-Z
    { regex:/[^A-Za-z0-9]/}//special charecters
]
passwordInp.addEventListener('keyup', () => {
    validationRegex.forEach((item, i) => {
        let isValid = item.regex.test(passwordInp.value)

        if(isValid){
            passwordchecklist[i].classList.add('checked');

        } else{
            passwordchecklist[i].classList.remove('checked');
        }
    })
})