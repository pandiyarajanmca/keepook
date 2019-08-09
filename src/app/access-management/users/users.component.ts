import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, from } from 'rxjs';
import { EntityService } from '../../_serives/entity.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  createUsersForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entityService: EntityService
  ) { }




  ngOnInit() {

  
    this.createUsersForm = this.formBuilder.group({
      usersName: ['', Validators.required],
      website: ['', Validators.required],
      logo: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      contactPerson: ['', Validators.required],
    });

    this.createUsersForm.controls['usersName'].valueChanges.subscribe(val => {
      // this.createUsersForm.controls['location'].setValidators([Validators.required]);
      // this.createUsersForm.controls['location1'].setValidators([Validators.required]);

    });
    // this.fileUpload1.resetFileUpload();
  }

  DocUpload(e) {
    console.log(e);
  }


  createUsersSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createUsersForm.invalid) {
      return;
    }

    else {
      console.log(this.createUsersForm.value);

      // this.entityService.saveNewUsers(this.createUsersForm.value).subscribe(res => {
      //   console.log(res);
      // }, err => {
      //   console.log(err);
      // })
    }

  }

  get fConrols() { return this.createUsersForm.controls; }

  checkUsersIdExist() {
    if (this.createUsersForm.value.UsersId) {
      const UsersId = this.createUsersForm.value.UsersId;
      //  this.dashboardService.checkExist(UsersId).subscribe(data => {
      //     if (data['status']) {
      //       this.UsersIdExistError = true;
      //     } else {
      //       this.UsersIdExistError = false;
      //     }
      //     console.log("Hello "+this.UsersIdExistError);
      //  }, err => {
      //   // TODO need to include generic handlerror method
      //  });
    }

  }
}