class Language {
    constructor(name, val, remark) {
        this.name = name;
        this.val = val;
        this.remark = remark;
    }
}

var lang = [
    new Language("c", 60, "Great"),
    new Language("flutter", 80, "Great"),
    new Language("java", 85, "Great"),
    new Language("js", 75, "Good"),
    new Language("html_css", 70, "Average"),
    new Language("php", 60, "Good"),
    new Language("git", 50, "Amateur"),
    new Language("ember", 30, "Noob"),
    new Language("python", 30, "Noob"),
    new Language('mysql', 90, "Awesome")
];

var style = document.createElement('style');

var setStyle = (lang) => {

    let anim = `
    @keyframes ${lang.name} {
        0% {
            width: 0%;
        }
        100% {
            width: ${lang.val}%;
        }
    }
    `;
    style.innerHTML += anim;
}

function skillOnLoad() {
    console.log("skill onload");
    lang.map((item) => setStyle(item));

    if (isElementInViewport(document.getElementById('language-container')))
        languageProgressAnimation();

    document.getElementsByTagName('head')[0].appendChild(style);
}

window.onscroll = function () {
    languageProgressAnimation();
}

function languageProgressAnimation() {
    lang.map((item) => {
        let div = document.getElementById(item.name);
        let span = div.parentNode.parentNode.childNodes[3];
        span.innerHTML = item.remark;

        if (isElementInViewport(div)) {
            div.style.animation = `${item.name} 1s ease-in-out`;
            div.style.width = `${item.val}%`;
        } else {
            div.style.animation = "";
            div.style.width = `0%`;
        }
    });
    animAdded = false;
}