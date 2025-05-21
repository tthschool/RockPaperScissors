const playRound = 5 
let userWin = 0
let computerWin = 0


function process(num) {
    if (num <= 3) {
        return 'rock'
    } else if (num >=4 && num <= 7) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function judge(computerPicked , userPicked) {
    if(computerPicked == 'rock') {
        if(userPicked == 'rock') {
            return 0
        } else if(userPicked == 'paper') {
            userWin += 1;
            
        } else {
            computerPicked += 1;
            
        }
    } else if (computerPicked == 'paper') {
        if (userPicked == 'paper') {
            return 0
        } else if (userPicked == 'rock') {
            computerWin += 1

        } else {
            userWin += 1;

        }
    } else if (computerPicked == 'scissors') {
        if(userPicked == 'scissors' ) {
            return 0
        } else if (userPicked == 'paper') {
            computerWin += 1

        } else {
            userWin += 1 

        }
    }
}

function computerPick() {
    const computerPicked = Math.ceil(Math.random() * 10)
    return process(computerPicked)
}

function userPick() {
    const userPicked = prompt()
    return userPicked
}


for (let index = 0; index < playRound; index++) {
    let computerPicked = computerPick()
    let userPicked = userPick()
    judge(computerPicked , userPicked);


}

if (userWin > computerWin) {
    console.log("user win")
} else {
    console.log("computer win");
    
}