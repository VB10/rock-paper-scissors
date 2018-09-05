function checkGame(userChoice) {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        //ROCK
        switch (userChoice) {
            case objectEnum.PAPER:
                return true;
            case objectEnum.SCISSORS:
                break;
            default:
                break;
        }
        return false;


    } else if (computerChoice <= 0.67) {
        //PAPER
        computerChoice = objectEnum.PAPER;
        switch (userChoice) {
            case objectEnum.SCISSORS:
                return true;
            case objectEnum.PAPER:
                break;
            default:
                break;
        }
        return false;
    } else {
        computerChoice = objectEnum.SCISSORS;
        //SCISSORS

        switch (userChoice) {
            case objectEnum.ROCK:
                return true;
            case objectEnum.PAPER:
                break;
            default:
                break;
        }
        return false;
    }
}


let objectEnum = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}
module.exports = {
    sayHello: function () {
        return 'a';
    },
    chck: checkGame
}