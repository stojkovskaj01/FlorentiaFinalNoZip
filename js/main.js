document.addEventListener("DOMContentLoaded", () => {
    // 1. Loader
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => loader.remove(), 400);
        }, 400);
    }

    // 2. Dark Mode
    let currentTheme = localStorage.getItem("florentiaTheme") || "light";
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    // 3. Language setup (Поставено експлицитно на "mk" ако нема ништо зачувано)
    let currentLang = localStorage.getItem("florentiaLang") || "mk";
    localStorage.setItem("florentiaLang", currentLang);

    // Header со ажурирана навигација и преместено Хабургер копче кај акциите
    const headerContainer = document.getElementById("site-header");
    if (headerContainer) {
        headerContainer.innerHTML = `
      <header class="header">
        <div class="container header-inner">
          <a class="logo" href="index.html">Florentia<span>.</span></a>
          
          <nav class="nav">
            <a href="index.html" data-key="home" data-i18n="home">Почетна</a>
            <a href="about.html" data-key="aboutTeam" data-i18n="aboutTeam">За нас & Тим</a>
            
            <div class="dropdown">
              <a href="flowers.html"><span data-key="products" data-i18n="products">Производи (Цвеќе)</span> ▾</a>
              <div class="dropdown-menu">
                <a href="flowers.html?type=roses" data-key="roses" data-i18n="roses">Рози</a>
                <a href="flowers.html?type=classic" data-key="classic" data-i18n="classic">Букети</a>
                <a href="flowers.html?type=potted" data-key="potted" data-i18n="potted">Саксиски цвеќиња</a>
              </div>
            </div>

            <a href="weddings.html" data-key="weddings" data-i18n="weddings">Свадбени аранжмани</a>
            <a href="gifts.html" data-key="gifts" data-i18n="gifts">Подароци</a>

            <a href="faq.html" data-key="faq" data-i18n="faq">FAQ</a>
            <a href="contact.html" data-key="contact" data-i18n="contact">Контакт</a>
          </nav>
          
          <div class="header-actions">
            <button class="hamburger-btn" aria-label="Отвори мени">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <button id="theme-toggle" class="nav-action-btn icon-btn" title="Промени тема">
              ${currentTheme === "dark" ? "☀️" : "🌙"}
            </button>
            <button id="lang-toggle" class="nav-action-btn" title="Промени јазик">
              <span id="lang-label">🇬🇧 EN</span>
            </button>
            <a href="checkout.html" class="nav-action-btn">
              🛒 <span data-key="cart" data-i18n="cart">Корпа</span> (<span id="cart-count">0</span>)
            </a>
          </div>
        </div>
      </header>
    `;

        function updateLanguageButton(lang) {
            const langLabel = document.getElementById("lang-label");
            if (!langLabel) return;

            if (lang === "en") {
                langLabel.innerHTML = "🇲🇰 MK";
            } else {
                langLabel.innerHTML = "🇬🇧 EN";
            }
        }

        const themeToggleBtn = document.getElementById("theme-toggle");
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener("click", () => {
                let theme = document.documentElement.getAttribute("data-theme");
                if (theme === "dark") {
                    document.documentElement.setAttribute("data-theme", "light");
                    localStorage.setItem("florentiaTheme", "light");
                    themeToggleBtn.innerText = "🌙";
                } else {
                    document.documentElement.setAttribute("data-theme", "dark");
                    localStorage.setItem("florentiaTheme", "dark");
                    themeToggleBtn.innerText = "☀️";
                }
            });
        }

        const langToggleBtn = document.getElementById("lang-toggle");
        if (langToggleBtn) {
            langToggleBtn.addEventListener("click", () => {
                currentLang = currentLang === "mk" ? "en" : "mk";
                localStorage.setItem("florentiaLang", currentLang);

                updateLanguageButton(currentLang);
                applyTranslations(currentLang);
                updateCartUI();

                // Освежување на производите преку правилната глобална функција од products.js
                if (typeof window.filterShopProducts === "function") {
                    window.filterShopProducts();
                }
            });
        }

        updateLanguageButton(currentLang);
    }

    function applyTranslations(lang) {
        if (typeof translations === "undefined" || !translations[lang]) return;

        const elements = document.querySelectorAll("[data-key], [data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-key") || el.getAttribute("data-i18n");
            const type = el.getAttribute("data-i18n-type") || el.getAttribute("data-type");

            if (translations[lang][key]) {
                if (type === "placeholder") {
                    el.placeholder = translations[lang][key];
                } else if (type === "title") {
                    el.title = translations[lang][key];
                } else if (el.tagName === "TITLE") {
                    document.title = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

    }

    applyTranslations(currentLang);

    // Footer
    const footerContainer = document.getElementById("site-footer");
    if (footerContainer) {
        footerContainer.innerHTML = `
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <h3>Florentia<span>.</span></h3>
        <p data-key="footerDesc">Цвеќиња со приказна. Создадено со љубов во Скопје.</p>
      </div>
      <div>
        <h4 data-key="footerQuickLinksTitle">Брзи линкови</h4>
        <a href="index.html" data-key="navHome">Почетна</a>
        <a href="about.html" data-key="navAbout">За нас & Тим</a>
        <a href="flowers.html" data-key="navProducts">Производи</a>
        <a href="weddings.html" data-key="navWeddings">Свадбени аранжмани</a>
        <a href="gifts.html" data-key="navGifts">Подароци</a>
      </div>
      <div>
        <h4 data-key="footerSupportTitle">Поддршка</h4>
        <a href="faq.html" data-key="navFaq">FAQ</a>
        <a href="contact.html" data-key="navContact">Контакт</a>
      </div>
    </div>
  </footer>
`;
        applyTranslations(currentLang);
    }

    // Cookie Banner
    const cookieBanner = document.getElementById("cookie-banner");
    if (cookieBanner && !localStorage.getItem("florentiaCookieChoice")) {
        cookieBanner.style.display = "block";
    }
    document.getElementById("cookie-accept")?.addEventListener("click", () => {
        localStorage.setItem("florentiaCookieChoice", "accepted");
        cookieBanner.style.display = "none";
    });
    document.getElementById("cookie-decline")?.addEventListener("click", () => {
        localStorage.setItem("florentiaCookieChoice", "declined");
        cookieBanner.style.display = "none";
    });

    // Toast Облаче за кошничка
    let toastEl = document.getElementById("toastNotification");
    if (!toastEl) {
        toastEl = document.createElement("div");
        toastEl.id = "toastNotification";
        toastEl.className = "toast-notification";
        toastEl.innerHTML = `<span class="icon">🌸</span> <span id="toastText">Производот е додаден во кошничка!</span>`;
        document.body.appendChild(toastEl);
    }

    function showToast(message) {
        const toastText = document.getElementById("toastText");
        if (toastText) toastText.innerText = message;
        toastEl.classList.add("show");
        setTimeout(() => { toastEl.classList.remove("show"); }, 2500);
    }

    let cart = JSON.parse(localStorage.getItem("florentiaCart")) || [];

    function saveAndUp() {
        localStorage.setItem("florentiaCart", JSON.stringify(cart));
        updateCartUI();
    }

    window.addToCart = function(id, titleMK, titleEN, priceMKD, image = "") {
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({
                id: id,
                titleMK: titleMK,
                titleEN: titleEN || titleMK,
                price: priceMKD,
                image: image,
                qty: 1
            });
        }
        saveAndUp();

        const activeLang = localStorage.getItem("florentiaLang") || "mk";
        const t = translations[activeLang] || {};
        const localizedTitle = (activeLang === 'en' ? titleEN : titleMK) || titleMK;
        const toastPrefix = t["cartAddedToast"] || "Успешно додадено: ";

        showToast(toastPrefix + localizedTitle);
    };

    function updateCartUI() {
        const badge = document.getElementById("cart-count");
        if (badge) {
            let totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
            badge.innerText = totalQty;
        }

        const checkoutCart = document.getElementById("checkout-cart");
        if (checkoutCart) {
            const activeLang = localStorage.getItem("florentiaLang") || "mk";
            const t = translations[activeLang] || {};
            const currencyText = (typeof translations !== 'undefined' && translations[activeLang]?.['currency'])
                ? translations[activeLang]['currency']
                : (activeLang === 'en' ? 'den.' : 'ден.');

            if (cart.length === 0) {
                const emptyMsg = t["cartEmptyMsg"] || 'Вашата кошничка е празна.';
                const browseBtn = t["cartBrowseBtn"] || 'Разгледај производи';
                checkoutCart.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--muted);"><p style="font-size:16px; margin-bottom:15px;">${emptyMsg}</p><a href="flowers.html" class="btn btn-dark" style="font-size:14px; padding: 10px 20px;">${browseBtn}</a></div>`;
                return;
            }

            let html = '<div class="cart-items-list">';
            let total = 0;

            cart.forEach((item, index) => {
                let itemTotal = item.price * item.qty;
                total += itemTotal;

                let itemName = activeLang === 'en' ? (item.titleEN || item.titleMK) : item.titleMK;
                if (!itemName) itemName = item.title;

                const deleteText = t["cartDelete"] || 'Избриши';
                const perPiece = t["cartPerPiece"] || 'од парче';

                html += `
          <div class="cart-item-row">
            <div class="cart-item-info">
              <h4>${itemName}</h4>
              <p>${item.price} <span data-key="currency">${currencyText}</span> ${perPiece}</p>
            </div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
              <span style="font-weight: 600; min-width: 20px; text-align: center;">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
              <button class="remove-btn" onclick="removeItem(${index})">${deleteText}</button>
            </div>
          </div>
        `;
            });

            const totalText = t["cartTotalPay"] || 'Вкупно за наплата:';
            html += `
        <div style="margin-top: 25px; padding-top: 15px; border-top: 2px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 18px; font-weight: 600;">${totalText}</span>
          <strong style="font-size: 22px; color: var(--primary);">${total} <span data-key="currency">${currencyText}</span></strong>
        </div>
      </div>`;

            checkoutCart.innerHTML = html;
        }
    }

    window.changeQty = function(index, delta) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) cart.splice(index, 1);
        saveAndUp();
    };

    window.removeItem = function(index) {
        cart.splice(index, 1);
        saveAndUp();
        const activeLang = localStorage.getItem("florentiaLang") || "mk";
        const t = translations[activeLang] || {};
        showToast(t["cartRemovedToast"] || "Производот е отстранет од кошничката");
    };

    updateCartUI();

    // Ротирачки цитати
    const quotes = [
        { text: "Цвеќињата се зборовите на земјата изговорени во безмолвна убавина.", author: "— Едвин Борк" },
        { text: "Каде што цветаат цвеќиња, цвета и надежта.", author: "— Лејди Бердон" },
        { text: "Земјата се смее во цвеќиња.", author: "— Ралф Волдо Емерсон" },
        { text: "Да се сака цвеќе значи да се пронајде парче од рајот на земјата.", author: "— Florentia Студио" },
        { text: "Ако можевме јасно да го видиме чудото на еден единствен цвет, целиот наш живот би се променил.", author: "— Буда" },
        { text: "Цвеќињата се музиката на земјата, изговорена без звук од нејзините усни.", author: "— Едвин Куран" },
        { text: "Цветот што цвета во неволја е најредок и најубав од сите.", author: "— Мулан" }
    ];

    let currentQuoteIndex = 0;
    const quoteTextEl = document.getElementById("quote-text");
    const quoteAuthorEl = document.getElementById("quote-author");
    const dotsContainer = document.getElementById("quote-dots");

    if (dotsContainer) {
        quotes.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.className = "q-dot";
            dot.dataset.index = index;
            dot.style.cssText = `width: 10px; height: 10px; border-radius: 50%; background: ${index === 0 ? 'var(--primary)' : 'var(--border)'}; display: inline-block; transition: var(--transition); cursor: pointer;`;

            dot.addEventListener("click", () => showQuote(index));
            dotsContainer.appendChild(dot);
        });
    }

    function showQuote(index) {
        if (!quoteTextEl || !quoteAuthorEl) return;
        quoteTextEl.style.opacity = 0;
        quoteAuthorEl.style.opacity = 0;

        setTimeout(() => {
            quoteTextEl.innerText = quotes[index].text;
            quoteAuthorEl.innerText = quotes[index].author;
            quoteTextEl.style.opacity = 1;
            quoteAuthorEl.style.opacity = 1;
        }, 300);

        document.querySelectorAll(".q-dot").forEach((dot, i) => {
            dot.style.background = i === index ? "var(--primary)" : "var(--border)";
        });
        currentQuoteIndex = index;
    }

    if (quotes.length > 0) {
        setInterval(() => {
            showQuote((currentQuoteIndex + 1) % quotes.length);
        }, 5000);
    }

    // Мобилно хабургер мени
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const navMenu = document.querySelector(".nav");

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        const navLinks = navMenu.querySelectorAll("a:not(.dropdown > a)");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    const dropdownToggle = document.querySelector(".dropdown > a");
    if (dropdownToggle) {
        dropdownToggle.addEventListener("click", (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const parentDropdown = dropdownToggle.closest(".dropdown");
                parentDropdown.classList.toggle("open");
            }
        });
    }

    const dropdownSubLinks = document.querySelectorAll(".dropdown-menu a");
    dropdownSubLinks.forEach(subLink => {
        subLink.addEventListener("click", () => {
            if (window.innerWidth <= 992 && navMenu) {
                navMenu.classList.remove("active");
                const parentDropdown = subLink.closest(".dropdown");
                if (parentDropdown) parentDropdown.classList.remove("open");
            }
        });
    });
});

// Скрол копче на врв
const scrollBtn = document.getElementById('scrollToTopBtn');
if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}









/* ================= FLOWER PETALS BACKGROUND ================= */

const canvas = document.getElementById("flowerCanvas");
if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let petals = [];
    let mouse = { x: null, y: null, radius: 120 };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    class Petal {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * -canvas.height; // Започнуваат надвор од екранот
            this.size = Math.random() * 8 + 6; // Големина на ливчето
            this.speedY = Math.random() * 2.5 + 1.5; // Брзина на паѓање
            this.speedX = (Math.random() - 0.5) * 1; // Хоризонтално нишање
            this.angle = Math.random() * 360;
            this.spin = (Math.random() - 0.5) * 0.03; // Ротација на ливчето
            this.opacity = Math.random() * 0.5 + 0.3; // Нежна транспарентност
            // Пастелни бои соодветни за цвеќиња (розеви, лила, нежно црвени)
            const colors = ["#ffb6c1", "#ffc0cb", "#ff69b4", "#dda0dd", "#fff0f5"];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.angle) * 0.5;
            this.angle += this.spin;

            // Интеракција со глувчето (бегаат малку од курсорот)
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                let force = (mouse.radius - distance) / mouse.radius;
                this.x -= (dx / distance) * force * 3;
                this.y -= (dy / distance) * force * 3;
            }

            // Ресетирај кога ќе падне долу на екранот
            if (this.y > canvas.height + 20) {
                this.reset();
                this.y = -20;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.globalAlpha = this.opacity;

            ctx.beginPath();
            // Цртање форма на ливче (овална форма)
            ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();

            ctx.restore();
        }
    }

    function createPetals() {
        for (let i = 0; i < 40; i++) { // Број на ливчиња на екранот
            petals.push(new Petal());
        }
    }

    createPetals();

    function animatePetals() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        petals.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animatePetals);
    }

    animatePetals();
}