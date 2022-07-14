import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './App.scss';
import Header from './Header/Header';
import { fetchRandomUser, randomUser } from '../interfaces/fetchRandomUser';

const baseURL = 'https://randomuser.me/api/?results=3';

function App() {
  const [dataUser, setDataUser] = useState<randomUser[]>([]);
  const [isClick, setIsClick] = useState<boolean>(false);
  useEffect(() => {
    axios.get<fetchRandomUser[]>(baseURL).then((response: AxiosResponse) => {
      setDataUser(response.data.results);
    });
  }, []);
  return <div className='App'>{<Header dataUser={dataUser} />}</div>;
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
