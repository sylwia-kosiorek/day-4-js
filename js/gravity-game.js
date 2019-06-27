(function (){

    const containerElement = document.querySelector('[data-game="gravity"]')
const alienElement = document.createElement('div')
const planetElement = document.createElement('div')

const earthGravityAcceleration = -9.81

let position = 0
let velocity = 0

function applyStylesToAlienAndPlanet() {
    alienElement.style.width = '50px'
    alienElement.style.height = '50px'
    alienElement.style.backgroundColor = 'green'

    alienElement.style.position = 'absolute'
    alienElement.style.left = '50%'
    alienElement.style.bottom = position + 'px'
    alienElement.style.transform = 'translateX(-50%)'

    planetElement.style.width='100%'
    planetElement.style.height='300px'
    planetElement.style.position= 'relative'
    planetElement.style.backgroundColor = 'grey'

    planetElement.appendChild(alienElement)
    containerElement.appendChild(planetElement)
}

applyStylesToAlienAndPlanet()

})()
