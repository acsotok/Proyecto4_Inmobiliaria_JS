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

const tarjetaContenedor = document.querySelector("#ventas_propiedades")
let html = ``

for (let propiedad_venta of propiedades_venta){
    html +=`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src=${propiedad_venta.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${propiedad_venta.nombre}
                    </h5>
                    <p class="card-text">
                        ${propiedad_venta.descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> 
                        ${propiedad_venta.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad_venta.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${propiedad_venta.baños} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${propiedad_venta.precio}</p>
                    ${propiedad_venta.fumador?
                        `<p class="text-success">
                            <i class="fas fa-smoking"></i>Permitido fumar
                        </p>`:
                        `<p class="text-danger">
                            <i class="fas fa-smoking-ban"></i> No se permite fumar
                        </p>`
                    }
                    ${propiedad_venta.mascotas?
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
