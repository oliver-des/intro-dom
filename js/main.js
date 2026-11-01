//crear una lista de imagenes (array) para añadir al header.
const arrayHeaderImagenes = [
    {
        imagen: 'assets/banner/1.jpg',
        alt: 'Atardecer sobre un lago.',
    },
    {
        imagen: 'assets/banner/2.jpg',
        alt: 'Globos aerostaticos en cielo despejado',
    },
    {
        imagen: 'assets/banner/3.jpg',
        alt: 'Nubes en puesta de sol',
    },
    {
        imagen: 'assets/banner/4.jpg',
        alt: 'Globos aerostáticos sobre campo trigos',
    },
    {
        imagen: 'assets/banner/5.jpg',
        alt: 'Luna en anochecer',
    },
    {
        imagen: 'assets/banner/6.jpg',
        alt: 'Montañas nevadas',
    },
    {
        imagen: 'assets/banner/7.jpg',
        alt: 'Bandada de pájaros en puesta de sol',
    },
    {
        imagen: 'assets/banner/8.jpg',
        alt: 'Flores de Sauce sobre rama oscura',
    },

]
//crear otra lista de imagenes (array) para añadir en la galería (section).
const arrayCardImagenes = [
    {
        imagen: 'assets/viajes/viajes-1.jpg',
        alt: 'Mujer descansando en hamaca',
        descripcion: 'Maldivas.',
    },
    {
        imagen: 'assets/viajes/viajes-2.jpg',
        alt: 'Cabañas sobre el agua',
        descripcion: 'Bora Bora.',
    },
    {
        imagen: 'assets/viajes/viajes-3.jpg',
        alt: 'Señales indicando la dirección hacia diferentes paises',
        descripcion: 'Señales.',
    },
    {
        imagen: 'assets/viajes/viajes-4.jpg',
        alt: 'Plaza de Sevilla',
        descripcion: 'Sevilla.',
    },
    {
        imagen: 'assets/viajes/viajes-5.jpg',
        alt: 'Puente en Sevilla',
        descripcion: 'Sevilla.',
    },
    {
        imagen: 'assets/viajes/viajes-6.jpg',
        alt: 'Carretera con túnel en la costa.',
        descripcion: 'Costa.',
    },
    {
        imagen: 'assets/viajes/viajes-7.jpg',
        alt: 'Castillo en la montaña sobre casas.',
        descripcion: 'Granada.',
    },
]
//Funciones header:
//- funcion para crear header: meterle informacion al src y a alt. 
function imagenHeaderAleatoria() {
    //creamos variable y seleccionamos la imagen por ID.
    const imagenCabezera = document.getElementById("imagen-header");
    //creamos variable para guardar operacion de un elemento aleatorio del array.
    const imagenAleatoria = Math.floor(Math.random() * arrayHeaderImagenes.length)
    //creamos variable para almacenar elemento aleatorio del array
    const imagenSeleccionada = arrayHeaderImagenes[imagenAleatoria]

    //asignamos atributos(src y alt)
    imagenCabezera.setAttribute("src", imagenSeleccionada.imagen);
    imagenCabezera.setAttribute('alt', imagenSeleccionada.alt);

}
//Si no llamamos a la funcion, no se ejecuta:
imagenHeaderAleatoria()


/*Funciones galeria:
- funcion para crear tarjetas(card) de la galeria 
- dentro de la tarjeta(card):
        -crear un contenedor (en este caso articles)
        - crear el div para meter la imagen
        - crear elemento img cons sus atributos (alt,src)
        - crer la descripcion
        - meter la imagen en el div
        - meter el titulo, el div, la descripcion*/
