var win = true;
$(function() {
    $('#maze .boundary').off();
    $('#end').off();
    $('#start').click(reset);
});

function red() {
    win = false;
    $('#status').text('You lose!').css('color', 'red');
    $('.boundary').each(function() {
        $(this).addClass('youlose')
    });
}

function end() {
    let status2 = win == true ? 'You win! :)' : 'Sorry, you lost! :('
    $('#status').text(status2);
    $('#maze .boundary').off();
}

function reset() {
    win = true;
    $('#status').text('Game Started!').css('color', 'green');
    $('.boundary').each(function() {
        $(this).removeClass('youlose');
    });

    $('#maze .boundary').on('mouseover', red);
    $('#end').on('mouseover', end);
}

function end() {
    let status2 = win == true ? 'You win! :)' : 'Sorry, you lost! :('
    $('#status').text(status2);
    $('#maze .boundary').off();
}