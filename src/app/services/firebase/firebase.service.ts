import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  where,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private itemUid$: Subject<string | null>;
  public usersRef: AngularFirestoreCollection<User>;
  private items: Observable<User[]>;
  private dbPath = '/users';
  user$: Observable<User[]>;
  constructor(private db: AngularFirestore) {
    this.itemUid$ = new Subject<string | null>();
    this.usersRef = db.collection<User>(this.dbPath);
    this.items = this.usersRef.valueChanges({ idField: 'customID' });
  }

  // getItems():Observable<User[]>{
  getItems(): AngularFirestoreCollection<User> {
    console.log(this.usersRef);
    return this.usersRef;
    // return collectionData(usersRef,{idField:'_id'})
  }

  addNewUser(user: User) {
    const id = user.uid;
    this.usersRef.doc(id).set(user);
  }

  addItem(user: User) {
    this.usersRef.add({ ...user });
  }

  getById(id: string) {
    return this.usersRef.doc(id).valueChanges();
  }

  updateItem(id: string, item: any): Promise<void> {
    return this.usersRef.doc(id).update(item);
  }

  delete(id: string): Promise<void> {
    return this.usersRef.doc(id).delete();
  }
}