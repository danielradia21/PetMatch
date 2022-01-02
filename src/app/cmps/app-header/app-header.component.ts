import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/users.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
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
  constructor(private userService: UserService,private firebaseService:FirebaseService) {}

  ngOnInit(): void {
   let user = this.userService.createUser();
   console.log("file: app-header.component.ts ~ line 19 ~ AppHeaderComponent ~ user", user)
    // console.log("file: app-header.component.ts ~ line 18 ~ AppHeaderComponent ~ result", this.result$)
    
    // this.firebaseService.addItem(user);
  }
}
