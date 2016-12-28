// @flow

const uuid = require('uuid/v4')

const gameStates = {
  STOPPED: 'STOPPED',
  STARTING: 'STARTING'
}
type GameState = $Keys<typeof gameStates>
type Player = {
  name: string,
  uuid: string
}
type Game = {
  players: Array<Player>,
  uuid: string,
  secondsUntilGameStarts: number,
  getState: () => GameState,
  addPlayer: string => string
}

function createRace (): Game {
  let gameState: GameState = gameStates.STOPPED
  return {
    players: [],
    uuid: uuid(),
    secondsUntilGameStarts: 10,
    getState: function (): GameState {
      return gameState
    },
    addPlayer: function (name: string): string {
      const player = {
        name,
        uuid: uuid()
      }
      this.players.push(player)
      if (this.players.length >= 2) {
        gameState = gameStates.STARTING
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

module.exports = {
  createRace
}
