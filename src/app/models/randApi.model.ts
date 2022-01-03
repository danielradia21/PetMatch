export interface randApi {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  login:{
    uuid:string
    username:string
    password:string
    salt:string
    md5:string
    sha1:string
    sha256:string
  }
  email: string;
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: never[];
    medium: string;
    thumbnail: string;
  };
}

// "results": [
//     {
//     "gender": "female",
//     "name": {
//     "title": "Ms",
//     "first": "Meral",
//     "last": "Orbay"
//     },
//     "location": {
//     "street": {
//     "number": 4122,
//     "name": "Necatibey Cd"
//     },
//     "city": "Kırşehir",
//     "state": "Nevşehir",
//     "country": "Turkey",
//     "postcode": 24214,
//     "coordinates": {
//     "latitude": "70.1192",
//     "longitude": "84.2033"
//     },
//     "timezone": {
//     "offset": "+5:45",
//     "description": "Kathmandu"
//     }
//     },
//     "email": "meral.orbay@example.com",
//     "dob": {
//     "date": "1974-03-20T19:18:35.089Z",
//     "age": 48
//     },
//     "picture": {
//     "large": "https://randomuser.me/api/portraits/women/51.jpg",
//     "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
//     "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
//     }
//     }
//     ],
