import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Observable, Subscriber, tap } from 'rxjs';
import { UserService } from '../user/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
<<<<<<< HEAD
  public signedIn: Promise<unknown>;
  public usedUser: Observable<unknown>
  constructor(public auth: AngularFireAuth) {
=======
//   public signedIn: Promise<unknown>;
//   public usedUser: Observable<unknown>
  constructor(public auth: AngularFireAuth, public userService: UserService) {
>>>>>>> b98b0deb8f8e53c5ed8aa3503800d40cc9beac14
    // this.signedIn = new Promise((subscriber) => {
    //   this.auth.onAuthStateChanged(subscriber);
    // });
    // this.usedUser = new Observable((Subscriber) => {
    //   Subscriber.next(this.auth.user)
    //   this.auth.onAuthStateChanged(Subscriber)
    // })
  }


  getUser() {
  //  this.auth.user.subscribe(user => {
  //    console.log(user)
  //   })
    return this.auth.user
    // this.usedUser.subscribe(user=>{
    //   console.log(user)
    // })
  }

  async signIn(email: string, password: string) {

    try {
      if (!email || !password) throw new Error('Invalid email and/or password');
      await this.auth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.log('Sign in failed', error);
      return false;
    }
  }

  async signOut(): Promise<boolean> {
    try {
      await this.auth.signOut();
      console.log('im out');
      return true;
    } catch (error) {
      console.log('Sign out failed', error);
      return false;
    }
  }

  async createUser(email: string, password: string): Promise<string> {
    try {
      let { user } = await this.auth.createUserWithEmailAndPassword(email, password)
      return user!.uid;
    } catch (err) {
      throw err;
    }
  }

  // emailSignup(email: string, password: string) {
  //   this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //   .then(value => {
  //    console.log('Sucess', value);
  //    this.router.navigateByUrl('/profile');
  //   })
  //   .catch(error => {
  //     console.log('Something went wrong: ', error);
  //   });
  // }

  //  private auth = getAuth()
  //  createUserWithEmailAndPassword(auth, email, password):void{
  //    .then((userCredential) => {
  //      // Signed in
  //      const user = userCredential.user;
  //      // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  //   }
}
