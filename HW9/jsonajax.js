$(document).ready(function () {
    $("button").click(function () {
        $.getJSON("./pokedex.json", function (data) {
            var row;
            var pokemon;
            $.each(data, function (i, index) {
                row = $('<tr/>');
                row.append("<td>" + pokemon.name + "</td>");
                row.append("<td>" + pokemon.num + "</td>");
                row.append("<td>" + pokemon.height + "</td>");
                row.append("<td>" + pokemon.weight + "</td>");
                $('table').append(row);
            });
        });
    });
});


    (function($){
        $.fn.bluey = function () {
            this.css("background-color", "blue");
            this.css("color", "white");
            this.css("font-size", 24);
            return this;
       };
    }(jQuery));
