import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  async signIn(form: NgForm): Promise<void> {
    if (await this.authService.signIn(form.value.email, form.value.password)) {
      this.router.navigateByUrl(`/`);
    }
    // this.authService.signIn(form.value.email, form.value.password)
  }
  ngOnInit(): void {
  }

}
