(() => {
    let open = false;
    let bars = document.querySelector("#expander");
    let dropdown = document.querySelector(".dropdown");
    bars.addEventListener("click", () => {
        if (!open) {
            dropdown.style.display = "flex";
        } else {
            dropdown.style.display = "none";
        }
        open = !open;
    });
})();