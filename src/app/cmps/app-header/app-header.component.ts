import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/users.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  // info:object
  // info$: Observable<object> | Promise<string>;
  result: any;
  result$: Observable<any>;
  constructor(private userService: UserService,private firebaseService:FirebaseService,private af:AuthService) {}

  ngOnInit(): void {  
    this.af.getUser()
  
  //  let user = this.userService.createUser();
  //  console.log("file: app-header.component.ts ~ line 19 ~ AppHeaderComponent ~ user", user)
  //  let users
  //   // console.log("file: app-header.component.ts ~ line 18 ~ AppHeaderComponent ~ result", this.result$)
  //     this.firebaseService.getItems().snapshotChanges().pipe(
  //       map(changes =>
  //         changes.map(c =>
  //           ({ _id: c.payload.doc.id, ...c.payload.doc.data() })
  //         )
  //       )
  //     ).subscribe(data => {
  //       users = data;
  //       console.log(users)
  //     });
  //   // this.firebaseService.addItem(user);
  }
}
