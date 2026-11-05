/* =====================================================================
   DATOS DEL DOCUMENTAL. Acá se editan los textos, fotos, videos y links.

   Reglas para no romper nada:
   - Cada texto va entre comillas dobles "así", y termina con coma.
   - Cada párrafo va entre sus propias comillas, separados por coma.
   - Adentro de un texto no uses comillas dobles ("). Usá «así» o 'así'.
   - No borres las llaves { }, las comas ni los corchetes [ ].
   - fotos360: lista con los nombres de las fotos 360 (JPG 2:1) como están
     en GitHub, entre comillas y separados por coma.
     Ej: fotos360: ["barnes-01.jpg", "barnes-02.jpg"],
   - cant360: cuántas fotos 360 va a tener el lugar. Los botones "Foto 1, 2, 3…"
     aparecen según este número; las que todavía no cargaste muestran una foto de prueba.
   - video: link de YouTube o nombre de un .mp4. Si no hay, dejá null (sin comillas).
   - links: botones con enlaces. Formato: { t: "Texto del botón", u: "https://..." }
   ===================================================================== */
const PLACES = [
  { id: "barnes-opera", corto: "Barnes / Ópera", nombre: "Museo de Arte Sacro Barnes / Museo de la Ópera", direccion: "Laprida 1223",
    lat: -32.9509, lng: -60.6386, aprox: true,
    cant360: 24, fotos360: [],
    video: "https://youtu.be/3Tf1t6dQckk",
    links: [ { t: "Teatro El Círculo", u: "https://www.teatroelcirculo.com/" } ],
    texto: [
      "El Teatro El Círculo de Rosario alberga en sus subsuelos, conocidos popularmente como las «catacumbas», dos importantes espacios culturales conectados entre sí.",
      "El Museo de Arte Sacro Eduardo Barnes se encuentra debajo de la platea, conectado acústicamente a la sala principal mediante respiraderos. El escultor rosarino Eduardo Amancio Barnes (1901-1977) utilizó este espacio como taller desde 1957 para crear y guardar su obra. En 1978, Emilia Barnes donó la colección. Actualmente se exhiben más de 100 piezas originales en yeso, piedra, madera y bronce de temática religiosa, además de moldes originales del artista y la vieja caldera histórica del edificio.",
      "El Museo de la Ópera se desarrolla en dos niveles subterráneos de los cimientos centenarios del teatro, y se conecta con el Museo Barnes a través de un puente de hierro curvo diseñado por el arquitecto Drazen Juraga. Se exhiben vestuarios de lujo, bocetos, objetos artísticos y fragmentos de escenografías de producciones de los últimos 25 años. El espacio está climatizado, se musicaliza con arias de ópera y cada pieza cuenta con una placa e información complementaria mediante código QR."
    ] },
  { id: "plataforma-lavarden", corto: "Plataforma Lavardén", nombre: "Plataforma Lavardén", direccion: "Mendoza 1085",
    lat: -32.9500, lng: -60.6371, aprox: true,
    cant360: 16, fotos360: [],
    video: "https://youtu.be/FiQff4t1GcI",
    links: [ { t: "Plataforma Lavardén", u: "https://plataformalavarden.gob.ar/" }, { t: "EPCTV", u: "https://epctv.edu.ar/" } ],
    texto: [
      "El edificio de la Plataforma Lavardén cuenta con dos subsuelos integrados a su propuesta cultural y de formación.",
      "El palacio fue inaugurado el 3 de marzo de 1927 como la flamante sede central de la Federación Agraria Argentina. En la concepción original del diseño, a cargo del arquitecto Juan Bautista Durand, todo el edificio estaba pensado para la actividad e intercambio de los productores rurales. El primer y segundo subsuelo fueron diseñados específicamente como grandes bodegas de almacenamiento. Allí abajo se guardaba mercadería, herramientas, insumos e incluso muestras de la producción agrícola del país.",
      "Luego del impacto de la crisis económica de 1929 y 1930, la Federación Agraria quebró y debió entregar el palacio para saldar deudas. El edificio pasó a manos del Estado nacional y luego de la Provincia de Santa Fe. Durante décadas de burocracia, oficinas públicas y vaivenes políticos, los subsuelos perdieron su propósito y pasaron a ser utilizados puramente como depósitos oscuros, acumulando muebles viejos, papelería archivada del gobierno, mercaderías incautadas y escombros.",
      "Entre 2008 y 2012, el Ministerio de Cultura de Santa Fe inició una restauración masiva del patrimonio arquitectónico. Al llegar a las profundidades del edificio, se decidió rescatar el concepto histórico de «bodega» pero dándole un vuelco radical: transformarlas en bodegas de diseño, creación y producción cultural.",
      "El estado actual de los subsuelos de la Plataforma Lavardén es el resultado de una decisión política y de reestructuración edilicia ocurrida a principios de 2021 y consolidada en 2022. El Ministerio de Cultura de Santa Fe priorizó la educación pública artística, lo que cedió el uso del primer subsuelo a la Escuela Provincial de Cine y Tv (Epctv), que actualmente funciona allí. Para albergar las aulas teóricas, el Departamento Técnico y los espacios de práctica de la EPCTV, se debió refuncionalizar por completo el primer subsuelo. Esto significó una gran polémica local en febrero de 2022, ya que la mudanza obligó a desmantelar y clausurar los famosos espacios lúdicos infantiles que funcionaban allí, como la querida «Galería de los Roperos» y el «Gran Roperito».",
      "Cuando se planificó la llegada de las escuelas de cine al edificio, el Ministerio de Cultura anunció un ambicioso proyecto conjunto: construir un gran estudio de grabación audiovisual subterráneo en el segundo subsuelo que sirviera como espacio común de prácticas.",
      "Sin embargo, los altos costos de infraestructura, los requerimientos de insonorización extrema y las complejidades de ventilación y humedad naturales de un segundo nivel subterráneo hicieron que la obra no prosperara. Ante la falta de presupuesto y la necesidad logística del propio centro cultural, que genera decenas de obras de teatro, muestras y recitales en los pisos superiores, el segundo subsuelo volvió a su rol histórico: depósito de resguardo técnico, escenografías y acopio de materiales de la propia Plataforma."
    ] },
  { id: "pasaje-pan", corto: "Pasaje Pan", nombre: "Galería Pasaje Pan", direccion: "Córdoba 924 · Santa Fe 955",
    lat: -32.9468, lng: -60.6357, aprox: true,
    cant360: 8, fotos360: [],
    video: null,
    links: [ { t: "Instagram del Pasaje Pan", u: "https://www.instagram.com/pasajepanros/" } ],
    texto: [
      "Inaugurado en 1899, el Pasaje Pan es la galería cubierta más antigua de Rosario. Lleva el apellido de Andrés Pan, un comerciante gallego que tenía un almacén en la planta baja y vivía en los pisos de arriba. Cuenta la leyenda que su fantasma todavía recorre los pasillos. Se levantó en dos etapas: la primera, a fines del siglo XIX, con salida por calle Santa Fe, y la segunda, terminada en 1914, que lo abrió también sobre Córdoba. Debajo de ese recorrido de comercios, talleres y estudios, el edificio guarda dos subsuelos. En uno funciona hoy una galería de arte, con muestras y presentaciones a metros de la peatonal. En el otro, una escuela de flamenco donde se enseña y se practica ese baile."
    ] },
  { id: "museo-estevez", corto: "Museo Estévez", nombre: "Museo de Arte Decorativo Firma y Odilo Estévez", direccion: "Santa Fe 748",
    lat: -32.9462, lng: -60.6339, aprox: true,
    cant360: 1, fotos360: [],
    video: null,
    links: [ { t: "Museo Estévez", u: "https://museoestevez.gob.ar/" } ],
    texto: [
      "Frente a la Plaza 25 de Mayo, el Museo Estévez ocupa una casona de fachada de mármol de Carrara que Odilo Estévez y Firma Mayor compraron a comienzos de la década de 1920 y que ella legó a la ciudad: el museo abrió en 1968. Pero lo más antiguo de la casa está debajo. En 2021, mientras una constructora reparaba los desagües pluviales y levantaba el piso del hall central, aparecieron fragmentos de cerámica y las obras se detuvieron. Un radar exploró el terreno y, en octubre, un equipo de la Universidad Nacional de Rosario empezó a excavar bajo la dirección del arqueólogo Fernando Oliva. Apenas bajo el piso, en lo que fue el patio de la casa de la familia Ibarlucea, anterior a los Estévez, salieron dos aljibes, desagües de ladrillo, el brocal de un pozo, el poste de una habitación colonial y fragmentos de cerámica chaná incrustados en la mezcla de los ladrillos. Según los arqueólogos, esos restos datan de entre 1790 y principios del siglo XIX: son parte de la Rosario más antigua. Desde la reapertura del museo, en mayo de 2023, un piso transparente permite caminar sobre el yacimiento."
    ] },
  { id: "la-vigil", corto: "La Vigil", nombre: "La Vigil", direccion: "Gaboto 450",
    lat: -32.9736, lng: -60.6575, aprox: true,
    cant360: 5, fotos360: [],
    video: null,
    links: [ { t: "Recorridos guiados", u: "https://bibliotecavigil.org.ar/inicio/recorridos-guiados-3/" } ],
    texto: [
      "El subsuelo de la Biblioteca Popular Constancio C. Vigil es uno de los espacios más emblemáticos y cargados de historia de Rosario. Concebido en los años sesenta como un polo cultural y educativo de escala monumental, este laberinto subterráneo albergó desde salas de lectura, exposiciones y talleres hasta un observatorio astronómico y una imprenta propia. Tras la intervención dictatorial de 1977, el lugar sufrió el desguace, la censura y el saqueo de su valioso patrimonio; sin embargo, con la recuperación de la institución por parte de los vecinos y socios, sus entrañas subterráneas renacieron como un símbolo vivo de resistencia colectiva y memoria histórica en el corazón de barrio Tablada. Actualmente, este espacio puede recorrerse a través de visitas guiadas organizadas por la institución, propuestas pedagógicas y circuitos de memoria que invitan a redescubrir su arquitectura, su mística y el inmenso valor de su lucha comunitaria."
    ] },
  { id: "monumento", corto: "El Monumento", nombre: "El Monumento a la Bandera", direccion: "Santa Fe 581",
    lat: -32.9476, lng: -60.6298, aprox: true,
    cant360: 6, fotos360: [],
    video: null,
    links: [ { t: "Monumento a la Bandera", u: "https://www.monumentoalabandera.gob.ar/" } ],
    texto: [
      "El subsuelo del Monumento Histórico Nacional a la Bandera alberga uno de los espacios subterráneos más emblemáticos y solemnes de Rosario: la Cripta de Belgrano. Este recinto, ubicado bajo la torre central, fue concebido como un mausoleo destinado a custodiar los restos simbólicos y homenajear la figura del creador de la enseña patria, General Manuel Belgrano. Su arquitectura monumental de piedra y líneas sobrias genera una atmósfera de profundo respeto, destacándose la urna que guarda sus restos y las placas recordatorias que rinden culto a la historia nacional.",
      "Actualmente, este nivel subterráneo forma parte del recorrido turístico e institucional, permitiendo a los visitantes acceder a través de visitas guiadas y espacios expositivos que conectan la imponente estructura exterior con la memoria histórica resguardada en sus entrañas."
    ] },
  { id: "ex-jefatura", corto: "Ex Jefatura", nombre: "Ex Jefatura de Policía", direccion: "San Lorenzo 1949",
    lat: -32.9458, lng: -60.6465, aprox: true,
    cant360: 7, fotos360: [],
    video: null,
    links: [
      { t: "Gobierno de Santa Fe", u: "https://www.santafe.gob.ar/index.php/web/content/view/full/240102/(subtema)/93806" },
      { t: "Comisión por la Memoria", u: "https://www.comisionporlamemoria.org/sitiosdememoria/ficha/espacio-para-la-memoria-ex-servicio-de-informaciones/" }
    ],
    texto: [
      "El subsuelo del Espacio de Memoria - Ex Centro Clandestino de Detención Servicio de Informaciones, ubicado en el edificio de la ex Jefatura de Policía de Rosario, en Dorrego y San Lorenzo, resguarda uno de los testimonios más dolorosos y significativos de la historia reciente de la ciudad. Durante la última dictadura cívico-militar, este sector subterráneo funcionó como el centro clandestino de detención más importante de la región, donde miles de personas fueron cautivas, torturadas y sometidas a la desaparición forzada. Hoy en día, sus instalaciones conservan las marcas físicas de aquellos años oscuros y han sido convertidas en un sitio de memoria custodiado por organismos de derechos humanos.",
      "Actualmente, el subsuelo puede visitarse a través de recorridos guiados y circuitos de memoria institucionales, concebidos como un ejercicio pedagógico y de profunda reflexión para mantener vivo el reclamo de verdad, justicia y memoria en la sociedad."
    ] },
  { id: "la-sub-sede", corto: "La Sub Sede", nombre: "La Sub Sede", direccion: "Entre Ríos 579",
    lat: -32.9456, lng: -60.6395, aprox: true,
    cant360: 5, fotos360: [],
    video: null,
    links: [ { t: "Cultural de Abajo", u: "https://www.teatrosatir.ar/salas/cultural-de-abajo/" } ],
    texto: [
      "En el subsuelo de esa zona funciona Cultural De Abajo, un histórico y muy querido teatro underground de Rosario. Este espacio subterráneo se ha convertido a lo largo de los años en un auténtico referente de la cultura independiente local, albergando obras de teatro, ciclos de música, performances y expresiones artísticas alternativas en un ambiente íntimo y con mucha identidad."
    ] }
];
/* ============== fin de los datos ============== */
