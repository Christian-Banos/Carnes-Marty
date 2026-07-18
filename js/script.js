(function () {
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
      label: 'Carnicería',
      eyebrow: 'Categoría V · Carne nacional en vara',
      title: 'Carnicería',
      description: 'Carne vacuna nacional, clasificación Categoría V. Del asado familiar al corte fino, seleccionada pieza por pieza.',
      cuts: [
        { nombre: 'Lomo Vetado', desc: 'Corte marmoleado y jugoso, el preferido para la parrilla.', destacado: true },
        { nombre: 'Filete', desc: 'El corte más tierno, sin grasa ni nervios.' },
        { nombre: 'Asado de Tira', desc: 'Costillar cortado transversalmente, clásico del asado chileno.' },
        { nombre: 'Punta Picana', desc: 'Jugosa y sabrosa, favorita en las juntas familiares.' },
        { nombre: 'Posta Rosada', desc: 'Magra y versátil, perfecta para el horno.' },
        { nombre: 'Plateada', desc: 'Ideal para cocciones lentas y guisos de olla.' },
        { nombre: 'Malaya', desc: 'Corte delgado y sabroso, rápido en la parrilla.' },
        { nombre: 'Abastero', desc: 'Rendidor y jugoso, ideal para churrasco.' },
      ],
    },
    cerdo: {
      label: 'Charcutería',
      eyebrow: 'Carne nacional fresca',
      title: 'Charcutería',
      description: 'Cerdo nacional fresco, del costillar ahumado al filete magro para el día a día.',
      cuts: [
        { nombre: 'Costillar', desc: 'El favorito para ahumar o asar a fuego lento.', destacado: true },
        { nombre: 'Pernil', desc: 'Corte tradicional para el horno, jugoso y con cuero crocante.' },
        { nombre: 'Chuleta Centro', desc: 'Corte clásico, tierno y con hueso.' },
        { nombre: 'Panceta', desc: 'Ideal para la parrilla o el ahumador.' },
        { nombre: 'Filete de Cerdo', desc: 'Magro y suave, perfecto para saltados.' },
        { nombre: 'Pulpa', desc: 'Versátil para asar, guisar o moler.' },
      ],
    },
    pollo: {
      label: 'Pollería',
      eyebrow: 'Fresco, nunca congelado',
      title: 'Pollería',
      description: 'Pollo nacional fresco, entero o por presas, listo para el horno, la olla o la parrilla.',
      cuts: [
        { nombre: 'Pollo Entero', desc: 'Fresco, nacional, ideal para el horno.', destacado: true },
        { nombre: 'Pechuga', desc: 'Sin piel ni hueso, la opción más magra.' },
        { nombre: 'Trutro Entero', desc: 'Jugoso y sabroso, perfecto para la parrilla.' },
        { nombre: 'Alitas', desc: 'Ideales para freír, hornear o ahumar.' },
        { nombre: 'Muslos', desc: 'Tiernos y con sabor, listos para guisar.' },
      ],
    },
  };

  var recomendados = [
    { nombre: 'Lomo Vetado', categoria: 'Vaca', motivo: 'El corte más marmoleado de la casa: jugoso al punto en la parrilla y el que más repiten nuestros clientes.', img: null },
    { nombre: 'Costillar de Cerdo', categoria: 'Cerdo', motivo: 'Ahumado lento y con hueso, el favorito para los asados de fin de semana.', img: 'Images/costillar-cerdo.jpeg' },
    { nombre: 'Punta Picana', categoria: 'Vaca', motivo: 'Sabor intenso y textura tierna, ideal para juntas familiares grandes.', img: null },
    { nombre: 'Pollo Entero', categoria: 'Pollo', motivo: 'Siempre fresco y nacional, nunca congelado: rinde parejo en el horno.', img: 'Images/pollo-al-horno.jpeg' },
  ];

  var recetas = [
    { titulo: 'Asado a la parrilla clásico', corte: 'Lomo Vetado', tiempo: '40 min', dificultad: 'Fácil', desc: 'El asado de siempre: sal gruesa, brasas parejas y el punto justo de cocción.', img: 'Images/asado.jpeg' },
    { titulo: 'Costillar de cerdo ahumado', corte: 'Costillar de Cerdo', tiempo: '3 h', dificultad: 'Media', desc: 'Cocción lenta y humo suave hasta que la carne se separa del hueso.', img: 'Images/costillar-cerdo.jpeg' },
    { titulo: 'Pollo al horno con hierbas', corte: 'Pollo Entero', tiempo: '1 h 15 min', dificultad: 'Fácil', desc: 'Piel dorada y crocante, carne jugosa por dentro.', img: 'Images/pollo-al-horno.jpeg' },
    { titulo: 'Churrasco a la plancha', corte: 'Malaya', tiempo: '15 min', dificultad: 'Fácil', desc: 'Ideal para el día a día: rápido, sabroso y rendidor.', img: null },
  ];

  var validPages = ['inicio', 'vaca', 'cerdo', 'pollo', 'recomendaciones', 'recetas', 'nosotros', 'contacto'];
  var state = { page: 'inicio' };

  function placeholder(label) {
    return '<div style="height:170px;position:relative;background:repeating-linear-gradient(135deg,#5E392C,#5E392C 12px,#3B1F16 12px,#3B1F16 24px);display:flex;align-items:center;justify-content:center;color:#E2E8F0;font-family:monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;text-align:center;padding:10px">FOTO — ' + label + '</div>';
  }

  function cutCard(cut) {
    return '' +
      '<div class="cut-card" style="border:1px solid #4A3B33;border-radius:4px;overflow:hidden;display:flex;flex-direction:column;background:#2E2E2E">' +
        placeholder(cut.nombre) +
        '<div style="padding:20px;display:flex;flex-direction:column;gap:8px;flex:1">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px">' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:19px;margin:0;color:#FAF7F4">' + cut.nombre + '</h3>' +
            (cut.destacado ? '<span style="font-family:\'Inter\',sans-serif;font-size:9.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;background:#855F4F;color:#FAF7F4;padding:4px 8px;border-radius:2px;white-space:nowrap">Favorito</span>' : '') +
          '</div>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:13.5px;line-height:1.55;color:#E2E8F0;margin:0;flex:1">' + cut.desc + '</p>' +
          '<a href="https://wa.me/56940691425" target="_blank" rel="noopener" class="link-arrow" style="text-decoration:none;font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A;margin-top:6px">Consultar disponibilidad →</a>' +
        '</div>' +
      '</div>';
  }

  function recomendadoRow(r) {
    var media = r.img
      ? '<div style="height:150px;border-radius:3px;overflow:hidden"><img src="' + r.img + '" alt="' + r.nombre + '" style="width:100%;height:100%;object-fit:cover;display:block"></div>'
      : '<div style="height:150px;border-radius:3px;overflow:hidden;background:repeating-linear-gradient(135deg,#5E392C,#5E392C 12px,#3B1F16 12px,#3B1F16 24px)"></div>';
    return '' +
      '<div class="rec-row hover-card" style="display:grid;grid-template-columns:220px 1fr;gap:32px;align-items:center;padding:32px 0;border-bottom:1px solid #4A3B33;border-radius:4px">' +
        media +
        '<div style="display:flex;flex-direction:column;gap:8px">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:11.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D1A66A">' + r.categoria + '</span>' +
          '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:24px;margin:0;color:#FAF7F4">' + r.nombre + '</h3>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:14px;line-height:1.6;color:#E2E8F0;margin:0">' + r.motivo + '</p>' +
        '</div>' +
      '</div>';
  }

  function recetaCard(r) {
    var bg = r.img
      ? 'background-image:url(\'' + r.img + '\');background-size:cover;background-position:center'
      : 'background:repeating-linear-gradient(135deg,#5E392C,#5E392C 12px,#3B1F16 12px,#3B1F16 24px)';
    return '' +
      '<div class="receta-card hover-card" tabindex="0" style="position:relative;height:340px;border-radius:4px;overflow:hidden;border:1px solid #4A3B33">' +
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

  var googleIconSvg = '<svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true" style="flex-shrink:0"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.9 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"></path><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"></path><path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35.2 26.8 36 24 36c-5.3 0-9.8-3.4-11.4-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z"></path><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.3 5.3C39.5 36.6 44 30.9 44 24c0-1.3-.1-2.7-.4-3.5z"></path></svg>';

  function resenaCard(r, hidden) {
    return '' +
      '<div class="review-card"' + (hidden ? ' aria-hidden="true"' : '') + ' style="display:flex;flex-direction:column;gap:8px;background:rgba(255,255,255,0.12);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.18);border-radius:6px;padding:20px;text-align:left">' +
        '<span style="color:#D1A66A;font-size:14px;letter-spacing:2px">★★★★★</span>' +
        '<p style="font-family:\'Inter\',sans-serif;font-size:14px;line-height:1.55;color:#FAF7F4;margin:0">"' + r.texto + '"</p>' +
        '<span style="font-family:\'Inter\',sans-serif;font-size:12px;color:#D1A66A;font-weight:600;margin-top:4px">' + r.autor + '</span>' +
      '</div>';
  }

  function pageInicio() {
    var catImgs = { vaca: 'Images/ribeye-strip-loin.jpeg', pollo: 'Images/polleria.jpeg', cerdo: 'Images/charcuteria.jpeg' };
    var catNames = { vaca: 'Carnicería', pollo: 'Pollería', cerdo: 'Charcutería' };
    var catDesc = {
      vaca: 'Categoría V, cortes premium para la parrilla y la olla.',
      pollo: 'Pollo nacional fresco, entero o por presas.',
      cerdo: 'Costillar, pernil y chuletas frescas todos los días.'
    };
    var catHtml = ['vaca', 'pollo', 'cerdo'].map(function (key) {
      return '' +
        '<div onclick="navigate(\'' + key + '\')" class="cat-card" style="cursor:pointer;border:1px solid #4A3B33;border-radius:4px;overflow:hidden;display:flex;flex-direction:column;background-color:#450000">' +
          '<div class="cat-card-img" style="height:200px;overflow:hidden"><img src="' + catImgs[key] + '" alt="' + catNames[key] + '" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
          '<div style="padding:22px;display:flex;flex-direction:column;gap:8px;background-color:#450000">' +
            '<h3 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:22px;margin:0;color:#FFFFFF">' + catNames[key] + '</h3>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:13.5px;line-height:1.55;color:#E2E8F0;margin:0">' + catDesc[key] + '</p>' +
            '<span class="link-arrow" style="font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A;margin-top:4px">Ver cortes →</span>' +
          '</div>' +
        '</div>';
    }).join('');

    var valoresChecks = valores.map(function (v) {
      return '<div style="display:flex;align-items:baseline;gap:8px"><span style="color:#D1A66A;font-weight:700;font-size:14px">✓</span><span style="font-family:\'Inter\',sans-serif;font-size:13.5px;font-weight:600;color:#FFFFFF">' + v.titulo + '</span></div>';
    }).join('');

    var badgesHtml = badges.map(function (b) {
      return '<div style="display:flex;flex-direction:column;gap:4px;padding:8px"><span style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:17px;color:#D1A66A">' + b.titulo + '</span><span style="font-family:\'Inter\',sans-serif;font-size:11.5px;letter-spacing:0.06em;text-transform:uppercase;color:#FFFFFF">' + b.sub + '</span></div>';
    }).join('');

    var recetasHome = recetas.slice(0, 3).map(function (r) {
      var media = r.img
        ? '<div style="height:160px;border-radius:5px;overflow:hidden"><img src="' + r.img + '" alt="' + r.titulo + '" style="width:100%;height:100%;object-fit:cover;display:block"></div>'
        : '<div style="height:160px;border-radius:5px;overflow:hidden;background:repeating-linear-gradient(135deg,#5E392C,#5E392C 12px,#3B1F16 12px,#3B1F16 24px)"></div>';
      return '<div style="display:flex;flex-direction:column;gap:10px">' + media +
        '<h4 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:17px;margin:0;color:#E2E8F0">' + r.titulo + '</h4>' +
        '<span style="font-family:\'Inter\',sans-serif;font-size:12.5px;color:#D1A66A">' + r.corte + ' · ' + r.tiempo + '</span></div>';
    }).join('');

    return '' +
    '<div data-screen-label="Inicio">' +
      '<div style="position:relative;width:100%;min-height:88vh;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:70px 0">' +
        '<video autoplay muted loop playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0"><source src="video/ribeye_animated.mp4" type="video/mp4"></video>' +
        '<div style="position:absolute;inset:0;background:linear-gradient(180deg, #101010EB, rgba(10,9,8,0.35) 40%, #1C1C1C 100%);z-index:1"></div>' +
        '<div style="position:relative;z-index:2;text-align:center;padding:0 24px;max-width:860px;display:flex;flex-direction:column;align-items:center;gap:22px">' +
          '<img src="Images/logoCarnesMarti_white.png" alt="Carnes Marty" class="hero-logo" style="width:240px;height:240px;border-radius:50%;object-fit:contain;background:#FAF7F4;padding:14px;box-sizing:border-box;border:4px solid #D1A66A;box-shadow:0px 20px 40px 0px rgba(0,0,0,0.55);margin-bottom:6px">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.28em;text-transform:uppercase;color:#D1A66A;font-weight:600;background:rgba(28,28,28,0.6);padding:10px 18px;border-radius:10px">Desde 2020 · Linderos, Buin</span>' +
          '<h1 class="hero-title" style="font-family:\'Playfair Display\',serif;font-weight:600;font-style:italic;font-size:clamp(38px,6vw,72px);line-height:1.08;color:#FAF7F4;margin:0">Para los que entienden de carne.</h1>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:17px;line-height:1.6;color:#E2E8F0;max-width:560px;margin:0">Carne nacional, fresca y de Categoría V. Cortes premium seleccionados uno por uno, con el oficio carnicero de siempre.</p>' +
          '<div class="hero-cta-group" style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-top:8px">' +
            '<span class="hero-btn" onclick="navigate(\'recomendaciones\')" style="cursor:pointer;color:#FAF7F4;font-weight:600;font-size:14px;padding:14px 28px;border-radius:3px;background-color:#450000;border:1px solid #450000">Ver cortes premium</span>' +
            '<a href="https://wa.me/56940691425?text=¡Hola, Carnes Marty! 👋🏼 Quiero realizar un pedido:%0A%0AProductos (indica gramos, kilos o unidades):%0A• Ej: 500g de pechuga de pollo fileteada%0A• Ej: 1kg de carne picada de ternera%0A• Ej: 4 hamburguesas de buey%0A%0AMi pedido:%0A•%0A•%0A•%0A%0AMis datos:%0A• Nombre:%0A• Día y hora de recogida: %0A%0AQuedo a la espera de que me confirméis disponibilidad y el total. ¡Gracias!" target="_blank" rel="noopener" class="hero-btn" style="text-decoration:none;cursor:pointer;border:1px solid #5E7619;color:#FFFFFF;font-weight:600;font-size:14px;padding:14px 28px;border-radius:3px;background-color:#28741A">Pedir por WhatsApp</a>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div style="background-color:#101010">' +
        '<div class="section-pad two-col-rev" style="max-width:1280px;margin:0 auto;padding:88px 32px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center">' +
          '<div style="height:380px;border-radius:4px;overflow:hidden"><img src="Images/David_primerPlano.png" alt="Cortes frescos Carnes Marty" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:12px"></div>' +
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

      '<div style="position:relative;padding:100px 32px;background-image:url(\'Images/cortes_frescos.jpeg\');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:rgba(10,9,8,0.65)"></div>' +
        '<div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:18px;max-width:640px">' +
          '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(26px,4vw,38px);margin:0;color:#FAF7F4">Carne fresca, todos los días</h2>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:14.5px;line-height:1.6;color:#E2E8F0;margin:0">Escríbenos por WhatsApp y coordinamos tu pedido de cortes frescos y premium.</p>' +
          '<a href="https://wa.me/56940691425?text=¡Hola, Carnes Marty! 🥩 Quiero realizar un pedido:%0A%0AProductos (indica gramos, kilos o unidades):%0A• Ej: 500g de pechuga de pollo fileteada%0A• Ej: 1kg de carne picada de ternera%0A• Ej: 4 hamburguesas de buey%0A%0AMi pedido:%0A•%0A•%0A•%0A%0AMis datos:%0A• Nombre:%0A• Día y hora de recogida: %0A%0AQuedo a la espera de que me confirméis disponibilidad y el total. ¡Gracias!" target="_blank" rel="noopener" class="btn-cta" style="text-decoration:none;background:#28741A;color:#FFFFFF;font-weight:600;font-size:14px;padding:14px 30px;border-radius:3px">Pedir por WhatsApp</a>' +
        '</div>' +
      '</div>' +

      '<div style="padding:80px 32px;display:flex;justify-content:center;background-color:#101010">' +
        '<div class="two-col" style="max-width:1280px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center">' +
          '<div style="display:flex;flex-direction:column;gap:16px">' +
            '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#D1A66A">Selección del carnicero</span>' +
            '<h2 style="font-family:\'Playfair Display\',serif;font-weight:600;font-style:italic;font-size:32px;margin:0;color:#FFFFFF">¿No sabes qué elegir?</h2>' +
            '<p style="font-family:\'Inter\',sans-serif;font-size:14.5px;line-height:1.65;color:#E2E8F0;margin:0;max-width:440px">En Carnes Marty nos encargamos de encontrar el corte perfecto para ti.</p>' +
            '<span onclick="navigate(\'recomendaciones\')" class="link-arrow" style="cursor:pointer;align-self:flex-start;margin-top:6px;border-bottom:1px solid #855F4F;color:#D1A66A;font-size:14px;font-weight:600;padding-bottom:2px">Ver recomendaciones →</span>' +
          '</div>' +
          '<div class="carnicero-photo" style="height:260px;border-radius:5px;overflow:hidden"><img src="Images/cortes-mas-pedidos.jpeg" alt="¿No sabes qué elegir?" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
        '</div>' +
      '</div>' +

      '<div style="position:relative;width:100%;min-height:420px;background-image:url(\'Images/resenas-bg.jpeg\');background-size:cover;background-position:left center">' +
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
            '<span onclick="navigate(\'recetas\')" class="link-arrow" style="cursor:pointer;font-family:\'Inter\',sans-serif;font-size:13px;font-weight:600;color:#D1A66A">Ver todas →</span>' +
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
      '<div style="background:#1C1C1C;padding:110px 32px 64px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px">' +
        '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">' + c.eyebrow + '</span>' +
        '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(34px,5vw,54px);margin:0;color:#FAF7F4">' + c.title + '</h1>' +
        '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;max-width:620px;margin:0">' + c.description + '</p>' +
      '</div>' +
      '<div class="grid-3" style="max-width:1280px;margin:0 auto;padding:64px 32px;display:grid;grid-template-columns:repeat(3,1fr);gap:28px;background:#1C1C1C">' +
        c.cuts.map(cutCard).join('') +
      '</div>' +
    '</div>';
  }

  function pageRecomendaciones() {
    return '' +
    '<div data-screen-label="Recomendaciones">' +
      '<div style="background:#1C1C1C;padding:110px 32px 64px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px">' +
        '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">Selección del carnicero</span>' +
        '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(34px,5vw,54px);margin:0;color:#FAF7F4">Recomendaciones</h1>' +
        '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;max-width:620px;margin:0">Los cortes que elegimos nosotros mismos, por calidad, sabor y lo bien que rinden en la parrilla o en la olla.</p>' +
      '</div>' +
      '<div style="max-width:1000px;margin:0 auto;padding:64px 32px;display:flex;flex-direction:column;gap:0;background:#1C1C1C">' +
        recomendados.map(recomendadoRow).join('') +
      '</div>' +
    '</div>';
  }

  function pageRecetas() {
    return '' +
    '<div data-screen-label="Recetas">' +
      '<div class="page-banner" style="position:relative;width:100%;min-height:380px;background-image:url(\'Images/banner_recetas.jpeg\');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden">' +
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
      '<div class="page-banner" style="position:relative;width:100%;min-height:380px;background-image:url(\'Images/banner_nosotros.png\');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden">' +
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
          '<img src="Images/Logo_merchan.png" alt="Carnes Marty" style="width:100%;max-width:340px;height:auto">' +
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
      '<div class="page-banner" style="position:relative;width:100%;min-height:380px;background-image:url(\'Images/banner_contacto.jpeg\');background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden">' +
        '<div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(10,9,8,0.78), rgba(10,9,8,0.5) 45%, rgba(10,9,8,0.85))"></div>' +
        '<div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px 32px;max-width:720px">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#D1A66A">Hablemos</span>' +
          '<h1 style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:clamp(34px,5vw,54px);margin:0;color:#FAF7F4;text-shadow:0 4px 18px rgba(0,0,0,0.5)">Contacto</h1>' +
          '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.65;color:#E2E8F0;max-width:560px;margin:0">Pedidos, consultas y cortes especiales. Cuéntanos qué necesitas y nos encargamos del resto.</p>' +
        '</div>' +
      '</div>' +
      '<div class="grid-3" style="max-width:1000px;margin:0 auto;padding:64px 32px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;background:#1C1C1C">' +
        '<a href="https://wa.me/56940691425" target="_blank" rel="noopener" class="contact-card" style="text-decoration:none;border:1px solid #4A3B33;border-radius:4px;padding:28px;display:flex;flex-direction:column;gap:8px;background:#2E2E2E">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D1A66A">WhatsApp</span>' +
          '<span style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:20px;color:#FAF7F4">Pedidos y consultas</span>' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:13.5px;color:#E2E8F0">+56 9 4069 1425</span>' +
        '</a>' +
        '<a href="https://www.instagram.com/carnes_marty/" target="_blank" rel="noopener" class="contact-card" style="text-decoration:none;border:1px solid #4A3B33;border-radius:4px;padding:28px;display:flex;flex-direction:column;gap:8px;background:#2E2E2E">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D1A66A">Instagram</span>' +
          '<span style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:20px;color:#FAF7F4">@carnes_marty</span>' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:13.5px;color:#E2E8F0">Novedades y promociones</span>' +
        '</a>' +
        '<div class="contact-card" style="border:1px solid #4A3B33;border-radius:4px;padding:28px;display:flex;flex-direction:column;gap:8px;background:#2E2E2E">' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#D1A66A">Ubicación</span>' +
          '<span style="font-family:\'Playfair Display\',serif;font-weight:600;font-size:20px;color:#FAF7F4">Linderos, Buin</span>' +
          '<span style="font-family:\'Inter\',sans-serif;font-size:13.5px;color:#E2E8F0">Región Metropolitana, Chile</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function buildPageHtml() {
    if (state.page === 'inicio') return pageInicio();
    if (catalog[state.page]) return pageCategoria(state.page);
    if (state.page === 'recomendaciones') return pageRecomendaciones();
    if (state.page === 'recetas') return pageRecetas();
    if (state.page === 'nosotros') return pageNosotros();
    if (state.page === 'contacto') return pageContacto();
    return pageInicio();
  }

  function setupReveal() {
    var targets = document.querySelectorAll('#page-content [data-screen-label] > *');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('reveal', 'in-view'); });
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
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      if (i === 0) {
        requestAnimationFrame(function () { el.classList.add('in-view'); });
      } else {
        observer.observe(el);
      }
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
        window.scrollTo(0, 0);
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
    return validPages.indexOf(p) !== -1 ? p : 'inicio';
  }

  window.addEventListener('hashchange', function () {
    var p = fromHash();
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

  state.page = fromHash();
  renderPage(false);
})();
