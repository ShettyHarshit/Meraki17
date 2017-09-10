$(document).ready(function () {  
  $(window).on("load",function(){
    $('#loader-wrapper').delay(1000).fadeOut(500);
    hideStuff();
  })
 
})
//END OF PRELOADER

// START OF EVENTS TAB
function hideStuff() {
    document.getElementById("FA").style.display = "none";
    document.getElementById("PA").style.display = "none";
    document.getElementById("LA").style.display = "none";
    document.getElementById("Gaming").style.display = "none";
    document.getElementById("Menu").style.display = "block";
}

function openEvent(events, eventName) {
    var l, tapcontent, taplinks;
    tapcontent = document.getElementsByClassName("tapcontent");
    for (l = 0; l < tapcontent.length; l++) {
        tapcontent[l].style.display = "none";
    }
    taplinks = document.getElementsByClassName("taplinks");
    for (l = 0; l < taplinks.length; l++) {
        taplinks[l].className = taplinks[l].className.replace(" active", "");
    }
    document.getElementById(eventName).style.display = "block";
    events.currentTarget.className += " active";
}


// END OF EVENTS TAB












