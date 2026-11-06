/* ==========================================================================
   QONAQ — Official Tourism Platform (Turkistan, Kazakhstan)
   Vanilla JavaScript Application: Hash-based Multi-screen Architecture
   ========================================================================== */

/* ==========================================================================
   1. USER CONFIGURATION: SOCIAL MEDIA & CONTACT URLS
   --------------------------------------------------------------------------
   Paste your real social media profiles and contact details below.
   Leave empty string ("") until configured. When empty, buttons display
   a clean, accessible "(Not configured)" badge rather than a broken link.
   ========================================================================== */
const SOCIAL_URLS = {
  instagram: 'https://www.instagram.com/view_iksd0/', // e.g. 'https://instagram.com/your_handle'
  tiktok:    'https://www.tiktok.com/', // e.g. 'https://tiktok.com/@your_handle'
  threads:   'https://www.threads.com/', // e.g. 'https://threads.net/@your_handle'
  facebook:  'https://www.facebook.com/dinmukhamed.dulat'  // e.g. 'https://facebook.com/your_page'
};

const CONTACT_CONFIG = {
  email:    'dulatdinmukhamed@gmail.com',  // e.g. 'info@qonaq-turkistan.kz'
  phone:    '+7(776) 303-95-11',  // e.g. '+7 (700) 123-45-67'
  whatsapp: 'https://chat.whatsapp.com/Hlo5IUmxec0C8XYpkZdmui' // default WhatsApp direct link
};

/* ==========================================================================
   2. GUIDE PROFILE CONFIGURATION
   --------------------------------------------------------------------------
   Edit guide details, portrait photo, WhatsApp contact URL, and demo info.
   ========================================================================== */
const GUIDE_CONFIG = {
  name: {
    en: 'Dulat Dinmukhamed',
    kk: 'Дулат Дінмұхамед',
    ru: 'Дулат Динмухамед',
    tr: 'Dulat Dinmukhamed',
    uz: 'Dulat Dinmukhamed',
    ar: 'علي شير نوربيسوف',
    zh: '阿里舍尔·努尔佩索夫',
    ko: '알리셰르 누르페이소프',
    ja: 'アリシェル・ヌルペイソフ',
    fr: 'Alicher Nourpeïsov'
  },
  portrait: 'foto1.jpg', // Uses existing Turkistan photo asset (customizable)
  whatsappUrl: 'https://chat.whatsapp.com/Hlo5IUmxec0C8XYpkZdmui',
  rating: '4.98',
  reviewsCount: 142,
  experienceYears: '8+',
  toursCount: '520+'
};

const GUIDE_LANGUAGES = [
  { name: { en: 'Kazakh', kk: 'Қазақ тілі', ru: 'Казахский', tr: 'Kazakça', uz: 'Qozoqcha', ar: 'القازاقية', zh: '哈萨克语', ko: '카자흐어', ja: 'カザフ語', fr: 'Kazakh' }, level: { en: 'Native', kk: 'Ана тілі', ru: 'Родной', tr: 'Ana dili', uz: 'Ona tili', ar: 'اللغة الأم', zh: '母语', ko: '모국어', ja: '母国語', fr: 'Langue maternelle' } },
  { name: { en: 'Russian', kk: 'Орыс тілі', ru: 'Русский', tr: 'Rusça', uz: 'Ruscha', ar: 'الروسية', zh: '俄语', ko: '러시아어', ja: 'ロシア語', fr: 'Russe' }, level: { en: 'Fluent', kk: 'Еркін', ru: 'Свободный', tr: 'Akıcı', uz: 'Erkin', ar: 'طلاقة', zh: '流利', ko: '유창함', ja: '流暢', fr: 'Courant' } },
  { name: { en: 'English', kk: 'Ағылшын тілі', ru: 'Английский', tr: 'İngilizce', uz: 'Inglizcha', ar: 'الإنجليزية', zh: '英语', ko: '영어', ja: '英語', fr: 'Anglais' }, level: { en: 'Fluent', kk: 'Еркін', ru: 'Свободный', tr: 'Akıcı', uz: 'Erkin', ar: 'طلاقة', zh: '流利', ko: '유창함', ja: '流暢', fr: 'Courant' } },
  { name: { en: 'Turkish', kk: 'Түрік тілі', ru: 'Турецкий', tr: 'Türkçe', uz: 'Turkcha', ar: 'التركية', zh: '土耳其语', ko: '터키어', ja: 'トルコ語', fr: 'Turc' }, level: { en: 'Conversational', kk: 'Сөйлесу деңгейі', ru: 'Разговорный', tr: 'İleri Seviye', uz: 'So‘zlashuv', ar: 'محادثة', zh: '会话', ko: '회화 가능', ja: '日常会話', fr: 'Conversationnel' } }
];

const GUIDE_EXPERTISE = [
  {
    icon: '🏛️',
    title: {
      en: 'Timurid Architecture & Sufism',
      kk: 'Темір дәуірінің сәулеті мен сопылық',
      ru: 'Тимуридское зодчество и суфизм',
      tr: 'Timur Mimarisi ve Tasavvuf',
      uz: 'Temuriylar me’morchiligi va tasavvuf',
      ar: 'عمارة التيموريين والتصوف',
      zh: '帖木儿建筑与苏非主义',
      ko: '티무르 건축과 수피즘',
      ja: 'ティムール建築とスーフィズム',
      fr: 'Architecture timouride et soufisme'
    },
    desc: {
      en: 'In-depth history of the Khoja Ahmed Yasawi Mausoleum, subterranean Hilvet mosque, and spiritual philosophy.',
      kk: 'Қожа Ахмет Яссауи кесенесі, жер асты Қылует мешіті және рухани философияның терең тарихы.',
      ru: 'Глубокая история мавзолея Ходжи Ахмеда Ясави, подземной мечети Хильвет и духовного учения.',
      tr: 'Hoca Ahmet Yesevi Türbesi, yer altı Hilvet camisi ve manevi felsefenin derin tarihi.',
      uz: 'Xoja Ahmad Yassaviy maqbarasi, yer osti Hilvat masjidi va ma’naviy meros tarixi.',
      ar: 'تاريخ مفصل لضريح خوجه أحمد يسوي ومسجد خلوت تحت الأرض.',
      zh: '深入讲解霍加·艾哈迈德·亚萨维陵墓、地下清真寺及其精神哲学。',
      ko: '호자 아흐메트 야사위 영묘와 지하 힐베트 모스크의 심층 역사 해설.',
      ja: 'ホージャ・アフマド・ヤサヴィー廟と地下ヒルヴェトモスクの奥深い歴史。',
      fr: 'Histoire approfondie du mausolée de Khoja Ahmed Yasawi et de la mosquée souterraine Hilvet.'
    }
  },
  {
    icon: '🐪',
    title: {
      en: 'Great Silk Road Fortresses',
      kk: 'Ұлы Жібек жолы қалалары',
      ru: 'Крепости Великого шелкового пути',
      tr: 'İpek Yolu Kaleleri',
      uz: 'Buyuk Ipak yo‘li qal’alari',
      ar: 'حصون طريق الحرير العظيم',
      zh: '伟大丝绸之路古城与要塞',
      ko: '위대한 실크로드 요새 유적',
      ja: 'シルクロードの要塞都市',
      fr: 'Forteresses de la Route de la Soie'
    },
    desc: {
      en: 'Ancient trading routes, the fortified citadel of Sauran with Karez irrigation, and the oasis of Otrar.',
      kk: 'Ежелгі сауда жолдары, Сауран бекінісінің қылует жүйелері және Отырар оазисі.',
      ru: 'Торговые караванные пути, оборонительные стены Саурана с кяризами и оазис древнего Отрара.',
      tr: 'Antik ticaret rotaları, Sauran kalesi ve Otrar vahası tarihi.',
      uz: 'Qadimgi karvon yo‘llari, Savron qal’asi va O‘tror vohasi.',
      ar: 'طرق القوافل التجارية وحصن ساوران ونواة واحة أوترار.',
      zh: '古代贸易路线、保存完好的绍兰要塞坎儿井系统与讹答剌绿洲。',
      ko: '고대 교역로, 카레즈 수로를 갖춘 사우란 요새와 오트라르 오아시스.',
      ja: '古代の隊商路、サウラン要塞の地下水路カーリーズとオトラルオアシス。',
      fr: 'Routes caravanières, citadelle de Sauran et oasis d’Otrar.'
    }
  },
  {
    icon: '✨',
    title: {
      en: 'Sacred Pilgrimages & Legends',
      kk: 'Қасиетті орындар мен аңыздар',
      ru: 'Священные места и предания',
      tr: 'Kutsal Ziyaretler ve Efsaneler',
      uz: 'Muqaddas ziyoratgohlar va afsonalar',
      ar: 'المزارات المقدسة والأساطير',
      zh: '圣地朝圣传统与草原传说',
      ko: '성지 순례와 초원의 전설',
      ja: '聖地巡礼と草原の伝説',
      fr: 'Pèlerinages sacrés et légendes'
    },
    desc: {
      en: 'Traditional pilgrim customs connecting Arystan Bab, sacred healing wells, and local Turkistan oral folklore.',
      kk: 'Арыстан бабтан басталған зиярат дәстүрі, шипалы бұлақтар мен жергілікті халық аңыздары.',
      ru: 'Традиции паломничества от Арыстан-баба, целебные источники и степные легенды.',
      tr: 'Arslan Bab’dan başlayan ziyaret gelenekleri, şifalı sular ve efsaneler.',
      uz: 'Arslonbobdan boshlangan ziyorat an’analari va xalq rivoyatlari.',
      ar: 'تقاليد الزيارة التي تربط أرسلان باب بالينابيع الشافية والأساطير الشعبية.',
      zh: '从阿尔斯坦·巴卜开始的朝圣传统、圣水泉眼与突厥斯坦民间传说。',
      ko: '아리스탄 밥에서 시작되는 순례 전통, 치유의 샘과 구전 민담.',
      ja: 'アリスタン・バブから始まる巡礼の伝統と草原の口承伝説。',
      fr: 'Coutumes traditionnelles de pèlerinage reliant Arystan Bab aux sources sacrées.'
    }
  },
  {
    icon: '🍵',
    title: {
      en: 'Culture, Tea & Craft Bazaars',
      kk: 'Мәдениет, шай және қолөнер',
      ru: 'Культура, чайные и ремесла',
      tr: 'Kültür, Çayhane ve Zanaatlar',
      uz: 'Madaniyat, choyxona va hunarmandchilik',
      ar: 'الثقافة والمقاهي والحرف اليدوية',
      zh: '传统手工艺、茶文化与市集',
      ko: '문화, 전통 찻집과 공예 바자르',
      ja: '茶文化と伝統工芸バザール',
      fr: 'Culture, salons de thé et artisanat'
    },
    desc: {
      en: 'Local clay ceramic workshops, authentic Turkistan plov degustation, and hidden teahouses in the old quarters.',
      kk: 'Дәстүрлі қыш шеберханалары, нағыз түркістандық палау және көне шайханалар.',
      ru: 'Потомственные гончарные мастерские, дегустация туркестанского плова и аутентичные чайханы.',
      tr: 'Çömlek atölyeleri, geleneksel Türkistan pilavı ve otantik çayhaneler.',
      uz: 'Kulolchilik ustaxonalari, Turkiston palovi va qadimiy choyxonalar.',
      ar: 'ورش الفخار التراثية وتذوق الأرز التركستاني والمقاهي الأصيلة.',
      zh: '世代相传的陶艺作坊、地道突厥斯坦手抓饭与老城隐秘茶室。',
      ko: '도자기 공방 체험, 전통 투르키스탄 플로프와 숨겨진 전통 찻집 탐방.',
      ja: '伝統的な陶芸工房、本場のトルキスタン・プロフと伝統茶房。',
      fr: 'Ateliers de céramique, dégustation de plov authentique et maisons de thé historiques.'
    }
  }
];

const GUIDE_TOURS = [
  {
    id: 'tour-1',
    duration: { en: '3.5 Hours', kk: '3.5 Сағат', ru: '3.5 Часа', tr: '3.5 Saat', uz: '3.5 Soat', ar: '3.5 ساعات', zh: '3.5 小时', ko: '3.5 시간', ja: '3.5 時間', fr: '3h30' },
    type: { en: 'Walking Cultural Tour', kk: 'Жаяу мәдени экскурсия', ru: 'Пешеходная экскурсия', tr: 'Yürüyüş Turu', uz: 'Piyoda ekskursiya', ar: 'جولة مشي ثقافية', zh: '步行文化之旅', ko: '도보 문화 투어', ja: '徒歩カルチャーツアー', fr: 'Visite à pied' },
    title: {
      en: 'The Spiritual Heart: Yasawi Mausoleum & Old Citadel',
      kk: 'Рухани жүрек: Яссауи кесенесі мен көне қамал',
      ru: 'Духовное сердце: Мавзолей Ясави и старая цитадель',
      tr: 'Manevi Kalp: Yesevi Türbesi ve Eski Kale',
      uz: 'Ma’naviy yurak: Yassaviy maqbarasi va ko‘hna qal’a',
      ar: 'القلب الروحي: ضريح يسوي والقلعة القديمة',
      zh: '精神之核：亚萨维陵墓与古城堡',
      ko: '영적 중심: 야사위 영묘와 옛 성채',
      ja: '心の聖地：ヤサヴィー廟と旧城塞',
      fr: 'Le Cœur Spirituel : Mausolée Yasawi et Citadelle'
    },
    desc: {
      en: 'Explore Timur’s monumental 14th-century masterpiece, descend into the 12th-century subterranean Hilvet mosque, and walk through the oriental baths museum.',
      kk: 'Әмір Темір салған XIV ғасырдың жауһарын тамашалап, XII ғасырдағы жер асты Қылует мешітіне түсіп, ортағасырлық монша мұражайын аралаңыз.',
      ru: 'Посетите шедевр Тамерлана XIV века, спуститесь в подземную мечеть Хильвет XII века и осмотрите восточные бани.',
      tr: '14. yüzyıl şaheseri türbeyi keşfedin, 12. yüzyıl yer altı Hilvet camisine inin ve tarihi hamamı görün.',
      uz: 'XIV asr durdonasi maqbara, XII asr yer osti Hilvat masjidi va tarixiy hammomni ziyorat qiling.',
      ar: 'استكشف التحفة المعمارية التي تعود للقرن الرابع عشر وانزل إلى مسجد خلوت الأثري.',
      zh: '探索14世纪帖木儿宏伟建筑杰作，步入12世纪地下清真寺与东方古浴室。',
      ko: '14세기 티무르의 걸작 영묘를 둘러보고, 12세기 지하 힐베트 모스크와 고대 목욕탕을 방문합니다.',
      ja: '14世紀の壮麗な霊廟、12世紀の地下モスク・ヒルヴェト、東洋浴場博物館を巡ります。',
      fr: 'Découvrez le chef-d’œuvre du XIVe siècle, la mosquée souterraine du XIIe siècle et les bains orientaux.'
    },
    highlights: ['UNESCO Mausoleum', 'Hilvet Underworld Mosque', 'Friday Citadel Mosque', 'Oriental Bathhouse']
  },
  {
    id: 'tour-2',
    duration: { en: '6.5 Hours', kk: '6.5 Сағат', ru: '6.5 Часов', tr: '6.5 Saat', uz: '6.5 Soat', ar: '6.5 ساعات', zh: '6.5 小时', ko: '6.5 시간', ja: '6.5 時間', fr: '6h30' },
    type: { en: 'Full-Day Expedition (Vehicle + Walking)', kk: 'Күндізгі экспедиция (Көлік + Жаяу)', ru: 'Экспедиция на весь день (Авто + Пешком)', tr: 'Tam Gün Keşif (Araç + Yürüyüş)', uz: 'To‘liq kunlik ekspeditsiya', ar: 'رحلة يوم كامل (سيارة + مشي)', zh: '全天探索之旅（车辆+步行）', ko: '전일 원정 투어 (차량 + 도보)', ja: '終日探訪（車＋徒歩）', fr: 'Expédition journée complète' },
    title: {
      en: 'Silk Road Fortress Expedition: Ancient Sauran & Otrar',
      kk: 'Жібек жолы бекіністері: Ежелгі Сауран мен Отырар',
      ru: 'Экспедиция по Шелковому пути: Древний Сауран и Отрар',
      tr: 'İpek Yolu Seferi: Antik Sauran ve Otrar',
      uz: 'Ipak yo‘li ekspeditsiyasi: Qadimgi Savron va O‘tror',
      ar: 'استكشاف طريق الحرير: قلعة ساوران القديمة وأوترار',
      zh: '丝路要塞远征：远古绍兰要塞与讹答剌',
      ko: '실크로드 요새 원정: 고대 사우란과 오트라르',
      ja: 'シルクロード要塞探訪：古代サウランとオトラル',
      fr: 'Expédition des Forteresses : Sauran et Otrar'
    },
    desc: {
      en: 'Journey out to the most complete clay fortress walls in Kazakhstan at Sauran, witness the ingenious subterranean Karez water channels, and hear stories of legendary desert sieges.',
      kk: 'Қазақстандағы ең жақсы сақталған Сауран бекінісіне барып, керемет кәріз құдықтарын көріп, шөл даладағы шайқастар тарихымен танысыңыз.',
      ru: 'Отправьтесь к великолепно сохранившимся глинобитным стенам Саурана, увидьте древние кяризы и узнайте о великих осадах степи.',
      tr: 'Kazakistan’ın en iyi korunmuş antik Sauran surlarını görün, yer altı su kemerlerini keşfedin.',
      uz: 'Qozog‘istonning eng yaxshi saqlangan Savron qal’asi devorlari va qadimiy karez quduqlarini ko‘ring.',
      ar: 'رحلة إلى أسوار قلعة ساوران الأكثر حفظاً في كازاخستان ونظام القنوات المائية القديم.',
      zh: '前往哈萨克斯坦保存最完好的绍兰要塞粘土城墙，亲见古代坎儿井水利奇迹。',
      ko: '카자흐스탄에서 가장 잘 보존된 사우란 점토 성벽과 정교한 고대 지하 수로 카레즈를 탐방합니다.',
      ja: 'カザフスタン屈指の保存状態を誇るサウラン城壁と古代地下水路カーリーズを探訪します。',
      fr: 'Visitez les remparts de Sauran, les canaux souterrains de Karez et les légendes du désert.'
    },
    highlights: ['Sauran Clay Walls', 'Karez Ancient Irrigation', 'Steppe Desert Panorama', 'Historical Commentary']
  },
  {
    id: 'tour-3',
    duration: { en: '2.5 Hours', kk: '2.5 Сағат', ru: '2.5 Часа', tr: '2.5 Saat', uz: '2.5 Soat', ar: '2.5 ساعات', zh: '2.5 小时', ko: '2.5 시간', ja: '2.5 時間', fr: '2h30' },
    type: { en: 'Evening Cultural Experience', kk: 'Кешкі мәдени бағдарлама', ru: 'Вечерняя культурная прогулка', tr: 'Akşam Kültür Gezisi', uz: 'Kechki madaniy sayr', ar: 'تجربة ثقافية مسائية', zh: '傍晚文化风情体验', ko: '저녁 문화 산책', ja: '夕暮れカルチャー体験', fr: 'Balade culturelle en soirée' },
    title: {
      en: 'Evening Whispers & Caravanserai Lights',
      kk: 'Кешкі сағым: Керуен-сарай жарықтары мен шай рәсімі',
      ru: 'Вечерние огни: Подсветка Караван-сарая и чайная церемония',
      tr: 'Akşam Fısıltıları ve Kervansaray Işıkları',
      uz: 'Kechki shukuh: Karvonsaroy chiroqlari va choy marosimi',
      ar: 'أضواء المساء في كارافانسراي ومراسم الشاي',
      zh: '晚霞与华灯：商队驿站与茶艺之夜',
      ko: '황혼의 숨결: 캐러밴서라이의 불빛과 다도 체험',
      ja: '黄昏の煌めき：キャラバンサライと茶の儀式',
      fr: 'Lueurs du Soir : Caravansérail et Cérémonie du Thé'
    },
    desc: {
      en: 'Golden hour photography of the turquoise dome, followed by an evening walk along the illuminated Caravanserai canal and traditional tea tasting with mountain honey and dried melons.',
      kk: 'Көк күмбездің бату кезіндегі фотосуреттері, Керуен-сарай арнасы бойындағы кешкі серуен және тау балы қосылған шай рәсімі.',
      ru: 'Фотосъемка бирюзового купола на закате, прогулка вдоль подсвеченного канала «Керуен-сарая» и чаепитие с горным медом.',
      tr: 'Gün batımında turkuaz kubbe fotoğrafçılığı, aydınlatılmış kanal boyu yürüyüş ve geleneksel çay tadımı.',
      uz: 'Quyosh botishida feruza gumbaz suratlari, Karvonsaroy kanali bo‘ylab sayr va choy marosimi.',
      ar: 'جلسة تصوير للقبة الفيروزية عند الغروب وجولة على القناة المضاءة مع تذوق الشاي.',
      zh: '金黄色落日照耀绿松石穹顶，漫步璀璨商队驿站水系水道并品鉴地道草本茶。',
      ko: '일몰 시각 터키석빛 돔의 사진 촬영, 조명이 켜진 운하 산책과 전통 꿀차 시음.',
      ja: '夕暮れに輝く青のドームの撮影、ライトアップされた運河の散策と伝統茶の試飲。',
      fr: 'Photos au coucher du soleil, promenade nocturne au bord du canal et dégustation de thé.'
    },
    highlights: ['Golden Hour Dome', 'Canal Night Lights', 'Artisan Sweets Degustation', 'Local Folklore Tales']
  }
];

const GUIDE_REVIEWS = [
  {
    name: 'Elena Semyonova',
    origin: { en: 'Almaty, Kazakhstan', kk: 'Алматы, Қазақстан', ru: 'Алматы, Казахстан', tr: 'Almatı, Kazakistan', uz: 'Olmaota, Qozog‘iston', ar: 'ألماتي، كازاخستان', zh: '阿拉木图，哈萨克斯坦', ko: '알마티, 카자흐스탄', ja: 'アルマティ、カザフスタン', fr: 'Almaty, Kazakhstan' },
    date: 'Oct 2026',
    stars: '★★★★★',
    text: {
      en: '“Dimash’s historical depth and passion made our visit to Yasawi Mausoleum magical. He explained the Sufi symbolism of the blue tiles and took us to authentic teahouses tourists never find on their own.”',
      kk: '«Димаштың тарихты терең білуі мен туған жеріне деген сүйіспеншілігі бізді таңғалдырды. Көгілдір өрнектердің сырын түсіндіріп, туристер сирек баратын көне шайханаларға ертіп барды.»',
      ru: '«Глубокие исторические знания Димаша сделали экскурсию незабываемой. Он раскрыл суфийский символизм лазурных изразцов и показал душевные чайханы, о которых знают только местные.»',
      tr: '«Dimash Bey’in engin tarihi bilgisi Türkistan ziyaretimizi unutulmaz kıldı. Yesevi türbesinin manevi derinliğini mükemmel anlattı.»',
      uz: '«Alisherning chuqur bilimi va mahorati Yassaviy ziyoratini unutilmas qildi. Haqiqiy mehmondo‘stlik va ajoyib suhbat.»',
      ar: '«معرفة علي شير العميقة بالتاريخ جعلت زيارتنا لضريح يسوي تجربة ساحرة لا تُنسى.»',
      zh: '“阿里舍尔渊博的历史素养让亚萨维陵墓之旅生动无比。他为我们细致解读了蓝砖上的苏非符号学。”',
      ko: '“알리셰르 씨의 깊은 역사 지식 덕분에 야사위 영묘 방문이 감동적이었습니다. 현지인들만 아는 찻집 안내도 최고였습니다.”',
      ja: '“アリシェルさんの深い歴史の知識と情熱により、ヤサヴィー廟巡りが素晴らしいものになりました。”',
      fr: '«Les connaissances historiques d’Alicher ont rendu notre visite inoubliable. Une passion communicative et un accueil chaleureux.»'
    }
  },
  {
    name: 'David & Sarah Mitchell',
    origin: { en: 'London, United Kingdom', kk: 'Лондон, Ұлыбритания', ru: 'Лондон, Великобритания', tr: 'Londra, Birleşik Krallık', uz: 'London, Buyuk Britaniya', ar: 'لندن، المملكة المتحدة', zh: '伦敦，英国', ko: '런던, 영국', ja: 'ロンドン、イギリス', fr: 'Londres, Royaume-Uni' },
    date: 'Sep 2026',
    stars: '★★★★★',
    text: {
      en: '“The day trip to Sauran fortress ruins was the undisputed highlight of our Kazakhstan travels. Alisher speaks impeccable English, was punctual, courteous, and brought the Silk Road to life!”',
      kk: '«Сауран қамалына жасалған саяхат Қазақстанға жасаған сапарымыздың ең жарқын сәті болды. Ағылшын тілінде еркін сөйлейді, өте ұқыпты және білімді гид!»',
      ru: '«Поездка в крепость Сауран стала главным открытием нашего путешествия по Казахстану. Безупречный английский, пунктуальность и живой рассказ о Шелковом пути.»',
      tr: '«Sauran kalesine yaptığımız gezi harikaydı. Alişer’in akıcı İngilizcesi ve anlatımı sayesinde İpek Yolu gözümüzde canlandı.»',
      uz: '«Savron qal’asiga bo‘lgan sayohat sayohatimizning eng yorqin qismi bo‘ldi. Mukammal ingliz tili va yuksak odob.»',
      ar: '«كانت الرحلة إلى قلعة ساوران أفضل تجربة لنا في كازاخستان. لغة إنجليزية ممتازة ودقة عالية في المواعيد.»',
      zh: '“绍兰古要塞之旅是我们哈萨克斯坦之行中最惊艳的环节。阿里舍尔英语极其流利，讲解生动引人入胜。”',
      ko: '“사우란 요새 투어는 카자흐스탄 여행 중 단연 최고였습니다. 유창한 영어와 친절함, 실크로드 이야기가 눈앞에 펼쳐졌습니다.”',
      ja: '“サウラン要塞への小旅行は、旅のハイライトでした。完璧な英語と的確な解説でシルクロードの世界を堪能できました。”',
      fr: '«L’excursion à la forteresse de Sauran a été le point fort de notre voyage. Anglais impeccable et narration captivante.»'
    }
  },
  {
    name: 'Murat & Zeynep Kaya',
    origin: { en: 'Istanbul, Turkey', kk: 'Ыстанбұл, Түркия', ru: 'Стамбул, Турция', tr: 'İstanbul, Türkiye', uz: 'Istanbul, Turkiya', ar: 'إسطنبول، تركيا', zh: '伊斯坦布尔，土耳其', ko: '이스탄불, 튀르키예', ja: 'イスタンブール、トルコ', fr: 'Istanbul, Turquie' },
    date: 'Aug 2026',
    stars: '★★★★★',
    text: {
      en: '“A profoundly moving experience. Walking through the underground Hilvet prayer chambers while listening to Yasawi’s wisdom was unforgettable. Highly recommended guide!”',
      kk: '«Өте әсерлі сәттер. Жер асты Қылует бөлмелерін аралап, Яссауи хикметтерін тыңдау ерекше рухани әсер қалдырды. Баршаға ұсынамыз!»',
      ru: '«Очень проникновенный опыт. Спуститься в подземную обитель Хильвет и слушать мудрость Ясави — это незабываемо. Искренне рекомендуем!»',
      tr: '«Manevi olarak çok etkileyici bir deneyimdi. Yerin altındaki Hilvet odalarını gezip Yesevi hikmetlerini dinlemek unutulmazdı. Herkese tavsiye ederiz.»',
      uz: '«Juda ta’sirli kechinmalar. Yer osti Hilvat xonalarini ziyorat qilish va hikmatlarni tinglash beqiyos taassurot qoldirdi.»',
      ar: '«تجربة روحية عميقة ومؤثرة في غرف خلوت تحت الأرض. نوصي به بشدة لكل زائر.»',
      zh: '“极其震撼的心灵之旅。在地下祈祷室聆听亚萨维的哲言格言令人难忘，强烈推荐！”',
      ko: '“깊은 울림이 있는 여행이었습니다. 지하 힐베트 기도실을 거닐며 야사위의 지혜를 듣는 순간을 잊을 수 없습니다.”',
      ja: '“深く心を打たれる体験でした。地下ヒルヴェトの祈りの部屋を巡る時間は忘れられません。”',
      fr: '«Une expérience profondément émouvante dans les cellules souterraines de Hilvet. Nous recommandons vivement ce guide!»'
    }
  }
];

/* ==========================================================================
   3. RIGHT-SIDE DISCOVERY FEED DATA STRUCTURE
   --------------------------------------------------------------------------
   Central JavaScript data array. Add, edit, remove, or reorder items.
   New cards at the top will automatically appear first in the feed.
   Categories: 'dining', 'events', 'places', 'offers', 'activities'.
   All demo content is marked as sample data.
   ========================================================================== */
const FEED_ITEMS = [
  {
    id: 'feed-1',
    category: 'dining',
    isSponsored: false,
    date: 'Oct 26, 2026',
    img: 'foto5.jpg',
    title: {
      en: 'Caravanserai Grand Teahouse & Plov Master (Demo)',
      kk: 'Керуен-сарайдағы үлкен шайхана мен палау орталығы (Демо)',
      ru: 'Чайхана «Керуен-сарай» и мастерская плова (Демо)',
      tr: 'Kervansaray Büyük Çayhanesi ve Pilav Evi (Demo)',
      uz: 'Karvonsaroy katta choyxonasi va palov markazi (Demo)',
      ar: 'مقهى كارافانسراي الكبير ومركز البلوف (تجريبي)',
      zh: '商队驿站大茶楼与地道抓饭坊（演示）',
      ko: '캐러밴서라이 전통 대형 찻집과 플로프 하우스 (데모)',
      ja: 'キャラバンサライ大茶房とプロフ名店（デモ）',
      fr: 'Grand Salon de Thé et Plov du Caravansérail (Démo)'
    },
    desc: {
      en: 'Sample item: Fresh tandoori samsa, authentic Turkistan lamb plov, and herbal steppe infusion overlooking the water promenade.',
      kk: 'Үлгі мәлімет: Тандыр самса, Түркістанның қой еті қосылған дәстүрлі палауы және арна бойындағы емдік шөп шайлары.',
      ru: 'Пример публикации: Свежая тандырная самса, настоящий туркестанский плов из баранины и степной травяной чай у водного канала.',
      tr: 'Örnek içerik: Taze tandır samsa, Türkistan kuzu pilavı ve kanal kenarında otantik bitki çayı.',
      uz: 'Namuna: Tandir somsasi, qo‘zi go‘shtli Turkiston palovi va kanal bo‘yidagi giyohli choy.',
      ar: 'عينة تجريبية: سمبوسة التنور وطبق البلوف التقليدي مع الشاي العشبي المطل على القناة.',
      zh: '示例推荐：酥香馕坑烤包子、突厥斯坦地道手抓羊肉饭与运河畔特色草本清茶。',
      ko: '샘플 추천: 탄두르 삼사, 정통 투르키스탄 양고기 플로프와 운하 전망 전통 허브차.',
      ja: 'サンプル情報：タンドールで焼く出来立てサムサとトルキスタン風プロフ、運河沿いの野草茶。',
      fr: 'Exemple : Samsa au tandoor, plov traditionnel à l’agneau et tisane des steppes au bord du canal.'
    },
    action: {
      target: '#place/caravanserai',
      label: { en: 'View Caravanserai', kk: 'Керуен-сарайды көру', ru: 'Смотреть «Керуен-сарай»', tr: 'Kervansaray’ı Gör', uz: 'Karvonsaroyni ko‘rish', ar: 'عرض كارافانسراي', zh: '查看商队驿站', ko: '캐러밴서라이 보기', ja: '詳細を見る', fr: 'Voir le Caravansérail' }
    }
  },
  {
    id: 'feed-2',
    category: 'events',
    isSponsored: false,
    date: 'Oct 24, 2026',
    img: 'foto2.jpg',
    title: {
      en: 'Autumn Light & Dombra Festival at Yasawi Complex (Demo)',
      kk: 'Яссауи кешеніндегі күзгі жарық пен күй фестивалі (Демо)',
      ru: 'Осенний фестиваль архитектурной подсветки и домбры (Демо)',
      tr: 'Yesevi Külliyesinde Işık ve Dombra Festivali (Demo)',
      uz: 'Yassaviy majmuasida yorug‘lik va do‘mbira festivali (Demo)',
      ar: 'مهرجان الإضاءة المعمارية والدومبرا في مجمع يسوي (تجريبي)',
      zh: '亚萨维建筑夜光与冬不拉原声音乐节（演示）',
      ko: '야사위 복합단지 가을 빛과 돔브라 축제 (데모)',
      ja: 'ヤサヴィー廟 秋のライトアップとドンブラ音楽祭（デモ）',
      fr: 'Festival de Lumière et de Dombra à Yasawi (Démo)'
    },
    desc: {
      en: 'Sample notice: Evening illumination of the sacred dome with acoustic dombra performances of ancient Kazakh kuys.',
      kk: 'Үлгі хабарлама: Көк күмбездің кешкі жарықтануы және ежелгі қазақ күйлерінің акустикалық жанды орындалуы.',
      ru: 'Пример события: Вечерняя подсветка лазурного купола в сопровождении живого исполнения старинных кюев на домбре.',
      tr: 'Örnek duyuru: Tarihi kubbenin gece aydınlatması ve canlı dombra ezgileri dinletisi.',
      uz: 'Namuna: Moviy gumbazning kechki chiroqlari va do‘mbirada qadimiy kuylar yangrashi.',
      ar: 'عينة إعلان: إضاءة ليلية للقبة الفيروزية مع عزف حي على آلة الدومبرا الشعبية.',
      zh: '示例活动：碧蓝穹顶晚间艺术照明，伴随古老哈萨克冬不拉传统乐曲现场原声演奏。',
      ko: '샘플 안내: 성스러운 돔의 야간 조명 연출과 카자흐 전통 현악기 돔브라 라이브 연주.',
      ja: 'サンプル告知：青のドームの夜間ライトアップとカザフ伝統楽器ドンブラの生演奏。',
      fr: 'Exemple : Illumination du dôme turquoise et concerts acoustiques de dombra sous les étoiles.'
    },
    action: {
      target: '#place/yasawi',
      label: { en: 'Explore Location', kk: 'Орынды зерттеу', ru: 'Подробнее о месте', tr: 'Konumu İncele', uz: 'Joyni ko‘rish', ar: 'استكشف الموقع', zh: '探索景点', ko: '명소 살펴보기', ja: '名所を見る', fr: 'Explorer le site' }
    }
  },
  {
    id: 'feed-3',
    category: 'offers',
    isSponsored: true,
    date: 'Oct 22, 2026',
    img: 'rix.jpg',
    title: {
      en: 'Rixos Turkistan: Cultural Spa Weekend Package (Demo)',
      kk: 'Rixos Turkistan: Мәдени СПА демалыс пакеті (Демо)',
      ru: 'Rixos Turkistan: Уикенд культуры и спа-отдыха (Демо)',
      tr: 'Rixos Türkistan: Kültür ve Spa Hafta Sonu Paketi (Demo)',
      uz: 'Rixos Turkiston: Madaniy Spa dam olish paketi (Demo)',
      ar: 'ريكسوس تركستان: باقة عطلة نهاية الأسبوع الصحية (تجريبي)',
      zh: '突厥斯坦里克索斯酒店：文化水疗周末特惠套餐（演示）',
      ko: '릭소스 투르키스탄: 문화 스파 주말 패키지 (데모)',
      ja: 'リクソス・トルキスタン：文化とスパの週末プラン（デモ）',
      fr: 'Rixos Turkistan : Forfait Spa et Découverte (Démo)'
    },
    desc: {
      en: 'Sample offer: 5-star comfort with Turkish hammam access, breakfast buffet, and panoramic sunset views over the citadel.',
      kk: 'Үлгі ұсыныс: Түрік хамамы, таңғы ас швед үстелі және қалаға қарайтын панорамалық көрінісі бар бес жұлдызды жайлылық.',
      ru: 'Пример акции: Пятизвездочный комфорт с турецким хаммамом, завтраком «шведский стол» и панорамным видом на цитадель.',
      tr: 'Örnek kampanya: Türk hamamı, açık büfe kahvaltı ve kale manzaralı 5 yıldızlı konfor.',
      uz: 'Namuna: Turk hamomi, shved stoli va qal’a manzarali 5 yulduzli qulaylik.',
      ar: 'عرض ترويجي: إقامة خمس نجوم مع دخول الحمام التركي وإطلالة بانورامية ساحرة.',
      zh: '示例促销：五星级尊贵住宿，包含土耳其浴室体验、自助早餐与古城日落全景露台。',
      ko: '샘플 프로모션: 터키식 하맘, 뷔페 조식과 성채 파노라마 석양 전망을 갖춘 5성급 편의.',
      ja: 'サンプル特典：トルコ式ハマム、朝食ビュッフェ、城塞の夕日を望む5つ星ホテルステイ。',
      fr: 'Exemple d’offre : Confort 5 étoiles, hammam turc, petit-déjeuner et vue panoramique.'
    },
    action: {
      target: '#hotel/hotel1',
      label: { en: 'Hotel Details', kk: 'Қонақүй мәліметі', ru: 'Детали отеля', tr: 'Otel Detayları', uz: 'Mehmonxona tafsilotlari', ar: 'تفاصيل الفندق', zh: '酒店详情', ko: '호텔 상세정보', ja: 'ホテル詳細', fr: 'Détails de l’hôtel' }
    }
  },
  {
    id: 'feed-4',
    category: 'places',
    isSponsored: false,
    date: 'Oct 20, 2026',
    img: 'foto1.jpg',
    title: {
      en: 'Hidden History: Subterranean Hilvet Chambers (Demo)',
      kk: 'Құпия тарих: Жер асты Қылует жайлары (Демо)',
      ru: 'Тайны истории: Подземные кельи Хильвет (Демо)',
      tr: 'Gizli Tarih: Yeraltı Hilvet Hücreleri (Demo)',
      uz: 'Yashirin tarix: Yer osti Hilvat hujralari (Demo)',
      ar: 'التاريخ الخفي: غرف خلوت تحت الأرض (تجريبي)',
      zh: '隐秘历史：地下希尔维特修道室探秘（演示）',
      ko: '숨겨진 역사: 지하 힐베트 은수처 이야기 (데모)',
      ja: '秘められた歴史：地下ヒルヴェトの祈祷房（デモ）',
      fr: 'Histoire Cachée : Les Cellules Souterraines de Hilvet (Démo)'
    },
    desc: {
      en: 'Sample feature: Discover the spiritual sanctuary where Khoja Ahmed Yasawi spent his final years in contemplation at age 63.',
      kk: 'Үлгі мақала: Қожа Ахмет Яссауидің 63 жасында жер астына түсіп, өмірінің соңына дейін құлшылық еткен рухани орны.',
      ru: 'Пример заметки: Узнайте об обители, куда суфийский поэт ушел в возрасте 63 лет для глубоких духовных размышлений.',
      tr: 'Örnek yazı: Hoca Ahmet Yesevi’nin 63 yaşında yeraltına çekilip tefekküre daldığı manevi sığınak.',
      uz: 'Namuna: Xoja Ahmad Yassaviy 63 yoshida yer ostiga tushib, umrining so‘nggi yillarini o‘tkazgan maskan.',
      ar: 'عينة مقال: تعرّف على الملاذ الروحي الذي قضى فيه يسوي سنواته الأخيرة بعد سن 63.',
      zh: '示例特写：揭秘霍加·艾哈迈德·亚萨维在63岁隐入地下深处进行深邃精神修持的圣洁居所。',
      ko: '샘플 기사: 호자 아흐메트 야사위가 63세에 지상 생활을 접고 명상에 잠겼던 지하 성소를 소개합니다.',
      ja: 'サンプル解説：ヤサヴィーが63歳の時に地上を離れ、思索の日々を過ごした地下の祈りの間。',
      fr: 'Exemple d’article : Le sanctuaire où Khoja Ahmed Yasawi se retira à l’âge de 63 ans pour méditer.'
    },
    action: {
      target: '#guide',
      label: { en: 'Guided Tour Info', kk: 'Гидпен саяхат', ru: 'Экскурсия с гидом', tr: 'Rehberli Tur', uz: 'Gidli ekskursiya', ar: 'جولة مع مرشد', zh: '导游导览信息', ko: '가이드 투어 안내', ja: 'ガイドツアー情報', fr: 'Visite avec guide' }
    }
  },
  {
    id: 'feed-5',
    category: 'activities',
    isSponsored: false,
    date: 'Oct 18, 2026',
    img: 'foto8.jpg',
    title: {
      en: 'Family Silk Road Glazed Pottery Masterclass (Demo)',
      kk: 'Отбасылық көне қыш ыдыс құю шеберлік сабағы (Демо)',
      ru: 'Семейный мастер-класс древнего гончарного мастерства (Демо)',
      tr: 'Aile Boyu Geleneksel Çömlek Atölyesi (Demo)',
      uz: 'Oilaviy an’anaviy kulolchilik master-klassi (Demo)',
      ar: 'ورشة عمل عائلية لصناعة الفخار التراثي (تجريبي)',
      zh: '丝路传统琉璃陶艺亲子手作坊（演示）',
      ko: '가족 실크로드 전통 도예 마스터클래스 (데모)',
      ja: '伝統シルクロード陶芸マスタークラス（デモ）',
      fr: 'Atelier de Poterie Traditionnelle de la Soie (Démo)'
    },
    desc: {
      en: 'Sample activity: Mold authentic Turkistan clay bowls and learn ancient turquoise glaze secrets guided by hereditary masters.',
      kk: 'Үлгі белсенділік: Ұрпақтан жалғасқан шеберлермен бірге балшықтан кесе жасап, көгілдір жылтыр сырларын үйреніңіз.',
      ru: 'Пример активности: Слепите традиционную пиалу из туркестанской глины и узнайте секреты лазурной глазури от потомственных мастеров.',
      tr: 'Örnek etkinlik: Geleneksel çömlek yapımını öğrenin ve turkuaz sırların sırlarını ustasından keşfedin.',
      uz: 'Namuna: Kulolchilik ustalaridan an’anaviy piyola yasash va sirli bo‘yoqlarni o‘rganish.',
      ar: 'نشاط تجريبي: صناعة الأواني الفخارية وتعلم أسرار الطلاء الفيروزي مع حرفيين متوارثين.',
      zh: '示例体验：在世代制陶世家指导下，亲手拉胚制作突厥斯坦泥碗并探索古老松石蓝釉奥秘。',
      ko: '샘플 체험: 도예 장인과 함께 투르키스탄 전통 도자기 잔을 빚고 터키석 유약 기법을 배웁니다.',
      ja: 'サンプル体験：伝統陶芸職人の指導で器を成形し、トルコブルーの釉薬の技法を体験。',
      fr: 'Exemple d’activité : Façonnez un bol en argile et apprenez les secrets de l’émail turquoise avec des maîtres potiers.'
    },
    action: {
      target: '#hotel/hotel2',
      label: { en: 'Family Hotel Info', kk: 'Қонақүй ақпараты', ru: 'Об отеле Family', tr: 'Family Otel Bilgisi', uz: 'Family mehmonxonasi', ar: 'معلومات الفندق العائلي', zh: '家庭酒店信息', ko: '패밀리 호텔 정보', ja: 'ファミリーホテル情報', fr: 'Info Family Hotel' }
    }
  }
];

/* ==========================================================================
   4. EXISTING CONTENT: PLACES & HOTELS
   --------------------------------------------------------------------------
   Preserved exactly as in current project with existing photography assets.
   ========================================================================== */
const HERO_IMAGE = 'foto1.jpg';

const PLACES = [
  {
    id: 'yasawi',
    tag: 'YASAWI',
    img: 'foto2.jpg',
    qr: 'foto3.png.jpeg',
    kaspi: 'foto3.png.jpeg',
    map: 'foto4.jpeg',
    start: { label: 'QONAQ banner', lat: null, lng: null },
    end: { lat: null, lng: null },
    name: {
      en: 'Khoja Ahmed Yasawi Mausoleum',
      kk: 'Қожа Ахмет Яссауи кесенесі',
      ru: 'Мавзолей Ходжи Ахмеда Ясави',
      tr: 'Hoca Ahmet Yesevi Türbesi',
      uz: 'Xoja Ahmad Yassaviy maqbarasi',
      ar: 'ضريح خوجه أحمد يسوي',
      zh: '霍加·艾哈迈德·亚萨维陵墓',
      ko: '호자 아흐메트 야사위 영묘',
      ja: 'ホージャ・アフマド・ヤサヴィー廟',
      fr: 'Mausolée de Khoja Ahmed Yasawi'
    },
    desc: {
      en: 'Built in the late 14th century by order of Timur, this UNESCO World Heritage site honors the Sufi poet and mystic Khoja Ahmed Yasawi.',
      kk: 'XIV ғасырдың аяғында Әмір Темірдің бұйрығымен салынған ЮНЕСКО-ның Дүниежүзілік мұрасы суфи ақыны Қожа Ахмет Яссауиге арналған.',
      ru: 'Построен в конце XIV века по приказу Тамерлана. Объект Всемирного наследия ЮНЕСКО посвящён суфийскому поэту Ходже Ахмеду Ясави.',
      tr: 'Timur’un emriyle 14. yüzyılın sonlarında inşa edilen bu UNESCO Dünya Mirası alanı, mutasavvıf şair Hoca Ahmet Yesevi’nin anısını yaşatmaktadır.',
      uz: 'XIV asr oxirida Amir Temur buyrug‘i bilan qurilgan YUNESKO Butunjahon merosi ob’ekti so‘fiy shoir Xoja Ahmad Yassaviyga bag‘ishlangan.',
      ar: 'بُني في أواخر القرن الرابع عشر بأمر من تيمور، وهو موقع للتراث العالمي لليونسكو يكرّم الشاعر والمتصوف خوجه أحمد يسوي.',
      zh: '该联合国教科文组织世界遗产由帖木儿于14世纪末下令建造，以纪念苏非派诗人兼神秘主义者霍加·艾哈迈德·亚萨维。',
      ko: '14세기 후반 티무르의 명으로 지어진 이 유네스코 세계문화유산은 수피 시인이자 신비주의자인 호자 아흐메트 야사위를 기리는 곳입니다.',
      ja: '14世紀後半にティムールの命により建立されたユネスコ世界遺産で、スーフィーの詩人ホージャ・アフマド・ヤサヴィーを祀っています。',
      fr: 'Construit à la fin du XIVe siècle sur ordre de Tamerlan, ce site du patrimoine mondial de l’UNESCO honore le poète et mystique soufi Khoja Ahmed Yasawi.'
    }
  },
  {
    id: 'caravanserai',
    tag: 'CARAVANSERAI',
    img: 'foto5.jpg',
    qr: 'foto3.png.jpeg',
    kaspi: 'foto3.png.jpeg',
    kaspiLabel: 'foto3.png.jpeg',
    map: 'foto6.jpeg',
    start: { label: 'QONAQ banner', lat: null, lng: null },
    end: { lat: null, lng: null },
    name: {
      en: 'Caravanserai',
      kk: 'Керуен-сарай',
      ru: 'Караван-сарай',
      tr: 'Kervansaray',
      uz: 'Karvonsaroy',
      ar: 'كارافانسراي',
      zh: '商队驿站',
      ko: '캐러밴서라이',
      ja: 'キャラバンサライ',
      fr: 'Caravansérail'
    },
    desc: {
      en: 'Caravanserais were roadside inns where Silk Road merchants and their caravans rested. Turkistan’s caravanserai recalls this trading heritage.',
      kk: 'Керуен-сарай — Жібек жолы көпестері мен керуендері аялдайтын жол бойындағы тұрақ. Түркістандағы керуен-сарай осы сауда мұрасын еске салады.',
      ru: 'Караван-сарай — придорожный постоялый двор, где отдыхали купцы и караваны Великого шёлкового пути. Туркестанский караван-сарай напоминает об этом торговом наследии.',
      tr: 'Kervansaraylar, İpek Yolu tüccarlarının ve kervanlarının konakladığı hanlardı. Türkistan’daki kervansaray bu ticaret mirasını yansıtır.',
      uz: 'Karvonsaroylar Ipak yo‘li savdogarlari va karvonlari to‘xtab o‘tadigan manzillar bo‘lgan. Turkistondagi karvonsaroy ushbu merosni aks ettiradi.',
      ar: 'كانت الخانات استراحات على جانب الطريق لتجار طريق الحرير وقوافلهم. يستحضر كارافانسراي تركستان هذا التراث التجاري العريق.',
      zh: '商队驿站是丝绸之路商贾与驼队歇息的宿驿。突厥斯坦的商队驿站重现了这一深厚的贸易与文化遗产。',
      ko: '캐러밴서라이는 실크로드 상인과 낙타 행렬이 쉬어가던 도로변 여관이었습니다. 투르키스탄의 캐러밴서라이는 이 무역 유산을 기립니다.',
      ja: 'キャラバンサライは、シルクロードの商人や隊商が休息をとった宿駅でした。トルキスタンの施設はその交易の遺産を今に伝えています。',
      fr: 'Les caravansérails étaient des auberges où se reposaient les marchands de la Route de la Soie. Celui de Turkistan rappelle ce riche héritage.'
    }
  }
];

const HOTELS = [
  {
    id: 'hotel1',
    tag: 'HOTEL_IMAGE_1',
    img: 'rix.jpg',
    map: 'foto7.jpeg',
    sample: false,
    name: {
      en: 'RIXOS Turkistan 5★',
      kk: 'RIXOS Turkistan 5★',
      ru: 'RIXOS Turkistan 5★',
      tr: 'RIXOS Turkistan 5★',
      uz: 'RIXOS Turkistan 5★',
      ar: 'RIXOS Turkistan 5★',
      zh: 'RIXOS Turkistan 5★',
      ko: 'RIXOS Turkistan 5★',
      ja: 'RIXOS Turkistan 5★',
      fr: 'RIXOS Turkistan 5★'
    },
    desc: {
      en: 'A premier five-star hotel in Turkistan offering luxury accommodations, fine dining, a traditional Turkish hammam, and panoramic city views.',
      kk: 'Түркістандағы танымал бес жұлдызды қонақүй. Жоғары деңгейлі қызмет, түрік хамамы мен панорамалық көрініс ұсынады.',
      ru: 'Один из самых узнаваемых пятизвёздочных отелей Туркестана. Предлагает премиальный сервис, хаммам, рестораны и панорамный вид.',
      tr: 'Türkistan’da lüks konaklama, Türk hamamı ve panoramik şehir manzarası sunan seçkin beş yıldızlı otel.',
      uz: 'Turkistondagi mashhur besh yulduzli mehmonxona. Mehmonlarga oliy darajadagi qulaylik va xizmatlarni taqdim etadi.',
      ar: 'فندق خمس نجوم راقٍ في تركستان يوفر إقامة فاخرة وحماماً تركياً وإطلالات خلابة.',
      zh: '突厥斯坦知名的五星级豪华酒店，提供奢华住宿、特色餐饮与全景城市景观。',
      ko: '럭셔리한 숙박 시설, 전통 터키식 하맘, 파노라마 전망을 자랑하는 투르키스탄 최고의 5성급 호텔입니다.',
      ja: '贅沢な客室、伝統的なハマム、パノラマビューを備えたトルキスタン屈指の5つ星ホテルです。',
      fr: 'Un hôtel 5 étoiles d’exception à Turkistan offrant un hébergement de luxe, un hammam et une vue panoramique.'
    },
    address: {
      en: 'B. Sattarkhanov Ave 25B, Turkistan',
      kk: 'Б. Саттарханов даңғылы 25Б, Түркістан',
      ru: 'пр. Б. Саттарханова 25Б, г. Туркестан'
    }
  },
  {
    id: 'hotel2',
    tag: 'HOTEL_IMAGE_2',
    img: 'foto8.jpg',
    map: 'foto9.jpeg',
    sample: false,
    name: {
      en: 'Family Hotel Turkistan',
      kk: 'Family қонақүйі Түркістан',
      ru: 'Отель Family Туркестан',
      tr: 'Family Hotel Türkistan',
      uz: 'Family Hotel Turkiston',
      ar: 'فندق فاميلي تركستان',
      zh: '家庭酒店 Family Hotel',
      ko: '패밀리 호텔 투르키스탄',
      ja: 'ファミリーホテル・トルキスタン',
      fr: 'Family Hotel Turkistan'
    },
    desc: {
      en: 'A warm and welcoming hotel in Turkistan ideal for families and travelers looking for authentic Kazakh hospitality and peace.',
      kk: 'Түркістандағы отбасылар мен саяхатшыларға арналған жайлы, қонақжай әрі тыныш қонақүй.',
      ru: 'Уютный и гостеприимный отель в Туркестане с теплой атмосферой для семейного отдыха и путешественников.',
      tr: 'Aileler ve gezginler için sıcak bir atmosfere ve samimi Kazak misafirperverliğine sahip rahat otel.',
      uz: 'Turkistondagi oilalar va sayohatchilar uchun shinam, mehmondo‘st va sokin mehmonxona.',
      ar: 'فندق هادئ ومريح ومناسب للعائلات والمسافرين في قلب تركستان.',
      zh: '突厥斯坦温馨宜人的家庭型酒店，环境宁静，展现纯正哈萨克热情待客之道。',
      ko: '가족 및 개별 여행객을 위한 아늑하고 따뜻한 투르키스탄의 친절한 호텔입니다.',
      ja: '家族連れや旅行者に最適な、温かいおもてなしと落ち着いた空間を提供するホテルです。',
      fr: 'Un hôtel chaleureux et paisible à Turkistan, parfait pour les familles et les voyageurs.'
    },
    address: {
      en: 'Tauke Khan Street 14, Turkistan',
      kk: 'Тәуке хан көшесі 14, Түркістан',
      ru: 'ул. Тауке хана 14, г. Туркестан'
    }
  }
];

/* ==========================================================================
   5. EXTENDED MULTILINGUAL TRANSLATION SYSTEM
   --------------------------------------------------------------------------
   Supports all 10 project primary languages. Missing keys in extra languages
   gracefully fall back to English.
   ========================================================================== */
const T = {
  en: {
    home: 'Home',
    places: 'Places',
    hotels: 'Hotels',
    guide: 'Guide',
    travelGuide: 'Travel Guide',
    about: 'How it works',
    welcome: 'Welcome to Turkistan. Choose your language and start exploring its sacred historic sites and vibrant culture.',
    explore: 'Explore Turkistan',
    back: '← Back',
    view: 'View place',
    how: 'How to get there',
    more: 'More languages',
    less: 'Fewer languages',
    where: 'Where you are / Where to go',
    start: 'Start',
    dest: 'Destination',
    payI: 'Open the Kaspi app and scan this QR code to complete payment.',
    s1: 'Scan the tourism banner QR code.',
    s2: 'Choose your preferred language.',
    s3: 'Select a historical place or hotel.',
    s4: 'Follow the route to the destination.',
    s5: 'Scan the destination’s QR code for information or payment.',
    placesT: 'Places to visit in Turkistan',
    payT: 'Pay with Kaspi',
    tapqr: 'Tap the QR code to pay',
    route: 'Route directions and GPS coordinates will appear here.',
    unset: 'Coordinates not configured yet',
    sample: 'Editable sample content',
    addr: 'Address: Available at front desk',
    details: 'View hotel details',

    // Guide screen
    guideRole: 'Official Certified Heritage Guide & Historian',
    guideBioTitle: 'About Your Guide',
    guideBioText: 'Born and raised in the sacred city of Turkistan, Dimash has dedicated more than 8 years to introducing global travelers to the spiritual soul, architectural wonders, and Silk Road legends of Kazakhstan. With a degree in Central Asian history and UNESCO heritage certification, his tours blend deep scholarly insights with lively local folklore and hidden culinary stops.',
    guideLanguagesTitle: 'Languages Spoken',
    guideExpertiseTitle: 'Areas of Expertise & Knowledge',
    guideToursTitle: 'Available Tours & Recommended Itineraries',
    guideReviewsTitle: 'Traveler Reviews',
    guideReviewsDemo: 'Demo Reviews (Sample Data)',
    guideContactWhatsApp: 'Contact on WhatsApp',
    guideBookTour: 'Book a Tour (Demo)',
    guideVerified: 'Official Certified Guide',
    guideExp: '8+ years experience',
    guideRating: 'Rating: 4.98 / 5.0',
    guideToursDone: '500+ guided tours',
    tourInquire: 'Inquire on WhatsApp',
    guideModalTitle: 'Tour Booking (Demonstration)',
    guideModalText: 'The automated online booking module is currently in demonstration mode. To reserve dates, check availability, or customize an itinerary, please contact Alisher directly on WhatsApp.',
    guideModalClose: 'Close',

    // Discovery Feed
    feedTitle: 'Turkistan Discovery',
    feedSubtitle: 'Curated local highlights & news (Demo Stream)',
    feedDemoTag: 'Demo Stream',
    feedAll: 'All',
    feedDining: 'Dining',
    feedEvents: 'Events',
    feedPlaces: 'Places',
    feedOffers: 'Offers',
    feedActivities: 'Activities',
    feedSponsored: 'Sponsored',

    // Footer
    footerTagline: 'Your personal digital gateway to the spiritual and cultural heritage of Turkistan, Kazakhstan.',
    footerQuickLinks: 'Navigation',
    footerSocialTitle: 'Follow QONAQ',
    footerSocialNote: 'Configurable in script.js',
    footerContactTitle: 'Contact & Inquiries',
    footerNotConfigured: 'Not configured',
    footerRights: 'All rights reserved.',
    footerLocation: 'Turkistan, Republic of Kazakhstan',
    footerAboutLink: 'About QONAQ'
  },

  kk: {
    home: 'Басты бет',
    places: 'Орындар',
    hotels: 'Қонақ үйлер',
    guide: 'Гид',
    travelGuide: 'Жолсілтеме',
    about: 'Қалай жұмыс істейді',
    welcome: 'Түркістанға қош келдіңіз. Тілді таңдап, рухани тарихи орындар мен бай мәдениетті зерттеңіз.',
    explore: 'Түркістанды зерттеу',
    back: '← Артқа',
    view: 'Орынды көру',
    how: 'Қалай жетуге болады',
    more: 'Басқа тілдер',
    less: 'Азырақ тіл',
    where: 'Сіз қайдасыз / Қайда бару керек',
    start: 'Бастау',
    dest: 'Межелі орын',
    payI: 'Kaspi қосымшасын ашып, осы QR кодты сканерлеңіз.',
    s1: 'Туристік баннердегі QR кодты сканерлеңіз.',
    s2: 'Өзіңізге ыңғайлы тілді таңдаңыз.',
    s3: 'Тарихи орынды немесе қонақүйді таңдаңыз.',
    s4: 'Межелі орынға бағыт бойынша жүріңіз.',
    s5: 'Ақпарат немесе төлем үшін межелі орынның QR кодын сканерлеңіз.',
    placesT: 'Түркістандағы көрікті орындар',
    payT: 'Kaspi арқылы төлеу',
    tapqr: 'Төлеу үшін QR кодты басыңыз',
    route: 'Бағыт және GPS бағдары осында көрсетіледі.',
    unset: 'Координаталар әлі белгіленбеген',
    sample: 'Өңделетін үлгі мазмұн',
    addr: 'Мекенжай: Қабылдау бөлімінде',
    details: 'Қонақүй мәліметтері',

    guideRole: 'Ресми сертификатталған мұра гиді және тарихшы',
    guideBioTitle: 'Гид туралы',
    guideBioText: 'Киелі Түркістан топырағында туып-өскен Димаш 8 жылдан астам уақыт бойы әлем саяхатшыларына Қазақстанның рухани жүрегін, сәулет өнерін және Жібек жолының шежіресін таныстырып келеді. Орталық Азия тарихы мамандығы және ЮНЕСКО сертификаты бар гид терең ғылыми білімді халықтық аңыздармен және ерекше дәмханалармен үйлестіреді.',
    guideLanguagesTitle: 'Сөйлейтін тілдері',
    guideExpertiseTitle: 'Мамандандырылған бағыттары мен білімі',
    guideToursTitle: 'Қолжетімді экскурсиялар мен бағыттар',
    guideReviewsTitle: 'Саяхатшылар пікірлері',
    guideReviewsDemo: 'Демо пікірлер (Үлгі мәліметтер)',
    guideContactWhatsApp: 'WhatsApp арқылы хабарласу',
    guideBookTour: 'Турды брондау (Демо)',
    guideVerified: 'Сертификатталған ресми гид',
    guideExp: '8+ жыл тәжірибе',
    guideRating: 'Рейтинг: 4.98 / 5.0',
    guideToursDone: '500+ экскурсия өткізген',
    tourInquire: 'WhatsApp-та сұрау',
    guideModalTitle: 'Турды брондау (Демо-режим)',
    guideModalText: 'Автоматты брондау жүйесі сынақ режимінде. Күндерді нақтылау, бағдарламаны бейімдеу немесе брондау үшін гидке тікелей WhatsApp арқылы хабарласыңыз.',
    guideModalClose: 'Жабу',

    feedTitle: 'Түркістан жаңалықтары',
    feedSubtitle: 'Таңдаулы жаңалықтар мен ұсыныстар (Демо ағын)',
    feedDemoTag: 'Демо ағын',
    feedAll: 'Барлығы',
    feedDining: 'Дәмханалар',
    feedEvents: 'Іс-шаралар',
    feedPlaces: 'Орындар',
    feedOffers: 'Ұсыныстар',
    feedActivities: 'Белсенділік',
    feedSponsored: 'Жарнама',

    footerTagline: 'Қазақстанның рухани астанасы Түркістанның бай мұрасына арналған жеке цифрлық гидіңіз.',
    footerQuickLinks: 'Бөлімдер',
    footerSocialTitle: 'QONAQ желілерде',
    footerSocialNote: 'script.js ішінде бапталады',
    footerContactTitle: 'Байланыс пен сұрақтар',
    footerNotConfigured: 'Бапталмаған',
    footerRights: 'Барлық құқықтар қорғалған.',
    footerLocation: 'Түркістан қаласы, Қазақстан Республикасы',
    footerAboutLink: 'QONAQ туралы'
  },

  ru: {
    home: 'Главная',
    places: 'Места',
    hotels: 'Отели',
    guide: 'Гид',
    travelGuide: 'Путеводитель',
    about: 'Как это работает',
    welcome: 'Добро пожаловать в Туркестан. Выберите язык и откройте для себя духовное наследие, памятники и культуру древнего города.',
    explore: 'Исследовать Туркестан',
    back: '← Назад',
    view: 'Открыть место',
    how: 'Как добраться',
    more: 'Другие языки',
    less: 'Меньше языков',
    where: 'Где вы / Куда идти',
    start: 'Старт',
    dest: 'Пункт назначения',
    payI: 'Откройте приложение Kaspi и отсканируйте этот QR-код для оплаты.',
    s1: 'Отсканируйте QR-код на туристическом баннере.',
    s2: 'Выберите удобный язык.',
    s3: 'Выберите историческое место или отель.',
    s4: 'Следуйте по маршруту к месту назначения.',
    s5: 'Отсканируйте QR-код места для информации или оплаты.',
    placesT: 'Места для посещения в Туркестане',
    payT: 'Оплата через Kaspi',
    tapqr: 'Нажмите на QR-код для оплаты',
    route: 'Маршрут и координаты появятся здесь.',
    unset: 'Координаты еще не настроены',
    sample: 'Пример контента: можно редактировать',
    addr: 'Адрес: уточняйте на стойке регистрации',
    details: 'Подробнее об отеле',

    guideRole: 'Официальный сертифицированный гид-историк',
    guideBioTitle: 'О гиде',
    guideBioText: 'Родившись и выросши в Туркестане, Димаш более 8 лет знакомит путешественников со всего мира с духовным сердцем Казахстана, архитектурой эпохи Тимуридов и караванными путями Великого шелкового пути. Диплом историка и официальная сертификация позволяют ему соединять академическую точность с увлекательными преданиями и уютными остановками в самобытных чайханах.',
    guideLanguagesTitle: 'Языки проведения экскурсий',
    guideExpertiseTitle: 'Специализация и области знаний',
    guideToursTitle: 'Доступные туры и маршруты',
    guideReviewsTitle: 'Отзывы путешественников',
    guideReviewsDemo: 'Демо-отзывы (Пример данных)',
    guideContactWhatsApp: 'Написать в WhatsApp',
    guideBookTour: 'Забронировать тур (Демо)',
    guideVerified: 'Официальный сертифицированный гид',
    guideExp: '8+ лет опыта',
    guideRating: 'Рейтинг: 4.98 / 5.0',
    guideToursDone: 'Более 500 экскурсий',
    tourInquire: 'Уточнить в WhatsApp',
    guideModalTitle: 'Бронирование туров (Демо-режим)',
    guideModalText: 'Система онлайн-бронирования сейчас работает в демонстрационном режиме. Чтобы выбрать дату, согласовать индивидуальный маршрут или забронировать тур, напишите гиду напрямую в WhatsApp.',
    guideModalClose: 'Закрыть',

    feedTitle: 'Лента открытий',
    feedSubtitle: 'Интересные места, события и акции (Демо-лента)',
    feedDemoTag: 'Демо-лента',
    feedAll: 'Все',
    feedDining: 'Кафе и еда',
    feedEvents: 'События',
    feedPlaces: 'Места',
    feedOffers: 'Акции',
    feedActivities: 'Активности',
    feedSponsored: 'Реклама',

    footerTagline: 'Ваш персональный цифровой путеводитель по духовному и культурному наследию Туркестана.',
    footerQuickLinks: 'Навигация',
    footerSocialTitle: 'QONAQ в соцсетях',
    footerSocialNote: 'Настраивается в script.js',
    footerContactTitle: 'Контакты и связь',
    footerNotConfigured: 'Не настроено',
    footerRights: 'Все права защищены.',
    footerLocation: 'г. Туркестан, Республика Казахстан',
    footerAboutLink: 'О проекте QONAQ'
  },

  tr: {
    home: 'Ana sayfa',
    places: 'Yerler',
    hotels: 'Oteller',
    guide: 'Rehber',
    travelGuide: 'Seyahat Rehberi',
    about: 'Nasıl çalışır',
    welcome: 'Türkistan’a hoş geldiniz. Dilinizi seçin ve tarihi yerleri keşfedin.',
    explore: 'Türkistan’ı keşfet',
    back: '← Geri',
    view: 'Yeri gör',
    how: 'Nasıl gidilir',
    more: 'Diğer diller',
    less: 'Daha az dil',
    where: 'Neredesiniz / Nereye gideceksiniz',
    start: 'Başlangıç',
    dest: 'Varış noktası',
    payI: 'Kaspi uygulamasını açın ve bu QR kodu okutun.',
    s1: 'Turizm afişindeki QR kodu okutun.',
    s2: 'Dilinizi seçin.',
    s3: 'Tarihi bir yer veya otel seçin.',
    s4: 'Rotayı takip edin.',
    s5: 'Bilgi veya ödeme için QR kodu okutun.',
    placesT: 'Gezilecek yerler',
    payT: 'Kaspi ile öde',
    tapqr: 'Ödemek için QR koda dokunun',
    route: 'Rota bilgisi burada görünecektir.',
    unset: 'Koordinatlar henüz ayarlanmadı',
    sample: 'Düzenlenebilir demo içerik',
    addr: 'Adres: Resepsiyonda mevcut',
    details: 'Otel ayrıntıları',
    guideRole: 'Resmi Sertifikalı Rehber ve Tarihçi',
    guideBioTitle: 'Rehberiniz Hakkında',
    guideBioText: 'Türkistan’da doğup büyüyen Dimash, 8 yılı aşkın süredir gezginlere İpek Yolu ve Yesevi mirasını tanıtmaktadır.',
    guideLanguagesTitle: 'Konuşulan Diller',
    guideExpertiseTitle: 'Uzmanlık Alanları',
    guideToursTitle: 'Mevcut Turlar ve Rotalar',
    guideReviewsTitle: 'Gezgin Yorumları',
    guideReviewsDemo: 'Örnek Yorumlar (Demo)',
    guideContactWhatsApp: 'WhatsApp’tan İletişime Geç',
    guideBookTour: 'Tur Ayırt (Demo)',
    guideVerified: 'Sertifikalı Rehber',
    guideExp: '8+ Yıl Deneyim',
    guideRating: 'Puan: 4.98 / 5.0',
    guideToursDone: '500+ Tur',
    tourInquire: 'WhatsApp’tan Sor',
    guideModalTitle: 'Tur Rezervasyonu (Demo)',
    guideModalText: 'Rezervasyon sistemi demo modundadır. Bilgi almak için lütfen doğrudan WhatsApp üzerinden iletişime geçin.',
    guideModalClose: 'Kapat',
    feedTitle: 'Keşif Akışı',
    feedSubtitle: 'Güncel yerel haberler ve öneriler (Demo)',
    feedDemoTag: 'Demo Akış',
    feedAll: 'Tümü',
    feedDining: 'Yeme-İçme',
    feedEvents: 'Etkinlikler',
    feedPlaces: 'Yerler',
    feedOffers: 'Fırsatlar',
    feedActivities: 'Aktiviteler',
    feedSponsored: 'Sponsorlu',
    footerTagline: 'Türkistan’ın manevi ve kültürel mirasına açılan dijital kapınız.',
    footerQuickLinks: 'Bağlantılar',
    footerSocialTitle: 'Sosyal Medya',
    footerSocialNote: 'script.js içinde yapılandırılır',
    footerContactTitle: 'İletişim',
    footerNotConfigured: 'Yapılandırılmadı',
    footerRights: 'Tüm hakları saklıdır.',
    footerLocation: 'Türkistan, Kazakistan Cumhuriyeti',
    footerAboutLink: 'Hakkında'
  },

  uz: {
    home: 'Bosh sahifa',
    places: 'Joylar',
    hotels: 'Mehmonxonalar',
    guide: 'Gid',
    travelGuide: 'Yo‘l ko‘rsatkich',
    about: 'Qanday ishlaydi',
    welcome: 'Turkistonga xush kelibsiz. Tilni tanlang va tarixiy joylarni kashf eting.',
    explore: 'Turkistonni kashf eting',
    back: '← Orqaga',
    view: 'Joyni ko‘rish',
    how: 'Qanday borish mumkin',
    more: 'Boshqa tillar',
    less: 'Kamroq tillar',
    where: 'Siz qayerdasiz / Qayerga borish kerak',
    start: 'Boshlanish',
    dest: 'Manzil',
    payI: 'Kaspi ilovasini oching va ushbu QR kodni skanerlang.',
    s1: 'Turizm bannerdagi QR kodni skanerlang.',
    s2: 'Tilni tanlang.',
    s3: 'Tarixiy joy yoki mehmonxonani tanlang.',
    s4: 'Marshrut bo‘yicha boring.',
    s5: 'Ma’lumot yoki to‘lov uchun QR kodni skanerlang.',
    placesT: 'Borish mumkin bo‘lgan joylar',
    payT: 'Kaspi bilan to‘lash',
    tapqr: 'To‘lash uchun QR kodni bosing',
    route: 'Marshrut ma’lumotlari bu yerda ko‘rinadi.',
    unset: 'Koordinatalar sozlanmagan',
    sample: 'Namuna matn',
    addr: 'Manzil: Qabulxonada',
    details: 'Mehmonxona tafsilotlari',
    guideRole: 'Rasmiy sertifikatlangan gid va tarixchi',
    guideBioTitle: 'Gid haqida',
    guideBioText: 'Alisher 8 yildan ortiq vaqt davomida sayyohlarga Turkiston tarixi va Yassaviy merosini tanishtirib kelmoqda.',
    guideLanguagesTitle: 'So‘zlashadigan tillari',
    guideExpertiseTitle: 'Mutaxassislik yo‘nalishlari',
    guideToursTitle: 'Mavjud turlar va marshrutlar',
    guideReviewsTitle: 'Sayyohlar fikrlari',
    guideReviewsDemo: 'Demo sharhlar',
    guideContactWhatsApp: 'WhatsApp orqali bog‘lanish',
    guideBookTour: 'Turni band qilish (Demo)',
    guideVerified: 'Sertifikatlangan gid',
    guideExp: '8+ yil tajriba',
    guideRating: 'Reyting: 4.98 / 5.0',
    guideToursDone: '500+ ekskursiya',
    tourInquire: 'WhatsApp orqali so‘rash',
    guideModalTitle: 'Turni band qilish (Demo)',
    guideModalText: 'Bron qilish tizimi sinov rejimida. Iltimos, to‘g‘ridan-to‘g‘ri WhatsApp orqali bog‘laning.',
    guideModalClose: 'Yopish',
    feedTitle: 'Yangiliklar va kashfiyotlar',
    feedSubtitle: 'Mahalliy tavsiyalar va xabarlar (Demo)',
    feedDemoTag: 'Demo oqim',
    feedAll: 'Barchasi',
    feedDining: 'Oshxonalar',
    feedEvents: 'Tadbirlar',
    feedPlaces: 'Joylar',
    feedOffers: 'Takliflar',
    feedActivities: 'Faoliyatlar',
    feedSponsored: 'Homiylik',
    footerTagline: 'Turkistonning ma’naviy va madaniy merosiga yo‘l ko‘rsatuvchi raqamli gid.',
    footerQuickLinks: 'Bo‘limlar',
    footerSocialTitle: 'Ijtimoiy tarmoqlar',
    footerSocialNote: 'script.js da sozlanadi',
    footerContactTitle: 'Bog‘lanish',
    footerNotConfigured: 'Sozlanmagan',
    footerRights: 'Barcha huquqlar himoyalangan.',
    footerLocation: 'Turkiston shahri, Qozog‘iston',
    footerAboutLink: 'Loyiha haqida'
  },

  ar: {
    home: 'الرئيسية',
    places: 'الأماكن',
    hotels: 'الفنادق',
    guide: 'دليل',
    travelGuide: 'دليل السفر',
    about: 'كيف يعمل',
    welcome: 'مرحباً بك في تركستان. اختر لغتك وابدأ باستكشاف المواقع التاريخية.',
    explore: 'استكشف تركستان',
    back: 'رجوع ←',
    view: 'عرض المكان',
    how: 'كيفية الوصول',
    more: 'لغات أخرى',
    less: 'لغات أقل',
    where: 'أين أنت / إلى أين تذهب',
    start: 'البداية',
    dest: 'الوجهة',
    payI: 'افتح تطبيق Kaspi وامسح رمز QR هذا.',
    s1: 'امسح رمز QR على لافتة السياحة.',
    s2: 'اختر لغتك المفضلة.',
    s3: 'اختر مكاناً تاريخياً أو فندقاً.',
    s4: 'اتبع المسار إلى الوجهة.',
    s5: 'امسح رمز QR للمعلومات أو الدفع.',
    placesT: 'أماكن للزيارة',
    payT: 'الدفع عبر Kaspi',
    tapqr: 'اضغط على رمز QR للدفع',
    route: 'ستظهر تفاصيل المسار هنا.',
    unset: 'لم يتم تكوين الإحداثيات بعد',
    sample: 'محتوى تجريبي قابل للتعديل',
    addr: 'العنوان: في مكتب الاستقبال',
    details: 'تفاصيل الفندق',
    guideRole: 'مرشد سياحي معتمد ومؤرخ',
    guideBioTitle: 'عن المرشد',
    guideBioText: 'علي شير متخصص في تاريخ تركستان والتراث التيموري بخبرة تفوق 8 سنوات.',
    guideLanguagesTitle: 'اللغات',
    guideExpertiseTitle: 'مجالات الخبرة',
    guideToursTitle: 'الجولات المتاحة والمسارات',
    guideReviewsTitle: 'آراء الزوار',
    guideReviewsDemo: 'آراء تجريبية (بيانات نموذجية)',
    guideContactWhatsApp: 'تواصل عبر واتساب',
    guideBookTour: 'حجز جولة (تجريبي)',
    guideVerified: 'مرشد سياحي معتمد',
    guideExp: 'خبرة +8 سنوات',
    guideRating: 'التقييم: 4.98 / 5.0',
    guideToursDone: '+500 جولة',
    tourInquire: 'استفسر عبر واتساب',
    guideModalTitle: 'حجز جولة (تجريبي)',
    guideModalText: 'نظام الحجز الآلي في مرحلة تجريبية. يُرجى التواصل مباشرة عبر واتساب.',
    guideModalClose: 'إغلاق',
    feedTitle: 'اكتشافات وأخبار',
    feedSubtitle: 'أبرز الفعاليات والأماكن المحلية (تجريبي)',
    feedDemoTag: 'بث تجريبي',
    feedAll: 'الكل',
    feedDining: 'مطاعم',
    feedEvents: 'فعاليات',
    feedPlaces: 'أماكن',
    feedOffers: 'عروض',
    feedActivities: 'أنشطة',
    feedSponsored: 'إعلان',
    footerTagline: 'بوابتك الرقمية إلى التراث الروحي والثقافي لمدينة تركستان.',
    footerQuickLinks: 'التنقل',
    footerSocialTitle: 'وسائل التواصل',
    footerSocialNote: 'يمكن ضبطه في script.js',
    footerContactTitle: 'الاتصال',
    footerNotConfigured: 'غير مهيأ',
    footerRights: 'جميع الحقوق محفوظة.',
    footerLocation: 'تركستان، جمهورية كازاخستان',
    footerAboutLink: 'عن التطبيق'
  },

  zh: {
    home: '首页',
    places: '景点',
    hotels: '酒店',
    guide: '导游',
    travelGuide: '旅行指南',
    about: '使用方法',
    welcome: '欢迎来到突厥斯坦。选择语言，开始探索历史古迹与灿烂文化。',
    explore: '探索突厥斯坦',
    back: '← 返回',
    view: '查看景点',
    how: '如何前往',
    more: '更多语言',
    less: '收起语言',
    where: '你的位置 / 目的地',
    start: '起点',
    dest: '目的地',
    payI: '打开 Kaspi 应用并扫描此二维码付款。',
    s1: '扫描旅游横幅上的二维码。',
    s2: '选择你的语言。',
    s3: '选择一个历史景点或酒店。',
    s4: '沿路线前往目的地。',
    s5: '扫描目的地二维码获取信息或付款。',
    placesT: '推荐景点',
    payT: '使用 Kaspi 付款',
    tapqr: '点击二维码付款',
    route: '路线指引将在此显示。',
    unset: '尚未配置坐标',
    sample: '示例内容（可编辑）',
    addr: '地址：向前台咨询',
    details: '查看酒店详情',
    guideRole: '突厥斯坦官方认证文化遗产导游与历史学者',
    guideBioTitle: '导游简介',
    guideBioText: '阿里舍尔生长于圣城突厥斯坦，深耕中亚历史与古丝路文化解说逾8年。',
    guideLanguagesTitle: '服务语言',
    guideExpertiseTitle: '专业领域与知识',
    guideToursTitle: '推荐行程与路线',
    guideReviewsTitle: '游客评价',
    guideReviewsDemo: '演示评价（示例数据）',
    guideContactWhatsApp: '在 WhatsApp 联系',
    guideBookTour: '预约行程（演示）',
    guideVerified: '官方认证导游',
    guideExp: '8年以上经验',
    guideRating: '评分：4.98 / 5.0',
    guideToursDone: '500+ 次带团',
    tourInquire: '通过 WhatsApp 咨询',
    guideModalTitle: '预约行程（演示功能）',
    guideModalText: '在线自动预约模块目前处于演示测试阶段。如需预订日期或定制路线，请直接通过 WhatsApp 联系导游。',
    guideModalClose: '关闭',
    feedTitle: '突厥斯坦发现流',
    feedSubtitle: '精选本地动态与活动指南（演示流）',
    feedDemoTag: '演示流',
    feedAll: '全部',
    feedDining: '美食餐饮',
    feedEvents: '节庆活动',
    feedPlaces: '推荐景点',
    feedOffers: '优惠特惠',
    feedActivities: '体验活动',
    feedSponsored: '赞助推广',
    footerTagline: '通往哈萨克斯坦突厥斯坦精神与文化瑰宝的专属数字指南。',
    footerQuickLinks: '导航',
    footerSocialTitle: '关注 QONAQ',
    footerSocialNote: '可在 script.js 中配置',
    footerContactTitle: '联系与咨询',
    footerNotConfigured: '未配置',
    footerRights: '版权所有。',
    footerLocation: '哈萨克斯坦共和国突厥斯坦市',
    footerAboutLink: '关于 QONAQ'
  },

  ko: {
    home: '홈',
    places: '명소',
    hotels: '호텔',
    guide: '가이드',
    travelGuide: '여행 가이드',
    about: '이용 방법',
    welcome: '투르키스탄에 오신 것을 환영합니다. 언어를 선택하고 역사 유적을 둘러보세요.',
    explore: '투르키스탄 탐험',
    back: '← 뒤로',
    view: '장소 보기',
    how: '가는 방법',
    more: '더 많은 언어',
    less: '언어 줄이기',
    where: '현재 위치 / 목적지',
    start: '출발',
    dest: '목적지',
    payI: 'Kaspi 앱을 열고 이 QR 코드를 스캔하세요.',
    s1: '관광 배너의 QR 코드를 스캔하세요.',
    s2: '언어를 선택하세요.',
    s3: '역사 명소 또는 호텔을 선택하세요.',
    s4: '경로를 따라 목적지로 가세요.',
    s5: '목적지의 QR 코드를 스캔해 정보나 결제를 확인하세요.',
    placesT: '투르키스탄 방문지',
    payT: 'Kaspi 결제',
    tapqr: '결제하려면 QR 코드를 누르세요',
    route: '경로 및 방향이 여기에 표시됩니다.',
    unset: '좌표 미설정',
    sample: '수정 가능한 샘플 콘텐츠',
    addr: '주소: 프런트 데스크 문의',
    details: '호텔 상세 보기',
    guideRole: '공식 인증 문화유산 전문 가이드 & 역사가',
    guideBioTitle: '가이드 소개',
    guideBioText: '투르키스탄 출신의 알리셰르는 8년 이상 전 세계 여행자들에게 카자흐스탄의 영적 유산과 실크로드 역사를 소개해 왔습니다.',
    guideLanguagesTitle: '구사 언어',
    guideExpertiseTitle: '전문 지식 분야',
    guideToursTitle: '추천 투어 및 코스',
    guideReviewsTitle: '여행자 후기',
    guideReviewsDemo: '데모 후기 (샘플 데이터)',
    guideContactWhatsApp: 'WhatsApp 문의하기',
    guideBookTour: '투어 예약 (데모)',
    guideVerified: '공식 인증 가이드',
    guideExp: '8년 이상 경력',
    guideRating: '평점: 4.98 / 5.0',
    guideToursDone: '500회 이상 투어 진행',
    tourInquire: 'WhatsApp으로 문의',
    guideModalTitle: '투어 예약 (데모 모드)',
    guideModalText: '온라인 자동 예약 시스템은 현재 데모 모드입니다. 일정 조율 및 예약은 WhatsApp을 통해 가이드에게 직접 문의해 주세요.',
    guideModalClose: '닫기',
    feedTitle: '투르키스탄 디스커버리',
    feedSubtitle: '엄선된 로컬 소식 및 명소 피드 (데모)',
    feedDemoTag: '데모 피드',
    feedAll: '전체',
    feedDining: '맛집/다이닝',
    feedEvents: '이벤트',
    feedPlaces: '명소',
    feedOffers: '특가/혜택',
    feedActivities: '체험 활동',
    feedSponsored: '스폰서',
    footerTagline: '카자흐스탄 투르키스탄의 정신적·문화적 유산으로 향하는 디지털 관문.',
    footerQuickLinks: '바로가기',
    footerSocialTitle: '소셜 미디어',
    footerSocialNote: 'script.js 에서 설정 가능',
    footerContactTitle: '문의처',
    footerNotConfigured: '미설정',
    footerRights: 'All rights reserved.',
    footerLocation: '카자흐스탄 공화국 투르키스탄',
    footerAboutLink: 'QONAQ 소개'
  },

  ja: {
    home: 'ホーム',
    places: '名所',
    hotels: 'ホテル',
    guide: 'ガイド',
    travelGuide: '旅行ガイド',
    about: '使い方',
    welcome: 'トルキスタンへようこそ。言語を選んで歴史的名所を巡りましょう。',
    explore: 'トルキスタンを探索',
    back: '← 戻る',
    view: '場所を見る',
    how: '行き方',
    more: 'その他の言語',
    less: '言語を閉じる',
    where: '現在地 / 目的地',
    start: '出発地',
    dest: '目的地',
    payI: 'Kaspiアプリを開き、このQRコードをスキャンしてください。',
    s1: '観光バナーのQRコードをスキャン。',
    s2: '言語を選択。',
    s3: '歴史的な場所またはホテルを選択。',
    s4: 'ルートに沿って目的地へ。',
    s5: '目的地のQRコードで情報や支払いへ。',
    placesT: '訪れる場所',
    payT: 'Kaspiで支払う',
    tapqr: 'QRコードをタップして支払う',
    route: 'ルート情報がここに表示されます。',
    unset: '座標未設定',
    sample: '編集可能なサンプル内容',
    addr: '住所：フロントでお尋ねください',
    details: 'ホテル詳細を見る',
    guideRole: '公式認定文化遺産専門ガイド・歴史家',
    guideBioTitle: 'ガイドについて',
    guideBioText: 'トルキスタン生まれのアリシェルは、8年以上にわたり世界中の旅人にシルクロードの精神と遺産を伝えています。',
    guideLanguagesTitle: '対応言語',
    guideExpertiseTitle: '専門知識分野',
    guideToursTitle: 'ご案内ツアーとおすすめルート',
    guideReviewsTitle: '旅行者のレビュー',
    guideReviewsDemo: 'デモレビュー（サンプル）',
    guideContactWhatsApp: 'WhatsAppで問い合わせる',
    guideBookTour: 'ツアーを予約（デモ）',
    guideVerified: '公認ガイド',
    guideExp: '経験8年以上',
    guideRating: '評価：4.98 / 5.0',
    guideToursDone: '500回以上の案内実績',
    tourInquire: 'WhatsAppで相談',
    guideModalTitle: 'ツアー予約（デモ機能）',
    guideModalText: '現在オンライン予約はデモ運用中です。日程の確認やご予約はWhatsAppにて直接ガイドまでご連絡ください。',
    guideModalClose: '閉じる',
    feedTitle: 'ディスカバリーフィード',
    feedSubtitle: '現地の見どころと最新情報（デモ）',
    feedDemoTag: 'デモ配信',
    feedAll: 'すべて',
    feedDining: 'グルメ・飲食',
    feedEvents: 'イベント',
    feedPlaces: '名所',
    feedOffers: 'お得情報',
    feedActivities: '体験',
    feedSponsored: 'スポンサー',
    footerTagline: 'カザフスタン・トルキスタンの文化的・精神的遺産へのデジタルゲートウェイ。',
    footerQuickLinks: 'ナビゲーション',
    footerSocialTitle: '公式SNS',
    footerSocialNote: 'script.js で設定可能',
    footerContactTitle: 'お問い合わせ',
    footerNotConfigured: '未設定',
    footerRights: '無断転載を禁じます。',
    footerLocation: 'カザフスタン共和国トルキスタン',
    footerAboutLink: 'QONAQについて'
  },

  fr: {
    home: 'Accueil',
    places: 'Lieux',
    hotels: 'Hôtels',
    guide: 'Guide',
    travelGuide: 'Guide de voyage',
    about: 'Comment ça marche',
    welcome: 'Bienvenue à Turkestan. Choisissez votre langue et explorez ses sites sacrés et son histoire.',
    explore: 'Explorer Turkestan',
    back: '← Retour',
    view: 'Voir le lieu',
    how: 'Comment s’y rendre',
    more: 'Plus de langues',
    less: 'Moins de langues',
    where: 'Où vous êtes / Où aller',
    start: 'Départ',
    dest: 'Destination',
    payI: 'Ouvrez l’application Kaspi et scannez ce QR code pour payer.',
    s1: 'Scannez le QR code de la bannière touristique.',
    s2: 'Choisissez votre langue.',
    s3: 'Sélectionnez un lieu historique ou un hôtel.',
    s4: 'Suivez l’itinéraire jusqu’à la destination.',
    s5: 'Scannez le QR code de la destination pour l’info ou le paiement.',
    placesT: 'Lieux à visiter à Turkestan',
    payT: 'Payer avec Kaspi',
    tapqr: 'Touchez le QR code pour payer',
    route: 'Les directions et coordonnées apparaîtront ici.',
    unset: 'Coordonnées non configurées',
    sample: 'Exemple de contenu modifiable',
    addr: 'Adresse : disponible à la réception',
    details: 'Voir les détails de l’hôtel',
    guideRole: 'Guide officiel certifié du patrimoine et historien',
    guideBioTitle: 'À propos de votre guide',
    guideBioText: 'Né à Turkestan, Alicher guide depuis plus de 8 ans des voyageurs du monde entier sur la Route de la Soie.',
    guideLanguagesTitle: 'Langues parlées',
    guideExpertiseTitle: 'Domaines d’expertise',
    guideToursTitle: 'Circuits disponibles et itinéraires',
    guideReviewsTitle: 'Avis des voyageurs',
    guideReviewsDemo: 'Avis de démonstration (données d’exemple)',
    guideContactWhatsApp: 'Contacter sur WhatsApp',
    guideBookTour: 'Réserver un circuit (Démo)',
    guideVerified: 'Guide officiel certifié',
    guideExp: '8+ ans d’expérience',
    guideRating: 'Note : 4.98 / 5.0',
    guideToursDone: '500+ visites guidées',
    tourInquire: 'Demander sur WhatsApp',
    guideModalTitle: 'Réservation de circuit (Mode démo)',
    guideModalText: 'Le module de réservation est actuellement en démonstration. Pour vérifier les disponibilités ou réserver une date, veuillez contacter le guide directement sur WhatsApp.',
    guideModalClose: 'Fermer',
    feedTitle: 'Fil de découvertes',
    feedSubtitle: 'Actualités et bonnes adresses locales (Démo)',
    feedDemoTag: 'Flux démo',
    feedAll: 'Tous',
    feedDining: 'Gastronomie',
    feedEvents: 'Événements',
    feedPlaces: 'Lieux',
    feedOffers: 'Offres',
    feedActivities: 'Activités',
    feedSponsored: 'Sponsorisé',
    footerTagline: 'Votre passerelle numérique vers le patrimoine spirituel et culturel de Turkestan, Kazakhstan.',
    footerQuickLinks: 'Navigation',
    footerSocialTitle: 'Suivez QONAQ',
    footerSocialNote: 'Configurable dans script.js',
    footerContactTitle: 'Contact et informations',
    footerNotConfigured: 'Non configuré',
    footerRights: 'Tous droits réservés.',
    footerLocation: 'Turkistan, République du Kazakhstan',
    footerAboutLink: 'À propos de QONAQ'
  }
};

/* ==========================================================================
   6. LANGUAGES LIST
   ========================================================================== */
const MAIN = {
  kk: ['Қазақша'],
  ru: ['Русский'],
  en: ['English'],
  tr: ['Türkçe'],
  uz: ['O‘zbekcha'],
  ar: ['العربية', 1],
  zh: ['中文'],
  ko: ['한국어'],
  ja: ['日本語'],
  fr: ['Français']
};

const EXTRA = {
  de: ['Deutsch'],
  es: ['Español'],
  it: ['Italiano'],
  hi: ['हिन्दी'],
  ur: ['اردو', 1],
  pt: ['Português'],
  fa: ['فارسی', 1],
  uk: ['Українська'],
  pl: ['Polski'],
  id: ['Bahasa Indonesia'],
  az: ['Azərbaycanca']
};

const ALL = Object.assign({}, MAIN, EXTRA);

/* ==========================================================================
   7. CORE HELPERS & STATE
   ========================================================================== */
const $ = id => document.getElementById(id);

let lang = 'en';
let moreOpen = false;
let activeFeedCategory = 'all';

const t = k => (T[lang] && T[lang][k]) || (T.en && T.en[k]) || '';
const pick = o => (o && (o[lang] || o.en || Object.values(o)[0])) || '';

const ICON = `
<svg viewBox="0 0 24 24">
  <rect x="3" y="4" width="18" height="16" rx="2"/>
  <circle cx="9" cy="10" r="2"/>
  <path d="M21 17l-5-5-9 8"/>
</svg>`;

const SVG_ICONS = {
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  threads: `<svg viewBox="0 0 24 24"><path d="M12.186 24h-.007C5.459 23.957 0 18.602 0 12.002 0 5.373 5.467 0 12.186 0c3.543 0 6.84 1.494 9.176 4.152l-2.454 2.217C17.15 4.39 14.777 3.24 12.186 3.24c-4.908 0-8.91 3.931-8.91 8.762 0 4.829 4.002 8.76 8.91 8.76 3.493 0 6.438-1.782 7.787-4.634.428-.905.674-1.905.728-2.955H12.186v-3.24h11.75c.041.52.064 1.048.064 1.583 0 3.328-1.143 6.372-3.23 8.653C18.675 22.473 15.58 24 12.186 24z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`
};

/* ==========================================================================
   8. IMAGE PLACEHOLDERS & HYDRATION
   ========================================================================== */
function ph(src, label, cls) {
  return `
    <div class="ph ${cls}" data-src="${src}" data-label="${label}">
      ${ICON}
      <span>${label}</span>
    </div>`;
}

function hydrate(root) {
  root.querySelectorAll('[data-src]').forEach(box => {
    const p = new Image();
    p.onload = () => {
      box.classList.add('has-img');
      box.innerHTML = '';
      p.alt = box.dataset.label;
      box.appendChild(p);
    };
    p.src = box.dataset.src;
  });
}

/* ==========================================================================
   9. HOME SCREEN LANGUAGE PANEL
   ========================================================================== */
const MORE_LABEL = 'Подробнее / More languages / Басқа тілдер';

const langBtn = c => `
  <button class="lbtn${c === lang ? ' on' : ''}" data-lang="${c}" lang="${c}">
    ${ALL[c][0]}
  </button>`;

function langPanel() {
  return `
    <div class="langpanel" role="group" aria-label="Language selection">
      <div class="langgrid">
        ${Object.keys(MAIN).map(langBtn).join('')}
      </div>
      <button class="morebtn" data-more aria-expanded="${moreOpen}">
        ${MORE_LABEL} ${moreOpen ? '▴' : '▾'}
      </button>
      <div class="langgrid extra" ${moreOpen ? '' : 'hidden'}>
        ${Object.keys(EXTRA).map(langBtn).join('')}
      </div>
    </div>`;
}

/* ==========================================================================
   10. SCREENS RENDERERS
   ========================================================================== */
const back = '<button class="backbtn" data-back></button>';


/* ==========================================================================
   EDITORIAL TRAVEL GUIDE RENDERING & INTERACTIVE WIDGETS
   ========================================================================== */
function renderTravelGuide(activeChapterId) {
  const g = typeof KAZAKHSTAN_TRAVEL_GUIDE !== 'undefined'
    ? KAZAKHSTAN_TRAVEL_GUIDE
    : (typeof window !== 'undefined' && window.KAZAKHSTAN_TRAVEL_GUIDE ? window.KAZAKHSTAN_TRAVEL_GUIDE : null);
  if (!g) {
    return `
      <section class="screen">
        ${back}
        <h2>${t('guide')}</h2>
        <p>Travel Guide content is loading...</p>
      </section>`;
  }

  return `
    <article class="screen guide-article-wrap" id="travelGuideTop">
      ${back}

      <!-- Magazine Hero Banner -->
      <header class="guide-hero">
        <span class="guide-edition-badge">${g.meta.edition}</span>
        <h1 class="guide-hero-title">${g.meta.heroTitle}</h1>
        <p class="guide-hero-subtitle">${g.meta.heroSubtitle}</p>
        <div class="guide-advisory-alert">
          <strong>ℹ️ Advisory Note:</strong> ${g.meta.advisoryNotice}
        </div>
      </header>

      <!-- Qonaq Definition & Steppe Hospitality -->
      <section class="guide-qonaq-card">
        <h3>${g.intro.qonaqTitle}</h3>
        <p class="guide-qonaq-quote">“${g.intro.qonaqDefinition}”</p>
        <p class="guide-qonaq-text">${g.intro.hospitalityText}</p>
      </section>

      <!-- Compact Quick Facts Grid -->
      <section class="guide-facts-strip">
        ${g.quickFacts.map(f => `
          <div class="guide-fact-box">
            <span class="guide-fact-icon">${f.icon}</span>
            <div>
              <div class="guide-fact-label">${f.label}</div>
              <div class="guide-fact-val">${f.value}</div>
            </div>
          </div>
        `).join('')}
      </section>

      <!-- Sticky Chapter Navigation Menu -->
      <nav class="guide-toc-nav" aria-label="Travel Guide Chapters">
        <div class="guide-toc-scroll">
          ${g.chapters.map(ch => `
            <a href="#travel-guide/${ch.id}" class="guide-toc-pill${activeChapterId === ch.id ? ' active' : ''}" data-ch="${ch.id}">
              ${ch.navLabel}
            </a>
          `).join('')}
        </div>
      </nav>

      <!-- CHAPTER 1: Before You Land -->
      <section class="guide-chapter-section" id="ch-before-you-land">
        <div class="guide-ch-header">
          <span class="guide-ch-num">${g.chapters[0].number}</span>
          <h2 class="guide-ch-title">${g.chapters[0].title}</h2>
          <p class="guide-ch-summary">${g.chapters[0].summary}</p>
        </div>

        <h3 class="guide-subheading">📱 Essential Smartphone Apps</h3>
        <p class="guide-p">Download these before departing. Having 2GIS and Yandex Go ready on your home screen turns arriving in Kazakhstan into a smooth, effortless experience:</p>

        <div class="guide-apps-grid">
          ${g.chapters[0].contentSections[0].items.map(app => `
            <div class="guide-app-card">
              <div class="guide-app-top">
                <span class="guide-app-cat">${app.category}</span>
                ${app.url ? `<a href="${app.url}" target="_blank" rel="noopener noreferrer" class="guide-app-link">Official Site ↗</a>` : ''}
              </div>
              <h4 class="guide-app-name">${app.name}</h4>
              <p class="guide-app-desc">${app.desc}</p>
              ${app.tip ? `<div class="guide-app-tip">💡 <strong>Tip:</strong> ${app.tip}</div>` : ''}
            </div>
          `).join('')}
        </div>

        <h3 class="guide-subheading">📶 Mobile Internet & e-SIMs</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:14px;margin-bottom:18px;">
          ${g.chapters[0].contentSections[1].options.map(opt => `
            <div style="background:var(--sand-light);border:1px solid var(--line);border-radius:var(--radius-md);padding:16px;">
              <h5 style="color:var(--deep);font-weight:700;margin-bottom:6px;">${opt.title}</h5>
              <p style="color:var(--ink-soft);font-size:0.92rem;line-height:1.5;">${opt.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="guide-callout">
          <div class="guide-callout-title">💡 ${g.chapters[0].contentSections[1].callout.title}</div>
          <p>${g.chapters[0].contentSections[1].callout.text}</p>
        </div>
      </section>

      <!-- CHAPTER 2: Landing & Airports -->
      <section class="guide-chapter-section" id="ch-landing">
        <div class="guide-ch-header">
          <span class="guide-ch-num">${g.chapters[1].number}</span>
          <h2 class="guide-ch-title">${g.chapters[1].title}</h2>
          <p class="guide-ch-summary">${g.chapters[1].summary}</p>
        </div>

        <h3 class="guide-subheading">🚨 The Airport Taxi Trap (Read Carefully)</h3>
        <p class="guide-p">${g.chapters[1].contentSections[0].text}</p>
        <ul style="margin:12px 0 20px 20px;color:var(--ink-soft);font-size:0.95rem;line-height:1.6;">
          ${g.chapters[1].contentSections[0].warnings.map(w => `<li style="margin-bottom:6px;">${w}</li>`).join('')}
        </ul>

        <h3 class="guide-subheading">📊 Standard Airport Taxi Benchmarks (August 2026)</h3>
        <div class="guide-data-table-wrap">
          <table class="guide-data-table">
            <thead>
              <tr>
                <th>Airport</th>
                <th>Distance to Center</th>
                <th>Standard App Taxi</th>
                <th>Peak Surge / Storm</th>
                <th>Common Scam Quote</th>
              </tr>
            </thead>
            <tbody>
              ${g.chapters[1].contentSections[1].benchmarks.map(b => `
                <tr>
                  <td><strong>${b.airport}</strong></td>
                  <td>${b.distance}</td>
                  <td><span style="color:#1e7e43;font-weight:700">${b.appFareRange}</span></td>
                  <td>${b.surgeFareRange}</td>
                  <td><span style="color:#922b21;font-weight:700">${b.scamQuote}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Interactive Taxi Quote Checker Tool -->
        <div class="tool-widget-card" id="taxiQuoteWidget">
          <div class="tool-widget-badge">Interactive Checker</div>
          <h4>🚕 Airport Taxi Quote Reality Checker</h4>
          <p class="guide-p" style="margin-bottom:16px;">Test any quoted fare from an airport driver to immediately check if it is within reasonable market range or a classic overcharge scam.</p>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;margin-bottom:12px;">
            <div class="tool-input-group">
              <label for="taxiAirportSelect">Select Arrival Airport:</label>
              <select id="taxiAirportSelect">
                <option value="ALA" selected>Almaty International (ALA) → City Center</option>
                <option value="NQZ">Astana Nursultan Nazarbayev (NQZ) → Left Bank</option>
              </select>
            </div>
            <div class="tool-input-group">
              <label for="taxiFareInput">Quoted Price in Tenge (₸):</label>
              <input type="number" id="taxiFareInput" value="5000" min="0" step="500" placeholder="e.g. 5000">
            </div>
          </div>

          <div class="quick-presets">
            <span style="font-size:0.8rem;color:var(--ink-muted);font-weight:600">Quick Test Presets:</span>
            <button type="button" class="preset-btn" data-preset="4500">4,500 ₸ (Fair)</button>
            <button type="button" class="preset-btn" data-preset="8000">8,000 ₸ (Surge)</button>
            <button type="button" class="preset-btn" data-preset="25000">25,000 ₸ (Scam)</button>
            <button type="button" class="preset-btn" data-preset="50000">50,000 ₸ (Scam)</button>
          </div>

          <button type="button" class="btn" id="checkTaxiQuoteBtn">
            🔍 Check Quoted Fare
          </button>

          <div id="taxiQuoteVerdictBox" class="taxi-verdict-box" style="margin-top:16px;"></div>

          <p style="margin-top:12px;font-size:0.78rem;color:var(--ink-muted);line-height:1.4;">
            ℹ️ <em>Disclaimer: Estimates are illustrative benchmarks based on August 2026 Yandex Go averages. Live fares vary with real-time weather, traffic, and vehicle tier. This does not constitute a guaranteed fare.</em>
          </p>
        </div>

        <h3 class="guide-subheading">🚌 Airport Public Bus Connections</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:14px;margin-bottom:18px;">
          ${g.chapters[1].contentSections[2].buses.map(bus => `
            <div style="background:var(--sand-light);border:1px solid var(--line);border-radius:var(--radius-md);padding:16px;">
              <h5 style="color:var(--deep);font-weight:700;margin-bottom:4px;">${bus.city}</h5>
              <p style="color:var(--ink);font-size:0.9rem;margin-bottom:6px;"><strong>Routes:</strong> ${bus.routes}</p>
              <p style="color:var(--ink-soft);font-size:0.85rem;margin-bottom:4px;"><strong>Frequency:</strong> ${bus.frequency}</p>
              <p style="color:#1e7e43;font-size:0.85rem;font-weight:700;"><strong>Fare:</strong> ${bus.fare}</p>
            </div>
          `).join('')}
        </div>

        <div class="guide-callout">
          <div class="guide-callout-title">📋 ${g.chapters[1].contentSections[2].callout.title}</div>
          <p>${g.chapters[1].contentSections[2].callout.text}</p>
        </div>
      </section>

      <!-- CHAPTER 3: Paying & Money -->
      <section class="guide-chapter-section" id="ch-paying">
        <div class="guide-ch-header">
          <span class="guide-ch-num">${g.chapters[2].number}</span>
          <h2 class="guide-ch-title">${g.chapters[2].title}</h2>
          <p class="guide-ch-summary">${g.chapters[2].summary}</p>
        </div>

        <h3 class="guide-subheading">💳 Cashless Dominance & Card Acceptance</h3>
        <p class="guide-p">${g.chapters[2].contentSections[0].text}</p>
        <ul style="margin:10px 0 20px 20px;color:var(--ink-soft);font-size:0.95rem;line-height:1.6;">
          ${g.chapters[2].contentSections[0].points.map(p => `<li>${p}</li>`).join('')}
        </ul>

        <h3 class="guide-subheading">💵 When You Still Need Physical Cash</h3>
        <p class="guide-p">${g.chapters[2].contentSections[1].text}</p>
        <ul style="margin:10px 0 20px 20px;color:var(--ink-soft);font-size:0.95rem;line-height:1.6;">
          ${g.chapters[2].contentSections[1].cashScenarios.map(s => `<li>${s}</li>`).join('')}
        </ul>

        <h3 class="guide-subheading">💱 Currency Exchange & Tipping Customs</h3>
        <p class="guide-p">${g.chapters[2].contentSections[2].text}</p>
        <ul style="margin:10px 0 16px 20px;color:var(--ink-soft);font-size:0.95rem;line-height:1.6;">
          ${g.chapters[2].contentSections[2].tips.map(t => `<li>${t}</li>`).join('')}
        </ul>
        <p class="guide-p">${g.chapters[2].contentSections[3].text}</p>

        <!-- Interactive Tenge Currency Converter Tool -->
        <div class="tool-widget-card" id="currencyConverterWidget">
          <div class="tool-widget-badge">Interactive Tool</div>
          <h4>₸ Kazakhstani Tenge (KZT) Live Converter</h4>
          <p class="guide-p" style="margin-bottom:16px;">Convert between Tenge and major international currencies. Exchange rates can be customized to match today’s live bureau rate.</p>

          <div class="converter-inputs-row">
            <div class="tool-input-group">
              <label for="converterAmount">Amount to Convert:</label>
              <input type="number" id="converterAmount" value="10000" min="0" step="any">
            </div>
            <div class="tool-input-group">
              <label for="converterBase">Base Currency:</label>
              <select id="converterBase">
                <option value="KZT" selected>KZT (₸ - Kazakhstani Tenge)</option>
                <option value="USD">USD ($ - US Dollar)</option>
                <option value="EUR">EUR (€ - Euro)</option>
                <option value="AED">AED (د.إ - UAE Dirham)</option>
              </select>
            </div>
          </div>

          <div class="converter-rates-bar">
            <span style="font-weight:700;font-size:0.82rem;color:var(--deep)">Editable Rates (1 Foreign Unit = KZT):</span>
            <div class="rate-field">
              <label for="rateUSD">1 USD =</label>
              <input type="number" id="rateUSD" value="500" min="1" step="0.5"> ₸
            </div>
            <div class="rate-field">
              <label for="rateEUR">1 EUR =</label>
              <input type="number" id="rateEUR" value="540" min="1" step="0.5"> ₸
            </div>
            <div class="rate-field">
              <label for="rateAED">1 AED =</label>
              <input type="number" id="rateAED" value="136" min="1" step="0.5"> ₸
            </div>
          </div>

          <div class="converter-outputs-grid" id="converterResults"></div>
        </div>

        <h3 class="guide-subheading">💰 Daily Cost Estimates (August 2026)</h3>
        <div class="guide-data-table-wrap">
          <table class="guide-data-table">
            <thead>
              <tr>
                <th>Travel Style</th>
                <th>Daily Total</th>
                <th>Accommodation</th>
                <th>Food & Dining</th>
                <th>Transport</th>
              </tr>
            </thead>
            <tbody>
              ${g.chapters[2].contentSections[4].costTiers.map(c => `
                <tr>
                  <td><strong>${c.tier}</strong></td>
                  <td><span style="color:var(--gold);font-weight:700">${c.dailyUsd}</span><br><small style="color:var(--ink-muted)">${c.dailyKzt}</small></td>
                  <td>${c.hotel}</td>
                  <td>${c.food}</td>
                  <td>${c.transport}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- CHAPTER 4: Getting Around -->
      <section class="guide-chapter-section" id="ch-getting-around">
        <div class="guide-ch-header">
          <span class="guide-ch-num">${g.chapters[3].number}</span>
          <h2 class="guide-ch-title">${g.chapters[3].title}</h2>
          <p class="guide-ch-summary">${g.chapters[3].summary}</p>
        </div>

        <h3 class="guide-subheading">🚇 City Public Transit</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:14px;margin-bottom:20px;">
          ${g.chapters[3].contentSections[0].modes.map(m => `
            <div style="background:var(--sand-light);border:1px solid var(--line);border-radius:var(--radius-md);padding:16px;">
              <h5 style="color:var(--deep);font-weight:700;margin-bottom:6px;">${m.title}</h5>
              <p style="color:var(--ink-soft);font-size:0.92rem;line-height:1.5;">${m.desc}</p>
            </div>
          `).join('')}
        </div>

        <h3 class="guide-subheading">🚆 Intercity Trains: High-Speed Talgo & Soviet Classics</h3>
        <p class="guide-p">${g.chapters[3].contentSections[1].text}</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:14px;margin-bottom:20px;">
          ${g.chapters[3].contentSections[1].trainTypes.map(tr => `
            <div style="background:var(--sand-light);border:1px solid var(--line);border-radius:var(--radius-md);padding:16px;">
              <h5 style="color:var(--deep);font-weight:700;margin-bottom:6px;">${tr.name}</h5>
              <p style="color:var(--ink-soft);font-size:0.92rem;line-height:1.5;margin-bottom:8px;">${tr.desc}</p>
              <div class="guide-app-tip">💡 <strong>Tip:</strong> ${tr.tip}</div>
            </div>
          `).join('')}
        </div>

        <h3 class="guide-subheading">✈️ Domestic Aviation: Spanning the Steppe</h3>
        <p class="guide-p">${g.chapters[3].contentSections[2].text}</p>
        <ul style="margin:10px 0 20px 20px;color:var(--ink-soft);font-size:0.95rem;line-height:1.6;">
          ${g.chapters[3].contentSections[2].airlines.map(a => `<li><strong>${a.name}:</strong> ${a.desc}</li>`).join('')}
        </ul>

        <h3 class="guide-subheading">🚗 Highway Driving & 4WD Requirements</h3>
        <p class="guide-p">${g.chapters[3].contentSections[3].text}</p>
        <ul style="margin:10px 0 20px 20px;color:var(--ink-soft);font-size:0.95rem;line-height:1.6;">
          ${g.chapters[3].contentSections[3].drivingRules.map(r => `<li>${r}</li>`).join('')}
        </ul>

        <h3 class="guide-subheading">📍 Intercity Distance & Transit Times Table</h3>
        <div class="guide-data-table-wrap">
          <table class="guide-data-table">
            <thead>
              <tr>
                <th>Route Corridor</th>
                <th>Distance</th>
                <th>Flight Duration</th>
                <th>Train (Talgo)</th>
                <th>Road / Highway</th>
              </tr>
            </thead>
            <tbody>
              ${g.chapters[3].contentSections[4].routes.map(r => `
                <tr>
                  <td><strong>${r.fromTo}</strong></td>
                  <td>${r.distance}</td>
                  <td>${r.flight}</td>
                  <td>${r.train}</td>
                  <td>${r.road}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- CHAPTER 5: Where to Go -->
      <section class="guide-chapter-section" id="ch-where-to-go">
        <div class="guide-ch-header">
          <span class="guide-ch-num">${g.chapters[4].number}</span>
          <h2 class="guide-ch-title">${g.chapters[4].title}</h2>
          <p class="guide-ch-summary">${g.chapters[4].summary}</p>
        </div>

        <div class="guide-destinations-list">
          ${g.chapters[4].destinations.map(d => `
            <article class="guide-dest-card" id="${d.id}">
              <div class="guide-dest-media">
                <img src="${d.img}" alt="${d.name}" loading="lazy">
                <span class="guide-dest-time-tag">🗓️ ${d.bestTime}</span>
              </div>
              <div class="guide-dest-body">
                <h3 class="guide-dest-name">${d.name}</h3>
                <div class="guide-dest-sub">${d.subtitle}</div>
                <p class="guide-p">${d.desc}</p>
                <h5 style="color:var(--deep);font-size:0.94rem;font-weight:700;margin-top:10px;">🌟 Key Highlights:</h5>
                <ul class="guide-dest-highlights">
                  ${d.highlights.map(h => `<li>✓ ${h}</li>`).join('')}
                </ul>
                <div class="guide-callout" style="margin-bottom:0">
                  <div class="guide-callout-title">💡 Local Insider Tip</div>
                  <p>${d.tip}</p>
                </div>
                ${d.id === 'dest-turkestan' ? `
                  <div style="margin-top:16px;padding:14px;background:#eef6f8;border:1px solid var(--blue);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
                    <div>
                      <strong style="color:var(--deep);font-size:0.95rem;">Looking for a certified guide in Turkestan?</strong>
                      <div style="font-size:0.85rem;color:var(--ink-soft)">Meet our licensed historian-guide Alisher Nurpeisov for tailored UNESCO tours.</div>
                    </div>
                    <button class="btn whatsapp" data-go="guide" style="font-size:0.85rem;padding:6px 14px;">
                      ${SVG_ICONS.whatsapp}
                      <span>View Guide Profile</span>
                    </button>
                  </div>
                ` : ''}
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- CHAPTER 6: Itineraries -->
      <section class="guide-chapter-section" id="ch-itineraries">
        <div class="guide-ch-header">
          <span class="guide-ch-num">${g.chapters[5].number}</span>
          <h2 class="guide-ch-title">${g.chapters[5].title}</h2>
          <p class="guide-ch-summary">${g.chapters[5].summary}</p>
        </div>

        <div class="guide-itineraries-list">
          ${g.chapters[5].itineraries.map((it, idx) => `
            <article class="guide-itin-card ${idx === 0 ? 'gold-theme' : (idx === 1 ? 'teal-theme' : 'deep-theme')}">
              <div class="guide-itin-header">
                <span class="guide-itin-badge">${it.tag}</span>
                <span style="font-size:0.82rem;font-weight:700;color:var(--deep);">${it.pace}</span>
              </div>
              <h3 class="guide-itin-title">${it.title}</h3>
              <p class="guide-itin-meta"><strong>Ideal for:</strong> ${it.idealFor}</p>

              <div class="guide-itin-days-list">
                ${it.days.map(d => `
                  <div class="guide-itin-day-item">
                    <span class="guide-day-pill">${d.day}</span>
                    <div>
                      <h4 class="guide-day-title">${d.title}</h4>
                      <p class="guide-day-desc">${d.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- Return to Top Floating Link -->
      <a href="#guide" class="guide-back-to-top" title="Return to Top" aria-label="Return to Top">↑</a>
    </article>
  `;
}

function initGuideWidgets() {
  // 1. Currency Converter Handler
  const amtInput = $('converterAmount');
  const baseSelect = $('converterBase');
  const rateUsdInput = $('rateUSD');
  const rateEurInput = $('rateEUR');
  const rateAedInput = $('rateAED');
  const resultsBox = $('converterResults');

  function updateConverter() {
    if (!resultsBox || !amtInput) return;
    const amount = parseFloat(amtInput.value) || 0;
    const base = baseSelect ? baseSelect.value : 'KZT';
    const rateUSD = parseFloat(rateUsdInput ? rateUsdInput.value : 500) || 500;
    const rateEUR = parseFloat(rateEurInput ? rateEurInput.value : 540) || 540;
    const rateAED = parseFloat(rateAedInput ? rateAedInput.value : 136) || 136;

    let kzt = 0;
    if (base === 'KZT') kzt = amount;
    else if (base === 'USD') kzt = amount * rateUSD;
    else if (base === 'EUR') kzt = amount * rateEUR;
    else if (base === 'AED') kzt = amount * rateAED;

    const usdVal = kzt / rateUSD;
    const eurVal = kzt / rateEUR;
    const aedVal = kzt / rateAED;

    resultsBox.innerHTML = `
      <div class="converter-res-card ${base === 'KZT' ? 'highlight' : ''}">
        <div class="converter-res-curr">₸ Tenge (KZT)</div>
        <div class="converter-res-val">${Math.round(kzt).toLocaleString()} ₸</div>
      </div>
      <div class="converter-res-card ${base === 'USD' ? 'highlight' : ''}">
        <div class="converter-res-curr">$ US Dollar</div>
        <div class="converter-res-val">$${usdVal.toFixed(2)}</div>
      </div>
      <div class="converter-res-card ${base === 'EUR' ? 'highlight' : ''}">
        <div class="converter-res-curr">€ Euro</div>
        <div class="converter-res-val">€${eurVal.toFixed(2)}</div>
      </div>
      <div class="converter-res-card ${base === 'AED' ? 'highlight' : ''}">
        <div class="converter-res-curr">د.إ UAE Dirham</div>
        <div class="converter-res-val">${aedVal.toFixed(2)} AED</div>
      </div>
    `;
  }

  if (amtInput) amtInput.oninput = updateConverter;
  if (baseSelect) baseSelect.onchange = updateConverter;
  if (rateUsdInput) rateUsdInput.oninput = updateConverter;
  if (rateEurInput) rateEurInput.oninput = updateConverter;
  if (rateAedInput) rateAedInput.oninput = updateConverter;
  updateConverter();

  // 2. Airport Taxi Quote Checker Handler
  const airportSelect = $('taxiAirportSelect');
  const fareInput = $('taxiFareInput');
  const checkBtn = $('checkTaxiQuoteBtn');
  const verdictBox = $('taxiQuoteVerdictBox');

  function checkTaxiFare() {
    if (!verdictBox || !fareInput) return;
    const airport = airportSelect ? airportSelect.value : 'ALA';
    const fare = parseFloat(fareInput.value) || 0;

    let verdictClass = 'verdict-green';
    let title = '';
    let body = '';

    if (airport === 'ALA') {
      if (fare <= 5500) {
        verdictClass = 'verdict-green';
        title = '✅ Fair & Standard Price (Almaty ALA)';
        body = `Your quote of ${fare.toLocaleString()} ₸ is completely in line with standard Yandex Go Economy and Comfort app rates (~3,500 – 5,500 ₸ / $7–$11) into central Almaty. This is a fair rate.`;
      } else if (fare <= 8500) {
        verdictClass = 'verdict-yellow';
        title = '⚠️ Elevated Fare / Surge Conditions';
        body = `Your quote of ${fare.toLocaleString()} ₸ is roughly 1.5x to 2x the standard economy rate. This can be normal for Comfort+ or during winter blizzards / Friday peak traffic, but is higher than normal base app pricing.`;
      } else {
        verdictClass = 'verdict-red';
        title = '🚨 Extreme Airport Taxi Scam Alert!';
        body = `Your quote of ${fare.toLocaleString()} ₸ is significantly over market value (often 3x to 10x higher!). Unofficial gypsy drivers at Almaty Airport aggressively target arriving tourists with quotes between 15,000 ₸ and 50,000 ₸. <strong>Do not take this ride.</strong> Say “Nyet, spasibo” and order a Yandex Go on airport Wi-Fi (~4,000 ₸) or use the official taxi counter inside the terminal.`;
      }
    } else {
      if (fare <= 4500) {
        verdictClass = 'verdict-green';
        title = '✅ Fair & Standard Price (Astana NQZ)';
        body = `Your quote of ${fare.toLocaleString()} ₸ matches normal Yandex Go app rates (~3,000 – 4,500 ₸ / $6–$9) from Astana Airport to the Left Bank (Baiterek / Khan Shatyr).`;
      } else if (fare <= 7500) {
        verdictClass = 'verdict-yellow';
        title = '⚠️ Elevated Surge / Comfort Fare';
        body = `Your quote of ${fare.toLocaleString()} ₸ is higher than standard off-peak fares (~3,500 ₸), but reasonable for severe sub-zero winter blizzards or Comfort+ class.`;
      } else {
        verdictClass = 'verdict-red';
        title = '🚨 High Overcharge Warning!';
        body = `Your quote of ${fare.toLocaleString()} ₸ is an overcharge. Unofficial terminal solicitors often quote 15,000 – 35,000 ₸. Order through Yandex Go on airport Wi-Fi or visit the official terminal dispatch desk.`;
      }
    }

    verdictBox.className = `taxi-verdict-box ${verdictClass}`;
    verdictBox.innerHTML = `
      <div class="verdict-title">${title}</div>
      <div class="verdict-body">${body}</div>
    `;
  }

  if (checkBtn) checkBtn.onclick = checkTaxiFare;
  if (fareInput) fareInput.oninput = checkTaxiFare;
  if (airportSelect) airportSelect.onchange = checkTaxiFare;

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.onclick = () => {
      if (fareInput) {
        fareInput.value = btn.dataset.preset;
        checkTaxiFare();
      }
    };
  });

  checkTaxiFare();

  // 3. Chapter Navigation Link Handlers
  document.querySelectorAll('.guide-toc-pill').forEach(pill => {
    pill.onclick = (e) => {
      const ch = pill.dataset.ch;
      const targetEl = document.getElementById('ch-' + ch);
      if (targetEl) {
        e.preventDefault();
        history.replaceState(null, null, '#travel-guide/' + ch);
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelectorAll('.guide-toc-pill').forEach(p => p.classList.toggle('active', p === pill));
      }
    };
  });
}

function renderPersonalTourGuideScreen() {
  return `
    <section class="screen guide-screen">
      ${back}

      <!-- Guide Header Card -->
      <div class="guide-header-card">
        <div class="guide-portrait-box">
          <img src="${GUIDE_CONFIG.portrait}" alt="${pick(GUIDE_CONFIG.name)}" onerror="this.onerror=null;this.src='foto1.jpg';">
        </div>
        <div class="guide-header-info">
          <h2 class="guide-name">${pick(GUIDE_CONFIG.name)}</h2>
          <div class="guide-role">${t('guideRole')}</div>
          <div class="guide-stats-strip">
            <span class="guide-stat-pill verified">✓ ${t('guideVerified')}</span>
            <span class="guide-stat-pill rating">★ ${GUIDE_CONFIG.rating} (${GUIDE_CONFIG.reviewsCount})</span>
            <span class="guide-stat-pill">⏳ ${GUIDE_CONFIG.experienceYears} ${t('guideExp')}</span>
            <span class="guide-stat-pill">🎯 ${t('guideToursDone')}</span>
          </div>
          <div class="guide-actions-row">
            <a href="${GUIDE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn whatsapp">
              ${SVG_ICONS.whatsapp}
              <span>${t('guideContactWhatsApp')}</span>
            </a>
            <button class="btn ghost" id="guideBookDemoBtn">
              📅 ${t('guideBookTour')}
            </button>
          </div>
        </div>
      </div>

      <!-- Biography Section -->
      <div class="guide-section">
        <h3 class="guide-section-title">📜 ${t('guideBioTitle')}</h3>
        <p class="guide-bio-text">${t('guideBioText')}</p>
      </div>

      <!-- Languages Section -->
      <div class="guide-section">
        <h3 class="guide-section-title">🌐 ${t('guideLanguagesTitle')}</h3>
        <div class="guide-langs-grid">
          ${GUIDE_LANGUAGES.map(item => `
            <div class="guide-lang-card">
              <div class="guide-lang-name">${pick(item.name)}</div>
              <div class="guide-lang-level">${pick(item.level)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Expertise Section -->
      <div class="guide-section">
        <h3 class="guide-section-title">🧭 ${t('guideExpertiseTitle')}</h3>
        <div class="guide-expertise-grid">
          ${GUIDE_EXPERTISE.map(item => `
            <div class="guide-expertise-card">
              <h4>${item.icon} ${pick(item.title)}</h4>
              <p>${pick(item.desc)}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Available Tours & Itineraries -->
      <div class="guide-section">
        <h3 class="guide-section-title">🗺️ ${t('guideToursTitle')}</h3>
        <div class="guide-tours-list">
          ${GUIDE_TOURS.map(tour => `
            <div class="guide-tour-card">
              <div class="guide-tour-header">
                <span class="guide-tour-title">${pick(tour.title)}</span>
                <span class="guide-tour-duration">${pick(tour.duration)} • ${pick(tour.type)}</span>
              </div>
              <p class="guide-tour-desc">${pick(tour.desc)}</p>
              <ul class="guide-tour-highlights">
                ${tour.highlights.map(h => `<li>✓ ${h}</li>`).join('')}
              </ul>
              <a href="${GUIDE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn whatsapp" style="padding:6px 14px;font-size:0.85rem">
                ${SVG_ICONS.whatsapp}
                <span>${t('tourInquire')}</span>
              </a>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Ratings & Reviews (Marked Demo Data) -->
      <div class="guide-section">
        <div class="guide-reviews-header">
          <h3 class="guide-section-title" style="margin-bottom:0;border:0;padding:0">💬 ${t('guideReviewsTitle')}</h3>
          <span class="guide-reviews-demo-badge">${t('guideReviewsDemo')}</span>
        </div>
        <div class="guide-reviews-list" style="margin-top:14px">
          ${GUIDE_REVIEWS.map(r => `
            <div class="guide-review-card">
              <div class="guide-review-top">
                <span class="guide-review-author">${r.name} (${pick(r.origin)})</span>
                <span class="guide-review-stars">${r.stars}</span>
              </div>
              <p class="guide-review-text">${pick(r.text)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

const SCREENS = {
  // 1. Home screen (Video background + Hero glass card)
  home: () => `
    <section class="screen home">
      <div class="hero-glass-card">
        <span class="hero-badge-tag">Kazakhstan’s Spiritual Capital</span>
        <h1>QONAQ</h1>
        <p class="hero-desc">${t('welcome')}</p>
        <div class="home-photo-box">
          ${ph(HERO_IMAGE, 'HERO_IMAGE', 'r169')}
        </div>
        ${langPanel()}
        <button class="btn big" data-go="places">
          ✨ ${t('explore')}
        </button>
      </div>
    </section>`,

  // 2. Places screen
  places: () => `
    <section class="screen">
      ${back}
      <h2>${t('placesT')}</h2>
      ${PLACES.map(card).join('')}
    </section>`,

  // 3. Single Place detail
  place: id => {
    const p = PLACES.find(x => x.id === id);
    if (!p) return SCREENS.places();
    return `
      <section class="screen">
        ${back}
        ${ph(p.img, p.tag + '_IMAGE', 'r169')}
        <h2 style="margin-top:16px">${pick(p.name)}</h2>
        <p>${pick(p.desc)}</p>
        <h3 style="margin:24px 0 12px">${t('where')}</h3>
        ${ph(p.map, 'MAP_PLACEHOLDER', 'map')}
        <div style="margin-top:14px">
          <span class="pin">📍 ${t('start')}: ${p.start.label}</span>
          <span class="pin">🏁 ${t('dest')}: ${pick(p.name)}</span>
        </div>
        <p class="hint">${p.start.lat === null ? t('unset') : p.start.lat + ', ' + p.start.lng}</p>
        <div class="route">${t('route')}</div>
      </section>`;
  },

  // 4. Kaspi Payment screen
  pay: id => {
    const p = PLACES.find(x => x.id === id);
    if (!p) return SCREENS.places();
    return `
      <section class="screen" style="text-align:center">
        ${back}
        <h2>${t('payT')}</h2>
        <h3>${pick(p.name)}</h3>
        <div class="paybox">
          ${ph(p.kaspi, p.kaspiLabel || 'KASPI_QR_IMAGE', 'sq')}
        </div>
        <p style="max-width:36ch;margin:0 auto">${t('payI')}</p>
      </section>`;
  },

  // 5. Hotels list screen
  hotels: () => `
    <section class="screen">
      ${back}
      <h2>${t('hotels')}</h2>
      ${HOTELS.map(hotelCard).join('')}
    </section>`,

  // 6. Hotel detail screen
  hotel: id => {
    const h = HOTELS.find(x => x.id === id);
    if (!h) return SCREENS.hotels();
    return `
      <section class="screen">
        ${back}
        ${ph(h.img, h.tag, 'r169')}
        <h2 style="margin-top:16px">${pick(h.name)}</h2>
        ${h.sample ? `<span class="badge">${t('sample')}</span>` : ''}
        <p>${pick(h.desc)}</p>
        <p class="hint">📍 ${h.address ? pick(h.address) : t('addr')}</p>
        <div style="margin-top:16px">
          ${ph(h.map, 'HOTEL_MAP_PLACEHOLDER', 'map')}
        </div>
        <div class="route">${t('route')}</div>
      </section>`;
  },

  // 7. Guide Profile Screen (Original Personal Guide Profile)
  guide: () => renderPersonalTourGuideScreen(),
  'tour-guide': () => renderPersonalTourGuideScreen(),

  // 8. Editorial Kazakhstan Travel Guide
  'travel-guide': (sub) => renderTravelGuide(sub),
  travelguide: (sub) => renderTravelGuide(sub),

  // 8. How it works (About) screen
  about: () => `
    <section class="screen">
      ${back}
      <h2>${t('about')}</h2>
      <ol class="steps">
        ${[1, 2, 3, 4, 5].map(n => `<li>${t('s' + n)}</li>`).join('')}
      </ol>
    </section>`
};

/* ==========================================================================
   11. ATTRACTION & HOTEL CARDS
   ========================================================================== */
function card(p) {
  return `
    <article class="card">
      ${ph(p.img, p.tag + '_IMAGE', 'r43')}
      <h3>${pick(p.name)}</h3>
      <p>${pick(p.desc)}</p>
      <div class="row">
        <button class="qrbtn" data-go="pay/${p.id}" aria-label="Kaspi QR">
          ${ph(p.qr, p.tag + '_QR_IMAGE', 'sq')}
        </button>
        <span class="hint">${t('tapqr')}</span>
      </div>
      <button class="btn" data-go="place/${p.id}">
        ${t('view')}
      </button>
      <button class="btn ghost" data-go="place/${p.id}">
        ${t('how')}
      </button>
    </article>`;
}

function hotelCard(h) {
  return `
    <article class="card">
      ${ph(h.img, h.tag, 'r43')}
      <h3>${pick(h.name)}</h3>
      ${h.sample ? `<span class="badge">${t('sample')}</span>` : ''}
      <p>${pick(h.desc)}</p>
      <p class="hint">📍 ${h.address ? pick(h.address) : t('addr')}</p>
      <button class="btn" data-go="hotel/${h.id}">
        ${t('details')}
      </button>
    </article>`;
}

/* ==========================================================================
   12. RIGHT-SIDE DISCOVERY FEED RENDERER & FILTERS
   ========================================================================== */
function renderFeed() {
  const aside = $('discoveryFeed');
  if (!aside) return;

  const categories = [
    { id: 'all', label: t('feedAll') },
    { id: 'dining', label: t('feedDining') },
    { id: 'events', label: t('feedEvents') },
    { id: 'places', label: t('feedPlaces') },
    { id: 'offers', label: t('feedOffers') },
    { id: 'activities', label: t('feedActivities') }
  ];

  const filteredItems = activeFeedCategory === 'all'
    ? FEED_ITEMS
    : FEED_ITEMS.filter(item => item.category === activeFeedCategory);

  aside.innerHTML = `
    <div class="feed-header">
      <div class="feed-header-top">
        <h3>✨ ${t('feedTitle')}</h3>
        <span class="feed-demo-badge">${t('feedDemoTag')}</span>
      </div>
      <div class="feed-header-subtitle">${t('feedSubtitle')}</div>
    </div>

    <!-- Category Filters -->
    <div class="feed-filters-wrap" role="tablist" aria-label="Feed category filters">
      ${categories.map(cat => `
        <button class="feed-filter-btn${activeFeedCategory === cat.id ? ' active' : ''}" data-cat="${cat.id}">
          ${cat.label}
        </button>
      `).join('')}
    </div>

    <!-- Feed Stream Cards -->
    <div class="feed-stream">
      ${filteredItems.map(item => `
        <article class="feed-card" data-feed-id="${item.id}">
          <div class="feed-card-media">
            <img src="${item.img}" alt="${pick(item.title)}" loading="lazy">
            <span class="feed-cat-chip">${t('feed' + item.category.charAt(0).toUpperCase() + item.category.slice(1)) || item.category}</span>
            ${item.isSponsored ? `<span class="feed-sponsored-chip">${t('feedSponsored')}</span>` : ''}
          </div>
          <div class="feed-card-body">
            <span class="feed-date">${item.date}</span>
            <h4 class="feed-card-title">${pick(item.title)}</h4>
            <p class="feed-card-desc">${pick(item.desc)}</p>
            <button class="feed-card-action" data-action="${item.action.target}">
              ${pick(item.action.label)} →
            </button>
          </div>
        </article>
      `).join('')}
    </div>`;

  // Attach filter events
  aside.querySelectorAll('[data-cat]').forEach(btn => {
    btn.onclick = () => {
      activeFeedCategory = btn.dataset.cat;
      renderFeed();
    };
  });

  // Attach action button clicks
  aside.querySelectorAll('[data-action]').forEach(btn => {
    btn.onclick = () => {
      const target = btn.dataset.action;
      if (target.startsWith('#')) {
        location.hash = target.slice(1);
      } else {
        window.open(target, '_blank', 'noopener,noreferrer');
      }
    };
  });
}

/* ==========================================================================
   13. SOCIAL MEDIA & TOURISM FOOTER RENDERER
   ========================================================================== */
function renderFooter() {
  const footer = $('siteFooter');
  if (!footer) return;

  const socialKeys = [
    { key: 'instagram', label: 'Instagram' },
    { key: 'tiktok', label: 'TikTok' },
    { key: 'threads', label: 'Threads' },
    { key: 'facebook', label: 'Facebook' }
  ];

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-main-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <a class="logo" href="#home">QONAQ</a>
          <p class="footer-tagline">${t('footerTagline')}</p>
          <p class="footer-contact-item">
            📍 <span>${t('footerLocation')}</span>
          </p>
        </div>

        <!-- Navigation Links -->
        <div class="footer-col">
          <h4 class="footer-col-title">${t('footerQuickLinks')}</h4>
          <ul class="footer-nav-list">
            <li><a href="#home" class="footer-nav-link">${t('home')}</a></li>
            <li><a href="#places" class="footer-nav-link">${t('places')}</a></li>
            <li><a href="#hotels" class="footer-nav-link">${t('hotels')}</a></li>
            <li><a href="#guide" class="footer-nav-link">${t('guide')}</a></li>
            <li><a href="#about" class="footer-nav-link">${t('footerAboutLink')}</a></li>
          </ul>
        </div>

        <!-- Social Media Column -->
        <div class="footer-col">
          <h4 class="footer-col-title">${t('footerSocialTitle')}</h4>
          <div class="footer-social-wrap">
            <span class="footer-social-note">${t('footerSocialNote')}</span>
            <div class="footer-social-grid">
              ${socialKeys.map(s => {
                const url = SOCIAL_URLS[s.key];
                if (url && url.trim().length > 0) {
                  return `
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn is-active" aria-label="${s.label}">
                      ${SVG_ICONS[s.key]}
                      <span>${s.label}</span>
                    </a>`;
                } else {
                  return `
                    <span class="social-icon-btn is-disabled" title="${t('footerNotConfigured')}: ${s.label}" aria-label="${s.label} (${t('footerNotConfigured')})">
                      ${SVG_ICONS[s.key]}
                      <span>${s.label}</span>
                      <small class="unconfigured-pill">${t('footerNotConfigured')}</small>
                    </span>`;
                }
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Contact Information Column -->
        <div class="footer-col">
          <h4 class="footer-col-title">${t('footerContactTitle')}</h4>
          <ul class="footer-contact-list">
            <li class="footer-contact-item">
              ✉️ ${CONTACT_CONFIG.email ? `<a href="mailto:${CONTACT_CONFIG.email}">${CONTACT_CONFIG.email}</a>` : `<span class="hint">${t('footerNotConfigured')} (script.js)</span>`}
            </li>
            <li class="footer-contact-item">
              📞 ${CONTACT_CONFIG.phone ? `<a href="tel:${CONTACT_CONFIG.phone}">${CONTACT_CONFIG.phone}</a>` : `<span class="hint">${t('footerNotConfigured')} (script.js)</span>`}
            </li>
            <li class="footer-contact-item">
              💬 <a href="${CONTACT_CONFIG.whatsapp}" target="_blank" rel="noopener noreferrer" class="footer-nav-link">WhatsApp Inquiries</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom-bar">
        <span>© 2026 QONAQ — ${t('footerRights')}</span>
        <span>Turkistan Tourism & Heritage Guide</span>
      </div>
    </div>`;
}

/* ==========================================================================
   14. DEMO NOTICE MODAL
   ========================================================================== */
function openDemoModal(title, text) {
  const modal = $('demoModal');
  const modalTitle = $('demoModalTitle');
  const modalBody = $('demoModalBody');
  const modalActions = $('demoModalActions');

  if (!modal || !modalTitle || !modalBody) return;

  modalTitle.textContent = title;
  modalBody.textContent = text;
  modalActions.innerHTML = `
    <a href="${GUIDE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn whatsapp">
      ${SVG_ICONS.whatsapp}
      <span>${t('guideContactWhatsApp')}</span>
    </a>
    <button class="btn ghost" id="modalDismissBtn">${t('guideModalClose')}</button>
  `;

  modal.hidden = false;

  $('modalDismissBtn').onclick = () => { modal.hidden = true; };
}

function initModalEvents() {
  const modal = $('demoModal');
  const closeBtn = $('demoModalClose');
  const backdrop = $('demoModalBackdrop');

  if (closeBtn) closeBtn.onclick = () => { if (modal) modal.hidden = true; };
  if (backdrop) backdrop.onclick = () => { if (modal) modal.hidden = true; };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && !modal.hidden) {
      modal.hidden = true;
    }
  });
}

/* ==========================================================================
   15. ROUTER & NAVIGATION
   ========================================================================== */
const PARENT = {
  places: 'home',
  about: 'home',
  hotels: 'home',
  guide: 'home',
  'tour-guide': 'home',
  'travel-guide': 'home',
  travelguide: 'home',
  place: 'places',
  pay: 'places',
  hotel: 'hotels'
};

const stack = [];

function route(keep) {
  const h = location.hash.slice(1) || 'home';
  const [name, id] = h.split('/');

  if (stack.length > 1 && stack[stack.length - 2] === h) {
    stack.pop();
  } else if (stack[stack.length - 1] !== h) {
    stack.push(h);
  }

  // Set body dataset screen for screen-specific CSS themes
  document.body.dataset.screen = name;

  // Manage video playback: only on home screen
  const siteVideo = $('siteVideo');
  if (siteVideo) {
    if (name === 'home') {
      siteVideo.play().catch(() => {});
    } else {
      siteVideo.pause();
    }
  }

  // Highlight active header nav item
  document.querySelectorAll('header.top nav .nav-link').forEach(link => {
    const targetHash = (link.getAttribute('href') || '').replace('#', '');
    link.classList.toggle('active', targetHash === name);
  });

  // Render current screen
  const screenFn = SCREENS[name] || SCREENS.home;
  $('app').innerHTML = screenFn(id);

  // Set back button text
  $('app').querySelectorAll('[data-back]').forEach(b => {
    b.textContent = t('back');
  });

  // Hydrate images
  hydrate($('app'));

  // Initialize interactive widgets if on travel guide
  if (name === 'travel-guide' || name === 'travelguide' || name === 'guide-articles') {
    initGuideWidgets();
    if (id) {
      setTimeout(() => {
        const targetEl = document.getElementById('ch-' + id);
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }

  // Attach guide booking button event
  const guideBookBtn = $('guideBookDemoBtn');
  if (guideBookBtn) {
    guideBookBtn.onclick = () => {
      openDemoModal(t('guideModalTitle'), t('guideModalText'));
    };
  }

  if (!keep) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Header language selector visibility: home screen has hero panel
  const langElem = document.querySelector('.lang');
  if (langElem) {
    langElem.hidden = name === 'home';
  }
}

function goBack() {
  if (stack.length > 1) {
    location.hash = stack[stack.length - 2];
  } else {
    location.hash = PARENT[(location.hash.slice(1) || 'home').split('/')[0]] || 'home';
  }
}

// App event delegation
$('app').addEventListener('click', e => {
  const g = e.target.closest('[data-go]');
  const b = e.target.closest('[data-back]');
  const l = e.target.closest('[data-lang]');
  const m = e.target.closest('[data-more]');

  if (l) {
    setLang(l.dataset.lang);
  } else if (m) {
    moreOpen = !moreOpen;
    route(true);
  } else if (g) {
    location.hash = g.dataset.go;
  } else if (b) {
    goBack();
  }
});

window.addEventListener('hashchange', () => route());

/* ==========================================================================
   16. LANGUAGE SYSTEM
   ========================================================================== */
function setLang(code) {
  lang = code;

  document.documentElement.lang = code;
  document.documentElement.dir = ALL[code] && ALL[code][1] ? 'rtl' : 'ltr';

  // Update static DOM elements with [data-t]
  document.querySelectorAll('[data-t]').forEach(el => {
    el.textContent = t(el.dataset.t);
  });

  $('langName').textContent = ALL[code] ? ALL[code][0] : code;

  $('langMore').textContent = $('langExtra').hidden ? t('more') : t('less');

  document.querySelectorAll('.opt').forEach(b => {
    b.classList.toggle('on', b.dataset.code === code);
  });

  try {
    localStorage.setItem('qonaqLang', code);
  } catch (e) {}

  // Re-render components in new language
  route(true);
  renderFeed();
  renderFooter();
}

function buildMenu(list, box) {
  Object.keys(list).forEach(c => {
    const b = document.createElement('button');
    b.className = 'opt';
    b.dataset.code = c;
    b.textContent = list[c][0];

    b.onclick = () => {
      $('langMenu').hidden = true;
      setLang(c);
    };

    box.appendChild(b);
  });
}

buildMenu(MAIN, $('langMain'));
buildMenu(EXTRA, $('langExtra'));

$('langBtn').onclick = () => {
  $('langMenu').hidden = !$('langMenu').hidden;
  $('langBtn').setAttribute('aria-expanded', !$('langMenu').hidden);
};

$('langMore').onclick = () => {
  $('langExtra').hidden = !$('langExtra').hidden;
  $('langMore').textContent = $('langExtra').hidden ? t('more') : t('less');
};

document.addEventListener('click', e => {
  if (!e.target.closest('.lang')) {
    $('langMenu').hidden = true;
    $('langBtn').setAttribute('aria-expanded', 'false');
  }
});

/* ==========================================================================
   17. INITIALIZATION
   ========================================================================== */
let saved = 'en';
try {
  saved = localStorage.getItem('qonaqLang') || 'en';
} catch (e) {}

initModalEvents();
renderFeed();
renderFooter();
setLang(ALL[saved] ? saved : 'en');
