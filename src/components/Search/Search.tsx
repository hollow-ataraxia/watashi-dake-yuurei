import {Effect} from 'effect'
import {type FC, useEffect, useState} from 'react'
import useDebounce from '~/hooks/useDebounce.ts'
import {fetchReleasesCoverArts} from '~/services/getReleaseCoverArt.ts'
import {coverArtStore} from '~/stores/coverArt.ts'

const Search: FC = () => {
  const [value, setValuer] = useState('Sakura Day’s')
  const debouncedValue = useDebounce(value, 300)

  useEffect(() => {
    if (debouncedValue.length > 0)
      Effect.runPromise(fetchReleasesCoverArts({release: debouncedValue}))
        .then(([, covers]) => covers.flat())
        .then(covers => {
          coverArtStore.list = covers
        })
  }, [debouncedValue])

  return (
    <input
      type="search"
      value={value}
      onChange={e => setValuer(e.currentTarget.value)}
    />
  )
}

export default Search
