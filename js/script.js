(function () {
  var pageFileMap = {
    inicio: 'index.html', vaca: 'pages/vacuno.html', pollo: 'pages/pollo.html', cerdo: 'pages/cerdo.html', subproductos: 'pages/subproductos.html',
    recetas: 'pages/recetas.html', recomendaciones: 'pages/recomendaciones.html', nosotros: 'pages/nosotros.html', contacto: 'pages/contacto.html'
  };

  var valores = [
    { titulo: 'Calidad ante todo', desc: 'Carne fresca y de primera, seleccionada con el mismo criterio desde el primer día.' },
    { titulo: 'Oficio y tradición', desc: 'El corte se hace a mano, con la técnica y el conocimiento de un carnicero de oficio.' },
    { titulo: 'Cercanía', desc: 'Un negocio de barrio que conoce a sus clientes y responde cada pedido en persona.' },
    { titulo: 'Confianza', desc: 'Trayectoria construida desde 2020, respaldo en cada compra.' },
  ];

  var proceso = [
    { titulo: 'Carne en vara', categoria: 'Selección', desc: 'Recibimos la carne nacional Categoría V entera, sin trocear, directo del proveedor. Así garantizamos frescura real desde el origen.', progreso: 25, icon: 'package' },
    { titulo: 'Corte artesanal', categoria: 'Oficio', desc: 'Cada pieza se corta a mano en el local, a medida que se necesita, con la técnica de un carnicero de oficio.', progreso: 50, icon: 'scissors' },
    { titulo: 'Control de calidad', categoria: 'Calidad', desc: 'Revisamos frescura, color y textura de cada corte antes de exhibirlo, con el mismo criterio desde el primer día.', progreso: 75, icon: 'check' },
    { titulo: 'Pedido y entrega', categoria: 'Cercanía', desc: 'Nos escribes por WhatsApp o pasas por el local: te entregamos el corte fresco, listo para tu mesa.', progreso: 100, icon: 'send' }
  ];

  var resenas = [
    { texto: 'Excelente carnicería. Compro con mucha confianza ya que nunca he tenido problemas con sus productos. El personal que atiende es muy amable. El lugar limpio, impecable !', autor: 'Angelica Duran' },
    { texto: 'Excelente experiencia. Todos los productos 100% frescos. Gran variedad y buena atención de barrio, familiar.', autor: 'Michael Corthorn' },
    { texto: 'Excelente carne, muy buena atención.', autor: 'Renato Cornejo' },
    { texto: 'Full recomendable!🔥', autor: 'Jose Tomas Oyarce Gutierrez' },
    { texto: 'Muy buena atención', autor: 'Catalina Reyes' }
  ];

  var badges = [
    { titulo: 'Desde 2020', sub: 'Trayectoria' },
    { titulo: 'Categoría V', sub: 'Carne nacional' },
    { titulo: '100%', sub: 'Producto nacional' },
    { titulo: 'Directo', sub: 'Pedidos por WhatsApp' },
  ];

  var catalog = {
    vaca: {
      label: 'Vacuno',
      eyebrow: 'Categoría V · Carne nacional en vara',
      title: 'Vacuno',
      bannerImg: '/Images/banner-seccion-vacuno.png',
      description: 'Carne vacuna nacional, clasificación Categoría V. Del asado familiar al corte fino, seleccionada pieza por pieza.',
      cuts: [
        { nombre: 'Filete', desc: 'El corte más tierno, sin grasa ni nervios, ideal para ocasiones especiales.', metodos: ['parrilla', 'sarten'], img: '/Images/filete_vacuno.jpg' },
        { nombre: 'Lomo Liso', desc: 'Corte magro y parejo, perfecto para bistecs y filetes a la plancha.', metodos: ['sarten', 'parrilla'], img: '/Images/lomo_liso.webp' },
        { nombre: 'Lomo Vetado', desc: 'Corte marmoleado y jugoso, el preferido para la parrilla.', destacado: true, metodos: ['parrilla', 'sarten'], img: '/Images/lomo_vetado.jpg' },
        { nombre: 'Asiento', desc: 'Tierno y con buen sabor, ideal para bistecs y saltados.', metodos: ['sarten'], img: '/Images/asiento.webp' },
        { nombre: 'Punta de Ganso', desc: 'Corte alargado y sabroso, excelente a la parrilla o al horno.', metodos: ['parrilla', 'cacerola'], img: '/Images/punta_de_ganso.webp' },
        { nombre: 'Punta de Picana', desc: 'Jugosa y sabrosa, favorita en las juntas familiares.', metodos: ['parrilla'], img: '/Images/Punta_picana.png' },
        { nombre: 'Punta de Paleta', desc: 'Corte rendidor y tierno, bueno para asar o estofar.', metodos: ['parrilla', 'cacerola'], img: '/Images/punta_de_paleta.png' },
        { nombre: 'Pollo Ganso', desc: 'Corte magro de paleta, ideal para saltados y guisos rápidos.', metodos: ['sarten', 'cacerola'], img: '/Images/pollo_ganso.jpg' },
        { nombre: 'Posta Negra', desc: 'Magra y compacta, perfecta para el horno o el cuchillo.', metodos: ['cacerola'], img: '/Images/posta_negra.png' },
        { nombre: 'Posta Rosada', desc: 'Magra y versátil, perfecta para el horno.', metodos: ['cacerola'], img: '/Images/posta_rosada.webp' },
        { nombre: 'Posta de Paleta', desc: 'Corte magro y económico, ideal para guisos y cazuelas.', metodos: ['cacerola'], img: '/Images/posta_de_paleta.webp' },
        { nombre: 'Sobrecostilla', desc: 'Con hueso y buen marmoleo, ideal para cocciones lentas.', metodos: ['cacerola', 'parrilla'], img: '/Images/sobre_costilla.webp' },
        { nombre: 'Huachalomo', desc: 'Corte jugoso y sabroso, clásico para el asado a la olla.', metodos: ['cacerola', 'parrilla'], img: '/Images/huachalomo.jpg' },
        { nombre: 'Asado Carnicero', desc: 'Corte tradicional con hueso, sabroso para el asado a la olla.', metodos: ['cacerola'], img: '/Images/asado_carnicero.jpg' },
        { nombre: 'Tapabarriga', desc: 'Corte fibroso y sabroso, ideal para moler o guisar.', metodos: ['cacerola', 'sarten'], img: '/Images/tapabarriga.jpg' },
        { nombre: 'Choclillo', desc: 'Tierno y magro, perfecto para bistecs finos.', metodos: ['sarten', 'parrilla'], img: '/Images/choclillo.webp' },
        { nombre: 'Tapapecho', desc: 'Corte con buen sabor, ideal para asados a la olla y caldos.', metodos: ['cacerola'], img: '/Images/tapapecho.jpg' },
        { nombre: 'Plateada', desc: 'Ideal para cocciones lentas y guisos de olla.', metodos: ['cacerola'], img: '/Images/plateada.png' },
        { nombre: 'Palanca', desc: 'Corte magro de segunda, bueno para moler o estofar.', metodos: ['cacerola'], img: '/Images/palanca.webp' },
        { nombre: 'Abastero', desc: 'Rendidor y jugoso, ideal para churrasco.', metodos: ['parrilla', 'sarten'], img: '/Images/Abastero.webp' },
        { nombre: 'Entraña', desc: 'Fina y sabrosa, un clásico de la parrilla.', metodos: ['parrilla'], img: '/Images/entrana.png' },
        { nombre: 'Pollo Barriga', desc: 'Corte magro de la posta, ideal para el día a día.', metodos: ['cacerola', 'sarten'], img: '/Images/pollo_barriga.webp' },
        { nombre: 'Entrecot', desc: 'Corte con hueso jugoso y marmoleado, ideal para la parrilla.', metodos: ['parrilla', 'sarten'], img: '/Images/entrecot.jpg' },
        { nombre: 'Tomahawk', desc: 'Costilla con hueso largo, la pieza estrella para compartir en la parrilla.', metodos: ['parrilla'], img: '/Images/Tomahawk.webp' },
        { nombre: 'Arrachera', desc: 'Corte marinado clásico de la parrilla, sabroso y jugoso.', metodos: ['parrilla'], img: '/Images/arrachera.webp' },
        { nombre: 'Flat Iron', desc: 'Corte tierno de paleta, ideal para la plancha o parrilla.', metodos: ['sarten', 'parrilla'], img: '/Images/Flat_Iron.jpg' },
        { nombre: 'Molida Especial', desc: 'Carne molida magra y fresca, ideal para hamburguesas y salsas.', metodos: ['sarten', 'cacerola'], img: '/Images/molida_especial.jpeg' },
        { nombre: 'Molida Corriente', desc: 'Carne molida rendidora para el día a día.', metodos: ['sarten', 'cacerola'], img: '/Images/molida_corriente.jpg' },
        { nombre: 'Costilla Colada', desc: 'Costillar con buen marmoleo, ideal para asar a fuego lento.', metodos: ['parrilla', 'cacerola'], img: '/Images/costilla_colada.jpg' },
        { nombre: 'Asado de Tira', desc: 'Costillar cortado transversalmente, clásico del asado chileno.', metodos: ['parrilla'], img: '/Images/asado_de_tira.jpg' },
        { nombre: 'Aletilla', desc: 'Corte económico y sabroso, ideal para moler o guisar.', metodos: ['cacerola'], img: '/Images/aletilla.webp' },
        { nombre: 'Osobuco', desc: 'Con hueso y tuétano, perfecto para cazuelas y guisos de olla.', metodos: ['cacerola'], img: '/Images/osobuco.jpg' },
        { nombre: 'Hueso Carnudo', desc: 'Hueso con carne, ideal para caldos y cazuelas con sabor.', metodos: ['cacerola'], img: '/Images/hueso_carnudo.jpg' },
      ],
    },
    cerdo: {
      label: 'Cerdo',
      eyebrow: 'Carne nacional fresca',
      title: 'Cerdo',
      bannerImg: '/Images/banner-seccion-cerdo.png',
      description: 'Cerdo nacional fresco, del costillar ahumado a los embutidos caseros.',
      cuts: [
        { nombre: 'Costillar', desc: 'El favorito para ahumar o asar a fuego lento.', destacado: true, metodos: ['parrilla'], img: '/Images/costillar_de_cerdo.webp' },
        { nombre: 'Chuleta Centro', desc: 'Corte clásico, tierno y con hueso.', metodos: ['sarten', 'parrilla'], img: '/Images/chuleta_centro.avif' },
        { nombre: 'Chuleta Parrillera', desc: 'Con hueso y buen grosor, ideal para la parrilla.', metodos: ['parrilla'], img: '/Images/chuleta_parrillera.jpg' },
        { nombre: 'Pulpa Pierna sin Hueso', desc: 'Magra y versátil, para asar, guisar o moler.', metodos: ['parrilla', 'cacerola', 'sarten'], img: '/Images/pulpa_pierna_sin_hueso.webp' },
        { nombre: 'Paleta de Cerdo', desc: 'Corte jugoso y rendidor, ideal para el horno o la olla.', metodos: ['cacerola'], img: '/Images/paleta_de_cerdo.png' },
        { nombre: 'Pernil Mano', desc: 'Corte tradicional para el horno, jugoso y con cuero crocante.', metodos: ['cacerola'], img: '/Images/pernil_mano.jpg' },
        { nombre: 'Pernil Pierna', desc: 'Pieza grande ideal para el horno en ocasiones especiales.', metodos: ['cacerola'], img: '/Images/pernil_pierna.webp' },
        { nombre: 'Tocino', desc: 'Con veta de grasa, ideal para dar sabor a guisos y frituras.', metodos: ['sarten', 'cacerola'], img: '/Images/tocino_de_cerdo.jpg' },
        { nombre: 'Panceta', desc: 'Ideal para la parrilla o el ahumador.', metodos: ['parrilla'], img: '/Images/panceta.jpg' },
        { nombre: 'Patitas de Cerdo', desc: 'Clásicas para caldos y preparaciones tradicionales.', metodos: ['cacerola'], img: '/Images/manitas_de_cerdo.jpg' },
        { nombre: 'Arrollado Huaso', desc: 'Corte enrollado con hueso, ideal para el horno.', metodos: ['cacerola'], img: '/Images/arrollado_huaso.jpg' },
        { nombre: 'Longanizas', desc: 'Elaboradas con receta de la casa, para la parrilla o la sartén.', metodos: ['parrilla', 'sarten'], img: '/Images/longanizas.jpg' },
        { nombre: 'Prietas', desc: 'Tradicionales y caseras, para acompañar con ensalada a la chilena.', metodos: ['sarten', 'cacerola'], img: '/Images/prietas.jpg' },
        { nombre: 'Butifarra', desc: 'Embutido fresco y sabroso, ideal para la parrilla.', metodos: ['parrilla', 'sarten'], img: '/Images/butifarra.png' },
      ],
    },
    pollo: {
      label: 'Pollo',
      eyebrow: 'Fresco, nunca congelado',
      title: 'Pollo',
      bannerImg: '/Images/banner-seccion-pollo.png',
      description: 'Pollo nacional fresco, entero o por presas, listo para el horno, la olla o la parrilla.',
      cuts: [
        { nombre: 'Trutro Entero', desc: 'Jugoso y sabroso, perfecto para la parrilla.', destacado: true, metodos: ['parrilla', 'cacerola'], img: '/Images/trutro_entero.png' },
        { nombre: 'Pechuga Entera', desc: 'Con hueso y piel, ideal para el horno.', metodos: ['cacerola'], img: '/Images/pechuga_entera.webp' },
        { nombre: 'Pechuga Deshuesada', desc: 'Sin piel ni hueso, la opción más magra.', metodos: ['sarten', 'parrilla'], img: '/Images/pechuga_deshuesada.jpg' },
        { nombre: 'Trutro Ala', desc: 'Tierno y jugoso, ideal para freír o guisar.', metodos: ['sarten', 'cacerola'], img: '/Images/trutro_ala.avif' },
        { nombre: 'Ala Entera', desc: 'Ideales para freír, hornear o ahumar.', metodos: ['sarten', 'cacerola', 'parrilla'], img: '/Images/ala_entera.jpg' },
        { nombre: 'Contre de Pollo', desc: 'Corte jugoso de la parte alta del muslo, ideal para guisos.', metodos: ['cacerola'], img: '/Images/contre_de_pollo.jpg' },
        { nombre: 'Corazón de Pollo', desc: 'Sabroso y firme, clásico para anticuchos.', metodos: ['parrilla'], img: '/Images/corazon_de_pollo.jpg' },
        { nombre: 'Panita de Pollo', desc: 'Tierna y suave, ideal para saltados y guisos rápidos.', metodos: ['sarten', 'cacerola'], img: '/Images/panita_de_pollo.jpg' },
        { nombre: 'Patas de Pollo', desc: 'Clásicas para dar sabor y cuerpo a caldos.', metodos: ['cacerola'], img: '/Images/patas_de_pollo.jpg' },
      ],
    },
    subproductos: {
      label: 'Sub Productos',
      eyebrow: 'Menudencias y cortes tradicionales',
      title: 'Sub Productos',
      bannerImg: '/Images/banner-seccion-subproductos.png',
      description: 'Menudencias y cortes tradicionales para las recetas de siempre.',
      cuts: [
        { nombre: 'Guata Callo', desc: 'Tripa de vacuno de textura firme, tradicional para guisos y caldillos.', metodos: ['cacerola'], img: '/Images/guata_callo.jpg' },
        { nombre: 'Chunchules', desc: 'Corte de menudencia con buen sabor, clásico de la cocina criolla.', metodos: ['cacerola'], img: '/Images/chunchules.jpg' },
        { nombre: 'Pana de Vacuno', desc: 'El hígado de vacuno, suave y sabroso, ideal frito con cebolla.', metodos: ['sarten'], img: '/Images/pana_de_vacuno.jpg' },
        { nombre: 'Corazón de Vacuno', desc: 'Firme y sabroso, ideal para anticuchos y guisos.', metodos: ['parrilla', 'cacerola'], img: '/Images/corazon_de_vacuno.jpg' },
        { nombre: 'Patas de Vacuno', desc: 'Clásicas para caldos y preparaciones gelatinosas.', metodos: ['cacerola'], img: '/Images/patas_de_vacuno.jpg' },
        { nombre: 'Lengua de Vacuno', desc: 'Tierna tras cocción lenta, ideal para guisos y sándwiches.', metodos: ['cacerola', 'sarten'], img: '/Images/lengua_de_vacuno.webp' },
        { nombre: 'Mollejas', desc: 'Textura suave y sabor delicado, un clásico de la parrilla.', destacado: true, metodos: ['parrilla'], img: '/Images/mollejas.png' },
      ],
    },
  };

  var premiumCuts = {
    tomahawk: {
      slug: 'tomahawk',
      nombre: 'Tomahawk',
      categoriaPage: 'vaca',
      categoriaLabel: 'Vacuno',
      img: '/Images/Tomahawk_sin_texto.png',
      tagline: 'Costillar con el hueso largo intacto: la pieza que se sirve para compartir en la mesa.',
      peso: '1,2 – 1,5 kg',
      porciones: '2 – 3 personas',
      origen: 'Costillar de vacuno (rib), con el hueso largo "frenchado" a mano',
      textura: 'Muy marmoleado, jugoso y de sabor intenso',
      termino: 'Medio – medio rosado',
      metodos: ['parrilla'],
      descripcion: [
        'El Tomahawk es un corte de costillar que conserva el hueso largo completo, limpio de carne en su extremo mediante una técnica llamada "frenchado". Esa forma, que recuerda a un hacha de guerra, le da su nombre.',
        'En esencia es un ribeye con hueso: el mismo marmoleado fino y la misma jugosidad, con el sabor extra que aporta cocinar la carne pegada al hueso. Por su tamaño, es una pieza pensada para compartir.'
      ],
      tip: 'Sella 2–3 minutos por lado a fuego fuerte y termina la cocción a fuego indirecto hasta el punto deseado. Deja reposar 8–10 minutos antes de cortar.',
    },
    flatiron: {
      slug: 'flatiron',
      nombre: 'Flat Iron Steak',
      categoriaPage: 'vaca',
      categoriaLabel: 'Vacuno',
      img: '/Images/flat_iron_steak_sin_texto.png',
      tagline: 'De la paleta del vacuno, pero con una ternura que sorprende.',
      peso: '250 – 350 g por porción',
      porciones: '1 persona',
      origen: 'Paleta de vacuno (top blade), sin el tendón central',
      textura: 'Fibra fina y pareja, muy tierno para ser un corte de paleta',
      termino: 'Medio rosado',
      metodos: ['sarten', 'parrilla'],
      descripcion: [
        'El Flat Iron nace de la paleta del vacuno, retirando el tendón central que suele endurecer ese corte. El resultado es una pieza plana y alargada, de ahí su nombre, "plancha de hierro", que sorprende por su ternura: se considera el segundo corte más suave del vacuno, después del filete.',
        'Tiene más sabor que un filete por su ubicación muscular, pero conserva una textura fina y pareja. Ideal para quienes buscan intensidad sin sacrificar terneza.'
      ],
      tip: 'Cocina a fuego alto en sartén o parrilla, 3–4 minutos por lado. Corta siempre en contra de la fibra para maximizar la ternura.',
    },
  };

  var recomendadoCuts = {
    'entrana': {
      slug: 'entrana', nombre: 'Entraña', categoriaPage: 'vaca', categoriaLabel: 'Vacuno', seccion: 'parrilla', img: '/Images/entrana.png',
      tagline: 'Fina, fibrosa y directa a las brasas: el corte que nunca falta en la parrilla.',
      peso: '400 – 600 g', porciones: '2 – 3 personas', origen: 'Diafragma del vacuno, el corte más fino y fibroso de la parrilla', textura: 'Fibra larga y marcada, muy jugosa cuando se cocina rápido a fuego fuerte', termino: 'Término medio', metodos: ['parrilla'],
      descripcion: [
        'La entraña es el músculo del diafragma del vacuno, un corte delgado y de fibra larga que absorbe muy bien la sal gruesa y se cocina en minutos. Es uno de los clásicos infaltables de cualquier parrilla chilena.',
        'Su grosor parejo permite un sellado rápido por ambos lados, logrando un exterior dorado y un interior jugoso sin perder tiempo frente a las brasas. Por su sabor intenso, no necesita mucho más que sal.'
      ],
      tip: 'Cocínala a fuego fuerte apenas 2-3 minutos por lado: su grosor fino hace que se pase de cocción muy rápido. Córtala siempre en contra de la fibra.',
    },
    'lomo-vetado': {
      slug: 'lomo-vetado', nombre: 'Lomo Vetado', categoriaPage: 'vaca', categoriaLabel: 'Vacuno', seccion: 'parrilla', img: '/Images/lomo_vetado.jpg',
      tagline: 'El corte más marmoleado de la casa, jugoso al punto en cada asado.',
      peso: '300 – 400 g por porción', porciones: '1 persona', origen: 'Zona dorsal del vacuno (ribeye), con buen marmoleo intramuscular', textura: 'Muy marmoleada y jugosa, con un anillo de grasa característico', termino: 'Término medio', metodos: ['parrilla', 'sarten'],
      descripcion: [
        'El Lomo Vetado es el ribeye chileno: un corte con marmoleo parejo que se derrite durante la cocción, aportando jugosidad y sabor. Es, por lejos, el corte que más repiten nuestros clientes.',
        'Su grasa intramuscular lo hace muy indulgente con errores de cocción, por lo que es una excelente puerta de entrada para quienes recién se animan con la parrilla.'
      ],
      tip: 'Sella a fuego fuerte 2-3 minutos por lado y termina a fuego medio hasta el punto deseado. Deja reposar 5 minutos antes de cortar.',
    },
    'arrachera': {
      slug: 'arrachera', nombre: 'Arrachera', categoriaPage: 'vaca', categoriaLabel: 'Vacuno', seccion: 'parrilla', img: '/Images/arrachera.webp',
      tagline: 'Marinada y de fibra larga, ideal para compartir en grupos grandes.',
      peso: '500 g – 1 kg', porciones: '3 – 4 personas', origen: 'Corte marinado de la parrilla, de fibra larga y sabor intenso', textura: 'Fibrosa y jugosa, potenciada por el marinado', termino: 'Término medio', metodos: ['parrilla'],
      descripcion: [
        'La arrachera es un corte de fibra larga que se sirve marinado, una técnica que ablanda la carne y le suma sabor antes de llegar a las brasas. Es uno de los cortes más populares para juntas y parrillas de fin de semana.',
        'Se cocina rápido y rinde harto, por lo que es ideal para grupos grandes. Su jugosidad depende en gran parte del corte en contra de la fibra al servir.'
      ],
      tip: 'Corta siempre en diagonal y en contra de la fibra: es la diferencia entre una arrachera tierna y una dura de masticar.',
    },
    'asado-de-tira': {
      slug: 'asado-de-tira', nombre: 'Asado de Tira', categoriaPage: 'vaca', categoriaLabel: 'Vacuno', seccion: 'parrilla', img: '/Images/asado_de_tira.jpg',
      tagline: 'El costillar cortado transversal, la imagen misma del asado chileno.',
      peso: '1 – 1,5 kg', porciones: '4 – 5 personas', origen: 'Costillar de vacuno cortado transversalmente, con hueso', textura: 'Con hueso y buen marmoleo, se ablanda con calor sostenido', termino: 'Término medio a bien cocido', metodos: ['parrilla'],
      descripcion: [
        'El Asado de Tira es el corte más tradicional del asado chileno: costillar cortado transversalmente, dejando el hueso a la vista en cada trozo. Es la imagen misma del domingo en familia.',
        'El hueso aporta sabor durante toda la cocción, y su grasa entreverada mantiene la carne jugosa incluso con cocciones más largas a fuego medio.'
      ],
      tip: 'Dale más tiempo a fuego medio que a fuego fuerte: el hueso y la grasa necesitan calor sostenido para ablandarse bien.',
    },
    'filete': {
      slug: 'filete', nombre: 'Filete', categoriaPage: 'vaca', categoriaLabel: 'Vacuno', seccion: 'premium', img: '/Images/filete_vacuno.jpg',
      tagline: 'El corte más tierno del vacuno, sin grasa ni nervios.',
      peso: '200 – 250 g por porción', porciones: '1 persona', origen: 'Lomo interno del vacuno, sin grasa ni nervios', textura: 'Extremadamente tierna, con sabor suave', termino: 'Término medio - medio rosado', metodos: ['parrilla', 'sarten'],
      descripcion: [
        'El filete es el corte más tierno del vacuno: un músculo que casi no trabaja, por lo que prácticamente no tiene grasa ni nervios. Es la elección clásica para ocasiones especiales.',
        'Su sabor es más suave que otros cortes marmoleados, lo que lo hace ideal para acompañar con salsas o mantequillas compuestas que realcen su textura sedosa.'
      ],
      tip: 'Al ser tan magro, cocínalo a fuego medio-alto y no lo dejes pasar de término medio para que no pierda jugosidad.',
    },
    'entrecot': {
      slug: 'entrecot', nombre: 'Entrecot', categoriaPage: 'vaca', categoriaLabel: 'Vacuno', seccion: 'premium', img: '/Images/entrecot.jpg',
      tagline: 'Con hueso, jugoso y marmoleado: una experiencia más elaborada en la mesa.',
      peso: '350 – 450 g (con hueso)', porciones: '1 – 2 personas', origen: 'Costilla de vacuno con hueso, corte marmoleado', textura: 'Jugosa y marmoleada, con el sabor extra del hueso', termino: 'Término medio', metodos: ['parrilla', 'sarten'],
      descripcion: [
        'El Entrecot conserva el hueso durante la cocción, lo que potencia su sabor y ayuda a mantener la jugosidad de la carne. Es un corte marmoleado, pensado para quienes buscan una experiencia más elaborada.',
        'Por su grosor, admite bien tanto la parrilla como la sartén, siempre que se le dé tiempo para que el calor llegue parejo hasta el hueso.'
      ],
      tip: 'Sella primero los bordes apoyando el hueso sobre la parrilla o sartén, luego cocina de plano por ambos lados hasta el punto deseado.',
    },
    'molida-especial': {
      slug: 'molida-especial', nombre: 'Molida Especial', categoriaPage: 'vaca', categoriaLabel: 'Vacuno', seccion: 'diaria', img: '/Images/molida_especial.jpeg',
      tagline: 'Molida fresca a diario, ideal para hamburguesas y salsas con cuerpo.',
      peso: '500 g / 1 kg', porciones: 'Rinde 4-6 hamburguesas de 125 g', origen: 'Molida magra y fresca, seleccionada especialmente para el día a día', textura: 'Fina y pareja, con el punto justo de grasa para no secarse', termino: 'Bien cocida', metodos: ['sarten', 'cacerola'],
      descripcion: [
        'La Molida Especial se muele fresca cada día, con una proporción de grasa pensada para hamburguesas jugosas y salsas con buen cuerpo. Es la base perfecta para el día a día en la cocina.',
        'A diferencia de la molida corriente, tiene un poco más de cuidado en la selección de la carne base, lo que se nota en el sabor final del plato.'
      ],
      tip: 'No la manipules demasiado al formar las hamburguesas: mientras menos se trabaje, más jugosa queda la carne al cocinarla.',
    },
    'posta-rosada': {
      slug: 'posta-rosada', nombre: 'Posta Rosada', categoriaPage: 'vaca', categoriaLabel: 'Vacuno', seccion: 'diaria', img: '/Images/posta_rosada.webp',
      tagline: 'Magra y económica, perfecta para el horno de todos los días.',
      peso: '1 kg', porciones: '4 – 6 personas', origen: 'Corte magro de la posta, versátil para distintas preparaciones', textura: 'Magra y compacta, se ablanda bien con cocción lenta', termino: 'Bien cocida', metodos: ['cacerola'],
      descripcion: [
        'La Posta Rosada es un corte magro y accesible, perfecto para el consumo diario. Rinde muy bien en preparaciones al horno o en cocciones lentas donde tiene tiempo de ablandarse.',
        'Al tener poca grasa, es una buena opción para quienes buscan comer más liviano sin sacrificar sabor, siempre que se cocine con algo de líquido o salsa.'
      ],
      tip: 'Por ser un corte magro, cocínala con algo de líquido (caldo, salsa o vino) para que no se seque durante la cocción.',
    },
    'osobuco': {
      slug: 'osobuco', nombre: 'Osobuco', categoriaPage: 'vaca', categoriaLabel: 'Vacuno', seccion: 'diaria', img: '/Images/osobuco.jpg',
      tagline: 'Con hueso y tuétano, la base ideal para cazuelas y guisos de olla.',
      peso: '4 trozos (aprox. 1,2 kg)', porciones: '4 personas', origen: 'Corte transversal de la pierna, con hueso y tuétano', textura: 'Firme en crudo, se vuelve muy tierna con cocción lenta', termino: 'Cocción lenta hasta que se separe del hueso', metodos: ['cacerola'],
      descripcion: [
        'El Osobuco es un corte con hueso y tuétano, ideal para cazuelas y guisos de olla. El hueso aporta un sabor profundo al caldo mientras la carne se ablanda lentamente.',
        'Es uno de los cortes favoritos para recetas de olla, como la cazuela de vacuno, gracias a la untuosidad que le entrega el tuétano al caldo durante la cocción.'
      ],
      tip: 'Cocínalo siempre a fuego bajo y con tapa: la cocción lenta es la que logra que la carne se separe sola del hueso.',
    },
  };

  function getRecomendado(slug) { return premiumCuts[slug] || recomendadoCuts[slug]; }

  var recomendadoSecciones = [
    { titulo: 'Cortes estrella para parrilla', desc: 'Los cortes más vistosos y de mayor rotación en los asados: los que captan la atención de inmediato.', items: ['tomahawk', 'entrana', 'lomo-vetado', 'arrachera', 'asado-de-tira'] },
    { titulo: 'Cortes premium para ocasiones especiales', desc: 'Para quienes buscan algo más refinado: mejor presentación y una experiencia distinta en la mesa.', items: ['filete', 'entrecot', 'flatiron'] },
    { titulo: 'Opciones para el día a día', desc: 'Cortes accesibles y de uso frecuente, infaltables en la cocina de todos los días.', items: ['molida-especial', 'posta-rosada', 'osobuco'] },
  ];

  var recetas = [
    { slug: 'asado-parrilla', titulo: 'Asado a la parrilla clásico', corte: 'Lomo Vetado', categoria: 'vaca', tiempo: '40 min', dificultad: 'Fácil', porciones: '4-6 personas', desc: 'El asado de siempre: sal gruesa, brasas parejas y el punto justo de cocción.', img: '/Images/asado-a-la-parrilla-clasico.jpg',
      ingredientes: ['1 kg de Lomo Vetado', 'Sal gruesa a gusto', 'Pimienta negra recién molida', 'Carbón o leña para la parrilla'],
      pasos: ['Retira la carne del refrigerador 30 minutos antes de cocinar para que llegue a temperatura ambiente.', 'Prepara las brasas hasta que estén parejas, con un calor medio-alto.', 'Sazona el Lomo Vetado con sal gruesa por ambos lados.', 'Cocina sobre la parrilla 6-8 minutos por lado para un término medio, sin pinchar la carne.', 'Retira, sazona con pimienta y deja reposar 5 minutos antes de cortar.'],
      tips: ['Deja reposar la carne unos minutos antes de cortarla para conservar los jugos.', 'La sal gruesa se disuelve más lento y forma una costra pareja y sabrosa.', 'Evita pinchar la carne mientras se cocina, así no pierde jugosidad.'] },
    { slug: 'costillar-ahumado', titulo: 'Costillar de cerdo ahumado', corte: 'Costillar de Cerdo', categoria: 'cerdo', destacada: true, tiempo: '3 h', dificultad: 'Media', porciones: '4-5 personas', desc: 'Cocción lenta y humo suave hasta que la carne se separa del hueso.', img: '/Images/costillar-cerdo.jpeg',
      ingredientes: ['1,5 kg de Costillar de Cerdo', 'Sal, pimienta y ajo en polvo', 'Aserrín o astillas para ahumar (opcional)', 'Salsa barbecue a gusto'],
      pasos: ['Retira la membrana del reverso del costillar y sazona generosamente por ambos lados.', 'Prende el ahumador o la parrilla con calor indirecto a fuego bajo (110-120°C).', 'Cocina el costillar 2,5-3 horas a fuego indirecto, agregando humo los primeros 90 minutos.', 'En la última media hora, pincela con salsa barbecue cada 10 minutos.', 'Retira cuando la carne se separe fácilmente del hueso y deja reposar 10 minutos antes de cortar.'],
      tips: ['Retira siempre la membrana del reverso para que el humo penetre mejor.', 'Si notas que se seca antes de tiempo, envuélvelo en papel aluminio.', 'Acompaña con una ensalada fresca para equilibrar lo ahumado.'] },
    { slug: 'pollo-horno', titulo: 'Pollo al horno con hierbas', corte: 'Pollo Entero', categoria: 'pollo', tiempo: '1 h 15 min', dificultad: 'Fácil', porciones: '4 personas', desc: 'Piel dorada y crocante, carne jugosa por dentro.', img: '/Images/pollo-al-horno.jpeg',
      ingredientes: ['1 Pollo Entero', '3 dientes de ajo', 'Romero y tomillo fresco', 'Jugo de 1 limón', 'Aceite de oliva, sal y pimienta'],
      pasos: ['Precalienta el horno a 200°C.', 'Frota el pollo con aceite de oliva, ajo picado, hierbas, jugo de limón, sal y pimienta, por dentro y por fuera.', 'Coloca el pollo en una fuente para horno con la pechuga hacia arriba.', 'Hornea entre 1 hora y 1 hora 15 minutos, bañando con sus jugos cada 20 minutos, hasta que la piel esté dorada.', 'Deja reposar 10 minutos antes de trinchar.'],
      tips: ['Bañar el pollo con sus propios jugos cada 20 minutos asegura una piel dorada y pareja.', 'Si la piel se dora muy rápido, cúbrela con papel aluminio el resto de la cocción.', 'Verifica el punto pinchando el muslo: el jugo debe salir claro.'] },
    { slug: 'churrasco-plancha', titulo: 'Churrasco italiano', corte: 'Lomo, Posta o Asiento', categoria: 'vaca', tiempo: '15 min', dificultad: 'Fácil', porciones: '2 personas', desc: 'El sándwich chileno de siempre: carne jugosa a la plancha con tomate, palta y una capa generosa de mayonesa.', img: '/Images/churrasco.jpg',
      ingredientes: ['250 g de carne de res en láminas finas (Lomo, Posta o Asiento)', '2 panes frica o similares de miga blanda', '1 tomate grande y maduro', '1 palta mediana', '4 cucharadas de mayonesa', '1 cucharada de aceite vegetal', 'Sal y pimienta al gusto'],
      pasos: ['Lava el tomate y córtalo en rodajas de aproximadamente medio centímetro. Reserva.', 'Pela la palta, retira el hueso y aplasta la pulpa con un tenedor hasta obtener una pasta rústica. Añade sal a gusto y mezcla.', 'Calienta una sartén amplia o plancha a fuego medio-alto. Unta con el aceite y coloca las láminas de carne. Cocina 2-3 minutos por lado, o hasta que tengan bordes dorados y el centro aún jugoso. Salpimienta durante la cocción.', 'Abre los panes y, si lo prefieres, tuesta ligeramente la parte interna sobre la sartén para que absorban mejor los jugos.', 'Monta el sándwich colocando la carne recién hecha sobre la base del pan.', 'Encima de la carne, distribuye las rodajas de tomate y, sobre ellas, la palta triturada.', 'Finaliza con una capa generosa de mayonesa, dejándola caer ligeramente por los lados para lograr el aspecto tradicional.', 'Cierra con la tapa del pan y sirve de inmediato para que la carne conserve su jugosidad.'],
      tips: ['Corta la carne en láminas bien finas para que se cocine parejo y rápido.', 'Tostar el pan sobre la plancha ayuda a que absorba mejor los jugos de la carne.', 'Sírvelo de inmediato: recién armado es cuando el pan y la carne están en su punto.'] },
    { slug: 'chorrillana', titulo: 'Chorrillana chilena', corte: 'Posta Negra', categoria: 'vaca', tiempo: '40 min', dificultad: 'Fácil', porciones: '4 personas', desc: 'El clásico de Valparaíso para compartir: carne, papas fritas, cebolla y huevo revuelto en una sola fuente.', img: '/Images/chorillana.jpg',
      ingredientes: ['300 g de Posta Negra cortada en tiras', '1 cebolla mediana en pluma', '½ kilo de papas cortadas en bastones', '3 huevos', '1 cucharada de salsa de tomates (opcional)', 'Sal, pimienta, merkén y aceite'],
      pasos: ['Calienta aceite a 180°C y fríe las papas en bastones hasta que doren, unos 10 minutos.', 'Corta la Posta Negra en tiras perpendiculares a la fibra y sazona con sal, pimienta y merkén.', 'En un sartén con aceite bien caliente, cocina las tiras de carne sin encimarlas, 3 minutos por lado, y resérvalas.', 'En el mismo sartén saltea la cebolla en pluma, agrega la salsa de tomates y cocina 5 minutos.', 'Baja el fuego, añade los huevos y revuelve hasta el punto que prefieras.', 'Sirve sobre una cama de papas fritas, corona con la cebolla y el huevo revuelto, y termina con la carne encima.'],
      tips: ['Escurre bien las papas sobre papel absorbente antes de armar para que no se humedezcan.', 'Corta la carne en contra de la fibra para que quede más tierna al freír.', 'Sírvela recién armada y bien caliente, directo al centro de la mesa para compartir.'] },
    { slug: 'empanadas-de-pino', titulo: 'Empanadas de pino', corte: 'Molida Especial', categoria: 'vaca', destacada: true, tiempo: '2 h 15 min', dificultad: 'Media', porciones: '12 empanadas grandes', desc: 'La empanada de siempre, con pino jugoso de carne, cebolla, aceituna, pasas y huevo duro.', img: '/Images/empanada-de-pino.jpg',
      ingredientes: ['1 kilo de Molida Especial', '3 cebollas grandes picadas en cubos chicos', '1 taza de caldo de vacuno', '2 cucharadas de ají de color o merkén', '½ cucharadita de comino', '2 cucharadas de harina', 'Sal y pimienta a gusto', 'Aceitunas negras, pasas y huevo duro para rellenar', 'Masa de empanadas (harina, manteca, huevo, leche y agua) o discos ya preparados'],
      pasos: ['Sofríe la carne molida en aceite caliente hasta dorar, unos 8 minutos, y agrega el ají, sal, pimienta y comino.', 'Incorpora el caldo y cocina 30 minutos a fuego bajo.', 'Agrega la cebolla picada y cocina 30 minutos más, hasta que esté blanda.', 'Añade la harina, revuelve, ajusta la sazón y deja enfriar el pino en el refrigerador, idealmente de un día para otro.', 'Estira la masa, corta los discos y rellena con pino frío, una aceituna, pasas y un trozo de huevo duro.', 'Cierra las empanadas doblando los bordes, pincela con huevo batido y hornea a 180°C por 30-35 minutos hasta dorar.'],
      tips: ['El pino siempre rinde mejor si se prepara el día anterior y se rellena bien frío.', 'Si se abomban durante el horneado, pincha con un palito para que suelten el vapor.', 'Congela las empanadas crudas y hornéalas directo del congelador cuando las necesites.'] },
    { slug: 'anticuchos', titulo: 'Anticuchos chilenos', corte: 'Asiento', categoria: 'vaca', destacada: true, tiempo: '1 h 5 min', dificultad: 'Media', porciones: '8-10 personas', desc: 'Brochetas a la parrilla con carne, longaniza, cebolla y pimentón, infaltables en las Fiestas Patrias.', img: '/Images/anticuchos.jpg',
      ingredientes: ['1 kilo de Asiento cortado en cubos de 3-4 cm', '6 Longanizas cortadas en trozos', '2 cebollas cortadas en cuadros grandes', '3 pimentones cortados en cuadros grandes', 'Vinagre de vino tinto, ají de color, orégano, sal y pimienta', 'Palitos de anticucho o brochetas de madera remojadas'],
      pasos: ['Corta la carne en trozos parejos de 3-4 cm y retira nervios o exceso de grasa.', 'Marina la carne con vinagre, sal, pimienta, orégano y ají de color; tapa y refrigera al menos 2 horas.', 'Remoja los palitos de madera 15 minutos antes de armar si vas a usarlos.', 'Arma los anticuchos alternando carne, longaniza, cebolla y pimentón.', 'Precalienta la parrilla a fuego fuerte y cocina los anticuchos unos 5 minutos por lado.', 'Sirve bien calientes, acompañados de pan para armar sándwich al gusto.'],
      tips: ['Mientras más tiempo marine la carne, más sabor toman los anticuchos.', 'Alterna los ingredientes en la brocheta para que se cocinen parejo.', 'Si usas palitos de madera, remójalos siempre antes para que no se quemen en la parrilla.'] },
    { slug: 'carne-al-jugo', titulo: 'Carne al jugo', corte: 'Huachalomo', categoria: 'vaca', destacada: true, tiempo: '3 h 30 min', dificultad: 'Media', porciones: '8 personas', desc: 'Carne al horno cocida lenta en su propio jugo, hasta quedar tan blanda que se deshace con el tenedor.', img: '/Images/carne-al-jugo.jpg',
      ingredientes: ['2 kg de Huachalomo desgrasado', '1 cebolla mediana en pluma', '2 dientes de ajo picados', '2 zanahorias en trozos', '1 taza de caldo de verduras o agua', '1 hoja de laurel, comino y granos de pimienta', 'Sal, pimienta y aceite vegetal'],
      pasos: ['Precalienta el horno a 150°C. Seca bien la carne y sazona generosamente con sal y pimienta.', 'Sella la carne en una olla con aceite caliente hasta dorar por todos lados, 4-5 minutos por lado, y retírala.', 'En la misma olla, sofríe la cebolla hasta que esté blanda, agrega el ajo y luego el caldo, la zanahoria, el laurel y el comino.', 'Deja hervir, devuelve la carne a la olla y cúbrela con la salsa. Tapa con papel aluminio.', 'Lleva al horno hasta que la carne esté blanda, entre 2 ½ y 3 horas.', 'Deja reposar la carne 20 minutos, córtala en láminas y devuélvela a la salsa antes de servir.'],
      tips: ['No destapes la olla mientras cuece: el vapor es clave para que la carne quede blanda.', 'Deja reposar la carne antes de cortarla para que no pierda sus jugos.', 'Acompaña con puré o arroz blanco para aprovechar toda la salsa.'] },
    { slug: 'cazuela-de-vacuno', titulo: 'Cazuela de vacuno', corte: 'Osobuco', categoria: 'vaca', tiempo: '45 min', dificultad: 'Fácil', porciones: '4 personas', desc: 'El caldo reconfortante de siempre, con carne, papa, zapallo y choclo en su punto.', img: '/Images/cazuela-de-vacuno.jpg',
      ingredientes: ['1 kilo de Osobuco cortado en 4 trozos', '1 cebolla grande en pluma gruesa', '2 zanahorias ralladas', '4 papas medianas peladas', '4 trozos de zapallo amarillo', '4 trozos de choclo con coronta', '4 cucharadas de arroz o chuchoca', 'Comino, orégano, sal y aceite', 'Perejil o cilantro para servir'],
      pasos: ['Dora el Osobuco por ambos lados en una olla grande con aceite caliente, salpimentando, 3 minutos por lado. Retira.', 'En la misma olla, sofríe la cebolla y la zanahoria con comino y orégano por 3 minutos.', 'Devuelve la carne a la olla y cubre con unos 2 litros de agua caliente.', 'Cocina tapado a fuego medio 30-40 minutos hasta que la carne esté blanda.', 'Agrega las papas, el zapallo, el choclo y el arroz, y cocina 15 minutos más.', 'Sirve bien caliente con cilantro o perejil picado por encima.'],
      tips: ['El Osobuco aporta el tuétano que le da cuerpo y sabor al caldo.', 'Si prefieres versión de verano, cambia las papas por porotos verdes y arvejas.', 'La cazuela siempre sabe mejor recalentada al día siguiente.'] },
    { slug: 'pollo-arvejado', titulo: 'Pollo arvejado', corte: 'Trutro Entero', categoria: 'pollo', tiempo: '1 h', dificultad: 'Fácil', porciones: '4 personas', desc: 'Guiso rápido y reconfortante de pollo con arvejas, zanahoria y pimentón en su propio jugo.', img: '/Images/pollo-arvejado.jpg',
      ingredientes: ['4-5 Trutro Entero', '1 cebolla en pluma', '2 zanahorias en rodajas', '½ pimentón verde en cubos', '2 dientes de ajo machacados', '2 tazas de caldo de pollo', '1 hoja de laurel', '1 taza de arvejas congeladas', 'Aceite, sal y pimienta'],
      pasos: ['Calienta aceite en un sartén y dora las presas de pollo 3 minutos por lado. Retira y reserva.', 'En el mismo sartén, dora la cebolla 5 minutos, agrega la zanahoria, el pimentón y el ajo, y cocina 1 minuto más.', 'Devuelve el pollo al sartén y agrega el caldo, el laurel y las arvejas congeladas.', 'Tapa y cocina a fuego medio 25-30 minutos, hasta que el pollo esté bien cocido.', 'Ajusta la sazón y sirve caliente con puré o arroz.'],
      tips: ['Usa arvejas congeladas directo del paquete: se cocinan junto con el pollo sin perder color.', 'Si quieres una salsa más espesa, destapa los últimos minutos de cocción.', 'También queda muy bien preparado con presas de cerdo en vez de pollo.'] },
    { slug: 'pastel-de-choclo', titulo: 'Pastel de choclo', corte: 'Molida Corriente', categoria: 'vaca', tiempo: '2 h', dificultad: 'Media', porciones: '6 personas', desc: 'El infaltable del verano: pino de carne bajo una capa dorada de choclo con un toque de albahaca.', img: '/Images/pastel-de-choclo.jpg',
      ingredientes: ['1 kilo de Molida Corriente', '3 cebollas picadas en cubos finos', '1 taza de caldo de vacuno', '1 cucharada de merkén o ají de color', '½ cucharadita de comino', '4 bolsas de choclo congelado (o choclo fresco desgranado)', '½ taza de leche entera', '3 cucharadas de harina de maíz o chuchoca', 'Un manojo de albahaca fresca', 'Aceitunas, pasas y huevo duro para armar (opcional)', 'Sal, pimienta, mantequilla o aceite'],
      pasos: ['Sofríe la carne molida hasta dorar, agrega el merkén, sal, pimienta y comino, y cocina 2 minutos más.', 'Incorpora el caldo y cocina 30 minutos a fuego bajo, luego agrega la cebolla y cocina otros 30 minutos. Reserva el pino.', 'Derrite mantequilla en una olla, agrega el choclo y cocina 8 minutos revolviendo.', 'Añade la leche y la albahaca, cocina 10 minutos más y procesa hasta la consistencia que prefieras.', 'Incorpora la harina de maíz y cocina 5 minutos más para espesar la pastelera de choclo.', 'En fuentes individuales o una grande, pon el pino con aceitunas, pasas y huevo duro, cubre con la pastelera y hornea a 200°C por 45-60 minutos hasta dorar.'],
      tips: ['No uses choclo en conserva: tiene demasiada agua y afloja la pastelera.', 'Deja reposar el pastel 10 minutos fuera del horno antes de servir para que asiente.', 'La albahaca fresca es clave para el sabor: evita variedades muy intensas.'] },
    { slug: 'carbonada', titulo: 'Carbonada', corte: 'Posta Rosada', categoria: 'vaca', tiempo: '40 min', dificultad: 'Fácil', porciones: '6 personas', desc: 'Sopa espesa y reconfortante de carne picada con verduras y arroz, lista en menos de una hora.', img: '/Images/carbonada.jpg',
      ingredientes: ['1 kilo de Posta Rosada picada en cubos', '1 cebolla en cubos pequeños', '3 zanahorias en cubos', '2 ramas de apio picadas', '½ pimentón picado', '3 papas medianas en cubos', '½ taza de arroz crudo', '1 taza de arvejitas o porotos verdes', 'Orégano, comino y paprika a gusto', '2 hojas de laurel', 'Sal, pimienta y aceite'],
      pasos: ['Dora la carne en cubos en una olla con aceite, 2 minutos por lado, y sazona con sal, pimienta y especias.', 'Agrega la cebolla y sofríe 5 minutos, luego suma la zanahoria, el pimentón y el apio, y cocina 3 minutos más.', 'Incorpora las papas y el arroz, revuelve bien y ajusta la sazón.', 'Cubre con agua (1,5 a 2 litros) y agrega el laurel. Deja hervir.', 'Cocina tapado 20 minutos a fuego medio-bajo.', 'Agrega las arvejitas o porotos verdes y cocina 3 minutos más antes de servir bien caliente.'],
      tips: ['Puedes dejarla más espesa con menos agua o más caldosa a tu gusto.', 'El arroz sigue absorbiendo líquido, así que sírvela recién hecha.', 'Ideal para aprovechar verduras que tengas a mano en el refrigerador.'] },
    { slug: 'plateada-al-horno', titulo: 'Plateada al horno', corte: 'Plateada', categoria: 'vaca', destacada: true, tiempo: '4 h', dificultad: 'Media', porciones: '8 personas', desc: 'Cocción lenta y sin apuro hasta que la Plateada quede tan blanda que se deshace con el tenedor.', img: '/Images/plateada-al-horno.jpg',
      ingredientes: ['2 kilos de Plateada', '2 dientes de ajo molidos', '½ taza de aceite de oliva', '3 cucharadas de vinagre', 'Tomillo u orégano fresco o seco', '1 cucharada de merkén o paprika ahumada', '1 cebolla en pluma', '1 vaso de agua', 'Sal y pimienta'],
      pasos: ['Mezcla el ajo, el aceite, el vinagre, el merkén, sal y pimienta, y frota la Plateada con este adobo. Tapa y refrigera 3 horas.', 'Precalienta el horno a 150°C.', 'Retira la carne del adobo y dórala en una olla con aceite caliente, 5-8 minutos por lado.', 'Agrega la cebolla, los jugos del adobo y el vaso de agua, y cocina a fuego bajo 10 minutos.', 'Tapa y lleva al horno sin destapar entre 2 ½ y 3 horas, hasta que la carne se separe con el tenedor.', 'Deja reposar tapada 20 minutos antes de cortar en láminas y servir.'],
      tips: ['No destapes la olla durante la cocción: el vapor es lo que ablanda la carne.', 'Marinar de un día para otro le da aún más sabor a la Plateada.', 'Acompaña con papas cocidas o puré picante, como se sirve tradicionalmente.'] },
    { slug: 'asado-tradicional', titulo: 'Asado tradicional con chimichurri', corte: 'Asado de Tira', categoria: 'vaca', tiempo: '1 h', dificultad: 'Fácil', porciones: '6-8 personas', desc: 'El domingo en familia de siempre: Asado de Tira a las brasas con un chimichurri casero recién hecho.', img: '/Images/asado-tradicional-con-chimichurri.jpg',
      ingredientes: ['1,5 kg de Asado de Tira', 'Sal gruesa y pimienta', '2 atados de cebollín', '2 atados de perejil', '2 cucharaditas de orégano', '1 diente de ajo picado', '1 cucharadita de ají seco', '½ taza de aceite', '⅛ taza de vinagre de vino', 'Jugo de 1 limón'],
      pasos: ['Prepara el chimichurri: pica fino el cebollín y el perejil, mézclalos con el ajo, el orégano, el ají seco, la sal, el aceite, el vinagre, agua y el jugo de limón. Deja reposar al menos 2 horas.', 'Retira el Asado de Tira del refrigerador con anticipación para que llegue a temperatura ambiente.', 'Prepara brasas parejas de calor medio-alto.', 'Sella la carne a fuego fuerte por ambos lados, luego termina la cocción a fuego más suave hasta el punto que prefieras.', 'Sazona con sal gruesa y pimienta, y deja reposar unos minutos antes de cortar.', 'Sirve con el chimichurri casero y las ensaladas de siempre.'],
      tips: ['El chimichurri mejora si se prepara el día anterior y se guarda refrigerado.', 'Sellar primero a fuego fuerte y terminar más suave ayuda a que la carne quede pareja por dentro.', 'Un buen asado se disfruta en familia, sin apuro y con buena compañía.'] },
  ];
  var recetasBySlug = {};
  recetas.forEach(function (r) { recetasBySlug[r.slug] = r; });

  var validPages = ['inicio', 'vaca', 'cerdo', 'pollo', 'subproductos', 'recomendaciones', 'recetas', 'nosotros', 'contacto', 'tomahawk', 'flatiron', 'asado-parrilla', 'costillar-ahumado', 'pollo-horno', 'churrasco-plancha', 'chorrillana', 'empanadas-de-pino', 'anticuchos', 'carne-al-jugo', 'cazuela-de-vacuno', 'pollo-arvejado', 'pastel-de-choclo', 'carbonada', 'plateada-al-horno', 'asado-tradicional', 'entrana', 'lomo-vetado', 'arrachera', 'asado-de-tira', 'filete', 'entrecot', 'molida-especial', 'posta-rosada', 'osobuco'];
  var state = { page: 'inicio' };

  var metodoInfo = {
    parrilla: { label: 'Parrilla', emoji: '🔥' },
    sarten: { label: 'Sartén', emoji: '🍳' },
    cacerola: { label: 'Cacerola', emoji: '🍲' },
  };

  function metodoIcon(name, light) {
    var info = metodoInfo[name];
    if (!info) return '';
    var content = info.svg
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + info.svg + '</svg>'
      : info.emoji;
    var bg = light ? 'rgba(69,0,0,0.08)' : 'rgba(255,255,255,0.12)';
    var border = light ? 'rgba(69,0,0,0.25)' : 'rgba(255,255,255,0.18)';
    var color = light ? '#450000' : '#D1A66A';
    return '<span title="' + info.label + '" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:' + bg + ';border:1px solid ' + border + ';color:' + color + ';font-size:16px;line-height:1">' + content + '</span>';
  }

  function premiumStamp(nombre, size) {
    size = size || 180;
    var big = size >= 150;
    var ringInset = Math.round(size * 0.045);
    var padInset = Math.round(size * 0.12);
    return '' +
      '<div style="position:relative;width:' + size + 'px;height:' + size + 'px;flex-shrink:0;transform:rotate(-6deg)">' +
        '<div style="position:absolute;inset:0;border-radius:50%;border:' + (big ? 3 : 2) + 'px solid #D1A66A"></div>' +
        '<div style="position:absolute;inset:' + ringInset + 'px;border-radius:50%;border:1px solid #D1A66A;opacity:0.6"></div>' +
        '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:' + (big ? 4 : 2) + 'px;text-align:center;padding:' + padInset + 'px">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:' + (big ? 9 : 7) + 'px;letter-spacing:0.22em;text-transform:uppercase;color:#D1A66A">Carnes Marty</span>' +
          '<span style="font-family:\'Playfair Display\',serif;font-weight:700;font-style:italic;font-size:' + (big ? 16 : 10) + 'px;line-height:1.15;color:#FAF7F4">' + nombre + '</span>' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:' + (big ? 9 : 7) + 'px;letter-spacing:0.3em;text-transform:uppercase;color:#D1A66A;margin-top:2px">★ Premium ★</span>' +
        '</div>' +
      '</div>';
  }

  function premiumTeaserCard(p) {
    return '' +
      '<div onclick="navigate(\'' + p.slug + '\')" class="receta-card hover-card" tabindex="0" style="cursor:pointer;position:relative;height:440px;border-radius:4px;overflow:hidden;border:1px solid #4A3B33">' +
        '<div class="receta-card-bg" style="position:absolute;inset:0;background-image:url(\'' + p.img + '\');background-size:cover;background-position:center"></div>' +
        '<div class="receta-card-mask"></div>' +
        '<div style="position:absolute;left:20%;bottom:16px;transform:translateX(-50%);z-index:2;filter:drop-shadow(0 6px 14px rgba(0,0,0,0.55))">' + premiumStamp(p.nombre, 100) + '</div>' +
        '<div class="receta-card-panel">' +
          '<div class="receta-card-glass">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D1A66A">Corte Premium</span>' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:26px;margin:0;color:#FAF7F4">' + p.nombre + '</h3>' +
            '<span class="link-arrow" style="font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A">Ver corte →</span>' +
            '<p class="receta-card-desc">' + p.tagline + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function pagePremiumDetail(slug) {
    var p = premiumCuts[slug];
    var waText = encodeURIComponent('¡Hola! 👋  Quería consultar por el corte premium ' + p.nombre + ' que vi en su página.\n\n¿Me podrían contar el precio y si tienen disponibilidad?\n\n¡Muchas gracias! 😊');
    var specs = [
      ['Peso', p.peso],
      ['Porciones', p.porciones],
      ['Origen', p.origen],
      ['Textura', p.textura],
      ['Término recomendado', p.termino],
    ];
    var specsHtml = specs.map(function (s) {
      return '<div style="display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px dashed rgba(43,26,16,0.25);font-family:\'Inter\',sans-serif;font-size:12.5px">' +
        '<span style="font-weight:600;color:#6b4326">' + s[0] + '</span><span style="text-align:right;color:#2b1a10">' + s[1] + '</span>' +
      '</div>';
    }).join('');
    var metodosHtml = p.metodos.map(function (m) { return metodoIcon(m, true); }).join('');
    var descHtml = p.descripcion.map(function (par) {
      return '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.75;color:#E2E8F0;margin:0;text-align:justify">' + par + '</p>';
    }).join('');
    var mediaHtml = '<div style="position:relative;border-radius:6px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.35);height:100%;min-height:320px">' +
      '<img src="' + p.img + '" alt="' + p.nombre + '" style="width:100%;height:100%;min-height:320px;object-fit:cover;display:block">' +
      '<div style="position:absolute;bottom:14px;right:14px;filter:drop-shadow(0 6px 14px rgba(0,0,0,0.55))">' + premiumStamp(p.nombre, 110) + '</div>' +
    '</div>';
    return '' +
    '<div data-screen-label="' + p.nombre + '">' +
      '<div class="page-banner cat-banner" style="position:relative;width:100%;min-height:280px;background-image:url(\'' + p.img + '\');background-size:cover;background-position:center;overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:radial-gradient(circle at 25% 30%, rgba(69,0,0,0.55), #141414 72%)"></div>' +
        '<div class="cat-banner-inner" style="position:relative;z-index:2;max-width:1280px;margin:0 auto;min-height:280px;display:flex;align-items:center;padding:64px 32px">' +
          '<div class="cat-banner-text" style="display:flex;flex-direction:column;align-items:flex-start;text-align:left;gap:12px;max-width:640px">' +
            '<a href="/' + pageFileMap[p.categoriaPage] + '" class="link-arrow" style="text-decoration:none;cursor:pointer;font-family:\'Inter\',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.05em;color:#D1A66A;text-transform:uppercase">← Volver a ' + p.categoriaLabel + '</a>' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">Corte premium · ' + p.categoriaLabel + '</span>' +
            '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(34px,5vw,54px);margin:0;color:#FAF7F4;text-shadow:0 4px 18px rgba(0,0,0,0.5)">' + p.nombre + '</h1>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;margin:0">' + p.tagline + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="background:#141414">' +
      '<div style="max-width:1000px;margin:0 auto;padding:64px 32px;display:flex;flex-direction:column;gap:40px">' +
        '<div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:stretch">' +
          mediaHtml +
          '<div style="background:#F3E9D2;color:#2b1a10;border-radius:6px;padding:24px 22px;max-width:360px;width:100%;margin:0 auto;transform:rotate(-1.5deg);box-shadow:0 20px 34px rgba(0,0,0,0.4);position:relative;align-self:center">' +
            '<div style="position:absolute;top:-9px;left:24px;width:18px;height:18px;border-radius:50%;background:#141414;border:3px solid #B99A63"></div>' +
            '<span style="display:inline-block;font-family:\'Inter\',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#450000;border:1.5px solid #450000;padding:3px 8px;border-radius:2px;transform:rotate(-4deg);margin-bottom:12px">Premium</span>' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:700;font-style:italic;font-size:20px;margin:0 0 14px;color:#2b1a10">' + p.nombre + '</h3>' +
            specsHtml +
            '<div style="border-top:1px dashed #B99A63;margin:14px 0 0;padding-top:14px;display:flex;gap:8px;justify-content:flex-start">' + metodosHtml + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:18px">' +
          descHtml +
          '<div style="position:relative;background:#141414;border:1px dashed rgba(209,166,106,0.4);border-radius:2px;padding:22px 22px 20px 54px;overflow:hidden">' +
            '<span style="position:absolute;top:2px;left:14px;font-family:\'Playfair Display\',serif;font-weight:700;font-size:50px;line-height:1;color:rgba(209,166,106,0.3)">❝</span>' +
            '<span style="display:block;font-family:\'Inter\',sans-serif;font-size:10.5px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#D1A66A;margin-bottom:8px">Tip de la casa</span>' +
            '<p style="font-family:\'Playfair Display\',serif;font-style:italic;font-size:16px;line-height:1.6;color:#FAF7F4;margin:0">' + p.tip + '</p>' +
          '</div>' +
          '<a href="https://api.whatsapp.com/send?phone=56940691425&text=' + waText + '" target="_blank" rel="noopener" class="btn-cta" style="text-decoration:none;align-self:flex-start;background:#28741A;color:#FFFFFF;font-weight:600;font-size:14px;padding:14px 30px;border-radius:3px">Consultar disponibilidad por WhatsApp</a>' +
        '</div>' +
      '</div>' +
      '</div>' +
    '</div>';
  }

  function cutCard(cut) {
    var waText = encodeURIComponent('¡Hola! 👋  Quería consultar por el producto ' + cut.nombre + ' que vi en su página.\n\n¿Me podrían contar el precio y si tienen disponibilidad?\n\n¡Muchas gracias! 😊');
    var metodosHtml = (cut.metodos || []).map(metodoIcon).join('');
    var bg = cut.img
      ? 'background-image:url(\'' + cut.img + '\');background-size:cover;background-position:center'
      : 'background:repeating-linear-gradient(135deg,#5E392C,#5E392C 12px,#3B1F16 12px,#3B1F16 24px)';
    return '' +
      '<div class="receta-card cut-card hover-card" tabindex="0" style="position:relative;height:400px;border-radius:4px;overflow:hidden;border:1px solid #4A3B33">' +
        '<div class="receta-card-bg" style="position:absolute;inset:0;' + bg + '"></div>' +
        '<div class="receta-card-mask"></div>' +
        '<div class="receta-card-panel">' +
          '<div class="receta-card-glass" style="gap:10px">' +
            (cut.destacado ? '<span style="font-family:\'Inter\',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;background:#855F4F;color:#FAF7F4;padding:4px 8px;border-radius:2px">Favorito</span>' : '') +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:20px;margin:0;color:#FAF7F4">' + cut.nombre + '</h3>' +
            '<p class="receta-card-desc">' + cut.desc + '</p>' +
            '<div style="display:flex;gap:8px;justify-content:center;margin-top:2px">' + metodosHtml + '</div>' +
            '<a href="https://api.whatsapp.com/send?phone=56940691425&text=' + waText + '" target="_blank" rel="noopener" class="link-arrow" style="text-decoration:none;font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A;margin-top:4px">Consultar disponibilidad →</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  var seccionLabels = {
    parrilla: 'Estrella de la parrilla',
    premium: 'Corte premium',
    diaria: 'Uso diario',
  };

  function recomendadoCard(slug) {
    var item = getRecomendado(slug);
    var bg = item.img
      ? 'background-image:url(\'' + item.img + '\');background-size:cover;background-position:center'
      : 'background:repeating-linear-gradient(135deg,#5E392C,#5E392C 12px,#3B1F16 12px,#3B1F16 24px)';
    var label = seccionLabels[item.seccion] || 'Corte premium';
    return '' +
      '<div onclick="navigate(\'' + slug + '\')" class="receta-card hover-card" tabindex="0" style="cursor:pointer;position:relative;height:340px;border-radius:4px;overflow:hidden;border:1px solid #4A3B33">' +
        '<div class="receta-card-bg" style="position:absolute;inset:0;' + bg + '"></div>' +
        '<div class="receta-card-mask"></div>' +
        '<div class="receta-card-panel">' +
          '<div class="receta-card-glass">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D1A66A">' + label + '</span>' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:22px;margin:0;color:#FAF7F4">' + item.nombre + '</h3>' +
            '<span class="link-arrow" style="font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A">Ver corte →</span>' +
            '<p class="receta-card-desc">' + item.tagline + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function recomendadoSeccionBlock(seccion, bg) {
    return '' +
      '<div style="padding:72px 32px;background-color:' + bg + '">' +
        '<div style="max-width:1280px;margin:0 auto">' +
          '<div style="max-width:640px;margin:0 auto 40px;text-align:center;display:flex;flex-direction:column;gap:10px">' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(24px,3vw,32px);margin:0;color:#FAF7F4">' + seccion.titulo + '</h2>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:14.5px;line-height:1.6;color:#E2E8F0;margin:0">' + seccion.desc + '</p>' +
          '</div>' +
          '<div class="grid-3" style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px">' + seccion.items.map(recomendadoCard).join('') + '</div>' +
        '</div>' +
      '</div>';
  }

  function pageRecomendadoDetail(slug) {
    var p = recomendadoCuts[slug];
    var waText = encodeURIComponent('¡Hola! 👋  Quería consultar por el corte ' + p.nombre + ' que vi en su página.\n\n¿Me podrían contar el precio y si tienen disponibilidad?\n\n¡Muchas gracias! 😊');
    var label = seccionLabels[p.seccion] || 'Recomendado';
    var specs = [
      ['Peso', p.peso],
      ['Porciones', p.porciones],
      ['Origen', p.origen],
      ['Textura', p.textura],
      ['Término recomendado', p.termino],
    ];
    var specsHtml = specs.map(function (s) {
      return '<div style="display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px dashed rgba(43,26,16,0.25);font-family:\'Inter\',sans-serif;font-size:12.5px">' +
        '<span style="font-weight:600;color:#6b4326">' + s[0] + '</span><span style="text-align:right;color:#2b1a10">' + s[1] + '</span>' +
      '</div>';
    }).join('');
    var metodosHtml = p.metodos.map(function (m) { return metodoIcon(m, true); }).join('');
    var descHtml = p.descripcion.map(function (par) {
      return '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.75;color:#E2E8F0;margin:0;text-align:justify">' + par + '</p>';
    }).join('');
    var mediaHtml = p.img
      ? '<div style="border-radius:6px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.35);height:100%;min-height:320px"><img src="' + p.img + '" alt="' + p.nombre + '" style="width:100%;height:100%;min-height:320px;object-fit:cover;display:block"></div>'
      : '<div style="border-radius:6px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.35);width:100%;height:100%;min-height:320px;background:repeating-linear-gradient(135deg,#5E392C,#5E392C 14px,#2E2E2E 14px,#2E2E2E 28px)"></div>';
    var heroBg = p.img
      ? 'background-image:url(\'' + p.img + '\');background-size:cover;background-position:center'
      : 'background:repeating-linear-gradient(135deg,#5E392C,#5E392C 14px,#2E2E2E 14px,#2E2E2E 28px)';
    return '' +
    '<div data-screen-label="' + p.nombre + '">' +
      '<div class="page-banner cat-banner" style="position:relative;width:100%;min-height:280px;' + heroBg + ';overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:radial-gradient(circle at 25% 30%, rgba(69,0,0,0.55), #141414 72%)"></div>' +
        '<div class="cat-banner-inner" style="position:relative;z-index:2;max-width:1280px;margin:0 auto;min-height:280px;display:flex;align-items:center;padding:64px 32px">' +
          '<div class="cat-banner-text" style="display:flex;flex-direction:column;align-items:flex-start;text-align:left;gap:14px;max-width:640px">' +
            '<a href="recomendaciones.html" class="link-arrow" style="text-decoration:none;cursor:pointer;font-family:\'Inter\',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.05em;color:#D1A66A;text-transform:uppercase">← Volver a Recomendaciones</a>' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">' + label + ' · ' + p.categoriaLabel + '</span>' +
            '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(30px,4.5vw,48px);margin:0;color:#FAF7F4;text-shadow:0 4px 18px rgba(0,0,0,0.5)">' + p.nombre + '</h1>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;margin:0">' + p.tagline + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="background:#141414">' +
      '<div style="max-width:1000px;margin:0 auto;padding:64px 32px;display:flex;flex-direction:column;gap:40px">' +
        '<div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:stretch">' +
          mediaHtml +
          '<div style="background:#F3E9D2;color:#2b1a10;border-radius:6px;padding:24px 22px;max-width:360px;width:100%;margin:0 auto;transform:rotate(-1.5deg);box-shadow:0 20px 34px rgba(0,0,0,0.4);position:relative;align-self:center">' +
            '<div style="position:absolute;top:-9px;left:24px;width:18px;height:18px;border-radius:50%;background:#141414;border:3px solid #B99A63"></div>' +
            '<span style="display:inline-block;font-family:\'Inter\',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#450000;border:1.5px solid #450000;padding:3px 8px;border-radius:2px;transform:rotate(-4deg);margin-bottom:12px">' + label + '</span>' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:700;font-style:italic;font-size:20px;margin:0 0 14px;color:#2b1a10">' + p.nombre + '</h3>' +
            specsHtml +
            '<div style="border-top:1px dashed #B99A63;margin:14px 0 0;padding-top:14px;display:flex;gap:8px;justify-content:flex-start">' + metodosHtml + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:18px">' +
          descHtml +
          '<div style="position:relative;background:#141414;border:1px dashed rgba(209,166,106,0.4);border-radius:2px;padding:22px 22px 20px 54px;overflow:hidden">' +
            '<span style="position:absolute;top:2px;left:14px;font-family:\'Playfair Display\',serif;font-weight:700;font-size:50px;line-height:1;color:rgba(209,166,106,0.3)">❝</span>' +
            '<span style="display:block;font-family:\'Inter\',sans-serif;font-size:10.5px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#D1A66A;margin-bottom:8px">Tip de la casa</span>' +
            '<p style="font-family:\'Playfair Display\',serif;font-style:italic;font-size:16px;line-height:1.6;color:#FAF7F4;margin:0">' + p.tip + '</p>' +
          '</div>' +
          '<a href="https://api.whatsapp.com/send?phone=56940691425&text=' + waText + '" target="_blank" rel="noopener" class="btn-cta" style="text-decoration:none;align-self:flex-start;background:#28741A;color:#FFFFFF;font-weight:600;font-size:14px;padding:14px 30px;border-radius:3px">Consultar disponibilidad por WhatsApp</a>' +
        '</div>' +
      '</div>' +
      '</div>' +
    '</div>';
  }

  function recetaCard(r) {
    var bg = r.img
      ? 'background-image:url(\'' + r.img + '\');background-size:cover;background-position:center'
      : 'background:repeating-linear-gradient(135deg,#5E392C,#5E392C 12px,#3B1F16 12px,#3B1F16 24px)';
    return '' +
      '<div onclick="navigate(\'' + r.slug + '\')" class="receta-card hover-card" tabindex="0" style="cursor:pointer;position:relative;height:340px;border-radius:4px;overflow:hidden;border:1px solid #4A3B33">' +
        '<div class="receta-card-bg" style="position:absolute;inset:0;' + bg + '"></div>' +
        '<div class="receta-card-mask"></div>' +
        '<div class="receta-card-panel">' +
          '<div class="receta-card-glass">' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:20px;margin:0;color:#FAF7F4">' + r.titulo + '</h3>' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12.5px;font-weight:600;letter-spacing:0.04em;color:#D1A66A">' + r.corte + '</span>' +
            '<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:2px">' +
              '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:600;color:#FAF7F4;background:rgba(0,0,0,0.35);padding:5px 10px;border-radius:2px">' + r.tiempo + '</span>' +
              '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:600;color:#FAF7F4;background:rgba(0,0,0,0.35);padding:5px 10px;border-radius:2px">' + r.dificultad + '</span>' +
            '</div>' +
            '<p class="receta-card-desc">' + r.desc + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function recetaSwirl() {
    return '<svg width="64" height="13" viewBox="0 0 64 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block"><path d="M2 9c3.5-7 7-7 10.5 0S19.5 9 23 2s7-7 10.5 0S40 9 43.5 2s7-7 10.5 0S60.5 9 62 5" stroke="#D1A66A" stroke-width="1.6" stroke-linecap="round"/></svg>';
  }

  function recetaSectionHeading(text) {
    return '' +
      '<div style="display:flex;flex-direction:column;align-items:center;gap:6px">' +
        '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-style:italic;font-size:24px;margin:0;color:#450000;text-align:center">' + text + '</h3>' +
        recetaSwirl() +
      '</div>';
  }

  function recetaInfoPill(label, value) {
    return '' +
      '<span style="display:inline-flex;align-items:center;gap:6px;font-family:\'Inter\',sans-serif;font-size:12.5px;font-weight:600;color:#450000;background:#FAF7F4;border:1px solid rgba(69,0,0,0.22);border-radius:24px;padding:10px 20px;box-shadow:0 4px 10px rgba(69,0,0,0.08)">' +
        '<span style="color:#855F4F;font-weight:600">' + label + '</span> ' + value +
      '</span>';
  }

  var googleIconSvg = '<svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true" style="flex-shrink:0"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.9 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"></path><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"></path><path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35.2 26.8 36 24 36c-5.3 0-9.8-3.4-11.4-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z"></path><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.3 5.3C39.5 36.6 44 30.9 44 24c0-1.3-.1-2.7-.4-3.5z"></path></svg>';

  function resenaCard(r, hidden) {
    return '' +
      '<div class="review-card"' + (hidden ? ' aria-hidden="true"' : '') + ' style="display:flex;flex-direction:column;gap:8px;background:rgba(255,255,255,0.12);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.18);border-radius:6px;padding:20px;text-align:left">' +
        '<span style="color:#D1A66A;font-size:14px;letter-spacing:2px">★★★★★</span>' +
        '<p style="font-family:\'Inter\',sans-serif;font-size:14px;line-height:1.55;color:#FAF7F4;margin:0">"' + r.texto + '"</p>' +
        '<span style="font-family:\'Inter\',sans-serif;font-size:12px;color:#D1A66A;font-weight:600;margin-top:4px">' + r.autor + '</span>' +
      '</div>';
  }

  function pageInicio() {
    var catImgs = { vaca: '/Images/ribeye-strip-loin.jpeg', pollo: '/Images/polleria.jpeg', cerdo: '/Images/cerdo.jpg' };
    var catNames = { vaca: 'Vacuno', pollo: 'Pollo', cerdo: 'Cerdo' };
    var catDesc = {
      vaca: 'Categoría V, cortes premium para la parrilla y la olla.',
      pollo: 'Pollo nacional fresco, entero o por presas.',
      cerdo: 'Costillar, pernil y chuletas frescas todos los días.'
    };
    var catHtml = ['vaca', 'pollo', 'cerdo'].map(function (key) {
      return '' +
        '<a href="/' + pageFileMap[key] + '" class="cat-card" style="cursor:pointer;text-decoration:none;border:1px solid #4A3B33;border-radius:4px;overflow:hidden;display:flex;flex-direction:column;background-color:#450000">' +
          '<div class="cat-card-img" style="height:200px;overflow:hidden"><img src="' + catImgs[key] + '" alt="' + catNames[key] + '" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
          '<div style="padding:22px;display:flex;flex-direction:column;gap:8px;background-color:#450000">' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:22px;margin:0;color:#FFFFFF">' + catNames[key] + '</h3>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:13.5px;line-height:1.55;color:#E2E8F0;margin:0">' + catDesc[key] + '</p>' +
            '<span class="link-arrow" style="font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A;margin-top:4px">Ver cortes →</span>' +
          '</div>' +
        '</a>';
    }).join('');

    var valoresChecks = valores.map(function (v) {
      return '<div style="display:flex;align-items:baseline;gap:8px"><span style="color:#D1A66A;font-weight:700;font-size:14px">✓</span><span style="font-family:\'Inter\',sans-serif;font-size:13.5px;font-weight:600;color:#FFFFFF">' + v.titulo + '</span></div>';
    }).join('');

    var badgesHtml = badges.map(function (b) {
      return '<div style="display:flex;flex-direction:column;gap:4px;padding:8px"><span style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:17px;color:#D1A66A">' + b.titulo + '</span><span style="font-family:\'Inter\',sans-serif;font-size:11.5px;letter-spacing:0.06em;text-transform:uppercase;color:#FFFFFF">' + b.sub + '</span></div>';
    }).join('');

    var premiumHtml = Object.keys(premiumCuts).map(function (key) { return premiumTeaserCard(premiumCuts[key]); }).join('');

    var recetasHome = recetas.slice(0, 3).map(function (r) {
      var media = r.img
        ? '<div style="height:160px;border-radius:5px;overflow:hidden"><img src="' + r.img + '" alt="' + r.titulo + '" style="width:100%;height:100%;object-fit:cover;display:block"></div>'
        : '<div style="height:160px;border-radius:5px;overflow:hidden;background:repeating-linear-gradient(135deg,#5E392C,#5E392C 12px,#3B1F16 12px,#3B1F16 24px)"></div>';
      return '<div onclick="navigate(\'' + r.slug + '\')" class="hover-card" style="cursor:pointer;display:flex;flex-direction:column;gap:10px">' + media +
        '<h4 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:17px;margin:0;color:#E2E8F0">' + r.titulo + '</h4>' +
        '<span style="font-family:\'Inter\',sans-serif;font-size:12.5px;color:#D1A66A">' + r.corte + ' · ' + r.tiempo + '</span></div>';
    }).join('');

    return '' +
    '<div data-screen-label="Inicio">' +
      '<div style="position:relative;width:100%;min-height:88vh;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:70px 0">' +
        '<video autoplay muted loop playsinline poster="/Images/ribeye-strip-loin.jpeg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0"><source src="/video/ribeye_animated.mp4" type="video/mp4"></video>' +
        '<div style="position:absolute;inset:0;background:linear-gradient(180deg, #101010EB, rgba(10,9,8,0.35) 40%, #1C1C1C 100%);z-index:1"></div>' +
        '<div style="position:relative;z-index:2;text-align:center;padding:0 24px;max-width:860px;display:flex;flex-direction:column;align-items:center;gap:22px">' +
          '<img src="/Images/logoCarnesMarti_white.png" alt="Carnes Marty" width="1072" height="976" class="hero-logo hero-anim-logo" style="width:240px;height:240px;border-radius:50%;object-fit:contain;background:#FAF7F4;padding:14px;box-sizing:border-box;border:4px solid #D1A66A;box-shadow:0px 20px 40px 0px rgba(0,0,0,0.55);margin-bottom:6px">' +
          '<span class="hero-anim-eyebrow" style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.28em;text-transform:uppercase;color:#D1A66A;font-weight:600;background:rgba(28,28,28,0.6);padding:10px 18px;border-radius:10px">Desde 2020 · Linderos, Buin</span>' +
          '<h1 class="hero-title hero-anim-title" style="font-family:\'Playfair Display\',serif;font-weight:600;font-style:italic;font-size:clamp(38px,6vw,72px);line-height:1.08;color:#FAF7F4;margin:0">Carnicería en Linderos, Buin</h1>' +
          '<p class="hero-slogan hero-anim-text" style="font-family:\'Playfair Display\',serif;font-weight:500;font-style:italic;font-size:clamp(18px,2.4vw,26px);color:#D1A66A;margin:0">Para los que entienden de carne.</p>' +
          '<p class="hero-anim-text" style="font-family:\'Inter\',sans-serif;font-size:17px;line-height:1.6;color:#E2E8F0;max-width:560px;margin:0">Carne nacional, fresca y de Categoría V. Cortes premium seleccionados uno por uno, con el oficio carnicero de siempre.</p>' +
          '<div class="hero-cta-group hero-anim-buttons" style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-top:8px">' +
            '<span class="hero-btn" onclick="scrollToSection(\'cortes-premium\')" style="cursor:pointer;color:#FAF7F4;font-weight:600;font-size:14px;padding:14px 28px;border-radius:3px;background-color:#450000;border:1px solid #450000">Ver cortes premium</span>' +
            '<a href="https://api.whatsapp.com/send?phone=56940691425&text=¡Hola, Carnes Marty! 👋🏼 Quiero realizar un pedido:%0A%0AProductos (indica gramos, kilos o unidades):%0A• Ej: 500g de pechuga de pollo fileteada%0A• Ej: 1kg de carne picada de ternera%0A• Ej: 4 hamburguesas de buey%0A%0AMi pedido:%0A•%0A•%0A•%0A%0AMis datos:%0A• Nombre:%0A• Día y hora de recogida: %0A%0AQuedo a la espera de que me confirméis disponibilidad y el total. ¡Gracias!" target="_blank" rel="noopener" class="hero-btn" style="text-decoration:none;cursor:pointer;border:1px solid #5E7619;color:#FFFFFF;font-weight:600;font-size:14px;padding:14px 28px;border-radius:3px;background-color:#28741A">Pedir por WhatsApp</a>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div style="background-color:#101010">' +
        '<div class="section-pad two-col-rev" style="max-width:1280px;margin:0 auto;padding:88px 32px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center">' +
          '<div style="height:380px;border-radius:4px;overflow:hidden"><img src="/Images/David_primerPlano.png" alt="Cortes frescos Carnes Marty" width="1232" height="848" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:12px"></div>' +
          '<div style="display:flex;flex-direction:column;gap:18px">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#d1a66a;font-weight:600">Sobre Carnes Marty</span>' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:32px;margin:0;color:#FFFFFF">Cortes frescos y premium, todos los días</h2>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:14.5px;line-height:1.65;color:#E2E8F0;margin:0">Desde 2020 seleccionamos carne nacional pieza por pieza, con el oficio de siempre y el trato cercano de un negocio de barrio.</p>' +
            '<div class="valores-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:6px">' + valoresChecks + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div style="padding:32px 32px;background-color:#450000">' +
        '<div class="grid-4" style="max-width:1280px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center">' + badgesHtml + '</div>' +
      '</div>' +

      '<div style="padding:80px 32px;background-color:#101010">' +
        '<div style="max-width:1280px;margin:0 auto">' +
          '<div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;margin-bottom:20px;max-width:640px;margin-left:auto;margin-right:auto">' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:34px;margin:0;color:#FFFFFF">Nuestros cortes</h2>' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:13px;letter-spacing:0.05em;color:#D1A66A;font-weight:600">carne nacional en vara</span>' +
          '</div>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:14.5px;line-height:1.7;color:#E2E8F0;max-width:640px;margin:0 auto 36px;text-align:center">La carne en vara es carne nacional chilena que se recibe entera, sin trocear, y se corta en el local a medida que se necesita. Así garantizamos frescura real y un control de calidad artesanal en cada pieza, desde la res completa hasta el corte que te llevas a casa.</p>' +
          '<div class="grid-3" style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px">' + catHtml + '</div>' +
        '</div>' +
      '</div>' +

      '<div id="cortes-premium" style="padding:80px 32px;background-color:#101010">' +
        '<div style="max-width:1000px;margin:0 auto">' +
          '<div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;margin-bottom:36px">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">Selección limitada</span>' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:34px;margin:0;color:#FFFFFF">Cortes Premium</h2>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:14.5px;line-height:1.65;color:#E2E8F0;max-width:560px;margin:6px 0 0">Piezas especiales con ficha propia: origen, textura y la mejor forma de cocinarlas.</p>' +
          '</div>' +
          '<div class="grid-3" style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px">' + premiumHtml + '</div>' +
        '</div>' +
      '</div>' +

      '<div style="position:relative;padding:100px 32px;background-image:url(\'/Images/cortes_frescos.jpeg\');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:rgba(10,9,8,0.65)"></div>' +
        '<div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:18px;max-width:640px">' +
          '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(26px,4vw,38px);margin:0;color:#FAF7F4">Carne fresca, todos los días</h2>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:14.5px;line-height:1.6;color:#E2E8F0;margin:0">Escríbenos por WhatsApp y coordinamos tu pedido de cortes frescos y premium.</p>' +
          '<a href="https://api.whatsapp.com/send?phone=56940691425&text=¡Hola, Carnes Marty! 🥩 Quiero realizar un pedido:%0A%0AProductos (indica gramos, kilos o unidades):%0A• Ej: 500g de pechuga de pollo fileteada%0A• Ej: 1kg de carne picada de ternera%0A• Ej: 4 hamburguesas de buey%0A%0AMi pedido:%0A•%0A•%0A•%0A%0AMis datos:%0A• Nombre:%0A• Día y hora de recogida: %0A%0AQuedo a la espera de que me confirméis disponibilidad y el total. ¡Gracias!" target="_blank" rel="noopener" class="btn-cta" style="text-decoration:none;background:#28741A;color:#FFFFFF;font-weight:600;font-size:14px;padding:14px 30px;border-radius:3px">Pedir por WhatsApp</a>' +
        '</div>' +
      '</div>' +

      '<div style="padding:80px 32px;display:flex;justify-content:center;background-color:#101010">' +
        '<div class="two-col" style="max-width:1280px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center">' +
          '<div style="display:flex;flex-direction:column;gap:16px">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#D1A66A">Selección del carnicero</span>' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-style:italic;font-size:32px;margin:0;color:#FFFFFF">¿No sabes qué elegir?</h2>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:14.5px;line-height:1.65;color:#E2E8F0;margin:0;max-width:440px">En Carnes Marty nos encargamos de encontrar el corte perfecto para ti.</p>' +
            '<a href="recomendaciones.html" class="link-arrow" style="text-decoration:none;cursor:pointer;align-self:flex-start;margin-top:6px;border-bottom:1px solid #855F4F;color:#D1A66A;font-size:14px;font-weight:600;padding-bottom:2px">Ver recomendaciones →</a>' +
          '</div>' +
          '<div class="carnicero-photo" style="height:260px;border-radius:5px;overflow:hidden"><img src="/Images/cortes-mas-pedidos.jpeg" alt="¿No sabes qué elegir?" width="962" height="364" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
        '</div>' +
      '</div>' +

      '<div style="position:relative;width:100%;min-height:420px;background-image:url(\'/Images/resenas-bg.jpeg\');background-size:cover;background-position:left center">' +
        '<div style="position:absolute;inset:0;background:rgba(10,9,8,0.72)"></div>' +
        '<div style="position:relative;z-index:2;min-height:420px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:24px;padding:56px 0">' +
          '<span style="display:inline-flex;align-items:center;gap:10px;font-family:\'Inter\',sans-serif;font-size:14px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A;margin-bottom:10px;padding:0 32px">'+ 'Lo que dicen nuestros clientes en Google ' + googleIconSvg + '</span>' +
          '<div class="reviews-carousel">' +
            '<div class="reviews-track">' +
              resenas.map(function (r) { return resenaCard(r, false); }).join('') +
              resenas.map(function (r) { return resenaCard(r, true); }).join('') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div style="padding:80px 32px;background-color:#101010">' +
        '<div style="max-width:1280px;margin:0 auto">' +
          '<div style="display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:36px">' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:34px;margin:0;color:#FAF7F4">Recetas con nuestros cortes</h2>' +
            '<a href="recetas.html" class="link-arrow" style="text-decoration:none;cursor:pointer;font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A">Ver todas →</a>' +
          '</div>' +
          '<div class="grid-3" style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px">' + recetasHome + '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function pageCategoria(key) {
    var c = catalog[key];
    return '' +
    '<div data-screen-label="' + c.label + '">' +
      '<div class="page-banner cat-banner" style="position:relative;width:100%;min-height:420px;background-image:url(\'' + c.bannerImg + '\');background-size:cover;background-position:center;overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:linear-gradient(90deg, rgba(10,9,8,0.92) 0%, rgba(10,9,8,0.68) 42%, rgba(10,9,8,0.2) 100%)"></div>' +
        '<div class="cat-banner-inner" style="position:relative;z-index:2;max-width:1280px;margin:0 auto;min-height:420px;display:flex;align-items:center;padding:64px 32px">' +
          '<div class="cat-banner-text" style="display:flex;flex-direction:column;align-items:flex-start;text-align:left;gap:16px;max-width:520px">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">' + c.eyebrow + '</span>' +
            '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(34px,5vw,54px);margin:0;color:#FAF7F4;text-shadow:0 4px 18px rgba(0,0,0,0.5)">' + c.title + '</h1>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;margin:0">' + c.description + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="max-width:1280px;margin:0 auto;padding:64px 32px 0;background:#1C1C1C">' +
        '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(22px,2.6vw,28px);margin:0 0 32px;color:#FAF7F4">Todos los cortes de ' + c.title + '</h2>' +
      '</div>' +
      '<div class="grid-3" style="max-width:1280px;margin:0 auto;padding:0 32px 64px;display:grid;grid-template-columns:repeat(3,1fr);gap:28px;background:#1C1C1C">' +
        c.cuts.map(cutCard).join('') +
      '</div>' +
    '</div>';
  }

  function pageRecomendaciones() {
    return '' +
    '<div data-screen-label="Recomendaciones">' +
      '<div class="page-banner" style="position:relative;width:100%;min-height:380px;background-image:url(\'/Images/banner_recomendaciones.jpeg\');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(10,9,8,0.78), rgba(10,9,8,0.5) 45%, rgba(10,9,8,0.85))"></div>' +
        '<div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px 32px;max-width:720px">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">Selección del carnicero</span>' +
          '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(34px,5vw,54px);margin:0;color:#FAF7F4;text-shadow:0 4px 18px rgba(0,0,0,0.5)">Recomendaciones</h1>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;max-width:620px;margin:0">Los cortes que elegimos nosotros mismos, por calidad, sabor y lo bien que rinden en la parrilla o en la olla.</p>' +
        '</div>' +
      '</div>' +
      recomendadoSeccionBlock(recomendadoSecciones[0], '#1C1C1C') +
      recomendadoSeccionBlock(recomendadoSecciones[1], '#141414') +
      recomendadoSeccionBlock(recomendadoSecciones[2], '#1C1C1C') +
    '</div>';
  }

  function pageRecetas() {
    return '' +
    '<div data-screen-label="Recetas">' +
      '<div class="page-banner" style="position:relative;width:100%;min-height:380px;background-image:url(\'/Images/banner_recetas.jpeg\');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(10,9,8,0.78), rgba(10,9,8,0.5) 45%, rgba(10,9,8,0.85))"></div>' +
        '<div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px 32px;max-width:720px">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">De nuestra cocina a la tuya</span>' +
          '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(34px,5vw,54px);margin:0;color:#FAF7F4;text-shadow:0 4px 18px rgba(0,0,0,0.5)">Recetas</h1>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;max-width:560px;margin:0">Ideas simples para sacarle el máximo partido a cada corte.</p>' +
        '</div>' +
      '</div>' +
      '<div class="grid-3" style="max-width:1280px;margin:0 auto;padding:64px 32px;display:grid;grid-template-columns:repeat(2,1fr);gap:28px;background:#1C1C1C">' +
        recetas.map(recetaCard).join('') +
      '</div>' +
    '</div>';
  }

  function pageRecetaDetail(slug) {
    var r = recetasBySlug[slug];
    var waText = encodeURIComponent('¡Hola! 👋  Quería consultar por el corte ' + r.corte + ' para preparar ' + r.titulo + ' que vi en su página.\n\n¿Me podrían contar el precio y si tienen disponibilidad?\n\n¡Muchas gracias! 😊');
    var heroBg = r.img
      ? 'background-image:url(\'' + r.img + '\');background-size:cover;background-position:center'
      : 'background:repeating-linear-gradient(135deg,#5E392C,#5E392C 14px,#2E2E2E 14px,#2E2E2E 28px)';
    var badges = [r.corte, r.tiempo, r.dificultad].map(function (b) {
      return '<span style="display:inline-flex;align-items:center;font-family:\'Inter\',sans-serif;font-size:12.5px;color:#FAF7F4;background:rgba(0,0,0,0.4);border:1px solid rgba(209,166,106,0.45);padding:6px 14px;border-radius:20px">' + b + '</span>';
    }).join('');
    var infoPillsHtml = [
      recetaInfoPill('Porciones', r.porciones),
      recetaInfoPill('Tiempo', r.tiempo),
      recetaInfoPill('Dificultad', r.dificultad)
    ].join('');
    var dishMedia = r.img
      ? '<img src="' + r.img + '" alt="' + r.titulo + '" style="width:100%;height:100%;object-fit:cover;display:block">'
      : '<div style="width:100%;height:100%;background:repeating-linear-gradient(135deg,#5E392C,#5E392C 14px,#3B1F16 14px,#3B1F16 28px)"></div>';
    var ingredientesHtml = r.ingredientes.map(function (ing) {
      return '<div style="display:flex;align-items:baseline;gap:8px"><span style="color:#D1A66A;font-weight:700;font-size:14px">✓</span><span style="font-family:\'Inter\',sans-serif;font-size:14px;line-height:1.5;color:#2b1a10">' + ing + '</span></div>';
    }).join('');
    var pasosHtml = r.pasos.map(function (paso, i) {
      return '<div style="display:flex;gap:14px;align-items:flex-start">' +
        '<span style="flex-shrink:0;width:28px;height:28px;border-radius:50%;border:1px solid #450000;color:#450000;font-family:\'Inter\',sans-serif;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center">' + (i + 1) + '</span>' +
        '<p style="font-family:\'Inter\',sans-serif;font-size:14.5px;line-height:1.65;color:#2b1a10;margin:4px 0 0;text-align:justify">' + paso + '</p>' +
      '</div>';
    }).join('');
    var tipsHtml = (r.tips || []).map(function (tip) {
      return '<div style="display:flex;gap:10px;align-items:flex-start"><span style="color:#D1A66A;font-size:12px;line-height:1.8">●</span><span style="font-family:\'Inter\',sans-serif;font-size:13.5px;line-height:1.65;color:#2b1a10">' + tip + '</span></div>';
    }).join('');
    return '' +
    '<div data-screen-label="' + r.titulo + '">' +
      '<div class="page-banner cat-banner" style="position:relative;width:100%;min-height:420px;' + heroBg + ';overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:linear-gradient(100deg, rgba(10,9,8,0.88) 0%, rgba(10,9,8,0.55) 48%, rgba(10,9,8,0.25) 100%)"></div>' +
        '<div class="cat-banner-inner" style="position:relative;z-index:2;max-width:1280px;margin:0 auto;min-height:420px;display:flex;align-items:center;padding:64px 32px">' +
          '<div class="cat-banner-text" style="display:flex;flex-direction:column;align-items:flex-start;text-align:left;gap:14px;max-width:560px">' +
            '<a href="recetas.html" class="link-arrow" style="text-decoration:none;cursor:pointer;font-family:\'Inter\',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.05em;color:#D1A66A;text-transform:uppercase">← Volver a Recetas</a>' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">Receta · ' + r.corte + '</span>' +
            '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(30px,4.5vw,48px);margin:0;color:#FAF7F4;text-shadow:0 4px 18px rgba(0,0,0,0.5)">' + r.titulo + '</h1>' +
            '<div style="display:flex;gap:10px;flex-wrap:wrap">' + badges + '</div>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;margin:0">' + r.desc + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div style="background:#141414;padding:72px 32px">' +
        '<div class="recipe-card" style="max-width:920px;margin:0 auto;background:#F3E9D2;border-radius:10px;box-shadow:0 30px 60px rgba(0,0,0,0.45);padding:52px 44px;display:flex;flex-direction:column;gap:40px">' +

          '<div style="display:flex;justify-content:center;gap:14px;flex-wrap:wrap">' + infoPillsHtml + '</div>' +

          '<div style="display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#855F4F">Receta · ' + r.corte + '</span>' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-style:italic;font-size:clamp(28px,4vw,40px);margin:0;color:#450000">' + r.titulo + '</h2>' +
          '</div>' +

          '<div style="display:flex;justify-content:center">' +
            '<div class="recipe-dish-photo" style="width:100%;max-width:560px;height:300px;border-radius:6px;overflow:hidden;border:1px solid rgba(69,0,0,0.15);box-shadow:0 16px 32px rgba(69,0,0,0.22)">' + dishMedia + '</div>' +
          '</div>' +

          '<div class="two-col" style="display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:start">' +
            '<div style="display:flex;flex-direction:column;gap:18px">' +
              recetaSectionHeading('Ingredientes') +
              '<div style="display:flex;flex-direction:column;gap:11px">' + ingredientesHtml + '</div>' +
            '</div>' +
            '<div style="display:flex;flex-direction:column;gap:18px">' +
              recetaSectionHeading('Instrucciones') +
              '<div style="display:flex;flex-direction:column;gap:16px">' + pasosHtml + '</div>' +
            '</div>' +
          '</div>' +

          '<div style="border-top:1px dashed rgba(69,0,0,0.25);padding-top:32px;display:flex;flex-direction:column;gap:18px;align-items:center">' +
            recetaSectionHeading('Tips') +
            '<div style="display:flex;flex-direction:column;gap:10px;max-width:520px;width:100%">' + tipsHtml + '</div>' +
          '</div>' +

          '<a href="https://api.whatsapp.com/send?phone=56940691425&text=' + waText + '" target="_blank" rel="noopener" class="btn-cta" style="text-decoration:none;align-self:center;background:#28741A;color:#FFFFFF;font-weight:600;font-size:14px;padding:14px 30px;border-radius:3px">Consultar corte por WhatsApp</a>' +
        '</div>' +
      '</div>' +

      recetasSimilaresSection(r.slug) +
    '</div>';
  }

  function recetasSimilaresSection(currentSlug) {
    var actual = recetasBySlug[currentSlug];
    var otras = recetas.filter(function (r) { return r.slug !== currentSlug; })
      .map(function (r, i) {
        var score = (actual && r.categoria === actual.categoria ? 2 : 0) + (r.destacada ? 1 : 0);
        return { r: r, score: score, i: i };
      })
      .sort(function (a, b) { return b.score - a.score || a.i - b.i; })
      .slice(0, 3)
      .map(function (x) { return x.r; });
    if (!otras.length) return '';
    return '' +
      '<div style="padding:80px 32px;background-color:#101010">' +
        '<div style="max-width:1280px;margin:0 auto">' +
          '<div style="display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:36px">' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:34px;margin:0;color:#FAF7F4">Otras recetas</h2>' +
            '<a href="recetas.html" class="link-arrow" style="text-decoration:none;cursor:pointer;font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A">Ver todas →</a>' +
          '</div>' +
          '<div class="grid-3" style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px">' + otras.map(recetaCard).join('') + '</div>' +
        '</div>' +
      '</div>';
  }

  function timelineIcon(name) {
    var icons = {
      package: '<path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
      scissors: '<path d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/>',
      check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
      send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'
    };
    return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (icons[name] || '') + '</svg>';
  }

  function timelineItem(step, i) {
    return '' +
      '<div class="timeline-item" style="transition-delay:' + (i * 0.12) + 's">' +
        '<div class="timeline-avatar">' + timelineIcon(step.icon) + '</div>' +
        '<div class="timeline-card">' +
          '<div class="timeline-card-head">' +
            '<h3 class="timeline-title">' + step.titulo + '</h3>' +
            '<span class="timeline-badge">' + step.categoria + '</span>' +
          '</div>' +
          '<p class="timeline-desc">' + step.desc + '</p>' +
          '<div class="timeline-progress"><div class="timeline-progress-fill" style="--progress:' + step.progreso + '%"></div></div>' +
        '</div>' +
      '</div>';
  }

  function timelineSection() {
    return '' +
      '<div style="background:#101010;padding:80px 32px">' +
        '<div style="max-width:900px;margin:0 auto">' +
          '<div style="text-align:center;margin-bottom:48px">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">Cómo trabajamos</span>' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(26px,3.5vw,36px);margin:10px 0 0;color:#FAF7F4">De la vara a tu mesa</h2>' +
          '</div>' +
          '<div class="timeline-wrap">' +
            '<div class="timeline-rail"></div>' +
            '<div class="timeline-rail-fill"></div>' +
            '<div class="timeline-items">' + proceso.map(timelineItem).join('') + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function pageNosotros() {
    var valoresHtml = valores.map(function (v, i) {
      return '<div style="display:flex;flex-direction:column;gap:10px">' +
        '<span style="font-family:\'Playfair Display\',serif;font-weight:700;font-size:15px;color:#D1A66A">0' + (i + 1) + '</span>' +
        '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:19px;margin:0;color:#FAF7F4">' + v.titulo + '</h3>' +
        '<p style="font-family:\'Inter\',sans-serif;font-size:13.5px;line-height:1.6;color:#E2E8F0;margin:0">' + v.desc + '</p>' +
      '</div>';
    }).join('');
    return '' +
    '<div data-screen-label="Nosotros">' +
      '<div class="page-banner" style="position:relative;width:100%;min-height:380px;background-image:url(\'/Images/banner_nosotros.png\');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(10,9,8,0.78), rgba(10,9,8,0.5) 45%, rgba(10,9,8,0.85))"></div>' +
        '<div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:14px;padding:64px 32px;max-width:720px">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:20px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">Nuestra historia</span>' +
          '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(32px,4.5vw,50px);margin:0;color:#FAF7F4;text-shadow:0 4px 18px rgba(0,0,0,0.5)">Oficio carnicero desde 2020</h1>' +
        '</div>' +
      '</div>' +
      '<div class="two-col" style="max-width:1280px;margin:0 auto;padding:72px 32px 80px;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;background:#1C1C1C">' +
        '<div style="display:flex;flex-direction:column;gap:18px; text-align:justify">' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.75;color:#E2E8F0;margin:0">Carnes Marty nació en Linderos, comuna de Buin, con un objetivo claro: convertirse en la carnicería de confianza para quienes buscan carne fresca, de calidad y un servicio cercano. Desde nuestros inicios trabajamos exclusivamente con carne nacional en vara, de clasificación Categoría V, seleccionando cuidadosamente cada pieza para garantizar un producto que cumpla con los más altos estándares.</p>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.75;color:#E2E8F0;margin:0">Con el paso de los años, la confianza de nuestros clientes nos ha permitido crecer y consolidarnos como una de las carnicerías de referencia de la zona. Ese reconocimiento es el resultado de un compromiso que mantenemos intacto desde el primer día: ofrecer productos frescos, una atención personalizada y la tranquilidad de saber que cada compra está respaldada por calidad y dedicación.</p>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.75;color:#E2E8F0;margin:0">Seguimos siendo un negocio de barrio, donde el trato cercano y la honestidad son parte de nuestra esencia. Atendemos cada pedido con la misma dedicación, ya sea en nuestra tienda o a través de Instagram y WhatsApp, porque creemos que cada cliente merece un servicio personalizado y una experiencia de compra excepcional.</p>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.75;color:#E2E8F0;margin:0">En Carnes Marty no solo vendemos carne; compartimos la pasión por ofrecer el mejor producto para que cada comida en familia, cada asado y cada celebración tenga la calidad que se merece.</p>' +
          '</div>' +
        '<div style="background:#1C1C1C;border-radius:4px;padding:48px;display:flex;align-items:center;justify-content:center">' +
          '<img src="/Images/Logo_merchan.png" alt="Carnes Marty" width="1073" height="976" style="width:100%;max-width:340px;height:auto">' +
        '</div>' +
      '</div>' +
      timelineSection() +
      '<div style="background:#1C1C1C;padding:72px 32px">' +
        '<div class="grid-4" style="max-width:1280px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:32px">' + valoresHtml + '</div>' +
      '</div>' +
    '</div>';
  }

  function pageContacto() {
    return '' +
    '<div data-screen-label="Contacto">' +
      '<div class="page-banner" style="position:relative;width:100%;min-height:380px;background-image:url(\'/Images/banner_contacto.jpeg\');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(10,9,8,0.78), rgba(10,9,8,0.5) 45%, rgba(10,9,8,0.85))"></div>' +
        '<div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px 32px;max-width:720px">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">Hablemos</span>' +
          '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(34px,5vw,54px);margin:0;color:#FAF7F4;text-shadow:0 4px 18px rgba(0,0,0,0.5)">Contacto</h1>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;max-width:560px;margin:0">Pedidos, consultas y cortes especiales. Cuéntanos qué necesitas y nos encargamos del resto.</p>' +
        '</div>' +
      '</div>' +
      '<div class="grid-3" style="max-width:1080px;margin:0 auto;padding:64px 32px;display:grid;grid-template-columns:repeat(3,1fr);gap:28px;background:#1C1C1C">' +
        '<div style="display:flex;flex-direction:column;align-items:center;gap:18px">' +
          '<a href="https://api.whatsapp.com/send?phone=56940691425" target="_blank" rel="noopener" class="receta-card hover-card contact-glass-card" tabindex="0" style="text-decoration:none;cursor:pointer;width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.12);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);padding:32px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;flex:1">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D1A66A">WhatsApp</span>' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:22px;margin:0;color:#FAF7F4">Pedidos y consultas</h3>' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:600;color:#FAF7F4;background:rgba(0,0,0,0.35);padding:5px 10px;border-radius:2px">+56 9 4069 1425</span>' +
            '<span class="link-arrow" style="font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A;margin-top:2px">Abrir WhatsApp →</span>' +
            '<p class="receta-card-desc">Escríbenos para armar tu pedido, resolver dudas o consultar por cortes especiales. Te respondemos al toque.</p>' +
          '</a>' +
          '<img src="/Images/imagen_fondo_whatsapp.webp" alt="WhatsApp" width="52" height="52" style="width:52px;height:52px;border-radius:50%;object-fit:cover;box-shadow:0 8px 20px rgba(0,0,0,0.4)">' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;align-items:center;gap:18px">' +
          '<a href="https://www.instagram.com/carnes_marty/" target="_blank" rel="noopener" class="receta-card hover-card contact-glass-card" tabindex="0" style="text-decoration:none;cursor:pointer;width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.12);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);padding:32px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;flex:1">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D1A66A">Instagram</span>' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:22px;margin:0;color:#FAF7F4">@carnes_marty</h3>' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:600;color:#FAF7F4;background:rgba(0,0,0,0.35);padding:5px 10px;border-radius:2px">Novedades y promociones</span>' +
            '<span class="link-arrow" style="font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A;margin-top:2px">Ver Instagram →</span>' +
            '<p class="receta-card-desc">Síguenos para ver los cortes de la semana, promociones y el detrás de escena de la carnicería.</p>' +
          '</a>' +
          '<img src="/Images/fondo_instagram.webp" alt="Instagram" width="375" height="211" style="width:52px;height:52px;border-radius:50%;object-fit:cover;box-shadow:0 8px 20px rgba(0,0,0,0.4)">' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;align-items:center;gap:18px">' +
          '<div class="receta-card hover-card contact-glass-card" tabindex="0" style="width:100%;border-radius:8px;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.12);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);padding:32px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;flex:1">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D1A66A">Ubicación</span>' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:22px;margin:0;color:#FAF7F4">Linderos, Buin</h3>' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:600;color:#FAF7F4;background:rgba(0,0,0,0.35);padding:5px 10px;border-radius:2px">Región Metropolitana</span>' +
            '<p class="receta-card-desc">Visítanos en nuestra tienda física: cortes frescos y atención de carnicero, de lunes a domingo.</p>' +
          '</div>' +
          '<img src="/Images/fondo_ubicacion.webp" alt="Ubicación" width="1199" height="721" style="width:52px;height:52px;border-radius:50%;object-fit:cover;box-shadow:0 8px 20px rgba(0,0,0,0.4)">' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function buildPageHtml() {
    if (state.page === 'inicio') return pageInicio();
    if (catalog[state.page]) return pageCategoria(state.page);
    if (premiumCuts[state.page]) return pagePremiumDetail(state.page);
    if (recomendadoCuts[state.page]) return pageRecomendadoDetail(state.page);
    if (recetasBySlug[state.page]) return pageRecetaDetail(state.page);
    if (state.page === 'recomendaciones') return pageRecomendaciones();
    if (state.page === 'recetas') return pageRecetas();
    if (state.page === 'nosotros') return pageNosotros();
    if (state.page === 'contacto') return pageContacto();
    return pageInicio();
  }

  var staticPageMeta = {
    inicio: { title: 'Carnes Marty · Carnicería', desc: 'Carnes Marty — Carnicería, pollería y charcutería en Linderos, Buin. Carne nacional Categoría V, fresca todos los días.' },
    vaca: { title: 'Vacuno · Carnes Marty | Carnicería en Linderos, Buin', desc: 'Cortes de vacuno Categoría V: filete, lomo vetado, asado de tira, osobuco y más. Carne nacional fresca, cortada a mano en Carnes Marty, Linderos, Buin.' },
    pollo: { title: 'Pollo · Carnes Marty | Carnicería en Linderos, Buin', desc: 'Pollo nacional fresco, nunca congelado: trutro, pechuga, alas y más, entero o por presas. Carnes Marty, Linderos, Buin.' },
    cerdo: { title: 'Cerdo · Carnes Marty | Carnicería en Linderos, Buin', desc: 'Cortes de cerdo frescos: costillar, chuletas, pernil, panceta y embutidos caseros. Carnes Marty, Linderos, Buin.' },
    subproductos: { title: 'Sub Productos · Carnes Marty | Menudencias y cortes tradicionales', desc: 'Menudencias y cortes tradicionales para las recetas de siempre: guatas, mollejas, lengua y más. Carnes Marty, Linderos, Buin.' },
    recomendaciones: { title: 'Recomendaciones · Carnes Marty | Selección del carnicero', desc: 'Los cortes que recomienda el carnicero: estrellas de la parrilla, cortes premium y opciones para el día a día.' },
    recetas: { title: 'Recetas · Carnes Marty | Ideas para cocinar tus cortes', desc: 'Recetas chilenas paso a paso para sacarle el máximo partido a cada corte: asado, cazuela, empanadas, pastel de choclo y más.' },
    nosotros: { title: 'Nosotros · Carnes Marty | Carnicería artesanal desde 2020', desc: 'Conoce la historia de Carnes Marty, carnicería de barrio en Linderos, Buin, con oficio carnicero y carne nacional Categoría V desde 2020.' },
    contacto: { title: 'Contacto · Carnes Marty | Pedidos y consultas', desc: 'Contáctanos por WhatsApp o Instagram, o visítanos en Linderos, Buin. Pedidos, consultas y cortes especiales.' }
  };

  function pageMeta() {
    var p = state.page;
    if (staticPageMeta[p]) return staticPageMeta[p];
    if (premiumCuts[p]) return { title: premiumCuts[p].nombre + ' · Carnes Marty', desc: premiumCuts[p].tagline };
    if (recomendadoCuts[p]) return { title: recomendadoCuts[p].nombre + ' · Carnes Marty', desc: recomendadoCuts[p].tagline };
    if (recetasBySlug[p]) return { title: recetasBySlug[p].titulo + ' · Recetas · Carnes Marty', desc: recetasBySlug[p].desc };
    return staticPageMeta.inicio;
  }

  var SITE_BASE = 'https://carnes-marty.vercel.app/';

  function canonicalUrl() {
    var p = state.page;
    if (p === 'inicio') return SITE_BASE;
    if (staticPageMeta[p]) return SITE_BASE + pageFileMap[p];
    if (premiumCuts[p]) return SITE_BASE + pageFileMap[premiumCuts[p].categoriaPage] + '#' + p;
    if (recomendadoCuts[p]) return SITE_BASE + pageFileMap[recomendadoCuts[p].categoriaPage] + '#' + p;
    if (recetasBySlug[p]) return SITE_BASE + pageFileMap.recetas + '#' + p;
    return SITE_BASE;
  }

  function updatePageMeta() {
    var meta = pageMeta();
    document.title = meta.title;
    var descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.desc);
    var canonical = canonicalUrl();
    var canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute('href', canonical);
    var ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) ogUrlTag.setAttribute('content', canonical);
  }

  function setupReveal() {
    var targets = document.querySelectorAll('#page-content [data-screen-label] > *');
    var cardTargets = document.querySelectorAll('#page-content .cat-card, #page-content .receta-card, #page-content .cut-card');
    var colTargets = document.querySelectorAll('#page-content .two-col > *, #page-content .two-col-rev > *');

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('reveal', 'in-view'); });
      cardTargets.forEach(function (el) { el.classList.add('reveal-card', 'in-view'); });
      colTargets.forEach(function (el, i) { el.classList.add(i % 2 === 0 ? 'reveal-left' : 'reveal-right', 'in-view'); });
      document.querySelectorAll('.timeline-wrap, .timeline-item').forEach(function (el) { el.classList.add('in-view'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      if (i === 0) {
        requestAnimationFrame(function () { el.classList.add('in-view'); });
      } else {
        observer.observe(el);
      }
    });

    var cardObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    var cardPrevParent = null, cardIdx = 0;
    cardTargets.forEach(function (el) {
      cardIdx = (el.parentElement === cardPrevParent) ? cardIdx + 1 : 0;
      cardPrevParent = el.parentElement;
      el.classList.add('reveal-card');
      el.style.setProperty('--reveal-delay', (Math.min(cardIdx, 6) * 70) + 'ms');
      cardObserver.observe(el);
    });

    var colObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          colObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    colTargets.forEach(function (el, i) {
      el.classList.add(i % 2 === 0 ? 'reveal-left' : 'reveal-right');
      colObserver.observe(el);
    });

    var timelineTargets = document.querySelectorAll('.timeline-wrap, .timeline-item');
    if (timelineTargets.length) {
      var timelineObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            timelineObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
      timelineTargets.forEach(function (el) { timelineObserver.observe(el); });
    }
  }

  function renderPage(animate) {
    var content = document.getElementById('page-content');
    function swap() {
      content.innerHTML = buildPageHtml();
      updatePageMeta();
      updateNavActive();
      setupReveal();
      var heroVideo = content.querySelector('video');
      if (heroVideo) {
        heroVideo.play().catch(function () {});
      }
    }
    if (animate && content.innerHTML.trim() !== '') {
      content.classList.add('page-fading');
      window.setTimeout(function () {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        swap();
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { content.classList.remove('page-fading'); });
        });
      }, 260);
    } else {
      swap();
    }
  }

  function updateNavActive() {
    var isCategoria = !!catalog[state.page];
    document.querySelectorAll('.nav-link').forEach(function (el) {
      var p = el.getAttribute('data-page');
      var group = el.getAttribute('data-page-group');
      var active = (p && p === state.page) || (group === 'categoria' && isCategoria);
      el.classList.toggle('active', !!active);
    });
  }

  window.scrollToSection = function (id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  window.navigate = function (page) {
    if (validPages.indexOf(page) === -1) page = 'inicio';
    if (state.page === page) return;
    state.page = page;
    if (window.location.hash.replace('#', '') !== page) {
      window.location.hash = page;
    }
    renderPage(true);
  };

  window.toggleMobile = function () {
    var menu = document.getElementById('mobile-menu');
    var willOpen = !menu.classList.contains('open');
    menu.classList.toggle('open');
    if (willOpen) menu.scrollTop = 0;
    closeMobileProducts();
  };

  function closeMobileProducts() {
    document.getElementById('mobile-products-list').style.display = 'none';
    document.getElementById('mobile-products-arrow').style.transform = 'rotate(0deg)';
  }

  window.toggleMobileProducts = function () {
    var list = document.getElementById('mobile-products-list');
    var arrow = document.getElementById('mobile-products-arrow');
    var open = list.style.display === 'flex';
    list.style.display = open ? 'none' : 'flex';
    arrow.style.transform = open ? 'rotate(0deg)' : 'rotate(180deg)';
  };

  function fromHash() {
    var p = (window.location.hash || '').replace('#', '');
    return validPages.indexOf(p) !== -1 ? p : null;
  }

  var pathPageMap = {
    '': 'inicio', 'index.html': 'inicio',
    'vacuno.html': 'vaca', 'pollo.html': 'pollo', 'cerdo.html': 'cerdo', 'subproductos.html': 'subproductos',
    'recetas.html': 'recetas', 'recomendaciones.html': 'recomendaciones', 'nosotros.html': 'nosotros', 'contacto.html': 'contacto'
  };
  function fromPath() {
    var file = window.location.pathname.split('/').pop();
    return pathPageMap.hasOwnProperty(file) ? pathPageMap[file] : null;
  }

  window.addEventListener('hashchange', function () {
    var p = fromHash() || fromPath() || 'inicio';
    if (p === state.page) return;
    state.page = p;
    renderPage(true);
  });

  document.getElementById('footer-year').textContent = '© ' + new Date().getFullYear() + ' Carnes Marty · Carnicería';

  var header = document.getElementById('site-header');
  function updateHeaderScrolled() {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', updateHeaderScrolled, { passive: true });
  updateHeaderScrolled();

  var isNotFoundPage = window.location.pathname.split('/').pop() === '404.html';
  if (!isNotFoundPage) {
    state.page = fromHash() || fromPath() || 'inicio';
    renderPage(false);
  } else {
    updateNavActive();
  }
})();
