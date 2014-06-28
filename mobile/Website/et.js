var secret = "6984"; //ET
var input = "";
var timer;
var mode = false;

$(document).keyup(function(e) {
    //alert(e.which);
    input += e.which;    
    
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 200);
    
    check_input();
});

function check_input() {
    if(input == secret) {
        //the secret code
        alert('ExactTarget, Marketing Cloud. We are ORANGE. We are awesome!');	
    }
}

$(document).ready(function() {
    setInterval(function() { $('#info').html(); }, 100);
});

