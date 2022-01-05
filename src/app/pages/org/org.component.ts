import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrgService } from 'src/app/services/org/org.service';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss'],
})
export class OrgComponent implements OnInit {

  constructor(private orgService: OrgService) { }
  onSubmit(form: NgForm) {
    this.orgService.newOrg(form.value)
  }
  ngOnInit(): void {
  }

}
