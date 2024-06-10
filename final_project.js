const hamburgerBtn = document.querySelector(".hamburger-button")
const optionMenu = document.querySelector(".hamburger-menu")
const cuisineBtn = document.querySelector('.cuisine')
const cuisineBackground = document.querySelector('.cuisine-options-background')
const applyBtn = document.querySelector('.apply')
const cuisineOptions = document.querySelector('.cuisine-options')
const searchBtn = document.querySelector('.search')
const locationImg = document.querySelector('.roughlocation')








const africanOptions = document.querySelector('.african')
const americanOptions = document.querySelector('.american')
const asianOptions = document.querySelector('.asian')
const candyOptions = document.querySelector('.candy')
const creoleOptions = document.querySelector('.creole')
const deliOptions = document.querySelector('.deli')
const greekOptions = document.querySelector('.hawaiian')
const hawaiianOptions = document.querySelector('.hawaiian')
const icecreamOptions = document.querySelector('.ice-cream')
const indianOptions = document.querySelector('.indian')
const italianOptions = document.querySelector('.italian')
const jamaicanOptions = document.querySelector('.jamaican')
const mediterraneanOptions = document.querySelector('.mediterraneanOptions')
const mexicanOptions = document.querySelector('.mexican')
const middleeasternOptions = document.querySelector('.middle-eastern')

hamburgerBtn.addEventListener('click', () => {
    if (optionMenu.style.display == 'none'){
        optionMenu.style.display = 'flex'
    }
    else{
        optionMenu.style.display = 'none'
    }
})



console.log(africanOptions)









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


function checked() {

}


searchBtn.addEventListener('click', () => {

    locationImg.style.display = 'none'

    if (document.getElementById('checkafrican').checked){
        africanOptions.style.display = 'block'
    } 
    if (document.getElementById('checkamerican').checked){
        americanOptions.style.display = 'block'
    }
    if (document.getElementById('checkasian').checked){
        asianOptions.style.display = 'block'
    }
    if (document.getElementById('checkcandy').checked){
        candyOptions.style.display = 'block'
    }
    if (document.getElementById('checkcreole').checked){
        creoleOptions.style.display = 'block'
    }
    if (document.getElementById('checkdeli').checked){
        deliOptions.style.display = 'block'
    }
    if (document.getElementById('checkgreek').checked){
        greekOptions.style.display = 'block'
    }
    if (document.getElementById('checkhawaiian').checked){
        hawaiianOptions.style.display = 'block'
    }
    if (document.getElementById('checkicecream').checked){
        icecreamOptions.style.display = 'block'
    }
    if (document.getElementById('checkindian').checked){
        indianOptions.style.display = 'block'
    }
    if (document.getElementById('checkitalian').checked){
        italianOptions.style.display = 'block'
    }
    if (document.getElementById('checkjamaican').checked){
        jamaicanOptions.style.display = 'block'
    }
    if (document.getElementById('checkmediterranean').checked){
        mediterraneanOptions.style.display = 'block'
    }
    if (document.getElementById('checkmexican').checked){
        americanOptions.style.display = 'block'
    }
    if (document.getElementById('checkmiddleeastern').checked){
        middleeasternOptions.style.display = 'block'
    }
})






















































// const ipKey = '811cc88b7311461cad03dad894f8ce98'

// async function getIp() {
//     const ipUrl = `https://api.geoapify.com/v1/ipinfo?&apiKey=${ipKey}`
//     try {
//         const ipResponse = await fetch(ipUrl)
//         const ipData = await ipResponse.json()
//         const lat = ipData.location.latitude
//         const lon = ipData.location.longitude
//         const coords = [lat, lon]
//         console.log(lat,lon)
//         return coords


//     } catch (error) {
//         console.error(error)
//     }
    
// }

// getIp().then(coords => getLocation(coords))

// const locationKey = 'iSYtIzIzOP+djB+BgnewpQ==mkCx35h8AIRGD9Qw'


// async function getLocation(coords) {

//     const lat = coords[0]
//     const lon = coords[1]
//     let url = `https://api.api-ninjas.com/v1/city?minlat=${lat}&minlon=${lon}maxlat=${lat}&maxlon=${lon}&appid=${locationKey}`
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }

// getLocation()