let file = "../../txt/homepage_text.txt"

fetch (file)
.then(x => x.text())
.then(y => document.getElementById("homepage-text").innerHTML = y);