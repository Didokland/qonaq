/* ==========================================================================
   QONAQ — Kazakhstan Travel Guide & Editorial Field Manual (guide.js)
   --------------------------------------------------------------------------
   Data-driven editorial content for the comprehensive Travel Guide section.
   Edit prices, destinations, itineraries, and tips here without altering
   page layouts or routing code.
   ========================================================================== */

const KAZAKHSTAN_TRAVEL_GUIDE = {
  meta: {
    heroTitle: "You're not a tourist here. You're a guest.",
    heroSubtitle: "The Complete Kazakhstan Travel Guide & Field Manual",
    edition: "August 2026 Edition",
    advisoryNotice: "Editorial Advisory (August 2026): Fares, exchange rates, visa rules, and transport schedules reflect the August 2026 editorial update. In Kazakhstan, transport rates and fuel surcharges fluctuate. Always cross-check current prices on Yandex Go, Kaspi.kz, 2GIS, and official railway/airline portals before traveling."
  },

  intro: {
    qonaqTitle: "The Philosophy of Qonaq (Қонақ)",
    qonaqDefinition: "In Kazakh culture, a guest — qonaq — is believed to be sent directly by God (Qonaq — Qudaidyn elshisi). According to ancient nomadic tradition, when a traveler arrives from the infinite steppe, the host family observes the sacred rule of Qonaqasy: providing generous nourishment, clean bedding, hot tea, and total protection for up to three days without ever asking the guest’s name, tribe, or purpose of travel.",
    hospitalityText: "This profound code was forged in the vast Central Asian plains, where vast distances between human settlements meant hospitality was not merely an etiquette, but a matter of human survival. Today, whether you arrive in a gleaming glass-and-steel cafe in Almaty, a high-speed Talgo train across the Saryarka steppe, or an adobe teahouse in ancient Turkestan, you are treated not as a commercial consumer, but as an honored guest."
  },

  quickFacts: [
    { label: "Capital", value: "Astana (pop. ~1.4M)", icon: "🏛️" },
    { label: "Largest Metropolis", value: "Almaty (pop. ~2.2M)", icon: "🏔️" },
    { label: "Official Currency", value: "Kazakhstani Tenge (₸, KZT)", icon: "₸" },
    { label: "Official Languages", value: "Kazakh (State), Russian (Official)", icon: "🗣️" },
    { label: "Unified Time Zone", value: "UTC+5 (Nationwide standard since 2024)", icon: "⏰" },
    { label: "Emergency Services", value: "112 (Universal English/Russian/Kazakh)", icon: "🚨" },
    { label: "Visa Exemption", value: "80+ countries visa-free up to 30 days", icon: "🛂" },
    { label: "Power & Sockets", value: "220V, 50Hz, European Type C & F plugs", icon: "🔌" }
  ],

  chapters: [
    // ------------------------------------------------------------------------
    // CHAPTER 1: Before You Land
    // ------------------------------------------------------------------------
    {
      id: "before-you-land",
      number: "01",
      title: "Before You Land",
      navLabel: "1. Before You Land",
      summary: "Essential smartphone apps, offline maps, taxi hailing, e-SIM setup, train tickets, and understanding the cashless Kaspi ecosystem.",
      contentSections: [
        {
          heading: "Must-Have Smartphone Apps",
          text: "Kazakhstan has one of the world's most digitized consumer ecosystems. Having the right apps downloaded before you board your flight will save you hours of confusion:",
          items: [
            {
              name: "2GIS (2ГИС)",
              category: "Navigation & Transit",
              desc: "The single most indispensable app in Kazakhstan. Far superior to Google Maps in urban areas. Provides offline 3D city maps, pinpoint building entrance markers (crucial in large Soviet apartment blocks), shop opening hours, and real-time live GPS tracking of every city bus and trolleybus.",
              url: "https://2gis.kz",
              tip: "Download the offline map packages for Almaty, Astana, and Shymkent/Turkestan while on your home Wi-Fi."
            },
            {
              name: "Yandex Go (Яндекс Go)",
              category: "Taxi & Rideshare",
              desc: "The primary on-demand taxi, delivery, and scooter platform throughout Kazakhstan. Transparent upfront fares, multiple car classes (Economy, Comfort, Comfort+, Business), and cashless payment via international credit cards.",
              url: "https://taxi.yandex.kz",
              tip: "Link your international Visa or Mastercard in the app before departure to bypass card SMS verifications abroad."
            },
            {
              name: "inDrive (inDriver)",
              category: "Intercity Rideshare",
              desc: "Peer-to-peer transport bidding app created in Siberia. The passenger proposes a fare, and drivers bid or accept. Ideal for intercity trips (e.g., Almaty to Charyn Canyon, or Shymkent to Turkestan) and shared suburban taxis.",
              url: "https://indrive.com"
            },
            {
              name: "Wolt & Yandex Eats",
              category: "Food Delivery",
              desc: "Wolt offers a flawless English UI and seamlessly accepts foreign credit cards for meals from top restaurants, bakeries, and grocery stores in Almaty, Astana, and Shymkent.",
              url: "https://wolt.com"
            },
            {
              name: "KTZ Tickets (bilet.railways.kz)",
              category: "Train Booking",
              desc: "The official Kazakhstan Temir Zholy train booking portal. Tickets open exactly 45 days in advance and fast Talgo sleeper berths sell out quickly.",
              url: "https://bilet.railways.kz"
            },
            {
              name: "Google Translate / Yandex Translate",
              category: "Translation",
              desc: "Download offline language packs for Russian and Kazakh. Camera translation is indispensable for decoding restaurant receipts, Cyrillic menus, and street signs."
            }
          ]
        },
        {
          heading: "Mobile Internet & e-SIMs",
          text: "Mobile data in Kazakhstan is high-speed, affordable, and covers virtually every highway and settlement outside deep alpine canyons.",
          options: [
            {
              title: "International e-SIM (Airalo, Maya, Nomad)",
              desc: "The most convenient option. Activate prior to departure; connects automatically to Kcell or Beeline 4G/5G the second your wheels touch down. Costs approximately $7–$15 for 5–10 GB."
            },
            {
              title: "Local Physical SIM / Tourist Package",
              desc: "Available at official operator stores (Tele2, Altel, Beeline, Kcell/Activ) in airport arrival halls and city centers. A monthly package with 25–45 GB data and unlimited social media costs approximately 3,500 – 5,500 ₸ ($7 – $11). Passport registration is legally mandated."
            }
          ],
          callout: {
            title: "Local Tip: The Kaspi.kz Reality Check",
            text: "You will see purple 'Kaspi QR' stickers on every shop window, market booth, and street cart in Kazakhstan. Kaspi is a domestic banking super-app used by 99% of locals. While tourists without a Kazakh Tax ID (IIN) cannot register a Kaspi account, you do NOT need one: international Visa and Mastercard cards (contactless, Apple Pay, Google Pay) are accepted at nearly all Kaspi point-of-sale terminals across the country!"
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // CHAPTER 2: Landing & Airports
    // ------------------------------------------------------------------------
    {
      id: "landing",
      number: "02",
      title: "Landing & Airports",
      navLabel: "2. Landing",
      summary: "Navigating Almaty (ALA) and Astana (NQZ) airports, avoiding persistent unlicensed taxi touts, and public airport buses.",
      contentSections: [
        {
          heading: "The Airport Taxi Trap (Read Carefully)",
          text: "As you clear customs and enter the arrivals hall at Almaty (ALA) or Astana (NQZ), you will immediately be swarmed by unofficial drivers chanting 'Taxi, brat! Taxi center!'. These unlicensed drivers exploit exhausted international travelers who have not yet converted currency or connected to internet.",
          warnings: [
            "Unofficial drivers routinely quote between 20,000 ₸ and 50,000 ₸ ($40 – $100+) for a ride that should cost 3,500 – 5,500 ₸ ($7 – $11).",
            "Drivers may claim that Yandex Go or app taxis are 'banned at the airport' or that 'the city road is blocked'. This is strictly false.",
            "Never follow a solicitor who approaches you inside the terminal. Maintain polite eye contact, say 'Nyet, spasibo' (No, thank you), and walk straight toward the exits."
          ]
        },
        {
          heading: "Standard Airport Taxi Benchmarks (August 2026)",
          benchmarks: [
            {
              airport: "Almaty International Airport (ALA)",
              distance: "16 km to Golden Quarter / Dostyk Ave",
              appFareRange: "3,500 – 5,500 ₸ ($7 – $11)",
              surgeFareRange: "6,000 – 8,000 ₸ ($12 – $16) during snow/rush hour",
              scamQuote: "15,000 – 45,000 ₸ ($30 – $90)",
              pickupNote: "Order Yandex Go via free airport Wi-Fi. Wait at the barrier curb outside Terminal 1/2 in the marked rideshare waiting zone."
            },
            {
              airport: "Astana Nursultan Nazarbayev Airport (NQZ)",
              distance: "15 km to Left Bank / Baiterek Monument",
              appFareRange: "3,000 – 4,500 ₸ ($6 – $9)",
              surgeFareRange: "5,000 – 7,000 ₸ ($10 – $14) during blizzard/peak",
              scamQuote: "15,000 – 35,000 ₸ ($30 – $70)",
              pickupNote: "Exit terminal doors and meet your driver at the first outer lane. Official taxi counters inside charge fixed 4,500 – 6,000 ₸."
            }
          ]
        },
        {
          heading: "Airport Public Bus Connections",
          text: "For budget travelers, municipal airport buses operate reliably and cost virtually nothing:",
          buses: [
            {
              city: "Almaty (ALA)",
              routes: "Bus 92 (runs down Seifullin Ave to city center), Bus 3 (night route to Almaty-2 railway station), Bus 106.",
              frequency: "Every 12–18 minutes (06:00 to 22:30)",
              fare: "100 ₸ with Onay card/app or 200 ₸ cash directly to driver."
            },
            {
              city: "Astana (NQZ)",
              routes: "Bus 10 (direct to Baiterek, Khan Shatyr, and Astana-1 Railway Station), Bus 12 (to Left Bank and Ministries).",
              frequency: "Every 10–15 minutes (06:00 to 23:00)",
              fare: "90 ₸ with CTS card or 180 ₸ cash."
            }
          ],
          callout: {
            title: "Step-by-Step Arrival Protocol",
            text: "1. Clear passport control and collect baggage. 2. Connect your phone to free airport Wi-Fi ('Airport_Free_WiFi'). 3. Open Yandex Go and set destination to your hotel. 4. Check price in tenge. 5. Walk past terminal solicitors outside to the designated rideshare pick-up lane."
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // CHAPTER 3: Paying & Money
    // ------------------------------------------------------------------------
    {
      id: "paying",
      number: "03",
      title: "Paying & Money",
      navLabel: "3. Paying",
      summary: "The cashless revolution, foreign card acceptance, when you still need cash, currency exchange bureaus, and tipping etiquette.",
      contentSections: [
        {
          heading: "Cashless Dominance & Card Acceptance",
          text: "Kazakhstan is virtually 95% cashless in everyday urban life. You can pay with contactless cards, Apple Pay, and Google Pay at supermarket checkouts, specialty coffee shops, metro turnstiles, and even modest produce stalls.",
          points: [
            "Visa & Mastercard: Widely accepted with zero transaction surcharge at points of sale.",
            "Foreign Cards: Cards issued by European, American, Asian, and Middle Eastern banks work reliably at POS terminals.",
            "American Express & Diners Club: Very limited acceptance outside international luxury hotels (Rixos, Ritz-Carlton)."
          ]
        },
        {
          heading: "When You Still Need Physical Cash",
          text: "Always carry 10,000 to 20,000 ₸ ($20 – $40) in cash for specific scenarios:",
          cashScenarios: [
            "Green Bazaar (Zelyony Bazar) in Almaty for weighing dried fruits, nuts, and horsemeat delicacies.",
            "Rural homestays and yurt camps in Saty village (Kolsai Lakes) where cellular data is weak.",
            "National Park entrance fee booths in remote steppe or mountain checkpoints.",
            "Shared intercity marshrutka vans and village bazaars in smaller regional hubs."
          ]
        },
        {
          heading: "Currency Exchange Bureaus",
          text: "Do not exchange significant sums at airport counters, where spreads are 6–10% worse than market. Instead, use street exchange bureaus (Obmen Valyut) in downtown Almaty or Astana.",
          tips: [
            "Live market rates in Almaty are tracked live on mig.kz.",
            "Bring clean, crisp, untorn $50 and $100 bills (or €50 / €100). Creased, stamped, or marked banknotes may be rejected or exchanged at a discount.",
            "ATMs: Halyk Bank, ForteBank, and CenterCredit ATMs accept foreign debit cards reliably. Halyk Bank typically charges zero local ATM access fee."
          ]
        },
        {
          heading: "Tipping Culture",
          text: "In Kazakhstan, most sit-down restaurants automatically append a 10% (sometimes 15%) service charge (obsluzhivaniye / қызмет көрсету) to your printed bill. This is standard practice and included in the total. Leaving an extra 5–10% in cash on the table is customary for exceptional service. For taxi and courier apps, tipping 200–500 ₸ in-app is polite and appreciated."
        },
        {
          heading: "Daily Cost Estimates (August 2026)",
          costTiers: [
            {
              tier: "Budget Backpacker",
              dailyUsd: "$30 – $45",
              dailyKzt: "15,000 – 22,500 ₸",
              hotel: "Hostel bed or modest guesthouse (4,000 – 7,000 ₸)",
              food: "Stolovaya canteens (Kaganat / Tagam) for 1,500 – 2,500 ₸ per meal",
              transport: "Metro and city buses (100 – 200 ₸ per trip)"
            },
            {
              tier: "Comfort Traveler",
              dailyUsd: "$75 – $130",
              dailyKzt: "37,500 – 65,000 ₸",
              hotel: "3★ or 4★ boutique hotel / modern Airbnb (18,000 – 35,000 ₸)",
              food: "Sit-down cafes, shashlyk houses & plov centers (7,000 – 14,000 ₸ daily)",
              transport: "Yandex Go Comfort+ taxis & guided day tours (3,000 – 8,000 ₸ daily)"
            },
            {
              tier: "Luxury / High End",
              dailyUsd: "$220+",
              dailyKzt: "110,000+ ₸",
              hotel: "5★ hotel (Rixos, The Ritz-Carlton, St. Regis) (75,000 – 180,000 ₸)",
              food: "Fine dining, horsemeat steak degustations & wine pairings (25,000 – 50,000 ₸)",
              transport: "Private chauffeured Toyota Land Cruiser 4WD for canyon excursions"
            }
          ]
        }
      ]
    },

    // ------------------------------------------------------------------------
    // CHAPTER 4: Getting Around
    // ------------------------------------------------------------------------
    {
      id: "getting-around",
      number: "04",
      title: "Getting Around",
      navLabel: "4. Getting Around",
      summary: "City metro & bus systems, high-speed Spanish Talgo trains vs classic sleepers, domestic flights, and driving tips.",
      contentSections: [
        {
          heading: "City Transport: Almaty & Astana",
          text: "Both major cities feature clean, modern, and cheap urban public transit systems:",
          modes: [
            {
              title: "Almaty Metro",
              desc: "A single 11-station subway line built deep into mountain gravel. Stations like Zhibek Zholy, Almaly, and Baikonur feature marble cladding and Kazakh national mosaic artwork. Extremely safe, air-conditioned, and costs just 100 ₸ per ride."
            },
            {
              title: "Public Buses & Trolleybuses",
              desc: "Extensive network tracked live in 2GIS. In Almaty, pay with the Onay card/app (100 ₸) or 200 ₸ cash to the driver. In Astana, use the CTS card/app (90 ₸)."
            },
            {
              title: "Yandex Go Taxi Tiers",
              desc: "Economy is fine for short hops; choose Comfort or Comfort+ for newer foreign sedans (Hyundai Elantra, Toyota Camry) with air-conditioning and seatbelts."
            }
          ]
        },
        {
          heading: "Intercity Trains (KTZ): The Classic Steppe Journey",
          text: "Train travel is the romantic lifeblood of Kazakhstan. The railway network is operated by Kazakhstan Temir Zholy (KTZ).",
          trainTypes: [
            {
              name: "Talgo Express (Tulpar-Talgo)",
              desc: "Spanish-designed high-speed articulated trains running on major arteries (Almaty ↔ Astana in 9–14 hours; Almaty ↔ Shymkent/Turkestan overnight in 10 hours). Clean, air-conditioned, with 2-berth Lyux, 4-berth Kupe, and a lively restaurant dining car.",
              tip: "Book 3–4 weeks in advance on bilet.railways.kz. Popular Friday evening departures sell out completely."
            },
            {
              name: "Classic Soviet Sleeper Trains",
              desc: "Slower, rustic, and deeply social. Carriages are divided into SV (2-berth first class), Kupe (4-berth closed compartment), and Platzkart (54-berth open dormitory carriage). Excellent for long journeys if you want to drink tea and chat with local families.",
              tip: "Boiling water (kipiatok) is free 24/7 from the coal-fired samovar at the front of each carriage. Bring instant noodles, tea bags, and slippers."
            }
          ]
        },
        {
          heading: "Domestic Flights: Covering Vast Steppe Distances",
          text: "Kazakhstan is the 9th largest country on Earth (larger than all of Western Europe). Traveling between western oil ports like Aktau (Caspian Sea) and eastern mountains takes days by rail, making domestic aviation essential.",
          airlines: [
            { name: "Air Astana", desc: "Kazakhstan’s premier 4-star flag carrier. Exceptional safety record, complimentary snacks, and modern Airbus A320/A321 fleet." },
            { name: "FlyArystan", desc: "Low-cost subsidiary of Air Astana. Excellent fares between all major cities. Strict 5 kg cabin baggage limits; prepay checked luggage online." },
            { name: "SCAT Airlines & Qazaq Air", desc: "Connect regional airfields like Turkestan (HSA), Taraz, Ust-Kamenogorsk, and Kostanay." }
          ]
        },
        {
          heading: "Driving in Kazakhstan & Car Rental",
          text: "Renting a car is ideal for exploring the Almaty region (Kolsai, Kaindy, Charyn, Assy Plateau), but requires attention to local driving habits:",
          drivingRules: [
            "Road Quality: The primary Western Europe–Western China highway (Almaty–Shymkent–Turkestan) is a pristine 4-lane tollway. However, secondary rural roads feature abrupt, deep potholes (yama). Avoid driving at night due to roaming unlit horses, cows, and camels.",
            "Speed Traps (Sergek): Automated AI speed and lane cameras are ubiquitous in all cities and highway toll gantries. Speed limits: 60 km/h in cities, 100 km/h on two-lane highways, 140 km/h on divided tollways.",
            "4WD Requirement: A crossover or true 4x4 (Toyota Land Cruiser, Duster) is mandatory for Kaindy lake access, Assy Plateau, and Mangystau desert tracks."
          ]
        },
        {
          heading: "Key Distance & Travel Times Table",
          routes: [
            { fromTo: "Almaty ↔ Astana", distance: "1,220 km", flight: "1h 40m", train: "9h 30m (Talgo)", road: "16–18h (via Balkhash)" },
            { fromTo: "Almaty ↔ Turkestan", distance: "830 km", flight: "1h 25m", train: "9h 50m (Talgo)", road: "10–11h (paved 4-lane)" },
            { fromTo: "Shymkent ↔ Turkestan", distance: "165 km", flight: "—", train: "2h 10m", road: "1h 50m (express taxi)" },
            { fromTo: "Almaty ↔ Charyn Canyon", distance: "215 km", flight: "—", train: "—", road: "3h 15m (Kuldzha highway)" },
            { fromTo: "Aktau ↔ Bozzhira (Mangystau)", distance: "300 km", flight: "—", train: "—", road: "4h 30m (Paved then 4WD desert)" }
          ]
        }
      ]
    },

    // ------------------------------------------------------------------------
    // CHAPTER 5: Where to Go (9 Iconic Destinations)
    // ------------------------------------------------------------------------
    {
      id: "where-to-go",
      number: "05",
      title: "Where to Go",
      navLabel: "5. Where to Go",
      summary: "In-depth profiles of Kazakhstan's 9 premier regions: Almaty, Charyn/Kolsai, Astana, Burabay, Turkestan, Mangystau, Altai, Baikonur, and Shymkent.",
      destinations: [
        {
          id: "dest-almaty",
          name: "Almaty — The City of Apples & Mountain Vistas",
          subtitle: "Southern Cultural Capital & Tian Shan Gateway",
          img: "almaty.jpg",
          bestTime: "May to October (hiking/city life) or Dec to March (skiing)",
          highlights: ["Medeu outdoor ice rink & Shymbulak ski resort", "Zenkov Cathedral in Panfilov Park (built without nails)", "Green Bazaar (Zelyony Bazar) spice & cheese tasting", "Kok Tobe hill cable car with panoramic city night lights"],
          desc: "Nestled directly against the dramatic 4,000-meter peaks of the Zailiyskiy Alatau, Almaty is Central Asia's most cosmopolitan metropolis. Shaded by hundred-year-old oak and elm avenues, it boasts an energetic coffee culture, world-class restaurants, Soviet modernist architecture, and trails that climb from city sidewalks directly into alpine glaciers in under thirty minutes.",
          tip: "Take the bus No. 12 from hotel Kazakhstan up to Medeu, then ride the three-stage gondola up to Talgar Pass (3,200m) for sweeping views of eternal snow."
        },
        {
          id: "dest-charyn-kolsai",
          name: "Charyn Canyon, Kolsai Lakes & Lake Kaindy",
          subtitle: "The Zhetysu Golden Triangle",
          img: "choryn.jpg",
          bestTime: "June to September",
          highlights: ["Charyn Canyon 'Valley of Castles' red sandstone towers", "Lake Kaindy sunken forest with turquoise glacial waters", "Lower & Middle Kolsai Lakes alpine hiking trail", "Traditional village homestays and horse riding in Saty"],
          desc: "Three hours east of Almaty lies a dramatic shift from steppe to sandstone to alpine paradise. Charyn Canyon drops 300 meters into sedimentary red rock sculpted over 12 million years. An hour further south, the Kolsai Lakes gleam like cut sapphires surrounded by dense Tian Shan spruce, while nearby Lake Kaindy preserves the ghostly trunks of drowned spruce trees rising from freezing turquoise depths created by a 1911 earthquake.",
          tip: "Stay two nights in a guest family in Saty village. Enjoy homemade baursaks and hot tea, and hire a local UAZ van driver to navigate the rocky riverbed track to Kaindy."
        },
        {
          id: "dest-astana",
          name: "Astana — The Futuristic Steppe Capital",
          subtitle: "Bold Architecture Rising from the Plains",
          img: "astana.jpg",
          bestTime: "June to September (avoid harsh -35°C winters)",
          highlights: ["Baiterek Tower panoramic glass sphere observation deck", "Khan Shatyr giant transparent tent with indoor beach", "Hazret Sultan & Astana Grand Mosque (largest in Central Asia)", "Nur Alem Sphere (EXPO 2017 pavilion of future energy)"],
          desc: "Constructed on the windswept northern steppe starting in 1997, Astana is one of the most audacious urban design projects in modern history. Master-planned by Japanese architect Kisho Kurokawa, the Left Bank is a geometric promenade of monumental structures designed by Norman Foster and Manfredi Nicoletti that feels like a science-fiction oasis amidst boundless golden prairie.",
          tip: "Rent an electric scooter along the Ishim River embankment at sunset to watch the towers illuminate in synchronized LED displays."
        },
        {
          id: "dest-burabay",
          name: "Burabay (Borovoe) — The Steppe Oasis",
          subtitle: "Kazakhstan’s Little Switzerland",
          img: "bura.jpg",
          bestTime: "June to August",
          highlights: ["Lake Borovoe & the iconic Sphinx-shaped Zhumbaktas rock", "Okzhetpes cliff rising 300 meters above the pine canopy", "Hike up Bolektau peak for 360-degree lake panoramas", "Abylai Khan clearing and sacred nomadic stone throne"],
          desc: "Two hours north of Astana by modern express highway lies Burabay National Park: an astonishing geological wonder where granite cliffs, pine-clad hills, and tranquil lakes rise dramatically out of the completely flat surrounding steppe. It has served as a sanctuary for nomads, poets, and wellness seekers for centuries.",
          tip: "Rent a rowboat on Lake Borovoe to circle the enigmatic Zhumbaktas rock, which changes its profile from a young maiden to an elderly sage depending on your viewing angle."
        },
        {
          id: "dest-turkestan",
          name: "Turkestan — Sacred Spiritual Heart of the Silk Road",
          subtitle: "Timurid Architectural Marvel & UNESCO Heritage",
          img: "turek.jpg",
          bestTime: "April–May & September–October (avoid scorching July)",
          highlights: ["Mausoleum of Khoja Ahmed Yasawi (UNESCO World Heritage)", "12th-century subterranean Hilvet prayer mosque", "Medieval oriental bathhouse museum", "Caravanserai complex with canal boat parade & theatre show"],
          desc: "For more than eight centuries, Turkestan has been revered across Central Asia as the 'Second Mecca'. At its core stands the monumental mausoleum commissioned by conqueror Timur (Tamerlane) in 1389 for Sufi master Khoja Ahmed Yasawi. Its azure-tiled ribbed dome remains the largest brick dome in Central Asia. Today, historic preservation stands alongside the new Caravanserai Silk Road promenade.",
          tip: "Visit the mausoleum at sunrise when the blue tiles catch the first golden rays and local pilgrims whisper morning prayers in peaceful serenity."
        },
        {
          id: "dest-mangystau",
          name: "Mangystau & Ustyurt Plateau — The Mars of the Steppe",
          subtitle: "Ancient Ocean Beds & Subterranean Sanctuaries",
          img: "mangyt.jpg",
          bestTime: "April–May & September–October",
          highlights: ["Bozzhira tract white limestone towers & chalk canyons", "Torysh Valley of mysterious spherical stone concretions", "Underground rock-hewn mosques of Beket-Ata & Shakpak-Ata", "Tuzbair blinding white salt flat mirror reflections"],
          desc: "Located on the Caspian Sea peninsula in western Kazakhstan, Mangystau is an otherworldly moonscape carved from the bed of the prehistoric Tethys Ocean. Chalk canyons plunge hundreds of meters down to dry sea salt pans, while giant spherical stone balls scatter across the desert for miles. It is also the sacred land of 360 Sufi saints, with underground cave mosques carved directly into chalk cliffs.",
          tip: "This is expedition territory. Hire an experienced local 4WD driver with satellite communication and camp under the Bozzhira fangs under zero light pollution."
        },
        {
          id: "dest-altai",
          name: "Altai Mountains & Mount Belukha",
          subtitle: "The Primal Siberian Frontier",
          img: "altai.jpg",
          bestTime: "July and August",
          highlights: ["Sacred double-headed Mount Belukha (4,506m)", "Lake Markakol alpine nature reserve", "Katon-Karagay national park cedar taiga & maral deer farms", "Authentic wild Altai mountain honey tasting"],
          desc: "Tucked into the far eastern corner where Kazakhstan meets Russia, China, and Mongolia, the Kazakh Altai is a land of dense Siberian larch taiga, turquoise alpine rivers, and snowcapped peaks. Believed in local legend to be the spiritual realm of Shambhala, it remains one of the least spoiled mountain wildernesses on the planet.",
          tip: "Permits for the frontier border zone must be processed 30–45 days ahead through an authorized Kazakh tour operator."
        },
        {
          id: "dest-baikonur",
          name: "Baikonur Cosmodrome",
          subtitle: "Humanity’s Gateway to Space",
          img: "baiko.jpg",
          bestTime: "Coinciding with scheduled Roscosmos Soyuz rocket launches",
          highlights: ["Attending a live manned Soyuz launch to the ISS", "Gagarin's Start (Launch Pad No. 1)", "Buran space shuttle test orbiter museum", "Cosmonaut pre-launch hotel & Avenue of Cosmonauts"],
          desc: "The world's oldest and largest operational space launch facility sits in the desert steppe of Kyzylorda. It was from here on April 12, 1961, that Yuri Gagarin made mankind's first voyage into the cosmos. Today, international crews continue to blast off toward the International Space Station.",
          tip: "Security clearance from Roscosmos requires submitting passport copies at least 50 days in advance through an accredited space tourism agency."
        },
        {
          id: "dest-shymkent",
          name: "Shymkent & Aksu-Zhabagly Nature Reserve",
          subtitle: "Gastronomic Oasis & Central Asia’s Oldest Reserve",
          img: "shymkent.jpg",
          bestTime: "April to June (wild tulip blooming season) & September",
          highlights: ["Aksu-Zhabagly canyon & wild Greig’s / Kaufmann’s tulips", "Shymkent street plov, tandem shashlyk & bakery bazaars", "Sayram ancient Silk Road settlement and pilgrim shrines", "Ancient Sauran fortress walls and underground Karez canals"],
          desc: "Shymkent is Kazakhstan’s warmest, most easygoing metropolis, celebrated across the country for having the most delectable food, the richest clay-oven samsa, and the lowest prices. Just east of the city lies Aksu-Zhabagly, founded in 1926 as Central Asia’s very first nature reserve: home to snow leopards, Himalayan brown bears, and the ancestral botanical origin of the world's garden tulips.",
          tip: "Visit in mid-to-late April to witness entire mountain valleys carpeted in wild crimson and yellow tulips."
        }
      ]
    },

    // ------------------------------------------------------------------------
    // CHAPTER 6: Itineraries (3 Curated Routes)
    // ------------------------------------------------------------------------
    {
      id: "itineraries",
      number: "06",
      title: "Itineraries",
      navLabel: "6. Itineraries",
      summary: "Three field-tested itineraries: The 4-Day Long Weekend, The 7-Day Classic, and the 14-Day Grand Steppe Expedition.",
      itineraries: [
        {
          id: "itin-weekend",
          tag: "4 Days / 3 Nights",
          badgeColor: "gold",
          title: "The Long Weekend: Almaty & Tian Shan Vistas",
          idealFor: "First-time visitors, stopover travelers, and short city breaks",
          pace: "Moderate • City culture + Alpine nature",
          days: [
            {
              day: "Day 1",
              title: "Arrive in Almaty & City Heart",
              desc: "Touch down at ALA airport. Check into hotel. Stroll through Panfilov Park, admire the wooden Zenkov Cathedral, explore the honey and cheese rows at the Green Bazaar. Evening dinner on pedestrian Panfilov Street."
            },
            {
              day: "Day 2",
              title: "Medeu, Shymbulak & Mountain Glaciers",
              desc: "Ride public bus No. 12 up to Medeu ice rink. Board the panoramic gondola to Shymbulak ski resort and ascend to Talgar Pass (3,200m). Enjoy mountaintop lagman. Sunset at Kok Tobe hill overlooking Almaty's glowing street grid."
            },
            {
              day: "Day 3",
              title: "Charyn Canyon Day Expedition",
              desc: "Early departure east via the Kuldzha highway. Spend 3 hours hiking down through the red sandstone 'Valley of Castles' to the rushing Charyn River. Picnic lunch and return to Almaty for dinner."
            },
            {
              day: "Day 4",
              title: "Museums & Souvenir Shopping",
              desc: "Visit the Central State Museum or the Kasteyev Art Museum. Pick up Almaty chocolate boxes (Rakhat) and dried steppe herbs before heading to the airport for departure."
            }
          ]
        },
        {
          id: "itin-classic",
          tag: "7 Days / 6 Nights",
          badgeColor: "teal",
          title: "The Classic Kazakhstan: Two Capitals & Silk Road",
          idealFor: "Travelers seeking the ultimate overview of modern architecture, Silk Road history, and mountain wilderness",
          pace: "Active • Domestic flights & express trains",
          days: [
            {
              day: "Days 1–2",
              title: "Almaty & The High Tian Shan",
              desc: "Explore historic Almaty, Medeu gorge, Shymbulak, and traditional Kazakh dining. Savor beshbarmak and fresh baursaks."
            },
            {
              day: "Day 3",
              title: "The Golden Triangle (Charyn & Kolsai)",
              desc: "Full-day trip to Charyn Canyon and the lower lake of Kolsai. Overnight in a traditional wooden guesthouse in Saty village."
            },
            {
              day: "Day 4",
              title: "Lake Kaindy Sunken Forest & Fly to Turkestan",
              desc: "Morning off-road excursion to Lake Kaindy's drowned spruce trees. Return to Almaty airport for a short domestic flight to Turkestan (HSA)."
            },
            {
              day: "Day 5",
              title: "The Sacred Spine of Turkestan",
              desc: "Full day admiring the Khoja Ahmed Yasawi Mausoleum, subterranean Hilvet mosque, and ancient citadel. Evening walk along the Caravanserai canal with water show."
            },
            {
              day: "Day 6",
              title: "Fly to Astana & Left Bank Metropolis",
              desc: "Morning flight to Astana. Check in on the Left Bank. Visit Baiterek Tower, Khan Shatyr tent, and the National Museum of the Republic of Kazakhstan."
            },
            {
              day: "Day 7",
              title: "Hazret Sultan Mosque & Departure",
              desc: "Marvel at the marble courtyards of Hazret Sultan Mosque and Astana Grand Mosque. Final stroll on the Ishim riverfront before international departure."
            }
          ]
        },
        {
          id: "itin-grand",
          tag: "14 Days / 13 Nights",
          badgeColor: "deep",
          title: "The Grand Steppe Expedition: Across Canyons & Deserts",
          idealFor: "Adventurers wanting to experience the complete spectrum from Caspian moonscapes to Silk Road citadels and high glaciers",
          pace: "Intrepid • 4WD camping, night sleeper trains & domestic flights",
          days: [
            {
              day: "Days 1–4",
              title: "Almaty & The Zhetysu Ring",
              desc: "Almaty city, Big Almaty Lake, 2-day loop through Charyn Canyon, Saty village, Kaindy sunken forest, and Kolsai Lakes."
            },
            {
              day: "Days 5–7",
              title: "The Silk Road South (Shymkent, Otrar & Turkestan)",
              desc: "Overnight Talgo train to the south. Explore Shymkent's culinary bazaars, the ancient ruins of Otrar library oasis, Sauran clay fortress walls, and Yasawi shrine."
            },
            {
              day: "Days 8–10",
              title: "Astana & The Burabay Granite Lakes",
              desc: "Fly to Astana. Explore the futuristic capital followed by a scenic day trip north to the granite peaks and pine forests of Burabay National Park."
            },
            {
              day: "Days 11–13",
              title: "The Alien Desert of Mangystau (Aktau & Bozzhira)",
              desc: "Fly west across the desert to Aktau on the Caspian Sea. Embark on a 2-day 4WD desert safari to the white limestone towers of Bozzhira and Tuzbair salt flats."
            },
            {
              day: "Day 14",
              title: "Caspian Sunset & Farewell",
              desc: "Relax along the Aktau sea rock trail with Caspian sturgeon and tea before connecting back to Almaty or Astana for your flight home."
            }
          ]
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.KAZAKHSTAN_TRAVEL_GUIDE = KAZAKHSTAN_TRAVEL_GUIDE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KAZAKHSTAN_TRAVEL_GUIDE;
}

