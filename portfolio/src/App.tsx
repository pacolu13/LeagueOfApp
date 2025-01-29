import './App.css'
import { ContainerCards } from './Components'
import { useFetch } from './hooks'

const url = 'https://rickandmortyapi.com/api/character/?page=1'

interface Data {
  results: Post[]
}

interface Post {
  id: number
  name: string
  status: string
}

function App() {
  const { data, error, isLoading } = useFetch<Data>(url)
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ContainerCards>
        {data && data.results.map((post) => (
          <div key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.status}</p>
          </div>
        ))}
      </ContainerCards>

    </>
  )
}

export default App
