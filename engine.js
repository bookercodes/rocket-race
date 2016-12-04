const uuid = require('uuid/v4')

function createGame () {
  return {
    players: [],
    uuid: uuid(),
    secondsUntilGameStarts: 10,
    addPlayer (name) {
      const player = {
        name,
        uuid: uuid()
      }
      this.players.push(player)
      if (this.players.length >= 2) {
        const timer = setInterval(() => {
          console.log(this.secondsUntilGameStarts)
          this.secondsUntilGameStarts -= 1
          if (this.secondsUntilGameStarts === 0) {
            clearInterval(timer)
            this.start()
          }
        }, 1000)
      }
      return player.uuid
    },
    start () {
      console.log('game started')
    }
  }
}

const game = createGame()
const player1 = game.addPlayer({
  displayName: 'Alex Booker'
})

// type a word and post it each time it's sent
// word
