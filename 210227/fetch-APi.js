// Fetch API v1 - response.text()

fetch('https://api.github.com/users/Balanett')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText)
        } else {
            return response.text() }
    })
    .then(data => { console.log("Balanett:", data);
    })
    .catch(error => {console.error("error", error);
    })


// Fetch API v2 - response.json()

fetch('https://api.github.com/users/Balanett')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText)
        } else {
            return response.json() }
    })
    .then(data => { console.log("Balanett:", data.name, data.email, data.location, data.bio, data.public_repos );
    })
    .catch(error => {console.error("error", error);
    })
