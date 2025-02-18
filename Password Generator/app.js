let main = document.querySelector("#main");
let heading = document.querySelector("#heading");
let button = document.getElementById("Btn");
let lenght = +prompt("Enter your Password Lenght");
button.addEventListener("click",()=>{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0 ; i < lenght ; i++ ) {
     var randomNumber = Math.floor(Math.random() * characters.length)
     password += characters[randomNumber]
    }
    heading.textContent = password; 
})

