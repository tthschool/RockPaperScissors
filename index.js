

function process(num) {
    if (num <= 3) {
        return 'rock'
    } else if (num >=4 && num <= 7) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
const result = document.querySelector('#result')
function judge(computerPicked , userPicked) {
    if(computerPicked == 'rock') {
        if(userPicked == 'rock') {
            return 0
        } else if(userPicked == 'paper') {
            result.innerHTML = "user win"
            
        } else {
            result.innerHTML = "pc win"
            
        }
    } else if (computerPicked == 'paper') {
        if (userPicked == 'paper') {
            return 0
        } else if (userPicked == 'rock') {
            result.innerHTML = "pc win"

        } else {
            result.innerHTML = "user win"


        }
    } else if (computerPicked == 'scissors') {
        if(userPicked == 'scissors' ) {
            return 0
        } else if (userPicked == 'paper') {
            result.innerHTML = "pc win"

        } else {
            result.innerHTML = "user win"


        }
    }
}

function computerPick() {
    const computerPicked = Math.ceil(Math.random() * 10)
    return process(computerPicked)
}

function userPick() {
    const userPicked =  document.querySelector('#user-input')
    return userPicked
}


const btn = document.querySelector('#btn')
btn.addEventListener('click' , () => {
    let computerPicked = computerPick()
    let userPicked = userPick()
    judge(computerPicked , userPicked);
})


