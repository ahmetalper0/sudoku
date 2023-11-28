function get_random_color() {

    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}

function change_background_color(selector) {

    var divs = document.querySelectorAll(selector);
    var random_color = get_random_color();

    for (var i = 0; i < divs.length; i++) {

        var div = divs[i];

        div.style.backgroundColor = random_color;

    }

}

setInterval(function() {
    change_background_color('#box-1 .cell');
    change_background_color('#box-2 .cell');
    change_background_color('#box-3 .cell');
    change_background_color('#box-4 .cell');
    change_background_color('#box-5 .cell');
    change_background_color('#box-6 .cell');
    change_background_color('#box-7 .cell');
    change_background_color('#box-8 .cell');
    change_background_color('#box-9 .cell');
}, 100);
