import { API_ROUTES } from './api';
import './App.css'
import { Card, ContainerCards } from './Components'
import { useFetch } from './hooks'
import { Data } from './interfaces';


function App() {
  const { data, error, isLoading } = useFetch<Data>(API_ROUTES.champions);

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
