const ficha = (estudiante) => {
  return `<div class="contenedor_ficha">
  <div class="contenedor_estudiante">
    <div class="contenedor_informacion">
      <h2 class="nombre">${estudiante.nombre}</h2>
      <div>
        <a href="${estudiante.github}">
          <span class="icon">
            <img src="../imagenes/github.svg" alt="">
          </span>
          
          <span>GitHub</span>
        </a>
        <a href="${estudiante.neocities}">
          <span class="icon">
            <img src="../imagenes/layout.svg" alt="">
          </span>
          
          <span>Neocities</span>
        </a>
        <a href="${estudiante.email}">
          <span class="icon">
            <img src="../imagenes/mail.svg" alt="">
          </span>
          <span>Email</span>
        </a>
        <a href="${estudiante.telefono}">
          <span class="icon">
            <img src="../imagenes/phone.svg" alt="">
          </span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
    <div class="contenedor_imagen">
      <img src="${estudiante.imagen}" alt="">
    </div>
  </div>
  <div class="contenedor_actividades">
    <table>
      <tr>
        <th>Actividades</th>
        <th>%UI/UX</th>
        <th>%Dev</th>
      </tr>
      <tr>
        <td>${estudiante.actividades[0].actividad}</td>
        <td>${estudiante.actividades[1].estadouiux}</td>
        <td>${estudiante.actividades[2].estadotecnico}</td>
      </tr>
      <tr>
        <td>${estudiante.actividades[0].actividad}</td>
        <td>${estudiante.actividades[1].estadouiux}</td>
        <td>${estudiante.actividades[2].estadotecnico}</td>
      </tr>
      <tr>
        <td>${estudiante.actividades[0].actividad}</td>
        <td>${estudiante.actividades[1].estadouiux}</td>
        <td>${estudiante.actividades[2].estadotecnico}</td>
      </tr>
    </table>
  </div>
  <div class="contenedor_habilidades">
    <div class="habilidad">
      <p class="porcentaje">${estudiante.valoraciones.val_html}</p>
      <p>HTML</p>
    </div>
    <div class="habilidad">
      <p class="porcentaje">${estudiante.valoraciones.val_css}</p>
      <p>CSS</p>
    </div>
    <div class="habilidad">
      <p class="porcentaje">${estudiante.valoraciones.val_js}</p>
      <p>JS</p>
    </div>
    <div class="habilidad">
      <p class="porcentaje">${estudiante.valoraciones.val_ui}</p>
      <p>UI</p>
    </div>
    <div class="habilidad">
      <p class="porcentaje">${estudiante.valoraciones.val_ux}</p>
      <p>UX</p>
    </div>
  </div>
  <p class="calificacion">Calificación: <span class="valor_calificacion">${estudiante.calificacion}</span></p>

</div>`
}

const datosEstudiantes = {
  estudiantes: [
    {
      nombre: "Fulanito de tal",
      github: "https://github.com/mirepositorio",
      neocities: "miportafolio.neocities.org",
      email: "estudiante@dominio.com",
      telefono: "3125678900",
      imagen: "../imagenes/persona_1.jpg",
      actividades: [
        {
          actividad: "actividad 1",
          estadouiux: "5%",
          estadotecnico: "2%"
        },
        {
          actividad: "actividad 1",
          estadouiux: "5%",
          estadotecnico: "2%"
        },
        {
          actividad: "actividad 1",
          estadouiux: "5%",
          estadotecnico: "2%"
        }
      ],
      valoraciones: {
        val_html: "3%",
        val_css: "4%",
        val_js: "6%",
        val_ui: "4%",
        val_ux: "9%"
      },
      calificacion: "54%"
    },
    {
      nombre: "Fulanito de tal",
      github: "https://github.com/mirepositorio",
      neocities: "miportafolio.neocities.org",
      email: "estudiante@dominio.com",
      telefono: "3125678900",
      imagen: "../imagenes/persona_2.jpg",
      actividades: [
        {
          actividad: "actividad 1",
          estadouiux: "5%",
          estadotecnico: "2%"
        },
        {
          actividad: "actividad 1",
          estadouiux: "5%",
          estadotecnico: "2%"
        },
        {
          actividad: "actividad 1",
          estadouiux: "5%",
          estadotecnico: "2%"
        }
      ],
      valoraciones: {
        val_html: "3%",
        val_css: "4%",
        val_js: "6%",
        val_ui: "4%",
        val_ux: "9%"
      },
      calificacion: "54%"
    },
    {
      nombre: "Fulanito de tal",
      github: "https://github.com/mirepositorio",
      neocities: "miportafolio.neocities.org",
      email: "estudiante@dominio.com",
      telefono: "3125678900",
      imagen: "../imagenes/persona_3.jpg",
      actividades: [
        {
          actividad: "actividad 1",
          estadouiux: "5%",
          estadotecnico: "2%"
        },
        {
          actividad: "actividad 1",
          estadouiux: "5%",
          estadotecnico: "2%"
        },
        {
          actividad: "actividad 1",
          estadouiux: "5%",
          estadotecnico: "2%"
        }
      ],
      valoraciones: {
        val_html: "3%",
        val_css: "4%",
        val_js: "6%",
        val_ui: "4%",
        val_ux: "9%"
      },
      calificacion: "54%"
    }
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  main.innerHTML = '<h1>Fichas de los estudiantes</h1>';
  datosEstudiantes.estudiantes.map((estudiante) => {
    main.innerHTML = main.innerHTML + ficha(estudiante);
  });
})