const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function gameUpdate(player) {
    if(!isGameOver) {
    player.score += 1;
    if(player.score === winningScore) {
        isGameOver = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
    gameUpdate(p1);

})

p2.button.addEventListener("click", function () {
  gameUpdate(p2)
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
    }
}


