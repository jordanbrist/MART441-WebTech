$(document).ready(function () {
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
});


(function ($) {
    $.fn.green = function () {
        this.css("background-color", "green");
        this.css("color", "white");
        this.css("font-size", 40);
        return this;
    };
}(jQuery));