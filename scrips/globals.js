
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
        PHOTO_GALLERY: "pg",
        MAPS_APP: "ma"
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
        body: '<p>A application that makes it easier for the user to manage the types of\
            messages they wish to send, all from one UI. Those messages include either emails or phone messages (SMS).\
            </p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Interworkings</h3>\
            <hr></button>\
            <div class="section-contents"><p>The user is presented with a simple UI that probes them for an email address or a phone\
            number. This field is checked for the validity of its content. This can prevent simple mistakes,\
            like the correct form of the email address, or the number of digits required in a phone\
            number, saving time for the user. A pop-up message informs the user in case of a mistake. For\
            emails, if an email address is detected, there appears a new field for providing\
            the email\’s subject. Finally, a simple text field is included for the message\’s body.\
            </p>\
            <p> There are three buttons at the end of the UI, one for opening the user\'s messaging app,\
            one for the email application and the third one, for clearing the text field containing the\
            message\’s body. After the message\’s information are all filled in and depending on the type\
            of message the user wishes to send, the appropriate application opens with its fields already filled in.</p>\
            </div>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Technical/Limitations</h3>\
            <hr></button>\
            <p class="section-contents">The buttons start activities with intents that call the user to open the appropriate\
            applications for each messaging app. A message\'s contents are sent to the messaging app\
            selected through the intent. For now, messages are only for SMS apps, it would be useful to\
            include others like for example, messenger. For emails, the validation conforms with OWASP\ Foundation\’s standard. \
            </p>',
        images: [
                {
                    path:"../images/c_messaging_app.png",
                    caption: "Main screen"
                },
                {
                    path:"../images/c_fill_message.png",
                    caption: "Fill SMS"
                },
                {
                    path:"../images/c_open_sms_app.png",
                    caption: "SMS App"
                },
                {
                    path:"../images/c_fill_mail.png",
                    caption: "Fill Email"
                },
                {
                    path:"../images/c_select_app.png",
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
        body: '<p>Application for scientific calculations of the functorial, the Fibonacci sequence, \
            up to a number and the most common divisor of a stream of numbers. </p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Interworkings</h3>\
            <hr></button>\
            <p class="section-contents">The UI includes an EditText view in which the user provides the numbers separated with commas. \
            A check is run for the proper format of the stream of numbers. If it is not a stream of numbers separated by a comma, \
            a toast message is presented to notify the user. There are three buttons, one for each mathematical operation. \
            The calculation results are shown as blocks in a text area field. </p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Technical/Limitations</h3>\
            <hr></button>\
            <p class="section-contents"> The purpose of this application at the educational level was to learn to work with threads. \
            These calculations are ideal for this purpose since they are computationally expensive for large numbers \
            and can crash or freeze the UI if not handled in the background. Finally, the application detects the system\’s \
            language and presents the corresponding keyboard layout.</p>',
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
            Dependencies: [["flexbox", "v3.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },
        
    },
    "ca": {
        title: "Calendar",
        body: '<p>An application that allows the user to create, modify and store calendar events. The events are displayed on a \
            list based on their due date; the most resent one appears at the top. Due to its simplicity, one can organize events more efficiently. </p> \
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Interworkings</h3>\
            <hr></button>\
            <div class="section-contents"><p>The start screen displays all calendar events that are not past due; have not yet happened. \
            The events are ordered by the date the event happens, starting with the most recent one.\
            For each event on the list, its title, the date of creation and the due date are included. Additionally, \
            next to each event there is a check box for bulk deleting events. Finally, a button with the \'+\' sign is used to add a new event. </p>\
            <p>A new form appears to the user, in case they wish to add a new event, by pressing the \‘+\’ sign button or to update an already added event, \
            by pressing on an event. In the form the user can fill in the event\'s information. These pieces of information include its title, a description and the date of the event.</p>\
            <p>The form includes three buttons. One button is to save or update an event, one to delete it and finally, one to cancel the changes. \
            After each operation, the user is directed back to the main screen. Once a new event is added or updated, the event list on the main screen \
            is also updated to include the newly created event or respectively, to display the altered information of the updated event. </p></div>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Technical/Limitations</h3>\
            <hr></button>\
            <p class="section-contents"> Events that are past due are still stored in the database, however, they are not displayed on the main screen. Additionally, \
            all events are stored in a local relational database, so there is no need for a remote connection. The event list and the \
            form consist two separate activities with the one first being the applications main activity and the second a child activity of the main.</p>',
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
            Dependencies: [["flexbox", "v3.0.0"]],
            SDK: [["Target", "32"], ["Min", "22"]]
        },

    },
    "pg": {
        title: "Photo Gallery",
        body: '<p>An application for taking photos, storing them, adding location information and a description. It is similar to \
            the gallery application pre-insalled from the manufacturer.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Interworkings</h3>\
            <hr></button>\
            <div class="section-contents"><p>Starting the application the user is presented with the thumbnails of all photographs stored. \
            A button is included for taking new photos. Once the new button is pressed, the camera app opens for the user to use.\
            After a photo is taken the user returns on the main screen with the newly added photo shown on the gallery. Along with the photo, \
            are stored the date and time of creation and the location information.</p>\
            <p>The user can include a description for a photograph. Once clicking on a photo thumbnail on the main screen, \
            a new screen appears with the photo\’s information. These pieces of information include a larger version of the photograph, the location where it was taken, \
            the date and time and a field for a description. The description can be modified and stored anew.</p></div>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Technical/Limitations</h3>\
            <hr></button>\
            <div class="section-contents"><p> Location information are stored as retrieved from the GeoCoder, as latitude and longitude pairs. The date and time \
            are stored as recorded from the system, without any formatting.</p> <p>All photographs along with any additional information, is stored locally, using a content provider. \
            The reason for creating a content provider was to use it along the map application developed later. Through that \
            application, the user can add information along with pins for places of interest. As an extra functionality, the user could also include images for those places, \
            by using the content provider. This feature has yet to be added in the Maps Application.</p>\
            <p>Some learning objectives were to ask and grand permissions, to use the external storage and lastly, to manipulate media.</p></div>',
        images: [
                {
                    path: "../images/pg_ask_permitions.png",
                    caption: "Ask Permissions"
                },
                {
                    path: "../images/pg_all_photos.png",
                    caption: "Gallery"
                },
                {
                    path: "../images/pg_take_photo.png",
                    caption: "New Photo"
                },
                {
                    path: "../images/pg_modify_photo.png",
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
        body: '<p>An application that shows the location of the user on a map. If the user is moving, there are displayed the velocity with which they are \
            moving and the direction of movement with respect to the north. The will always be updated to show the user\'s location (location tracking). Additionally, \
            the user can add places of interest on the map in the form of pins. Each pin is accompanied by an infowindow, which contains information about the location. \
            The information of each pin where created; is stored locally and displayed on the infowindow of each pin.</p>',
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
        body: '<p>Model page of an Art Store for a product and a new customer form. Focusing on mainly on the layout. \
            The user can create a new customer account from the designed form and manage customers. \
            They can update, delete and view customer information. </p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Interworkings</h3>\
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
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Technical/Limitations</h3>\
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
            'Tested Browsers': [["Chrome", "v114.0.5735.134"], ["Firefox", "v111.0.1"],, ["Min", "v1.27.0"]],
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
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Interworkings</h3>\
            <hr></button>\
            <p class="section-contents">On launching the application the user is presented with the main screen, \
            which lists all available notes they have previously been created, their count, \
            a button to create a new note and one to clear all notes. Note count was included \
            for anyone that wants to clean unneeded notes they may have forgotten to delete, \
            after they reach a number they consider appropriate for this task. The user can \
            click on a note to edit its contents or delete it. If they decide to create a new \
            note, they are presented with a form to fill in the notes information.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Technical/Limitations</h3>\
            <hr></button>\
            <p class="section-contents">A server is not needed, apart from hosting the web application, \
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
            'Tested Browsers': [["Chrome", "v114.0.5735.134"], ["Firefox", "v111.0.1"], ["Min", "v1.27.0"]],
            'Tested Screen Widths': [["all", "best-displayed: > 300px"]]
        },
        github: "https://github.com/apapadaki-edu/web_based/tree/note-pad",
    },
    "sp": {
        title: "Sensor Playground",
        body: '<p>Web application that finds the sensors it can reach from the browser, \
            activate, or deactivate them and record the results at provided time intervals. \
            Active buttons of the available sensors can be pressed once to activate them. \
            Once active the user can provide a period on the field next to each sensor and press enter \
            for the measurements to be displayed at the given interval. The period can be \
            changed while the sensor is active, by typing a new one and pressing enter again.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Interworkings</h3>\
            <hr></button>\
            <p class="section-contents">For safety reasons the browser does not allow applications direct access \
            to core sensors on our devices, so buttons that control the sensors are active \
            only for those that are allowed access and inactive for all the others. The reason \
            the button for not available sensors are displayed, are for the user to know the wide range \
            of sensors that we carry on us, at any given time.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Technical/Limitations</h3>\
            <hr></button>\
            <p class="section-contents">A server is required, apart from hosting the application, since workers were used for controlling \
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
            Servers: [["Apache", "v2.4.46"]],
            'Tested Browsers': [["Chrome", "v114.0.5735.134"], ["Firefox", "v111.0.1"],, ["Min", "v1.27.0"]],
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
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Interworkings</h3>\
            <hr></button>\
            <p class="section-contents">The users can store new or update already existing products and their datasheets. They can store \
            and manage all additives of those products. Finally, they can find the classification of products \
            based on the hazzardous properties of their additives. The classification can be also generated automatically, \
            with the press of a button. The only thing remaining is to check for any specific conditions \
            applicable to any products, however not included in the regulation.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Technical/Limitations</h3>\
            <hr></button>\
            <div class="section-contents">\
            <p>The database that supports the application was designed from scratch. \
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
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Interworkings</h3>\
            <hr></button>\
            <p class="section-contents">Depending on whether the user has control of the device from their phone, \
            they can either turn on the switch from their phones or leave control \
            to the device itself. For instance, if the user has opened the app \
            that controls the switch on their phone, the smart device can detect this \
            and let the user make the decisions (παραχωρήσει). However, if the\
            the app is closed, the device can switch on or off the lights \
            depending on the time of day and the levels of luminosity in the room.</p>\
            <button class="expand">\
            <span><svg class="more-info" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="-40 -40 592 346.77"><path stroke="currentColor" stroke-width="30" fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>\
            <svg class="less-info" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="M0 276.77 253.12 0 512 282.48l-32.65 29.88-226.2-246.83L32.66 306.64z"/></svg>\
            </span><h3>Technical/Limitations</h3>\
            <hr></button>\
            <p class="section-contents">The device was constructed using a microcontroller and chips so that \
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
prTabsContainer.dataset.prNav = "";
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
        
        //get the last of the project navigation container and smooth scroll to its top
        const allButtons = ev.target.closest("[data-pr-nav]").children;
        allButtons.item(allButtons.length - 1).scrollIntoView({block: "start"});

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

    if (currentSectionDescription.classList.contains("open")){
        ev.target.querySelectorAll(".more-info")[0].style.display = "none";
        ev.target.querySelectorAll(".less-info")[0].style.display = "block"; 
    } else {
        ev.target.querySelectorAll(".more-info")[0].style.display = "block";
        ev.target.querySelectorAll(".less-info")[0].style.display = "none"; 
    }

    ev.target.classList.toggle('open');
    
})


window.addEventListener("load", (ev)=>{

    Object.values(URL_PARAMS_PROJECTS[CUR_PR_CATEGORY]).forEach((pr)=>{
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

}
c();