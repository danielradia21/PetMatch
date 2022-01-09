import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public firebaseService: FirebaseService,
    private authService: AuthService
  ) { }
  user: User;


  async updateUser(formValue: object) {
    this.user = { ...this.user, ...formValue }
    this.firebaseService.updateItem(this.user.uid as string, this.user)
  }

  async signOut() {
    await this.authService.signOut()
    this.router.navigateByUrl(`/signup`);
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(({ id }) => {
      this.firebaseService.getById(id).subscribe((item) => {
        this.user = item as User;
      });

    });
<<<<<<< HEAD
    let signedUser = await this.authService.getUser()    
=======
    let signedUser = await this.authService.getUser()
    console.log(signedUser)

>>>>>>> 64e2297ea2473e73431ee8d677f758f9ceca9439
  }
}
