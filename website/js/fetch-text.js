let hometext = "../../txt/homepage_text.txt"
let abouttext = "../../txt/about_intro_text.txt"
let pietveerman = "../../txt/pietveerman.txt"
let arnoldmuhren = "../../txt/arnoldmuhren.txt"
let harmenveerman = "../../txt/harmenveerman.txt"
let keesbaars = "../../txt/keesbaars.txt"
let johantol = "../../txt/johantol.txt"
let nieuwsmuziekwijk = "../../txt/nieuwsmuziekwijk.txt"

fetchText("homepage-text", hometext);
fetchText("about-text", johantol);
fetchText("pietveerman-text", pietveerman);
fetchText("arnoldmuhren-text", arnoldmuhren);
fetchText("harmenveerman-text", harmenveerman);
fetchText("keesbaars-text", keesbaars);
fetchText("nieuws-text", nieuwsmuziekwijk);

function fetchText(target, file){
    if(document.getElementById(target) != null){
        fetch (file)
        .then(x => x.text())
        .then(y => document.getElementById(target).innerHTML = y);
    }
}