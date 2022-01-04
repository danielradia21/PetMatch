import { Component } from '@angular/core';
import { map } from 'rxjs';
import { FirebaseService } from './services/firebase/firebase.service';
import { UserService } from './services/user/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UnI';

  constructor(private userService: UserService ,private firebaseService:FirebaseService) {}
  
  ngOnInit(): void {
    // let user = this.userService.createUser();
    let users
       this.firebaseService.getItems().snapshotChanges().pipe(
         map(changes =>
           changes.map(c =>
             ({ _id: c.payload.doc.id, ...c.payload.doc.data() })
           )
         )
       ).subscribe(data => {
         users = data;
       });
     // this.firebaseService.addItem(user);
   }
}

