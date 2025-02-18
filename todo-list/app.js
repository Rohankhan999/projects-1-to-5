var input = document.getElementById('post');
var button = document.getElementById('btn');
var main = document.getElementById('main');

button.addEventListener("click",()=>{
    if(input.value === ""){
    alert("Please Enter fill Input Field ")
    return;
    }
    main.innerHTML += `<div class="subpost">${input.value}<div>`
    input.value = "";
});