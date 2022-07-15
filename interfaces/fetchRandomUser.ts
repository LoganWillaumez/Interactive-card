export interface randomUser {
  name: { title: string; first: string; last: string };
  dob: { age: number };
  location: {
    country: string;
    city: string;
    coordinates: { latitude: string; longitude: string };
  };
  login: { username: string; uuid: string };
  phone: number;
  email: string;
  picture: { large: string; medium: string; thumbnail: string };
  registered: { date: string; age: number };
}

export interface fetchRandomUser {
  data: {
    results: randomUser[];
  };
}
