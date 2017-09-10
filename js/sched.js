$(document).ready(function () {  
  $(window).on("load",function(){
    $('#loader-wrapper').delay(1000).fadeOut(500);
  })
 
})


// START OF SCHEDULE TABS
// document.getElementById("xdefaultOpen").click();
function openDay(evt, cityName) {
    var t, xtabcontent, xtablinks;
    xtabcontent = document.getElementsByClassName("xtabcontent");
    for (t = 0; t < xtabcontent.length; t++) {
        xtabcontent[t].style.display = "none";
    }
    xtablinks = document.getElementsByClassName("xtablinks");
    for (t = 0; t < xtablinks.length; t++) {
        xtablinks[t].className = xtablinks[t].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
//END OF SCHEDULE TABS
