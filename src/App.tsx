import "./App.css";
import { useFetch } from "./hooks";

const URL = "https://jsonplaceholder.typicode.com/users";

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

function App() {
  const { data, error, isLoading } = useFetch<Users>(URL);

  if (isLoading) return <div>Cargando</div>;

  if (error) return <div>Ups, ha ocurrido un error!</div>;

  return <>{JSON.stringify(data)}</>;
}

export default App;
