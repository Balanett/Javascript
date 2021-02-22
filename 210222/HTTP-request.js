const request = new XMLHttpRequest();
let data

request.addEventListener('readystatechange', () => {
    console.log("Ready state: "+request.readyState, "Ready status: "+request.status);
    request.onreadystatechange = function () {
        switch (request.readyState) {
            case 1: alert("Request is not initialized.");
            break;
            case 2: alert("Connection has been established.");
            break;
            case 3: alert("Request is processing.");
            break;
            case 4: alert("Request processed.")
                if (request.status === 200) {
                    data = JSON.parse(request.responseText)
                    console.log(data) }
                else {
                    console.log("Could not fetch data!") }
            break;
        }
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/users/1/todos');
request.send();
