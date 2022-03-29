$(document).ready(function () {
    $("button").click(function () {
        $.getJSON("./pokedex.json", function (data) {
            var row;
            $.each(data, function (i, index) {
                row = $('<tr/>');
                row.append("<td>" + index.name + "</td>");
                row.append("<td>" + index.num + "</td>");
                row.append("<td>" + index.type[0, 1] + "</td>");
                row.append("<td>" + index.height + "</td>");
                row.append("<td>" + index.weight + "</td>");
                $('table').append(row);
            });
        });
    });
});
