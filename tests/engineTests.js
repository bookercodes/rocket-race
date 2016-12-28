// @flow

const test = require('ava')
const engine = require('../engine')

test('addPlayer', t => {
  const sut = engine.createRace()
  const expectedName = 'foo'
  const expectedId = sut.addPlayer(expectedName)
  const { name: actualName, uuid: actualId } = sut.players[0]
  t.true(actualName === expectedName)
  t.true(actualId === expectedId)
})

test('race doesn\'t start until there are at least two players', t => {
  const sut = engine.createRace()
  sut.addPlayer('foo')
  t.truthy(sut.getState() === 'STOPPED')
  sut.addPlayer('bar')
  t.truthy(sut.getState() === 'STARTING')
})
