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
    'restaurant-tary':     ['places/restaurant-tary.jpg'],
    'congress-hall':       ['places/congress-hall.jpg'],
    'akimat':              ['places/akimat.jpg'],
    'farabi-library':      ['places/farabi-library.jpg'],
    'mktu':                ['places/mktu.jpg'],
    'turkistan-hub':       ['places/turkistan-hub.jpg'],
    'khanshaiym-plaza':    ['places/khanshaiym-plaza.jpg'],
    'wosong-university':   ['places/wosong-university.jpg'],
    'great-steppe-museum': ['places/great-steppe-museum.jpg'],
    'rabia-sultan-begim':  ['places/rabia-sultan-begim.jpg'],
    'kylwet-mosque':       ['places/kylwet-mosque.jpg'],
    'sauran':              ['places/sauran.jpg'],
    'arystan-bab':         ['places/arystan-bab.jpg'],
    'otrar':               ['places/otrar.jpg'],
    'ukash-ata':           ['places/ukash-ata.jpg'],
    'esimkhan':            ['places/esimkhan.jpg'],
    'gauhar-ana':          ['places/gauhar-ana.jpg'],
    'kumshyk-ata':         ['places/kumshyk-ata.jpg'],
    'kuanysh-bazar':       [],
    'altyn-orda-taxi':     []
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

  const TR_PLACE_COPY = {
    'restaurant-1465': ['Restaurant 14 65', 'Türkistan’da Kazak ve Avrupa yemekleri sunan restoran.'],
    'restaurant-tary': ['Tary Restoranı', 'Türkistan’da geleneksel yöresel yemekler sunan restoran.'],
    'congress-hall': ['Kongre Salonu', 'Türkistan’da forum, konser ve resmi etkinlikler için modern mekân.'],
    'akimat': ['Türkistan Akimatı', 'Şehir ve bölge yönetiminin idari binası. Yalnızca dışarıdan görülebilir.'],
    'farabi-library': ['El-Farabi Kütüphanesi', 'Otrar bölgesinde doğan büyük bilgin El-Farabi’nin adını taşıyan kütüphane.'],
    'mktu': ['Hoca Ahmet Yesevi Uluslararası Kazak-Türk Üniversitesi (MKTÜ)', '1991’de kurulan, Türkistan’ın önemli uluslararası üniversitesi.'],
    'turkistan-hub': ['Türkistan Hub', 'Türkistan’da iş, girişim ve etkinlikler için modern merkez.'],
    'khanshaiym-plaza': ['Khanshaiym Plaza', 'Türkistan’da alışveriş ve eğlence kompleksi.'],
    'wosong-university': ['Wosong Üniversitesi', 'Türkistan’da yükseköğretim kurumu.'],
    'great-steppe-museum': ['Büyük Bozkır Ülkesi Müzesi', 'Büyük Bozkır’ın tarihi ve Kazak devletçiliği hakkında müze.'],
    'rabia-sultan-begim': ['Rabia Sultan Begim Türbesi', 'Yesevi külliyesi yakınındaki, Uluğ Bey’in torunu Rabia Sultan Begim’e ait 15. yüzyıl türbesi.'],
    'kylwet-mosque': ['Kılvet (Hilvet) Yeraltı Camii', 'Hoca Ahmet Yesevi’nin hayatının son yıllarını inzivada geçirdiği yeraltı hücresi.'],
    'sauran': ['Antik Sauran Şehri', 'İyi korunmuş kerpiç surları ve kuleleriyle Orta Çağ İpek Yolu kale şehri.'],
    'arystan-bab': ['Arystan Bab Türbesi', 'Hoca Ahmet Yesevi’nin hocası Arystan Bab’ın önemli ziyaret yeri olan türbesi.'],
    'otrar': ['Antik Otrar Şehri', 'İpek Yolu’nun büyük şehri ve El-Farabi’nin doğum yeri; Moğol istilasında yıkılmıştır.'],
    'ukash-ata': ['Ukaş Ata Türbesi', 'Türkistan çevresinde saygı gören türbe ve ziyaret yeri.'],
    'esimkhan': ['Esim Han Türbesi', 'Türkistan’daki Kazak Hanlığı hükümdarı Esim Han’ın türbesi.'],
    'gauhar-ana': ['Gauhar Ana Türbesi', 'Hoca Ahmet Yesevi’nin kızı Gauhar Ana ile ilişkilendirilen Türkistan türbesi.'],
    'kumshyk-ata': ['Kumshyk Ata Türbesi', 'Türkistan bölgesinde kutsal kabul edilen türbe ve ziyaret yeri.']
  };
  const trCommon = {
    tbc: 'Resmî çalışma saatleri henüz doğrulanmadı; lütfen kontrol edin.',
    noEvents: 'Kampanya veya etkinlik henüz duyurulmadı. Güncellemeleri takip edin.',
    city: 'Türkistan şehir sınırları içinde',
    openAir: 'Açık alan; genellikle gün ışığında erişilebilir. Kesin saatleri kontrol edin.',
    shrine: 'Kutsal alan: her gün, tercihen gündüz ziyaret edin. Mütevazı giyinin. Kesin saatleri kontrol edin.',
    address: 'Türkistan (kesin adres doğrulanmalıdır)'
  };

  // helper: P(id, name, desc, info)
  const P = (id, name, desc, info) => ({
    id,
    tag: id.toUpperCase(),
    img: (PHOTOS[id] && PHOTOS[id][0]) || '', // only use a real local photo; otherwise render a text placeholder
    qr: 'foto3.png.jpeg',
    kaspi: 'foto3.png.jpeg',
    // No separate map files exist for the imported places; use the existing
    // project map image so Vercel does not request broken paths.
    map: '',
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
        sched: SHRINE }),

    P('kuanysh-bazar',
      { en: 'Kuanysh Bazar', kk: 'Қуаныш базар', ru: 'Базар «Қуаныш»', tr: 'Kuanysh Pazarı', uz: 'Quvonch bozori', ar: 'بازار كوانيش', zh: '库阿尼什集市', ko: '쿠아니시 바자르', ja: 'クアニシュ・バザール', fr: 'Bazar Kuanysh' },
      { en: 'A local market in Turkistan where visitors can experience everyday trade, discover local products and goods, and feel the atmosphere of the city.', kk: 'Түркістандағы жергілікті базар. Мұнда күнделікті сауда-саттықты көріп, жергілікті өнімдер мен тауарларды тауып, қаланың тынысын сезінуге болады.', ru: 'Местный рынок Туркестана, где можно увидеть повседневную торговлю, найти местные товары и почувствовать атмосферу города.', tr: 'Türkistan’da günlük yerel ticareti görebileceğiniz, yöresel ürünleri keşfedebileceğiniz ve şehrin atmosferini hissedebileceğiniz pazar.', uz: 'Turkistondagi mahalliy bozor: kundalik savdoni kuzatish, mahalliy mahsulotlarni topish va shahar muhitini his qilish mumkin.', ar: 'سوق محلي في تركستان يتيح للزوار مشاهدة التجارة اليومية واكتشاف المنتجات المحلية والشعور بأجواء المدينة.', zh: '突厥斯坦的本地集市，游客可以体验日常交易、发现当地商品并感受城市氛围。', ko: '투르키스탄의 지역 시장으로, 일상적인 거래를 보고 현지 상품을 발견하며 도시의 분위기를 느낄 수 있습니다.', ja: 'トルキスタンの地元市場。日常の商いを見学し、地域の商品を探しながら街の雰囲気を体験できます。', fr: 'Un marché local de Turkistan où découvrir le commerce quotidien, les produits locaux et l’atmosphère de la ville.' },
      { category: { en: 'Local market / Bazaar', kk: 'Жергілікті базар', ru: 'Местный рынок / базар', tr: 'Yerel pazar / çarşı', uz: 'Mahalliy bozor', ar: 'سوق محلي', zh: '本地集市', ko: '지역 시장', ja: '地元市場', fr: 'Marché local' }, addr: { en: '76XV+PP7 Kuanysh Bazar, Turkistan 161200', kk: '76XV+PP7 Қуаныш базары, Түркістан 161200', ru: '76XV+PP7, базар «Қуаныш», Туркестан, 161200', tr: '76XV+PP7 Kuanysh Pazarı, Türkistan 161200', uz: '76XV+PP7 Quvonch bozori, Turkiston 161200', ar: '76XV+PP7 سوق كوانيش، تركستان 161200', zh: '76XV+PP7 库阿尼什集市，突厥斯坦 161200', ko: '76XV+PP7 쿠아니시 바자르, 투르키스탄 161200', ja: '76XV+PP7 クアニシュ・バザール、トルキスタン 161200', fr: '76XV+PP7 Bazar Kuanysh, Turkistan 161200' }, dist: IN_CITY, sched: TBC, googleMaps: 'https://www.google.com/maps/place/Kuanysh+Bazar/@43.2994578,68.2449431,17z/data=!3m1!4b1!4m6!3m5!1s0x4200c28139667d01:0x6a08e15574fffd83!8m2!3d43.2994578!4d68.2449431!16s%2Fg%2F1hhkpf005', twoGis: 'https://2gis.kz/turkistan/search/Kuanysh%20Bazar' }),

    P('altyn-orda-taxi',
      { en: 'Altyn Orda', kk: 'Алтын Орда', ru: 'Алтын Орда', tr: 'Altyn Orda', uz: 'Altyn Orda', ar: 'ألتين أوردا', zh: '阿尔腾·奥尔达', ko: '알틴 오르다', ja: 'アルティン・オルダ', fr: 'Altyn Orda' },
      { en: 'An intercity taxi gathering and departure point in Turkistan. Travelers can find taxis heading towards Shymkent here.', kk: 'Түркістандағы қалааралық таксилер жиналып, жолға шығатын орын. Мұнда Шымкент бағытына баратын таксилерді табуға болады.', ru: 'Место сбора и отправления междугородних такси в Туркестане. Здесь можно найти такси в сторону Шымкента.', tr: 'Türkistan’da şehirlerarası taksilerin toplandığı ve hareket ettiği nokta. Burada Şımkent yönüne giden taksiler bulunabilir.', uz: 'Turkistondagi shaharlararo taksilar to‘planib jo‘naydigan joy. Bu yerdan Chimkentga ketadigan taksilarni topish mumkin.', ar: 'نقطة تجمع وانطلاق سيارات الأجرة بين المدن في تركستان؛ يمكن العثور هنا على سيارات متجهة نحو شيمكنت.', zh: '突厥斯坦的城际出租车集合和出发点，游客可在此找到前往奇姆肯特方向的出租车。', ko: '투르키스탄의 도시 간 택시 집결·출발 지점입니다. 이곳에서 심켄트행 택시를 찾을 수 있습니다.', ja: 'トルキスタンの都市間タクシーの集合・出発地点。シムケント方面のタクシーをここで見つけられます。', fr: 'Point de rassemblement et de départ des taxis interurbains à Turkistan, notamment vers Chymkent.' },
      { category: { en: 'Transportation / Intercity taxi stand', kk: 'Көлік / қалааралық такси тұрағы', ru: 'Транспорт / стоянка междугородних такси', tr: 'Ulaşım / şehirlerarası taksi durağı', uz: 'Transport / shaharlararo taksi bekati', ar: 'النقل / موقف سيارات أجرة بين المدن', zh: '交通 / 城际出租车站', ko: '교통 / 도시 간 택시 승강장', ja: '交通 / 都市間タクシー乗り場', fr: 'Transport / taxis interurbains' }, addr: { en: 'Tauke Khan Avenue, Avtovokzal Altyn Orda, Turkistan', kk: 'Тәуке хан даңғылы, «Алтын Орда» автовокзалы, Түркістан', ru: 'проспект Тауке хана, автовокзал «Алтын Орда», Туркестан', tr: 'Tauke Han Caddesi, Avtovokzal Altyn Orda, Türkistan', uz: 'Tauke Khan xiyoboni, Avtovokzal Altyn Orda, Turkiston', ar: 'جادة تاوكي خان، محطة حافلات ألتين أوردا، تركستان', zh: '突厥斯坦陶克汗大道，阿尔腾·奥尔达汽车站', ko: '투르키스탄 타우케 칸 거리, 알틴 오르다 버스터미널', ja: 'トルキスタン、タウケ・ハン通り、アルティン・オルダ・バスステーション', fr: 'Avenue Tauke Khan, Avtovokzal Altyn Orda, Turkistan' }, dist: IN_CITY, sched: TBC, googleMaps: 'https://www.google.com/maps/place/Avtovokzal+Altyn+Orda/data=!4m7!3m6!1s0x4200c285bc78b413:0x60abbf23c373fed8!8m2!3d43.3034215!4d68.248229!16s%2Fg%2F1hjh40119', twoGis: 'https://2gis.kz/turkistan/search/Avtovokzal%20Altyn%20Orda' })
  ];

  NEW_PLACES.forEach(place => {
    const copy = TR_PLACE_COPY[place.id];
    if (copy) { place.name.tr = copy[0]; place.desc.tr = copy[1]; }
    if (!place.info.googleMaps) place.info.addr.tr = trCommon.address;
    place.info.dist.tr = trCommon.city;
    place.info.sched.tr = place.info.sched === SHRINE ? trCommon.shrine : (place.info.sched === OPEN_AIR ? trCommon.openAir : trCommon.tbc);
    place.info.events.tr = trCommon.noEvents;
    if (!place.info.googleMaps) place.info.googleMaps = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(pick(place.name) + ' Turkistan');
    if (!place.info.twoGis) place.info.twoGis = 'https://2gis.kz/turkistan/search/' + encodeURIComponent(pick(place.name));
  });

  // Добавляем только один раз, старые места не трогаем
  NEW_PLACES.forEach(np => {
    if (!PLACES.some(p => p.id === np.id)) PLACES.push(np);
  });

  /* ---- Блок «Информация о месте» + фото внизу (только для мест с `info`) ---- */
  const LBL = {
    ru: { h: 'Информация о месте', addr: 'Расположение', dist: 'Расстояние от Туркестана', sched: 'График работы', ev: 'Акции и мероприятия', ph: 'Фото' },
    kk: { h: 'Орын туралы ақпарат', addr: 'Орналасуы', dist: 'Түркістаннан қашықтығы', sched: 'Жұмыс кестесі', ev: 'Акциялар мен іс-шаралар', ph: 'Фотолар' },
    en: { h: 'Place information', addr: 'Location', dist: 'Distance from Turkistan', sched: 'Opening hours', ev: 'Promotions & events', ph: 'Photos', category: 'Category', detail: 'Details' },
    tr: { h: 'Mekân bilgileri', addr: 'Konum', dist: 'Türkistan’dan uzaklık', sched: 'Çalışma saatleri', ev: 'Kampanyalar ve etkinlikler', ph: 'Fotoğraflar', category: 'Kategori', detail: 'Ayrıntılar' }
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
        ${addressBlock({ info: i })}
        ${i.category ? row('🏷️', lb('category'), i.category) : ''}
        ${i.detail ? row('📝', lb('detail'), i.detail) : ''}
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
