import {Effect} from 'effect'
import {getCoverArts} from '~/effects/cover-art/coverarchive.api'
import {getReleases} from '~/effects/release/release.api'
import type {ReleaseSearchFields} from '~/effects/release/release.types'

export const fetchReleasesCoverArts = (props: ReleaseSearchFields) =>
  Effect.gen(function* () {
    const releases = yield* getReleases(props)
    return yield* Effect.partition(releases, ({id}) => getCoverArts(id), {
      concurrency: 'unbounded'
    })
  })
