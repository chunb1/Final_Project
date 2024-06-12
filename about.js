const hamburgerBtn = document.querySelector(".hamburger-button")
const optionMenu = document.querySelector(".hamburger-menu")
const hamburgerFill = document.querySelector('.hamburger-filler')


hamburgerBtn.addEventListener('click', () => {
    if (optionMenu.style.display == 'none'){
        optionMenu.style.display = 'flex'
        hamburgerFill.style.display = 'flex'
        // cuisineBackground.style.display = 'flex'

    }
    else{
        optionMenu.style.display = 'none'
        hamburgerFill.style.display = 'none'
        // cuisineBackground.style.display = 'none'
    }
})