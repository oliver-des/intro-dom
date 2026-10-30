//crear una lista de imagenes (array) para añadir al header.
const arrayHeaderImagenes = [
    {
        imagen: 'assets/banner assets/banner/1.jpg' ,
        alt: 'Atardecer sobre un lago.' ,
        descripcion: 'Paisaje de atardecer junto a un lago.'
    },
    {
        imagen: 'assets/banner/2.jpg' ,
        alt: 'Globos aerostaticos en cielo despejado' ,
        descripcion: 'Globos aerostáticos en cielo despejado.'
    },
    {
        imagen: 'assets/banner/3.jpg' ,
        alt: 'Nubes en puesta de sol' ,
        descripcion: 'Atardecer entre nubes.'
    },
    {
        imagen: 'assets/banner/4.jpg' ,
        alt: 'Globos aerostáticos sobre campo trigos' ,
        descripcion:'Globos aerostáticos sobre campo trigos.'
    },
    {
        imagen: 'assets/banner/5.jpg' ,
        alt: 'Luna en anochecer' ,
        descripcion: 'Anochecer en otoño.'
    },
    {
        imagen: 'assets/banner/6.jpg' ,
        alt: 'Montañas nevadas' ,
        descripcion: 'Montañas nevadas en los Alpes.'
    },
    {
        imagen: 'assets/banner/7.jpg' ,
        alt: 'Bandada de pájaros en puesta de sol' ,
        descripcion: 'Bandada de pájaros'
    },
    {
        imagen: 'assets/banner/8.jpg' ,
        alt: 'Flores de Sauce sobre rama oscura' ,
        descripcion: 'Flores de Sauce sobre rama oscura.'
    },

]
//crear otra lista de imagenes (array) para añadir en la galería (section).
const arrayCardImagenes = [
    {
        imagen: 'assets/viajes/viajes-1.jpg',
        alt: '' ,
        descripcion: '' ,
    },
     {
        imagen: 'assets/viajes/viajes-2.jpg' ,
        alt: '' ,
        descripcion: '',
    },
     {
        imagen: 'assets/viajes/viajes-3.jpg',
        alt: '' ,
        descripcion: '',
    },
     {
        imagen: 'assets/viajes/viajes-4.jpg',
        alt: '' ,
        descripcion: '',
    },
     {
        imagen: 'assets/viajes/viajes-5.jpg',
        alt: '' ,
        descripcion: '',
    },
     {
        imagen: 'assets/viajes/viajes-6.jpg',
        alt: '' ,
        descripcion: '',
    },
     {
        imagen: 'assets/viajes/viajes-7.jpg',
        alt: '' ,
        descripcion: '',
    },
]
/*Funciones header:
- funcion para crear header: meterle informacion al src y a alt.
Funciones galeria:
- funcion para crear tarjetas(card) de la galeria 
- dentro de la tarjeta(card):
        -crear un contenedor (en este caso articles)
        - crear el div para meter la imagen
        - crear elemento img cons sus atributos (alt,src)
        - crer la descripcion
        - meter la imagen en el div
        - meter el titulo, el div, la descripcion*/
