class Lang {
    constructor(name, val, remark) {
        this.name = name;
        this.val = val;
        this.remark = remark;
    }
}

var lang = [
    new Lang("c", 60, "Great"),
    new Lang("flutter", 80, "Great"),
    new Lang("java", 85, "Great"),
    new Lang("js", 75, "Good"),
    new Lang("html_css", 70, "Average"),
    new Lang("php", 60, "Good"),
    new Lang("git", 50, "Amateur"),
    new Lang("ember", 30, "Noob"),
    new Lang("python", 30, "Noob"),
    new Lang('mysql', 90, "Awesome")
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

window.onload = function () {
    lang.map((item) => {
        setStyle(item);
    });

    if(isElementInViewport(document.getElementById('language-container')))
    addAnimations();

    document.getElementsByTagName('head')[0].appendChild(style);
}

function addAnimations() {
    lang.map((item) => {
        let div = document.getElementById(item.name);
        let span = div.parentNode.parentNode.childNodes[3];
        span.innerHTML = item.remark;

        div.style.animation = `${item.name} 2s ease-in-out`;

        div.style.width = `${item.val}%`;
    });
    animAdded = false;
}

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }