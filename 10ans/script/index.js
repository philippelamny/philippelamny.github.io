async function getevents() {

    return await fetch("./script/events.json", {method: 'GET', headers: { 'Accept': 'application/json' }})
        .then(function(response) {
            return response.json()
        })
        .then(function(events) {
            console.log(events)
        })

}

getevents()
