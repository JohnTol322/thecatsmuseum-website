var modal = document.getElementById("myModal");
var modalImg = document.getElementById("nivo-image")
var captionText = document.getElementById("caption");
var img = document.querySelectorAll(".aboutimage").forEach(element => {
  element.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = "<a href='../../images/" + this.alt + "'>klik hier voor artikel</a>";
}
});;

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}