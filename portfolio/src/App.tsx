import './App.css'
import { Card, ContainerCards } from './Components'
import { useFetch } from './hooks'
import { Data } from './interfaces';

const url = 'https://ddragon.leagueoflegends.com/cdn/15.2.1/data/es_AR/champion.json'

function App() {
  const { data, error, isLoading } = useFetch<Data>(url);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ContainerCards>
        {data &&
          Object.values(data.data).map((champ) => (
            <Card key={champ.key} id={champ.id} blurb={champ.blurb} />
          ))
        }
      </ContainerCards>
    </>
  );
}

export default App;
