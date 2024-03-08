let editedPlayer = 0
let activePlayer = 0
let currentRound = 1
let gameIsOver = false

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
]

const playerConfigOverlayElement = document.getElementById('config-overlay')
const backdropElement = document.getElementById('backdrop')
const formElement = document.querySelector('form')
const errorsOutputElement = document.getElementById('config-errors')
const gameAreaElement = document.getElementById('active-game')
const activePlayerNameElement = document.getElementById('active-player-name')
const gameOverElement = document.getElementById('game-over')

const editPlayer1ButtonElement = document.getElementById('edit-player-1-button')
const editPlayer2ButtonElement = document.getElementById('edit-player-2-button')
const cancelConfigButtonElement = document.getElementById('cancel-config-button')
const startNewGameButton = document.getElementById('start-game-button')
const gameBoardElement = document.getElementById('game-board')

editPlayer1ButtonElement.addEventListener('click', openPlayerConfig)
editPlayer2ButtonElement.addEventListener('click', openPlayerConfig)

cancelConfigButtonElement.addEventListener('click', closePlayerConfig)
backdropElement.addEventListener('click', closePlayerConfig)

formElement.addEventListener('submit', savePlayerConfig)

startNewGameButton.addEventListener('click', startNewGame)

gameBoardElement.addEventListener('click', selectGameField)
