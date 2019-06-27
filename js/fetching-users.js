(function () {
    const mainContainerElement = document.querySelector('.fetching-users')

    let users = [
        {
            name: {
                first: 'Mateusz',
                last: 'Choma'
            },
            picture: {
                thumbnail: 'https://randomuser.me/api/portraits/women/52.jpg'
            }
        }
    ]

    function renderListItem(name, img) {
        const containerElement = document.createElement('div')
        const imgElement = document.createElement('img')
        const nameElement = document.createElement('p')

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

    function render() {

        for (let i = 0; i < users.length; i++) {
            const user = users[i]

            const firstName = user.name.first
            const lastName = user.name.last
            const img = user.picture.thumbnail
            const name = firstName + ' ' + lastName

            const item = renderListItem(name, img)

            mainContainerElement.appendChild(item)
        }
    }

    render()

})()