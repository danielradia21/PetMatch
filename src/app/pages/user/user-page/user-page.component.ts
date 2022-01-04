import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public firebaseService: FirebaseService
  ) {}

 currUser :User | undefined

  async onSubmit(form: NgForm) {
    let check = {...this.currUser,...form.value}
    console.log(form.value.prefs.animal);
    
    console.log("file: user-page.component.ts ~ line 25 ~ UserPageComponent ~ check", check)
  }


  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.firebaseService.getById(id).subscribe((item) => {
      this.currUser = item;
      });
    });
  }
}
