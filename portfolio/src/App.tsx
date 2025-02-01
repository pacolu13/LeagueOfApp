import { API_ROUTES } from './api';
import { Card, ContainerCards } from './Components'
import { useFetch } from './hooks'
import { Data } from './interfaces';
import './App.css';


function App() {
  const { data, error, isLoading } = useFetch<Data>(API_ROUTES.champions);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className='App'>
        <h1>League of Legends Champions</h1>
        <ContainerCards>
          {data &&
            Object.values(data.data).map((champ) => (
              <Card key={champ.key} id={champ.id} />
            ))
          }
        </ContainerCards>
      </div>

    </>
  );
}

export default App;
