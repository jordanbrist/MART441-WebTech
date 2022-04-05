$(document).ready(function () {

    $("button").click(function() {
        $("#image1").fadeOut(function(){
            $("#Q1").toggle();
        });
        $("circle").fadeIn().animate({left: '250px'})
    });



});