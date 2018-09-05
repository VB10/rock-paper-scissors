function checkGame(userChoice) {
    var computerChoice = Math.random();
    var result = false;
    if (computerChoice < 0.34) {
        //ROCK
        switch (userChoice) {
            case objectEnum.PAPER:
                result = true;
                break;
            case objectEnum.SCISSORS:
                break;
            default:
                break;
        }
    }
     else if (computerChoice <= 0.67) {
        //PAPER
        computerChoice = objectEnum.PAPER;
        switch (userChoice) {
            case objectEnum.SCISSORS:
                result = true;
                break;
            case objectEnum.PAPER:
                break;
            default:
                break;
        }
    } else {
        computerChoice = objectEnum.SCISSORS;
        //SCISSORS

        switch (userChoice) {
            case objectEnum.ROCK:
                result = true;
                break;
            case objectEnum.PAPER:
                break;
            default:
                break;
        }
    }
    return result;

}

 let objectEnum = {
     ROCK: 'rock',
     PAPER: 'paper',
     SCISSORS: 'scissors'
 }
 module.exports = {
    chck: checkGame
}
