const WIDTH = 100;
const HEIGHT = 100;
var columns = 3;
var rows = 3;

$(function() {

    init = function() {

        var posX = function(index1) {
            var x = ((index1 % 4) * 100);
            return x;
        };

        var posY = function(index2) {
            var y = (Math.floor(index2 / 4) * 100);
            return y;
        };

        $('#puzzlearea div').each(function(indexOfDiv) {

            var x = posX(indexOfDiv);
            var y = posY(indexOfDiv);
            $(this).addClass('puzzlepiece');
            $(this).css({
                'left': x + 'px',
                'top': y + 'px',
                'backgroundImage': 'url("background.jpg")',
                'backgroundPosition': -x + 'px ' + (-y) + 'px'
            });

            // store x and y for later
            $(this).x = x;
            $(this).y = y;

        });
    };

    init();

    $("#shufflebutton").click(function() {
        init();
        let originaArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        let druggedArray = druggableArray(originalUndruggedArray);

        $("#puzzlearea div").each(function(index13) {
            let newindex13 = druggedArray[index13];
            var placeOfX = function(index1) {
                return (index1 % 4) * 100;
            };
            var placeOfY = function(index1) {
                return Math.floor(index1 / 4) * 100;
            };

            var x = placeOfX(newindex13);
            var y = placeOfY(newindex13);
            var originOfX = placeOfX(index13);
            var originOfY = placeOfY(index13);
            $(this).addClass("puzzlepiece");
            $(this).css({
                'left': x + "px",
                'top': y + "px",
                'background-image': 'url(background.jpg)',
                'background-position': -originOfX + 'px' + -originOfY + 'px',
            });
            $(this).x = x;
            $(this).y = y;
        });
        getRandomEmptyArea(druggedArray);
    });

    $("#puzzlearea div").hover(
        function() {
            $(this).addClass("movablepiece");
        },
        function() {
            $(this).removeClass("movablepiece");
        }
    );

    $("#puzzlearea div").click(function() {
        $("#shufflebutton").off();
        var div = $(this);
        var movingStatus = moveable(div);
        if (movingStatus) {
            moveCells(div);
        } else {
            alert("Sorry, can't Move");
        }
    });


    var druggableArray = function(array12) {
        let elements = array12.length;
        let countedTimeToDragg = elements;
        while (countedTimeToDragg != 0) {
            let randomIndex = Math.floor(Math.random() * elements);
            let randomIndex2 = Math.floor(Math.random() * elements);
            let temp = array12[randomIndex];
            array12[randIdx1] = array12[randomIndex2];
            array12[randomIndex2] = temp;
            countedTimeToDragg -= 1;
        }
        return array12;
    };

    var getRandomEmptyArea = function(array12) {
        let elements = array12.length;
        let divRandomIndex = Math.floor(Math.random() * elements);
        var randomlyCreatedDiv = $("#puzzlearea div")[divRandomIndex];

        let divRandomX = $(randomlyCreatedDiv).position().left;
        let divRandomY = $(randomlyCreatedDiv).position().top;
        $(randomlyCreatedDiv).css({
            top: columns * HEIGHT,
            left: rows * WIDTH,
        });
        rows = divRandomX / 100;
        columns = divRandomY / 100;
    };

    var moveable = function(div) {
        var squareOfX = rows * WIDTH;
        var squareOfY = columns * HEIGHT;

        var elementsCurrentPosition = $(div).position();
        var x = elementsCurrentPosition.left;
        var y = elementsCurrentPosition.top;


        var leftPosition = x + 100;
        var TopToUPPosition = y - 100;

        var rightPosition = x - 100;
        var downPosition = y + 100;

        var leftChecker =
            leftPosition == squareOfX && y == squareOfY ? true : false;
        var rightChecker =
            rightPosition == squareOfX && y == squareOfY ? true : false;
        var topChecker =
            TopToUPPosition == squareOfY && x == squareOfX ? true : false;
        var downChecker =
            downPosition == squareOfY && x == squareOfX ? true : false;
        if (leftChecker || rightChecker || topChecker || downChecker) {
            return true;
        } else {
            return false;
        }
    };

    function moveCells(div) {
        var elementsCurrentPosition = div.position();
        var x = elementsCurrentPosition.left;
        var y = elementsCurrentPosition.top;

        var tx = x / 100;
        var ty = y / 100;
        $(div).css({
            top: columns * HEIGHT,
            left: rows * WIDTH,
        });
        rows = tx;
        columns = ty;
    }
});