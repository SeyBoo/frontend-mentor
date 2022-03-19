const nav = document.querySelector('.nav_toggle')


nav.addEventListener('click', function() {
    const toggle = document.querySelector('.toggle')
    if (toggle) {
        document.querySelector('header').classList.remove("toggle");
        
    } else {
        document.querySelector('header').classList.add("toggle");
    }
})