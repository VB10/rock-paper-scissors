$('#group2').on('click', 'button', function (event) {
    var userChoice = (this.id);
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        //ROCK
        switch (userChoice) {
            case objectEnum.PAPER:
                alert('won');
                break;
            case objectEnum.SCISSORS:
                alert('loose')
            default:
                alert('draw')
                break;
        }

    } else if (computerChoice <= 0.67) {
        //PAPER
        computerChoice = objectEnum.PAPER;
        switch (userChoice) {
            case objectEnum.SCISSORS:
                alert('won');
                break;
            case objectEnum.PAPER:
                alert('loose')
                break;
            default:
                alert('draw')
                break;
        }
    } else {
        computerChoice = objectEnum.SCISSORS;
        //SCISSORS

        switch (userChoice) {
            case objectEnum.ROCK:
                alert('won');
                break;
            case objectEnum.PAPER:
                alert('loose')
                break;
            default:
                alert('draw')
                break;
        }
    }
});


let objectEnum = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}