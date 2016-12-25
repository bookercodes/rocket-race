// @flow

const test = require('ava')
const engine = require('../engine')

test('race doesn\'t start', t => {
  const race = engine.createRace()
  t.false(race.started)
})
