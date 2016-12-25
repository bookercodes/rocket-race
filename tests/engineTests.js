// @flow

const test = require('ava')
const engine = require('../engine')

test('race doesn\'t start', t => {
  const sut = engine.createRace()
  t.false(sut.started)
})

test('addPlayer', t => {
  const sut = engine.createRace()
  const expectedName = 'foo'
  const expectedId = sut.addPlayer(expectedName)
  const {
    name: actualName,
    uuid: actualId
  } = sut.players[0]
  t.true(actualName === expectedName)
  t.true(actualId === expectedId)
})
