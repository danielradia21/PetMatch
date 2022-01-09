import { Component, OnInit } from '@angular/core';
import { animals } from 'src/app/models/pet.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';



@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss'],
})
export class AddPetComponent implements OnInit {
  myForm: FormGroup;
  disabled = false;
  ShowFilter = true;
  limitSelection = false;
  animals: Array<string> = [];
  selectedItems: Array<object> = [];
  dropdownSettings:IDropdownSettings = {};
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.animals = [...animals];
    // this.selectedItems = [...user.prefs.breeds];
    this.selectedItems=[]
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit:10,
      allowSearchFilter: this.ShowFilter,
    };

    // this.myForm = this.fb.group({
    //   city: [this.selectedItems],
    // });
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }
  // toogleShowFilter() {
  //   this.ShowFilter = !this.ShowFilter;
  //   this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
  //     allowSearchFilter: this.ShowFilter,
  //   });
  // }

  // handleLimitSelection() {
  //   if (this.limitSelection) {
  //     this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
  //       limitSelection: 2,
  //     });
  //   } else {
  //     this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
  //       limitSelection: null,
  //     });
  //   }
  // }
}
