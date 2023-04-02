
function c() {

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
        body: '<p>This is a messaging application that makes it easier to manage the types of \
            messages someone want to send, from one UI. For instance, if we want to send an email\
            we must open the mail app and for messaging, one of the other available messaging apps on their phone directly\
            Here the user can provide their message, as well as, the email address or phone number of the receiver and by \
            the press of a button, the appropriate application opens with its fields already filled out. \
            This application makes it easier for sending messages from one UI. The application detects the systems language and \
            the corresponding keyboard layout is presented.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Interworkings</p>\
            <hr></button>\
            <p class="section-contents">As for its structure, the user is presented with a simple UI that probes them for an email address or a phone number. \
            This field is checked for the validity of its content. For instance, whether the email address conforms with the standard \
            published by the appropriate authorities/organizations. This can prevent simple mistakes like the correct form of the email address \
            or the number of digits required in a phone number, saving time for the user. A toast message informs the user in case of a mistake.\
            In the case of emails, if an email address is detected, there appears a new field for providing the email subject.\
            A simple text field is there for the body of the message. Finally, at the end of the UI, there are three buttons, \
            one for opening the user\'s messaging app, one for the email application and the third and last one, for clearing the text field.</p> \
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Technical/Limitations</p>\
            <hr></button>\
            <p class="section-contents">The buttons start activities with intents that call the user to open the \
            appropriate applications for each messaging app. A message\'s contents are sent to the \
            appropriate messaging app through the intent.</p>',
        images: [
                {
                    path:"../images/c_messaging_app.png",
                    caption: "Main screen"
                }
            ],
        github: "https://github.com/apapadaki-edu/android-based/tree/contact-methods",
        specs: {
            Software:[["Android Studio", "Dolphin v2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "v7.4"], ["Plugin Version", "v7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"], ["play-services-location", "v20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
    },
    "sc": {
        title: "Scientific Calculator",
        body: '<p>Application for scientific calculations of the functorial, the Fibonacci sequence up to a number and \
            the most common divisor of a stream of numbers. The purpose of this application at the educational level was to learn \
            to work with threads. These calculations are ideal for this purpose since they are computationally expensive for large numbers \
            and can crash or freeze the UI if not handled in the background.</p> \
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Interworkings</p>\
            <hr></button>\
            <p class="section-contents">The UI includes an EditText view in which the user provides the numbers separated with commas. A check is run for the \
            proper format of the stream of numbers. If it is not a stream of numbers separated by a comma, a toast message is presented \
            to warn the user. There are three buttons, one for each mathematical operation. The calculation results are \
            shown as blocks in a text area field. </p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Technical/Limitations</p>\
            <hr></button>\
            <p  class="section-contents"> </p>',
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
            Software:[["Android Studio", "Dolphin v2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "v7.4"], ["Plugin Version", "v7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"], ["play-services-location", "v20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
        
    },
    "ca": {
        title: "Calendar",
        body: '<p>An application that allows the user to create, modify and store calendar events. \
            The events are displayed on a list based on their due date. \
            Due to its simplicity, one can organize events more efficiently. </p> \
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Interworkings</p>\
            <hr></button>\
            <p class="section-contents">The main activity of the application hosts all the calendar events that are not past due, ordered by the date that the event happens, \
            from the closest to the latest one. For each event on the list, its title, the date of creation and the due date will be included as well as \
            a check box for bulk deleting events. Events that are past due are still stored in the database, however, they are not displayed on the main \
            screen. A button with the \'+\' sign can be used to add a new event. Once pressed a new activity is started with a new screen that contains \
            the form with the event\'s information, which the user needs to fill in. The information includes its title, a description and the date of the event.  \
            On this new screen, there are three buttons available. One to save the event, another to delete it and a final one to cancel the changes, after each \
            operation the user is directed back to the main screen. The event list must be updated after returning from the form screen. The user can also click on \
            an event from the event list and be brought to the activity with the form to modify the event\'s information. All events will be stored in \
            a relational database stored locally.</p> \
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Technical/Limitations</p>\
            <hr></button>\
            <p class="section-contents"> The expected learning results are to work with multiple activities and work with databases. No remote connection was required, \
            the database was created locally.</p>',
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
            Software:[["Android Studio", "Dolphin v2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "v7.4"], ["Plugin Version", "v7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"], ["play-services-location", "v20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },

    },
    "ma": {
        title: "Maps App",
        body: '<p>An application that shows the location of the user on a map. If the user is moving, there are displayed the velocity with which they are \
            moving and the direction of movement with respect to the north. The will always be updated to show the user\'s location (location tracking). Additionally, \
            the user can add places of interest on the map in the form of pins. Each pin is accompanied by an infowindow, which contains information about the location. \
            The information of each pin where created; is stored locally and displayed on the infowindow of each pin.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Interworkings</p>\
            <hr></button>\
            <p class="section-contents"> </p> \
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Technical/Limitations</p>\
            <hr></button>\
            <p class="section-contents"> </p>',
        github: "https://github.com/apapadaki-edu/android-based/tree/maps-app",
        specs: {
            Software:[["Android Studio", "Dolphin 2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "v7.4"], ["Plugin Version", "v7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"], ["play-services-location", "v20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
    },
    "pg": {
        title: "Photo Gallery",
        body: '<p>An application for taking photos, storing them, adding location information and a description.</p> \
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Interworkings</p>\
            <hr></button> \
            <p class="section-contents">The user can take photographs or video from both the front and back lenses. After the media is taken they are then stored \
                locally (using content providers). Additionally, there are stored, the date and time of creation and location information (as retrieved from the GeoCoder). \
                The user can also include a short description (up to 300 characters) of the picture.  The photos will be displayed in a grid-like layout on the main screen, \
                using bitmaps as thumbnails. Once clicking on an image thumbnail the user is guided to a new screen where; the image is displayed at its original size and \
                the image\'s details follow after. The description can be modified and stored anew. Finally, the user can delete a selected image.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Technical/Limitations</p>\
            <hr></button>\
            <p class="section-contents"> </p>',
        github: "https://github.com/apapadaki-edu/android-based/tree/photo-gallery",
        specs: {
            Software:[["Android Studio", "Dolphin v2021.3.1"]],
            Languages: [["Java","v8"],[" XML","v1.0"]],
            Grandle: [["Version", "7.4"], ["Plugin Version", "7.3.1"],],
            Dependencies: [["flexbox", "v3.0.0"], ["play-services-location", "v20.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
    },
    "as": {
        title: "Art Store",
        body: '<p>Model page of an Art Store for a product and a new customer form. Focusing on mainly on the layout. \
            The user can create a new customer account from the designed form and manage customers. \
            They can update, delete and view customer information. </p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Interworkings</p>\
            <hr></button>\
            <p class="section-contents">Once the user navigates to the model product page, they can be directed to the form page \
            by clicking on the “Create new account” link at the top left side of the page. \
            Once there, they can complete the form, check that they agree with the terms of use and press submit. \
            Before submitting the data, the required fields are checked for having values, \
            if there are empty such fields an error message is presented to the user \
            with the option to navigate back to the form to fill in all required fields. \
            If everything is okay, the information are displayed to the user and they \
            can navigate to managing customers with the  press of a button. Once on \
            navigation page all customers with some information are listed, with the options \
            to delete, update or view each customers information. Once any of the three \
            previously mentioned operations are complete the user is redirected to the customer management page.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Technical/Limitations</p>\
            <hr></button>\
            <p class="section-contents">Apart for the server-side part of handling customer, \
            the main purpose was to design the front-end of the page. The database \
            functionality was for learning how to handle form data and interact with databases, \
            even though it is not relevant so much for the art store but from an administrator\'s perspective. \
            We were not yet guided on how to use cookies so for navigating from one page to another, \
            while managing customers no-cookie logic was developed. More about this and a more detailed description \
            of how this was accomplished can be found on the projects GitHub page, following the link below.</p>',
        github: "https://github.com/apapadaki-edu/web_based/tree/art-store",
        images: [
            {
                path:"../images/sda_form_ini.png",
                caption: "Form main"
            },
            {
                path:"../images/sda_empty_field.png",
                caption: "Verification error"
            },
            {
                path:"../images/sda_verification_ok.png",
                caption: "Verification ok"
            },
            {
                path:"../images/sda_list_customers.png",
                caption: "List customers"
            },
            {
                path:"../images/sda_view_customer.png",
                caption: "View customer"
            },
            {
                path:"../images/sda_update_successful.png",
                caption: "Update customer"
            }
        ],
        specs: {
            Languages: [["HTML5",""],[" CSS3", ""], ["Javascript", ""], ["PHP", "7.4.3"], ["PL/pgSQL","v12.12"]],
            Databases: [["PostgreSQL", "v12"]], 
            Servers: [["Apache", "v2.4.41"]],
            'Tested Browsers': [["Chrome", ""], ["Avast Secure", ""], ["Firefox", ""]],
            'Tested Screen Widths': [["all", "best-displayed: > 300px"]]
        },
    },
    "nb": {
        title: "Simple Notebook",
        body: '<p>Application that records notes. The user can see all notes created, \
            add a new note, update the information of an already existing one and finally, \
            delete  a note. Additionally, there is the choice of clearing all notes. \
            Information available  for the user  to include in a note are its title, \
            the description and a theme. The themes from which they can choose include, \
            important, reminder, shopping, planning, and lastly, there is the choice of no-theme.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Interworkings</p>\
            <hr></button>\
            <p class="section-contents">On launching the application the user is presented with the main screen, \
            which lists all available notes they have previously been created, their count, \
            a button to create a new note and one to clear all notes. Note count was included \
            for anyone that wants to clean unneeded notes they may have forgotten to delete, \
            after they reach a number they consider appropriate for this task. The user can \
            click on a note to edit its contents or delete it. If they decide to create a new \
            note, they are presented with a form to fill in the notes information.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Technical/Limitations</p>\
            <hr></button>\
            <p class="section-contents">Technical aspects, a server is not needed, apart from hosting the web application, \
            since there was the use of indexedDB for database operations. This is a low-level \
            client storage API available on the browsers. This approach was a personal preference, \
            in order to get accustomed to applications other than server-side storage ones. \
            This application was designed, having in mind, mainly mobile users.</p>',        
        images: [
            {
                path: "../images/nb_ini.png",
                caption: "Start screen"
            },
            {
                path: "../images/nb_new_note.png",
                caption: "Add Note"
            },
            {
                path: "../images/nb_update_note.png",
                caption: "Update Note"
            }
        ],
    
        video: "../videos/nb_notepad.mp4",
        specs: {
            Languages: [["HTML5",""],[" CSS3",""], ["Javascript", ""]],
            Databases: [["IndexedDB", "v1 (in browser db)"]],
            Servers: [["not needed", ""]],
            'Tested Browsers': [["Chrome", ""], ["Avast Secure", ""]],
            'Tested Screen Widths': [["all", "best-displayed: > 300px"]]
        },
        github: "https://github.com/apapadaki-edu/web_based/tree/note-pad",
    },
    "sp": {
        title: "Sensor Playground",
        body: '<p>Web application that finds the sensors that it can reach from the browser, \
            activate, or deactivate them and record the results at provided time intervals. \
            Active buttons of the available sensors can be pressed once to activate them. \
            Once active the user can provide a period on the field next to each sensor and press enter \
            for the measurements to be displayed at the given interval. The period can be \
            changed while the sensor is active, by typing a new one and pressing enter once more.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Interworkings</p>\
            <hr></button>\
            <p class="section-contents">For safety reasons the browser does not allow applications direct access \
            to core sensors on our devices, so buttons that control the sensors are active \
            only for those that are allowed access and inactive for all the others. The reason \
            the button for not available sensors are displayed, are for the user to know the wide range \
            of sensors that we carry on us, at any given time.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Technical/Limitations</p>\
            <hr></button>\
            <p class="section-contents">Technical aspects, a server is required, apart from hosting the application, since workers were used for controlling \
            the display of sensor results with accordance to the given period and workers are defined in external files. \
            Purposes of this application was to access sensors and work with threads. \
            In the works, is the development of a flask application that connects to a remote \
            Redis database for storing sensor date in the form of time series. Once developed \
            I will post new media files in this section.</p>',
        images: [
            {
                path:"../images/sp_ini.png",
                caption: "Main screen"
            },            
            {
                path:"../images/sp_with_results.png",
                caption: "With results"
            },
        ],
        video: "../videos/sp_sensors.mp4",
        github: "https://github.com/apapadaki-edu/web_based/tree/sensors",
        specs: {
            Languages: [["HTML5",""],[" CSS3",""], ["Javascript", ""]],
            Servers: [["Apache", "2.4.46"]],
            'Tested Browsers': [["Chrome", ""], ["Avast Secure", ""]],
            'Tested Screen Widths': [["all", "best-displayed: > 300px"]]
        },
    },
    "sda": {
        title: "MSDS Manager",
        body: '<p>An application with two main features. The first one is the management of products, additives and \
            material safety datasheets. The second one is the classification of products based on their hazardous properties. \
            This app could assist those who work for multiple companies with the management of their datasheets. It \
            can be a cumbersome task, since changes in regulations or a substance\'s hazzardous properties, occur frequently. \
            Even more essential, since MSDS autors are obliged to review the datasheets every two years maximum. </p> \
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span><p>Interworkings</p>\
            <hr></button>\
            <p class="section-contents">The users can store new or update already existing products and their datasheets. They can store \
            and manage all additives of those products. Finally, they can find the classification of products \
            based on the hazzardous properties of their additives. The classification can be also generated automatically, \
            with the press of a button. The only thing remaining is to check for any specific conditions \
            applicable to any products, however not included in the regulation.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span>Technical/Limitations\
            <hr></button>\
            <div class="section-contents">\
                <p>Technical aspects of this application. The database that supports the application was designed from scratch. \
                The logic behind the classification was according to (EC) No 1907/2006 (REACH) Regulation, as was until July 2021. \
                There has not been revised, for the purposes of this project, since then.</p>\
                <p>New substances cannot be added. \
                The generated classification is based on  those hazards that are commonly applied for mechanical oils, \
                since the application  was designed for users that work with datasheets from that industry. \
                There are also some limited filtering features for products, additives and substances. \
                Additional capabilities could be functions that generate a resulting product from the provided consecrations \
                of their components.</p></div>',
        images: [
            {
                path:"../images/sda_start_page.png",
                caption: "Main screen"
            },            
            {
                path:"../images/sda_products.png",
                caption: "Product Management"
            },            
            {
                path:"../images/sda_additives.png",
                caption: "Additive Management"
            },
            {
                path:"../images/sda_classification.png",
                caption: "Classification"
            },
            {
                path:"../images/sda_result_classification.png",
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
        body: '<p>In a nutshell, smart light switch developed from the hardware level to the software level. \
            A device was developed that can keep track of the time and date \
            and sense the changes in luminosity of the environment to switch the lights on or off accordingly. \
            The device operates both automatically and manually.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span>Interworkings\
            <hr></button>\
            <p class="section-contents">Depending on whether the user has control of the device from their phone, \
            they can either turn on the switch from their phones or leave control \
            to the device itself. For instance, if the user has opened the app \
            that controls the switch on their phone, the smart device can detect this \
            and let the user make the decisions (παραχωρήσει). However, if the\
            the app is closed, the device can switch on or off the lights \
            depending on the time of day and the levels of luminosity in the room.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="black" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            </span>Technical / Limitations\
            <hr></button>\
            <p class="section-contents">Some technical aspects of the system developed. \
            The device was constructed using a microcontroller and chips so that \
            the individual parts of the device can operate. The device was \
            installed on the wall next to a light switch. The design of the application \
            controlling the device was provided by the blynk cloud platform. \
            Node-RED was used for flow control, helping with managing the different \
            parts of the system and the way they communicate. Also, luminosity measurements \
            along with the time of measurement were send through HiveMQ broker \
            to Node-RED and with the help of some nodes they were stored in a Redis database. \
            Those measurements will be used in a different project later.</p>',
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
    butt.classList.add("pr-select");
    butt.dataset.projectButtonName = pr;
    butt.innerHTML = PROJECT_CONTENTS[pr].title;
    prTabsContainer.append(butt);
})




document.addEventListener("click", (ev)=>{
    const isProjectButton = ev.target.classList.contains("pr-select");
    
    if(!isProjectButton) return;

    let curProject;
    if(isProjectButton) {
        
        curProject = document.querySelector('[data-project-name="' + ev.target.dataset.projectButtonName + '"]');
        curProject.classList.toggle("open");
    }

    document.querySelectorAll(".pr-article-container").forEach((article) => {
        
        if(curProject.dataset.projectName === article.dataset.projectName) {
            article.classList.add("open");
            //prTitleContainer.innerHTML = PROJECT_CONTENTS[article.dataset.projectName].title;
            ev.target.classList.add("selected");
            document.querySelector(".project-specs tbody").innerHTML = createTable(article.dataset.projectName);
            return;
        }
        article.classList.remove("open");
        document.querySelector('[data-project-button-name="'+article.dataset.projectName+'"]').classList.remove("selected");
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

document.addEventListener("click", ev => {

    const isMoreInfoButton = ev.target.classList.contains("expand");
    if (!isMoreInfoButton) return;

    let currentSectionDescription;
    currentSectionDescription = ev.target.nextElementSibling;
    currentSectionDescription.classList.toggle('open');
    ev.target.classList.toggle('open');
    
})


window.addEventListener("load", (ev)=>{

    Object.values(URL_PARAMS_PROJECTS[CUR_PR_CATEGORY]).forEach((pr)=>{
        createArticle(pr);
    });


    //set project visibility based on url d value
    prContainer.querySelectorAll(".pr-article-container").forEach((article) => {
        if (CUR_PR_CODE === article.dataset.projectName) {
            article.classList.add("open");
            document.querySelector("."+CUR_PR_CODE).classList.add("selected");
            document.querySelector(".project-specs tbody").innerHTML = createTable(CUR_PR_CODE);
            return;
        }

        if (CUR_PR_CODE !== article.dataset.projectName && CUR_PR_CODE === "no") {
            prContainer.firstElementChild.classList.add("open");
            //prTitleContainer.innerHTML = PROJECT_CONTENTS[prContainer.firstElementChild.dataset.projectName].title;
            document.querySelector('[data-project-button-name="'+ prContainer.firstElementChild.dataset.projectName + '"]').classList.add("selected");
            document.querySelector(".project-specs tbody").innerHTML = createTable(prContainer.firstElementChild.dataset.projectName);
            return;
        }
        //prTitleContainer.innerHTML = PROJECT_CONTENTS[CUR_PR_CODE].title;
        document.querySelector(".project-specs tbody").innerHTML = createTable(CUR_PR_CODE);
    })

    //change the header title based on projects's category
    const textElms = document.querySelectorAll(".site-description span");
    let titles = URL_PARAMS_PAGES[CUR_PR_CATEGORY].split(" ");
    textElms[0].innerText = titles[0];
    textElms[1].innerText = titles.length < 3 ? titles[1] : 'of Space';
    document.title = URL_PARAMS_PAGES[CUR_PR_CATEGORY];

});


function createArticle(prId) {
    let articleContainer = document.createElement("article");
    articleContainer.dataset.projectName = prId;
    articleContainer.classList.add("pr-article-container");
    document.querySelector(".project-tabs").appendChild(articleContainer);

    // article contents not ready
    if (Object.keys(PROJECT_CONTENTS[prId]).length < 2) return;

    let articleBody, articleRepo;

    articleBody = document.createElement("div");
    articleBody.classList.add("pr-desc");
    articleBody.innerHTML = PROJECT_CONTENTS[prId].body;
    articleContainer.appendChild(articleBody);

    articleRepo = document.createElement("p");
    articleRepo.classList.add("github");
    articleRepo.innerHTML = `The application code is available on Github. <a href="${PROJECT_CONTENTS[prId].github}">Link to repo.</a>`;
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

}
c();