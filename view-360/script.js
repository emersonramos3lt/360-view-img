const container = document.querySelector(".container");
const image = document.querySelector(".car-image");

const cursor = {
    isDragging: false,
    initialPosition: 0,
};

let currentImage = 1; // Começa na img 1

const updateImage = (direction) => {

    // Usamos o if para atualizar a img e caso chegue na img 12 (currentImage) ele irá mudar para a img 1 novamente. Porque a img 13, 14... não existe
    if (direction < 0) {
        if (currentImage == 12) {
            currentImage = 1;
        } else {
            currentImage += 1;
        }
    }

    // Mesma função do if de cima porém na direção oposta
    if (direction > 0) {
        if (currentImage == 1) {
            currentImage = 12;
        } else {
            currentImage -= 1;
        }
    }

    image.src = `./images/${currentImage}.jpg`; // Atualiza a imagem no HTML
}

container.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX;
}); // Irá ativar quando clicar e arrastar o mouse

container.addEventListener("mouseup", (event) => {
    cursor.isDragging = false;
}); // Irá desativar quando soltar o mouse

container.addEventListener("mousemove", ({ clientX }) => { // Saberemos em qual posição está acontencendo o Event com esse container


    if (!cursor.isDragging) return; // ! = false

    const offset = cursor.initialPosition - clientX;

    if (Math.abs(offset) >= 50) {
       updateImage(offset);
        cursor.initialPosition = clientX;
    }


}); // No if, sempre que o mouse ser arrastado até na posição 50, ele irá mudar de imagem.