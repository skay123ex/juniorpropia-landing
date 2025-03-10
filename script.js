document.addEventListener("DOMContentLoaded", function() {
    console.log("Junior Prop IA cargado correctamente.");

    // Efecto de hover en los servicios
    const serviceBoxes = document.querySelectorAll(".service-box");
    serviceBoxes.forEach(box => {
        box.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";
        });
        box.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
