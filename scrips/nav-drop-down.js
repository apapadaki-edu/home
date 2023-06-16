const URL_PARAMS_PAGES = {
    h:  "Home", 
    ml: "Machine Learning Subspace",
    a: "Android Subspace",
    w: "Web Subspace",
    otr: "Rest of Space"
}

document.addEventListener("mouseover", ev => {
    const isDropdownButton = ev.target.matches("[data-dropdown-button]");
    // if this is not a dropdown or if it is in the dropdown then do nothing
    // if there it is in the dropdown it means that the closest parent it has (its container) is not null
    if (!isDropdownButton && ev.target.closest("[data-dropdown]") != null) return;

    let currentDropdown;
    if (isDropdownButton){
        // dropdown is active select it and make it active
        currentDropdown = ev.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown=>{
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    });

});

document.addEventListener("click", ev => {

    const isMoreInfoButton = ev.target.matches("[data-category-description-button]");
    if (!isMoreInfoButton) return;

    let currentCategoryDescription;
    currentCategoryDescription = ev.target.closest("[data-category]").querySelector(".app-category-description");
    currentCategoryDescription.classList.toggle('open');
    ev.target.classList.toggle('open');
    
});


document.addEventListener("click", (ev) => {
    const isHambMenuButton = ev.target.classList.contains("hamb-menu");
    
    if (!isHambMenuButton) return;
    document.querySelector(".main-nav").classList.toggle("open");
});

//styling the main menu with drop-down buttons in case of mobile screens
window.addEventListener("resize", (ev) =>{
    const hambButtons = document.querySelectorAll("[data-dropdown-button]");
    const main = document.getElementsByTagName("MAIN")[0];
    
    if (window.matchMedia("(min-width: 901px)").matches || screen.width > 901) {

        // if the last dropdown button does not have
        // a span sibling element there is no need to remove it (we come from a big screen)
        if (hambButtons[hambButtons.length -1].nextElementSibling.tagName !== "SPAN") return;

        // otherwise when there is a change of screen size to a larger one delete the span elements
        hambButtons.forEach(function (button, index) {
            if (index !== 0) button.nextElementSibling.remove();     
        });

        if (main.querySelector(".page-introduction") === null) return;
        if (main.querySelector(".page-introduction").style.display === "none") return;
        main.querySelector(".page-introduction").style.display = "none";

        return;
    }
    //im case of a mobile screen we need to create the drop-down open button
    addDropdownButtons(hambButtons);  

    // in case of large we do not need an introduction
    if (main.querySelector(".page-introduction") === null) return;
    main.querySelector(".page-introduction").style.display = "block";


});

window.addEventListener("load", (ev) => {

    if (window.innerWidth < 901) {
        addDropdownButtons(document.querySelectorAll("[data-dropdown-button]"));
    }

    //if no darkMode parameter in the url (user comes from the home page link, add the mode to false, without reloading the page)
    if (!document.URL.includes("darkMode")) window.history.replaceState({noMode: "darkMode='f'"}, "", document.URL + "?darkMode=f");
    
    // extract  the dark mode state and create the toggle button;
    const DARK_MODE = document.URL.match(/(?<=Mode=)\w+$/)[0];
    createFontToggleButton(DARK_MODE);

    // mobile-screen expanding drop-down sub-menus
    document.querySelectorAll(".expand-down-arrow").forEach( dropdown=>{
        dropdown.addEventListener("click", ev=>{
            let submenu = ev.target.nextElementSibling;
            submenu.classList.toggle("open");
        })
    })

    if (DARK_MODE === "t" && !document.body.classList.contains("dark-mode")) 
    {
        document.body.classList.add("dark-mode");

        if (!document.querySelector(".toggle").classList.contains("active")) document.querySelector(".toggle").classList.add("active");

        document.querySelectorAll("a.to-content").forEach((url) => {
                let urlDest = url.getAttribute("href");

                if(!urlDest) return;

                url.setAttribute("href", urlDest.replace(/.$/g, "t"));
            });
    }
    /*date the current document has been changed*/
    let nLastModif = new Date(document.lastModified);
    document.querySelector(".copyright").innerText = `Last updated ${nLastModif.toLocaleString("default", {month: "short"})} ${nLastModif.getFullYear()}`;

})


function addDropdownButtons(elmButton){
    //gets all buttons in the navigation menu  that have sub-menus 
    // and adds the dropdown buttons (used for mobile or small tablet screens only) 
    elmButton.forEach(function(button, index) {
        if (index !== 0) {
            if (button.nextElementSibling.tagName === "SPAN") return;
            span = document.createElement('span');
            span.classList.add("expand-down-arrow");
            button.parentElement.insertBefore(span, button.nextElementSibling);
        }
    })
}


function createFontToggleButton(darkMode) {
    let container = document.createElement("div");
    container.classList.add("toggle-button-container");

    let toggleButton =  document.createElement("span");
    toggleButton.classList.add("toggle");

    let circleInButton = document.createElement("div");
    circleInButton.classList.add("circle");
    toggleButton.appendChild(circleInButton);

    let toggleIcon = document.createElement("span");
    toggleIcon.classList.add("toggle-icon");

    container.appendChild(toggleButton);
    container.appendChild(toggleIcon);

    
    (darkMode === "t") ? toggleIcon.innerHTML = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.89" style="enable-background:new 0 0 122.88 122.89" xml:space="preserve"><g><path fill="currentColor" d="M49.06,1.27c2.17-0.45,4.34-0.77,6.48-0.98c2.2-0.21,4.38-0.31,6.53-0.29c1.21,0.01,2.18,1,2.17,2.21 c-0.01,0.93-0.6,1.72-1.42,2.03c-9.15,3.6-16.47,10.31-20.96,18.62c-4.42,8.17-6.1,17.88-4.09,27.68l0.01,0.07 c2.29,11.06,8.83,20.15,17.58,25.91c8.74,5.76,19.67,8.18,30.73,5.92l0.07-0.01c7.96-1.65,14.89-5.49,20.3-10.78 c5.6-5.47,9.56-12.48,11.33-20.16c0.27-1.18,1.45-1.91,2.62-1.64c0.89,0.21,1.53,0.93,1.67,1.78c2.64,16.2-1.35,32.07-10.06,44.71 c-8.67,12.58-22.03,21.97-38.18,25.29c-16.62,3.42-33.05-0.22-46.18-8.86C14.52,104.1,4.69,90.45,1.27,73.83 C-2.07,57.6,1.32,41.55,9.53,28.58C17.78,15.57,30.88,5.64,46.91,1.75c0.31-0.08,0.67-0.16,1.06-0.25l0.01,0l0,0L49.06,1.27 L49.06,1.27z M51.86,5.2c-0.64,0.11-1.28,0.23-1.91,0.36l-1.01,0.22l0,0c-0.29,0.07-0.63,0.14-1,0.23 c-14.88,3.61-27.05,12.83-34.7,24.92C5.61,42.98,2.46,57.88,5.56,72.94c3.18,15.43,12.31,28.11,24.51,36.15 c12.19,8.03,27.45,11.41,42.88,8.23c15-3.09,27.41-11.81,35.46-23.49c6.27-9.09,9.9-19.98,10.09-31.41 c-2.27,4.58-5.3,8.76-8.96,12.34c-6,5.86-13.69,10.13-22.51,11.95l-0.01,0c-12.26,2.52-24.38-0.16-34.07-6.54 c-9.68-6.38-16.93-16.45-19.45-28.7l0-0.01C31.25,40.58,33.1,29.82,38,20.77C41.32,14.63,46.05,9.27,51.86,5.2L51.86,5.2z"/></g></svg>'
            :toggleIcon.innerHTML = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>sun-warm</title><path fill="currentColor" d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"/></svg>';
    
    toggleButton.addEventListener("click", (ev) => {
        if(!toggleButton.classList.contains("active")) {
            ev.target.classList.add("active");
            toggleIcon.innerHTML = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.89" style="enable-background:new 0 0 122.88 122.89" xml:space="preserve"><g><path fill="currentColor" d="M49.06,1.27c2.17-0.45,4.34-0.77,6.48-0.98c2.2-0.21,4.38-0.31,6.53-0.29c1.21,0.01,2.18,1,2.17,2.21 c-0.01,0.93-0.6,1.72-1.42,2.03c-9.15,3.6-16.47,10.31-20.96,18.62c-4.42,8.17-6.1,17.88-4.09,27.68l0.01,0.07 c2.29,11.06,8.83,20.15,17.58,25.91c8.74,5.76,19.67,8.18,30.73,5.92l0.07-0.01c7.96-1.65,14.89-5.49,20.3-10.78 c5.6-5.47,9.56-12.48,11.33-20.16c0.27-1.18,1.45-1.91,2.62-1.64c0.89,0.21,1.53,0.93,1.67,1.78c2.64,16.2-1.35,32.07-10.06,44.71 c-8.67,12.58-22.03,21.97-38.18,25.29c-16.62,3.42-33.05-0.22-46.18-8.86C14.52,104.1,4.69,90.45,1.27,73.83 C-2.07,57.6,1.32,41.55,9.53,28.58C17.78,15.57,30.88,5.64,46.91,1.75c0.31-0.08,0.67-0.16,1.06-0.25l0.01,0l0,0L49.06,1.27 L49.06,1.27z M51.86,5.2c-0.64,0.11-1.28,0.23-1.91,0.36l-1.01,0.22l0,0c-0.29,0.07-0.63,0.14-1,0.23 c-14.88,3.61-27.05,12.83-34.7,24.92C5.61,42.98,2.46,57.88,5.56,72.94c3.18,15.43,12.31,28.11,24.51,36.15 c12.19,8.03,27.45,11.41,42.88,8.23c15-3.09,27.41-11.81,35.46-23.49c6.27-9.09,9.9-19.98,10.09-31.41 c-2.27,4.58-5.3,8.76-8.96,12.34c-6,5.86-13.69,10.13-22.51,11.95l-0.01,0c-12.26,2.52-24.38-0.16-34.07-6.54 c-9.68-6.38-16.93-16.45-19.45-28.7l0-0.01C31.25,40.58,33.1,29.82,38,20.77C41.32,14.63,46.05,9.27,51.86,5.2L51.86,5.2z"/></g></svg>';
            document.body.classList.add("dark-mode");
           
            if (darkMode === "t") return;

            //change url's darkMode state without reloading
            window.history.replaceState({f:"t"}, "", document.URL.replace(/.$/g, "t"));
            document.querySelectorAll("a.to-content").forEach((url) => {
                let urlDest = url.getAttribute("href");

                if(!urlDest) return;

                url.setAttribute("href", urlDest.replace(/.$/g, "t"));
            });
            return;
        }

        ev.target.classList.remove("active");
        toggleIcon.innerHTML = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>sun-warm</title><path fill="currentColor" d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"/></svg>';
        document.body.classList.remove("dark-mode");
        
        if(darkMode === "f") return;

        window.history.replaceState({t:"f"}, "", document.URL.replace(/.$/g, "f"))
        document.querySelectorAll("a.to-content").forEach((url) => {
            let urlDest = url.getAttribute("href");
            
            if(!urlDest) return;

            url.setAttribute("href", urlDest.replace(/.$/g, "f"));
        });
    });

    document.querySelector("#header-container").appendChild(container);
}


function createHomeMain(parent) {
    let prCats = {
        'ml':{
            prCatName: "Machine Learning",
            prCatSvg: '<svg viewBox="0 0 114.75 122.88" id="ml" y="372"><path  fill="currentColor" d="M64.94 8.92c2.03 3.52 3.42 12.25 4.15 23.81h12.97V20.46c-.28-.13-.55-.28-.81-.45-.49-.31-.94-.67-1.33-1.06l-.05-.05a7.49 7.49 0 01-1.62-2.44 7.689 7.689 0 010-5.91c.39-.95.97-1.8 1.67-2.51a7.66 7.66 0 012.51-1.67c.91-.38 1.91-.59 2.95-.59 1.04 0 2.03.21 2.95.59.95.39 1.8.97 2.51 1.67.71.71 1.28 1.56 1.67 2.5l.02.06a7.689 7.689 0 01-.03 5.84c-.39.95-.97 1.8-1.67 2.51l-.06.06a7.93 7.93 0 01-1.84 1.34v15.84c0 .95-.39 1.81-1.01 2.43-.62.62-1.48 1.01-2.43 1.01H69.43c.12 3.29.2 6.75.23 10.32h30.44c.13-.26.27-.51.42-.75l.04-.05a7.66 7.66 0 013.5-2.89l.06-.02c.9-.36 1.88-.57 2.89-.57 1.04 0 2.03.21 2.95.59.95.39 1.8.97 2.51 1.67a7.66 7.66 0 011.67 2.51c.38.92.59 1.91.59 2.95 0 1.04-.21 2.03-.59 2.95-.39.95-.97 1.8-1.67 2.51a7.66 7.66 0 01-2.51 1.67l-.06.02c-.9.36-1.88.56-2.89.56-1.04 0-2.04-.21-2.95-.59-.94-.39-1.79-.96-2.51-1.67-.38-.38-.72-.8-1.02-1.27-.16-.24-.3-.49-.43-.75H69.67c-.03 3.9-.11 7.89-.24 11.95h37.21c.95 0 1.81.39 2.43 1.01.62.62 1.01 1.48 1.01 2.43v25.53c.33.14.64.3.94.48a7.66 7.66 0 013.14 3.66l.02.06c.36.9.57 1.88.57 2.89 0 1.04-.21 2.03-.59 2.95-.39.95-.97 1.8-1.67 2.51a7.66 7.66 0 01-2.51 1.67c-.91.38-1.91.59-2.95.59-1.04 0-2.03-.21-2.95-.59a7.82 7.82 0 01-2.51-1.67 7.66 7.66 0 01-1.67-2.51c-.38-.91-.59-1.91-.59-2.95\
                0-1.04.21-2.04.59-2.95.39-.95.97-1.8 1.67-2.51.32-.32.68-.62 1.06-.89.18-.13.37-.25.57-.36V75.66H69.16c-.15 3.24-.33 6.49-.55 9.73h11.04c.95 0 1.81.39 2.43 1.01.62.62 1.01 1.48 1.01 2.43v13.66a7.693 7.693 0 011.96 1.43l.06.06c.68.7 1.24 1.53 1.62 2.45.38.91.59 1.91.59 2.95 0 1.04-.21 2.04-.59 2.95l-.03.06c-.39.93-.96 1.76-1.65 2.45l-.05.05c-.7.69-1.53 1.25-2.44 1.63a7.701 7.701 0 01-5.91 0 7.82 7.82 0 01-2.51-1.67l-.06-.06c-.68-.7-1.24-1.53-1.62-2.45-.38-.92-.59-1.91-.59-2.95s.21-2.03.59-2.95c.39-.95.96-1.8 1.67-2.51.39-.39.83-.74 1.29-1.04.25-.16.51-.31.78-.44V92.28h-8.1c-.11 1.37-.23 2.74-.35 4.1-.16 1.76-.67 5.01-.34 6.62.88 4.27-2.97 17.15-14.29 19.52-5.58 1.16-11.35-.55-15.7-3.95-3.48-2.71-6.09-6.52-7.03-10.83-1.82-.07-3.67-.44-5.47-1.04-3.98-1.34-7.81-3.95-10.8-7.41-3.01-3.47-5.19-7.83-5.88-12.68-.35-2.53-.3-5.17.26-7.89-1.95-1.77-3.63-3.76-4.96-5.93C1.22 69.08-.05 64.9 0 60.6c.05-4.33 1.43-8.72 4.42-12.8 1.74-2.37 4.03-4.63 6.93-6.7-.03-.79-.03-1.58-.01-2.36.23-6.32 2.56-11.88 5.96-16.03 3.52-4.3 8.23-7.11 13.07-7.8h.02c.17-.71.37-1.41.63-2.09 1.56-4.23 4.77-7.83 8.7-10.12C43.68.4 48.43-.62 53.06.34c4.45.94 8.69 3.6 11.88 8.58zM30.77 99.21c1.64-5.16 5.97-10.31 14.14-14.48a4.154 4.154 0 015.57 1.8c1.03 2.04.23 4.52-1.8 5.57-7.57 3.87-10.42 8.31-10.42 12.18 0 3.02 1.72 5.84 4.22 7.8 2.54 1.97 5.82 3 8.92 2.36 3.86-.8 7.58-4.37 9.51-12.15v-81.8c-1.93-7.72-5.65-11.27-9.5-12.07-2.54-.53-5.24.07-7.54 1.42-2.33 1.35-4.2 3.43-5.09 5.83-1.18 3.2-.48 7.13 3.52 10.83 1.66 1.55 1.77 4.14.22 5.8-1.55 1.66-4.14 1.77-5.8.22-3.11-2.88-5.03-5.94-5.99-8.99-2.45.59-4.87 2.21-6.83 4.59-2.29 2.79-3.86 6.57-4.02 10.91-.04 1.15.02 2.37.19 3.62h-.01c.22 1.62-.5 3.3-1.98 4.21-3 1.84-5.21 3.87-6.76 5.98-1.88 2.56-2.74 5.25-2.77 7.84-.03 2.63.78 5.25 2.23 7.6 1.23 1.99 2.91 3.81 4.96 5.33a4.269 4.269 0 011.63 4.89c-.81 2.4-.99 4.73-.68 6.9.44 3.12 1.89 5.97 3.87 8.26 1.99 2.3 4.51 4.02 7.09 4.9a10 10 0 003.12.65zm.94-58.11a4.12 4.12 0 015.82.05 4.12 4.12 0 01-.05 5.82c-3.53 3.48-5.37 7.96-5.57 12.54-.19 4.72 1.34 9.58 4.56 13.57 1.43 1.77 1.14 4.36-.63 5.79-1.77 1.43-4.36 1.14-5.79-.63-4.51-5.59-6.65-12.39-6.38-19.06.29-6.62 2.95-13.08 8.04-18.08z"/></svg>',
            prCatDesc: 'Projects mainly deve&shyloped on my free time. There are four projects\
            currently in development. One is a tomato disease classi&shyfier, \
            a deep learning project using CNNs. The second is a pro&shyject \
            analy&shyzing cross sectional meteo&shyrological data for countries \
            around the world. The dataset\'s time-range is along the past 40,\
            or for some, the past 20 years. The third project is the predi&shyction of \
            the lumi&shynocity value in a room, for which luminocity measure&shyments are \
            recorded every one second. Last but not least, a pro&shyject,\
            based on neural style trans&shyfer, mainly deve&shyloped as a hobby.\
            Some of the results produced by the pre&shyviously mention&shyed\
            pro&shyject can be found on my Insta&shygram (link in footer).',
        },
        'a': {
            prCatName:"Android",
            prCatSvg: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.23 122.88"><path class="cls-1" fill="currentColor" d="M86.29,39c0-11-6.33-20.66-15.79-26l5.23-9.43A2.37,2.37,0,0,0,74.8.3h0a2.37,2.37,0,0,0-3.22.92L66.22,10.9a35.84,35.84,0,0,0-26.2,0L34.65,1.22A2.36,2.36,0,0,0,31.43.3h0a2.36,2.36,0,0,0-.92,3.22L35.74,13C26.27,18.34,20,28,20,39Zm11.2,0h0a8.74,8.74,0,0,1,8.74,8.75v31a8.74,8.74,0,0,1-8.74,8.75h0a8.75,8.75,0,0,1-8.75-8.75v-31A8.75,8.75,0,0,1,97.49,39ZM8.75,39h0a8.75,8.75,0,0,1,8.75,8.75v31a8.75,8.75,0,0,1-8.75,8.75h0A8.75,8.75,0,0,1,0,78.77v-31A8.75,8.75,0,0,1,8.75,39ZM49.47,97.73v16.4a8.75,8.75,0,0,1-8.75,8.75h0A8.74,8.74,0,0,1,32,114.13V97.73H28a8,8,0,0,1-8-8V41.63H86.29V89.71a8,8,0,0,1-8,8h-4v16.4a8.75,8.75,0,0,1-8.75,8.75h0a8.75,8.75,0,0,1-8.75-8.75V97.73Z"/><path class="cls-2" d="M39.26,24.09a1.46,1.46,0,1,0-1.45,1.46,1.45,1.45,0,0,0,1.45-1.46Z"/><path class="cls-2" d="M38,24.09a.15.15,0,0,0,0-.1h0a.18.18,0,0,0-.21,0,.18.18,0,0,0,0,.1.14.14,0,0,0,.15.15.18.18,0,0,0,.1,0,.15.15,0,0,0,0-.11Zm1.81-2h0a2.76,2.76,0,0,1,0,3.91,2.78,2.78,0,0,1-3.92,0h0a2.77,2.77,0,1,1,3.91-3.92Z"/><path class="cls-2" d="M69.89,24.09a1.46,1.46,0,1,0-1.46,1.46,1.46,1.46,0,0,0,1.46-1.46Z"/><path class="cls-2" d="M68.57,24.09a.15.15,0,0,0,0-.1h0a.18.18,0,0,0-.21,0,.18.18,0,0,0,0,.1.14.14,0,0,0,.15.15.18.18,0,0,0,.1,0,.15.15,0,0,0,0-.11Zm1.81-2h0a2.77,2.77,0,0,1-3.92,3.91h0a2.77,2.77,0,1,1,3.91-3.92Z"/></svg>',
            prCatDesc: 'Various small projects of native android appli&shycations, \
                developed during my studies. The fea&shytures cover \
                layouts, acti&shyvities, forms, content pro&shyviders, photo galleries\
                and inter&shyacting with the google maps API. ',
        },
        'w': {
            prCatName: "Web",
            prCatSvg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.879px" height="122.879px" viewBox="0 0 122.879 122.879" enable-background="new 0 0 122.879 122.879" xml:space="preserve"><g><path fill="currentColor" d="M109.465,89.503c0.182,0,0.359,0.019,0.533,0.053c1.146-1.998,2.191-4.095,3.135-6.286 c0.018-0.044,0.037-0.086,0.059-0.128c1.418-3.345,2.488-6.819,3.209-10.419c0.559-2.793,0.904-5.657,1.035-8.591h-16.893 c-0.307,8.574-2.867,17.03-7.639,25.371H109.465L109.465,89.503z M106.52,94.889H89.506c-5.164,7.481-12.121,14.87-20.838,22.167 c1.367-0.17,2.719-0.388,4.055-0.655c3.646-0.729,7.164-1.817,10.549-3.264l-0.002-0.004c3.441-1.48,6.646-3.212,9.609-5.199 c2.969-1.992,5.721-4.255,8.25-6.795l0.01-0.01l0,0C103.096,99.18,104.889,97.099,106.52,94.889L106.52,94.889z M54.21,117.055 c-8.716-7.296-15.673-14.685-20.838-22.166H16.361c1.631,2.21,3.423,4.291,5.379,6.24l0.01,0.011v-0.001 c2.53,2.54,5.282,4.803,8.25,6.795c2.962,1.987,6.167,3.719,9.609,5.199c0.043,0.019,0.086,0.038,0.128,0.059 c3.345,1.419,6.819,2.488,10.42,3.209C51.493,116.668,52.843,116.886,54.21,117.055L54.21,117.055z M12.852,89.503h17.122 c-4.771-8.341-7.332-16.797-7.637-25.371H5.445c0.13,2.934,0.475,5.797,1.034,8.59c0.729,3.646,1.818,7.164,3.264,10.549 l0.004-0.001C10.682,85.442,11.716,87.521,12.852,89.503L12.852,89.503z M5.445,58.747h16.997c0.625-8.4,3.412-16.857,8.407-25.371 H12.852c-1.136,1.982-2.17,4.061-3.105,6.234c-0.019,0.043-0.039,0.086-0.059,0.127C8.269,43.083,7.2,46.557,6.479,50.157 C5.92,52.95,5.575,55.814,5.445,58.747L5.445,58.747z M16.361,27.991h17.938c5.108-7.361,11.862-14.765,20.29-22.212 c-1.496,0.175-2.973,0.408-4.431,0.7c-3.647,0.729-7.164,1.818-10.549,3.264l0.001,0.003c-3.442,1.481-6.647,3.212-9.609,5.2 c-2.968,1.992-5.72,4.255-8.25,6.794l-0.011,0.01h0C19.784,23.7,17.992,25.78,16.361,27.991L16.361,27.991z M68.289,5.778 c8.428,7.447,15.182,14.851,20.291,22.212h17.939c-1.631-2.21-3.424-4.291-5.381-6.24l-0.01-0.01l0,0 c-2.529-2.54-5.281-4.802-8.25-6.794c-2.963-1.988-6.168-3.719-9.609-5.2c-0.043-0.018-0.086-0.038-0.127-0.059 c-3.346-1.418-6.82-2.488-10.42-3.208C71.264,\
                6.187,69.785,5.954,68.289,5.778L68.289,5.778z M110.027,33.376H92.029 c4.996,8.514,7.783,16.971,8.408,25.371h16.998c-0.131-2.934-0.477-5.797-1.035-8.59c-0.73-3.646-1.818-7.164-3.264-10.549 l-0.004,0.002C112.197,37.437,111.164,35.358,110.027,33.376L110.027,33.376z M49.106,1.198C53.098,0.399,57.21,0,61.44,0 c4.23,0,8.341,0.399,12.333,1.198c3.934,0.788,7.758,1.97,11.473,3.547c0.051,0.018,0.1,0.037,0.148,0.058 c3.703,1.594,7.197,3.485,10.471,5.684c3.268,2.192,6.291,4.677,9.066,7.462c2.785,2.775,5.27,5.799,7.461,9.065 c2.197,3.275,4.09,6.768,5.684,10.473l-0.004,0.001l0.004,0.009c1.607,3.758,2.809,7.628,3.605,11.609 c0.799,3.992,1.197,8.104,1.197,12.334c0,4.23-0.398,8.343-1.197,12.335c-0.787,3.932-1.971,7.758-3.547,11.472 c-0.018,0.05-0.037,0.099-0.059,0.147c-1.594,3.705-3.486,7.197-5.684,10.472c-2.191,3.267-4.676,6.29-7.461,9.065 c-2.775,2.785-5.799,5.271-9.066,7.462c-3.273,2.198-6.768,4.091-10.471,5.684l-0.002-0.004l-0.01,0.004 c-3.758,1.606-7.629,2.808-11.609,3.604c-3.992,0.799-8.104,1.198-12.333,1.198c-4.229,0-8.342-0.399-12.334-1.198 c-3.933-0.787-7.758-1.97-11.474-3.546c-0.049-0.019-0.098-0.037-0.147-0.059c-3.705-1.593-7.197-3.485-10.472-5.684 c-3.266-2.191-6.29-4.677-9.065-7.462c-2.785-2.775-5.27-5.799-7.461-9.065c-2.198-3.274-4.09-6.767-5.684-10.472l0.004-0.002 l-0.004-0.009c-1.606-3.758-2.808-7.628-3.604-11.609C0.4,69.782,0,65.67,0,61.439c0-4.229,0.4-8.342,1.199-12.334 c0.787-3.933,1.97-7.758,3.546-11.473c0.018-0.049,0.037-0.099,0.058-0.147c1.594-3.705,3.485-7.198,5.684-10.473 c2.192-3.266,4.677-6.29,7.461-9.065c2.775-2.785,5.799-5.27,9.065-7.462c3.275-2.198,6.768-4.09,10.472-5.684l0.001,0.004 l0.009-0.004C41.254,3.197,45.125,1.995,49.106,1.198L49.106,1.198z M64.133,9.268v18.723h17.826 C77.275,21.815,71.34,15.575,64.133,9.268L64.133,9.268z M64.133,33.376v25.371h30.922c-0.699-8.332-3.789-16.788-9.318-25.371 H64.133L64.133,33.376z M64.133,64.132v25.371h22.51c5.328-8.396,8.189-16.854,8.531-25.371H64.133L64.133,64.132z M64.133,94.889 v18.952c7.645-6.283,13.902-12.601,18.746-18.952H64.133L64.133,94.889z M58.747,113.843V94.889H40 C44.843,101.24,51.1,107.559,58.747,113.843L58.747,113.843z M58.747,89.503V64.132H27.706c0.341,8.518,3.201,16.975,8.531,25.371 H58.747L58.747,89.503z M58.747,58.747V33.376H37.143c-5.529,8.583-8.619,17.04-9.319,25.371H58.747L58.747,58.747z M58.747,27.991 V9.266C51.54,15.573,45.604,21.815,40.92,27.991H58.747L58.747,27.991z"/></g></svg>',
            prCatDesc: 'Small scale projects mainly comprised of form-based appli&shycations. \
            I only develop the front end of these simple appli&shycations, \
            with Java&shyScript intera&shycting with the local storage of the browser\
            to store information added by the user. One of them is \
            somewhat more complex, as it simu&shylates a small&shyscale e-shop. \
            It is the only appli&shycation that involves back-end develop&shyment.',
        },
        'otr':{
            prCatName: "Other",
            prCatSvg: '<svg viewBox="0 0 122.75 125.28" id="iot" y="276"><path fill="currentColor" d="M111.09 6.23c3.85 3.85 6.23 9.16 6.23 15.04s-2.38 11.19-6.23 15.04a21.184 21.184 0 01-15.03 6.23c-3.02 0-5.89-.63-8.49-1.76L85.6 44.5c6.61 4.42 10.97 11.95 10.97 20.49 0 7.21-3.1 13.7-8.04 18.21l2.03 2.6c3.2-1.92 6.94-3.03 10.94-3.03 5.87 0 11.19 2.38 15.03 6.23 3.85 3.85 6.23 9.16 6.23 15.04s-2.38 11.19-6.23 15.04c-3.85 3.85-9.16 6.23-15.03 6.23s-11.19-2.38-15.04-6.23-6.23-9.16-6.23-15.04S82.61 92.85 86.46 89c.12-.12.24-.23.36-.35l-1.98-2.67a24.517 24.517 0 01-12.9 3.64c-8.76 0-16.46-4.58-20.82-11.47L39.27 84.3c2.06 3.28 3.25 7.15 3.25 11.31 0 5.87-2.38 11.19-6.23 15.03a21.19 21.19 0 01-15.04 6.23c-5.87 0-11.19-2.38-15.03-6.23C2.38 106.78 0 101.46 0 95.59S2.38 84.4 6.23 80.55s9.16-6.23 15.03-6.23 11.19 2.38 15.04 6.23l.03.04L49.02 74c-1.1-2.79-1.7-5.84-1.7-9.02 0-4.61 1.27-8.93 3.48-12.62l-8.07-6.27a21.184 21.184 0 01-15.65 6.88c-5.87 0-11.19-2.38-15.03-6.23-3.85-3.85-6.23-9.16-6.23-15.04s2.38-11.19 6.23-15.03c3.85-3.85 9.16-6.23 15.03-6.23s11.19 2.38 15.03 6.23c3.85 3.85 6.23 9.16 6.23 15.03 0 3.89-1.04 7.53-2.86 10.67l8.06 6.26c4.51-5.07 11.08-8.27 18.41-8.27 3.4 0 6.63.69 9.58 1.93l2.03-3.82c-.9-.65-1.74-1.38-2.52-2.16-3.85-3.85-6.23-9.16-6.23-15.04s2.38-11.19 6.23-15.04C84.87 2.38 90.19 0 96.06 0s11.19 2.38 15.03 6.23zM74.95 71.04a3.577 3.577 0 010 5.06 3.559 3.559 0 01-5.05 0 3.577 3.577 0 010-5.06 3.559 3.559 0 015.05 0zm4.38-15.56c2.18 1.01 4.34 2.49 6.45 4.48.34.32.51.74.53 1.17.01.43-.14.86-.45 1.2l-.04.04c-.31.31-.72.47-1.13.48-.43.01-.86-.14-1.19-.45l-.03-.03c-1.8-1.69-3.63-2.96-5.45-3.81-1.85-.86-3.7-1.3-5.53-1.33-1.86-.03-3.72.36-5.58 1.15-1.87.8-3.73 2.01-5.55 3.62-.03.03-.06.06-.1.08-.34.27-.75.39-1.14.36-.41-.02-.82-.2-1.12-.53-.03-.03-.06-.06-.08-.1-.27-.33-.39-.75-.36-1.15.03-.43.22-.84.56-1.15 2.13-1.89 4.33-3.31 6.58-4.26 2.25-.95 4.54-1.41 6.85-1.37 2.26.04 4.53.56 6.78 1.6zm-2.72 6.98c1.33.51 2.64 1.28 3.9 2.31l.04.03c.34.29.54.69.58 1.11.04.41-.07.85-.35 1.2l-.04.05c-.29.34-.69.54-1.11.59-.42.04-.87-.08-1.23-.37-.98-.8-1.97-1.39-2.97-1.78-1-.39-2.01-.59-3.01-.58-1 0-2.02.21-3.02.61-1.02.4-2.03 1.01-3.01 1.8-.36.29-.8.41-1.23.37-.42-.04-.83-.25-1.13-.61-.29-.36-.41-.8-.37-1.23v-.03c.05-.42.25-.81.6-1.1 1.27-1.03 2.59-1.81 3.95-2.34 1.37-.53 2.77-.81 4.19-.81 1.44-.01 2.84.25 4.21.78zm-1.66 13.63zM19.03 29.04h1.55V26.9c0-1.77.72-3.37 1.89-4.53a6.418 6.418 0 014.54-1.89c1.77 \
                0 3.37.72 4.53 1.89a6.413 6.413 0 011.89 4.53v2.14h1.23c.27 0 .5.23.5.5v10.57c0 .27-.23.5-.5.5H19.02c-.27 0-.5-.23-.5-.5V29.54c0-.28.23-.5.51-.5zm4.04 0h7.85v-2.18A3.926 3.926 0 0027 22.94a3.926 3.926 0 00-3.92 3.92v2.18h-.01zm-1.81 55.59L9.73 95.93l2.81 1.48 8.65-9.07 8.79 9.07 2.81-1.48-11.53-11.3zm-8.1 13.95l8.12-8.12 8.09 8.12v7.96H13.16v-7.96zm7.29 2.61l-1.07 2.8h3.75l-.99-2.84c.63-.32 1.06-.97 1.06-1.74 0-1.08-.88-1.95-1.95-1.95-1.08 0-1.95.88-1.95 1.95.02.79.49 1.47 1.15 1.78zm87.68.2c-.19.09-.38.2-.57.31-.57.33-1.13.74-1.71 1.21l-1.23-1.4c.42-.39.88-.75 1.37-1.07.39-.25.79-.48 1.21-.67.17-.08.33-.16.5-.23a7.453 7.453 0 00-3.29-3.09c-1.31-.63-2.79-.87-4.22-.74-1.42.14-2.81.66-3.96 1.55-1.32 1.03-2.33 2.56-2.72 4.59l-.12.64-.63.11c-.62.11-1.17.26-1.66.45-.47.18-.89.41-1.26.67-.29.21-.55.45-.76.71-.67.8-.98 1.8-.97 2.81.01 1.03.34 2.07.96 2.92.23.32.5.61.8.86.31.26.66.47 1.05.63.39.16.81.27 1.29.34h18.37c.9-.22 1.68-.51 2.35-.88.67-.37 1.21-.83 1.62-1.37.63-.84.95-2.04.96-3.26.02-1.28-.3-2.57-.91-3.51-.17-.27-.37-.51-.57-.73-.92-.99-2.08-1.41-3.28-1.42-.86-.02-1.76.19-2.62.57zM88.75 20.45c-.57-1.22-.89-2.49-.88-3.8.01-1.31.34-2.66 1.07-4.06 0-.01.01-.02.01-.03.95-1.61 2.28-2.69 3.76-3.29 1.24-.51 2.59-.68 3.91-.56 1.32.12 2.61.54 3.74 1.2 1.43.85 2.61 2.11 3.26 3.7.35.86.59 1.82.62 2.87.03 1.05-.15 2.18-.63 3.37l-3.6 5.6-7.51 1.08c-.37-1.1-.96-2.32-1.72-3.2-.82-.91-1.5-1.75-2.03-2.88zm4.5 10.75c-.35-.96-.32-1.56-.62-2.87l7.89-1.17c-.3 1.4-.03 2.12-.24 3.22-.65 3.47-5.83 4.03-7.03.82zm20.9 60.16c-3.24-3.24-7.71-5.24-12.66-5.24s-9.42 2-12.66 5.24-5.24 7.72-5.24 12.66 2 9.42 5.24 12.66 7.72 5.24 12.66 5.24 9.42-2 12.66-5.24 5.24-7.72 5.24-12.66-2-9.42-5.24-12.66zM108.72 8.6a17.834 17.834 0 00-12.66-5.24c-4.94 0-9.42 2-12.66 5.24s-5.24 7.71-5.24 12.66 2 9.42 5.24 12.66 7.71 5.24 12.66 5.24c4.94 0 9.42-2 12.66-5.24s5.24-7.72 5.24-12.66-2-9.42-5.24-12.66zM39.73 19.03c-3.24-3.24-7.71-5.24-12.66-5.24s-9.42 2-12.66 5.24a17.852 17.852 0 00-5.24 12.66c0 4.94 2 9.42 5.24 12.66s7.71 5.24 12.66 5.24c4.94 0 9.42-2 12.66-5.24s5.24-7.71 5.24-12.66c.01-4.94-2-9.42-5.24-12.66zm-5.81 63.9a17.852 17.852 0 00-12.66-5.24c-4.94 0-9.42 2-12.66 5.24s-5.24 7.71-5.24 12.66c0 4.94 2 9.42 5.24 12.66s7.71 5.24 12.66 5.24c4.94 0 9.42-2 12.66-5.24s5.24-7.71 5.24-12.66c.01-4.95-2-9.42-5.24-12.66z" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
            prCatDesc: 'This is an IoT end-to-end system, developed for \
                under&shystanding web-based tech&shynologies on IoT Systems.\
                The system contains both hard&shyware and soft&shyware\
                compo&shynents. It is a smart switch which can be \
                switched on or off both auto&shymatically and over Wi-Fi (from \
                the user\'s phone).<br><br>&nbsp&nbspThere is also a stand&shyalone appli&shycation, developed in python, for the needs\
                of my free&shylance job as a mixture classi&shyfier and msds author. The \
                appl&shycation inter&shyacts with a data&shybase that contains the pro&shyducts \
                and contains logic for classi&shyfying them.',
        }
    }

    const pageIntro = document.createElement("div");
    pageIntro.classList.add("page-introduction");

    const mainHeading = document.createElement("h2");
    mainHeading.classList.add("main-heading");
    const headingText = document.createElement("span");
    headingText.innerText = "Categories";
    mainHeading.appendChild (headingText);

    const categoriesSection = document.createElement("section");
    categoriesSection.classList.add("categories-container");

    
    Object.keys(URL_PARAMS_PAGES).slice(1).forEach((pr)=>{
        let categoryContainer = document.createElement("div");
        categoryContainer.dataset.category = "";
        categoryContainer.classList.add("app-category");

        let categoryLink = document.createElement("a");
        categoryLink.classList.add("to-content");
        categoryLink.setAttribute("href",`pages/template.html?sr=h&d=${pr}&pr=no&darkMode=${document.URL.match(/(?<=Mode=)\w+$/)[0]}`);
        if (pr === "ml") { //remove once projects added
            categoryLink.removeAttribute("href");
            categoryLink.setAttribute("role", "link");
            categoryLink.setAttribute("area-disabled", "true");
        }
        categoryLink.innerHTML = `${prCats[pr].prCatSvg}<h3 class="app-title">${prCats[pr].prCatName}</h3>`;

        let categoryButton = document.createElement("button");
        categoryButton.dataset.categoryDescriptionButton = "";
        categoryButton.classList.add("more-btn");
        categoryButton.innerHTML = '<svg class="more-info" shape-rendering="geometricPrecision"  fill="currentColor" text-rendering="geometricPrecision"  fill="currentColor" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path fill-rule="nonzero"  fill="currentColor" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>                    \
            <svg class="less-info" shape-rendering="geometricPrecision" fill="currentColor" text-rendering="geometricPrecision"  fill="currentColor" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path fill-rule="nonzero" fill="currentColor" d="M493.12 263.55c4.3 4.28 11.3 4.3 15.62.05 4.33-4.26 4.35-11.19.05-15.47L263.83 3.22c-4.3-4.27-11.3-4.3-15.63-.04L3.21 248.13c-4.3 4.28-4.28 11.21.05 15.47 4.32 4.25 11.32 4.23 15.62-.05L255.99 26.48l237.13 237.07z"/></svg>                ';

        let categoryDescription = document.createElement("p");
        categoryDescription.classList.add("app-category-description");
        categoryDescription.innerHTML = prCats[pr].prCatDesc;

        categoryContainer.append(categoryLink, categoryButton, categoryDescription);
        categoriesSection.appendChild(categoryContainer);
    });

    const note = document.createElement("p");
    note.classList.add("note-of-importance");
    note.innerHTML = '<strong>Note:</strong> Currently, most projects are getting updated, \
        with both impro&shyving code (from the semester initially developed) \
        and adding more featu&shyres. I would be extre&shymely grateful for any feedback\
        or tips on how to improve or change these projects.\
        It would help immen&shysely my develop&shyment as a programmer.';
    
    parent.append(pageIntro, mainHeading, categoriesSection, note);
}