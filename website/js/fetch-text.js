let hometext = "../../txt/homepage_text.txt"

if(document.getElementById("homepage-text") != null){
    fetch (hometext)
    .then(x => x.text())
    .then(y => document.getElementById("homepage-text").innerHTML = y);
}

let abouttext = "../../txt/about_intro_text.txt"

if(document.getElementById("about-text") != null){
    fetch (abouttext)
    .then(x => x.text())
    .then(y => document.getElementById("about-text").innerHTML = y);
}
