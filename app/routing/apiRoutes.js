var friendsArray = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {
        var originalArray = [];
        for (let i = 0; i < friendsArray.length; i++) {
            var originalArray1 = Object.values(friendsArray[i]).slice(2);
            originalArray.push(originalArray1);
        };
        var postObj = req.body;
        friendsArray.push(postObj);
        var postArray = Object.values(postObj).slice(2);
        match(postArray, originalArray);
        res.json(friendsArray);
    });

    function match(stuff, things) {
        console.log(stuff);
        console.log(things);
        for (let o = 0; o < things.length; o++) {
            var compArray = [];
            console.log(things[o][4]);
            compArray.push(Number(stuff[0]) - Number(things[o][0]));
            compArray.push(Number(stuff[1]) - Number(things[o][1]));
            compArray.push(Number(stuff[2]) - Number(things[o][2]));
            compArray.push(Number(stuff[3]) - Number(things[o][3]));
            compArray.push(Number(stuff[4]) - Number(things[o][4]));
            compArray.push(Number(stuff[5]) - Number(things[o][5]));
            compArray.push(Number(stuff[6]) - Number(things[o][6]));
            compArray.push(Number(stuff[7]) - Number(things[o][7]));
            compArray.push(Number(stuff[8]) - Number(things[o][8]));
            compArray.push(Number(stuff[9]) - Number(things[o][9]));
            console.log(compArray);
            var reducer = (accumulator, currentValue) => accumulator + currentValue;
            var reducedArray = compArray.reduce(reducer);
            console.log(reducedArray);
        }

    }
};