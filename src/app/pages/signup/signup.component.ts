import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {}
 
  async onSubmit(form: NgForm) {
    let uid = await this.authService.createUser(
      form.value.fullname,
      form.value.email,
      form.value.password
    );
    this.router.navigateByUrl(`/profile/${uid}`);
    form.reset();
  }
}
