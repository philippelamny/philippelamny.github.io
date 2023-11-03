const infos = {
    "events": [
        {
            "date": "17:00",
            "title": "XUnderground",
            "description": "Préparation ambiance musicale"
        },
        {
            "date": "18:00",
            "title": "Serveurs/Nounous",
            "description": "Briefing sur l'organisation de la soirée"
        },
        {
            "date": "18:30",
            "title": "Apéro",
            "description": "Arrivé des invités dans la joie et la bonne humeur avec une ambiance musicale année 90.<br>Redécouverte des boys bands"
        },
        {
            "date": "20:00",
            "title": "Tous à table!",
            "description": "Les invités s'installent à table tranquillement.<br>Place à l'explication du jeu MamaLot avec un panier garni pour les premiers. <br>Choix du nom d'équipe par table"
        },
        {
            "date": "20:30",
            "title": "Repas",
            "description": "Service du plat \"Pintade avec des choses\" <br>Service fromage \"Trucs qui sentent mauvais\""
        },
        {
            "date": "21:45",
            "title": "Quizz musicale",
            "description": "La guerre aux rapides buzzz sur des chansons de zinzin. <br>Place à la danse"
        },
        {
            "date": "23:00",
            "title": "Jeu papille",
            "description": "Quelle équipe papillera la première ?"
        },
        {
            "date": "24:00",
            "title": "Entre alcool et conduire",
            "description": "Boisson et café :D"
        },
        {
            "date": "11:00",
            "title": "Tout doit disparaitre",
            "description": "Déco, miamiam..."
        },
        {
            "date": "15:00",
            "title": "Rangement",
            "description": "Des milliers d'euros en moins de 24h"
        }
    ]
}

function getevents() {
    fetch("./script/events.json", {method: 'GET', headers: { 'Accept': 'application/json' }})
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            displayTimeline(data.events)
        })

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

//displayTimeline(infos.events)
getevents()

