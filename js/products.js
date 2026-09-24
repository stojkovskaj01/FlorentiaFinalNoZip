const productsData = [
    {
        id: 1,
        title: {
            mk: "Роза - парче",
            en: "Single Rose"
        },
        type: "roses",
        priceMKD: 200,
        image: "sliki/r1.jpg",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Нежна и елегантна роза, внимателно подготвена како мал, но впечатлив подарок. Симбол на љубов, внимание и искрени чувства, совршена за да разубавите нечиј ден или да подарите мал знак на внимание.",
            en: "A gentle and elegant rose, carefully prepared as a small yet impressive gift. A symbol of love, attention, and sincere feelings, perfect for brightening someone's day or giving a small token of appreciation."
        }
    },
    {
        id: 2,
        title: {
            mk: "Орхидеја (Фаленопсис) - Мултиколор",
            en: "Orchid (Phalaenopsis) - Multicolor"
        },
        type: "potted",
        priceMKD: 1000,
        image: "sliki/s1.avif",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Фаленопсис орхидејата потекнува од тропските предели на Азија и е симбол на елеганција и префинетост. Со своите долготрајни и нежни цветови, внесува луксуз во секој простор.",
            en: "The Phalaenopsis orchid originates from the tropical regions of Asia and is a symbol of elegance and sophistication. With its long-lasting and delicate flowers, it brings luxury to any space."
        }
    },
    {
        id: 3,
        title: {
            mk: "15 Црвени Рози",
            en: "15 Red Roses"
        },
        type: "roses",
        priceMKD: 2500,
        image: "sliki/r2.avif",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Овој впечатлив букет од 15 црвени рози ја претставува љубовта, страста и искрените чувства. Богатите црвени тонови и внимателно аранжираните цветови создаваат елегантен и романтичен изглед. Совршен избор за роденден, годишнина, прослава или едноставно за да покажете некому колку ви значи.",
            en: "This striking bouquet of 15 red roses represents love, passion, and sincere feelings. Rich red tones and carefully arranged flowers create an elegant and romantic look. A perfect choice for a birthday, anniversary, celebration, or simply to show someone how much they mean to you."
        }
    },
    {
        id: 4,
        title: {
            mk: "Алое Вера",
            en: "Aloe Vera"
        },
        type: "potted",
        priceMKD: 330,
        image: "sliki/s2.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Алое вера е сукулентно растение со потекло од Африка, познато по своите месести, зелени листови богати со гел со лековити својства. Совршен избор за модерен ентериер и љубители на минималистички стил.",
            en: "Aloe vera is a succulent plant originating from Africa, known for its fleshy, green leaves rich in gel with healing properties. A perfect choice for modern interiors and minimalist style lovers."
        }
    },
    {
        id: 5,
        title: {
            mk: "15 розеви рози",
            en: "15 Pink Roses"
        },
        type: "roses",
        priceMKD: 2500,
        image: "sliki/r3.avif",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Нежен и елегантен букет од 15 розеви рози, создаден да пренесе чувства на нежност, благодарност и искрена приврзаност. Префинетите розеви нијанси му даваат свеж и романтичен изглед, што го прави идеален подарок за родендени, годишнини или за секој посебен момент.",
            en: "A gentle and elegant bouquet of 15 pink roses, created to convey feelings of tenderness, gratitude, and sincere affection. Refined pink shades give it a fresh and romantic look, making it an ideal gift for birthdays, anniversaries, or any special moment."
        }
    },
    {
        id: 22,
        title: {
            mk: "15 Бели Рози",
            en: "15 White Roses"
        },
        type: "roses",
        priceMKD: 2800,
        image: "sliki/r13.avif",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Овој нежен и елегантен букет од бели рози симболизира чистота, искреност и безвременска убавина. Совршено аранжираните рози создаваат хармонична и луксузна форма, додека светлата амбалажа му дава модерен и префинет изглед. Идеален избор за свадби, свечени моменти, благодарност или кога сакате да подарите елеганција во најчиста форма.",
            en: "This gentle and elegant bouquet of white roses symbolizes purity, sincerity, and timeless beauty. Perfectly arranged roses create a harmonious and luxurious shape, while the bright packaging gives it a modern and sophisticated look. An ideal choice for weddings, formal moments, gratitude, or when you want to gift elegance in its purest form."
        }
    },
    {
        id: 6,
        title: {
            mk: "Јука - Дрво на животот",
            en: "Yucca - Tree of Life"
        },
        type: "potted",
        priceMKD: 2330,
        image: "sliki/s3.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Јуката е издржливо декоративно растение со потекло од Централна Америка, препознатливо по своето дрвенесто стебло и остри, зелени листови. Идеална за модерни и индустриски ентериери. Симболика: Сила, стабилност, издржливост.",
            en: "Yucca is a hardy decorative plant originating from Central America, recognizable by its woody stem and sharp, green leaves. Ideal for modern and industrial interiors. Symbolism: Strength, stability, endurance."
        }
    },
    {
        id: 7,
        title: {
            mk: "Фикус Женшенг (Ficus Ginseng)",
            en: "Ficus Ginseng"
        },
        type: "potted",
        priceMKD: 2000,
        image: "sliki/s4.avif",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Фикус Женшенг е декоративно растение со уникатно, задебелено коренесто стебло и компактна крошна. Потекнува од Азија и често се користи како бонсаи. Симболика: Долговечност, просперитет, рамнотежа.",
            en: "Ficus Ginseng is a decorative plant with a unique, thickened root-like stem and a compact canopy. It originates from Asia and is often used as a bonsai. Symbolism: Longevity, prosperity, balance."
        }
    },
    {
        id: 8,
        title: {
            mk: "Спатифилум - Женска среќа",
            en: "Spathiphyllum - Peace Lily"
        },
        type: "potted",
        priceMKD: 1330,
        image: "sliki/s6.avif",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Spathiphyllum, позната како „Женска среќа“, е тропско растение со сјајни зелени листови и елегантни бели цветови. Одлично го прочистува воздухот и внесува свежина во секој простор. Симболика: Мир, хармонија, љубов и благосостојба.",
            en: "Spathiphyllum, known as the Peace Lily, is a tropical plant with glossy green leaves and elegant white flowers. It purifies the air wonderfully and brings freshness to any space. Symbolism: Peace, harmony, love, and well-being."
        }
    },
    {
        id: 9,
        title: {
            mk: "Гузманија",
            en: "Guzmania"
        },
        type: "potted",
        priceMKD: 630,
        image: "sliki/s5.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Гузманија е впечатливо тропско растение со декоративна розета од зелени листови и интензивен црвен цветен клас во центарот. Потекнува од Јужна и Централна Америка и внесува егзотичен акцент и боја во секој ентериер. Симболика: Радост, страст, позитивна енергија.",
            en: "Guzmania is a striking tropical plant with a decorative rosette of green leaves and an intense red flower spike in the center. Originating from South and Central America, it brings an exotic accent and color to any interior. Symbolism: Joy, passion, positive energy."
        }
    },
    {
        id: 10,
        title: {
            mk: "Фикус Бенџамин",
            en: "Ficus Benjamina"
        },
        type: "potted",
        priceMKD: 3630,
        image: "sliki/s7.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Ficus Benjamina е грациозно растение со нежни, спуштени гранки и богата крошна од мали, сјајни листови. Потекнува од Азија и Австралија и претставува класично внатрешно дрво кое внесува леснотија и природна елеганција во секој ентериер. Симболика: Хармонија, заштита, позитивна енергија.",
            en: "Ficus Benjamina is a graceful plant with delicate, drooping branches and a rich canopy of small, shiny leaves. Originating from Asia and Australia, it is a classic indoor tree that brings lightness and natural elegance to any interior. Symbolism: Harmony, protection, positive energy."
        }
    },
    {
        id: 11,
        title: {
            mk: "Фикус Робуста",
            en: "Ficus Robusta"
        },
        type: "potted",
        priceMKD: 3630,
        image: "sliki/s8.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Ficus Robusta е впечатливо и елегантно растение познато по своите големи, дебели и сјајни листови и исправен раст. Потекнува од Југоисточна Азија и е безвременски избор за ентериер кој внесува модерен и скулптурален изглед во секој простор. Симболика: Сила, изобилство, издржливост.",
            en: "Ficus Robusta is a striking and elegant plant known for its large, thick, shiny leaves and upright growth. Originating from Southeast Asia, it is a timeless interior choice that brings a modern and sculptural look to any space. Symbolism: Strength, abundance, endurance."
        }
    },
    {
        id: 12,
        title: {
            mk: "Фикус Бонсаи",
            en: "Ficus Bonsai"
        },
        type: "potted",
        priceMKD: 7630,
        image: "sliki/s10.avif",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Фикус бонсаи (Ficus microcarpa) е елегантно и декоративно собно растение со потекло од тропските предели на Југоисточна Азија. Се издвојува со својот впечатлив, извиткан труп и густо, сјајно зелено лисје, кое му дава уникатен и уметнички изглед. Идеален избор за модерен, минималистички или zen ентериер, каде внесува чувство на мир и природна рамнотежа.",
            en: "Ficus bonsai (Ficus microcarpa) is an elegant and decorative indoor plant originating from the tropical regions of Southeast Asia. It stands out with its striking, twisted trunk and dense, glossy green foliage, giving it a unique and artistic look. An ideal choice for modern, minimalist, or zen interiors, bringing a sense of peace and natural balance."
        }
    },
    {
        id: 13,
        title: {
            mk: "Црвени рози со еукалиптус",
            en: "Red Roses with Eucalyptus"
        },
        type: "roses",
        priceMKD: 2700,
        image: "sliki/r4.avif",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Прекрасна комбинација од раскошни 11 црвени рози и свеж еукалиптус, која создава модерен и природен изглед. Контрастот помеѓу интензивните црвени цветови и зеленилото му дава на букетот посебна свежина и елеганција. Совршен избор за романтични прилики и моменти кои сакате да останат запаметени.",
            en: "A gorgeous combination of 11 luxurious red roses and fresh eucalyptus, creating a modern and natural look. The contrast between the intense red flowers and greenery gives the bouquet a special freshness and elegance. A perfect choice for romantic occasions and moments you want to remember."
        }
    },
    {
        id: 14,
        title: {
            mk: "Red Code",
            en: "Red Code"
        },
        type: "roses",
        priceMKD: 3500,
        image: "sliki/r5.avif",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Уникатен и впечатлив букет составен од 14 црвени рози и една бела роза, која создава прекрасен контраст и му дава посебно значење на аранжманот. Црвените рози ја симболизираат љубовта и страста, додека белата внесува нежност и чистота. Идеален избор за романтична личност и посебни пригоди.",
            en: "A unique and striking bouquet consisting of 14 red roses and one white rose, creating a wonderful contrast and giving special meaning to the arrangement. The red roses symbolize love and passion, while the white one brings tenderness and purity. An ideal choice for a romantic person and special occasions."
        }
    },
    {
        id: 15,
        title: {
            mk: "Pink Candy",
            en: "Pink Candy"
        },
        type: "roses",
        priceMKD: 1900,
        image: "sliki/r7.avif",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Разигран и нежен букет во прекрасни розеви нијанси, создаден за оние кои сакаат нешто слатко, весело и посебно. Pink Candy внесува свежина и романтика со својот модерен и шармантен изглед. Идеален избор за родендени, прослави или едноставно за да израдувате некого.",
            en: "A playful and gentle bouquet in beautiful pink shades, created for those who want something sweet, cheerful, and special. Pink Candy brings freshness and romance with its modern and charming look. An ideal choice for birthdays, celebrations, or simply to make someone happy."
        }
    },
    {
        id: 16,
        title: {
            mk: "Pink Candy & Teddy",
            en: "Pink Candy & Teddy"
        },
        type: "roses",
        priceMKD: 2200,
        image: "sliki/r6.avif",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Совршена комбинација од нежен Pink Candy букет и слатко мече, создадена за подарок исполнет со љубов и внимание. Прекрасниот цветен аранжман и симпатичниот детаљ создаваат топол и незаборавен подарок, идеален за сакана личност, роденден, годишнина или посебен повод.",
            en: "The perfect combination of a gentle Pink Candy bouquet and a cute teddy bear, created for a gift filled with love and attention. The wonderful floral arrangement and adorable detail create a warm and unforgettable gift, ideal for a loved one, birthday, anniversary, or special occasion."
        }
    },
    {
        id: 21,
        title: {
            mk: "Пурпурен Шампањ",
            en: "Purple Champagne"
        },
        type: "roses",
        priceMKD: 3500,
        image: "sliki/r12.avif",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Елегантен и безвременски букет од длабоко црвени и кремасти ружи, симбол на љубов, страст и префинетост. Совршена комбинација за романтични моменти, годишнини и специјални признанија. Напомена: Поради моментална достапност, некои цветови може да варираат, но секогаш ќе бидат заменети со подеднакво убави и соодветни цветови.",
            en: "An elegant and timeless bouquet of deep red and creamy roses, a symbol of love, passion, and sophistication. The perfect combination for romantic moments, anniversaries, and special recognitions. Note: Due to current availability, some flowers may vary, but they will always be replaced with equally beautiful and matching flowers."
        }
    },
    {
        id: 17,
        title: {
            mk: "Cupid's Choice",
            en: "Cupid's Choice"
        },
        type: "roses",
        priceMKD: 3500,
        image: "sliki/r8.avif",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Луксузен букет од длабоко црвени и нежни розови рози, елегантно завиткан во стилска хартија. Безвременски израз на љубов, страст и романтика — совршен за Денот на вљубените и значајни моменти што се паметат засекогаш.",
            en: "A luxury bouquet of deep red and gentle pink roses, elegantly wrapped in stylish paper. A timeless expression of love, passion, and romance — perfect for Valentine's Day and significant moments remembered forever."
        }
    },
    // {
    //     id: 18,
    //     title: {
    //         mk: "31 Црвена Роза",
    //         en: "31 Red Roses"
    //     },
    //     type: "roses",
    //     priceMKD: 6500,
    //     image: "sliki/r9.avif",
    //     badge: {
    //         mk: "Популарно",
    //         en: "Popular"
    //     },
    //     badgeColor: "#e65100",
    //     description: {
    //         mk: "Овој впечатлив букет од 31 црвена роза е безвременски симбол на длабока љубов, страст и искрени емоции. Совршено аранжираните рози создаваат богата и луксузна форма, додека елегантната бела амбалажа и бордо панделка му даваат префинет и свечен изглед. Идеален избор за годишнини, родендени, романтични изненадувања или кога сакате да кажете „Те сакам“ без зборови.",
    //         en: "This striking bouquet of 31 red roses is a timeless symbol of deep love, passion, and sincere emotions. Perfectly arranged roses create a rich and luxurious shape, while the elegant white packaging and burgundy ribbon give it a refined and formal look. An ideal choice for anniversaries, birthdays, romantic surprises, or when you want to say 'I love you' without words."
    //     }
    // },
    {
        id: 19,
        title: {
            mk: "55 Црвени Рози",
            en: "55 Red Roses"
        },
        type: "roses",
        priceMKD: 11500,
        image: "sliki/r10.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Овој впечатлив букет од 55 црвени рози е безвременски симбол на длабока љубов, страст и искрени емоции. Совршено аранжираните рози создаваат богата и луксузна форма, додека елегантната бела амбалажа и бордо панделка му даваат префинет и свечен изглед. Идеален избор за годишнини, родендени, романтични изненадувања или кога сакате да кажете „Те сакам“ без зборови.",
            en: "This striking bouquet of 55 red roses is a timeless symbol of deep love, passion, and sincere emotions. Perfectly arranged roses create a rich and luxurious shape, while the elegant white packaging and burgundy ribbon give it a refined and formal look. An ideal choice for anniversaries, birthdays, romantic surprises, or when you want to say 'I love you' without words."
        }
    },
    {
        id: 20,
        title: {
            mk: "101 Роза во кутија",
            en: "101 Roses in a Box"
        },
        type: "roses",
        priceMKD: 22000,
        image: "sliki/r11.avif",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Кога сакате да кажете „те сакам“ на највпечатлив начин. 101 раскошна црвена роза соодветно аранжирани во елегантна кутија создаваат подарок што остава без здив. Симбол на страст, љубов и внимание – идеален за моменти што мора да се паметат. Совршен избор за големи емоции и незаборавно изненадување.",
            en: "When you want to say 'I love you' in the most impressive way. 101 gorgeous red roses properly arranged in an elegant box create a breathtaking gift. A symbol of passion, love, and attention – ideal for moments that must be remembered. A perfect choice for big emotions and an unforgettable surprise."
        }
    },
    // {
    //     id: 23,
    //     title: {
    //         mk: "Pink Dream",
    //         en: "Pink Dream"
    //     },
    //     type: "classic",
    //     priceMKD: 2800,
    //     image: "sliki/b1.avif",
    //     badge: {
    //         mk: "Романтично",
    //         en: "Romantic"
    //     },
    //     badgeColor: "#c2185b",
    //     description: {
    //         mk: "Овој романтичен букет спојува нежни пастелни тонови со богато зеленило за безвременски и елегантен изглед. Содржи меки розови рози, разиграни каранфили, кремасто бели лизиантуси и лаванда хризантеми, убаво надополнети со еукалиптус и сезонско зеленило. Завиткан во чиста бела хартија и завршен со сатенска розова панделка, аранжманот изгледа свежо, воздушесто и природно елегантно.",
    //         en: "This romantic bouquet combines soft pastel tones with rich greenery for a timeless and elegant look. It contains soft pink roses, playful carnations, creamy white lisianthus, and lavender chrysanthemums, nicely complemented by eucalyptus and seasonal greenery. Wrapped in clean white paper and finished with a satin pink ribbon, the arrangement looks fresh, airy, and naturally elegant."
    //     }
    // },
    {
        id: 24,
        title: {
            mk: "Розево бел микс",
            en: "Pink & White Mix"
        },
        type: "classic",
        priceMKD: 1500,
        image: "sliki/b2.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Елегантен и нежен букет кој им е омилен на сите дами. Напомена: Поради моментална и сезонска достапност, некои цветови може да варираат, но секогаш ќе бидат заменети со подеднакво убави и соодветни цветови.",
            en: "An elegant and gentle bouquet that is a favorite among all ladies. Note: Due to current and seasonal availability, some flowers may vary, but they will always be replaced with equally beautiful and matching flowers."
        }
    },
    {
        id: 25,
        title: {
            mk: "Летна приказна",
            en: "Summer Story"
        },
        type: "classic",
        priceMKD: 2200,
        image: "sliki/b3.avif",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Весел и шармантен букет исполнет со розеви, виолетови, жолти и бели цветови, кој ги доловува убавината и свежината на летото. Разиграната комбинација на бои создава нежна и весела атмосфера, додека разновидните цветови му даваат природен и уникатен изглед. Совршен избор за родендени, прослави, благодарност или едноставно за да внесете малку сонце и радост во нечиј ден.",
            en: "A cheerful and charming bouquet filled with pink, purple, yellow, and white flowers, capturing the beauty and freshness of summer. The playful combination of colors creates a gentle and cheerful atmosphere, while the diverse flowers give it a natural and unique look. A perfect choice for birthdays, celebrations, gratitude, or simply to bring some sunshine and joy into someone's day."
        }
    },
    {
        id: 26,
        title: {
            mk: "Baby Blue & White Mix",
            en: "Baby Blue & White Mix"
        },
        type: "classic",
        priceMKD: 2200,
        image: "sliki/b20.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Нежен и префинет букет во прекрасна комбинација од светло сини и бели цветови, создаден за моменти исполнети со нежност и елеганција. Светлите нијанси му даваат свеж и модерен изглед, додека хармоничното спојување на боите создава чувство на мир и чистота. Совршен избор за родендени, крштевки, прослави или како нежен знак на внимание за некоја посебна личност.",
            en: "A gentle and refined bouquet in a wonderful combination of light blue and white flowers, created for moments filled with tenderness and elegance. Light shades give it a fresh and modern look, while the harmonious combination of colors creates a sense of peace and purity. A perfect choice for birthdays, christenings, celebrations, or as a gentle token of appreciation for someone special."
        }
    },
    {
        id: 27,
        title: {
            mk: "Graduation Bouquet",
            en: "Graduation Bouquet"
        },
        type: "classic",
        priceMKD: 2400,
        image: "sliki/b30.avif",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Прославете го дипломирањето на најубав начин со овој елегантен цветен букет кој содржи свежо сезонско цвеќе, матурска/дипломска мечка и честитка. Внимателно аранжиран во премиум пастелно пакување, овој букет е совршен подарок за секој матурант или дипломец. Изборот на цвеќе може да варира според сезонската достапност, додека стилот и боите ќе останат внимателно усогласени.",
            en: "Celebrate graduation in the most beautiful way with this elegant floral bouquet featuring fresh seasonal flowers, a graduation teddy bear, and a greeting card. Carefully arranged in premium pastel packaging, this bouquet is the perfect gift for any graduate. Flower selection may vary based on seasonal availability, while style and colors will remain carefully matched."
        }
    },
    {
        id: 28,
        title: {
            mk: "Шарен Микс",
            en: "Colorful Mix"
        },
        type: "classic",
        priceMKD: 1500,
        image: "sliki/sm.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Разигран и впечатлив букет исполнет со разновидни цветови во прекрасна комбинација од живописни бои. Различните нијанси создаваат весела и позитивна атмосфера, додека внимателно избраните цветови му даваат природен и уникатен изглед. Совршен избор за родендени, прослави, честитки или едноставно за да внесете боја и радост во нечиј ден.",
            en: "A playful and striking bouquet filled with various flowers in a wonderful combination of vibrant colors. The different shades create a cheerful and positive atmosphere, while carefully selected flowers give it a natural and unique look. A perfect choice for birthdays, celebrations, greetings, or simply to bring color and joy into someone's day."
        }
    },
    // {
    //     id: 29,
    //     title: {
    //         mk: "Свежо цвеќе во вазна",
    //         en: "Fresh Flowers in a Vase"
    //     },
    //     type: "classic",
    //     priceMKD: 1800,
    //     image: "sliki/sv.avif",
    //     badge: { mk: "", en: "" },
    //     badgeColor: "",
    //     description: {
    //         mk: "Прекрасен аранжман од свежо цвеќе внимателно избрано и уредно поставено во елегантна вазна. Разновидните цветови создаваат природен и освежителен изглед, соодветен за внесување боја и убавина во секој простор. Идеален избор за подарок, посебна пригода или едноставно за да го разубавите домот со допир на свежина и елеганција.",
    //         en: "A wonderful fresh flower arrangement carefully selected and neatly placed in an elegant vase. The diverse flowers create a natural and refreshing look, suitable for bringing color and beauty to any space. An ideal choice for a gift, special occasion, or simply to brighten up your home with a touch of freshness and elegance."
    //     }
    // },
    {
        id: 30,
        title: {
            mk: "Црвено-бел микс",
            en: "Red & White Mix"
        },
        type: "classic",
        priceMKD: 1500,
        image: "sliki/b10.avif",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Елегантен и впечатлив букет во класична комбинација од црвени и бели цветови. Контрастот помеѓу интензивните црвени и нежните бели нијанси создава хармоничен и префинет изглед. Совршен избор за љубовни моменти, прослави, годишнини или како прекрасен знак на внимание за некоја посебна личност.",
            en: "An elegant and striking bouquet in a classic combination of red and white flowers. The contrast between intense red and gentle white shades creates a harmonious and refined look. A perfect choice for romantic moments, celebrations, anniversaries, or as a wonderful token of appreciation for someone special."
        }
    },
    {
        id: 31,
        title: {
            mk: "Црвен Микс",
            en: "Red Mix"
        },
        type: "classic",
        priceMKD: 2000,
        image: "sliki/b11.avif",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Богат и впечатлив букет исполнет со цветови во различни црвени нијанси, создаден да внесе топлина, страст и елеганција. Хармонично комбинираните цветови му даваат раскошен и модерен изглед, соодветен за романтични моменти, прослави, годишнини или како посебен знак на внимание.",
            en: "A rich and striking bouquet filled with flowers in various red shades, created to bring warmth, passion, and elegance. The harmoniously combined flowers give it a luxurious and modern look, suitable for romantic moments, celebrations, anniversaries, or as a special token of appreciation."
        }
    }
];

let currentFilters = {
    category: 'all',
    search: '',
    sort: 'default'
};

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("productGrid");
    if (productGrid) {
        const pageType = productGrid.getAttribute("data-page-type");
        const urlParams = new URLSearchParams(window.location.search);
        const selectedType = urlParams.get("type");

        if (pageType === "featured") {
            renderProducts(productsData.slice(0, 3), productGrid);
        } else {
            if (selectedType) {
                currentFilters.category = selectedType;
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    if (btn.getAttribute('data-filter') === selectedType) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }
            filterShopProducts();
        }
    }

    // Слушач за полето за пребарување
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            filterShopProducts({ search: e.target.value });
        });
    }

    // Слушач за селекторот за сортирање
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            filterShopProducts({ sort: e.target.value });
        });
    }

    // Слушачи за копчињата за категории
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterShopProducts({ category: e.target.getAttribute('data-filter') });
        });
    });

    // Настани за затворање на модалот
    setupModalCloseEvents();
});

// Глобална функција за филтрирање која ги поддржува категоријата, пребарувањето и сортирањето
window.filterShopProducts = function(newOptions = {}) {
    currentFilters = { ...currentFilters, ...newOptions };
    const activeLang = localStorage.getItem("florentiaLang") || "mk";

    let filtered = productsData.filter(product => {
        let matchesCategory = true;
        if (currentFilters.category && currentFilters.category !== 'all') {
            matchesCategory = product.type === currentFilters.category;
        }

        let matchesSearch = true;
        if (currentFilters.search) {
            const query = currentFilters.search.toLowerCase();
            const titleObj = product.title || {};
            const descObj = product.description || {};

            const titleText = (titleObj[activeLang] || titleObj.mk || "").toLowerCase();
            const descText = (descObj[activeLang] || descObj.mk || "").toLowerCase();

            matchesSearch = titleText.includes(query) || descText.includes(query);
        }

        return matchesCategory && matchesSearch;
    });

    // Сортирање
    if (currentFilters.sort === 'price-asc') {
        filtered.sort((a, b) => a.priceMKD - b.priceMKD);
    } else if (currentFilters.sort === 'price-desc') {
        filtered.sort((a, b) => b.priceMKD - a.priceMKD);
    } else if (currentFilters.sort === 'name-asc') {
        filtered.sort((a, b) => {
            const titleA = (a.title && (a.title[activeLang] || a.title.mk)) || "";
            const titleB = (b.title && (b.title[activeLang] || b.title.mk)) || "";
            return titleA.localeCompare(titleB);
        });
    }

    const productGrid = document.getElementById("productGrid");
    const resultsCount = document.getElementById("resultsCount");

    if (resultsCount) {
        const textResults = activeLang === 'en' ? `Showing ${filtered.length} products` : `Прикажани се ${filtered.length} производи`;
        resultsCount.innerText = textResults;
    }

    if (productGrid) {
        renderProducts(filtered, productGrid);
    }
};

function renderProducts(items, container) {
    const activeLang = localStorage.getItem("florentiaLang") || "mk";

    // Земи ја динамичната валута (ден. или den.) преку преводите
    const currencyText = (typeof translations !== 'undefined' && translations[activeLang]?.['currency'])
        ? translations[activeLang]['currency']
        : (activeLang === 'en' ? 'den.' : 'ден.');

    if (items.length === 0) {
        const noProductsText = activeLang === 'en' ? 'No products in this category.' : 'Нема производи во оваа категорија.';
        container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--muted); padding: 40px;">${noProductsText}</p>`;
        return;
    }

    let html = "";
    items.forEach(product => {
        const priceInDenars = product.priceMKD;
        const titleText = (product.title && (product.title[activeLang] || product.title.mk)) || "";
        const descText = (product.description && (product.description[activeLang] || product.description.mk)) || "";

        // Подготовка на имињата за двата јазика за кошничката
        const nameMk = (product.title && product.title.mk) ? product.title.mk : titleText;
        const nameEn = (product.title && (product.title.en || product.title.mk)) ? (product.title.en || product.title.mk) : titleText;

        // Логика за беџеви (Badges)
        let badgeText = '';
        if (product.badge) {
            badgeText = typeof product.badge === 'object' ? (product.badge[activeLang] || product.badge.mk || '') : product.badge;
        }

        const badgeHtml = badgeText
            ? `<span class="gift-badge" style="position: absolute; top: 10px; left: 10px; background-color: ${product.badgeColor || 'var(--primary, #d4af37)'}; color: #fff; padding: 4px 10px; font-size: 11px; font-weight: 600; border-radius: 4px; z-index: 2;">${badgeText}</span>`
            : '';

        const addToCartText = activeLang === 'en' ? 'Add to cart' : 'Додај во корпа';

        html += `
          <article class="product-card" style="cursor: pointer; border: 1px solid var(--border); border-radius: 12px; overflow: hidden; padding: 15px; display: flex; flex-direction: column; background: var(--surface, #fff);">
            <div class="product-image" style="position: relative; margin-bottom: 12px;">
              <img src="${product.image}" alt="${titleText}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
              ${badgeHtml}
            </div>
            <div class="product-body" style="display: flex; flex-direction: column; flex-grow: 1;">
              <h3 class="card-title" style="font-size: 18px; margin-bottom: 6px;">${titleText}</h3>
              <p class="card-description" style="color: var(--muted); font-size: 14px; margin-bottom: 15px; flex-grow: 1;">${descText}</p>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto;">
                <strong style="font-size: 18px; color: var(--primary);">${priceInDenars.toLocaleString()} <span data-key="currency">${currencyText}</span></strong>
                <button onclick="addToCart(${product.id}, '${nameMk.replace(/'/g, "\\'")}', '${nameEn.replace(/'/g, "\\'")}', ${priceInDenars}, '${product.image}')" class="btn btn-dark" style="padding: 8px 16px; font-size: 14px; position: relative; z-index: 3;">${addToCartText}</button>
              </div>
            </div>
          </article>
        `;
    });
    container.innerHTML = html;

    // Повик за прикачување на настаните на модалот откако ќе се рендерираат производите
    attachFlowerModalEvents();
}

// Функција за управување со модалот (отворање при клик на картичка)
function attachFlowerModalEvents() {
    const modal = document.getElementById("productModal");
    if (!modal) return;

    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    document.querySelectorAll("#productGrid .product-card").forEach(card => {
        card.addEventListener("click", function(event) {
            if (event.target.closest("button")) return;

            const image = card.querySelector(".product-image img");
            const title = card.querySelector(".card-title");
            const description = card.querySelector(".card-description");

            if (!image || !description) return;

            modalImage.src = image.src;
            modalImage.alt = image.alt;
            if (modalTitle && title) modalTitle.textContent = title.textContent.trim();
            modalDescription.textContent = description.textContent.trim();

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });
}

// Функција за затворање на модалот (клик на Х, надвор од модалот или ESC копче)
function setupModalCloseEvents() {
    const modal = document.getElementById("productModal");
    if (!modal) return;

    const modalClose = document.getElementById("modalClose");

    if (modalClose) {
        modalClose.addEventListener("click", () => {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}