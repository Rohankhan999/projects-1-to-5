let btn = document.getElementById("btn");
btn.addEventListener("click", () => {

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let color = `rgb(${r},${g},${b})`;
    console.log(color);

    document.body.style.backgroundColor = color;
});
