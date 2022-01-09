import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Org } from 'src/app/models/org.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrgService } from 'src/app/services/org/org.service';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['./org-dashboard.component.scss'],
})
export class OrgDashboardComponent implements OnInit {
  constructor(
    private orgService: OrgService,
    private authService: AuthService
  ) {}
  org: Org;
  editable: boolean = false;
  ngOnInit(): void {
    // this.org = this.orgService.getOrgById(id)
  }
  onSubmit(form: NgForm) {
    // this.orgService.updateOrg(this.org._id, this.org)
  }
}
