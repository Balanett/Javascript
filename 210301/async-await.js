// Country Details:

let url = "https://restcountries.eu/rest/v2/alpha/"
const fetchCountryInfo = async (code1, code2, code3) => {
    let response1 = await fetch('https://restcountries.eu/rest/v2/alpha/'+code1);
    let data1 = await response1.json();
    console.log(code1, data1);

    let response2 = await fetch('https://restcountries.eu/rest/v2/alpha/'+code2);
    let data2 = await response2.json();
    console.log(code2, data2);

    let response3 = await fetch('https://restcountries.eu/rest/v2/alpha/'+code3);
    let data3 = await response3.json();
    console.log(code3, data3);
}

fetchCountryInfo("col", "hun", "afg").then();