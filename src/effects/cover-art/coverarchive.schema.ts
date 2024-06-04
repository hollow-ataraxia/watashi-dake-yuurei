import {Schema} from '@effect/schema'

export const Image = Schema.Struct({
  approved: Schema.Boolean,
  back: Schema.Boolean,
  comment: Schema.String,
  edit: Schema.Number,
  front: Schema.Boolean,
  id: Schema.Number,
  image: Schema.String,
  thumbnails: Schema.Struct({
    1200: Schema.String,
    250: Schema.String,
    500: Schema.String,
    large: Schema.String,
    small: Schema.String
  })
})

export const CoverartarchiveResponse = Schema.Struct({
  images: Schema.Array(Image),
  release: Schema.String
})

export type Image = typeof Image.Type
export type CoverartarchiveResponse = typeof CoverartarchiveResponse.Type

export const decodeCoverArtImages = Schema.Array(Image).pipe(Schema.decode)
