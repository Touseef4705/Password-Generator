const PasswordGenerate = document.getElementById("PasswordGenerate");
const showCode = document.getElementById("showCode");
const passwordDigit = document.getElementById("numeric-digits");
const upperLetter = document.getElementById("uppercase-letters");
const lowerLetter = document.getElementById("lowercase-letters");



function generatePassword() {
    const digits = '0123456789';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    function getRandomCharacter(pass) {
        return pass.charAt(Math.floor(Math.random() * pass.length));
    }

    let password = '';

    for(let i = 0 ; i < passwordDigit.value ; i++){
        password += getRandomCharacter(digits)
    } 
    for(let i = 0 ; i < upperLetter.value ; i++){
        password += getRandomCharacter(uppercaseLetters)
    }
    for(let i = 0 ; i < lowerLetter.value ; i++){
        password+= getRandomCharacter(lowercaseLetters)
    }

    console.log(password.length)
    password = password.split(''); 
    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]]; 
        // console.log(password = password.join(""))
    }
    password = password.join(''); 

    return password;
}

PasswordGenerate.addEventListener("click" , ()=>{
    if(passwordDigit.value == "" || upperLetter.value == "" ||  lowerLetter.value == ""){
        alert("Please Fill All Inputs")
    }else{
        const password = generatePassword();
        showCode.innerText = password
        // console.log(password);
    }

})

