const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    precio: `5.000`,
    fumador: false,
    mascotas: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    precio: `1.200`,
    fumador: true,
    mascotas: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    precio: `4.500`,
    fumador: false,
    mascotas: true
    },
    {
    nombre: 'Extraordinaria casa de lujo',
    src: 'https://media.istockphoto.com/id/1700606835/es/foto/piscina-en-el-patio-trasero-exterior-de-una-extraordinaria-casa-de-lujo.jpg?s=2048x2048&w=is&k=20&c=aritIqL-rpvD9_mvfc4D7Me5M1n242Gl7ukZILQl00U=',
    descripcion: 'Piscina en el patio trasero exterior de una extraordinaria casa de lujo',
    ubicacion: '5055 Wilshire Blvd. Suite 860, Los Angeles CA 90036',
    habitaciones: 5,
    baños: 3,
    precio: `5.500`,
    fumador: true,
    mascotas: true
    },
    {
    nombre: 'Casa con vistas de ensueño',
    src: 'https://img.jamesedition.com/listing_images/2024/03/19/13/23/55/e5f71864-bc3d-4dfc-9c9b-3375819c5298/je/1100xxs.jpg',
    descripcion: 'Esta casa se encuentra en una loma con vistas insuperables',
    ubicacion: '1900 Avenue of the Stars, Suite 2430, Los Angeles CA90067',
    habitaciones: 3,
    baños: 2,
    precio: `3.500`,
    fumador: true,
    mascotas: false
    },
    {
    nombre: 'Descubre la casa de tus sueños',
    src: 'https://mediavault.point2.com/p2h/listing/676b/ad27/e653/0d7e8c69ec4468f126f0/nwm_w640h425.jpg',
    descripcion: 'Disfrute de agradables veladas junto a la chimenea',
    ubicacion: '67175 Rango Road, Cathedral City, Riverside County, CA, 92234',
    habitaciones: 4,
    baños: 2,
    precio: `3.800`,
    fumador: true,
    mascotas: true    
    },
    {
    nombre: '¡¡Departamento en la playa!!',
    src: 'https://mediavault.point2.com/p2h/listing/ea81/a87f/88ba/5ba62c5c0c51559bf9a2/nwm_w640h425.jpg',
    descripcion: 'No sólo estás cerca de la playa, tienes shopping y canchas de tenis',
    ubicacion: '2960 Neilson Way 103, Santa Monica, Los Angeles County, CA, 90405',
    habitaciones: 2,
    baños: 2,
    precio: `2.700`,
    fumador: true,
    mascotas: false    
    }
]

const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    precio: `2.000`,
    fumador: false,
    mascotas: true,
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    precio: `2.500`,
    fumador: true,
    mascotas: true,
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 2,
    baños: 2,
    precio: `2.200`,
    fumador: true,
    mascotas: true,
    },
    {
    nombre: 'Residencia con una ubicación increible',
    src: 'https://img.jamesedition.com/listing_images/2024/06/14/13/44/37/118fd843-a48b-4274-bab6-cc18937802be/je/1100xxs.jpg',
    descripcion: 'Esta residencia es un testimonio de la perspicacia de diseño de Yabu Pushelberg',
    ubicacion: 'Park Elm, 221 Elm Court, Los Angeles',
    habitaciones: 1,
    baños: 1,
    precio: `2.900`,
    fumador: false,
    mascotas: false,
    },
    {
    nombre: 'Disfruta de la icónica «Taggard House»',
    src: 'https://img.jamesedition.com/listing_images/2024/05/22/12/38/18/d91bc963-76bc-4140-a388-e3002fcf6b25/je/1100xxs.jpg',
    descripcion: 'Esta joya histórica es una combinación perfecta de artesanía superior y elegancia atemporal',
    ubicacion: '3731 Monteith Dr., Los Angeles',
    habitaciones: 3,
    baños: 1,
    precio: `3.700`,
    fumador: false,
    mascotas: false,
    },
    {
    nombre: 'Adorable casa mirando al océano',
    src: 'https://mediavault.point2.com/p2h/listing/94be/0847/a6e6/b4816206a3cf25fb3b9a/nwm_w640h425.jpg',
    descripcion: 'Esta hermosa casa está a solo unos pasos de la escalera de la playa',
    ubicacion: '411 Seaview DR, Rio del Mar, CA 95003',
    habitaciones: 4,
    baños: 2,
    precio: `2.900`,
    fumador: false,
    mascotas: true,   
    },
    {
    nombre: 'Bienvenido a un exclusivo nido de lujo',
    src: 'https://mediavault.point2.com/p2h/listing/50da/c3c3/ff08/3984a59bf9caf33be084/nwm_w640h425.jpg',
    descripcion: 'Luz natural y seguridad 24 horas',
    ubicacion: '3376 Fryman Pl, Studio City, Los Angeles County, CA, 91604',
    habitaciones: 3,
    baños: 3,
    precio: `2.700`,
    fumador: true,
    mascotas: false
    }
]

const propiedadVenta = document.querySelector("#ventaPropiedades")

let muestras = propiedades_venta.slice(0,3)

let templateVentas = ``

for (let muestra of muestras){
    templateVentas +=`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src=${muestra.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${muestra.nombre}
                    </h5>
                    <p class="card-text">
                        ${muestra.descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> 
                        ${muestra.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${muestra.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${muestra.baños} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${muestra.precio}</p>
                    ${muestra.fumador?
                        `<p class="text-success">
                            <i class="fas fa-smoking"></i>Permitido fumar
                        </p>`:
                        `<p class="text-danger">
                            <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>`
                    }
                    ${muestra.mascotas?
                        `<p class="text-success">
                            <i class="fas fa-paw"></i> Mascotas permitidas
                        </p>`:
                        `<p class="text-danger">
                            <i class="fa-solid fa-ban"></i> No se permiten mascotas
                        </p>`
                    }
                    
                </div>
            </div>
        </div>
    
    `
}

propiedadVenta.innerHTML = templateVentas

const propiedadAlquiler = document.querySelector("#alquilerPropiedades")
let tresMuestras = propiedades_alquiler.slice(0,3)

let templateAlquiler = ``

for (let primera of tresMuestras){
    templateAlquiler +=`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src=${primera.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${primera.nombre}
                    </h5>
                    <p class="card-text">
                        ${primera.descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        ${primera.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${primera.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${primera.baños} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>
                    ${primera.precio}</p>
                    ${primera.fumador?
                        `<p class="text-success">
                            <i class="fas fa-smoking"></i>Permitido fumar
                        </p>`:
                        `<p class="text-danger">
                            <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>`
                    }
                    ${primera.mascotas?
                        `<p class="text-success">
                            <i class="fas fa-paw"></i> Mascotas permitidas
                        </p>`:
                        `<p class="text-danger">
                            <i class="fa-solid fa-ban"></i> No se permiten mascotas
                        </p>`
                    }
                </div>
            </div>
        </div>
    `
}

propiedadAlquiler.innerHTML = templateAlquiler


