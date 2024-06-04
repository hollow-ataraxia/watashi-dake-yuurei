import {Effect, pipe} from 'effect'
import {makeQuery} from '~/effects/utils/makeSearchQuery.ts'
import {decodeReleases} from './release.schema'
import type {ReleaseSearchFields} from './release.types'

const headers = new Headers({
  Accept: 'application/json',
  'User-Agent': window.navigator.userAgent
})

const fetchMusicbrainzApi = (query: string) =>
  Effect.tryPromise({
    try: () =>
      fetch(`https://musicbrainz.org/ws/2/release/?query=${query}`, {headers})
        .then(res => res.json())
        .then(({releases}) => releases),
    catch: () => new Error('fetchMusicbrainzApi Error')
  })

export const getReleases = (fields: ReleaseSearchFields) =>
  pipe(
    makeQuery(fields),
    Effect.map(encodeURI),
    Effect.andThen(fetchMusicbrainzApi),
    Effect.andThen(decodeReleases)
  )
