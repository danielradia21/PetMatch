import { Injectable } from '@angular/core';
import { Org } from 'src/app/models/org.model';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(private firebaseService: FirebaseService) { }

  newOrg(org: Org) {
    this.firebaseService.addOrg(org)
  }
}

