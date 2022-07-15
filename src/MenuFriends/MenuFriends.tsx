import './MenuFriends.scss';
import { randomUser } from '../../interfaces/fetchRandomUser';
export const MenuFriends = ({
  dataUser,
  friendsOpen,
  toggleFriends,
}: {
  dataUser: randomUser[];
  friendsOpen: boolean;
  toggleFriends: Function;
}) => {
  return (
    <div className={`menuFriends ${friendsOpen && 'menuFriends--open'}`}>
      <p className='menuFriends__title'>Friends</p>
      {dataUser?.map((data, i) => {
        return i !== 0 ? (
          <div className='menuFriends__picture'>
            <img className='menuFriends__img' src={data.picture.large} alt='' />
            <p className='menuFriends__name'>{data.name.first}</p>
          </div>
        ) : null;
      })}
      <button
        type='button'
        className='menuFriends__close'
        onClick={() => toggleFriends()}
      >
        <i className='fa-solid fa-x'></i>
      </button>
    </div>
  );
};
