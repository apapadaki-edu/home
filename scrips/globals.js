function c() {
const URL_PARAMS_PAGES = {
    h: "Home",
    ml: "Machine Learning Subspace",
    a: "Android Subspace",
    w: "Web Subspace",
    otr: "Rest of Space"
}

const URL_PARAMS_PROJECTS = {
    h: {
        NO_PROJECT: "no"
    },

    ml: {
        CROP_CULTIVATION: "ccp",
        TOMATO_DISEASE_CL: "tdc",
        NEURAL_STYLE_TRANSFER: "nst",
        SWITCH_ONOFF: "soo"
    },
    a: {
        CONTACT_METHODS: "c",
        SCI_CALCULATOR: "sc",
        CALENDAR: "ca",
        MAPS_APP: "ma",
        PHOTO_GALLERY: "pg"
    },

    w: {
        ART_STORE: "as",
        SIMPLE_NOTEBOOK: "nb",
        SENSORS_APP: "sp"
    },

    otr: {
        MSDS_MANAGER: "sda",
        SMART_LIGHT_SWITCH: "iot"
    }
}


const PROJECT_CONTENTS = {
    "ccp": {
        title: "Crop Cultivation Prediction",
    },
    "tdc": {
        title: "Tomato Disease Detection",
    },
    "nst": {
        title: "Neural Style Transfer",
    },
    "soo": {
        title:  "Switch On/Off"
    },
    "c": {
        title: "Contact Methods",
        body: "<p>This is a messaging application that makes it easier to manage the types of \
            messages you want to send, from one UI. For instance, if we want to send an email\
            we must open the mail app and for messaging, one of the other available messaging apps on our phone directly\
            Here the user can provide their message, as well as, the email address or phone number of the receiver and by \
            the press of a button, the appropriate application opens with its fields already filled in. \
            This application makes it easier for sending messages from one UI. The application detects the systems language and \
            the corresponding keyboard layout is presented.</p>\
            <p>As for its structure, the user is presented with a simple UI that probes them for an email address or a phone number. \
            This field is checked for the validity of its content. For instance, whether the email address conforms with the standard \
            published by the appropriate authorities/organizations. This can prevent simple mistakes like the correct form of the email address \
            or the number of digits required in a phone number, saving time for the user. A toast message informs the user in case of a mistake.\
            In the case of emails, if an email address is detected, there appears a new field for providing the email subject.\
            A simple text field is there for the body of the message. Finally, at the end of the UI, there are three buttons, \
            one for opening the user's messaging app, one for the email application and the third and last one, for clearing the text field.</p> \
            <p>The buttons start activities with intents that call the user to open the \
            appropriate applications for each messaging app. A message's contents are sent to the \
            appropriate messaging app through the intent.</p>",
        images: [
                {
                    path:"../images/c_messaging_app.png",
                    caption: "Main screen"
                }
            ],
        github: "https://github.com/apapadaki-edu/android-based/tree/contact-methods",
        specs: {
            Software:[["Android Studio", "Dolphin 2021.3.1"]],
            Languages: [["Java","8"],[" XML","1.0"]],
            Grandle: [["Version", "7.4"], ["Plugin Version", "7.3.1"],],
            Dependencies: [["flexbox", "3.0.0"], ["play-services-location", "20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
    },
    "sc": {
        title: "Scientific Calculator",
        body: "<p>Application for scientific calculations of the functorial, the Fibonacci sequence up to a number and \
            the most common divisor of a stream of numbers. The purpose of this application at the educational level was to learn \
            to work with threads. These calculations are ideal for this purpose since they are computationally expensive for large numbers \
            and can crash or freeze the UI if not handled in the background.</p> \
            <p>The UI includes an EditText view in which the user provides the numbers separated with commas. A check is run for the \
            proper format of the stream of numbers. If it is not a stream of numbers separated by a comma, a toast message is presented \
            to warn the user. There are three buttons, one for each mathematical operation. The calculation results are \
            shown as blocks in a text area field. </p>",
        images: [ 
                {
                    path: "../images/sc_calc_main.png",
                    caption:"Main Screen"
                },
                { 
                    path: "../images/sc_calc_result.png",
                    caption: "With results"
                }
            ],
        github: "https://github.com/apapadaki-edu/android-based/tree/calculator",
        video: "../videos/sc_calculator.mp4",
        specs: {
            Software:[["Android Studio", "Dolphin 2021.3.1"]],
            Languages: [["Java","8"],[" XML","1.0"]],
            Grandle: [["Version", "7.4"], ["Plugin Version", "7.3.1"],],
            Dependencies: [["flexbox", "3.0.0"], ["play-services-location", "20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
        
    },
    "ca": {
        title: "Calendar",
        body: "<p>An application that allows the user to create, modify and store calendar events. \
            The events are displayed on a list based on their due date. \
            Due to its simplicity, one can organize events more efficiently. </p> \
            <p>The main activity of the application hosts all the calendar events that are not past due, ordered by the date that the event happens, \
            from the closest to the latest one. For each event on the list, its title, the date of creation and the due date will be included as well as \
            a check box for bulk deleting events. Events that are past due are still stored in the database, however, they are not displayed on the main \
            screen. A button with the '+' sign can be used to add a new event. Once pressed a new activity is started with a new screen that contains \
            the form with the event's information, which the user needs to fill out. The information includes its title, a description and the date of the event.  \
            On this new screen, there are three buttons available. One to save the event, another to delete it and a final one to cancel the changes, after each \
            operation the user is directed back to the main screen. The event list must be updated after returning from the form screen. The user can also click on \
            an event from the event list and be brought to the activity with the form to modify the event's information. All events will be stored in \
            a relational database stored locally.</p> \
            <p> The expected learning results are to work with multiple activities and work with databases. No remote connection was required, \
            the database was created locally.</p>",
        images: [
                {
                    path: "../images/ca_calendar_ini.png",
                    caption: "Start screen"
                },
                {
                    path: "../images/ca_calendar_add_event.png",
                    caption: "Add Event"
                }
            ],
        video: "../videos/ca_calendar.mp4",
        github:"https://github.com/apapadaki-edu/android-based/tree/calendar",
        specs: {
            Software:[["Android Studio", "Dolphin 2021.3.1"]],
            Languages: [["Java","8"],[" XML","1.0"]],
            Grandle: [["Version", "7.4"], ["Plugin Version", "7.3.1"],],
            Dependencies: [["flexbox", "3.0.0"], ["play-services-location", "20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },

    },
    "ma": {
        title: "Maps App",
        body: "<p>An application that shows the location of the user on a map. If the user is moving, there are displayed the velocity with which they are \
            moving and the direction of movement with respect to the north. The will always be updated to show the user's location (location tracking). Additionally, \
            the user can add places of interest on the map in the form of pins. Each pin is accompanied by an infowindow, which contains information about the location. \
            The information of each pin where created; is stored locally and displayed on the infowindow of each pin.</p>",
        github: "https://github.com/apapadaki-edu/android-based/tree/maps-app",
        specs: {
            Software:[["Android Studio", "Dolphin 2021.3.1"]],
            Languages: [["Java","8"],[" XML","1.0"]],
            Grandle: [["Version", "7.4"], ["Plugin Version", "7.3.1"],],
            Dependencies: [["flexbox", "3.0.0"], ["play-services-location", "20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
    },
    "pg": {
        title: "Photo Gallery",
        body: "<p>An application for taking photos, storing them, adding location information and a description.</p> \
            <p>The user can take photographs or video from both the front and back lenses. After the media is taken they are then stored \
            locally (using content providers). Additionally, there are stored, the date and time of creation and location information (as retrieved from the GeoCoder). \
            The user can also include a short description (up to 300 characters) of the picture.  The photos will be displayed in a grid-like layout on the main screen, \
            using bitmaps as thumbnails. Once clicking on an image thumbnail the user is guided to a new screen where; the image is displayed at its original size and \
            the image's details follow after. The description can be modified and stored anew. Finally, the user can delete a selected image.</p>",
        github: "https://github.com/apapadaki-edu/android-based/tree/photo-gallery",
        specs: {
            Software:[["Android Studio", "Dolphin 2021.3.1"]],
            Languages: [["Java","8"],[" XML","1.0"]],
            Grandle: [["Version", "7.4"], ["Plugin Version", "7.3.1"],],
            Dependencies: [["flexbox", "3.0.0"], ["play-services-location", "20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
    },
    "as": {
        title: "Art Store",
        body: "The project's description is on the way.",
        github: "https://github.com/apapadaki-edu/web_based/tree/art-store",
    },
    "nb": {
        title: "Simple Notebook",
        body: "The project's description is on the way.",
        github: "https://github.com/apapadaki-edu/web_based/tree/note-pad",
    },
    "sp": {
        title: "Sensor Playground",
        body: "The project's description is on the way.",
        github: "https://github.com/apapadaki-edu/web_based/tree/sensors",
    },
    "sda": {
        title: "MSDS Manager",
        body: "The project's description is on the way.",
        github: "https://github.com/apapadaki-edu/standalone_msds_manager",
    },
    "iot": {
        title: "Smart Light Switch",
        body: "The project's description is on the way.",
        github: "https://github.com/apapadaki-edu/smart-light-switch",
        specs: {
            Hardware:[["NodeMCU Lua ESP8266", "RISC microcontroller, 4MB flash, integrated Wi-Fi chip"], ["SG90 Micro Servo", "Small servo motor with up to 180 degree rotation."],
                ["Photoresistor", "dark resistance: in excess of 200 kΩ and bright-light: 1 or 2 kΩ"],["DS1302 RTC", "Real time clock"], ["Resistor", "1kΩ"]],
            Software: [["Ubuntu Linux", "v20.04.3 (dev OS)"], ["redis-server", "v4.0.7 (installed locally)"],
                ["node-red", "v2.1.5 (insalled locally)"], ["Arduino IDE", "v1.8.15"], ["Blynk Cloud", "Free plan"], ["HiveMQ and Dashboard", "<a href=\"mqtt-dashboard.com/index.com\" style=\"color:#0028e5;\">HiveMQ dashboard</a>"]],
            Languages: [["C++","11"]],
            Libraries: [["ESP8266WiFi", ""], ["BlynkSimpleEsp8266", ""], ["Servo", ""], ["ThreeWire", ""],
                ["RTcDS1302", ""],
                ["PubSubClient]", ""]]
        },
    }
}
class Page {
    constructor(pgSource, projectCode) {
        this.pgSource = pgSource;
        this.projectCode = projectCode;
    }

    fetchProjectContents(){

    }

    createProjectNavigation() {
        
    }
}

class Project {
    constructor(projectCode, article, video, specs) {
        this.projectCode = projectCode;
        this.article = article;
        this.video = video;
        this.specs = specs;
    }

    createSpecsTable() {

    }

    createArticle() {

    }
}


/* implement a method to populate the .pr-navigation menu 
//with a href property values the project codes
// the number of elemnts will depend on the 
//values of urlParamsProjects[project_code] values
*/
function populatePrNavigationMenu() {}


const CUR_URL= document.URL.match(/(?<=\w\/).[^\/]+$/)[0];
const CUR_PR_CATEGORY = CUR_URL.match(/(?<=d=)\w+/)[0];
const CUR_PR_CODE = CUR_URL.match(/(?<=pr=)\w+$/)[0];

// suppose url is the following:
//fefge:///C:/fefe/gde/hrt/tes/template.html?sr=h&d=ml&pr=ccp
//it means that the user redirected from the home(sr=h) page
// to the curren Machine Learnign page (d=ml)
//so all the menu links change so that the source page is now the ml and not h


document.querySelectorAll(".main-nav *[href]").forEach((el)=>{
    el.href = el.href.replace(/(?<=sr=)\w+/, CUR_URL.match(/d=(\w+)/)[1])
})


const prTabsContainer = document.querySelector(".pr-nav-container")
const prContainer = document.querySelector(".project-tabs");
//const prTitleContainer = document.getElementsByClassName("pr-heading")[0];



// Later put in Page Class Method
Object.values(URL_PARAMS_PROJECTS[CUR_PR_CATEGORY]).forEach((pr)=>{
    let butt = document.createElement("li");
    butt.classList.add(...[pr, "pr-select"])
    butt.innerHTML = PROJECT_CONTENTS[pr].title;
    prTabsContainer.append(butt);
})




document.addEventListener("click", (ev)=>{
    const isProjectButton = ev.target.classList.contains("pr-select");
    
    if(!isProjectButton) return;

    let curProject;
    if(isProjectButton) {
        curProject = document.getElementById(ev.target.classList[0]);
        curProject.classList.toggle("open");
    }

    document.querySelectorAll(".pr-article-container").forEach((article) => {
        
        if(curProject.id === article.id) {
            article.classList.add("open")
            //prTitleContainer.innerHTML = PROJECT_CONTENTS[article.id].title;
            ev.target.classList.add("selected");
            document.querySelector(".project-specs tbody").innerHTML = createTable(article.id);
            return;
        }
        article.classList.remove("open");
        document.querySelector("."+article.id).classList.remove("selected");
    })

})

/*
//a custom listener for class change of an element
function callback(mutationsList, observer) {
    mutationsList.forEach((mutation)=>{
        if(mutation.type !== "attributes" || mutation.attributeName !== "class") return;
        if(!mutation.target.classList.contains("open")) {
            document.querySelector("."+mutation.target.id).style.borderBottom = "1px solid gray";
            return;
        }
        console.log(document.querySelector("."+mutation.target.id))
        document.querySelector("."+mutation.target.id).style.borderBottom = "1px solid blue";
    })
}

const mutationObserver = new MutationObserver(callback);
mutationObserver.observe(
    document.getElementById("sda"),
    {attributes: true}
)
*/




//##############################################################################




window.addEventListener("load", (ev)=>{

    Object.values(URL_PARAMS_PROJECTS[CUR_PR_CATEGORY]).forEach((pr)=>{
        createArticle(pr);
    });

    //set project visibility based on url d value
    prContainer.querySelectorAll(".pr-article-container").forEach((article) => {
        if (CUR_PR_CODE === article.id) {
            article.classList.add("open");
            document.querySelector("."+CUR_PR_CODE).classList.add("selected");
            document.querySelector(".project-specs tbody").innerHTML = createTable(CUR_PR_CODE);
            return;
        }

        if (CUR_PR_CODE !== article.id && CUR_PR_CODE === "no") {
            prContainer.firstElementChild.classList.add("open");
            //prTitleContainer.innerHTML = PROJECT_CONTENTS[prContainer.firstElementChild.id].title;
            document.querySelector("."+ prContainer.firstElementChild.id).classList.add("selected");
            document.querySelector(".project-specs tbody").innerHTML = createTable(prContainer.firstElementChild.id);
            return;
        }
        //prTitleContainer.innerHTML = PROJECT_CONTENTS[CUR_PR_CODE].title;
        document.querySelector(".project-specs tbody").innerHTML = createTable(CUR_PR_CODE);
    })

    //change the header title based on the projects's category
    const textElms = document.querySelectorAll(".site-description span");
    textElms[0].innerText = "Inside";
    textElms[1].innerText = URL_PARAMS_PAGES[CUR_PR_CATEGORY];
    document.title = URL_PARAMS_PAGES[CUR_PR_CATEGORY];



});


function createArticle(prId) {
    let articleContainer = document.createElement("article");
    articleContainer.id = prId;
    articleContainer.classList.add("pr-article-container");
    document.querySelector(".project-tabs").appendChild(articleContainer);

    // article contents not ready
    if (Object.keys(PROJECT_CONTENTS[prId]).length < 2) return;

    let articleBody, articleRepo;

    articleBody = document.createElement("div");
    articleBody.classList.add("pr-desc");
    articleBody.innerHTML = PROJECT_CONTENTS[prId].body;
    articleBody.style.textIndent = "3%";
    articleContainer.appendChild(articleBody);
    
    /*document.addEventListener("scroll", function() {
        let pageTop = document.scollTop();
        let pageBottom = pageTop + window.height();
        let tab = document.querySelector(".pr-container");
        if(tab.position
    });*/
    articleRepo = document.createElement("p");
    articleRepo.classList.add("github");
    articleRepo.innerHTML = `The application code is available on Github. <a href="${PROJECT_CONTENTS[prId].github}">Link to repo.</a>`;
    articleContainer.appendChild(articleRepo);


    if (!PROJECT_CONTENTS[prId].images && !PROJECT_CONTENTS[prId].video) return;   


    const articlePics = document.createElement("div");
    articlePics.classList.add("app-layout-imgs", "slider");

    articleContainer.appendChild(articlePics);
    
    
    if(PROJECT_CONTENTS[prId].images){

        // for displaying images fullscreen when clicked;
        const fullPage = document.createElement("div");
        fullPage.classList.add("fullpage");
        fullPage.addEventListener('click', (ev)=>{
            ev.target.style.display='none';
        });
        document.querySelector('.pr-container').appendChild(fullPage);

        // populate with images

        PROJECT_CONTENTS[prId].images.forEach((img)=>{
            const figureNode = document.createElement("figure");
            const imgNode = document.createElement("img");
            imgNode.src = img.path;
            imgNode.style.width = "100%"
            imgNode.addEventListener('click', function() {
                fullPage.style.backgroundImage = 'url(' + img.path + ')';
                fullPage.style.display = 'block';
              });
            figureNode.appendChild(imgNode);
            const figCap = document.createElement("figcaption");
            figCap.innerText = img.caption;
            figCap.style.textAlign = "center";
            figureNode.appendChild(figCap)

            articlePics.appendChild(figureNode);
        });

    }


    if(PROJECT_CONTENTS[prId].video){
        const articleVid = document.createElement("div");
        articleVid.classList.add("pr-demo");

        const vid = document.createElement("video");
        vid.src = PROJECT_CONTENTS[prId].video;
        vid.style.width = "100%";
        vid.controls = true;
        vid.autoplay = false;
        articleVid.appendChild(vid);

        const vidCaption = document.createElement("p");
        vidCaption.innerText = "App demo";
        vidCaption.style.textAlign = "center";
        articleVid.append(vidCaption);

        articlePics.appendChild(articleVid);
    }
}

function createTable(prId){
    if (!PROJECT_CONTENTS[prId]['specs']) {
        return '';
    }
    let tableContents = "";

    Object.entries(PROJECT_CONTENTS[prId]['specs']).forEach(([key,value])=>{
        tableContents += `<tr class="specs-cat"><th class="cat-heading" colspan="2">${key}</th></tr>`;
        value.forEach((el,index) =>{
            tableContents += `<tr><td>${el[0]}</td><td>${el[1]}</td></tr>`;
        });

    });

    return tableContents;

}
}
c();