class Project {
    constructor(project) {
        this.title = project.title;
        this.description = "&nbsp;&nbsp;&nbsp;&nbsp;"+project.desc;
        this.languagesUsed = project.langs; 
    }

    div() {
        let div = document.createElement("DIV");
        div.setAttribute("class", "project");
        div.setAttribute("data-aos", "fade-up");
        div.innerHTML = `
            <div class="project-title">
                ${this.title}
            </div>
            <div class="project-desc"> 
                ${this.description}
            </div>
            <div class="languages-used">
                <div class="lang-attr"> Languages : &nbsp;</div>
                <div class="lang-value"> ${this.languagesUsed} </div>
            </div>
        `;
    
        return div;
    }
}
const projects = [
    {
        title: "eMed",
        desc: "An Android Application which helps doctors to share prescriptions as well as patients to share their medical information via QR Code",
        langs: "Java, XML, Firebase", 
    },
    {
        title: "Hostel Attendance System",
        desc: "HAS is an web application made for MBCCET, Idukki that can be used to maintain the attendance record of students at hostel and send an SMS to their parents if students are not present.",
        langs: "HTML, CSS, Javascript, PHP, MySQL",
    },
    {
        title: "MBC Scholarship Exam",
        desc: "An online examination portal that was build for MBCCET, Idukki to conduct Scholarship exam for the student looking for B.Tech in 2020",
        langs: "HTML, CSS, Javascript, PHP, MySQL",
    },
    {
        title: "Te Amo",
        desc: "Te Amo is a chat application that for Android and iOS which has a innovative UI (atleast thats what I say) and almost all basic features of a Chat Application. It is still under-development and has enough bugs for all the release versions",
        langs: "Dart, Node.js, Firebase",
    },
    {
        title: "Dr MED",
        desc: "Dr MED is an Android application made for those who are in need of Medical Assistance from health experts. The app includes chatting with expert, health tips, reporting adverse drug issues and online medical courses",
        langs: "Dart, Node.js, Fireabse",
    }
]


var projectContainer;

function projectOnLoad() {
    projectContainer = document.getElementById("project-container");
    projects.map(project => {
        var p = new Project(project);
        console.log(p.div());
        projectContainer.appendChild(p.div());
    });
}
