const giftsData = [
    {
        id: 201,
        title: {
            mk: "Луксузен парфем „Blooming flower“",
            en: "Luxury Perfume „Blooming flower“"
        },
        category: "perfumes",
        priceMKD: 1850,
        image: "sliki/p1.jpg",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Префинети цветни ноти од јасмин, роза и бел мускус спакувани во елегантно шише за незаборавни моменти.",
            en: "Refined floral notes of jasmine, rose and white musk packaged in an elegant bottle for unforgettable moments."
        }
    },
    {
        id: 202,
        title: {
            mk: "Мече со розево плиш срце",
            en: "Teddy Bear with Pink Plush Heart"
        },
        category: "plush",
        priceMKD: 750,
        image: "sliki/mec.jpg",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Мек, нежен и совршен придружник за изненадување за роденден, годишнина или Денот на вљубените.",
            en: "Soft, gentle and perfect companion for a surprise birthday, anniversary or Valentine's Day."
        }
    },
    {
        id: 203,
        title: {
            mk: "Златна керамичка вазна за букети",
            en: "Gold Ceramic Vase for Bouquets"
        },
        category: "decor",
        priceMKD: 920,
        image: "sliki/v.jpg",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Прекрасна дизајнерска вазна со фина текстура која секој свеж букет го прави да изгледа уште побогато и поелегантно.",
            en: "A beautiful designer vase with a fine texture that makes every fresh bouquet look even richer and more elegant."
        }
    },
    {
        id: 204,
        title: {
            mk: "Мал затворен терариум со фитонија",
            en: "Small Closed Fittonia Terrarium"
        },
        category: "florist",
        priceMKD: 1540,
        image: "sliki/ter1.avif",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Мал затворен стаклен терариум со жива фитонија и природен мов, уреден како минијатурен зелен екосистем.",
            en: "A small closed glass terrarium with live fittonia and natural moss, arranged as a miniature green ecosystem."
        }
    },
    {
        id: 205,
        title: {
            mk: "Правоаголен стаклен терариум со мов",
            en: "Rectangular Glass Terrarium with Moss"
        },
        category: "florist",
        priceMKD: 2100,
        image: "sliki/ter2.avif",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Елегантен правоаголен стаклен терариум со природен зелен мов и минијатурен пејзаж, идеален за украсување на домот.",
            en: "An elegant rectangular glass terrarium with natural green moss and a miniature landscape, ideal for home decor."
        }
    },
    // {
    //     id: 206,
    //     title: {
    //         mk: "Геометриски терариум со мов и сукуленти",
    //         en: "Geometric Terrarium with Moss and Succulents"
    //     },
    //     category: "florist",
    //     priceMKD: 2850,
    //     image: "sliki/ter3.avif",
    //     badge: { mk: "", en: "" },
    //     badgeColor: "",
    //     description: {
    //         mk: "Декоративен геометриски стаклен терариум со природен мов и минијатурни сукуленти, уреден во модерен стаклен сад.",
    //         en: "A decorative geometric glass terrarium with natural moss and miniature succulents, arranged in a modern glass container."
    //     }
    // },
    {
        id: 207,
        title: {
            mk: "Мини терариум со фитонија и плута",
            en: "Mini Fittonia and Cork Terrarium"
        },
        category: "florist",
        priceMKD: 3200,
        image: "sliki/ter4.avif",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Мал затворен стаклен терариум со плутена капа, жива фитонија, природен мов, камчиња и слоевит природен супстрат.",
            en: "A small closed glass terrarium with a cork lid, live fittonia, natural moss, pebbles, and layered natural substrate."
        }
    },
    {
        id: 208,
        title: {
            mk: "Геометриски терариум со мов и сукуленти",
            en: "Geometric Terrarium with Moss and Succulents"
        },
        category: "florist",
        priceMKD: 1450,
        image: "sliki/ter5.avif",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Геометриски стаклен терариум со зелен мов, папрат и природни камчиња, уреден како мал шумски пејзаж.",
            en: "A geometric glass terrarium with green moss, fern, and natural pebbles, arranged as a small forest landscape."
        }
    },
    {
        id: 209,
        title: {
            mk: "Големо бело плишено мече",
            en: "Large White Plush Teddy Bear"
        },
        category: "plush",
        priceMKD: 1400,
        image: "sliki/m2.jpg",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Големо и меко бело плишено мече, совршено за подарок на сакана личност и посебни пригоди.",
            en: "A large and soft white plush teddy bear, perfect as a gift for a loved one and special occasions."
        }
    },
    {
        id: 210,
        title: {
            mk: "Мече со црвено срце",
            en: "Teddy Bear with Red Heart"
        },
        category: "plush",
        priceMKD: 950,
        image: "sliki/m1.jpg",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Нежно плишено мече со црвено срце, идеално за романтични подароци и изненадувања.",
            en: "A gentle plush teddy bear with a red heart, ideal for romantic gifts and surprises."
        }
    },
    {
        id: 211,
        title: {
            mk: "Мало кафено плишено мече",
            en: "Small Brown Plush Teddy Bear"
        },
        category: "plush",
        priceMKD: 650,
        image: "sliki/m3.jpg",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Мало и преслатко плишено мече кое одлично се комбинира со букет цвеќе или друг подарок.",
            en: "A small and adorable plush teddy bear that combines wonderfully with a bouquet of flowers or another gift."
        }
    },
    {
        id: 212,
        title: {
            mk: "Розево мече",
            en: "Pink Teddy Bear"
        },
        category: "plush",
        priceMKD: 1500,
        image: "./sliki/m4.jpg",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Слатко розево плишено мече, создадено за романтични моменти и посебни личности.",
            en: "A sweet pink plush teddy bear, created for romantic moments and special personalities."
        }
    },
    {
        id: 213,
        title: {
            mk: "Плишено мече со цвет",
            en: "Plush Teddy Bear with Flower"
        },
        category: "plush",
        priceMKD: 1100,
        image: "sliki/m5.jpg",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Меко плишено мече со прекрасен цветен детал, идеално како дополнување на подарок.",
            en: "A soft plush teddy bear with a beautiful floral detail, ideal as a gift supplement."
        }
    },
    // {
    //     id: 214,
    //     title: {
    //         mk: "Слатко кремасто мече",
    //         en: "Sweet Cream Teddy Bear"
    //     },
    //     category: "plush",
    //     priceMKD: 750,
    //     image: "sliki/m6.jpg",
    //     badge: { mk: "", en: "" },
    //     badgeColor: "",
    //     description: {
    //         mk: "Нежно кремасто плишено мече со симпатичен изглед, погодно за различни прилики.",
    //         en: "A gentle cream plush teddy bear with a cute look, suitable for various occasions."
    //     }
    // },
    {
        id: 215,
        title: {
            mk: "Florence",
            en: "Florence"
        },
        category: "perfumes",
        priceMKD: 2200,
        image: "sliki/f2.jpg",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Софистициран парфем со луксузен и модерен мирис, идеален за посебни прилики.",
            en: "A sophisticated perfume with a luxurious and modern scent, ideal for special occasions."
        }
    },
    {
        id: 216,
        title: {
            mk: "Floratta Love",
            en: "Floratta Love"
        },
        category: "perfumes",
        priceMKD: 2050,
        image: "sliki/p4.jpg",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Романтичен цветен мирис со нежни ноти, создаден како совршен подарок за сакана личност.",
            en: "A romantic floral fragrance with delicate notes, created as a perfect gift for a loved one."
        }
    },
    {
        id: 217,
        title: {
            mk: "Florentia Secret",
            en: "Florentia Secret"
        },
        category: "perfumes",
        priceMKD: 1950,
        image: "sliki/p2.jpg",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Модерен и пријатен парфем со нежен карактер, погоден за секојдневно носење.",
            en: "A modern and pleasant perfume with a gentle character, suitable for everyday wear."
        }
    },
    {
        id: 218,
        title: {
            mk: "Florentia Yellow",
            en: "Florentia Yellow"
        },
        category: "perfumes",
        priceMKD: 2300,
        image: "sliki/p3.jpg",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Топол и елегантен мирис со богати ноти, создаден за оние кои сакаат пософистициран парфем.",
            en: "A warm and elegant scent with rich notes, created for those who want a more sophisticated perfume."
        }
    },
    {
        id: 221,
        title: {
            mk: "Елегантна бела вазна",
            en: "Elegant White Vase"
        },
        category: "decor",
        priceMKD: 900,
        image: "sliki/v1.jpg",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Минималистичка бела вазна која прекрасно се вклопува со свежи букети и модерен ентериер.",
            en: "A minimalist white vase that fits beautifully with fresh bouquets and modern interior design."
        }
    },
    {
        id: 222,
        title: {
            mk: "Златна декоративна вазна",
            en: "Gold Decorative Vase"
        },
        category: "decor",
        priceMKD: 1250,
        image: "sliki/v2.jpg",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Елегантна декоративна вазна со златни детали која внесува луксузен изглед во секој простор.",
            en: "An elegant decorative vase with gold details that brings a luxurious look to any space."
        }
    },
    {
        id: 223,
        title: {
            mk: "Стаклена вазна за цвеќе",
            en: "Glass Flower Vase"
        },
        category: "decor",
        priceMKD: 850,
        image: "sliki/v3.jpg",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Едноставна и елегантна стаклена вазна погодна за свежи цвеќиња и различни цветни аранжмани.",
            en: "A simple and elegant glass vase suitable for fresh flowers and various floral arrangements."
        }
    },
    {
        id: 224,
        title: {
            mk: "Мала декоративна вазна",
            en: "Small Decorative Vase"
        },
        category: "decor",
        priceMKD: 650,
        image: "sliki/v4.jpg",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Мала декоративна вазна идеална за маса, полица или работен простор.",
            en: "A small decorative vase ideal for a table, shelf, or workspace."
        }
    },
    {
        id: 225,
        title: {
            mk: "Модерна керамичка вазна",
            en: "Modern Ceramic Vase"
        },
        category: "decor",
        priceMKD: 1100,
        image: "sliki/v5.jpg",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Модерна керамичка вазна со уникатен дизајн која додава стил и елеганција во домот.",
            en: "A modern ceramic vase with a unique design that adds style and elegance to the home."
        }
    },
    {
        id: 226,
        title: {
            mk: "Голема вазна за букети",
            en: "Large Vase for Bouquets"
        },
        category: "decor",
        priceMKD: 1350,
        image: "sliki/v6.jpg",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Поголема декоративна вазна наменета за богати букети и впечатливи цветни аранжмани.",
            en: "A larger decorative vase designed for rich bouquets and impressive floral arrangements."
        }
    },
    {
        id: 227,
        title: {
            mk: "Луксузна вазна",
            en: "Luxury Vase"
        },
        category: "decor",
        priceMKD: 1600,
        image: "sliki/v7.jpg",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Луксузна вазна со впечатлив дизајн, создадена како посебен декоративен детал за домот.",
            en: "A luxury vase with an impressive design, created as a special decorative detail for the home."
        }
    },
    // {
    //     id: 228,
    //     title: {
    //         mk: "Декоративен украс за дом",
    //         en: "Home Decorative Ornament"
    //     },
    //     category: "decor",
    //     priceMKD: 700,
    //     image: "sliki/d1.jpg",
    //     badge: { mk: "", en: "" },
    //     badgeColor: "",
    //     description: {
    //         mk: "Елегантен декоративен украс кој внесува топлина, стил и пријатна атмосфера во домот.",
    //         en: "An elegant decorative ornament that brings warmth, style, and a pleasant atmosphere into the home."
    //     }
    // },
    {
        id: 229,
        title: {
            mk: "Мал украсен сад",
            en: "Small Decorative Bowl"
        },
        category: "decor",
        priceMKD: 500,
        image: "sliki/d2.jpg",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Декоративен сад со модерен изглед, погоден за различни простории и стилови на ентериер.",
            en: "A decorative bowl with a modern look, suitable for various rooms and interior styles."
        }
    },
    {
        id: 230,
        title: {
            mk: "Декоративен сет за дом",
            en: "Decorative Home Set"
        },
        category: "decor",
        priceMKD: 900,
        image: "sliki/d4.jpg",
        badge: {
            mk: "Ново",
            en: "New"
        },
        badgeColor: "#2e7d32",
        description: {
            mk: "Елегантен декоративен сет кој може да биде прекрасен подарок за секој дом.",
            en: "An elegant decorative set that can be a wonderful gift for any home."
        }
    },
    {
        id: 231,
        title: {
            mk: "Декоративен свеќник",
            en: "Decorative Candle Holder"
        },
        category: "decor",
        priceMKD: 750,
        image: "sliki/d3.jpg",
        badge: {
            mk: "Романтично",
            en: "Romantic"
        },
        badgeColor: "#c2185b",
        description: {
            mk: "Елегантен декоративен свеќник кој создава топла и пријатна атмосфера во секој дом.",
            en: "An elegant decorative candle holder that creates a warm and cozy atmosphere in every home."
        }
    },
    {
        id: 232,
        title: {
            mk: "Декоративна кутија за накит",
            en: "Decorative Jewelry Box"
        },
        category: "decor",
        priceMKD: 1200,
        image: "sliki/d5.jpg",
        badge: {
            mk: "Популарно",
            en: "Popular"
        },
        badgeColor: "#e65100",
        description: {
            mk: "Стилска декоративна кутија за накит и мали лични предмети, идеална како подарок.",
            en: "A stylish decorative box for jewelry and small personal items, ideal as a gift."
        }
    },
    {
        id: 233,
        title: {
            mk: "Декоративна рамка за фотографии",
            en: "Decorative Photo Frame"
        },
        category: "decor",
        priceMKD: 850,
        image: "sliki/d6.jpg",
        badge: { mk: "", en: "" },
        badgeColor: "",
        description: {
            mk: "Елегантна рамка за фотографии која ги претвора омилените спомени во прекрасен украс за домот.",
            en: "An elegant photo frame that turns favorite memories into a beautiful home decoration."
        }
    }
];