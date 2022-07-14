import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './Header/Header';

const baseURL = 'https://randomuser.me/api/';

function App() {
  const [dataUser, setDataUser] = useState([]);
  const [isClick, setIsClick] = useState<boolean>(false);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDataUser(response.data.results[0]);
    });
  }, []);
  return (
    <div className='App'>
      <Header dataUser={dataUser} />
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
