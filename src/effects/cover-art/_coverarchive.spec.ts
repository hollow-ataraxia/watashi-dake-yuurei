import {Effect} from 'effect'
import {expect, test} from 'vitest'
import {getCoverArts} from './coverarchive.api'

test('getCoverArts', async () => {
  const list = [
    '237e402d-3603-422a-9d3e-9db9969e378c',
    '237e402d-3603-422a-9d3e-9db99s69e378c',
    '8785ae5d-d591-4b85-86dc-e1f0594ff2e3'
  ]

  const program = Effect.partition(list, getCoverArts)

  const [err] = await Effect.runPromise(program)
  expect(err).toBeInstanceOf(Array)
})
