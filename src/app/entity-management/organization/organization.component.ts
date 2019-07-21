import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  createCompanyForm: FormGroup;
  submitted: boolean= false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }
  vodafoneMarkets: Array<any> = [];
  CompanyIdExistError: boolean = false;

  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      location1: ['', Validators.required],
      logo: ['', Validators.required],
      companyAddress: ['', Validators.required],
      // position: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      // country: [''],
      phoneNumber: ['', Validators.required],      
      contactPerson: ['', Validators.required],
    });

    this.createCompanyForm.controls['companyName'].valueChanges.subscribe(val => {  
        // this.createCompanyForm.controls['location'].setValidators([Validators.required]);
        // this.createCompanyForm.controls['location1'].setValidators([Validators.required]);
       
  });

  }
  
  
  createCompanySubmit() {
    this.submitted = true;
   
    console.log(this.createCompanyForm.controls);
    console.log(this.createCompanyForm.invalid);

    // stop here if form is invalid
    if (this.createCompanyForm.invalid) {
        return;
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
