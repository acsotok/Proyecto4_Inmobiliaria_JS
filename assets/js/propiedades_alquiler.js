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


const tarjetaContenedor = document.querySelector("#alquiler_propiedades")
let html = ``

for (let propiedad_alquiler of propiedades_alquiler){
    html +=`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src=${propiedad_alquiler.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${propiedad_alquiler.nombre}
                    </h5>
                    <p class="card-text">
                        ${propiedad_alquiler.descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i>
                        ${propiedad_alquiler.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad_alquiler.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${propiedad_alquiler.baños} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad_alquiler.precio}</p>
                    ${propiedad_alquiler.fumador?
                        `<p class="text-success">
                            <i class="fas fa-smoking"></i>Permitido fumar
                        </p>`:
                        `<p class="text-danger">
                            <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>`
                    }
                    ${propiedad_alquiler.mascotas?
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

tarjetaContenedor.innerHTML = html