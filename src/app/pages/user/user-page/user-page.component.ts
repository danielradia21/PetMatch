import { Component, Input, OnInit } from '@angular/core';
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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public firebaseService: FirebaseService
    ) {}
    user: User;



    async updateUser(formValue:object){
      this.user = {...this.user,...formValue}
      this.firebaseService.updateItem(this.user._id as string,this.user)
    }

  async onSubmit(form: NgForm) {
    let check = {...this.user,...form.value}
    console.log(form.value.prefs.animal);
    
    console.log("file: user-page.component.ts ~ line 25 ~ UserPageComponent ~ check", check)
  }


  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.firebaseService.getById(id).subscribe((item) => {
      this.user = item as User;
      });
    });
  }
}
