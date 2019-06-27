(function() {
    const mainContainerElement = document.querySelector('.fetching-users')

    function renderListItem (name, img) {
        const containerElement = document.createElement ('div')
        const imgElement = document.createElement ('img')
        const nameElement = document.createElement ('p')

        containerElement.style.display = 'flex'
        imgElement.style.borderRadius = '50%'
        imgElement.style.width = '50px'
        imgElement.style.height = '50px'
        imgElement.style.margin = '10px'

        nameElement.innerText = name
        imgElement.setAttribute('src', img)

        containerElement.appendChild(imgElement)
        containerElement.appendChild(nameElement)

        return containerElement

    }

    function render () {
        const item = renderListItem ('Mateusz Choma', 'https://randomuser.me/api/portraits/women/52.jpg')

        mainContainerElement.appendChild(item)
    }

    render()

})()