// =========================================================
// CONFIGURACIÓN GLOBAL DE LOS JUEGOS
// =========================================================
// Este archivo se carga en TODOS los juegos.
// Aquí defines las palabras y sus imágenes disponibles.
//
// Cada palabra tiene un array de imágenes.
// Puedes poner 1, 2, 3, 4 o 5 imágenes por palabra.
// El juego elegirá una aleatoriamente cada partida.
//
// IMPORTANTE:
// - Las imágenes deben estar en: assets/terms/
// - Nombres: PrimeraMayuscula + numero + .extension
// - Extensiones soportadas: png, jpg, jpeg, webp, gif
// =========================================================

const PALABRAS_JUEGO = [
    {
        palabra: 'Ball',
        imagenes: ['Ball1.png', 'Ball2.png']
    },
    {
        palabra: 'Basket',
        imagenes: ['Basket1.png', 'Basket2.png']
    },
    {
        palabra: 'Player',
        imagenes: ['Player1.png', 'Player2.png']
    },
    {
        palabra: 'Pass',
        imagenes: ['Pass1.png', 'Pass2.png']
    },
    {
        palabra: 'Shoot',
        imagenes: ['Shoot1.png', 'Shoot2.png']
    },
    {
        palabra: 'Dribble/Bounce',
        imagenes: ['Bounce1.png', 'Bounce2.png', 'Bounce3.png']
    },
    {
        palabra: 'Jump',
        imagenes: ['Jump1.png', 'Jump2.png']
    },
    {
        palabra: 'Court',
        imagenes: ['Court1.png', 'Court2.png']
    },
    {
        palabra: 'Coach',
        imagenes: ['Coach1.png', 'Coach2.png']
    },
    {
        palabra: 'Backboard',
        imagenes: ['Backboard1.png', 'Backboard2.png']
    },
    {
        palabra: 'Rim',
        imagenes: ['Rim1.png']
    },
    {
        palabra: 'Rebound',
        imagenes: ['Rebound1.png', 'Rebound2.png']
    },
    {
        palabra: 'Offense',
        imagenes: ['Offense1.png', 'Offense2.png']
    },
    {
        palabra: 'Defense',
        imagenes: ['Defense1.png', 'Defense2.png']
    },
    {
        palabra: 'Score',
        imagenes: ['Score1.png', 'Score2.png']
    },
    {
        palabra: 'Team',
        imagenes: ['Team1.png', 'Team2.png']
    }
];

// =========================================================
// RUTA BASE DE LAS IMÁGENES
// =========================================================
const RUTA_TERMS = 'assets/terms/';
const RUTA_LOGOS = 'assets/logos/';

// =========================================================
// FUNCIÓN: elegir una imagen aleatoria por palabra
// =========================================================
// Devuelve un array con la misma estructura que PALABRAS_JUEGO
// pero con una sola imagen aleatoria por palabra.
// =========================================================
function elegirImagenesAleatorias() {
    return PALABRAS_JUEGO.map(item => {
        const randomIdx = Math.floor(Math.random() * item.imagenes.length);
        return {
            palabra: item.palabra,
            imagen: item.imagenes[randomIdx],
            rutaCompleta: RUTA_TERMS + item.imagenes[randomIdx]
        };
    });
}

// =========================================================
// FUNCIÓN: obtener la ruta completa de una imagen
// =========================================================
function getRutaImagen(nombreImagen) {
    return RUTA_TERMS + nombreImagen;
}

// =========================================================
// LOG EN CONSOLA (para debug)
// =========================================================
console.log('📝 config.js cargado: ' + PALABRAS_JUEGO.length + ' palabras disponibles');
