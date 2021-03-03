document.addEventListener('onload', () => {
    let numberOfClicks = 0;
    let clickedTextElement = document.getElementById('clicked-text');

    function button_clicked() {
        numberOfClicks++;
    }

    function show_clicks() {
        clickedTextElement.innerHTML = 'clicked: ' + numberOfClicks;
        clickedTextElement.style.display = 'inline';
        setTimeout(clear_clicks, 5000);
    }

    function clear_clicks() {
        clickedTextElement.style.display = 'none';
    }
})