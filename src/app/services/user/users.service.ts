import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { randApi } from 'src/app/models/randApi.model';
import { FirebaseService } from '../firebase/firebase.service';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private firebaseService: FirebaseService
  ) {}
  createUser() :User{
    let user:User = this.getEmptyUser();
    let randUser = this.http.get<{ results: randApi[] }>('https://randomuser.me/api/?inc=gender,name,location,email,dob,picture,login')
      .pipe(map((res) => res.results[0]));

    randUser.subscribe((newUser) => {
      
      user.gender = newUser.gender;
      user.fullname = `${newUser.name.first} ${newUser.name.last}`;
      user.birthdate = newUser.dob.date;
      user.email = newUser.email;
      user.location.address = `${newUser.location.country} 
          ${newUser.location.city} 
          ${newUser.location.street.name} 
          ${newUser.location.street.number}`;
      user.location.lat = newUser.location.coordinates.latitude;
      user.location.lng = newUser.location.coordinates.longitude;
      user.imgURLs = newUser.picture.large;
      console.log(newUser)
      user.password = newUser.login.password
      user.joinedAt = Date.now()+ ''
          // this.firebaseService.addItem(user)
    });

    return user;
  }

  getEmptyUser():User{
    return {
      // _id: '',
      gender: '',
      fullname: '',
      birthdate: '',
      email: '',
      password: '',
      location: {
        address: '',
        lat: '',
        lng: '',
      },
      imgURLs: [],
      joinedAt: '',
      prefs: {
        age: '',
        gender: '',
        animal: '',
        city: '',
      },
  }
}
}

  // info:string
  //   private _usersDb:User[] = [{
  //     _id,
  //   fullname,
  //   gender,
  //   birthdate,
  //   email,
  //   password,
  //   location: {
  //     address:
  //     lat:
  //     lng:
  //   }
  //   imgURLs: []
  //   joinedAt:
  //   prefs: {
  //     age:
  //     gender:
  //     animal:
  //     city:
  //   };
  //   favourites:
  //   adoptions:
  //   listings:
  //   }]
  // }

