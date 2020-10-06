class Language {
    constructor(language) {
        this.id = language.id;
        this.val = language.val;
        this.remark = language.remark;
        this.name = language.name;
        this.tip = language.tip;
    }

    div() {
        var div = document.createElement("DIV");
        div.setAttribute("class", "language");

        div.innerHTML = `
            <div class="language-name"> ${this.name} </div>
            <span>${this.remark}</span>
            <div class="language-progress">
                <div class="progress-bar tooltip" id="${this.id}">
                    <span class="tooltiptext">${this.tip}</span>
                </div>
            </div>
        `;

        return div;
    }
}

var lang = [
    {
        id: "c",
        name: "C / C++",
        val: 60,
        remark: "Great",
        tip: 6 / 10,
    },
    {
        id: "flutter",
        name: "Flutter (Dart)",
        val: 80,
        remark: "Great",
        tip: "8 / 10",
    },
    {
        id: "java",
        name: "Java",
        val: 85,
        remark: "Great",
        tip: "8.5 / 10",
    },
    {
        id: "js",
        name: "Javascript",
        val: 85,
        remark: "Good",
        tip: "8.5 / 10",
    },
    {
        id: "html_css",
        name: "HTML / CSS",
        val: 70,
        remark: "Average",
        tip: "7 / 10",
    },
    {
        id: "php",
        name: "PHP 5",
        val: "60",
        remark: "Good",
        tip: "6 / 10",
    },
    {
        id: "git",
        name: "Git",
        val: 60,
        remark: "Good",
        tip: "6 / 10",
    },
    {
        id: "ember",
        name: "Ember JS",
        val: 30,
        remark: "Noob",
        tip: "3 / 10",
    },
    {
        id: "python",
        name: "Python",
        val: 30,
        remark: "Noob",
        tip: "3 / 10",
    },
    {
        id: "firebase",
        name: "Firebase",
        val: 65,
        remark: "Improving",
        tip: "6.5 / 10",
    },
    {
        id: "mysql",
        name: "MySQL",
        val: 90,
        remark: "Awesome",
        tip: "9 / 10",
    },
];

var style = document.createElement('style');

var setStyle = (lang) => {

    let anim = `
    @keyframes ${lang.id} {
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

var languageContainer;

function skillOnLoad() {
    console.log("skill onload");

    languageContainer = document.getElementById('language-wrapper');

    lang.map((item) => {
        setStyle({
            id: item.id,
            val: item.val
        });

        var lang = new Language(item);
        languageContainer.appendChild(lang.div());
    });
    document.getElementsByTagName('head')[0].appendChild(style);

    if (isElementInViewport(document.getElementById('language-container')))
        languageProgressAnimation();

}

window.onscroll = function () {
    languageProgressAnimation();
}

function languageProgressAnimation() {
    lang.map((item) => {
        let div = document.getElementById(item.id);

        if (isElementInViewport(div)) {
            div.style.animation = `${item.id} 1s ease-in-out`;
            div.style.width = `${item.val}%`;
        } else {
            div.style.animation = "";
            div.style.width = `0%`;
        }
    });
    animAdded = false;
}