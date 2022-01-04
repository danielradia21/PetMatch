import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() updateUser = new EventEmitter<User>()
  @Input() user: User

  constructor() { }


  async onSubmit(form: NgForm) {
    this.updateUser.emit(form.value)
  }





  ngOnInit(): void {
  }

}
