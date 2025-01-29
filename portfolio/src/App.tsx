import './App.css'
import { ContainerCards } from './Components'
import { useFetch } from './hooks'
import { Data } from './interfaces/champion';

const url = 'https://ddragon.leagueoflegends.com/cdn/15.2.1/data/es_AR/champion.json'


function App() {
  const { data, error, isLoading } = useFetch<Data>(url);
  
  console.log(data);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ContainerCards>
        {data &&
          Object.values(data.data).map((champ) => (
            <div key={champ.id}>
              <h1>{champ.id}</h1>
              <p>{champ.blurb}</p>
              <p>{champ.key}</p>
            </div>
          ))
        }
      </ContainerCards>
    </>
  );
}

export default App;
