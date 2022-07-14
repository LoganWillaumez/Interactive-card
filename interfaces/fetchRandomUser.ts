export interface randomUser {
  name: { title: string; first: string; last: string };
  location: { country: string };
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
