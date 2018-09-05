var assert = require('assert');
var loginController = require('../src/game').chck;

describe('Test Game', function () {
    it('try value', function () {
        var isValid = loginController(objectEnum.ROCK)
        assert.equal(isValid, false);
    });

    it('try value', function () {
        var isValid = loginController(objectEnum.ROCK)
        assert.equal(isValid, false);
    });
    it('try value', function () {
        var isValid = loginController("")
        assert.equal(isValid, false);
    });

});
let objectEnum = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}