let file = "../../txt/homepage_text.txt"

if(document.getElementById("homepage-text") != null){
    fetch (file)
    .then(x => x.text())
    .then(y => document.getElementById("homepage-text").innerHTML = y);
}
