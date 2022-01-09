import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrgService } from 'src/app/services/org/org.service';
@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss'],
})
export class OrgComponent implements OnInit {

  constructor(private orgService: OrgService, private authService: AuthService) { }
  onSubmit(form: NgForm) {
    this.orgService.newOrg(form.value)
  }
  ngOnInit(): void {
  }

}
