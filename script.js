// Lista de fotos
const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg","photo4.jpg", "photo5.jpg", "photo6.jpg", "photo7.jpg", "photo8.jpg"];
// Lista de frases de amor
const captions = [
    "Son lo mas maravillo del mundo",
    "La amo a ambas, con todo mi corazón",
    "Cada día con ustedes es un regalo",
    "El estar, reir, platicar, jugar",
    "El verte crecer, y sonreir",
    "Ustedes son todo lo mejor del mundo",
    "Soy completamente feliz estando a su lado",
    "Son lo unico que deseo en el mundo"
];


let currentIndex = 0;
const photoElement = document.getElementById('photo');
const captionElement = document.getElementById('caption');
const flowerExplosionContainer = document.getElementById('flower-explosion');

// Función para generar la explosión de flores
function createFlowerExplosion() {
    flowerExplosionContainer.innerHTML = ''; // Limpiar explosiones anteriores
    for (let i = 0; i < 20; i++) { // Crear 20 flores
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.setProperty('--x', `${Math.random() * 300 - 150}px`); // Coordenada X aleatoria
        flower.style.setProperty('--y', `${Math.random() * 300 - 150}px`); // Coordenada Y aleatoria
        flowerExplosionContainer.appendChild(flower);
    }
    flowerExplosionContainer.style.display = 'block';

    // Ocultar las flores después de la explosión
    setTimeout(() => {
        flowerExplosionContainer.style.display = 'none';
    }, 1000); // Duración de la explosión
}

// Función para cambiar la foto y la frase
function changePhoto() {
    createFlowerExplosion(); // Mostrar explosión antes de cambiar la foto
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % photos.length;
        photoElement.src = photos[currentIndex];
        captionElement.innerText = captions[currentIndex];
    }, 500); // Cambia la foto justo después de la explosión
}

// Cambia la foto y la frase cada 10 segundos
setInterval(changePhoto, 10000);

// Función para crear girasoles moviéndose en el fondo
function createSunflower() {
    const sunflower = document.createElement("div");
    sunflower.classList.add("sunflower");
    sunflower.style.left = Math.random() * 100 + "vw";
    sunflower.style.animationDuration = Math.random() * 5 + 10 + "s"; // Duración aleatoria
    document.getElementById("sunflower-background").appendChild(sunflower);

    // Eliminar el girasol después de que se mueva fuera de la pantalla
    setTimeout(() => {
        sunflower.remove();
    }, 15000); // Tiempo basado en la duración de la animación
}

// Crear girasoles cada 1 segundo
setInterval(createSunflower, 1000);
