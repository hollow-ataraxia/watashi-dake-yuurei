import type {FC} from 'react'
import {useSnapshot} from 'valtio'
import {coverArtStore} from './stores/coverArt.ts'
import Search from './components/Search/Search.tsx'

const App: FC = () => {
  const coverArts = useSnapshot(coverArtStore)

  return (
    <div>
      <h3>Watashi Dake Yuurei</h3>
      <Search />
      <figure>
        {coverArts.list.map(cover => (
          <img
            key={cover.id}
            src={cover.thumbnails.small}
            alt={cover.comment}
          />
        ))}
      </figure>
    </div>
  )
}

export default App
