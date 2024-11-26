let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestack = document.getElementById("codestack");
let email = document.getElementById("email");
let role = document.getElementById("role");
let randomize = document.getElementById("randomize");
let previousPeers = document.getElementById("previousPeers");

let previousPeer = "";

function getPeerData(){
    return fetch("../data/data.json")
    .then(response => response.json())
    .then(data => {
        return data.peers
    })
}

getPeerData();

function getRandomPeer(peers){
    let randomIndex = Math.floor(Math.random() * peers.length);
    return peers[randomIndex];
}

let counter = 5;
let previousArray = [];

randomize.addEventListener
("click", (event) => {
  getPeerData()
  .then(peers => {
    console.log(peers);
    let randomPeer = getRandomPeer(peers);
    firstName.innerText = randomPeer["firstName"];
    lastName.innerText = randomPeer["lastName"];
    codestack.innerText = randomPeer["codestack"];
    email.innerText = randomPeer["email"];
    role.innerText = randomPeer["role"];

    previousArray.push(`\n${randomPeer["firstName"]} ${randomPeer["lastName"]}`);
    if(previousArray.length > counter){
        previousArray.shift();
    }
    previousPeer = previousArray.join("");
    previousPeers.innerText = previousPeer;
    })
})

