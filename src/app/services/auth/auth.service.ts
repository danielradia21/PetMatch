import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Observable } from 'rxjs';
import { UserService } from '../user/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public signedIn: Observable<any>;
  constructor(public auth: AngularFireAuth, public userService: UserService) {
    this.signedIn = new Observable((subscriber) => {
      this.auth.onAuthStateChanged(subscriber);
    });
  }

  // async signIn(email: string, password: string) {
  //   try {
  //     if (!email || !password) throw new Error('Invalid email and/or password');
  //     await this.auth.signInWithEmailAndPassword(email, password);
  //     return true;
  //   } catch (error) {
  //     console.log('Sign in failed', error);
  //     return false;
  //   }
  // }

  // async signOut() {
  //   try {
  //     await this.auth.signOut();
  //     return true;
  //   } catch (error) {
  //     console.log('Sign out failed', error);
  //     return false;
  //   }
  // }

  async createUser(fullname: string, email: string, password: string): Promise<string> {
    try {
      let { user } = await this.auth.createUserWithEmailAndPassword(email, password)
      await this.userService.newUser(user!.uid, email, fullname);
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
