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
    currentCategoryDescription = ev.target.closest("[category-data]").querySelector(".app-category-description");
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

    if (window.matchMedia("(min-width: 901px)").matches) {
        // if the last dropdown button does not have
        // a span sibling element there is no need to remove it (we come from a big screen)
        if (hambButtons[hambButtons.length -1].nextElementSibling.tagName !== "SPAN") return;

        // otherwise when there is a change of screen size to a larger one delete the span elements
        hambButtons.forEach(function (button, index) {
            if (index !== 0) button.nextElementSibling.remove();     
        });

        if (main.querySelector(".page-introduction") === null) return;
        main.querySelector(".page-introduction").remove();
        
        return;
    }
    //im case of a mobile screen we need to create the drop-down open button
    addDropdownButtons(hambButtons);  
    
});

window.addEventListener("load", (ev) => {

    if (window.innerWidth < 901) {
        addDropdownButtons(document.querySelectorAll("[data-dropdown-button]"))
    }
    
    // mobile-screen expanding drop-down sub-menus
    document.querySelectorAll(".expand-down-arrow").forEach( dropdown=>{
        dropdown.addEventListener("click", ev=>{
            let submenu = ev.target.nextElementSibling;
            submenu.classList.toggle("open");
        })
    })

})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (ev) => {
    if (ev.matches) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

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


