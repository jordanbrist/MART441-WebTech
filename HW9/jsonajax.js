$(document).ready(function () {
    $("button").click(function () {
        $.getJSON("data/pokedex.json", function (data) {
            var row;
            $.each(data, function (i, index) {
                row = $('<tr/>');
                row.append("<td>" + index.name + "</td>");
                row.append("<td>" + index.id + "</td>");
                row.append("<td>" + index.recclass + "</td>");
                row.append("<td>" + index.mass + "</td>");
                $('table').append(row);
            });
        });
    });
});