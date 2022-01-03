import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if(!form.value.email ||!form.value.fullname || !form.value.password){
      console.log('we have a problem');
      return    
    }
    console.log('form value', form.value);
    form.reset()
  }
}
