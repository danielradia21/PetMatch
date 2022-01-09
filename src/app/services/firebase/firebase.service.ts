import { Injectable, Type } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  where,
} from '@angular/fire/firestore';
import { BehaviorSubject, first, map, Observable, pipe, Subject, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Org } from 'src/app/models/org.model';
import { TypeofExpr } from '@angular/compiler';
import { refs } from 'src/app/models/refs.model';
import { AuthService } from '../auth/auth.service';
import { AuthCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private itemUid$: Subject<string | null>;
  private userRef: AngularFirestoreCollection<User>;
  private orgsRef: AngularFirestoreCollection<Org>;

  // private refs:refs
  // private refs = {
  //   userRef:null,
  //   orgsRef:null

  // }
  private users: Observable<User[]>;
  private orgs: Observable<Org[]>;
  private userDbPath = '/users';
  private orgDbPath = '/orgs';
  user$: Observable<User[]>;
  constructor(private db: AngularFirestore, private afs: AuthService) {
    this.itemUid$ = new Subject<string | null>();
    this.userRef = db.collection<User>(this.userDbPath);
    this.orgsRef = db.collection<Org>(this.orgDbPath);
    // this.orgsRef = db.collection<Org>(this.dbOrgPath)
    this.users = this.userRef.valueChanges({ idField: 'customID' });
    this.orgs = this.orgsRef.valueChanges({ idField: 'customID' });
  }

  // getItems():Observable<User[]>{
  getItems(type: string): AngularFirestoreCollection<User | Org> {
    // console.log(this.usersRef);
    if (type === 'user') return this.userRef;
    return this.orgsRef;

    // return collectionData(usersRef,{idField:'_id'})
  }

  addNewUser(user: User) {
    const id = user.uid;
    this.userRef.doc(id).set(user);
  }

  addOrg(org: Org) {
    this.orgsRef.add({ ...org });
    let user = this.afs.getUser().pipe(first()).subscribe((value) => {
    this.userRef.doc(`${value!.uid}/orgs`).update(org._id)
    })
    // console.log(this.afs.getUser());
  }
  // addItem(type:keyof refs,item:User|Org):Psromise<any> {

  //   return this.refs[type].add({...item})
  // }
  // addItem(user: User) {
  //   this.usersRef.add({ ...user });
  // }
  getById(type: string, id: string) {
    if (type === 'user') return this.userRef.doc(id).valueChanges();
    else return this.orgsRef.doc(id);
  }
  updateItem(type: string, id: string, item: User | Org): Promise<void> {
    if (type === 'user') return this.userRef.doc(id).update(item as User);
    return this.orgsRef.doc(id).update(item as Org);
  }
  delete(type: string, id: string): Promise<void> {
    if (type === 'user') return this.userRef.doc(id).delete();
    return this.orgsRef.doc(id).delete();
  }

  /// ORG FIREBASE CRUD, COMBINE LATER FOR A GENERIC CODE MARKUP
  // addOrg(org: Org): void {
  //   this.orgsRef.add({ ...org })
  // }
  getOrgById(id: string): Observable<Org | undefined> {
    return this.orgsRef.doc(id).valueChanges();
  }
  updateOrg(id: string, org: Org): Promise<void> {
    return this.orgsRef.doc(id).update(org);
  }
  deleteOrg(id: string): Promise<void> {
    return this.orgsRef.doc(id).delete();
  }
}
