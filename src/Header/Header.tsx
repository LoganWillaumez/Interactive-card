import './Header.scss';

function Header({ dataUser }) {
  return (
    <div className='sidebar'>
      <div className='profil'>
        <h2 className='profil__firstName'>{dataUser?.name.first}</h2>
        <div className='profil__location'>
          <i className='fa-solid fa-location-pin' />
          <p className='profil__city'>{dataUser?.location.country}</p>
        </div>
        <div className='profil__picture'>
          <a
            className='profil__icons profil__icons--email'
            href={`mailto:${dataUser?.email}`}
          >
            <i className='fa-solid fa-envelope' />
          </a>
          <img
            className='profil__img'
            src={dataUser?.picture.medium}
            alt={`picture of ${dataUser?.name.first}`}
          />
          <a
            className='profil__icons profil__icons--phone'
            href={`tel:${dataUser?.phone}`}
          >
            <i className='fa-solid fa-phone' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
