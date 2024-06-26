let timer
let alphaState = {
    health: 100,
    clean: 100,
    happy: 100,
    full: 100
}
let maxValue = 100
let minValue = 0

function validateAction(property) {
    (alphaState[property] == minValue || alphaState[property] == 100) ? false : true;
}

function living(){
    while (alphaState.health < 0) return true;
    return false
}

function happyUpdate() {
    let averageState = Math.floor((alphaState.health + alphaState.clean + alphaState.full) / 3)
    if (Math.floor(Math.random() * maxValue) >= averageState) alphaState.happy--;
}

function cleanUpdate() {
    (Math.floor((Math.random() * maxValue) + 1))
}

function fullUpdate() {
    (Math.floor((Math.random() * maxValue) + 1))
}