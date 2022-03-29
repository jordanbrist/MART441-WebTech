$("button").click(function () {
    $.getJSON("pokedex.json", function (data) {
        var pokemon;
        $.each(data, function (i, index) {
            pokemon = $('<tr/>');
            pokemon.append("<td>" + pokemon.name + "</td>");
            pokemon.append("<td>" + pokemon.num + "</td>");
            pokemon.append("<td>" + pokemon.height + "</td>");
            pokemon.append("<td>" + pokemon.weight + "</td>");
            var yr = index.year.substring(0, 4);
            pokemon.append("<td>" + yr + "</td>");
            $('table').append(pokemon);
        });
    });
});
