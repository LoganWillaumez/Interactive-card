import './Map.scss';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { randomUser } from '../../../interfaces/fetchRandomUser';
import { Oval } from 'react-loader-spinner';
import { useMemo } from 'react';
export const Map = ({ dataUser }: { dataUser: randomUser[] }) => {
  // connection to the googlemap Api
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_KEY
  });

  // Random latitude and longitude, not based on datas of location we receive from the api
  const center = useMemo(
    () => ({
      lat: Number(dataUser[0]?.location.coordinates.latitude),
      lng: Number(dataUser[0]?.location.coordinates.longitude)
    }),
    []
  );
  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap zoom={5} center={center} mapContainerClassName="map-container">
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <Oval
          ariaLabel="loading-indicator"
          height={100}
          width={100}
          strokeWidth={5}
          strokeWidthSecondary={1}
          color="blue"
          secondaryColor="white"
        />
      )}
    </div>
  );
};
