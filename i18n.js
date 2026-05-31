// ===== BREW.TECH i18n — RU (default) <-> EN, with geo-detect =====
(function(){
  const CIS = ['RU','BY','KZ','KG','AM','AZ','MD','TJ','TM','UZ','UA','GE','EE','LV','LT'];

  // RU(normalized) -> EN
  const DICT = {
  // ---- misc labels / svg text ----
  "ГАРАНТИЯ":"WARRANTY",
  "Pro Grinder · плоские 75 мм":"Pro Grinder · flat 75 mm",
  "конический 64 мм (рынок)":"conical 64 mm (market)",
  "93.5°C · 9.0 БАР":"93.5°C · 9.0 BAR",
  "14.2 г":"14.2 g",
  // ---- titles ----
  "BREW.TECH — профессиональное оборудование для кофе":"BREW.TECH — Professional Coffee Equipment",
  "Pro Espresso — кофемашина BREW.TECH":"Pro Espresso — BREW.TECH Coffee Machine",
  "Pro Grinder — кофемолка BREW.TECH":"Pro Grinder — BREW.TECH Grinder",
  "Статьи — BREW.TECH":"Articles — BREW.TECH",

  // ---- nav / footer (from partials) ----
  "Оборудование":"Equipment",
  "Кофемашина":"Coffee Machine",
  "Кофемолка":"Grinder",
  "Где купить":"Where to Buy",
  "Статьи":"Articles",
  "Платформа":"Platform",
  "Миссия":"Mission",
  "О нас":"About",
  "Кому подходит":"Who It's For",
  "Запросить демо":"Request a Demo",
  "// КАТАЛОГ 2026":"// CATALOG 2026",
  "// РАЗДЕЛЫ":"// SECTIONS",
  "Pro Espresso":"Pro Espresso",
  "Pro Grinder":"Pro Grinder",
  "Двухгруппная профессиональная машина · от 489 000 ₽":"Two-group professional machine · from ₽489,000",
  "Кофемолка с плоскими жерновами · от 189 000 ₽":"Grinder with flat burrs · from ₽189,000",
  "Кофемашина BT-PRO/01":"Coffee Machine BT-PRO/01",
  "Кофемолка BT-GR/75":"Grinder BT-GR/75",
  "Прозрачная цена":"Transparent Pricing",
  "Заказать демо":"Order a Demo",
  "Главная":"Home",
  "Кофемашина Pro Espresso":"Pro Espresso Machine",
  "Кофемолка Pro Grinder":"Pro Grinder",
  "// ОБОРУДОВАНИЕ":"// EQUIPMENT",
  "// КОМПАНИЯ":"// COMPANY",
  "// КОНТАКТЫ":"// CONTACTS",
  "Профессиональное оборудование для кофе. Технология. Минимализм. Надёжность. Собрано и поддерживается в России.":"Professional coffee equipment. Technology. Minimalism. Reliability. Built and supported in Russia.",
  "Аксессуары":"Accessories",
  "Запчасти":"Spare Parts",
  "Брендбук ↗":"Brand Book ↗",
  "© 2026 BREW.TECH · ВСЕ ПРАВА ЗАЩИЩЕНЫ":"© 2026 BREW.TECH · ALL RIGHTS RESERVED",
  "BUILD 2026.05 · МОСКВА / НИЖНИЙ / КАЗАНЬ":"BUILD 2026.05 · MOSCOW / NIZHNY / KAZAN",
  "Москва, Нижний, Казань":"Moscow, Nizhny, Kazan",

  // ---- index hero ----
  "профессиональное оборудование для кофе":"professional coffee equipment",
  "Машина,":"A machine",
  "которая":"that judges",
  "судит":"coffee",
  "о кофе":"by taste",
  "· КОФЕМАШИНА":"· COFFEE MACHINE",
  "в. 3.2 / 2026":"v. 3.2 / 2026",
  "2 ГРУППЫ · PID ±0.2°C · ОТКРЫТЫЙ API":"2 GROUPS · PID ±0.2°C · OPEN API",
  "BREW.TECH — для тех, кто судит о кофе по вкусу, а не по бюджету на оборудование. Надёжные технологичные решения по справедливым ценам.":"BREW.TECH — for those who judge coffee by taste, not by their equipment budget. Reliable, technological solutions at fair prices.",
  "Смотреть оборудование":"View equipment",
  "Собрано в РФ":"Built in Russia",
  "Москва · Нижний · Казань":"Moscow · Nizhny · Kazan",
  "Гарантия":"Warranty",
  "12 месяцев · поддержка 24/7":"12 months · 24/7 support",
  "обновления по сети · открытый API":"over-the-air updates · open API",
  "ТЕХНОЛОГИЯ":"TECHNOLOGY",
  "МИНИМАЛИЗМ":"MINIMALISM",
  "НАДЁЖНОСТЬ":"RELIABILITY",
  "ДОСТУПНАЯ ТЕХНОЛОГИЧНОСТЬ":"AFFORDABLE TECHNOLOGY",
  "ПРОЗРАЧНАЯ ЦЕНА":"TRANSPARENT PRICING",
  "ПОДДЕРЖКА 24/7":"24/7 SUPPORT",

  // ---- index mission ----
  "[ МИССИЯ ]":"[ MISSION ]",
  "Аттестат зрелости рынка, где главное —":"A maturity certificate for a market where what matters is",
  "профессионализм":"professionalism",
  ", а не платёжеспособность.":", not deep pockets.",
  "Мы верим, что качественное оборудование":"We believe quality equipment",
  "не должно быть дорогим":"shouldn't be expensive",
  "к цене западных аналогов":"vs the price of Western equivalents",
  "аптайм за первый год":"uptime in the first year",
  "мес":"mo",
  "гарантия на каждый узел":"warranty on every component",
  "BREW.TECH предоставляет надёжные технологичные решения по справедливым ценам":"BREW.TECH delivers reliable, technological solutions at fair prices",
  ", позволяя малым и средним кофейням конкурировать с крупными сетями на равных.":", letting small and mid-size cafés compete with big chains on equal terms.",
  "Мы не скрываем цену — мы объясняем её. Никаких скрытых наценок: только реальные расходы — детали, зарплаты инженеров, доставка — плюс честная прибыль.":"We don't hide the price — we explain it. No hidden markups: only real costs — parts, engineers' salaries, delivery — plus an honest profit.",
  "Каждая машина BREW.TECH — это платформа для экспериментирования, где каждый бариста становится инженером своего кофе.":"Every BREW.TECH machine is a platform for experimentation, where every barista becomes the engineer of their own coffee.",

  // ---- index values ----
  "[ ЦЕННОСТИ ]":"[ VALUES ]",
  "Три принципа,":"Three principles",
  "на которых стоит":"that underpin",
  "каждая":"every",
  "машина":"machine",
  "Доступная технологичность":"Affordable technology",
  "Профессиональные узлы, прошивки и термостабильность — по цене, которая открывает рынок для независимых кофеен и молодых бариста.":"Professional components, firmware and thermal stability — at a price that opens the market to independent cafés and young baristas.",
  "Прозрачность цены":"Price transparency",
  "Мы показываем структуру стоимости открыто: детали, зарплата инженерам, доставка, честная прибыль. Никаких маркетинговых наценок «за бренд».":"We show the cost structure openly: parts, engineers' pay, delivery, honest profit. No marketing markups 'for the brand'.",
  "Профессионализм":"Professionalism",
  "Каждая машина проходит 142 точки контроля. Каждое обновление — это инженерный диалог с бариста и владельцами кофеен.":"Every machine passes 142 inspection points. Every update is an engineering dialogue with baristas and café owners.",

  // ---- index products ----
  "[ ОБОРУДОВАНИЕ ]":"[ EQUIPMENT ]",
  "Линейка оборудования":"Equipment lineup",
  "Каждая машина — платформа.":"Every machine is a platform.",
  "ФЛАГМАН":"FLAGSHIP",
  "ФЛАГМАН · 2 ГРУППЫ":"FLAGSHIP · 2 GROUPS",
  "от 489 000 ₽":"from ₽489,000",
  "/ без НДС":"/ excl. VAT",
  "Двухгруппная профессиональная машина с двойным контуром нагрева, 12 программируемыми профилями давления и открытым API для интеграции с кассой и учётом.":"A two-group professional machine with a dual heating circuit, 12 programmable pressure profiles and an open API for POS and accounting integration.",
  "КОНТУРЫ":"CIRCUITS",
  "2 × 1.8 л":"2 × 1.8 L",
  "ДАВЛЕНИЕ":"PRESSURE",
  "9–15 бар":"9–15 bar",
  "ПРОФИЛИ":"PROFILES",
  "12 шт.":"12",
  "КОД · BT-PRO-2X":"SKU · BT-PRO-2X",
  "Подробнее":"Learn more",
  "НОВИНКА · 2026":"NEW · 2026",
  "ПЛОСКИЕ ЖЕРНОВА · ДОЗИРОВАНИЕ ПО ВЕСУ":"FLAT BURRS · GRAVIMETRIC DOSING",
  "от 189 000 ₽":"from ₽189,000",
  "Кофемолка с плоскими 75 мм жерновами, точным дозированием по весу с погрешностью ±0.1 г и бесшумным двигателем мощностью 1500 Вт.":"A grinder with flat 75 mm burrs, precise gravimetric dosing accurate to ±0.1 g and a quiet 1500 W motor.",
  "ЖЕРНОВА":"BURRS",
  "плоские 75 мм":"flat 75 mm",
  "ТОЧНОСТЬ":"ACCURACY",
  "±0.1 г":"±0.1 g",
  "УРОВЕНЬ ШУМА":"NOISE LEVEL",
  "62 дБ":"62 dB",
  "КОД · BT-GR-75":"SKU · BT-GR-75",

  // ---- index where to buy ----
  "[ ГДЕ КУПИТЬ ]":"[ WHERE TO BUY ]",
  "Купить можно":"Available",
  "у":"from",
  "авторизованных партнёров":"authorized partners",
  "по всей России.":"across Russia.",
  "Оборудование BREW.TECH официально продаётся через сеть авторизованных дистрибьюторов. Все партнёры предоставляют полную гарантию 12 месяцев, сервисное обслуживание и помощь с монтажом.":"BREW.TECH equipment is sold officially through a network of authorized distributors. All partners provide a full 12-month warranty, service support and installation help.",
  "Территория Кофе":"Territoriya Kofe",
  "Москва · Санкт-Петербург":"Moscow · St. Petersburg",
  "Перейти к партнёру":"Visit partner",
  "Рефро":"Refro",
  "Москва · регионы":"Moscow · regions",
  "Энтеро":"Entero",
  "федеральная сеть":"federal network",
  "Траст Холод":"Trust Holod",
  "Москва · Поволжье":"Moscow · Volga region",
  "ВайтГудс":"WhiteGoods",
  "Москва · Урал · Сибирь":"Moscow · Urals · Siberia",
  "Напрямую от BREW.TECH":"Directly from BREW.TECH",
  "заводская цена · по запросу":"factory price · on request",

  // ---- index platform ----
  "[ ПЛАТФОРМА ]":"[ PLATFORM ]",
  "Это не просто машина.":"It's not just a machine.",
  "Это":"It's a",
  "платформа":"platform",
  "для экспериментов.":"for experiments.",
  "Твоя идея":"Your idea",
  "Бариста замечает, что профиль давления можно улучшить, а владелец — что отчёт о расходе зерна должен выгружаться в 1С.":"A barista notices a pressure profile could be improved; an owner wants the bean-consumption report exported to their accounting system.",
  "Наше обновление":"Our update",
  "Команда BREW.TECH принимает запрос, инженеры пишут прошивку. Обновление прилетает на все машины линейки одновременно по сети.":"The BREW.TECH team takes the request, engineers write the firmware. The update reaches every machine in the lineup at once, over the air.",
  "Твоя машина":"Your machine",
  "Машина становится умнее с каждым месяцем эксплуатации. То, что вчера было идеей — завтра приносит выручку.":"The machine gets smarter every month it runs. What was an idea yesterday brings in revenue tomorrow.",
  "// ВЛАДЕЛЬЦЫ":"// OWNERS",
  "«Окупается не низкой ценой, а своей надёжностью.»":"\u201CIt pays off through reliability, not a low price.\u201D",
  "// БАРИСТА":"// BARISTAS",
  "«Твой инструмент. Твои правила.»":"\u201CYour tool. Your rules.\u201D",
  "// РЕСТОРАТОРЫ":"// RESTAURATEURS",
  "«Кофе, который не требует внимания.»":"\u201CCoffee that needs no attention.\u201D",
  "// ЭНТУЗИАСТЫ":"// ENTHUSIASTS",
  "«Лаборатория для экспериментов.»":"\u201CA lab for experiments.\u201D",

  // ---- index audience ----
  "[ АУДИТОРИЯ ]":"[ AUDIENCE ]",
  "Для тех,":"For those",
  "кто":"who",
  "варит":"brew",
  "всерьёз.":"seriously.",
  "Владельцы кофеен":"Café owners",
  "возраст":"age",
  "доход":"income",
  "средний+":"mid+",
  "сегмент":"segment",
  "малый бизнес":"small business",
  "Предприниматели в поиске баланса цены и качества. Боятся высоких затрат и простоев оборудования.":"Entrepreneurs seeking a balance of price and quality. Wary of high costs and equipment downtime.",
  "Профессиональные бариста":"Professional baristas",
  "опыт":"experience",
  "3+ года":"3+ years",
  "профиль":"focus",
  "спешелти":"specialty",
  "Перфекционисты, ценят технологию. Понимают, что некачественное оборудование влияет на вкус кофе.":"Perfectionists who value technology. They know poor equipment affects the taste of coffee.",
  "Рестораны и кафе":"Restaurants & cafés",
  "размер":"size",
  "малые / средние":"small / mid",
  "фокус":"focus",
  "надёжность":"reliability",
  "график":"schedule",
  "14 ч × 7 дней":"14 h × 7 days",
  "Нужно надёжное оборудование, простое в использовании и обслуживании персоналом без долгого обучения.":"They need reliable equipment that's simple to use and service, without long staff training.",
  "Гостиницы и отели":"Hotels & inns",
  "уровень":"level",
  "3–5 звёзд":"3–5 stars",
  "гость":"guest",
  "требователен":"demanding",
  "интеграция":"integration",
  "с системой отеля":"with hotel system",
  "Профессиональный уровень кофе для гостей — без сложности обучения линейного персонала.":"Professional-grade coffee for guests — without the complexity of training frontline staff.",

  // ---- index tech ----
  "[ ТЕХНОЛОГИЯ ]":"[ TECHNOLOGY ]",
  "Инженерия,":"Engineering,",
  "а не":"not",
  "маркетинг":"marketing",
  "// ДИСПЛЕЙ":"// DISPLAY",
  "5.0\" IPS · 60 Гц":"5.0\" IPS · 60 Hz",
  "// ГРУППА":"// GROUP",
  "Термостабильность контура (PID)":"Circuit thermal stability (PID)",
  "Программируемые профили давления":"Programmable pressure profiles",
  "12 шт. · обн. по сети":"12 · OTA updates",
  "Открытый API для кассы и учёта":"Open API for POS and accounting",
  "Удалённая диагностика 24/7":"Remote diagnostics 24/7",
  "Контроль износа жерновов":"Burr wear monitoring",
  "в реальном времени":"in real time",
  "Локальный сервис в 14 городах РФ":"Local service in 14 Russian cities",
  "приезд ≤ 48 ч":"arrival ≤ 48 h",
  "Запчасти на складе":"Spare parts in stock",
  "7 500 позиций":"7,500 items",

  // ---- index price ----
  "[ ПРОЗРАЧНАЯ ЦЕНА ]":"[ TRANSPARENT PRICING ]",
  "Мы не скрываем цену.":"We don't hide the price.",
  "Мы":"We",
  "объясняем":"explain",
  "её.":"it.",
  "Никаких маркетинговых наценок «за бренд». Только реальные расходы плюс честная инженерная прибыль. Так выглядит каждая Pro Espresso:":"No marketing markups 'for the brand'. Only real costs plus an honest engineering profit. Here's how every Pro Espresso breaks down:",
  "// детали и компоненты":"// parts and components",
  "// зарплата инженерам":"// engineers' salaries",
  "// сборка и контроль качества":"// assembly and quality control",
  "// доставка":"// delivery",
  "// честная прибыль (≈10%)":"// honest profit (≈10%)",
  "Pro Espresso · итого":"Pro Espresso · total",
  "// аналог западного бренда: 840 000 — 980 000 ₽":"// Western-brand equivalent: ₽840,000 — ₽980,000",

  // ---- index contact ----
  "[ СВЯЗАТЬСЯ / 08 ]":"[ GET IN TOUCH / 08 ]",
  "Запросить":"Request",
  "демо":"a demo",
  "в вашей":"at your",
  "кофейне":"café",
  "Мы привезём Pro Espresso, поставим рядом с вашей текущей машиной и дадим бариста сварить пять чашек. Сравнение — честное.":"We'll bring a Pro Espresso, set it next to your current machine and let your barista pull five cups. An honest comparison.",
  "// ИМЯ И ФАМИЛИЯ":"// FULL NAME",
  "// ТЕЛЕФОН":"// PHONE",
  "// ТИП ЗАВЕДЕНИЯ":"// VENUE TYPE",
  "Независимая кофейня":"Independent café",
  "Сетевая кофейня":"Café chain",
  "Ресторан / кафе":"Restaurant / café",
  "Отель / гостиница":"Hotel / inn",
  "Энтузиаст / лаборатория":"Enthusiast / lab",
  "// ГОРОД":"// CITY",
  "Запросить демо →":"Request a demo →",

  // ---- machine page ----
  "ФЛАГМАН · 2026":"FLAGSHIP · 2026",
  "Двухгруппная профессиональная кофемашина с двойным контуром нагрева, программируемыми профилями давления и открытой платформой для интеграций.":"A two-group professional coffee machine with a dual heating circuit, programmable pressure profiles and an open integration platform.",
  "Технические характеристики":"Technical specs",
  "12 мес.":"12 mo",
  "· 540 × 580 × 460 ММ · 56 КГ":"· 540 × 580 × 460 MM · 56 KG",
  "2 ГРУППЫ":"2 GROUPS",
  "12 ПРОФИЛЕЙ":"12 PROFILES",
  "ОТКРЫТЫЙ API":"OPEN API",
  "ГАРАНТИЯ 12 МЕСЯЦЕВ":"12-MONTH WARRANTY",
  "ОБНОВЛЕНИЯ ПО СЕТИ":"OVER-THE-AIR UPDATES",
  "[ ВОЗМОЖНОСТИ ]":"[ FEATURES ]",
  "Шесть инженерных":"Six engineering",
  "решений, которые":"solutions that",
  "меняют":"transform",
  "экстракцию":"extraction",
  "Двойной контур нагрева":"Dual heating circuit",
  "Раздельные котлы для воды и пара. Стабильность температуры ±0.2 °C даже при пиковой нагрузке — шот за шотом с одинаковым вкусом.":"Separate boilers for water and steam. Temperature stability of ±0.2 °C even at peak load — shot after shot with identical taste.",
  "12 профилей давления":"12 pressure profiles",
  "Программируемая кривая давления для каждого зерна: пре-инфузия, подъём, плато, спад. Профили обновляются по сети — получайте новые от команды.":"A programmable pressure curve for every bean: pre-infusion, ramp, plateau, decline. Profiles update over the air — get new ones from the team.",
  "Открытый API":"Open API",
  "REST и MQTT для интеграции с кассой, системой учёта или системой управления отелем. Каждый шот — событие, которое можно посчитать.":"REST and MQTT to integrate with your POS, accounting or hotel management system. Every shot is an event you can count.",
  "Группа E61":"E61 group",
  "Классический термосифон E61 с принудительным контуром нагрева — проверенная конструкция, простая в обслуживании, доступные запчасти.":"The classic E61 thermosiphon with a forced heating circuit — a proven design, easy to service, with affordable spare parts.",
  "Обновления по сети":"Over-the-air updates",
  "Новый профиль, новая прошивка, новая фича — прилетают на все машины линейки. Сегодняшняя машина завтра умеет больше.":"A new profile, new firmware, a new feature — all reach every machine in the lineup. Today's machine does more tomorrow.",
  "Удалённая диагностика":"Remote diagnostics",
  "Машина сама сообщает инженерам о неисправности до того, как вы её заметите. SLA на выезд — 48 часов.":"The machine reports a fault to our engineers before you even notice it. On-site SLA — 48 hours.",
  "[ ХАРАКТЕРИСТИКИ ]":"[ SPECIFICATIONS ]",
  "Полная":"Full",
  "спецификация":"specification",
  "2 группы":"2 groups",
  "// ПОДДОН":"// DRIP TRAY",
  "съёмный · 1.6 л":"removable · 1.6 L",
  "// ГИДРАВЛИКА И НАГРЕВ":"// HYDRAULICS & HEATING",
  "Контуры нагрева":"Heating circuits",
  "Давление помпы":"Pump pressure",
  "Стабильность температуры":"Temperature stability",
  "Тип группы":"Group type",
  "E61 · термосифон":"E61 · thermosiphon",
  "Подача воды":"Water supply",
  "от водопровода / бак 3 л":"mains / 3 L tank",
  "// ЭЛЕКТРОНИКА":"// ELECTRONICS",
  "Дисплей":"Display",
  "Профили давления":"Pressure profiles",
  "Подключение":"Connectivity",
  "// ГАБАРИТЫ И ПИТАНИЕ":"// DIMENSIONS & POWER",
  "Размеры (Ш × Г × В)":"Dimensions (W × D × H)",
  "540 × 580 × 460 мм":"540 × 580 × 460 mm",
  "Вес":"Weight",
  "56 кг":"56 kg",
  "Питание":"Power",
  "380 В · 5.2 кВт":"380 V · 5.2 kW",
  "Уровень шума":"Noise level",
  "≤ 58 дБ":"≤ 58 dB",
  "12 месяцев":"12 months",
  "[ СРАВНЕНИЕ ]":"[ COMPARISON ]",
  "Pro Espresso против":"Pro Espresso vs",
  "привычных":"the usual",
  "флагманов":"flagships",
  "Характеристика":"Feature",
  "Импортный флагман A":"Imported flagship A",
  "Импортный флагман B":"Imported flagship B",
  "Цена":"Price",
  "двойной независимый":"dual, independent",
  "двойной":"dual",
  "12 · обновления по сети":"12 · OTA updates",
  "6 · фиксированные":"6 · fixed",
  "нет":"no",
  "только REST":"REST only",
  "Сервис в РФ":"Service in Russia",
  "14 городов · 48 ч":"14 cities · 48 h",
  "2 города":"2 cities",
  "дилер":"dealer",
  "под заказ":"on order",
  "24 месяца":"24 months",
  "[ КОМУ ПОДХОДИТ ]":"[ WHO IT'S FOR ]",
  "Pro Espresso подходит":"Pro Espresso fits",
  "трём":"three",
  "типам":"types",
  "заведений.":"of venues.",
  "// СЦЕНАРИЙ 01":"// SCENARIO 01",
  "Окупается надёжностью, а не ценой. Поддержка 24/7, запчасти со склада, понятная стоимость — владелец спит спокойно, бариста делает кофе.":"Pays off through reliability, not price. 24/7 support, parts in stock, clear costs — the owner sleeps soundly, the barista makes coffee.",
  "11 мес.":"11 mo",
  "окупаемость":"payback",
  "// СЦЕНАРИЙ 02":"// SCENARIO 02",
  "Спешелти-проект":"Specialty project",
  "Полный контроль над кривой давления, термостабильность ±0.2 °C, профили для каждой обжарки. Бариста — инженер своего кофе.":"Full control over the pressure curve, ±0.2 °C thermal stability, profiles for every roast. The barista is the engineer of their coffee.",
  "профилей":"profiles",
  "// СЦЕНАРИЙ 03":"// SCENARIO 03",
  "Отель / ресторан":"Hotel / restaurant",
  "Интеграция с системой управления отелем через API. Бариста или линейный сотрудник — нажимает одну кнопку, получает идентичный результат.":"Integration with the hotel management system via API. A barista or frontline employee presses one button and gets an identical result.",
  "чашек / день":"cups / day",
  "Прозрачная цена.":"Transparent pricing.",
  "Без наценок за бренд.":"No markups for the brand.",
  "Стоимость складывается из деталей, зарплат инженеров, сборки, контроля качества и честной прибыли ≈10%. Аналог западного бренда: 840 000 — 980 000 ₽.":"The price is made up of parts, engineers' salaries, assembly, quality control and an honest ≈10% profit. Western-brand equivalent: ₽840,000 — ₽980,000.",
  "// PRO ESPRESSO · ИТОГО":"// PRO ESPRESSO · TOTAL",
  "без НДС · доставка включена":"excl. VAT · delivery included",
  "Заказать":"Order",
  "Разбор цены":"Price breakdown",
  "[ ЗАПРОСИТЬ ДЕМО ]":"[ REQUEST A DEMO ]",
  "Пять чашек,":"Five cups,",
  "одно":"one",
  "сравнение":"comparison",
  "Мы привезём Pro Espresso, поставим рядом с вашей текущей машиной и дадим бариста сварить пять чашек на обеих. Сравнение — честное, ваш выбор — осознанный.":"We'll bring a Pro Espresso, set it next to your current machine and let your barista pull five cups on each. An honest comparison, an informed choice.",
  "// КОММЕНТАРИЙ":"// COMMENT",
  "Запросить демо Pro Espresso →":"Request a Pro Espresso demo →",

  // ---- grinder page ----
  "Профессиональная кофемолка с плоскими 75 мм жерновами и точным дозированием по весу. Погрешность ±0.1 г — шот за шотом с одинаковым весом и помолом.":"A professional grinder with flat 75 mm burrs and precise gravimetric dosing. ±0.1 g accuracy — shot after shot with the same weight and grind.",
  "Характеристики":"Specifications",
  "ШУМ":"NOISE",
  "· 220 × 580 × 290 ММ · 18 КГ":"· 220 × 580 × 290 MM · 18 KG",
  "ПЛОСКИЕ ЖЕРНОВА 75 ММ":"FLAT 75 MM BURRS",
  "ДОЗИРОВАНИЕ ПО ВЕСУ":"GRAVIMETRIC DOSING",
  "±0.1 Г":"±0.1 G",
  "1500 ВТ":"1500 W",
  "62 ДБ":"62 DB",
  "решений для идеального":"solutions for the perfect",
  "помола":"grind",
  "Плоские жернова 75 мм":"Flat 75 mm burrs",
  "Закалённая сталь с титановым напылением. Равномерный помол без «пыли» — чище экстракция, ярче дескрипторы во вкусе.":"Hardened steel with a titanium coating. An even grind with no 'fines' — cleaner extraction, brighter flavor descriptors.",
  "Дозирование по весу":"Gravimetric dosing",
  "Встроенные тензодатчики останавливают помол с погрешностью ±0.1 г. Шот за шотом — одинаковая доза без ручного взвешивания.":"Built-in load cells stop grinding within ±0.1 g. Shot after shot — the same dose, with no manual weighing.",
  "Шаговая регулировка":"Stepped adjustment",
  "Микрометрический винт со шкалой и памятью на 6 настроек. Переключение зерна за секунды — без потери калибровки.":"A micrometric screw with a scale and memory for 6 settings. Switch beans in seconds — without losing calibration.",
  "Двигатель 1500 Вт":"1500 W motor",
  "Прямой привод с термозащитой и стабилизацией оборотов. Уровень шума не выше 62 дБ — не мешает разговору гостей.":"Direct drive with thermal protection and speed stabilization. Noise no higher than 62 dB — it won't disturb guests' conversation.",
  "Счётчик износа":"Wear counter",
  "Прошивка считает суммарный пробег жерновов и сообщает, когда пора менять. Не вкус начинает портиться — а вы уже знаете.":"The firmware tracks total burr mileage and tells you when it's time to replace them. The taste doesn't start to suffer — you already know.",
  "Интеграция с машиной":"Machine integration",
  "Совместимость с Pro Espresso по тому же API: один профиль зерна — один профиль давления. Связка работает как единая система.":"Compatible with Pro Espresso over the same API: one bean profile, one pressure profile. The pair works as a single system.",
  "[ ПОМОЛ ]":"[ GRIND ]",
  "Почему плоские жернова":"Why flat",
  "75 мм":"75 mm",
  "— это важно.":"burrs matter.",
  "// РАСПРЕДЕЛЕНИЕ ЧАСТИЦ":"// PARTICLE DISTRIBUTION",
  "Pro Grinder · мкм":"Pro Grinder · µm",
  "Узкое распределение частиц":"Narrow particle distribution",
  "Плоские жернова дают помол с одним пиком вместо двух — вода проходит через таблетку равномерно, экстракция чище.":"Flat burrs produce a grind with one peak instead of two — water passes through the puck evenly, extraction is cleaner.",
  "Меньше «мелочи» и «крупки»":"Fewer fines and boulders",
  "Меньше сверхмелких частиц, которые перезаваривают и дают горечь. Меньше крупных, которые недозаваривают и дают кислинку.":"Fewer ultra-fine particles that over-extract and add bitterness. Fewer large ones that under-extract and add sourness.",
  "Стабильность от шота к шоту":"Shot-to-shot consistency",
  "Размер 75 мм даёт большой режущий путь и низкие обороты — меньше нагрев, меньше окисление масел, стабильный вкус весь день.":"The 75 mm size gives a long cutting path and low RPM — less heat, less oil oxidation, a stable taste all day.",
  "Ресурс 800 кг зерна":"800 kg bean lifespan",
  "Закалённая сталь с титановым напылением держит остроту в 3.5 раза дольше обычной. Замена — раз в 2–3 года при средней нагрузке.":"Hardened steel with a titanium coating stays sharp 3.5× longer than ordinary steel. Replacement — once every 2–3 years at average load.",
  "// БУНКЕР":"// HOPPER",
  "1.5 кг · с УФ":"1.5 kg · UV",
  "// ЖЕРНОВА":"// BURRS",
  "// ЛОТОК":"// CRADLE",
  "для портафильтра":"for portafilter",
  "// МЕХАНИКА":"// MECHANICS",
  "Тип жерновов":"Burr type",
  "плоские · 75 мм":"flat · 75 mm",
  "Материал":"Material",
  "закалённая сталь · титан":"hardened steel · titanium",
  "Ресурс жерновов":"Burr lifespan",
  "800 кг зерна":"800 kg of beans",
  "Регулировка помола":"Grind adjustment",
  "микрометрическая · 6 пресетов":"micrometric · 6 presets",
  "Скорость вращения":"Rotation speed",
  "1450 об/мин":"1450 rpm",
  "// ДОЗИРОВАНИЕ":"// DOSING",
  "Принцип":"Method",
  "по весу · тензодатчики":"gravimetric · load cells",
  "Точность":"Accuracy",
  "± 0.1 г":"± 0.1 g",
  "Диапазон дозы":"Dose range",
  "7–24 г":"7–24 g",
  "Скорость одной дозы":"Single-dose speed",
  "7–10 секунд":"7–10 seconds",
  "Калибровка":"Calibration",
  "автоматическая":"automatic",
  "Бункер для зерна":"Bean hopper",
  "1.5 кг · с УФ-защитой":"1.5 kg · UV-protected",
  "220 × 580 × 290 мм":"220 × 580 × 290 mm",
  "18 кг":"18 kg",
  "220 В · 1500 Вт":"220 V · 1500 W",
  "Та же логика, что и для Pro Espresso: реальные расходы, честная прибыль ≈10%. Аналог западного бренда: 320 000 — 380 000 ₽.":"The same logic as Pro Espresso: real costs, an honest ≈10% profit. Western-brand equivalent: ₽320,000 — ₽380,000.",
  "// PRO GRINDER · ИТОГО":"// PRO GRINDER · TOTAL",
  "+ к кофемашине":"+ add the machine",
  "Пять помолов,":"Five grinds,",
  "Мы привезём Pro Grinder, поставим рядом с вашей текущей кофемолкой и дадим бариста смолоть пять доз на обеих. Разницу видно уже на первой чашке.":"We'll bring a Pro Grinder, set it next to your current grinder and let your barista grind five doses on each. The difference shows in the very first cup.",
  "Запросить демо Pro Grinder →":"Request a Pro Grinder demo →",

  // ---- articles index ----
  "[ СТАТЬИ И МАТЕРИАЛЫ ]":"[ ARTICLES & STORIES ]",
  "Инженерия":"Engineering",
  "в каждой":"in every",
  "чашке":"cup",
  "Как устроены наши машины, почему «прозрачная цена» — это инженерное решение, а не маркетинг, и что значит делать кофейное оборудование в России в 2026 году.":"How our machines work, why 'transparent pricing' is an engineering decision and not marketing, and what it means to build coffee equipment in Russia in 2026.",
  "ГЛАВНОЕ":"FEATURED",
  "7 МИН ЧТЕНИЯ":"7 MIN READ",
  "// ЭКОНОМИКА":"// ECONOMICS",
  "05 МАЯ 2026":"MAY 05, 2026",
  "Почему западный аналог стоит 940 000 ₽, а наш — 489 000 ₽. И это не демпинг.":"Why the Western equivalent costs ₽940,000 and ours ₽489,000. And it's not dumping.",
  "Подробная анатомия стоимости профессиональной кофемашины. Из чего складывается цена импортного флагмана, какая часть — это маркетинг и дилерская сеть, а какая — реальная инженерия. И почему делать качественное оборудование в России можно дешевле без потери качества.":"A detailed anatomy of the price of a professional coffee machine. What makes up the cost of an imported flagship, how much of it is marketing and the dealer network, and how much is real engineering. And why quality equipment can be built in Russia for less, without losing quality.",
  "Дмитрий Левин · CTO BREW.TECH":"Dmitry Levin · CTO BREW.TECH",
  "Читать":"Read",
  "ИНЖЕНЕРИЯ":"ENGINEERING",
  "5 МИН ЧТЕНИЯ":"5 MIN READ",
  "// ЭКСТРАКЦИЯ":"// EXTRACTION",
  "22 АПР 2026":"APR 22, 2026",
  "Профили давления: зачем их 12, и почему один профиль убивает спешелти-кофе":"Pressure profiles: why 12 of them, and why a single profile kills specialty coffee",
  "Большинство кофемашин варят с постоянным давлением 9 бар. Это работает, но убивает тонкие дескрипторы. Рассказываем, как программируемая кривая — пре-инфузия, подъём, плато, спад — меняет вкус.":"Most machines brew at a constant 9 bar. It works, but it kills the subtle descriptors. We explain how a programmable curve — pre-infusion, ramp, plateau, decline — changes the taste.",
  "Артём Ким · Q-grader":"Artyom Kim · Q-grader",
  "ПОМОЛ":"GRIND",
  "4 МИН ЧТЕНИЯ":"4 MIN READ",
  "// КОФЕМОЛКА":"// GRINDER",
  "08 АПР 2026":"APR 08, 2026",
  "Плоские жернова против конических: что меняется во вкусе":"Flat vs conical burrs: what changes in the taste",
  "Почему мы выбрали плоские 75 мм для Pro Grinder, чем они отличаются от конических, и как геометрия жернова напрямую влияет на дескрипторы вкуса в чашке.":"Why we chose flat 75 mm burrs for the Pro Grinder, how they differ from conical ones, and how burr geometry directly affects the flavor descriptors in the cup.",
  "Дмитрий Левин · CTO":"Dmitry Levin · CTO",
  "ПЛАТФОРМА":"PLATFORM",
  "6 МИН ЧТЕНИЯ":"6 MIN READ",
  "// ПЛАТФОРМА":"// PLATFORM",
  "15 МАР 2026":"MAR 15, 2026",
  "Кофемашина как платформа: что мы поняли за первый год открытого API":"The coffee machine as a platform: what we learned in our first year of an open API",
  "Что наши клиенты построили на нашем API за год: автоматический учёт расхода зерна, отчёты для шеф-бариста, привязку шотов к чекам, выгрузку в CRM. Истории внедрений.":"What our clients built on our API in a year: automatic bean-consumption tracking, reports for head baristas, linking shots to receipts, exporting to CRM. Implementation stories.",
  "Команда BREW.TECH":"The BREW.TECH team",
  "РАЗБОР":"DEEP DIVE",
  "// ПРОИЗВОДСТВО":"// MANUFACTURING",
  "28 МАЯ 2026":"MAY 28, 2026",
  "Компоненты из Китая — это не страшно. Страшно делать вид, что их там нет":"Chinese components aren't scary. Pretending they're not there is.",
  "Почти всё кофейное оборудование в мире использует китайские компоненты — от премиум-брендов до бюджетных. Объясняем, почему это нормально, как мы контролируем качество и почему «итальянская сборка» часто значит меньше, чем кажется.":"Almost all coffee equipment in the world uses Chinese components — from premium brands to budget ones. We explain why that's fine, how we control quality, and why 'Italian assembly' often means less than it seems.",

  // ---- article shared chrome ----
  "Структура цены":"Price structure",
  "АВТОР ·":"AUTHOR ·",
  "Дмитрий Левин":"Dmitry Levin",
  "ДАТА ·":"DATE ·",
  "05 мая 2026":"May 05, 2026",
  "ЧТЕНИЕ ·":"READ ·",
  "7 минут":"7 minutes",
  "← Все статьи":"← All articles",
  "Артём Ким":"Artyom Kim",
  "22 апреля 2026":"April 22, 2026",
  "5 минут":"5 minutes",
  "Профили давления":"Pressure profiles",
  "Плоские vs конические жернова":"Flat vs conical burrs",
  "08 апреля 2026":"April 08, 2026",
  "4 минуты":"4 minutes",
  "Открытый API":"Open API",
  "15 марта 2026":"March 15, 2026",
  "6 минут":"6 minutes",
  "Компоненты из Китая":"Chinese components",
  "Компоненты из Китая — это не страшно. Страшно делать вид, что их там нет.":"Chinese components aren't scary. Pretending they're not there is.",
  "28 мая 2026":"May 28, 2026",

  // ---- article 1 body ----
  "Когда мы запускали BREW.TECH, нам много раз задавали один и тот же вопрос: «Если у вас та же двухгруппная машина с двойным контуром нагрева, что у импортного флагмана — почему ваша стоит в два раза дешевле?» Ответ короткий:":"When we launched BREW.TECH, we were asked the same question many times: \u201CIf you have the same two-group machine with a dual heating circuit as an imported flagship — why does yours cost half as much?\u201D The short answer:",
  "потому что у нашей цены нет 350 000 ₽ маркетинговой и дилерской наценки.":"because our price doesn't carry ₽350,000 of marketing and dealer markup.",
  "Длинный ответ — ниже.":"The long answer is below.",
  "Из чего состоит цена импортной машины":"What makes up the price of an imported machine",
  "Цена в прайс-листе импортного бренда — это не то же самое, что себестоимость машины. Между производством и вашей кофейней встроены минимум четыре наценки:":"The list price of an imported brand is not the same as the cost of the machine. Between the factory and your café sit at least four markups:",
  "Премия за бренд.":"Brand premium.",
  "Маркетинг, спонсорство чемпионатов, фирменные шоурумы. В цене импортного флагмана это ~12–18%.":"Marketing, championship sponsorships, branded showrooms. In an imported flagship's price, that's ~12–18%.",
  "Импорт и логистика.":"Import and logistics.",
  "Морская доставка, растаможка, склад в РФ. Ещё ~8–12%.":"Sea freight, customs clearance, a warehouse in Russia. Another ~8–12%.",
  "Дилерская маржа.":"Dealer margin.",
  "Авторизованный дистрибьютор не работает в ноль. В нише профессионального оборудования это 25–35%.":"An authorized distributor doesn't work for free. In the professional-equipment niche, that's 25–35%.",
  "Запас на сервис.":"Service buffer.",
  "Если запчасть едет из Италии 6 недель, дилер закладывает её стоимость в маржу заранее. Ещё ~5–8%.":"If a spare part takes 6 weeks to arrive from Italy, the dealer bakes its cost into the margin in advance. Another ~5–8%.",
  "Сложите всё это, и вы получите ~60% наценки поверх отпускной цены завода. Машина, которая на конвейере в Италии стоит 5 800 €, в российской кофейне приземляется за 13 000 €.":"Add it all up and you get ~60% of markup over the factory price. A machine that costs €5,800 on the line in Italy lands in a Russian café at €13,000.",
  "Как мы считаем свою":"How we calculate ours",
  "Мы решили сделать иначе. Когда вы покупаете Pro Espresso, вы платите ровно за пять вещей, и мы показываем их открыто:":"We decided to do it differently. When you buy a Pro Espresso, you pay for exactly five things, and we show them openly:",
  "детали и компоненты":"parts and components",
  "зарплата инженерам":"engineers' salaries",
  "честная прибыль":"honest profit",
  "Плюс 26 000 ₽ на сборку и контроль качества и 14 000 ₽ на доставку до вашей кофейни. Итого 489 000 ₽. Прибыль ≈10% — этого хватает, чтобы развиваться и держать инженерную команду.":"Plus ₽26,000 for assembly and quality control and ₽14,000 for delivery to your café. Total: ₽489,000. A ≈10% profit — enough to grow and keep an engineering team.",
  "// ПРИНЦИП:":"// PRINCIPLE:",
  "Мы не скрываем цену. Мы объясняем её. Никаких скрытых наценок «за бренд» или «за имя» — только реальные расходы.":"We don't hide the price. We explain it. No hidden markups 'for the brand' or 'for the name' — only real costs.",
  "А что с качеством?":"What about quality?",
  "Здесь самое интересное.":"Here's the interesting part.",
  "Большая часть «премиум» машин на рынке использует одни и те же компоненты:":"Most 'premium' machines on the market use the very same components:",
  "группа E61, насос Ulka EX5, тэны от двух итальянских поставщиков, PID-контроллеры Gicar или Hanyoung. Мы покупаем те же самые узлы. Разница только в шильдике и маркетинговом бюджете.":"the E61 group, an Ulka EX5 pump, heating elements from two Italian suppliers, Gicar or Hanyoung PID controllers. We buy the very same units. The only difference is the nameplate and the marketing budget.",
  "То, что мы добавляем сверху — это электроника собственной разработки (плата управления, дисплей, прошивка) и собственный API. Это и есть наш инженерный вклад, и он стоит 88 000 ₽ — ровно столько, сколько мы платим инженерам, разделённое на количество выпущенных машин.":"What we add on top is our own electronics (control board, display, firmware) and our own API. That's our engineering contribution, and it costs ₽88,000 — exactly what we pay our engineers, divided by the number of machines produced.",
  "Почему это устойчиво":"Why this is sustainable",
  "Кто-то спросит: «Если ваша прибыль всего 10%, как вы вообще выживаете?» Очень просто: мы не тратим деньги на вещи, которые не имеют отношения к кофе.":"Someone will ask: \u201CIf your profit is only 10%, how do you even survive?\u201D Very simply: we don't spend money on things that have nothing to do with coffee.",
  "У нас нет фирменного шоурума на Тверской — есть инженерная мастерская в Нижнем.":"We have no branded showroom on Tverskaya — we have an engineering workshop in Nizhny.",
  "Мы не спонсируем чемпионат — мы посылаем инженеров чинить машины.":"We don't sponsor a championship — we send engineers to fix machines.",
  "У нас нет дилерской сети с тремя уровнями — есть пять авторизованных партнёров плюс прямые продажи.":"We have no three-tier dealer network — we have five authorized partners plus direct sales.",
  "Запчасти лежат на нашем складе в Москве, а не едут из Италии шесть недель.":"Spare parts sit in our Moscow warehouse, instead of traveling six weeks from Italy.",
  "Что это значит для вашей кофейни":"What this means for your café",
  "Если вы запускаете новую точку, экономия 350 000 ₽ на кофемашине — это либо":"If you're opening a new location, saving ₽350,000 on the coffee machine is either",
  "дополнительные два месяца оборотного капитала":"two extra months of working capital",
  ", либо более качественное зерно на ближайший год, либо вторая кофемолка для декафа. Это решение, которое непосредственно влияет на экономику бизнеса.":", or better beans for the year ahead, or a second grinder for decaf. It's a decision that directly affects the economics of the business.",
  "«Мы окупились за 11 месяцев. С импортной машиной это было бы 20 месяцев. Разница — целый год нашей жизни.»":"\u201CWe broke even in 11 months. With an imported machine it would have been 20. The difference is a whole year of our lives.\u201D",
  "— Алексей П., владелец кофейни «Зерно», Нижний Новгород":"— Alexey P., owner of the café 'Zerno', Nizhny Novgorod",
  "И это не маркетинг. Это инженерное решение — отказаться от всех слоёв стоимости, которые не имеют отношения к тому, как машина варит кофе.":"And this isn't marketing. It's an engineering decision — to strip away every layer of cost that has nothing to do with how the machine makes coffee.",

  // ---- article 2 body ----
  "В классической эспрессо-машине давление в группе постоянное — 9 бар от нажатия кнопки до конца шота. Этот стандарт существует с 1948 года, когда Акилле Гаджа изобрёл рычажную машину.":"In a classic espresso machine, group pressure is constant — 9 bar from the press of the button to the end of the shot. This standard has existed since 1948, when Achille Gaggia invented the lever machine.",
  "Для робусты и тёмной обжарки это работает. Для спешелти — уже нет.":"For robusta and dark roasts it works. For specialty — not anymore.",
  "Что такое профиль давления":"What a pressure profile is",
  "Программируемый профиль — это кривая давления во времени. Она состоит из четырёх фаз:":"A programmable profile is a pressure curve over time. It consists of four phases:",
  "Пре-инфузия (0–6 секунд).":"Pre-infusion (0–6 seconds).",
  "Низкое давление 2–4 бар. Вода смачивает таблетку, кофейная масса набухает, выравнивается плотность.":"Low pressure of 2–4 bar. Water wets the puck, the coffee bed swells, density evens out.",
  "Подъём (6–10 секунд).":"Ramp (6–10 seconds).",
  "Давление линейно растёт до 9 бар. Это «фаза экстракции вкуса».":"Pressure rises linearly to 9 bar. This is the 'flavor extraction phase'.",
  "Плато (10–22 секунды).":"Plateau (10–22 seconds).",
  "Стабильные 9 бар. Основной объём напитка.":"A steady 9 bar. The main volume of the drink.",
  "Спад (22–25 секунд).":"Decline (22–25 seconds).",
  "Давление падает до 6 бар. Это «фаза сладости» — выходят последние сахара.":"Pressure drops to 6 bar. This is the 'sweetness phase' — the last sugars come out.",
  "// ФАКТ:":"// FACT:",
  "при постоянном давлении 9 бар первые две и последние две секунды экстракции работают неоптимально. Это 16% времени — и примерно столько же потерь во вкусе.":"at a constant 9 bar, the first two and last two seconds of extraction work sub-optimally. That's 16% of the time — and roughly the same loss in flavor.",
  "Почему один профиль не подходит всем":"Why one profile doesn't fit all",
  "Спешелти-обжарка — это не один кофе. Это эфиопия натурал, кения вошед, колумбия гейша, бразилия пульпд натурал. У них разная плотность зерна, разная влажность, разное содержание масел.":"Specialty roasting isn't one coffee. It's Ethiopia natural, Kenya washed, Colombia Geisha, Brazil pulped natural. They have different bean density, different moisture, different oil content.",
  "Один профиль не может одинаково хорошо работать на всех.":"One profile can't work equally well for all of them.",
  "Эфиопии натурал нужна длинная пре-инфузия 8 секунд при 3 барах — иначе уходит ферментативная сладость. Колумбии гейше нужна короткая пре-инфузия 4 секунды — иначе перезаваривается, появляется горечь.":"Ethiopia natural needs a long 8-second pre-infusion at 3 bar — otherwise the fermented sweetness is lost. Colombia Geisha needs a short 4-second pre-infusion — otherwise it over-extracts and turns bitter.",
  "Сколько профилей реально нужно":"How many profiles you actually need",
  "Мы спросили 30 спешелти-кофеен, сколько разных зёрен они используют одновременно. Среднее — 4–6 за сезон. С учётом эспрессо/фильтра и декафа — до 8 различных профилей в любой момент.":"We asked 30 specialty cafés how many different beans they use at once. The average is 4–6 per season. Counting espresso/filter and decaf — up to 8 different profiles at any given moment.",
  "Поэтому Pro Espresso держит 12 профилей. Этого хватает, чтобы:":"That's why the Pro Espresso holds 12 profiles. Enough to:",
  "Иметь активные профили на текущие зёрна (4–6 шт.)":"Keep active profiles for current beans (4–6)",
  "Сохранить профили на «любимые» зёрна, которые вернутся в ротацию (2–3 шт.)":"Save profiles for 'favorite' beans that will return to rotation (2–3)",
  "Оставить экспериментальные слоты для новых партий (2–3 шт.)":"Leave experimental slots for new batches (2–3)",
  "Как мы их обновляем":"How we update them",
  "Профили хранятся в прошивке.":"Profiles are stored in the firmware.",
  "Когда инженерная команда BREW.TECH разрабатывает новый профиль":"When the BREW.TECH engineering team develops a new profile",
  "(например, под новую партию обжарщика-партнёра) — он доезжает на все машины линейки по сети. Бариста заходит в настройки, выбирает «Профиль 09 — Тайменс натурал, апрель 2026», и начинает варить.":"(for example, for a partner roaster's new batch) — it reaches every machine in the lineup over the air. The barista opens settings, selects 'Profile 09 — Tymens natural, April 2026', and starts brewing.",
  "«За первые три месяца мы получили шесть обновлений профилей. Это как будто кофемашина учится вместе с нами.»":"\u201CIn the first three months we received six profile updates. It's as if the machine learns alongside us.\u201D",
  "— Михаил К., бариста, спешелти-проект «Drip», Москва":"— Mikhail K., barista, specialty project 'Drip', Moscow",
  "Итого":"In summary",
  "Один профиль давления — это компромисс. Двенадцать профилей с обновлениями — это инструмент.":"One pressure profile is a compromise. Twelve profiles with updates are a tool.",
  "Разница в чашке заметна с первого глотка.":"The difference in the cup is noticeable from the first sip.",
  "Особенно когда вы сравниваете один и тот же лот, сваренный на универсальной кривой 9 бар, и на настроенной под него.":"Especially when you compare the same lot brewed on a universal 9-bar curve and on one tuned for it.",

  // ---- article 3 body ----
  "Когда мы проектировали Pro Grinder, главный вопрос был один: плоские или конические жернова. И 75 или 64 мм. От этого выбора напрямую зависит, какой кофе будет в чашке. Объясняем, почему мы остановились на плоских 75 мм.":"When we designed the Pro Grinder, there was one main question: flat or conical burrs. And 75 or 64 mm. That choice directly determines what coffee ends up in the cup. We explain why we settled on flat 75 mm.",
  "Геометрия и распределение частиц":"Geometry and particle distribution",
  "Конические жернова":"Conical burrs",
  "устроены как кофемолка из вашей кухни: внутри вращается конусообразный жернов, снаружи — чашеобразный. Зерно проходит сверху вниз, постепенно перемалываясь. Это даёт":"work like the grinder in your kitchen: a cone-shaped burr spins inside, a cup-shaped one outside. Beans pass top to bottom, gradually ground down. This produces",
  "широкое распределение частиц":"a wide particle distribution",
  ": и крупные, и мелкие, с двумя пиками на графике.":": both large and small, with two peaks on the chart.",
  "Плоские жернова":"Flat burrs",
  "— это два параллельных диска, между которыми проходит зерно. Расстояние между дисками фиксированное, путь короче, помол более":"are two parallel discs with beans passing between them. The gap is fixed, the path is shorter, the grind is more",
  "однородный":"uniform",
  ": один пик на графике распределения.":": a single peak on the distribution chart.",
  "// КЛЮЧЕВОЕ:":"// KEY:",
  "однородность помола напрямую определяет качество экстракции. Чем уже распределение — тем равномернее вода проходит через таблетку, тем чище вкус.":"grind uniformity directly determines extraction quality. The narrower the distribution, the more evenly water passes through the puck, the cleaner the taste.",
  "Что это даёт во вкусе":"What this gives in the taste",
  "На конических жерновах вы получаете эспрессо с большим «телом», более вязкий, с выраженной шоколадной горечью. Это":"With conical burrs you get an espresso with more 'body', thicker, with pronounced chocolatey bitterness. That's",
  "хорошо для традиционных итальянских смесей":"good for traditional Italian blends",
  "— робусты, тёмной обжарки.":"— robusta, dark roasts.",
  "На плоских — эспрессо более «прозрачный», с яркими дескрипторами: цитрус, ягоды, цветочные ноты. Это":"With flat burrs the espresso is more 'transparent', with bright descriptors: citrus, berries, floral notes. That's",
  "необходимо для спешелти":"essential for specialty",
  ", где обжарка светлая и кислотность ценится.":", where the roast is light and acidity is valued.",
  "Почему именно 75 мм":"Why 75 mm specifically",
  "Размер жернова — это не «больше=лучше». Это компромисс между":"Burr size isn't 'bigger = better'. It's a trade-off between",
  "скоростью помола":"grind speed",
  "нагревом":"heat",
  "и":"and",
  "ресурсом":"lifespan",
  "Скорость.":"Speed.",
  "75 мм мелют дозу 14 г за 7–10 секунд. 64 мм — за 14–18 секунд. В пиковой нагрузке это критично.":"75 mm grind a 14 g dose in 7–10 seconds. 64 mm — in 14–18 seconds. At peak load that's critical.",
  "Нагрев.":"Heat.",
  "Большая площадь = ниже обороты при той же скорости = меньше нагрев = меньше окисление масел = стабильный вкус весь день.":"A larger area = lower RPM at the same speed = less heat = less oil oxidation = a stable taste all day.",
  "Ресурс.":"Lifespan.",
  "Плоские 75 мм с титановым напылением держат остроту до 800 кг зерна. 64 мм — до 450 кг.":"Flat 75 mm with a titanium coating stay sharp for up to 800 kg of beans. 64 mm — up to 450 kg.",
  "Когда конические всё-таки лучше":"When conical burrs are still better",
  "Честный ответ:":"The honest answer:",
  "для домашнего использования и малых проектов":"for home use and small projects",
  ". Они компактнее, дешевле, не требуют такой точной калибровки. Если у вас 30–40 чашек в день и традиционная смесь — конический 58–64 мм будет в самый раз.":". They're more compact, cheaper, and don't need such precise calibration. If you do 30–40 cups a day and a traditional blend — a conical 58–64 mm is just right.",
  "Но если вы спешелти-проект, работаете со светлой обжаркой, у вас 150+ чашек в день и вы меняете зерно еженедельно — плоские 75 мм окупятся за первые три месяца за счёт стабильности.":"But if you're a specialty project, work with light roasts, do 150+ cups a day and change beans weekly — flat 75 mm will pay for themselves in the first three months through consistency.",
  "«Я поставил Pro Grinder и через неделю заметил, что больше не подкручиваю помол после каждой смены зерна. Просто загружаю профиль и работаю.»":"\u201CI set up the Pro Grinder and within a week noticed I no longer tweak the grind after every bean change. I just load a profile and go.\u201D",
  "— Светлана Б., бариста-чемпион, проект «Sequel»":"— Svetlana B., barista champion, project 'Sequel'",

  // ---- article 4 body ----
  "Год назад мы сделали то, чего не делает ни один производитель профессиональных кофемашин:":"A year ago we did something no professional coffee machine maker does:",
  ". Любая Pro Espresso отправляет события каждого шота (время, температура, давление, объём, оператор) в стандартном REST. Мы не знали, что из этого получится. Делимся тем, что построили наши клиенты за этот год.":". Any Pro Espresso sends every shot's events (time, temperature, pressure, volume, operator) over standard REST. We didn't know what would come of it. Here's what our clients built over the year.",
  "1. Автоматический учёт расхода зерна":"1. Automatic bean-consumption tracking",
  "Сеть из четырёх кофеен «North» в Санкт-Петербурге раньше считала расход зерна вручную: бариста взвешивал бункер в начале и конце смены, владелец заносил данные в таблицу. Точность — плюс-минус 200 г в день на точку.":"The four-café chain 'North' in St. Petersburg used to count bean usage by hand: the barista weighed the hopper at the start and end of a shift, the owner logged it into a spreadsheet. Accuracy — plus or minus 200 g per day per location.",
  "С нашим API они написали 80 строчек кода: машина при каждом шоте сообщает дозу, скрипт суммирует, в 9 утра присылает владельцу отчёт в Telegram.":"With our API they wrote 80 lines of code: the machine reports the dose on every shot, the script sums it up, and at 9 a.m. it sends the owner a report in Telegram.",
  "Точность — до грамма. Время на учёт — ноль.":"Accuracy — to the gram. Time spent on tracking — zero.",
  "2. Привязка шотов к чекам":"2. Linking shots to receipts",
  "Кофейня «Зерно» в Нижнем интегрировала API с кассой iiko. Теперь они видят: чек №4827, два капучино, профиль 03, доза 18.2 г, экстракция 24.8 секунды. Сколько списано зерна — известно с точностью до шота.":"The café 'Zerno' in Nizhny integrated the API with the iiko POS. Now they see: receipt #4827, two cappuccinos, profile 03, dose 18.2 g, extraction 24.8 seconds. How much coffee was used — known down to the shot.",
  "// ПРИМЕНЕНИЕ:":"// USE CASE:",
  "владелец видит, что вечерняя смена даёт более «лёгкие» шоты (доза в среднем на 0.3 г меньше). Проводит обучение — возвращает 14 000 ₽/месяц на экономию зерна.":"the owner sees that the evening shift pulls 'lighter' shots (the dose is on average 0.3 g less). Runs a training session — recovers ₽14,000/month in saved coffee.",
  "3. Отчёты для шеф-бариста":"3. Reports for the head barista",
  "Спешелти-проект «Drip» в Москве сделал внутреннюю панель для шеф-бариста. Каждый день в 10 утра он получает:":"The specialty project 'Drip' in Moscow built an internal dashboard for the head barista. Every day at 10 a.m. they get:",
  "Сколько шотов сварено":"How many shots were pulled",
  "Распределение времени экстракции — нет ли «коротких» или «длинных»":"The distribution of extraction times — any 'short' or 'long' ones",
  "Какой бариста на какой смене работал":"Which barista worked which shift",
  "Аномалии: шоты с давлением ниже 8.5 бар, температурой выше 94°C":"Anomalies: shots below 8.5 bar or above 94°C",
  "Это инструмент":"It's a tool for",
  "контроля качества":"quality control",
  ", который раньше был доступен только сетям из 50+ точек со своим IT-отделом.":"that used to be available only to chains of 50+ locations with their own IT department.",
  "4. Интеграция с системой управления отеля":"4. Integration with the hotel management system",
  "Отель «Метрополь» подключил Pro Espresso к своей PMS. Когда гость заказывает капучино через приложение, в баре загорается номер комнаты, выбирается профиль (если гость постоянный — его предпочтения помнятся), оператор делает шот — автоматически списывается с комнаты.":"The 'Metropol' hotel connected a Pro Espresso to its PMS. When a guest orders a cappuccino through the app, the room number lights up at the bar, a profile is selected (a returning guest's preferences are remembered), the operator pulls the shot — and it's automatically charged to the room.",
  "Что мы поняли":"What we learned",
  "Кофемашина — это не конечный продукт. Это узел в инфраструктуре кафе.":"A coffee machine isn't a finished product. It's a node in the café's infrastructure.",
  "Когда вы даёте людям возможность подключить этот узел к остальной их системе — они придумают то, чего вы сами не ожидали.":"When you give people the ability to connect that node to the rest of their system — they'll come up with things you never expected.",
  "Поэтому API будет всегда. Поэтому мы документируем каждое поле в каждом эндпоинте. Поэтому новые версии прошивки сохраняют обратную совместимость — чтобы скрипт, написанный сегодня, работал через пять лет.":"That's why the API is here to stay. That's why we document every field in every endpoint. That's why new firmware versions keep backward compatibility — so a script written today still works in five years.",
  "«Через два года у нас будет 200 кофеен на BREW.TECH. Это не 200 машин — это 200 узлов одной сети, обменивающихся знаниями. Это и есть платформа.»":"\u201CIn two years we'll have 200 cafés on BREW.TECH. That's not 200 machines — it's 200 nodes of one network, exchanging knowledge. That's what a platform is.\u201D",
  "— Дмитрий Левин, CTO BREW.TECH":"— Dmitry Levin, CTO BREW.TECH",

  // ---- article 5 body ----
  "Когда клиент узнаёт, что часть компонентов нашей кофемашины произведена в Китае, первая реакция почти всегда одна: «А это точно надёжно?». Отвечаем честно и прямо:":"When a client learns that some of our coffee machine's components are made in China, the first reaction is almost always the same: \u201CIs that really reliable?\u201D We answer honestly and directly:",
  "да, надёжно — и ровно по тем же причинам, по которым надёжна ваша любимая импортная машина за миллион рублей, в которой стоят те же самые китайские детали.":"yes, it's reliable — and for exactly the same reasons your favorite million-ruble imported machine, which contains the very same Chinese parts, is reliable.",
  "Маленький секрет всей индустрии":"The whole industry's little secret",
  "Почти не существует профессиональной кофемашины, полностью сделанной в одной стране. Глобальная цепочка поставок устроена так, что компоненты приезжают со всего мира, а «страна происхождения» на шильдике — это чаще всего страна":"Almost no professional coffee machine is made entirely in one country. The global supply chain is built so that components come from all over the world, and the 'country of origin' on the nameplate is most often the country of",
  "финальной сборки":"final assembly",
  ", а не производства всех деталей.":", not where all the parts were made.",
  "Даже у именитых итальянских брендов в машине вы найдёте:":"Even in renowned Italian brands' machines you'll find:",
  "Электронику и платы управления":"Electronics and control boards",
  "— произведены в Китае или Юго-Восточной Азии.":"— made in China or Southeast Asia.",
  "Дисплеи и сенсоры":"Displays and sensors",
  "— Китай, Корея, Тайвань.":"— China, Korea, Taiwan.",
  "Двигатели и помпы":"Motors and pumps",
  "— часть итальянская (Ulka), часть китайская.":"— some Italian (Ulka), some Chinese.",
  "Крепёж, фитинги, проводку":"Fasteners, fittings, wiring",
  "— почти всегда Азия.":"— almost always Asia.",
  "«Сделано в Италии» по закону ЕС можно писать, если в стране произошла «последняя существенная переработка». Часто это означает только финальную сборку из импортных узлов.":"Under EU law, 'Made in Italy' can be used if the 'last substantial transformation' happened in the country. Often that means only final assembly from imported units.",
  "Почему Китай — это давно не про «дёшево и плохо»":"Why China has long stopped meaning 'cheap and bad'",
  "Стереотип о китайском качестве застрял в девяностых. Сегодня Китай — это мировой центр высокоточного производства электроники и механики. Там собирают флагманские смартфоны, медицинское оборудование и автомобильные компоненты для премиальных марок.":"The stereotype about Chinese quality is stuck in the nineties. Today China is the world's center of high-precision electronics and mechanical manufacturing. It assembles flagship smartphones, medical equipment and automotive components for premium brands.",
  "Вопрос не в том, где сделана деталь. Вопрос в том, кто и как контролирует её качество.":"The question isn't where a part is made. The question is who controls its quality, and how.",
  "Один и тот же китайский завод может выпускать и дешёвую деталь «на маркетплейс», и деталь по строгим спецификациям с 100% выходным контролем — разница в цене и в требованиях заказчика.":"The same Chinese factory can produce both a cheap 'marketplace' part and a part to strict specs with 100% outgoing inspection — the difference is the price and the customer's requirements.",
  "Как мы работаем с поставщиками":"How we work with suppliers",
  "Мы не покупаем «что подешевле». У нас инженерный подход к каждому компоненту:":"We don't buy 'whatever's cheapest'. We take an engineering approach to every component:",
  "Спецификация на каждую деталь.":"A spec for every part.",
  "Мы задаём допуски, материалы, ресурс. Поставщик подписывается под ними.":"We set tolerances, materials, lifespan. The supplier signs off on them.",
  "Входной контроль.":"Incoming inspection.",
  "Каждая партия компонентов проверяется на нашем складе до того, как попадёт в машину.":"Every batch of components is checked at our warehouse before it goes into a machine.",
  "Дублирование критичных узлов.":"Redundancy for critical units.",
  "Для помпы, тэна и платы у нас минимум два квалифицированных поставщика — чтобы не зависеть от одного.":"For the pump, heating element and board we have at least two qualified suppliers — so we don't depend on any single one.",
  "142 точки контроля":"142 inspection points",
  "при финальной сборке в Нижнем Новгороде.":"at final assembly in Nizhny Novgorod.",
  "Что мы делаем сами":"What we do ourselves",
  "Китайские (и итальянские, и немецкие) компоненты — это «кирпичи». А вот":"Chinese (and Italian, and German) components are the 'bricks'. But the",
  "архитектура, прошивка, плата управления, профили давления и API — наша собственная разработка.":"architecture, firmware, control board, pressure profiles and API are our own development.",
  "Это и есть то, что превращает набор деталей в BREW.TECH. Именно здесь живёт инженерная ценность, и именно за неё вы платите — а не за флаг на коробке.":"That's what turns a set of parts into a BREW.TECH. This is where the engineering value lives, and that's what you pay for — not the flag on the box.",
  "«Нас часто спрашивают про „итальянскую сборку“. Мы отвечаем: важнее, кто писал прошивку и кто приедет чинить машину через два года. И то, и другое — мы, в России.»":"\u201CWe're often asked about 'Italian assembly'. We answer: what matters more is who wrote the firmware and who'll come fix the machine in two years. Both — us, in Russia.\u201D",
  "Почему локальная сборка важнее «страны детали»":"Why local assembly matters more than 'the part's country'",
  "Для вашей кофейни значение имеет не надпись на шильдике, а ответы на три практических вопроса:":"For your café, what matters isn't the text on the nameplate but the answers to three practical questions:",
  "Быстро ли приедет сервис?":"Will service arrive fast?",
  "У нас — 14 городов РФ, выезд ≤ 48 часов.":"For us — 14 Russian cities, arrival ≤ 48 hours.",
  "Есть ли запчасть на складе?":"Is the spare part in stock?",
  "У нас — 7 500 позиций в Москве, а не «едет из Италии 6 недель».":"For us — 7,500 items in Moscow, not 'six weeks from Italy'.",
  "Кто отвечает за прошивку и обновления?":"Who's responsible for firmware and updates?",
  "Наша инженерная команда, на русском языке, на связи.":"Our engineering team, in Russian, reachable.",
  "Так что да — в нашей машине есть китайские компоненты. Как и в любой другой профессиональной кофемашине на рынке.":"So yes — our machine has Chinese components. Like every other professional coffee machine on the market.",
  "Разница в том, что мы об этом говорим открыто — и берём на себя ответственность за качество и сервис.":"The difference is that we talk about it openly — and take responsibility for quality and service.",
  "Это и есть честная инженерия вместо маркетинга.":"That's honest engineering instead of marketing."
  };

  // placeholder translations
  const PH = {
    "Алексей Петров":"John Smith",
    "Москва":"Moscow",
    "Удобное время для звонка":"Convenient time to call"
  };

  const norm = s => s.replace(/\s+/g,' ').trim();
  let textNodes = null;
  let phEls = null;

  function collect(){
    textNodes = [];
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n){
        if(!n.nodeValue || !/[А-Яа-яЁё]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        const p = n.parentNode;
        if(!p) return NodeFilter.FILTER_REJECT;
        const nm = p.nodeName;
        if(nm==='SCRIPT'||nm==='STYLE') return NodeFilter.FILTER_REJECT;
        if(p.closest && p.closest('#bt-langbar')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n; while(n=w.nextNode()){ textNodes.push({node:n, ru:n.nodeValue}); }
    phEls = [...document.querySelectorAll('[placeholder]')].map(el=>({el, ru:el.getAttribute('placeholder')}));
  }

  function apply(lang){
    if(!textNodes) collect();
    for(const it of textNodes){
      if(lang==='en'){
        const en = DICT[norm(it.ru)];
        if(en!=null){
          const lead = it.ru.match(/^\s*/)[0];
          const trail = it.ru.match(/\s*$/)[0];
          it.node.nodeValue = lead + en + trail;
        }
      } else {
        it.node.nodeValue = it.ru;
      }
    }
    for(const it of phEls){
      if(lang==='en'){ const en = PH[it.ru.trim()]; if(en!=null) it.el.setAttribute('placeholder', en); }
      else it.el.setAttribute('placeholder', it.ru);
    }
    // title
    const t = document.title;
    if(lang==='en'){ if(DICT[t]) { document.title = DICT[t]; document.documentElement.dataset.ruTitle = t; } }
    else if(document.documentElement.dataset.ruTitle){ document.title = document.documentElement.dataset.ruTitle; }
    document.documentElement.lang = lang;
    try{ localStorage.setItem('btlang', lang); }catch(e){}
    updateToggle(lang);
  }

  function updateToggle(lang){
    document.querySelectorAll('.bt-lang').forEach(b=>{
      b.querySelectorAll('[data-lang]').forEach(s=>{
        s.classList.toggle('on', s.dataset.lang===lang);
      });
    });
  }

  const I18N = {
    apply,
    set(lang){ apply(lang); dismissBanner(); },
    toggle(){ apply((localStorage.getItem('btlang')||'ru')==='ru'?'en':'ru'); },
    current(){ return localStorage.getItem('btlang')||'ru'; }
  };
  window.I18N = I18N;

  // ---- language toggle injection (into nav) ----
  function injectToggle(){
    document.querySelectorAll('.nav-right').forEach(nr=>{
      if(nr.querySelector('.bt-lang')) return;
      const wrap = document.createElement('div');
      wrap.className='bt-lang';
      wrap.innerHTML='<span data-lang="ru">RU</span><span class="sep">/</span><span data-lang="en">EN</span>';
      wrap.addEventListener('click', ()=>I18N.set(I18N.current()==='ru'?'en':'ru'));
      nr.insertBefore(wrap, nr.firstChild);
    });
    // mobile menu toggle
    document.querySelectorAll('#mobileMenu').forEach(mm=>{
      if(mm.querySelector('.bt-lang-m')) return;
      const a=document.createElement('a');
      a.className='bt-lang-m';
      a.style.cssText='justify-content:flex-start;gap:12px';
      a.innerHTML='Язык / Language: <b style="margin-left:8px"><span data-lang="ru">RU</span> / <span data-lang="en">EN</span></b>';
      a.addEventListener('click',e=>{e.preventDefault();I18N.set(I18N.current()==='ru'?'en':'ru');});
      mm.insertBefore(a, mm.firstChild);
    });
  }

  // ---- banner ----
  function dismissBanner(){ const b=document.getElementById('bt-geobanner'); if(b) b.remove(); }
  function showBanner(country){
    if(document.getElementById('bt-geobanner')) return;
    const b=document.createElement('div');
    b.id='bt-geobanner';
    b.innerHTML=`
      <div class="bt-gb-inner">
        <div class="bt-gb-txt">
          <b>This site is available in English.</b>
          <span>It looks like you're visiting from outside Russia${country?` (${country})`:''}. Switch the language?</span>
        </div>
        <div class="bt-gb-act">
          <button class="bt-gb-en">View in English</button>
          <button class="bt-gb-ru">Остаться на русском</button>
        </div>
      </div>`;
    document.body.appendChild(b);
    b.querySelector('.bt-gb-en').addEventListener('click',()=>I18N.set('en'));
    b.querySelector('.bt-gb-ru').addEventListener('click',()=>{ I18N.set('ru'); });
  }

  // ---- styles ----
  const css=document.createElement('style');
  css.textContent=`
    .bt-lang{display:inline-flex;align-items:center;gap:4px;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:600;letter-spacing:.06em;cursor:pointer;border:1px solid var(--line);padding:7px 10px;user-select:none;transition:border-color .15s}
    .bt-lang:hover{border-color:var(--blue)}
    .bt-lang [data-lang]{color:#9a9a9a;transition:color .15s}
    .bt-lang [data-lang].on{color:var(--blue)}
    .bt-lang .sep{color:#ccc}
    .nav.dark .bt-lang{border-color:rgba(255,255,255,.18)}
    .nav.dark .bt-lang [data-lang]{color:rgba(255,255,255,.5)}
    .nav.dark .bt-lang [data-lang].on{color:#fff}
    .bt-lang-m b{color:var(--blue)}
    .bt-lang-m [data-lang].on{text-decoration:underline}
    #bt-geobanner{position:fixed;left:0;right:0;bottom:0;z-index:200;background:#0a0a0a;color:#fff;border-top:2px solid var(--blue);animation:btgb .35s ease}
    @keyframes btgb{from{transform:translateY(100%)}to{transform:translateY(0)}}
    .bt-gb-inner{max-width:1440px;margin:0 auto;padding:18px 48px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
    .bt-gb-txt{display:flex;flex-direction:column;gap:3px}
    .bt-gb-txt b{font-size:15px;font-weight:700;letter-spacing:-.01em}
    .bt-gb-txt span{font-size:13px;color:rgba(255,255,255,.6)}
    .bt-gb-act{display:flex;gap:10px;flex-wrap:wrap}
    .bt-gb-act button{font-family:'Montserrat',sans-serif;font-weight:600;font-size:13px;padding:11px 18px;border:0;cursor:pointer}
    .bt-gb-en{background:var(--blue);color:#fff}
    .bt-gb-en:hover{background:#0052cc}
    .bt-gb-ru{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.25)!important}
    .bt-gb-ru:hover{background:rgba(255,255,255,.08)}
    @media(max-width:640px){.bt-gb-inner{padding:16px 20px}.bt-gb-act{width:100%}.bt-gb-act button{flex:1}}
  `;
  document.head.appendChild(css);

  // ---- init ----
  function init(){
    injectToggle();
    const stored = localStorage.getItem('btlang');
    if(stored){ apply(stored); return; }
    // default RU, then geo-check
    apply('ru');
    // Try language preference first (cheap, offline)
    const navLang = (navigator.language||'').slice(0,2).toLowerCase();
    fetch('https://ipapi.co/json/',{cache:'no-store'})
      .then(r=>r.ok?r.json():Promise.reject())
      .then(d=>{
        const cc=(d&&d.country_code)||'';
        if(cc && CIS.indexOf(cc)===-1) showBanner(d.country_name||cc);
      })
      .catch(()=>{
        // fallback to browser language if geo blocked
        if(navLang && navLang!=='ru' && !['be','kk','uk','hy','az','ky','tg','tk','uz','ka'].includes(navLang)) showBanner('');
      });
  }

  // partials.js injects nav/footer synchronously before this runs (script order),
  // but guard in case:
  if(document.getElementById('mobileMenu')) init();
  else window.addEventListener('DOMContentLoaded', init);
})();
