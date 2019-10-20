// check localstorage support
if (typeof(Storage) !== "undefined") {
    console.log('Code for localStorage/sessionStorage.');
} else {
    console.log('Sorry! No Web Storage support..');
}

// save user state on local storage
function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }    
}

// run program when document ready
document.addEventListener("DOMContentLoaded", function(event) { 
    // check whenever the toggle is light or dark
    const toggle = document.querySelector('input[type="checkbox"]#toggle');
    toggle.addEventListener('change', switchTheme, false);

    // check and implement user state
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    console.log(currentTheme);
    if (currentTheme) {
        if (currentTheme === 'dark') {
            document.querySelector('input[type="checkbox"]#toggle').checked = true;
        }
    }
});