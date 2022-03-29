$("button").click(function(){
    $.getJSON("pokedex.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });

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
