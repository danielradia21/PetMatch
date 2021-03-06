import { Pet } from './pet.model';

export interface User {
  _id?: string;
  uid?:string;
  fullname: string;
  gender?: string;
  birthdate?: string;
  email: string;
  password: string;
  location: {
    address?: string;
    lat?: string;
    lng?: string;
  };
  imgURLs?: Array<string>;
  joinedAt: string;
  prefs?: {
    age: string;
    gender: string;
    animal: string;
    city: string;
  };
  orgs?: object[]
  favourites?: Array<Pet>;
  adoptions?: Array<Pet>;
  listings?: Array<Pet>;
}
