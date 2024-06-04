import {Schema} from '@effect/schema'

const ArtistCredit = Schema.Struct({
  name: Schema.String,
  artist: Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    'sort-name': Schema.String
  })
})

export const Release = Schema.Struct({
  id: Schema.String,
  title: Schema.String,
  'artist-credit': Schema.Array(ArtistCredit)
})

export type Release = typeof Release.Type
export const decodeReleases = Schema.Array(Release).pipe(Schema.decode)
