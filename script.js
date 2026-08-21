```javascript
/* =========================================================
   MUE / Minecraft Unity Edition
   Main Website JavaScript
   ========================================================= */


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const body =
        document.body;

    const themeButton =
        document.getElementById("themeButton");

    const searchButton =
        document.getElementById("searchButton");

    const accountButton =
        document.getElementById("accountButton");

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const searchPanel =
        document.getElementById("searchPanel");

    const accountPanel =
        document.getElementById("accountPanel");

    const searchForm =
        document.getElementById("searchForm");

    const searchInput =
        document.getElementById("searchInput");

    const searchResults =
        document.getElementById("searchResults");

    const navTriggers =
        document.querySelectorAll(
            ".nav-trigger"
        );

    const megaPanels =
        document.querySelectorAll(
            ".mega-panel"
        );


    /* =====================================================
       THEME
       ===================================================== */

    const savedTheme =
        localStorage.getItem("mue-theme");


    if (
        savedTheme === "light"
    ) {

        body.classList.add(
            "light-mode"
        );

    }


    function updateThemeButton() {

        if (!themeButton) {
            return;
        }


        const isLight =
            body.classList.contains(
                "light-mode"
            );


        themeButton.textContent =
            isLight
                ? "☀️"
                : "🌙";


        themeButton.setAttribute(
            "aria-label",
            isLight
                ? "ダークモードに変更"
                : "ライトモードに変更"
        );


        themeButton.setAttribute(
            "title",
            isLight
                ? "ダークモード"
                : "ライトモード"
        );

    }


    function toggleTheme() {

        const isLight =
            body.classList.toggle(
                "light-mode"
            );


        localStorage.setItem(
            "mue-theme",
            isLight
                ? "light"
                : "dark"
        );


        updateThemeButton();

    }


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            toggleTheme
        );

    }


    updateThemeButton();


    /* =====================================================
       PANEL HELPERS
       ===================================================== */

    function closeAllPanels() {

        megaPanels.forEach(
            panel => {

                panel.classList.remove(
                    "open"
                );

            }
        );


        navTriggers.forEach(
            trigger => {

                trigger.classList.remove(
                    "active"
                );

                trigger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );


        if (searchButton) {

            searchButton.classList.remove(
                "active"
            );

            searchButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (accountButton) {

            accountButton.classList.remove(
                "active"
            );

            accountButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    function openPanel(panel) {

        if (!panel) {
            return;
        }


        closeAllPanels();


        panel.classList.add(
            "open"
        );

    }


    function togglePanel(panel) {

        if (!panel) {
            return;
        }


        const isOpen =
            panel.classList.contains(
                "open"
            );


        if (isOpen) {

            closeAllPanels();

        } else {

            openPanel(panel);

        }

    }


    /* =====================================================
       DESKTOP NAVIGATION
       ===================================================== */

    navTriggers.forEach(
        trigger => {

            trigger.addEventListener(
                "click",
                event => {

                    event.stopPropagation();


                    const menuId =
                        trigger.dataset.menu;


                    const panel =
                        document.getElementById(
                            menuId
                        );


                    if (!panel) {
                        return;
                    }


                    const wasOpen =
                        panel.classList.contains(
                            "open"
                        );


                    closeAllPanels();


                    if (!wasOpen) {

                        panel.classList.add(
                            "open"
                        );

                        trigger.classList.add(
                            "active"
                        );

                        trigger.setAttribute(
                            "aria-expanded",
                            "true"
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       SEARCH
       ===================================================== */

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const wasOpen =
                    searchPanel &&
                    searchPanel.classList.contains(
                        "open"
                    );


                closeAllPanels();


                if (!wasOpen && searchPanel) {

                    searchPanel.classList.add(
                        "open"
                    );

                    searchButton.classList.add(
                        "active"
                    );

                    searchButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );


                    setTimeout(
                        () => {

                            if (searchInput) {

                                searchInput.focus();

                            }

                        },
                        250
                    );

                }

            }
        );

    }


    /* =====================================================
       SEARCH DATABASE
       ===================================================== */

    const searchPages = [

        {
            title:
                "Minecraft Unity Edition",

            description:
                "Minecraft Unity Editionの概要",

            url:
                "minecraft-unity-edition.html",

            keywords:
                "minecraft unity edition mue ゲーム"
        },


        {
            title:
                "PC Edition",

            description:
                "Minecraft Unity Edition for PC",

            url:
                "pc.html",

            keywords:
                "pc windows mac computer"
        },


        {
            title:
                "Web Edition",

            description:
                "ブラウザでプレイできるWeb版",

            url:
                "web.html",

            keywords:
                "web browser browser"
        },


        {
            title:
                "Mobile Edition",

            description:
                "スマートフォン向けMinecraft Unity Edition",

            url:
                "mobile.html",

            keywords:
                "mobile iphone ipad smartphone android"
        },


        {
            title:
                "エディション比較",

            description:
                "PC・Web・Mobileの比較",

            url:
                "compare.html",

            keywords:
                "compare edition 比較"
        },


        {
            title:
                "Minecraft Unity Editionの機能",

            description:
                "ゲームプレイやクロスプラットフォームなど",

            url:
                "features.html",

            keywords:
                "features gameplay cross platform multiplayer marketplace"
        },


        {
            title:
                "はじめ方",

            description:
                "Minecraft Unity Editionの始め方",

            url:
                "getting-started.html",

            keywords:
                "start getting started how to begin"
        },


        {
            title:
                "FAQ",

            description:
                "よくある質問",

            url:
                "faq.html",

            keywords:
                "faq question help"
        },


        {
            title:
                "トラブルシューティング",

            description:
                "ゲームで問題が発生した場合",

            url:
                "troubleshooting.html",

            keywords:
                "troubleshooting error problem bug"
        },


        {
            title:
                "お問い合わせ",

            description:
                "Minecraft Unity Editionへのお問い合わせ",

            url:
                "contact.html",

            keywords:
                "contact support 問い合わせ"
        },


        {
            title:
                "不具合報告",

            description:
                "ゲームの不具合を報告",

            url:
                "bug-report.html",

            keywords:
                "bug report issue"
        },


        {
            title:
                "アカウント",

            description:
                "Minecraft Unity Editionアカウント",

            url:
                "account.html",

            keywords:
                "account login signup"
        },


        {
            title:
                "Download",

            description:
                "Minecraft Unity Editionをダウンロード",

            url:
                "downloads.html",

            keywords:
                "download install"
        },


        {
            title:
                "Developer",

            description:
                "Minecraft Unity Edition Developer",

            url:
                "developer.html",

            keywords:
                "developer development api"
        },


        {
            title:
                "About",

            description:
                "Minecraft Unity Editionについて",

            url:
                "about.html",

            keywords:
                "about information"
        }

    ];


    function renderSearchResults(
        query
    ) {

        if (!searchResults) {
            return;
        }


        const cleanQuery =
            query
                .trim()
                .toLowerCase();


        if (!cleanQuery) {

            searchResults.innerHTML =
                "";

            return;

        }


        const results =
            searchPages.filter(
                page => {

                    const text =
                        (
                            page.title +
                            " " +
                            page.description +
                            " " +
                            page.keywords
                        )
                        .toLowerCase();


                    return text.includes(
                        cleanQuery
                    );

                }
            );


        if (
            results.length === 0
        ) {

            searchResults.innerHTML = `

                <div class="search-result-empty">

                    <strong>
                        検索結果がありません
                    </strong>

                    <span>
                        「${escapeHTML(query)}」
                        に一致するページが見つかりませんでした。
                    </span>

                </div>

            `;

            return;

        }


        searchResults.innerHTML =
            results
                .map(
                    page => `

                        <a
                            href="${page.url}"
                            class="search-result"
                        >

                            <strong>
                                ${escapeHTML(
                                    page.title
                                )}
                            </strong>

                            <span>
                                ${escapeHTML(
                                    page.description
                                )}
                            </span>

                        </a>

                    `
                )
                .join("");

    }


    function escapeHTML(
        value
    ) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    if (searchForm) {

        searchForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                if (!searchInput) {
                    return;
                }


                renderSearchResults(
                    searchInput.value
                );

            }
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                renderSearchResults(
                    searchInput.value
                );

            }
        );

    }


    /* =====================================================
       ACCOUNT
       ===================================================== */

    if (accountButton) {

        accountButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const wasOpen =
                    accountPanel &&
                    accountPanel.classList.contains(
                        "open"
                    );


                closeAllPanels();


                if (
                    !wasOpen &&
                    accountPanel
                ) {

                    accountPanel.classList.add(
                        "open"
                    );

                    accountButton.classList.add(
                        "active"
                    );

                    accountButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (
        menuButton &&
        mobileMenu
    ) {

        menuButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const isOpen =
                    mobileMenu.classList.contains(
                        "open"
                    );


                closeAllPanels();


                if (!isOpen) {

                    mobileMenu.classList.add(
                        "open"
                    );

                    menuButton.classList.add(
                        "active"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                } else {

                    mobileMenu.classList.remove(
                        "open"
                    );

                    menuButton.classList.remove(
                        "active"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );


        const mobileLinks =
            mobileMenu.querySelectorAll(
                "a"
            );


        mobileLinks.forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "open"
                        );

                        menuButton.classList.remove(
                            "active"
                        );

                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       OUTSIDE CLICK
       ===================================================== */

    document.addEventListener(
        "click",
        event => {

            const clickedInsideHeader =
                event.target.closest(
                    ".site-header"
                );


            if (
                !clickedInsideHeader
            ) {

                closeAllPanels();


                if (mobileMenu) {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }

                if (menuButton) {

                    menuButton.classList.remove(
                        "active"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeAllPanels();


                if (mobileMenu) {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }


                if (menuButton) {

                    menuButton.classList.remove(
                        "active"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


    /* =====================================================
       BUTTON RIPPLE
       ===================================================== */

    document
        .querySelectorAll(
            ".button"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        const rect =
                            button.getBoundingClientRect();


                        const ripple =
                            document.createElement(
                                "span"
                            );


                        ripple.className =
                            "button-ripple";


                        ripple.style.left =
                            (
                                event.clientX -
                                rect.left
                            ) + "px";


                        ripple.style.top =
                            (
                                event.clientY -
                                rect.top
                            ) + "px";


                        button.appendChild(
                            ripple
                        );


                        setTimeout(
                            () => {

                                ripple.remove();

                            },
                            650
                        );

                    }
                );

            }
        );


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold:
                        0.12
                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    const siteHeader =
        document.getElementById(
            "siteHeader"
        );


    let lastScrollY =
        window.scrollY;


    window.addEventListener(
        "scroll",
        () => {

            if (!siteHeader) {
                return;
            }


            const currentScrollY =
                window.scrollY;


            if (
                currentScrollY > 20
            ) {

                siteHeader.classList.add(
                    "scrolled"
                );

            } else {

                siteHeader.classList.remove(
                    "scrolled"
                );

            }


            lastScrollY =
                currentScrollY;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       INITIALIZE
       ===================================================== */

    updateThemeButton();


    console.log(
        "Minecraft Unity Edition website loaded."
    );

});
```
