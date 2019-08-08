import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EntityService } from 'src/app/_serives/entity.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  createCompanyForm: FormGroup;
  submitted: boolean= false;
  companyList: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entityService: EntityService
  ) { }
  vodafoneMarkets: Array<any> = [];
  CompanyIdExistError: boolean = false;

  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group({
      companyId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
  
      
    });
    this.getCompany();

    
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
  getCompany() {
    this.entityService.getAllCompany().subscribe(res => {
      if (res['statusCode'] == 202) {
        this.companyList = res['data']['companies'];
      }
    }, err => {

    });
  }
}
