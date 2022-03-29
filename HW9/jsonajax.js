$(document).ready(function () {
    $("button").click(function () {
        $.getJSON("pokedex.json", function (data) {
            $.each(data, function (i, pokemon) {
                $('<tr/>').append("<td>" + pokemon.name + "</td>");
                $('<tr/>').append("<td>" + pokemon.num + "</td>");
                $('<tr/>').append("<td>" + pokemon.height + "</td>");
                $('<tr/>').append("<td>" + pokemon.weight + "</td>");
            });
        });
    });
});


