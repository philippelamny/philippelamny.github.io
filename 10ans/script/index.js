function getevents() {
    fetch("./script/events.json")
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            const currentEvent = data.events[0]
            //displayTitle(currentEvent.title)
            displayTimeline(currentEvent.timeline)

        })

}

function displayTitle(title) {
    const containerTitle = document.getElementById('title')
    containerTitle.innerHTML = title
}

function displayTimeline(events) {
    const containerEvents = document.getElementById('events')
    events.forEach(event => {
        const li = document.createElement('li')
        li.classList.add("event")
        li.dataset.date = event.date

        const title = document.createElement('h4')
        title.classList.add("mb-3")
        title.textContent = event.title
        
        const description = document.createElement('p')
        description.innerHTML  = event.description

        li.appendChild(title)
        li.appendChild(description)

        containerEvents.appendChild(li)
    })
}

getevents()

