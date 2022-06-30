function makeRows() {
    container.style.setProperty("--grid-rows", 3);
    container.style.setProperty("--grid-cols", 4);
    for (let i = 0; i < (3*4); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};