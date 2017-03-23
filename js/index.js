$(document).ready(function () {  
  $(window).on("load",function(){
    $('#loader-wrapper').delay(1000).fadeOut(500);
  })
 
})
//END OF PRELOADER

//START OF COUNTDOWN
var end = new Date('08/03/2017 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 0;

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days;
    }

    timer = setInterval(showRemaining, 1000);

//END OF COUNTDOWN

//START OF TABS
document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
}
//END OF TABS
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


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});


$(window).resize(function(){
   var width = $(window).width();
   if(width < 768){
       $('#navbar-right-check').removeClass('cl-effect-21');
       console.log('works');
   }
})
.resize();





