const cuisineBtn = document.querySelector('.cuisine')
const cuisineBackground = document.querySelector('.cuisine-options-background')
const applyBtn = document.querySelector('.apply')
const cuisineOptions = document.querySelector('.cuisine-options')



// cuisineBtn.addeventlistener('click', () => {
//     cusineBackground.style.display = 'block'
// })

cuisineBtn.addEventListener('click', () => {
    if (cuisineBackground.style.display == 'none' && cuisineOptions.style.display == 'none'
    ){
        cuisineBackground.style.display = 'block'
        cuisineOptions.style.display = 'flex'
    }
    else{
        cuisineBackground.style.display = 'none'
        cuisineOptions.style.display = 'none'
    }
})

applyBtn.addEventListener('click', () => {
    if (cuisineBackground.style.display == 'block' && cuisineOptions.style.display == 'flex'){
        cuisineBackground.style.display = 'none'
        cuisineOptions.style.display = 'none'
    }
    else{
        cuisineBackground.style.display = 'block'
        cuisineOptions.style.display = 'block'
    }
})

