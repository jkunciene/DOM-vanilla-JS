import allCountries from './data.js';
console.log(allCountries);

const my_main_div = document.getElementById('main_div');

//meniu punktai filtravimui
const continents = ['all'];

allCountries.map(country => {
    // console.log(country.name.common);
    if (!continents.includes(country.continents[0]))
        continents.push(country.continents[0]);

    //kurti div kiekvienai saliai
    const one_country_info = document.createElement('div');

    //kurti ideti salies pavadinima
    const my_country_name = document.createElement('h2');
    my_country_name.innerText = country.name.common;
    one_country_info.appendChild(my_country_name);
    //kuriu veliavos img
    const my_img = document.createElement('img');
    my_img.src = country.flags.png;
    one_country_info.appendChild(my_img);

    //kuriu spausdinu sostine
    const my_country_capital = document.createElement('h3');

    if (Array.isArray(country.capital)) {
        //console.log(country.capital[0]);
        my_country_capital.innerText = country.capital[0];
    } else {
        // console.log(" info nerasta...");
        my_country_capital.innerText = "Capital info not found..."
    }

    one_country_info.appendChild(my_country_capital);

    //kuriu spausdinu kontineta
    const one_country_continent = document.createElement('h4');
    one_country_continent.innerText = country.continents;
    one_country_continent.classList.add("continent");
    //console.log(country.continents);
    one_country_info.appendChild(one_country_continent);

    switch (country.continents[0]) {
        case "Europe":
            one_country_continent.style.backgroundColor = "lightgreen";
            break;
        case "Asia":
            one_country_continent.style.backgroundColor = "tomato";
            break;
        case "Africa":
            one_country_continent.style.backgroundColor = "lightgrey";
            break;
        case "Oceania":
            one_country_continent.style.backgroundColor = "lightblue";
            break;
        case "North America":
            one_country_continent.style.backgroundColor = "yellow";
            break;
        case "South America":
            one_country_continent.style.backgroundColor = "orange";
            break;
    }

    if (country.continents == 'Asia') {
        one_country_continent.style.backgroundColor = '#f06585';
    } else if (country.continents == 'Europe') {
        one_country_continent.style.backgroundColor = '#4e8573';
    } else if (country.continents == 'Africa') {
        one_country_continent.style.backgroundColor = '#d387e6';
    }

    //išspausdinti kaimynus

    if (country.borders != undefined) {
        const my_country_border = document.createElement('p');
        my_country_border.innerText = "Neighbours: " + country.borders;
        one_country_info.appendChild(my_country_border);
    }

    //išspausdinti kalbas
    const my_country_language = document.createElement('p')
    if (country.languages != undefined) {
        for (let key in country.languages) {

            my_country_language.innerText += " " + country.languages[key];

        }
        one_country_info.appendChild(my_country_language);
    }

    //išspausdinti valiutas
    const my_country_crrencies = document.createElement('p');
    for (let key in country.currencies) {
        // console.log(country.currencies[key].name);
        my_country_crrencies.innerText = "Currency - " + country.currencies[key].name;
    }

    one_country_info.appendChild(my_country_crrencies);
    //pacioje pabaigoje, sudejus visus elementus

    my_main_div.appendChild(one_country_info);
});

//mygtukai filtravimui
const continents_buttons = document.querySelector('header');

console.log(continents)

continents.forEach(continent => {
    const menuButton = document.createElement('button');
    menuButton.innerText = continent;
    continents_buttons.appendChild(menuButton);
})

const my_buttons = document.getElementsByTagName('button');
const card_continents = document.getElementsByTagName('h4');

for (let one_category of my_buttons) {

    one_category.addEventListener('click',
        () => { getCountry(one_category.innerText) })
}

const getCountry = (continent) => {

   

}

