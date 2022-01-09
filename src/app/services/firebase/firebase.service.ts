import { Injectable, Type } from '@angular/core';
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
  private orgsRef: AngularFirestoreCollection<Org>
  // private refs:refs

  
  // private refs = {
  //   userRef:null,
  //   orgsRef:null

  // }
  private users: Observable<User[]>;
  private orgs:Observable<Org[]>
  private userDbPath = '/users';
  private orgDbPath = '/orgs'
  user$: Observable<User[]>;
  constructor(private db: AngularFirestore,private afs:AuthService) {
    
    this.itemUid$ = new Subject<string | null>();
    this.userRef = db.collection<User>(this.userDbPath);
    this.orgsRef = db.collection<Org>(this.orgDbPath)
    // this.orgsRef = db.collection<Org>(this.dbOrgPath)
    this.users = this.userRef.valueChanges({ idField: 'customID' });
    // this.orgs = this.orgsRef.valueChanges({idField:'customID'})
  }

  // getItems():Observable<User[]>{
  getItems(type:string): AngularFirestoreCollection<User|Org> {
    // console.log(this.usersRef);
    if(type==='user') return this.userRef
    return this.orgsRef
 
    // return collectionData(usersRef,{idField:'_id'})
  }

  addNewUser(user: User) {
    const id = user.uid;
    this.userRef.doc(id).set(user);
  }

  
    addOrg(org:Org){
    this.orgsRef.add({...org})
    // let uid:string|undefined
    let user:Observable<User|undefined>
    let unsubscribe =  this.afs.getUser().subscribe(currUser=>{
      user = this.getById(currUser!.uid)  
      user.subscribe(currUserA=>{
        console.log(currUserA)
      })
    })
 
      // let id = currUser.id
      // this.userRef.doc(currUser.id).update()
 
    
  }

  // addItem(type:keyof refs,item:User|Org):Promise<any> {
  
  //   return this.refs[type].add({...item})
  // }
  // addItem(user: User) {
  //   this.usersRef.add({ ...user });
  // }
  getById(id: string) {
    return this.userRef.doc(id).valueChanges();
  }
  updateItem(id: string, item: any): Promise<void> {
    return this.userRef.doc(id).update(item);
  }
  delete(id: string): Promise<void> {
    return this.userRef.doc(id).delete();
  }


  /// ORG FIREBASE CRUD, COMBINE LATER FOR A GENERIC CODE MARKUP
  // addOrg(org: Org): void {
  //   this.orgsRef.add({ ...org })
  // }
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