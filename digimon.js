let digimon = {};

let digiName = "";

function setDigiMonster(event = new Event()) {
    digiName = event.target.value;

}

async function findDigiMonster() {
    
    //Fetching response from API
    const httpResponse = await fetch("https://digimon-api.vercel.app/api/digimon/name/" + digiName.toLowerCase());
    //console.log(httpResponse);

    if (httpResponse.status === 400) {
        noDigimon(digiName);
    }
    //Parsing body with JSON
    const body = await httpResponse.json();
    //console.log(body);

    //Storing retrieved object into variable    
    digimon = body;

    //Calling function to display data on screen
    displayDigimon(digimon);
}

function displayDigimon(event) {
    
    let name = event[0].name;
    let level = event[0].level;
    let imgLink = event[0].img;

    //console.log(name);

    const diginfo = document.getElementById("diginfo");

    //Creating the name heading
    const nameHeading = document.createElement('h3');
    nameHeading.innerText = name;

    //Creating the level heading 
    const levelHeading = document.createElement('h4');
    levelHeading.innerText = level;

    //Displaying image onto screen by creating an img element
    const digImage = document.createElement("img");
    
    //The .src property provides the address or URL of media to be considered. const imgLink holds that info
    digImage.src = imgLink;
    
    //Clearing div holding the above info from HTML
    diginfo.innerHTML = "";

    //Append all new elements to div 

    diginfo.appendChild(nameHeading);
    diginfo.appendChild(levelHeading);
    diginfo.appendChild(digImage);
}

function noDigimon(event) {

    const noDigi = document.getElementById("diginfo");

    const noDisplay = document.createElement('h1');
    noDisplay.innerText = `No Data On ${event.charAt(0).toUpperCase() + event.slice(1).toLowerCase()}!`;

    noDigi.innerHTML = "";

    noDigi.appendChild(noDisplay);
}