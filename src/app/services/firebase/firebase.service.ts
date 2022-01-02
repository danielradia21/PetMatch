import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  public userCollection: AngularFirestoreCollection<User>;
  user$: Observable<User[]>;
  constructor(firestore: AngularFirestore) {
    this.userCollection = firestore.collection<User>('users');
  }
  addItem(user: User) {
    this.userCollection.add(user);
  }
}
