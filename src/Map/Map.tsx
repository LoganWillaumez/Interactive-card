import './Map.scss';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_KEY,
  });
  return (
    <div className='map'>
      {isLoaded ? (
        <GoogleMap
          zoom={10}
          center={{ lat: 44, lng: -80 }}
          mapContainerClassName='map-container'
        />
      ) : (
        <div>no</div>
      )}
    </div>
  );
};
