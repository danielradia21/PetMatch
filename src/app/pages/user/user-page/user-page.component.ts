import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.route.params.subscribe(async ({ id }) => {
      let check = await this.firebaseService.getById(id)
      console.log( check)
    });
  }
}
