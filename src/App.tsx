import { useEffect, useState, CSSProperties } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.scss';
import Header from './Header/Header';
import { fetchRandomUser, randomUser } from '../interfaces/fetchRandomUser';
import ClipLoader from 'react-spinners/ClipLoader';
import { Routes, Route, Link } from 'react-router-dom';
import { Map } from './Map/Map';
import { Contact } from './Contact/Contact';

const baseURL = 'https://randomuser.me/api/?results=3';

const override: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function App() {
  const [dataUser, setDataUser] = useState<randomUser[]>([]);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    // Bug connu ; double call d'API en React strict mode (version 18)
    axios.get<fetchRandomUser[]>(baseURL).then((response: AxiosResponse) => {
      setDataUser(response.data.results);
      setLoading(false);
    });
  }, []);
  console.log(`🚀 ~ dataUser`, dataUser);
  return (
    <div className='App'>
      {loading ? (
        <ClipLoader
          color='blue'
          loading={loading}
          size={150}
          cssOverride={override}
        />
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

/*
name {title,first,last}
location:{country}
login:{username,uuid}
phone : number
picture : {large,medium,thumbnail}
registered : { date:string,age:number(years)}
*/
