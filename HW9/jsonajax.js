var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              //readyState == 4 means the request is finished and response is ready
              //status == 200 "OK"
              //When readyState is 4 and status is 200, the response is ready:
                if (this.readyState == 4 && this.status == 200) {
$(document).ready(function () {
    $("button").click(function () {
        $("#pokeInfo").load("pokedex.json", function (responseText) {
            var pokemon = JSON.parse(responseText);
            $("#pokeInfo").html("Name: " + pokemon.name
                + "<br>Number:" + pokemon.num + "<br>Height:" + pokemon.height + "<br>Weight:"
                + pokemon.weight);
        });
    });
});

xhttp.open("GET", "pokedex.json", true); 
            xhttp.send();
        }}