/* ==========================================================================
   QONAQ — Additional places (loaded AFTER script.js, does not modify old code)
   Подключение в index.html:  <script src="places-extra.js"></script>  (после script.js)
   Всё, что помечено «уточнить» — проверьте и впишите точные данные.
   ========================================================================== */
(function () {

  /* ------------------------------------------------------------------------
     ФОТО: id места -> список фото (локальные файлы или ссылки https://...)
     Фото показываются внизу блока «Информация о месте».
     Пустой список [] = блок с фото не показывается.
     ------------------------------------------------------------------------ */
  const PHOTOS = {
    'restaurant-1465': ['places/restaurant-1465.jpg'],
    'restaurant-tary':     ['places/tary.jpg'],
    'congress-hall':       [],
    'akimat':              [],
    'farabi-library':      [],
    'mktu':                [],
    'turkistan-hub':       [],
    'khanshaiym-plaza':    [],
    'wosong-university':   [],
    'great-steppe-museum': [],
    'rabia-sultan-begim':  [],
    'kylwet-mosque':       [],
    'sauran':              [],
    'arystan-bab':         [],
    'otrar':               [],
    'ukash-ata':           [],
    'esimkhan':            [],
    'gauhar-ana':          [],
    'kumshyk-ata':         []
  };

  /* ---- Общие тексты ---- */
  const TBC = {
    ru: 'Уточнить: официальный график пока не подтверждён',
    kk: 'Нақтылау керек: ресми кесте расталмаған',
    en: 'To be confirmed: official schedule not verified yet'
  };
  const NOEV = {
    ru: 'Акции и мероприятия пока не объявлены. Следите за обновлениями.',
    kk: 'Акциялар мен іс-шаралар әзірге жарияланбаған.',
    en: 'No promotions or events announced yet. Check back soon.'
  };
  const IN_CITY = {
    ru: 'В черте города Туркестан',
    kk: 'Түркістан қаласының ішінде',
    en: 'Inside Turkistan city'
  };
  const OPEN_AIR = {
    ru: 'Открытая территория, обычно доступна в светлое время суток. Точные часы уточнить.',
    kk: 'Ашық аумақ, әдетте күндізгі уақытта қолжетімді. Нақты сағаттарын нақтылау керек.',
    en: 'Open-air site, usually accessible in daylight. Confirm exact hours.'
  };
  const SHRINE = {
    ru: 'Святое место: ежедневно, лучше в светлое время. Одевайтесь скромно. Точные часы уточнить.',
    kk: 'Қасиетті орын: күн сайын, күндіз барған жөн. Қарапайым киініңіз. Нақты сағаттарын нақтылау керек.',
    en: 'Sacred site: daily, best in daylight. Dress modestly. Confirm exact hours.'
  };
  const ADDR_TBC = {
    ru: 'г. Туркестан (точный адрес уточнить)',
    kk: 'Түркістан қ. (нақты мекенжайын нақтылау керек)',
    en: 'Turkistan (exact address to be confirmed)'
  };

  // helper: P(id, name, desc, info)
  const P = (id, name, desc, info) => ({
    id,
    tag: id.toUpperCase(),
    img: 'places/' + id + '.jpg',         // главное фото вверху страницы
    qr: 'foto3.png.jpeg',
    kaspi: 'foto3.png.jpeg',
    map: 'places/' + id + '-map.jpg',
    start: { label: 'QONAQ banner', lat: null, lng: null },
    end: { lat: null, lng: null },
    name, desc,
    info: Object.assign({ events: NOEV, sched: TBC, photos: PHOTOS[id] || [] }, info)
  });

  const NEW_PLACES = [
    P('restaurant-1465',
      { en: 'Restaurant 14 65', kk: '14 65 мейрамханасы', ru: 'Ресторан «14 65»' },
      { en: 'Restaurant in Turkistan with Kazakh and European dishes.',
        kk: 'Түркістандағы қазақ және еуропалық тағамдар мейрамханасы.',
        ru: 'Ресторан в Туркестане с казахской и европейской кухней.' },
      { addr: ADDR_TBC, dist: IN_CITY }),

    P('restaurant-tary',
      { en: 'Tary Restaurant', kk: 'Тары мейрамханасы', ru: 'Ресторан «Тары»' },
      { en: 'Restaurant in Turkistan serving national cuisine.',
        kk: 'Түркістандағы ұлттық тағамдар мейрамханасы.',
        ru: 'Ресторан национальной кухни в Туркестане.' },
      { addr: ADDR_TBC, dist: IN_CITY }),

    P('congress-hall',
      { en: 'Congress Hall', kk: 'Конгресс холл', ru: 'Конгресс-холл' },
      { en: 'Large modern venue in Turkistan for forums, concerts and official events.',
        kk: 'Түркістандағы форум, концерт және ресми іс-шараларға арналған заманауи ғимарат.',
        ru: 'Современная площадка в Туркестане для форумов, концертов и официальных мероприятий.' },
      { addr: ADDR_TBC,
        dist: IN_CITY,
        sched: { ru: 'Работает по афише мероприятий. Расписание уточнить.', kk: 'Іс-шара афишасы бойынша. Кестесін нақтылау керек.', en: 'Open according to the event schedule. Confirm dates.' } }),

    P('akimat',
      { en: 'Turkistan Akimat', kk: 'Түркістан әкімдігі', ru: 'Акимат Туркестана' },
      { en: 'Administrative building of the city and region authorities. Exterior viewing only.',
        kk: 'Қала мен облыс әкімдігінің әкімшілік ғимараты. Тек сырттан көруге болады.',
        ru: 'Административное здание городской и областной власти. Осмотр снаружи.' },
      { addr: ADDR_TBC,
        dist: IN_CITY,
        sched: { ru: 'Приём граждан по будням в рабочее время. Для туристов вход ограничен.', kk: 'Жұмыс күндері азаматтарды қабылдау. Туристерге кіру шектеулі.', en: 'Weekday office hours for citizens. Limited access for tourists.' } }),

    P('farabi-library',
      { en: 'Al-Farabi Library', kk: 'Фараби кітапханасы', ru: 'Библиотека имени Фараби' },
      { en: 'Library named after the great scholar Al-Farabi, born in the Otrar region.',
        kk: 'Отырар өңірінде туған ұлы ғалым Әл-Фарабидің атындағы кітапхана.',
        ru: 'Библиотека имени великого учёного аль-Фараби, уроженца Отрарского края.' },
      { addr: ADDR_TBC, dist: IN_CITY }),

    P('mktu',
      { en: 'Khoja Akhmet Yassawi International Kazakh-Turkish University (MKTU)', kk: 'Қ.А. Яссауи атындағы Халықаралық қазақ-түрік университеті (МКТУ)', ru: 'Международный казахско-турецкий университет им. Ясави (МКТУ)' },
      { en: 'Major international university of Turkistan, founded in 1991.',
        kk: 'Түркістандағы ірі халықаралық университет, 1991 жылы құрылған.',
        ru: 'Крупнейший международный университет Туркестана, основан в 1991 году.' },
      { addr: { ru: 'г. Туркестан, проспект Б. Саттарханова (номер здания уточнить)', kk: 'Түркістан қ., Б. Саттарханов даңғылы (ғимарат нөмірін нақтылау керек)', en: 'B. Sattarkhanov Ave, Turkistan (building number to be confirmed)' },
        dist: IN_CITY,
        sched: { ru: 'Учебные корпуса: будни. Для гостей вход по согласованию с администрацией.', kk: 'Оқу корпустары: жұмыс күндері. Қонақтарға әкімшілікпен келісім бойынша.', en: 'Campus: weekdays. Guest access by arrangement with administration.' } }),

    P('turkistan-hub',
      { en: 'Turkistan Hub', kk: 'Түркістан хаб', ru: 'Туркестан Хаб' },
      { en: 'Modern hub space in Turkistan for business, startups and events.',
        kk: 'Бизнес, стартап және іс-шараларға арналған Түркістандағы заманауи кеңістік.',
        ru: 'Современное пространство в Туркестане для бизнеса, стартапов и мероприятий.' },
      { addr: ADDR_TBC, dist: IN_CITY }),

    P('khanshaiym-plaza',
      { en: 'Khanshaiym Plaza', kk: 'Ханшайым плаза', ru: 'Ханшайым Плаза' },
      { en: 'Commercial and leisure complex in Turkistan.',
        kk: 'Түркістандағы сауда-ойын-сауық кешені.',
        ru: 'Торгово-развлекательный комплекс в Туркестане.' },
      { addr: ADDR_TBC, dist: IN_CITY }),

    P('wosong-university',
      { en: 'Wosong University', kk: 'Wosong университеті', ru: 'Wosong University' },
      { en: 'Higher education institution in Turkistan.',
        kk: 'Түркістандағы жоғары оқу орны.',
        ru: 'Высшее учебное заведение в Туркестане.' },
      { addr: ADDR_TBC, dist: IN_CITY }),

    P('great-steppe-museum',
      { en: 'Great Steppe Country Museum', kk: 'Ұлы дала елі музейі', ru: 'Музей «Ұлы дала елі»' },
      { en: 'Museum about the history of the Great Steppe and the Kazakh statehood.',
        kk: 'Ұлы дала тарихы мен қазақ мемлекеттілігі туралы музей.',
        ru: 'Музей об истории Великой степи и казахской государственности.' },
      { addr: ADDR_TBC, dist: IN_CITY }),

    P('rabia-sultan-begim',
      { en: 'Rabia Sultan Begim Mausoleum', kk: 'Рабия сұлтан бегім кесенесі', ru: 'Мавзолей Рабии Султан Бегим' },
      { en: '15th-century mausoleum of Rabia Sultan Begim, granddaughter of Ulugh Beg, near the Yasawi complex.',
        kk: 'XV ғасырдағы Ұлықбектің немересі Рабия сұлтан бегімнің кесенесі, Яссауи кешенінің жанында.',
        ru: 'Мавзолей XV века Рабии Султан Бегим, внучки Улугбека, рядом с комплексом Ясави.' },
      { addr: { ru: 'г. Туркестан, рядом с мавзолеем Ходжи Ахмеда Ясави', kk: 'Түркістан қ., Қожа Ахмет Яссауи кесенесінің жанында', en: 'Turkistan, next to the Khoja Ahmed Yasawi Mausoleum' },
        dist: { ru: 'В центре города, примерно 5–10 минут пешком от Ясави', kk: 'Қала орталығында, Яссауиден шамамен 5–10 минут жаяу', en: 'City center, about 5–10 min walk from Yasawi' },
        sched: SHRINE }),

    P('kylwet-mosque',
      { en: 'Kylwet (Hilvet) Underground Mosque', kk: 'Қылует жерасты мешіті', ru: 'Подземная мечеть Хильвет (Қылует)' },
      { en: 'Underground cell where Khoja Ahmed Yasawi spent his final years in seclusion.',
        kk: 'Қожа Ахмет Яссауи өмірінің соңғы жылдарын оңашада өткізген жерасты ғибадатханасы.',
        ru: 'Подземная келья, где Ходжа Ахмед Ясави провёл последние годы в уединении.' },
      { addr: { ru: 'г. Туркестан, рядом с мавзолеем Ясави', kk: 'Түркістан қ., Яссауи кесенесінің жанында', en: 'Turkistan, next to the Yasawi Mausoleum' },
        dist: { ru: 'В историческом центре, пешком от мавзолея Ясави', kk: 'Тарихи орталықта, Яссауи кесенесінен жаяу', en: 'Historic center, on foot from the Yasawi Mausoleum' },
        sched: SHRINE }),

    P('sauran',
      { en: 'Sauran Ancient Town', kk: 'Сауран қалашығы', ru: 'Городище Сауран' },
      { en: 'Medieval Silk Road fortress town with well-preserved clay walls and towers.',
        kk: 'Ортағасырлық Жібек жолы қалашығы, сақталған қабырғалары мен мұнараларымен танымал.',
        ru: 'Средневековый город на Шёлковом пути с хорошо сохранившимися глинобитными стенами.' },
      { addr: { ru: 'Сауранский сельский округ, Туркестанская область (на северо-запад от Туркестана)', kk: 'Сауран ауылдық округі, Түркістан облысы (Түркістаннан солтүстік-батысқа қарай)', en: 'Sauran rural district, Turkistan Region (northwest of Turkistan)' },
        dist: { ru: 'Около 40–45 км от Туркестана, примерно 45–60 минут на машине (уточнить)', kk: 'Түркістаннан шамамен 40–45 км, көлікпен 45–60 минут (нақтылау керек)', en: 'About 40–45 km from Turkistan, around 45–60 min by car (to be confirmed)' },
        sched: OPEN_AIR }),

    P('arystan-bab',
      { en: 'Arystan Bab Mausoleum', kk: 'Арыстан баб кесенесі', ru: 'Мавзолей Арыстан-баба' },
      { en: 'Mausoleum of Arystan Bab, teacher of Khoja Ahmed Yasawi, an important pilgrimage site.',
        kk: 'Қожа Ахмет Яссауидің ұстазы Арыстан бабтың кесенесі, маңызды зиярат орны.',
        ru: 'Мавзолей Арыстан-баба, наставника Ходжи Ахмеда Ясави, важное место паломничества.' },
      { addr: { ru: 'село Арыстанбаб, Отырарский район, Туркестанская область', kk: 'Арыстанбаб ауылы, Отырар ауданы, Түркістан облысы', en: 'Arystanbab village, Otyrar district, Turkistan Region' },
        dist: { ru: 'Примерно 45–50 км от Туркестана (уточнить маршрут и время)', kk: 'Түркістаннан шамамен 45–50 км (бағыт пен уақытты нақтылау керек)', en: 'About 45–50 km from Turkistan (confirm route and time)' },
        sched: SHRINE }),

    P('otrar',
      { en: 'Otrar Ancient Town', kk: 'Отырар қалашығы', ru: 'Городище Отрар' },
      { en: 'Great Silk Road city and birthplace of Al-Farabi, destroyed during the Mongol invasion.',
        kk: 'Әл-Фарабидің туған жері, Жібек жолының ұлы қаласы, моңғол шапқыншылығында қиратылған.',
        ru: 'Великий город Шёлкового пути и родина аль-Фараби, разрушенный в монгольское нашествие.' },
      { addr: { ru: 'Отырарский район, Туркестанская область', kk: 'Отырар ауданы, Түркістан облысы', en: 'Otyrar district, Turkistan Region' },
        dist: { ru: 'Далеко от города, около 90–100 км. Лучше выезжать на полный день (расстояние и время уточнить)', kk: 'Қаладан алыс, шамамен 90–100 км. Күні бойы баруға болады (қашықтық пен уақытты нақтылау керек)', en: 'Far from the city, around 90–100 km. Plan a full day trip (confirm distance and time)' },
        sched: OPEN_AIR }),

    P('ukash-ata',
      { en: 'Ukash Ata Mausoleum', kk: 'Укаш ата кесенесі', ru: 'Мавзолей Укаш-ата' },
      { en: 'Revered mausoleum and pilgrimage site in the Turkistan area.',
        kk: 'Түркістан өңіріндегі қастерлі кесене әрі зиярат орны.',
        ru: 'Почитаемый мавзолей и место паломничества в окрестностях Туркестана.' },
      { addr: { ru: 'Туркестанская область (точное местоположение уточнить)', kk: 'Түркістан облысы (нақты орнын нақтылау керек)', en: 'Turkistan Region (exact location to be confirmed)' },
        dist: { ru: 'Расстояние от Туркестана уточнить', kk: 'Түркістаннан қашықтығын нақтылау керек', en: 'Distance from Turkistan to be confirmed' },
        sched: SHRINE }),

    P('esimkhan',
      { en: 'Esim Khan Mausoleum', kk: 'Есімхан кесенесі', ru: 'Мавзолей Есим-хана' },
      { en: 'Mausoleum of Esim Khan, ruler of the Kazakh Khanate, in Turkistan.',
        kk: 'Түркістандағы Қазақ хандығының билеушісі Есім ханның кесенесі.',
        ru: 'Мавзолей Есим-хана, правителя Казахского ханства, в Туркестане.' },
      { addr: { ru: 'г. Туркестан, историческая часть города', kk: 'Түркістан қ., қаланың тарихи бөлігі', en: 'Turkistan, historic part of the city' },
        dist: IN_CITY,
        sched: SHRINE }),

    P('gauhar-ana',
      { en: 'Gauhar Ana Mausoleum', kk: 'Гаухар ана кесенесі', ru: 'Мавзолей Гаухар-ана' },
      { en: 'Mausoleum in Turkistan associated with Gauhar Ana, daughter of Khoja Ahmed Yasawi.',
        kk: 'Қожа Ахмет Яссауидің қызы Гаухар анаға байланысты Түркістандағы кесене.',
        ru: 'Мавзолей в Туркестане, связанный с Гаухар-ана, дочерью Ходжи Ахмеда Ясави.' },
      { addr: ADDR_TBC, dist: IN_CITY, sched: SHRINE }),

    P('kumshyk-ata',
      { en: 'Kumshyk Ata Mausoleum', kk: 'Құмшық ата кесенесі', ru: 'Мавзолей Кумшык-ата' },
      { en: 'Sacred mausoleum and pilgrimage site in the Turkistan region.',
        kk: 'Түркістан өңіріндегі қасиетті кесене әрі зиярат орны.',
        ru: 'Священный мавзолей и место паломничества в Туркестанском регионе.' },
      { addr: { ru: 'Туркестанская область (точное местоположение уточнить)', kk: 'Түркістан облысы (нақты орнын нақтылау керек)', en: 'Turkistan Region (exact location to be confirmed)' },
        dist: { ru: 'Расстояние от Туркестана уточнить', kk: 'Түркістаннан қашықтығын нақтылау керек', en: 'Distance from Turkistan to be confirmed' },
        sched: SHRINE })
  ];

  // Добавляем только один раз, старые места не трогаем
  NEW_PLACES.forEach(np => {
    if (!PLACES.some(p => p.id === np.id)) PLACES.push(np);
  });

  /* ---- Блок «Информация о месте» + фото внизу (только для мест с `info`) ---- */
  const LBL = {
    ru: { h: 'Информация о месте', addr: 'Расположение', dist: 'Расстояние от Туркестана', sched: 'График работы', ev: 'Акции и мероприятия', ph: 'Фото' },
    kk: { h: 'Орын туралы ақпарат', addr: 'Орналасуы', dist: 'Түркістаннан қашықтығы', sched: 'Жұмыс кестесі', ev: 'Акциялар мен іс-шаралар', ph: 'Фотолар' },
    en: { h: 'Place information', addr: 'Location', dist: 'Distance from Turkistan', sched: 'Opening hours', ev: 'Promotions & events', ph: 'Photos' }
  };
  const lb = k => (LBL[lang] || LBL.en)[k];

  const originalPlace = SCREENS.place;
  SCREENS.place = function (id) {
    const html = originalPlace(id);
    const p = PLACES.find(x => x.id === id);
    if (!p || !p.info) return html;
    const i = p.info;

    const row = (icon, label, val) => `
      <p style="margin:0 0 10px"><strong>${icon} ${label}:</strong><br>${pick(val)}</p>`;

    // Фото внизу блока: ссылки или файлы, через ph() как в старых местах
    const photos = Array.isArray(i.photos) ? i.photos : [];
    const gallery = photos.length ? `
        <h4 style="margin:18px 0 8px">📷 ${lb('ph')}</h4>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
          ${photos.map((src, n) => ph(src, pick(p.name) + ' ' + (n + 1), 'r43')).join('')}
        </div>` : '';

    const block = `
      <div class="guide-section" style="margin-top:20px">
        <h3 class="guide-section-title">ℹ️ ${lb('h')}</h3>
        ${row('📍', lb('addr'), i.addr)}
        ${row('🚗', lb('dist'), i.dist)}
        ${row('🕒', lb('sched'), i.sched)}
        ${row('🎉', lb('ev'), i.events)}
        ${gallery}
      </div>`;

    const idx = html.lastIndexOf('</section>');
    return idx === -1 ? html + block : html.slice(0, idx) + block + html.slice(idx);
  };

  route(true); // перерисовать текущий экран
})();