import './Header.scss';
import { randomUser } from '../../interfaces/fetchRandomUser';
import { MenuFriends } from '../MenuFriends/MenuFriends';
import { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

function Header({ dataUser }: { dataUser: randomUser[] }) {
  const [friendsOpen, setFriendsOpen] = useState<boolean>(false);
  const toggleFriends = () => {
    setFriendsOpen(!friendsOpen);
  };
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };
  return (
    <div className='sidebar'>
      <div className='profil'>
        <h2 className='profil__firstName'>{`${dataUser[0]?.name.first}, ${dataUser[0]?.dob.age}`}</h2>
        <div className='profil__location'>
          <i className='profil__point fa-solid fa-location-pin' />
          <p className='profil__city'>{`${dataUser[0]?.location.city}, ${dataUser[0]?.location.country}`}</p>
        </div>
        <div className='profil__picture'>
          <img
            className='profil__img'
            src={dataUser[0]?.picture.large}
            alt={`picture of ${dataUser[0]?.name.first}`}
          />
          {/* <div className='profil__social'>
            <a
              className='profil__icons profil__icons--email'
              href={`mailto:${dataUser[0]?.email}`}
            >
              <i className='fa-solid fa-envelope' />
            </a>
            <a
              className='profil__icons profil__icons--phone'
              href={`tel:${dataUser[0]?.phone}`}
            >
              <i className='fa-solid fa-phone' />
            </a>
            <button
              type='button'
              className='button--disable profil__icons profil__friends'
            >
              <i className='fa-solid fa-user-group'></i>
            </button>
          </div> */}
        </div>
        <div className='profil__friends'>
          <button
            type='button'
            className='button--disable'
            onClick={() => toggleFriends()}
          >
            <i className='fa-solid fa-user-group'></i>
          </button>
          <MenuFriends
            dataUser={dataUser}
            friendsOpen={friendsOpen}
            toggleFriends={toggleFriends}
          />
        </div>
        <div className='profil__burger'>
          <button
            type='button'
            className='button--disable button__burger'
            onClick={() => toggleBurger()}
          >
            <i className='fa-solid fa-bars'></i>
          </button>
          <BurgerMenu burgerOpen={burgerOpen} toggleBurger={toggleBurger} />
        </div>
      </div>
      <div className='friends'>
        <h4 className='friends__title'>Friends :</h4>
        <div className='friends__data'>
          {dataUser?.map((data, i) => {
            return (
              i !== 0 && (
                <div className='friends__global'>
                  <img
                    className='friends__img'
                    src={data.picture.large}
                    alt=''
                  />
                  <p className='friends__name'>{data.name.first}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className='links'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link--selected' : 'nav-link'
          }
        >
          Map
        </NavLink>
        <NavLink
          to='/map'
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link--selected' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
