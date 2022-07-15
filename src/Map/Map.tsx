import './Map.scss';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { fetchRandomUser, randomUser } from '../../interfaces/fetchRandomUser';
import { useMemo } from 'react';
export const Map = ({ dataUser }: { dataUser: randomUser[] }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_KEY,
  });

  // Random latitude and longitude, not based on datas of location
  const center = useMemo(
    () => ({
      lat: Number(dataUser[0]?.location.coordinates.latitude),
      lng: Number(dataUser[0]?.location.coordinates.longitude),
    }),
    []
  );
  return (
    <div className='map'>
      {isLoaded ? (
        <GoogleMap
          zoom={5}
          center={center}
          mapContainerClassName='map-container'
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div>no</div>
      )}
    </div>
  );
};
