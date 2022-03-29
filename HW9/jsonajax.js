$("button").click(function () {
    $.getJSON("pokedex.json", function (data) {
        var pokedex;
        $.each(data, function (i, pokemon) {
            pokedex = $('<tr/>');
            pokedex.append("<td>" + pokemon.name + "</td>");
            pokedex.append("<td>" + pokemon.num + "</td>");
            pokedex.append("<td>" + pokemon.height + "</td>");
            pokedex.append("<td>" + pokemon.weight + "</td>");
            $('table').append(pokedex);
        });
    });
});
