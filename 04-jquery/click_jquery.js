let numberOfClicks = 0;

function button_clicked() {
    numberOfClicks++;
}

function show_clicks() {
    $('#clicked-text').html('clicked: ' + numberOfClicks).show();
    setTimeout(clear_clicks, 5000);
}

function clear_clicks() {
    $('#clicked-text').hide();
}