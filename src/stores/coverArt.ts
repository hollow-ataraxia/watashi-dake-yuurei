import {proxy} from 'valtio'
import type {Image} from '~/effects/cover-art/coverarchive.schema.ts'

type CoverArtStore = {list: Image[]}

export const coverArtStore = proxy<CoverArtStore>({list: []})
