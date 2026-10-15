/* =====================================================================
   DATOS DEL DOCUMENTAL. Acá se editan los textos, fotos y videos.

   Reglas para no romper nada:
   - Cada texto va entre comillas dobles "así", y termina con coma.
   - Cada párrafo va entre sus propias comillas, separados por coma.
   - Adentro de un texto no uses comillas dobles ("). Usá «así» o 'así'.
   - No borres las llaves { }, las comas ni los corchetes [ ].
   - foto360: nombre de la foto 360 (JPG 2:1) como está en GitHub. Ej: "prueba360.jpg"
   - video: link de YouTube o nombre de un .mp4. Si no hay, dejá null (sin comillas).
   ===================================================================== */
const PLACES = [
  { id: "pasaje-pan-flamenco", corto: "Pan / Flamenco", nombre: "Pasaje Pan / Flamenco", direccion: "Córdoba 954",
    lat: -32.9468, lng: -60.6357, aprox: true, foto360: null, video: null,
    texto: [
       "En el subsuelo del Pasaje Pan funciona El Túnel o Túnel Cultural, un espacio subterráneo de arquitectura caracterizada por una bóveda de cañón corrido."
    ], pendiente: true },
  { id: "pasaje-pan-galeria", corto: "Pan / Galería de arte", nombre: "Pasaje Pan / Galería de arte", direccion: "Córdoba 954 - Subsuelo",
    lat: -32.9468, lng: -60.6357, aprox: true, foto360: "prueba360.jpg", video: "https://www.youtube.com/watch?v=2P1wZD5R6cA",
    texto: [
      "El Pasaje Pan o también llamado Pam es el nombre de una pequeña y antigua galería de la ciudad de Rosario, Provincia de Santa Fe, Argentina. Fue inaugurado en 1899, lo que lo convierte en la galería más antigua de la ciudad"
    ] },
  { id: "plataforma-lavarden-1", corto: "Lavardén / 1º Subsuelo", nombre: "Plataforma Lavardén / 1º Subsuelo", direccion: "Mendoza 1085 - 1º Subsuelo",
    lat: -32.9500, lng: -60.6371, aprox: true, foto360: null, video: null,
    texto: [
      "Edificio del Centro Cultural Provincial Lavardén, en Mendoza y Sarmiento. Antes alojó el hotel de la Federación Agraria Argentina.",
      "Plataforma Lavardén se inauguró en 2012 y reúne unos cincuenta espacios para actividades culturales. Según fuentes públicas, el edificio tiene seis pisos y dos niveles subterráneos."
    ] },
  { id: "plataforma-lavarden-2", corto: "Lavardén / 2º Subsuelo", nombre: "Plataforma Lavardén / 2º Subsuelo", direccion: "Mendoza 1085 - 2º Subsuelo",
    lat: -32.9500, lng: -60.6371, aprox: true, foto360: null, video: null,
    texto: ["Texto por escribir."], pendiente: true },
  { id: "museo-estevez", corto: "Museo Estévez", nombre: "Museo de Arte Decorativo Firma y Odilo Estévez", direccion: "Santa Fe 748",
    lat: -32.9462, lng: -60.6339, aprox: true, foto360: null, video: null,
    texto: [
      "Inaugurado el 8 de julio de 1968 frente a la Plaza 25 de Mayo, guarda una colección de antigüedades donadas por familias de Rosario.",
      "Completar: qué se recorre en el subsuelo."
    ], pendiente: true },
  { id: "teatro-el-circulo", corto: "Teatro El Círculo", nombre: "Teatro El Círculo", direccion: "Laprida 1223",
    lat: -32.9509, lng: -60.6386, aprox: true, foto360: null, video: null,
    texto: ["Texto por escribir."], pendiente: true },
  { id: "san-lorenzo-1055", corto: "San Lorenzo 1055", nombre: "San Lorenzo 1055", direccion: "San Lorenzo 1055",
    lat: -32.9455, lng: -60.6367, aprox: true, foto360: null, video: null,
    texto: ["Texto por escribir."], pendiente: true },
  { id: "monumento", corto: "El Monumento", nombre: "El Monumento", direccion: "Monumento Nacional a la Bandera",
    lat: -32.9476, lng: -60.6298, aprox: true, foto360: null, video: null,
    texto: ["Texto por escribir."], pendiente: true },
  { id: "la-vigil", corto: "La Vigil", nombre: "La Vigil", direccion: "Alem 3078 · Gaboto 450",
    lat: -32.9736, lng: -60.6575, aprox: true, foto360: null, video: null,
    texto: [
      "La Biblioteca Popular Constancio C. Vigil se creó en 1959 desde la asociación vecinal del barrio Tablada y Villa Manuelita.",
      "Su proyecto fue atacado durante la última dictadura y hoy es Sitio de Memoria del Terrorismo de Estado. El recorrido guiado pasa por la biblioteca, el archivo, el observatorio, el teatro y los subsuelos."
    ] },
  { id: "ex-jefatura", corto: "Ex Jefatura", nombre: "Ex Jefatura de Policía", direccion: "Dorrego y San Lorenzo · Santa Fe 1950",
    lat: -32.9458, lng: -60.6465, aprox: true, foto360: null, video: null,
    texto: [
      "Entre 1976 y 1979 funcionó en este edificio el Servicio de Informaciones de la policía provincial, uno de los centros clandestinos de detención de Rosario. Hoy es Espacio de Memoria.",
      "Se preservaron el ex Servicio de Informaciones y el subsuelo de la ex Alcaidía de Mujeres. Existen además relatos sobre túneles que lo conectarían con el antiguo Comando del 2.º Cuerpo de Ejército, que investigadores estudian como parte de la memoria local."
    ] }
];
/* ============== fin de los datos ============== */
