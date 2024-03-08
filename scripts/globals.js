
function c() {

const URL_PARAMS_PROJECTS = {
    h: {
        prCatTitle: "Home",
        projects: {
            NO_PROJECT: "no"
        },
        theme: "color-theme-h",
        pageLevel: "",
        description:""

    },

    ml: {
        prCatTitle: "AI Subspace",
        projects: {
            CROP_CULTIVATION: "ccp",
            TOMATO_DISEASE_CL: "tdc",
            NEURAL_STYLE_TRANSFER: "nst",
            SWITCH_ONOFF: "soo"
        },
        theme: "color-theme-ml",
        pageLevel: "page-position-ml-start",
        description:""
    },
    a: {
        prCatTitle: "Android Subspace",
        projects: {
            CONTACT_METHODS: "c",
            SCI_CALCULATOR: "sc",
            CALENDAR: "ca",
            PHOTO_GALLERY: "pg",
            MAPS_APP: "ma"
        },
        theme: "color-theme-android",
        pageLevel: "page-position-android-start",
        description:"Native, small applications displaying core android functionality."
    },

    w: {
        prCatTitle: "Web Subspace",
        projects: {
            ART_STORE: "as",
            SIMPLE_NOTEBOOK: "nb",
            SENSORS_APP: "sp"
        },
        theme: "color-theme-web",
        pageLevel: "page-position-android-start",
        description:"Applications designed for the internet. There was no use of content management systems."
    },

    otr: {
        prCatTitle: "Rest of Space",
        projects: {
            MSDS_MANAGER: "sda",
            SMART_LIGHT_SWITCH: "iot"
        },
        theme: "color-theme-other",
        pageLevel: "page-position-ml-start",
        description: "An original stand-alone application and IoT end-to-end system."
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
        body: '<p>This is a messaging application that makes it easier for the user to manage\
            the types of messages they wish to send, all from one UI.\
            Those messages include either emails or phone messages (SMS).</p>\
            <h3>Interworkings</h3>\
            <div class="section-contents"><p>The user is presented with a simple UI that probes them through an email or a phone number. \
            This field is checked for the validity of its content. This can prevent simple mistakes, like the correct form of the email address \
            or the number of digits required in a phone number. A pop-up message informs the user in case of a mistake. \
            In the case of emails, if an email address is detected, a new field appears for providing the email\’s subject.\
            Finally, a simple text field is included for the message\’s body. </p>\
            <p> There are three buttons at the end of the UI, one for opening the user\'s \
            messaging app, one for the email application and the third one, for clearing the text field containing the message\’s body. \
            After the message\’s information is all filled in and depending on the type of message the user wishes to send, \
            the appropriate application opens with its fields already filled in.</p></div>\
            <h3>Technical/Limitations</h3>\
            <p class="section-contents">The buttons start activities with intents that call the user to open the appropriate applications for each messaging app. \
            Message\'s contents are sent to the messaging app selected through the intent. For now, messages are only for SMS apps, \
            it would be useful to include others like, for example, messenger. For emails, the validation conforms with OWASP Foundation\’s standard.\
            </p>',
        images: [
                {
                    path:"../images/c_messaging_app.webp",
                    caption: "Main screen"
                },
                {
                    path:"../images/c_fill_message.webp",
                    caption: "Fill SMS"
                },
                {
                    path:"../images/c_open_sms_app.webp",
                    caption: "SMS App"
                },
                {
                    path:"../images/c_fill_mail.webp",
                    caption: "Fill Email"
                },
                {
                    path:"../images/c_select_app.webp",
                    caption: "Select Email App"
                }
            ],
        github: "https://github.com/apapadaki-edu/android-based/tree/contact-methods",
        specs: {
            Software:[["Android Studio", "Dolphin v2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "v7.4"], ["Plugin Version", "v7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
    },
    "sc": {
        title: "Scientific Calculator",
        body: '<p>Application for scientific calculations of the functorial,\
            the Fibonacci sequence, up to a number and the most common divisor of a stream of numbers. </p>\
            <h3>Interworkings</h3>\
            <p class="section-contents">The UI includes an EditText view in which the user provides the numbers separated with commas. \
            A check runs for the proper format of the stream of numbers. If a stream of numbers is not separated by a comma, a new message is \
            presented to notify the user. There are three buttons, one for each mathematical operation. The calculation results are shown as blocks in a text area field.</p>\
            <h3>Technical/Limitations</h3>\
            <p class="section-contents">The purpose of this application at the educational level was to learn to work with threads. \
            These calculations are ideal for this purpose since they are expensive for large numbers and can crash or freeze the UI if not \
            handled in the background. Finally, the application detects the system\’s language and presents the corresponding keyboard layout.\
            </p>',
        images: [ 
                {
                    path: "../images/sc_calc_main.webp",
                    caption:"Main Screen"
                },
                { 
                    path: "../images/sc_calc_result.webp",
                    caption: "With results"
                }
            ],
        github: "https://github.com/apapadaki-edu/android-based/tree/calculator",
        video: "../videos/sc_calculator.mp4",
        specs: {
            Software:[["Android Studio", "Dolphin v2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "v7.4"], ["Plugin Version", "v7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
        
    },
    "ca": {
        title: "Calendar",
        body: '<p>An application that allows the user to create, modify and store calendar events. \
            The events are displayed on a list based on their due date; the most recent one appears at the top.\
            Due to its simplicity, one can organize events more efficiently.</p> \
            <h3>Interworkings</h3>\
            <div class="section-contents"><p>The start screen displays all calendar events that are not past due; have not happened yet. The events are ordered by the date the event happens, \
            starting with the most recent one. For each event on the list, its title, the date of creation and the due date are included. \
            Additionally, next to each event there is a check box for bulk deleting events. Finally, a button with the "+" sign is used to add a new event. </p>\
            <p>A new form appears to the user in case they either wish to add a new event, by pressing the "+" sign button or update an already added event, \
            by clicking on the event. In this form, the user can fill in the event\'s information. This information includes its title, a description and the date of the event. </p>\
            <p>The form includes three buttons. One button is to save or update an event, one to delete it and finally, one to cancel all the changes. \
            After each operation, the user is directed back to the main screen. Once a new event is added or updated, the event list on the main screen is \
            also updated to include the newly created event or respectively, to display the altered information of the updated event. </p></div>\
            <h3>Technical/Limitations</h3>\
            <p class="section-contents">Events that are past due are still stored in the database, however, they are not displayed on the main screen. \
            Additionally, all events are stored in a local relational database, so there is no need for a remote connection.\
            The event list and the form consist of two separate activities with the first one being the application\’s main activity and the second \
            being a child activity of the main.</p>',
        images: [
                {
                    path: "../images/ca_calendar_ini.webp",
                    caption: "Start screen"
                },
                {
                    path: "../images/ca_calendar_add_event.webp",
                    caption: "Add Event"
                }
            ],
        video: "../videos/ca_calendar.mp4",
        github:"https://github.com/apapadaki-edu/android-based/tree/calendar",
        specs: {
            Software:[["Android Studio", "Dolphin v2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "v7.4"], ["Plugin Version", "v7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },

    },
    "pg": {
        title: "Photo Gallery",
        body: '<p>An application for taking photos, storing them, adding location information and a description. It simulates the \
            image gallery application, already installed on the user\’s phone by the manufacturer,\
            but only including its core functionality. </p>\
            <h3>Interworkings</h3>\
            <div class="section-contents"><p>The main screen of the application displays the thumbnails of all photos taken, \
            using the application. A button is included for taking new photos. Once the new button is pressed, the native camera app opens \
            for the user to use. After a photo is taken, the user returns to the main screen with the newly added photo shown in the gallery. Along with the photo, \
            there are stored the date and time of creation and the location\’s information.</p>\
            <p>The user can also include a description for a photograph. Once clicking on a photo thumbnail on the main screen, \
            a new screen appears with the photo\’s information. This information includes a larger \
            version of the photograph, the location where it was taken, the date and time and a field for the description. \
            The description can be modified and stored anew. </p></div>\
            <h3>Technical/Limitations</h3>\
            <p class="section-contents"> Location\’s information is stored as retrieved from the GeoCoder, as latitude and longitude pairs. \
            The date and time are stored as recorded from the system, without any formatting. After the media is taken, they are stored locally, \
            using a content provider. A content provider was developed to be used along the map application later. Since the user can add \
            information along with pins for places of interest through that application, they could also include images for those places. \
            The learning objectives include permission requests, external storage and lastly, media file manipulation.\
            </p>',
        images: [
                {
                    path: "../images/pg_ask_permitions.webp",
                    caption: "Ask Permissions"
                },
                {
                    path: "../images/pg_all_photos.webp",
                    caption: "Gallery"
                },
                {
                    path: "../images/pg_take_photo.webp",
                    caption: "New Photo"
                },
                {
                    path: "../images/pg_modify_photo.webp",
                    caption: "Add Info"
                }
            ],
        github: "https://github.com/apapadaki-edu/android-based/tree/photo-gallery",
        specs: {
            Software:[["Android Studio", "Dolphin v2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "7.4"], ["Plugin Version", "7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
    },
    "ma": {
        title: "Maps App",
        body: '<p>An application that shows the user\’s location on a map. If the user is moving, \
            the speed and the direction (towards the north) are displayed. \
            They will always be updated to show the user\'s location (location tracking). Additionally, \
            the user can add places of interest on the map in the form of pins. Each pin is accompanied by an info-window, \
            which contains information about the location. The information of each pin is stored locally and displayed on the info-window.\
            </p>',
        github: "https://github.com/apapadaki-edu/android-based/tree/maps-app",
        specs: {
            Software:[["Android Studio", "Dolphin 2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "v7.4"], ["Plugin Version", "v7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"], ["play-services-location", "v20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
    },
    "as": {
        title: "Art Store",
        body: '<p>Model page of an Art Store for a product and a new customer form. \
            Focusing mainly on the layout. The user can create a new customer account from the \
            designed form and manage customers. They can update, delete, and view customer information.</p>\
            <h3>Interworkings</h3>\
            <p class="section-contents">Once the user navigates to the model product page, \
            they can be directed to the form page by clicking on the “Create new account” link at the top left side of the page. Once there, \
            they can complete the form, check that they agree with the terms of use and press “submit”. Before submitting the data, \
            the required fields are checked for having values. If there are empty fields, an error message is presented to the user with the \
            option to navigate back to the form to fill all required fields. If everything is okay, the information is displayed to the user and \
            they can navigate to managing customers with the press of a button. Once on the navigation page all customers with some information are listed, \
            with the options to delete, update or view each customer\’s information. Once any of the three previously mentioned operations are complete, \
            the user is redirected to the customer management page.</p>\
            <h3>Technical/Limitations</h3>\
            <p class="section-contents">Apart from the server-side part of handling customers, \
            the main purpose was to design the front-end of the page. The database functionality was \
            for learning how to handle form data and interact with databases, even though it is not relevant \
            so much for the art store but from an administrator\’s perspective. We were not yet \
            guided on how to use cookies so for navigating from one page to another, while managing customers no-cookie \
            logic was developed. A more detailed description of how this was accomplished can be found \
            on the projects GitHub page, following the link below.</p>',
        github: "https://github.com/apapadaki-edu/web_based/tree/art-store",
        images: [
            {
                path:"../images/as_form_ini.webp",
                caption: "Form main"
            },
            {
                path:"../images/as_empty_field.webp",
                caption: "Verification error"
            },
            {
                path:"../images/as_verification_ok.webp",
                caption: "Verification ok"
            },
            {
                path:"../images/as_list_customers.webp",
                caption: "List customers"
            },
            {
                path:"../images/as_view_customer.webp",
                caption: "View customer"
            },
            {
                path:"../images/as_update_successful.webp",
                caption: "Update customer"
            }
        ],
        specs: {
            Languages: [["HTML5",""],[" CSS3", ""], ["Javascript", ""], ["PHP", "7.4.3"], ["PL/pgSQL","v12.12"]],
            Databases: [["PostgreSQL", "v12"]], 
            Servers: [["Apache", "v2.4.41"]],
            'Tested Browsers': [["Chrome", "v114.0.5735.134"], ["Firefox", "v111.0.1"],, ["Min", "v1.27.0"]],
            'Tested Screen Widths': [["all", "best-displayed: > 300px"]]
        },
    },
    "nb": {
        title: "Simple Notebook",
        body: '<p>Application that records notes. The user can see all notes created, \
            add a new note, update the information of an already existing note or delete it. Additionally, \
            the user can choose to clear all notes. The available information for the user to include in a note are its title, \
            the description and a theme. The themes from which they can choose include \
            “Favorites”, “Reminder”, “Shopping”, “Planning”, and lastly, there is the choice of “No Theme”.</p>\
            <h3>Interworkings</h3>\
            <p class="section-contents">On launching the application, the user is presented with the main screen, which lists all \
            available notes they have previously been created, their count, a button to create a new note and one to clear all notes. \
            Note count was included for anyone who wants to clear unnecessary notes they may have forgotten to delete, after they reach a number, \
            the user considers as appropriate for this task. The user can click on a note to edit its contents or delete it. If they decide to create a new note, \
            they are presented with a form to fill in the note\’s information.</p>\
            <h3>Technical/Limitations</h3>\
            <p class="section-contents">A server is not needed, apart from hosting the web application, \
            since there was the use of indexedDB for database operations. This is a low-level client \
            storage API available on the browsers. This approach was a personal preference, to get \
            accustomed to applications other than server-side storage ones. This application was designed, \
            having in mind, mainly for mobile users.</p>',        
        images: [
            {
                path: "../images/nb_ini.webp",
                caption: "Start screen"
            },
            {
                path: "../images/nb_new_note.webp",
                caption: "Add Note"
            },
            {
                path: "../images/nb_update_note.webp",
                caption: "Update Note"
            }
        ],
    
        video: "../videos/nb_notepad.mp4",
        specs: {
            Languages: [["HTML5",""],[" CSS3",""], ["Javascript", ""]],
            Databases: [["IndexedDB", "v1 (in browser db)"]],
            Servers: [["not needed", ""]],
            'Tested Browsers': [["Chrome", "v114.0.5735.134"], ["Firefox", "v111.0.1"], ["Min", "v1.27.0"]],
            'Tested Screen Widths': [["all", "best-displayed: > 300px"]]
        },
        github: "https://github.com/apapadaki-edu/web_based/tree/note-pad",
    },
    "sp": {
        title: "Sensor Playground",
        body: '<p>Web application that finds the sensors that it can reach from the browser, \
            activate or deactivate them and records the results at provided time intervals. Active buttons \
            of the available sensors can be pressed once to activate them. Once they are active, the user can provide \
            a period on the field next to each sensor and press “Enter” for the measurements to be displayed \
            at the given interval. The user can change the period-time while the sensor is active, by typing a \
            new one and pressing “Enter” again.</p>\
            <h3>Interworkings</h3>\
            <p class="section-contents">For safety reasons the browser does not allow applications to have direct access to core sensors on our devices, \
            so buttons that control the sensors are active only for those that their access is allowed and inactive for all the others. \
            The reason the button for not available sensors is displayed is for the user to know the wide range of sensors that we carry on at any given time.\
            </p>\
            <h3>Technical/Limitations</h3>\
            <p class="section-contents">A server is required, apart from hosting the application, since \
            workers were used for controlling the display of sensor results in accordance with the \
            given period and workers are defined in external files. The purpose of this application was to access sensors and work with threads. \
            The development of a flask application is in the works that connects to a remote Redis database for \
            storing sensor data in the form of time series. Once developed I will post new media files in this section.\
            </p>',
        images: [
            {
                path:"../images/sp_ini.webp",
                caption: "Main screen"
            },            
            {
                path:"../images/sp_with_results.webp",
                caption: "With results"
            },
        ],
        video: "../videos/sp_sensors.mp4",
        github: "https://github.com/apapadaki-edu/web_based/tree/sensors",
        specs: {
            Languages: [["HTML5",""],[" CSS3",""], ["Javascript", ""]],
            Servers: [["Apache", "v2.4.46"]],
            'Tested Browsers': [["Chrome", "v114.0.5735.134"], ["Firefox", "v111.0.1"],, ["Min", "v1.27.0"]],
            'Tested Screen Widths': [["all", "best-displayed: > 300px"]]
        },
    },
    "sda": {
        title: "MSDS Manager",
        body: '<p>An application that assists with the management of products, additives, material \
            safety datasheets and the classification of products based on their hazardous figures. \
            Important for those who compose msds documents, since they are called to review them every two or so years, \
            for changes in regulations, responsible for the hazard classification of the substances that comprise them.  \
            </p> \
            <h3>Interworkings</h3>\
            <p class="section-contents">From the perspective of someone who works with multiple companies and manages their datasheets, \
            this application is helpful. The users can store new or update already existing products and their datasheets, store and manage \
            additives of those products and find the classification of products based on the classification of their additives. \
            The classification can be also generated automatically with the press of a button, leaving the user to review and check for any specific \
            conditions applied to some products that are not included in the regulations.</p>\
            <h3>Technical/Limitations</h3>\
            <div class="section-contents">\
            <p>New substances cannot be added. The generated classification is based on \
            those hazards that are commonly applied for mechanical oils, since the application\
            was designed for users that work with datasheets from that industry. \
            There are also some limited filtering features for products, additives, and substances. \
            Additional capabilities could be functions that generate a resulting product from the \
            provided concentrations of their components. </p>\
            <p>The database that supports the application was designed from scratch. \
            The logic behind the classification was according to (EC) No 1907/2006 (REACH) Regulation as \
            was until July 2021 and has not been revised regarding this aspect since then.\
            </p></div>',
        images: [
            {
                path:"../images/sda_start_page.webp",
                caption: "Main screen"
            },            
            {
                path:"../images/sda_products.webp",
                caption: "Product Management"
            },            
            {
                path:"../images/sda_additives.webp",
                caption: "Additive Management"
            },
            {
                path:"../images/sda_classification.webp",
                caption: "Classification"
            },
            {
                path:"../images/sda_result_classification.webp",
                caption: "Result Classification"
            },
        ],
        video: "../videos/sda_msdsmngr.mp4",
        github: "https://github.com/apapadaki-edu/standalone_msds_manager",
        specs: {
            Languages: [["Python", "v3.9"], ["PL/pgSQL","v15.1"]],
            Databases: [["PostgreSQL", "v15"]],
            Libraries: [["numpy", "v1.20.1"],["psycopg2", "v2.9"], ["Pillow", "v8.1.0"], ["python-dateutil", "v2.8.1"]],
            Frameworks: [["Tkinter", "v8.3"]],
            Tools: [["ER2SQL", "v0.5.15.729"]]
        },
    },
    "iot": {
        title: "Smart Light Switch",
        body: '<p>A smart light switch developed from hardware level to software level. \
            A device was developed so that not only can it keep track of the time and date, \
            but also sense the changes of brightness of the environment in order to switch the lights on or off accordingly. \
            </p>\
            <h3>Interworkings</h3>\
            <p class="section-contents">The device operates both automatically and manually. Depending on whether \
            the user has control of the device from their phone, they can either change the switch \
            from their phones or leave the control to the device itself. \
            For instance, if the user opens the app that controls the switch of \
            their phone, the smart device can detect this and let the user \
            make the decisions. However, if the app is closed, the device can \
            switch on or off the lights depending on the day-time and the levels\
            of brightness in the room.</p>\
            <h3>Technical/Limitations</h3>\
            <p class="section-contents">The device was constructed using microcontrollers and \
            chips for the individual parts of the device to operate. The device is installed on the \
            wall next to the switch. The application that controls the device was designed and \
            provided by the Blynk cloud platform. Node-RED was used for flow control, helping with \
            managing the different parts of the system and the way they communicate. \
            Also, brightness measurements along with the time of measurement were sent through \
            HiveMQ broker to Node-RED and with the help of some nodes they were stored in a Redis \
            database, in reference to a different project. </p>',
        github: "https://github.com/apapadaki-edu/smart-light-switch",
        specs: {
            Hardware:[["NodeMCU Lua ESP8266", "RISC microcontroller, 4MB flash, integrated Wi-Fi chip"], ["SG90 Micro Servo", "Small servo motor with up to 180 degree rotation."],
                ["Photoresistor", "dark resistance: in excess of 200 kΩ and bright-light: 1 or 2 kΩ"],["DS1302 RTC", "Real time clock"], ["Resistor", "1kΩ"]],
            Software: [["redis-server", "v4.0.7 (installed locally)"],
                ["node-red", "v2.1.5 (insalled locally)"], ["Arduino IDE", "v1.8.15"], ["Blynk Cloud", "Free plan"], ["HiveMQ and Dashboard", "<a href=\"mqtt-dashboard.com/index.com\" style=\"color:#0028e5;\">HiveMQ dashboard</a>"]],
            Languages: [["C++","v11"]],
            Libraries: [["ESP8266WiFi", "1.0.6"], ["BlynkSimpleEsp8266", "1.2.1"], ["Servo", "1.1.8"], ["RTC by Makuna", "2.3.5"],
                ["PubSubClient", "1.13.3"]]
        },
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

const CUR_URL= document.URL.match(/(?<=\w\/).[^\/]+$/)[0];
const CUR_PR_CATEGORY = CUR_URL.match(/(?<=d=)\w+/)[0];
const CUR_PR_CODE = CUR_URL.match(/(?<=pr=)\w+/)[0];
// suppose url is the following:
//fefge:///C:/fefe/gde/hrt/tes/template.html?sr=h&d=ml&pr=ccp
//it means that the user redirected from the home(sr=h) page
// to the current Machine Learnign page (d=ml)
//so all the menu links change so that the source page is now the ml and not h

//add theme to page
document.body.classList.add(URL_PARAMS_PROJECTS[CUR_PR_CATEGORY].theme);

//change all urls' src value the the source url d value
document.querySelectorAll(".main-nav *[href]").forEach((el)=>{
    el.href = el.href.replace(/(?<=sr=)\w+/, CUR_URL.match(/d=(\w+)/)[1])
})


//const prTitleContainer = document.getElementsByClassName("pr-heading")[0];
const selectParent = document.querySelector(".select-options")
selectParent.dataset.prNav = "";
const prContainer = document.querySelector(".project-tabs");


// Later put in Page Class Method

Object.values(URL_PARAMS_PROJECTS[CUR_PR_CATEGORY].projects).forEach((pr)=>{
    let butt = document.createElement("li");
    butt.classList.add("pr-select");
    butt.dataset.projectButtonName = pr;
    butt.innerHTML = PROJECT_CONTENTS[pr].title;
    selectParent.append(butt);
})


document.addEventListener("click", (ev)=>{
    const isProjectButton = ev.target.classList.contains("pr-select");
    
    if(!isProjectButton) return;

    let curProject;
    if(isProjectButton) {

        const noProjectSelected = document.querySelector(".wrapper-header");
        if (noProjectSelected.classList.contains("no-project-selected")) {
            noProjectSelected.classList.remove("no-project-selected")
        }
        
        curProject = document.querySelector('[data-project-name="' + ev.target.dataset.projectButtonName + '"]');
        curProject.classList.toggle("open");
        
        //get the last of the project navigation container and smooth scroll to its top


        const windowHeight = (window.matchMedia("(max-width: 901px)").matches || screen.width < 900)? window.innerHeight: document.querySelector("main").offsetTop;
  
        // different values depending on different screen sizes
        let subtractHambMenuHeight = (window.innerHeight < 700 && (window.matchMedia("(max-width: 901px)").matches || screen.width < 900))? 66: 0;

        //distance of the element from the top of the viewport 
        let catToScrollHeight = windowHeight - subtractHambMenuHeight;
        window.scroll(0, catToScrollHeight, {behavior:"smooth"});
    }

    document.querySelectorAll(".pr-article-container").forEach((article) => {
        
        if(curProject.dataset.projectName === article.dataset.projectName) {
            article.classList.add("open");
            //prTitleContainer.innerHTML = PROJECT_CONTENTS[article.dataset.projectName].title;
            ev.target.classList.add("selected");
            
            const selectedProject = document.querySelector(".select-btn span");
            selectedProject.innerHTML = PROJECT_CONTENTS[article.dataset.projectName].title;
            
            document.querySelector(".project-specs tbody").innerHTML = createTable(article.dataset.projectName);
            return;
        }

        article.classList.remove("open");
        document.querySelector('[data-project-button-name="'+article.dataset.projectName+'"]').classList.remove("selected");
    });
    // after the project selection close the drop down menu of the select button
    document.querySelector(".select-wrapper").classList.remove("active");
});
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

    Object.values(URL_PARAMS_PROJECTS[CUR_PR_CATEGORY].projects).forEach((pr)=>{
        createArticle(pr);
    });


    document.querySelectorAll(".less-info").forEach((el)=>{
        el.style.display = "none";
    });

    //set project visibility based on url d value (navigating from menu)
    prContainer.querySelectorAll(".pr-article-container").forEach((article) => {
        if (CUR_PR_CODE === article.dataset.projectName) {
            article.classList.add("open");
            document.querySelector('[data-project-button-name="'+ CUR_PR_CODE + '"]').classList.add("selected");
            document.querySelector("[data-project-name='"+CUR_PR_CODE+"']").classList.add("selected");
            document.querySelector(".project-specs tbody").innerHTML = createTable(CUR_PR_CODE);
            return;
        }

        if (CUR_PR_CODE !== article.dataset.projectName && CUR_PR_CODE === "no") {
            document.querySelector(".wrapper-header").classList.add("no-project-selected")
            return;
        }
        //prTitleContainer.innerHTML = PROJECT_CONTENTS[CUR_PR_CODE].title;
        document.querySelector(".project-specs tbody").innerHTML = createTable(CUR_PR_CODE);
    })

    //change the header title based on projects's category
    const textElms = document.querySelectorAll(".site-description span");
    
    //let titles = URL_PARAMS_PROJECTS[CUR_PR_CATEGORY].prCatTitle.split(" ");
    //textElms[0].innerText = titles[0];
    //textElms[1].innerText = titles.length < 3 ? titles[1] : 'of Space';
    const curPrCategory = URL_PARAMS_PROJECTS[CUR_PR_CATEGORY];
    
    textElms[0].innerText = curPrCategory.prCatTitle;
    textElms[1].innerText = URL_PARAMS_PROJECTS[CUR_PR_CATEGORY].description;
    document.title = curPrCategory.prCatTitle;
    

    if (window.matchMedia("(min-width: 901px)").matches || screen.width > 900){ 
        textElms[1].innerText = "";
        var descLength = curPrCategory.description.length;
        async function typeWritterEffect(){
            while(descLength > 0){
                let chPos = curPrCategory.description.length - descLength;
                await sleep(60).then(() => {
                    
                    let ch = curPrCategory.description[chPos];
                    var chNode = document.createTextNode(ch);
                    textElms[1].appendChild(chNode);
                });
                descLength -= 1;
            }
        }

        typeWritterEffect();
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function createArticle(prId) {
    let articleContainer = document.createElement("article");
    articleContainer.dataset.projectName = prId;
    articleContainer.classList.add("pr-article-container");
    document.querySelector(".project-tabs").appendChild(articleContainer);

    // article contents not ready
    if (Object.keys(PROJECT_CONTENTS[prId]).length < 2) return;

    let articleBody, articleRepo, prTitle;
    prTitle = document.createElement("h1");
    prTitle.classList.add("pr-heading");
    prTitle.innerHTML= PROJECT_CONTENTS[prId].title;
    articleContainer.appendChild(prTitle);

    articleBody = document.createElement("div");
    articleBody.classList.add("pr-desc");
    articleBody.innerHTML = PROJECT_CONTENTS[prId].body;
    articleContainer.appendChild(articleBody);

    articleRepo = document.createElement("p");
    articleRepo.classList.add("github");
    articleRepo.innerHTML = `The application's code is available on Github. <a href="${PROJECT_CONTENTS[prId].github}">Link to repo.</a>`;
    articleContainer.appendChild(articleRepo);


    if (!PROJECT_CONTENTS[prId].images && !PROJECT_CONTENTS[prId].video) return;   


    const articlePics = document.createElement("div");
    articlePics.classList.add("app-layout-imgs");

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
            figCap.classList.add("caption");
            figCap.innerText = img.caption;
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
        vidCaption.classList.add("caption");
        vidCaption.innerText = "App demo";
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

function createImagesSection(prId){
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
            figCap.classList.add("caption");
            figCap.innerText = img.caption;
            figureNode.appendChild(figCap)

            articlePics.appendChild(figureNode);
        });
    }
}
/*
const GITHUB_USER = "apapadaki-edu";
const GITHUB_REPO = "home";
const GITHUB_BRANCH = "new";
const GITHUB_FOLDER = "images";

//######## FUNCTIONS FOR FETCHING IMAGES ASYNCHRONOUSLY ###########
function getImageUrls(currPr="") {
    // fetches an array with objects containing the image URLs, and their names 
    // names, of all images matching a string in the images folder 
    // of the specified branch in the specified repo(using github's Content API)
    const githubContentsAPICall = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FOLDER}?ref=${GITHUB_BRANCH}`
    return new Promise((resolve)=>{
        fetch(githubContentsAPICall)
        .then(res => res.json())
        .then((json) => {
          const imgLinks = []
          json.forEach((img)=>{
            //this can be done with the start of a string ex. /^fs/
            const regex = new RegExp(`^${currPr}.*[.]webp$`);
            if(!regex.test(img.name)) return; 
            imgLinks.push({"name": img.name,
                        "git_url": img.git_url});
          });
  
          resolve(imgLinks);
        });
      });
  }
  
  function getImageInBase64(imgUrl) {
    // fetches an image in its base64 encoding from the specified git url
    // the url can be found from github's content API
    return new Promise((resolve) =>{fetch(imgUrl)
        .then(res=>res.json())
        .then((json)=>resolve(json.content));
      });
  }
  
  function loadImageFromBase64(base64img){
    // loads an image with the specified data url as source
    // the data url is of the form "prefix,image_base64_str"
    // where prefix specifies the type of data and format
    return new Promise((resolve, reject) => {
        var base64imgDataUrl = `data:image/webp;base64,${base64img}`;
        var img = new Image();
        img.onload = function() {
            resolve(img);
        };
        img.onerror = reject;
        img.src = base64imgDataUrl;      
      });
  }
  
  
  async function getAllImages(currPr="", imgsContainer=null){
    // the getImageUrls takes the following argument
    // currPr "c", "ca", "pg" etc (used in the includes function or test function
    // in line 229) to check the images to download based on the project.
    
    //fetching images urls
    const imgUrls = await getImageUrls(currPr);
  
    
    // mapping each image url from the array above with 
    // a promise that retrieves the image in base64,
    // the result is an array of promises that can be executed in 
    // parallel with the Promise.all method
    const promises = imgUrls.map((imgUrl)=>{
        return getImageInBase64(imgUrl.git_url).then((img)=>{
          return { "name": imgUrl.name, "imgBase64": img };
        })
    });
  
    // fetching images in base64 encoding from remote host  
    // img is of the form {"name":str, "imgBase64":str}
    const results = await Promise.all(promises);
  
    // mapping each image in base64 to a promise that returns
    // an image node with the loaded image and appends it 
    // to the the specified DOM element
    const promisesNodes = results.map((img)=>{
      return loadImageFromBase64(img.imgBase64).then((imgNode)=>{
        const parentNode = (imgsContainer)? imgsContainer: document.body;
        parentNode.appendChild(imgNode);
      })
    })
  
    // loads all images in parallel
    await Promise.all(promisesNodes);
  }
*/
}
c();
