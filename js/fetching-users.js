(function() {

    function renderListItem (name, img) {
        const containerElement = document.createElement ('div')
        const imgElement = document.createElement ('img')
        const nameElement = document.createElement ('p')

        containerElement.style.display = 'flex'
        imgElement.style.borderRadius = '50%'
        imgElement.style.width = '50px'
        imgElement.style.height = '50px'
        imgElement.style.margin = '10px'

        containerElement.appendChild(imgElement)
        containerElement.appendChild(nameElement)

        return containerElement

    }



})()