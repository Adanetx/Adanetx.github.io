var bit = true;

function red() {
    bit = false;
    $('#status').text('You lose!').css('color', 'red');
    $('.boundary').each(function() {
        $(this).addClass('youlose')
    });
}

function reset() {
    bit = true;
    $('#status').text('Game Started!').css('color', 'green');
    $('.boundary').each(function() {
        $(this).removeClass('youlose');
    });

    $('#maze .boundary').on('mouseover', red);
    $('#end').on('mouseover', end);
}

function end() {
    let status2 = bit == true ? 'You win! :' : 'Sorry, you lost! :['
    $('#status').text(status2);
    $('#maze .boundary').off();
}

$(function() {
    $('#maze .boundary').off();
    $('#end').off();
    $('#start').click(reset);


});