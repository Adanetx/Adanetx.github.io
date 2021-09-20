var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "pug");
var score = 0;
var counter = 0;
const answer = [9, 8, 36, 13, 32];
const numbers = {
    pi: [3, 1, 4, 1, 5],
    fib: [1, 1, 2, 3, 5],
    sq: [1, 4, 9, 16, 25],
    pr: [2, 3, 5, 7, 11],
    pow: [1, 2, 4, 8, 16],
};

app.post('/index', (req, res) => {

    var d = parseInt(req.body.number, 10);

    if (d === answer[counter]) {
        score++;
    }
    counter++;

    if (counter == answer.length) {
        res.locals = { scores: score }
        res.render("sample2")
    }
    // console.log(counter)
    else {
        res.redirect('/');
    }

});
app.get('/', (req, res) => {

    var num = '';
    switch (counter) {
        case 0:
            num = numbers.pi;
            break;
        case 1:
            num = numbers.fib;
            break;
        case 2:
            num = numbers.sq;
            break;
        case 3:
            num = numbers.pr;
            break;
        case 4:
            num = numbers.pow;
            break
    }

    res.locals = { scores: score, x: num };

    res.render("sample")

});
app.listen(8080, () => {
    console.log("server is running");
});