import {Effect, pipe} from 'effect'
import {
  type CoverartarchiveResponse,
  decodeCoverArtImages
} from './coverarchive.schema'

const baseURL = new URL('http://coverartarchive.org/release/')

export const getCoverArts = (release: string) =>
  pipe(
    Effect.tryPromise(() => fetch(`${baseURL}/${release}`)),
    Effect.andThen(res => Effect.tryPromise(() => res.json())),
    Effect.andThen((data: CoverartarchiveResponse) => data.images),
    Effect.andThen(decodeCoverArtImages)
  )
