import { Directive, HostListener } from '@angular/core';
import { UserService } from '../services/user/users.service';
import firebase from '@firebase/app-compat'
import { AuthService } from '../services/auth/auth.service';

@Directive({
  selector: '[appGoogleAuth]'
})
export class GoogleAuthDirective {

  constructor(private afAuth: AuthService, private userService: UserService) { }
  @HostListener('click')
  onclick() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.afAuth.auth.currentUser.then(user => {
          if (user) {
            if (user.metadata.creationTime === user.metadata.lastSignInTime) {
              console.log('signedUp');
              this.userService.newUser(user.uid, user.email, user.displayName)
            } else {
              console.log('loggedIn');
            }
          }
        })
      })
  }
}
