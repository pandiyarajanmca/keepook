import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, from } from 'rxjs';
import { EntityService } from '../../_serives/entity.service';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  createCompanyForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entityService: EntityService
  ) { }




  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      organisationUnitId: ['', Validators.required],
      
    });

    this.createCompanyForm.controls['companyName'].valueChanges.subscribe(val => {
      // this.createCompanyForm.controls['location'].setValidators([Validators.required]);
      // this.createCompanyForm.controls['location1'].setValidators([Validators.required]);

    });

  }


  createCompanySubmit() {
    this.submitted = true;

    console.log(this.createCompanyForm.controls.value);
    console.log(this.createCompanyForm.invalid);

    // stop here if form is invalid
    if (this.createCompanyForm.invalid) {
      return;
    }

    else {
      this.entityService.saveNewCompany(this.createCompanyForm.value).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    }

    // display form values on success
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.createCompanyForm.value, null, 4));
  }

  get fConrols() { return this.createCompanyForm.controls; }

  checkCompanyIdExist() {
    if (this.createCompanyForm.value.CompanyId) {
      const CompanyId = this.createCompanyForm.value.CompanyId;
      //  this.dashboardService.checkExist(CompanyId).subscribe(data => {
      //     if (data['status']) {
      //       this.CompanyIdExistError = true;
      //     } else {
      //       this.CompanyIdExistError = false;
      //     }
      //     console.log("Hello "+this.CompanyIdExistError);
      //  }, err => {
      //   // TODO need to include generic handlerror method
      //  });
    }

  }
}
