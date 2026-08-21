```javascript
/* ==================================================
   MUE Website JavaScript
   Minecraft Unity Edition
   ================================================== */


/* ==================================================
   ELEMENTS
   ================================================== */

const body =
    document.body;

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const themeButton =
    document.getElementById("themeButton");

const searchButton =
    document.getElementById("searchButton");

const searchPanel =
    document.getElementById("searchPanel");

const accountButton =
    document.getElementById("accountButton");

const accountPanel =
    document.getElementById("accountPanel");

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");

const navTriggers =
    document.querySelectorAll(".nav-trigger");

const megaPanels =
    document.querySelectorAll(".mega-panel");


/* ==================================================
   THEME
   ================================================== */

const savedTheme =
    localStorage.getItem("mue-theme");


if (savedTheme === "light") {

    body.classList.add("light-mode");

}


function updateThemeButton() {

    if (!themeButton) {
        return;
    }


    const isLight =
        body.classList.contains("light-mode");


    themeButton.textContent =
        isLight ? "☀️" : "🌙";


    themeButton.setAttribute(
        "aria-label",
        isLight
            ? "ダークモードに変更"
            : "ライトモードに変更"
    );

}


function toggleTheme() {

    body.classList.toggle("light-mode");


    const isLight =
        body.classList.contains("light-mode");


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


/* ==================================================
   PANEL CONTROL
   ================================================== */

function closeAllPanels() {

    megaPanels.forEach(panel => {

        panel.classList.remove("open");

    });


    navTriggers.forEach(button => {

        button.classList.remove("active");

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    });


    if (searchButton) {

        searchButton.classList.remove("active");

        searchButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (accountButton) {

        accountButton.classList.remove("active");

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


    panel.classList.add("open");


    if (
        panel === searchPanel &&
        searchButton
    ) {

        searchButton.classList.add("active");

        searchButton.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    if (
        panel === accountPanel &&
        accountButton
    ) {

        accountButton.classList.add("active");

        accountButton.setAttribute(
            "aria-expanded",
            "true"
        );

    }

}


/* ==================================================
   NAVIGATION MENUS
   ================================================== */

navTriggers.forEach(button => {


    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const menuId =
                button.dataset.menu;


            const panel =
                document.getElementById(
                    menuId
                );


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
    );


});


/* ==================================================
   SEARCH
   ================================================== */

if (searchButton) {


    searchButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const isOpen =
                searchPanel &&
                searchPanel.classList.contains(
                    "open"
                );


            if (isOpen) {

                closeAllPanels();

            } else {

                openPanel(
                    searchPanel
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


/* ==================================================
   ACCOUNT
   ================================================== */

if (accountButton) {


    accountButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const isOpen =
                accountPanel &&
                accountPanel.classList.contains(
                    "open"
                );


            if (isOpen) {

                closeAllPanels();

            } else {

                openPanel(
                    accountPanel
                );

            }

        }
    );


}


/* ==================================================
   SEARCH FORM
   ================================================== */

if (searchForm) {


    searchForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const query =
                searchInput
                    ? searchInput.value.trim()
                    : "";


            if (!query) {

                if (searchInput) {

                    searchInput.focus();

                }

                return;

            }


            /*
             * 現在は検索ページへ
             * クエリを渡す構成。
             *
             * search.html側で
             * URLSearchParamsから
             * queryを取得できます。
             */

            const encoded =
                encodeURIComponent(
                    query
                );


            window.location.href =
                `search.html?q=${encoded}`;

        }
    );


}


/* ==================================================
   MOBILE MENU
   ================================================== */

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


            if (isOpen) {

                mobileMenu.classList.remove(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            } else {

                mobileMenu.classList.add(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
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


/* ==================================================
   CLOSE WHEN CLICKING OUTSIDE
   ================================================== */

document.addEventListener(
    "click",
    event => {


        const clickedInsideHeader =
            event.target.closest(
                ".site-header"
            );


        if (!clickedInsideHeader) {

            closeAllPanels();


            if (
                mobileMenu &&
                menuButton
            ) {

                mobileMenu.classList.remove(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* ==================================================
   ESCAPE KEY
   ================================================== */

document.addEventListener(
    "keydown",
    event => {


        if (
            event.key === "Escape"
        ) {

            closeAllPanels();


            if (
                mobileMenu &&
                menuButton
            ) {

                mobileMenu.classList.remove(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* ==================================================
   SCROLL REVEAL
   ================================================== */

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
                threshold: 0.12
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


/* ==================================================
   HEADER SCROLL EFFECT
   ================================================== */

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
            currentScrollY > 30
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


/* ==================================================
   BUTTON RIPPLE
   ================================================== */

const buttons =
    document.querySelectorAll(
        ".button"
    );


buttons.forEach(
    button => {


        button.addEventListener(
            "pointerdown",
            event => {


                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.className =
                    "button-ripple";


                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                ripple.style.left =
                    `${x}px`;


                ripple.style.top =
                    `${y}px`;


                button.appendChild(
                    ripple
                );


                setTimeout(
                    () => {

                        ripple.remove();

                    },
                    600
                );


            }
        );


    }
);


/* ==================================================
   SMOOTH INTERNAL LINKS
   ================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    link => {


        link.addEventListener(
            "click",
            event => {


                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


            }
        );


    }
);


/* ==================================================
   PAGE LOAD
   ================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );


        console.log(
            "MUE Website loaded."
        );

    }
);


/* ==================================================
   RESIZE
   ================================================== */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {


        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                () => {


                    /*
                     * PCメニューが開いたまま
                     * モバイル幅になった場合などを
                     * リセット。
                     */

                    if (
                        window.innerWidth <= 850 &&
                        mobileMenu
                    ) {

                        closeAllPanels();

                    }


                },
                150
            );


    }
);


/* ==================================================
   INITIAL STATE
   ================================================== */

closeAllPanels();

console.log(
    "Minecraft Unity Edition / MUE initialized."
);
```
