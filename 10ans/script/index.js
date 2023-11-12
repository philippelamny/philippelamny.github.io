function getevents() {
    fetch("./script/events.json")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const currentEvent = data.events[0]
            displayTitle(currentEvent.title)
            displayTimeline(currentEvent.timeline)
            displayMarkTable(currentEvent.tableMark)
        })
}

function displayTitle(title) {
    const containerTitle = document.getElementById('main-event')
    containerTitle.innerHTML = title
}

function displayTimeline(events) {
    const containerEvents = document.getElementById('events')
    const dateNow = new Date()
    const hourNow = dateNow.getUTCHours() + ""
    const minuteNow = dateNow.getUTCMinutes() + ""
    const dayNow = dateNow.getUTCDay() + ""
    const monthNow = dateNow.getUTCMonth() + ""
    const timeNow = monthNow.padStart(2, '0') + '/' + dayNow.padStart(2, '0') + ' ' + hourNow.padStart(2, '0') + ':' + minuteNow.padStart(2, '0')
    //const timeNow = '11/25 18:00'
    let prevEvent = null
    let prevElement = null


    events.forEach(event => {
        const li = document.createElement('li')
        li.classList.add("event")

        if (timeNow >= event.date) {
            li.classList.add("active")
            if (prevEvent !== null && prevEvent.date < event.date) {
                prevElement.classList.remove("active")
            }
        }

        li.dataset.pointer = event.dateDisplay
        const title = document.createElement('h4')
        title.classList.add("mb-3")
        title.textContent = event.title

        const description = document.createElement('p')
        description.innerHTML = event.description

        li.appendChild(title)
        li.appendChild(description)

        containerEvents.appendChild(li)

        prevEvent = event
        prevElement = li
    })
}

function displayMarkTable(tables) {
    const containerMarkTables = document.getElementById('mark-tables')
    tables.forEach((table, index) => {
        const li = document.createElement('li')
        li.classList.add("event")

        li.dataset.pointer = `Table #${index}`

        const title = document.createElement('h4')
        title.classList.add("mb-3")
        title.textContent = table.name

        const guessList = document.createElement('ul')
        table.guess.forEach((guessName) => {
            const guess = document.createElement('li')
            guess.classList.add('guess-event')
            guess.innerHTML = guessName
            guessList.appendChild(guess)
        })
        
        li.appendChild(title)
        li.appendChild(guessList)

        containerMarkTables.appendChild(li)
    })
}

getevents()

