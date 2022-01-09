import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Org } from 'src/app/models/org.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private itemUid$: Subject<string | null>;
  public usersRef: AngularFirestoreCollection<User>;
  private orgsRef: AngularFirestoreCollection<Org>
  private items: Observable<User[]>;
  private dbPath = '/users';
  private dbOrgPath = '/orgs';
  user$: Observable<User[]>;
  constructor(private db: AngularFirestore) {
    this.itemUid$ = new Subject<string | null>();
    this.usersRef = db.collection<User>(this.dbPath);
    this.orgsRef = db.collection<Org>(this.dbOrgPath)
    this.items = this.usersRef.valueChanges({ idField: 'customID' });
  }

  // getItems():Observable<User[]>{
  getItems(): AngularFirestoreCollection<User> {
    // console.log(this.usersRef);
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


  /// ORG FIREBASE CRUD, COMBINE LATER FOR A GENERIC CODE MARKUP
  addOrg(org: Org): void {
    this.orgsRef.add({ ...org })
  }
  getOrgById(id: string): Observable<Org | undefined> {
    return this.orgsRef.doc(id).valueChanges()
  }
  updateOrg(id: string, org: Org): Promise<void> {
    return this.orgsRef.doc(id).update(org)
  }
  deleteOrg(id: string): Promise<void> {
    return this.orgsRef.doc(id).delete()
  }
}