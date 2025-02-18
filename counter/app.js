document.addEventListener("DOMContentLoaded", function () {
    let main = document.getElementById("main"); // Correct ID selection
    if (!main) {
        console.error("Element #main not found!");
        return;
    }

    let number = 0;

    main.innerHTML = `
        <div><button id="decrease">-</button></div>
        <div id="counter">${number}</div>
        <div><button id="increase">+</button></div>
    `;

    document.getElementById("increase").addEventListener("click", function () {
        number++;
        document.getElementById("counter").innerText = number;
    });

    document.getElementById("decrease").addEventListener("click", function () {
        if (number > 0) { 
            number--;
            document.getElementById("counter").innerText = number;
        }
    });
    document.getElementById("reset").addEventListener("click", function () {
        number = 0; // Reset to 0
        document.getElementById("counter").innerText = number;
    });
});
