import { useEffect, useState, CSSProperties } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.scss';
import Header from './Components/Header/Header';
import { fetchRandomUser, randomUser } from '../interfaces/fetchRandomUser';
import ClipLoader from 'react-spinners/ClipLoader';
import { Routes, Route } from 'react-router-dom';
import { Map } from './Components/Map/Map';
import { Contact } from './Components/Contact/Contact';
import { Oval } from 'react-loader-spinner';

const baseURL = 'https://randomuser.me/api/?results=3';

const override: CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};
function App() {
  const [dataUser, setDataUser] = useState<randomUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    // Bug connu ; double call d'API en React strict mode (version 18)
    axios.get<fetchRandomUser[]>(baseURL).then((response: AxiosResponse) => {
      setDataUser(response.data.results);
      setLoading(false);
    });
  }, []);
  return (
    <div className='App'>
      {loading ? (
        <div className='App__loader'>
          <Oval
            ariaLabel='loading-indicator'
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color='blue'
            secondaryColor='white'
          />
        </div>
      ) : (
        <div className='container'>
          <Header dataUser={dataUser} />
          <Routes>
            <Route path='/' element={<Map dataUser={dataUser} />} />
            <Route path='/map' element={<Contact />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
