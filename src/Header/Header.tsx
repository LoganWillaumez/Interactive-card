import './Header.scss';
import { randomUser } from '../../interfaces/fetchRandomUser';

function Header({ dataUser }: { dataUser: randomUser[] }) {
  return (
    <div className='sidebar'>
      <div className='profil'>
        <h2 className='profil__firstName'>{dataUser[0]?.name.first}</h2>
        <div className='profil__location'>
          <i className='fa-solid fa-location-pin' />
          <p className='profil__city'>{dataUser[0]?.location.country}</p>
        </div>
        <div className='profil__picture'>
          <a
            className='profil__icons profil__icons--email'
            href={`mailto:${dataUser[0]?.email}`}
          >
            <i className='fa-solid fa-envelope' />
          </a>
          <img
            className='profil__img'
            src={dataUser[0]?.picture.medium}
            alt={`picture of ${dataUser[0]?.name.first}`}
          />
          <a
            className='profil__icons profil__icons--phone'
            href={`tel:${dataUser[0]?.phone}`}
          >
            <i className='fa-solid fa-phone' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
