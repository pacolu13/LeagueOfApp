import { API_ROUTES } from '../../api';
import { Card, ContainerCards} from '../../Components'
import { useFetch } from '../../hooks'
import { Data } from '../../interfaces';
import './App.css';

export const Champs = () => {
  const { data, error, isLoading } = useFetch<Data>(API_ROUTES.champions);

  return (
    <>    
      <h1>League of Legends Champions</h1>
      <ContainerCards>
        {data &&
          Object.values(data.data).map((champ) => (
            <Card Champ={champ} type='galery-card' showBtn ={true} />
          ))
        }
      </ContainerCards>
    </>
  );
}
