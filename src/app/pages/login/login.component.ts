import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Observable<User>
  constructor(public authService: AuthService, private userService: UserService, private router: Router) { }
  async signIn(form: NgForm): Promise<void> {
    if (await this.authService.signIn(form.value.email, form.value.password)) {
      this.router.navigateByUrl(`/`);
    }
    // this.authService.signIn(form.value.email, form.value.password)
  }
  ngOnInit(): void {

  }

}
