(function () {

  const containerElement = document.querySelector('[data-game="gravity"]')

  const planetElement = document.createElement('div')
  const alienElement = document.createElement('div')

  const tickDuration = 10 // in milliseconds
  const earthGravityAcceleration = -9.81 // in meters per second
  const initialVelocity = 7 // in meters per second
  const pixelsPerMeter = 25 // ratio

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

    planetElement.style.width = '100%'
    planetElement.style.height = '300px'
    planetElement.style.position = 'relative'
    planetElement.style.backgroundColor = 'gray'

    planetElement.appendChild(alienElement)
    containerElement.appendChild(planetElement)
  }

  function move() {
    const time = tickDuration / 1000
    const gravity = earthGravityAcceleration * pixelsPerMeter

    const newPosition = position + velocity * time + (gravity * time * time) / 2
    const newVelocity = velocity + gravity * time

    position = Math.max(0, newPosition)
    velocity = position === 0 ? 0 : newVelocity

    alienElement.style.bottom = position + 'px'

    // uncomment to check current values
    // console.log(position, velocity)
  }

  applyStylesToAlienAndPlanet()

  window.addEventListener(
    'keydown',
    function (event) {
      if (event.key === ' ' && position === 0) {
        velocity = initialVelocity * pixelsPerMeter
      }
    }
  )

  setInterval(
    move,
    tickDuration
  )

})()
